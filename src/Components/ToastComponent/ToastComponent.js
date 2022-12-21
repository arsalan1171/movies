import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const ToastComponent = (props) => {
    return (
        <ToastContainer position="middle-end">
        <Toast
          className="float-right"
          show={props.toast}
          onClose={props.toggleShowToast}
          bg="success"
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
            <Toast.Body>{props.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    )
}

export default ToastComponent;