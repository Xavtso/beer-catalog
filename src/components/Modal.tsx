import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ModalProps {
  onClose: () => void; 
}

export default function Modal({ onClose }: ModalProps) {
    function handleClose() {
        onClose();
    }


  return (
    <div className="overflow" onClick={handleClose}>
      <div className="modal">
        <p className="closeIcon" onClick={handleClose}>
          <FontAwesomeIcon icon={faXmark} onClick={handleClose} />
        </p>
        <h2 className="modalTitle">Message sent succesful</h2>
        <h3 className="modalSubtitle">Thanks for your feedback❤️</h3>
      </div>
    </div>
  );
}
