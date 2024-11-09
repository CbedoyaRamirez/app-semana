/* eslint-disable react/prop-types */
import { useState } from "react";
import sytle from "../css/PostList.module.css";
import Modal from "./Modal";
import StarRating from "./StarRating";

const Post = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para manejar la visibilidad de la Modal

  const openModal = () => {
    setIsModalOpen(true); // Abre la modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cierra la modal
  };


  const goToPostDetails = () => {
    //history.push(`/post/${post.id}`);
    openModal();
  };

  const goToPage = (url) => {
    //history.push(`/post/${post.id}`);
    window.open(url, "_blank");
  };

  return (
    <div className={sytle.item}>
      <h2 className={sytle.itemTitle}>{post.movie}</h2>
      <div className={sytle.containerButton} >
        <button
          className={sytle.buttonPage}
          onClick={() => goToPage(post.imdb_url)}
        >
          Ver Pagina web
        </button>
        <button className={sytle.buttonView} onClick={goToPostDetails}>
          Ver detalles
        </button>
      </div>
      <StarRating totalStars={5} />
      <Modal isOpen={isModalOpen}  onClose={closeModal} movie={post.movie} url={post.imdb_url} />
    </div>
  );
};

export default Post;
