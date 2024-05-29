const logic = {}

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const USERNAME_REGEX = /^[a-zA-Z0-9-_]+$/
const PASSWORD_REGEX = /^[a-zA-Z0-9-_$%&=\[\]\{\}\<\>\(\)]{4,}$/

const NAME_REGEX = /^[a-zA-Z=\[\]\{\}\<\>\(\)]{1,}$/

logic.registerUser = (name, surname, email, username, password, passwordRepeat, callback) => {
  if (!NAME_REGEX.test(name))
    throw new ContentError('❌ name is not valid ❌')

  if (!NAME_REGEX.test(surname))
    throw new ContentError('❌ surname is not valid ❌')

  if (!EMAIL_REGEX.test(email)) {
    throw new ContentError("❌ Email is not valid ❌")
  }

  if (!USERNAME_REGEX.test(username)) {
    throw new ContentError("❌ Username is not valid ❌")
  }

  if (!PASSWORD_REGEX.test(password)) {
    throw new ContentError("❌ Password is not valid ❌")
  }

  if (password !== passwordRepeat) {
    throw new MatchError("❌ Password don't match ❌")
  }


  const xhr = new XMLHttpRequest
  xhr.onload = () => {
    debugger

    if (xhr.status === 201) {
      callback(null)
      console.log('user registered')
      return
    }
    const { error, message } = JSON.parse(xhr.response)

    const constructor = errors[error]

    callback(new constructor(message))
  }

  xhr.open('POST', 'http://localhost:8080/users')

  const body = { name, surname, email, username, password, passwordRepeat }

  const json = JSON.stringify(body)

  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(json)
}

logic.loginUser = (username, password, callback) => {

  if (!USERNAME_REGEX.test(username)) {
    throw new ContentError("❌ Username is not valid ❌")
  } // Comprobamos si el usuario introduce correctamente los caracteres para no cargar con peticiones al servidor

  if (!PASSWORD_REGEX.test(password)) {
    throw new ContentError("❌ Password is not valid ❌")
  }

  const xhr = new XMLHttpRequest
  xhr.onload = () => {

    if (xhr.status === 200) {
      sessionStorage.username = username

      callback(null)
      console.log('user logged in')
      return

    }

    const { error, message } = JSON.parse(xhr.response)

    const constructor = errors[error]

    callback(new constructor(message))
  }

  xhr.open('POST', 'http://localhost:8080/users/auth')
  const body = { username, password }

  const json = JSON.stringify(body)

  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(json)
}


logic.isUserLoggedIn = () => {
  // if (sessionStorage.username)
  //     return true

  // return false

  // return sessionStorage.username ? true : false

  return !!sessionStorage.username
}

logic.logetUser = () => {
  delete sessionStorage.username
}

logic.getName = () => {
  // let user = data.findUser((user) => {
  //   return user.username === sessionStorage.username
  // })

  // return user.name
}

logic.getUserName = () => {
  let user = data.findUser((user) => {
    return user.username === sessionStorage.username
  })

  return user.username
}

logic.logoutUser = () => {
  delete sessionStorage.username
}

logic.getAllPosts = (callback) => {

  const xhr = new XMLHttpRequest
  xhr.onload = () => {

    if (xhr.status === 200) {
      const posts = JSON.parse(xhr.response)

      callback(null, posts)
      return

    }
    const { error, message } = JSON.parse(xhr.response)

    const constructor = errors[error]

    callback(new constructor(message))
  }

  xhr.open('GET', 'http://localhost:8080/posts')
  xhr.send()
}

logic.createPost = (title, image, description, callback) => {
  if (typeof title !== "string" || !title.length || title.length > 30) {
    throw new ContentError("Title is not valid")
  }

  if (typeof image !== "string" || !image.startsWith("http")) {
    throw new ContentError("Image is not valid")
  }

  if (typeof description !== "string" || !description.length || description.length > 600) {
    throw new ContentError("Description is not valid")
  }


  const xhr = new XMLHttpRequest
  xhr.onload = () => {

    if (xhr.status === 201) {

      callback(null)

      return
    }
    const { error, message } = JSON.parse(xhr.response)

    const constructor = errors[error]

    callback(new constructor(message))
  }

  xhr.open('POST', 'http://localhost:8080/posts')
  xhr.setRequestHeader("Authorization", `Basic ${sessionStorage.username}`)
  xhr.setRequestHeader('Content-Type', 'application/json')

  const body = {
    title: title,
    image: image,
    description: description,

  };

  const json = JSON.stringify(body)
  xhr.send(json)
}


logic.getLoggedInUsername = () => { return sessionStorage.username }

logic.deletePost = id => data.deletePost(post => post.id === id)