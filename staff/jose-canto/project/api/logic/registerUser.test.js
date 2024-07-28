import "dotenv/config"
import mongoose from "mongoose"
import registerUser from "./registerUser.js"

const { MONGODB_URL_TEST } = process.env

mongoose.connect(MONGODB_URL_TEST)
  .then(() => {

    try {
      registerUser("Jack Sparrow", "Jack", "jack@email.es", "1234", "1234")
        .then(() => {
          console.log("User Created")
        })
        .catch(error => console.error(error))

    } catch (error) {
      console.error(error)
    }
  })
  .catch(error => console.error(error))