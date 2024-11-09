import style from "../css/Modal.module.css";

const Modal = ({ isOpen, onClose, movie, url }) => {
  if (!isOpen) return null;

  return (
    <div className={style.modalOverlay}>
      <div className={style.modal}>
        <h2 className={style.title} >Detalle pelicula</h2>
        <h2 className={style.tittleMovie} >{movie}</h2>
        <p>URL: <a href={url} target="_blank" >{url}</a></p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
