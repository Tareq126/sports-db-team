import React, { useEffect, useState } from "react";
import "./Home.css";
import Players from "../Players/Players";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${search}`
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data?.player));
  }, [search]);

  const handleDelete = (id) => {
    const remainingPlayer = cart.filter(
      (playerInfo) => playerInfo.idPlayer !== id
    );
    setCart(remainingPlayer);
    toast.success("Deleted from cart !", {
      position: "top-right",
      autoClose: 1200,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div>
      <div className="home-container">
        <div className="all-players">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="search-input"
          />
          <button className="btn-search">Search</button>
          <div className="players-container">
            <Players players={players} cart={cart} setCart={setCart}></Players>
          </div>
        </div>

        {/* players cart starts here */}
        <div className="players-cart">
          <div className="cart">
            <p>Players Cart</p>
            {cart.map((playerInfo) => (
              <div className="cart-info-container">
                <li>{playerInfo.strPlayer}</li>
                <button
                  onClick={() => handleDelete(playerInfo.idPlayer)}
                  className="delete-btn"
                >
                  x
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
