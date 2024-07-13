import "dotenv/config"
import logic from "../logic/index.js"
import jwt from "../utils/jsonwebtoken-promised.js"


const { JWT_SECRET } = process.env

const authenticaterUserHandler = (req, res, next) => {
  try {
    const { username, password } = req.body


    logic.authenticateUser(username, password)
      .then((userId) => {
        jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: "7d" })
          .then((token) => {
            res.json(token)
            console.log(`User ${username} authenticated`)
          })
          .catch((error) => next(error))
      })
      .catch((error) => next(error))
  } catch (error) {
    next(error)
  }
}

export default authenticaterUserHandler