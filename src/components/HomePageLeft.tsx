import Styles from "../Styles/HomePageLeft.module.css";
import { VscSearch } from "react-icons/vsc";
import { useRef, useState } from "react";
import { MdCancel } from "react-icons/md";
import MjAlbum from "../assets/MJ_Album.png"

const LibraryCard = () =>{
    return(
        <div className={Styles.LibraryCard}>
            <img src={MjAlbum} alt="MJ Icon" />
            <div className={Styles.SongInfo}>
                <h5>Song Name</h5>
                <p>Artist Name</p>
            </div>
        </div>
    )
}

const LeftScreen = () => {
  const inputFocus = useRef<HTMLInputElement>(null);
  const [initialValue, currentValue] = useState("");

  function FocusInput() {
    inputFocus.current?.focus();
  }

  function InputValue(e: React.ChangeEvent<HTMLInputElement>) {
    currentValue(e.target.value);
  }

  return (
    <div className={Styles.LeftContainer}>
      <h6>Your library</h6>
      <div className={Styles.SearchBar}>
        <button onClick={FocusInput}>
          <VscSearch className={Styles.MagnifierIcon} />
        </button>
        <input
          ref={inputFocus}
          onChange={InputValue}
          value={initialValue}
          type="text"
          placeholder="Look for a song"
        />
        {initialValue && (
          <button
            onClick={() => {
              currentValue("");
            }}
            title="Clear"
          >
            <MdCancel />
          </button>
        )}
      </div>
      <LibraryCard/>
    </div>
  );
};

export default LeftScreen;
