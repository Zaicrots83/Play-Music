import IconPage from "../assets/icon_image.png";
import Styles from "../Styles/header.module.css";
import { useState } from "react";

const Header = () => {
  const [initialValue, currentValue] = useState("");

  function searchBarValue(e:React.ChangeEvent <HTMLInputElement>) {
    currentValue(e.target.value);
  }

  return (
    <header className={Styles.header}>
      <div className={Styles.icon}>
        <img title="Play Music" src={IconPage} alt="Icon" />
      </div>
      <div className={Styles.searchBox}>
        <button title="Home" className={Styles.HomeIcon}>
          𖠿
        </button>
        <div className={Styles.searchBar}>
          <label title="Search">
            🔎︎
            <input
              type="text"
              value={initialValue}
              onChange={searchBarValue}
              placeholder="What do you want to listen to?"
            ></input>
          </label>
          {
            initialValue && (
                <button title="Clear" onClick={()=>currentValue("")}>✖</button>
            )
          }
        </div>
      </div>
      <div className={Styles.options}>
        <button title="Download app">🡻</button>
        <button title="Notifications">🕭</button>
        <button title="Friends">𖨆𖨆</button>
      </div>
    </header>
  );
};

export default Header;
