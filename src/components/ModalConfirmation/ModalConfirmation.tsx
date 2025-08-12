import './ModalConfirmation.css'

export default function ModalConfirmation({ text="Вы уверены?", onCancel, onConfirmation }) {
return (
    <div className="modal-overlay">
        <div className="modal-confirmation">
            <h3>{text}</h3>
            <div className="modal-buttons-confirmation-container">
                <button
                    className="modal-button cancel"
                    onClick={onCancel}
                >
                    Отмена
                </button>

                <button 
                    className="modal-button apply"
                    onClick={onConfirmation}
                >
                    Подтвердить
                </button>
            </div>
        </div>
    </div>
)
}