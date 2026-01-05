import Styles from "../Styles/HomePage.module.css"
import Header from "../components/header.tsx"
import MiddleScreen from "../components/HomePageMiddle.tsx"
import LeftScreen from "../components/HomePageLeft.tsx" 
import RigthScreen from "../components/HomePageRigth.tsx"

const HomePage = () => {
    return(
        <div className={Styles.homepage}>
            <Header/>
            <div className={Styles.MainContent}>
                <LeftScreen/>
                <MiddleScreen/>
                <RigthScreen/>
            </div>
        </div>
    )
}

export default HomePage;