import errors from "com/errors"
import validate from "com/validate"

const loginUser = (username, password, callback) => {
  validate.username(username)
  validate.password(password)

  if (typeof callback !== "function")
    throw new TypeError("callback is not a function")

  const xhr = new XMLHttpRequest
  xhr.onload = () => {

    if (xhr.status === 200) {
      //sessionStorage.username = username

      const token = JSON.parse(xhr.response)

      sessionStorage.token = token

      callback(null)
      console.log("user logged in")

      return
    }

    const { error, message } = JSON.parse(xhr.response)

    const constructor = errors[error]

    callback(new constructor(message))
  }

  xhr.open("POST", "http://localhost:8080/users/auth")
  const body = { username, password }

  const json = JSON.stringify(body)

  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.send(json)
}

export default loginUser