import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";
import "./components/HomePage/styles.css";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Navbar from "./components/Navbar";
import HistoryCard from "./components/History"
import ProtectedExamplePage from "./components/ProtectedExamplePage";
import { ProvideAuth } from "./util/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Logo from "./components/Logo/hedgenightlogo.png"
import GoT from "./components/GoTblock";
import Footer from "./components/Footer";


function App() {
  return (
    <ProvideAuth>
      <Router>
      <div className="row align-items-center"> 
      <div className="col-8 float-left">
      <img src={Logo} alt="hedgenight" /></div>
      <div className="col-4 float-right">
        <GoT /></div>
        </div> 
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <ProtectedRoute path="/protected/example">
            <ProtectedExamplePage />
          </ProtectedRoute>
          <ProtectedRoute path="/protected/History">
            <HistoryCard />
          </ProtectedRoute>
        </Switch>
      </Router><Footer /> 
    </ProvideAuth>
  );
}

export default App;
