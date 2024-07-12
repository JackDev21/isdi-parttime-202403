import authenticaterUserHandler from "./authenticateUserHandler.js"
import registerUserHandler from "./registerUserHandler.js"
import getUserNameHandler from "./getUserNameHandler.js"

import getAllPostsHandler from "./getAllPostsHandler.js"
import createPostHandler from "./createPostHandler.js"
import deletePostHandler from "./deletePostHandler.js"
import toggleLikePostHandler from "./toggleLikePostHandler.js"
import getPostCommentsHandler from "./getPostCommentsHandler.js"
import createPostCommentHandler from "./createPostCommentHandler.js"


const routeHandler = {
  registerUserHandler,
  authenticaterUserHandler,
  getUserNameHandler,

  getAllPostsHandler,
  createPostHandler,
  deletePostHandler,
  toggleLikePostHandler,
  getPostCommentsHandler,
  createPostCommentHandler,
}

export default routeHandler