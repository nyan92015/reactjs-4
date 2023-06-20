import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">自己紹介サイト</div>
      <nav className="header__nav">
        <ul>
          <li>
            <a href="https://github.com/nyan92015">Gtihub</a>
          </li>
          <li>
            <a href="https://qiita.com/nyan92015">Qiita</a>
          </li>
          <li>
            <a href="https://atcoder.jp/users/hack122621">Atcoder</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
