import React from "react";
import "./Introduce.scss";
const Introduce = () => {
  return (
    <div className="introduce">
      <h1>自己紹介</h1>
      <div className="introduce__card">
        <img
          className="introduce__card__myIcon"
          src="images/myIcon.jpg"
          alt="アイコン"
        />
        <div className="introduce__card__sentence">
          <h3 className="introduce__card__sentence__name">糸山弘海</h3>
          <p>会津大学学部２年</p>
          <p>フロントエンド学習中</p>
          <p>techtrainでRank4を目指しています！</p>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
