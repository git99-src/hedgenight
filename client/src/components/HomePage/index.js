import "./styles.css";
import Timer from "../Timer";
import AboutUs from "../AboutUs";
import LoginPage from "../LoginPage";
import { useAuth } from "../../util/authContext"
import RecentHistory from "../RecentHistory";
import 'bootstrap/dist/css/bootstrap.css';
import TimerText from "../TimerText";

function HomePage(props) {
  const { isLoggedIn } = useAuth()

  return (
    <div className="row">
    <div className={!isLoggedIn ? "col-8 timer mx-auto" : "col-4 timer mx-auto"}>
      <Timer useTimer={props.useTimer}/>
      </div>
      
      {isLoggedIn && <div className="col-4 mx-auto"> <AboutUs /></div>}  
      
      <div className="col-4 mx-auto">
        {isLoggedIn ? <RecentHistory /> : <LoginPage />}
      </div>
    </div>
  );
}
export default HomePage;
