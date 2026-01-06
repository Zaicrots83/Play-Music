import Styles from "../Styles/HomePageBottom.module.css"
import MjAlbum from "../assets/MJ_Album.png"
import { CiShuffle } from "react-icons/ci";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { CiRepeat } from "react-icons/ci";
import { FaVolumeUp } from "react-icons/fa";
import JJKSong from "../assets/Audios/Test-song.mp3"

const HomePageBottom = () => {

    return(
        <div className={Styles.Bottom}>
            <div className={Styles.SongInfo}>
                <img src={MjAlbum} alt="Song Image" />
                <h6>Song Name</h6>                
            </div>
            <div className={Styles.MusicPlaying}>
                <div className={Styles.ButtonsSection}>
                    <button title="Shuffle" className={Styles.Shuffle}><CiShuffle/></button>
                    <button title="Previous" className={Styles.Previous}><MdSkipPrevious/></button>
                    <button title="Play" className={Styles.MiddleButton}><FaPlay/></button>
                    <button title="Next" className={Styles.Next}><MdSkipNext/></button>
                    <button title="Repeat" className={Styles.Repeat}><CiRepeat/></button>
                </div>
                <div className={Styles.BarSection}>
                    <p>0:00</p>
                    <div className={Styles.EmptyBar}>
                        <div className={Styles.FullBar}></div>
                    </div>
                    <p>0:00</p>
                </div>
            </div>
            <div className={Styles.Volume}>
                <button><FaVolumeUp/></button>
                <div className={Styles.EmptyVolume}>
                    <div className={Styles.FullVolume}></div>
                </div>
            </div>
        </div>
    )
}

export default HomePageBottom;