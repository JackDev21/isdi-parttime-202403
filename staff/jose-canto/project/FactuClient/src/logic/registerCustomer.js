import validate from "com/validate.js"
import errors, { SystemError } from "com/errors.js"

const registerCustomer = (username, companyName, email, password, taxId, address, phone) => {
  validate.username(username)
  validate.companyName(companyName)
  validate.email(email)
  validate.password(password)
  validate.taxId(taxId)
  validate.address(address, address)
  validate.phone(phone)

  const body = { username, companyName, email, password, taxId, address, phone }

  return fetch(`${import.meta.env.VITE_API_URL}/customers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${sessionStorage.token}`
    },
    body: JSON.stringify(body)
  })
    .catch(() => { throw new SystemError("connection error") })
    .then(response => {
      if (response.status === 201) {
        console.log("customer registered")
        return
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

export default registerCustomer