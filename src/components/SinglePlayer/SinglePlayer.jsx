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
  console.log(cart);

  return (
    <div className="card" data-aos="zoom-in">
      <img className="player-img" src={strCutout} alt="" />
      <h6>{strPlayer}</h6>
      <button className="card-btn">Details</button>
      <button onClick={handleAddToCart} className="card-btn">
        Add To Cart
      </button>
      <button className="card-btn">Bookmark</button>
    </div>
  );
};

export default SinglePlayer;
