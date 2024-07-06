import errors, { SystemError } from "com/errors"
import validate from "com/validate"

const createPost = (title, image, description, callback) => {
  validate.text(title, "title", 30)
  validate.url(image, "image")
  validate.text(description, "description", 500)
  validate.callback(callback)

  fetch(`${import.meta.env.VITE_API_URL}/posts`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${sessionStorage.token}`,
      "content-Type": "application/json"
    },
    body: JSON.stringify({ title, image, description })
  })
    .then(response => {
      if (response.status === 201) {
        callback(null)
        return
      }

      return response.json()
        .then(body => {
          const { error, message } = body

          const constructor = errors[error]

          callback(new constructor(message))
        })
        .catch(error => callback(new SystemError(error)))
    })
    .catch(error => callback(new SystemError(error)))
}

export default createPost