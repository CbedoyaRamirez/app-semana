import { useEffect, useState } from "react";
import style from "../css/Starts.module.css";
import ConfettiExplosion from "react-confetti-explosion";
import Confetti from "react-confetti";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [isExploding, setIsExploding] = useState(false);

  const handleClick = (index) => {
    setIsExploding(true);
    setRating(index + 1);
    console.log(isExploding);
  };

  useEffect(() => {
    isExploding && setTimeout(() => {
        setIsExploding(false);
    }, 4000);
  }, [isExploding])

  return (
    <div className={style.container}>
      {isExploding && <Confetti />}

      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          selected={index < rating}
          onClick={() => handleClick(index)}
        />
      ))}
      <p>
        Calificación: {rating} de {totalStars}
      </p>
    </div>
  );
};

const Star = ({ selected = false, onClick }) => (
  <span
    onClick={onClick}
    style={{
      cursor: "pointer",
      color: selected ? "#FFE6A6" : "#e4e5e9",
      fontSize: "34px",
    }}
  >
    ★
  </span>
);

export default StarRating;
