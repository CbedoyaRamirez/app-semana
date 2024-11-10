import { useState } from "react";
import sytle from "../css/PostList.module.css";
import Modal from "./Modal";
import StarRating from "./StarRating";

const Post = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };


  const goToPostDetails = () => {
    openModal();
  };

  const goToPage = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={sytle.item}>
      <h2 className={sytle.itemTitle}>{post.title}</h2>
      <div className={sytle.containerButton} >
        <button
          className={sytle.buttonPage}
          onClick={() => goToPage(post.image)}
        >
          Ver Imagen
        </button>
        <button className={sytle.buttonView} onClick={goToPostDetails}>
          Ver detalles
        </button>
      </div>
      <StarRating totalStars={5} />
      <Modal isOpen={isModalOpen}  onClose={closeModal} movie={post.title} url={post.image} />
    </div>
  );
};

export default Post;
