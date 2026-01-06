import Styles from "../Styles/HomePageMiddle.module.css";
import ImageTest from "../assets/sukuna.jpg";
import { FaPlay } from "react-icons/fa";


const Card = () => {
  return (
    <div className={Styles.CardSong}>
      <div className={Styles.SongInfo}>
        <img src={ImageTest} alt="Song image" />
        <p>Song Name</p>
      </div>
      <button><FaPlay/></button>
    </div>
  );
};

const MiddleScreen = () => {
  return (
    <div className={Styles.MiddleElement}>
      <div className={Styles.AudioOptions}>
        <button>All</button>
        <button>Music</button>
        <button>Podcast</button>
      </div>
      <div className={Styles.RecentSongs}>
        <Card />
      </div>
    </div>
  );
};

export default MiddleScreen;
