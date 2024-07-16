import "dotenv/config"
import logic from "../logic/index.js"
import jwt from "../utils/jsonwebtoken-promised.js"
import errorResponse from "../helper/errorResponse.js"
import { CredentialsError } from "com/errors.js"

const { JWT_SECRET } = process.env

export default (req, res) => {

  try {
    const token = req.headers.authorization.slice(7)

    jwt.verify(token, JWT_SECRET)
      .then((payload) => {
        const { sub: userId } = payload

        const { postId } = req.params

        try {
          logic.getPostComments(userId, postId)
            .then((comments) => {
              res.json(comments)
            })
            .catch((error) => {
              errorResponse(error, res)
            })
        } catch (error) {
          errorResponse(error, res)
        }
      })
      .catch((error) => errorResponse(new CredentialsError(error.message), res))
  } catch (error) {
    errorResponse(error, res)
  }
}

