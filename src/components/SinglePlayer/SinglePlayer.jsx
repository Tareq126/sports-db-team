import React from "react";
import "./SinglePlayer.css";

const SinglePlayer = ({ player, cart, setCart }) => {
  const { strPlayer, idPlayer, strCutout } = player;

  const handleAddToCart = () => {
    const info = {
      strPlayer,
      idPlayer,
      strCutout,
      price: 125,
    };

    if (cart?.length) {
      setCart([...cart, info]);
      return;
    } else {
      setCart([info]);
      return;
    }
  };

  const handleBookmark = () => {
    const info = {
      strPlayer,
      idPlayer,
      strCutout,
      price: 125,
      bookmark: "true",
    };
    const prevBookmark = localStorage.getItem("bookmark");
    const oldBookmark = JSON.parse(prevBookmark);
    if (oldBookmark) {
      const isExist = oldBookmark.find((p) => p.idPlayer === idPlayer);
      if (isExist) {
        alert("Already Bookmarked");
        return;
      } else {
        localStorage.setItem(
          "bookmark",
          JSON.stringify([...oldBookmark, info])
        );
      }
    } else {
      localStorage.setItem("bookmark", JSON.stringify([info]));
    }
  };

  return (
    <div className="card" data-aos="zoom-in">
      <img className="player-img" src={strCutout} alt="" />
      <h6>{strPlayer}</h6>
      <button className="card-btn">Details</button>
      <button onClick={handleAddToCart} className="card-btn">
        Add To Cart
      </button>
      <button onClick={handleBookmark} className="card-btn">
        Bookmark
      </button>
    </div>
  );
};

export default SinglePlayer;
