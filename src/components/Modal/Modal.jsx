import "./Modal.css"
import cv from "../../assets/images/cv.png"

const Modal = () => {
	return (
		<>
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex={-1}
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">
								Resume
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<img src={cv} alt="" className="img-fluid d-block mx-auto" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal
