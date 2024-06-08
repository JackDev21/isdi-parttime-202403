import Form from "../core/Form"
import "./FormWithFeedback.css"

function FormWithFeedback({ className, onSubmit, children }) {
	return (
		<>
			<Form className="FormWithFeedback" onSubmit={onSubmit}>
				{children}
			</Form>
		</>
	)
}

export default FormWithFeedback
