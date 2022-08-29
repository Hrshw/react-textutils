import { useState } from "react";
import About from "./components/About";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm"; 
import { BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmod] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmod("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode is Enabled", "success");
      //  setInterval(() => {
      //    document.title="Textutile is best site"
      //  }, 2000);
    } else {
      setmod("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    } //setInterval(() => {
    //   document.title="Textutile is best"
    // }, 1500);
  };

  return ( 
      <><Router>
        <Navbar
         title="Text-Utils"
          home="HOME"
          About="ABOUTUS"
          contactUs="CONTACTUS"
            toggleMode={toggleMode}  mode={mode}/>
             <Alerts alert={alert}/>
     <div className="container">
     <Switch>
       <Route path={"/"} exact> <TextForm heading="Enter text" mode={mode}/>  </Route>
       <Route path={"/about"} exact>  <About /> </Route>
     </Switch>
        </div>  
        </Router>
        </>
  );
}

export default App;
