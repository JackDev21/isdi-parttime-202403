import { useState } from "react"
import logic from "../../../logic"

import FormWithFeedback from "../../library/FormWithFeedback"
import Button from "../../core/Button"

import "./CreateComment.css"

function CreateComment({ onCancelCreatedCommentClick, onCommentCreated, onClickScrollTop }) {
	console.log("CreateComment --> render")

	const [message, setMessage] = useState("")

	const handleCancelCommentClick = () => onCancelCreatedCommentClick()

	const handleCreateCommentSubmit = (event) => {
		event.preventDefault()

		const form = event.target

		const textComment = form.text.value

		try {
			logic.createComment(textComment, (error, newComment) => {
				if (error) {
					console.error(error.message)
					//alert(error.message)

					setMessage(error.message)
					setTimeout(() => setMessage(""), 2000)

					return
				}

				onCommentCreated(newComment)
				onClickScrollTop()
			})
		} catch (error) {
			console.error(error.message)
			//alert(error.message)

			setMessage(error.message)
			setTimeout(() => setMessage(""), 2000)
		}
	}

	return (
		<>
			<FormWithFeedback className="CreateComment" onSubmit={handleCreateCommentSubmit} message={message}>
				<label>Write a comment</label>
				<textarea className="TextArea" placeholder="bla... bla... bla..." id="text"></textarea>
				<Button className="Button SubmitButton" type="submit">
					Add Comment
				</Button>
				<i className="fa-regular fa-rectangle-xmark" onClick={handleCancelCommentClick}></i>
			</FormWithFeedback>
		</>
	)
}

export default CreateComment