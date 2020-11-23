import { useEffect, useState } from "react";
import API from "../../util/API";
import Timer from "../Timer";
import AboutUs from "../AboutUs";
import "./styles.css";


function HomePage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    API.getPublicExample().then((response) => {
      setData(response.data);
    });
  }, []);
  return (
      <Timer />

      <AboutUs />
      
    </div>
  );
}
export default HomePage;
