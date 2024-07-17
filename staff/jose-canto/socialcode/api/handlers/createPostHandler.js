import "dotenv/config"
import logic from "../logic/index.js"
import jwt from "../utils/jsonwebtoken-promised.js"
import { CredentialsError } from "com/errors.js"

const { JWT_SECRET } = process.env

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.slice(7) // cabezera para la autenticacion del usuario

    jwt.verify(token, JWT_SECRET)
      .then((payload) => {
        const { sub: userId } = payload

        const { title, image, description, } = req.body

        try {
          logic.createPost(userId, title, image, description)
            .then(() => {
              res.status(201).send()
            })
            .catch(() => {
              next(error)
            })
        } catch (error) {
          next(error)
        }
      })
      .catch((error) => next(new CredentialsError(error.message)))
  } catch (error) {
    next(error)
  }
}