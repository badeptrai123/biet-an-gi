import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import "./RandomWheel.scss";
import P1 from "../../assets/p1.png";
import P2 from "../../assets/p2.png";
import P3 from "../../assets/p3.png";

const RandomWheel = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeIndex, setPrizeIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState([
    { option: "Pizza", image: P1, color: "#FF5733" },
    { option: "Sushi", image: P2, color: "#33FF57" },
    { option: "Burger", image: P3, color: "#3357FF" },
    { option: "Phở", image: P2, color: "#FF33A1" },
    { option: "Bún Bò", image: P3, color: "#FFC133" },
    { option: "Cơm Tấm", image: P1, color: "#33FFF3" },
    { option: "Lẩu", image: P2, color: "#9D33FF" },
    { option: "Salad", image: P3, color: "#FFD633" },
  ]);

  const handleSpinClick = () => {
    const newPrizeIndex = Math.floor(Math.random() * data.length);
    setPrizeIndex(newPrizeIndex);
    setMustSpin(true);
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const shuffleWheel = () => {
    const shuffledData = [...data].sort(() => Math.random() - 0.5);
    setData(shuffledData);
  };

  return (
    <div className="random-wheel-container">
      <h1>Vòng Quay May Mắn</h1>
      <div className="wheel-wrapper">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeIndex}
          data={data.map((item) => ({
            option: item.option,
            style: {
              backgroundColor: item.color,
              textColor: "#fff",
            },
          }))}
          outerBorderWidth={8} // Làm mỏng viền
          outerBorderColor="#fff" // Đổi màu viền
          radiusLineWidth={2}
          radiusLineColor="##3300FF"
          textColors={["#fff"]}
          fontSize={20}
          spinDuration={1}
          onStopSpinning={handleStopSpinning}
        />

      </div>
      <div className="button-container">
        <button onClick={shuffleWheel} className="shuffle-button">
          Trộn Lại
        </button>
        <button onClick={handleSpinClick} className="spin-button">
          Quay Ngay!
        </button>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>🎉 Chúc mừng bạn! 🎉</h2>
            <p>
              Bạn đã quay ra món: <strong>{data[prizeIndex].option}</strong>
            </p>
            <div className="popup-image-container">
              <img
                src={data[prizeIndex].image}
                alt={data[prizeIndex].option}
                className="popup-image"
              />
            </div>
            <button onClick={closePopup} className="close-button">
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomWheel;
