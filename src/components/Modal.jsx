import style from "../css/Modal.module.css";

const Modal = ({ isOpen, onClose, movie, url }) => {
  if (!isOpen) return null;

  return (
    <div className={style.modalOverlay}>
      <div className={style.modal}>
        <button onClick={onClose}>Cerrar</button>
        <h2 className={style.title}>Detalle producto</h2>
        <h2 className={style.tittleMovie}>{movie}</h2>
        <img src={url} width={150} ></img>
      </div>
    </div>
  );
};

export default Modal;
