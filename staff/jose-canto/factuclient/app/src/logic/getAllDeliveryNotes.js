import errors, { SystemError } from "com/errors.js"

const getAllDeliveryNotes = () => {
  return fetch(`${import.meta.env.VITE_API_URL}/delivery-notes`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.token}`
    }
  })
    .catch(() => { throw new SystemError("connection error") })
    .then(response => {
      if (response.status === 200) {
        return response.json()
          .catch(() => { throw new SystemError("connection error") })
          .then(deliveryNotes => deliveryNotes)
      }
      return response.json()
        .catch(() => { throw new SystemError("connection error") })
        .then(body => {
          const { error, message } = body
          const constructor = errors[error]
          throw new constructor(message)
        })
    })
}

export default getAllDeliveryNotes