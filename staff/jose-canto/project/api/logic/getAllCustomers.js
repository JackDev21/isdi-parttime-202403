import validate from "com/validate.js"
import { User } from "../model/index.js"
import { SystemError } from "com/errors.js"

const getAllCustomers = (userId) => {
  validate.id(userId)

  return User.findById(userId)
    .catch((error) => { throw new SystemError(error.message) })
    .then(user => {
      if (!user) {
        throw new SystemError("user not found")
      }

      return User.find({ manager: userId })
        .then((customerUsers) => {
          customerUsers.forEach(customerUser => {
            customerUser.id = customerUser._id.toString()
            delete customerUser._id
          })
          return customerUsers
        })
    })
}

export default getAllCustomers