import { User } from "../data/index.js"
import { MatchError, SystemError } from "com/errors.js"
import validate from "com/validate.js"

const getUserName = (userId, targetUserId) => {
  validate.id(userId, "userId")
  validate.id(targetUserId, "targetUserId")

  return User.findById(userId).lean()
    .catch(() => { throw new SystemError("connection error") })
    .then(user => {
      if (!user) {
        throw new MatchError("❌ User not found ❌")
      }

      return User.findById(targetUserId).lean()
        .catch(() => { throw new SystemError("connection error") })
        .then(user => {
          if (!user) {
            throw new MatchError("❌ targetUser not found ❌")
          }
          return user.name
        })
    })
}

export default getUserName