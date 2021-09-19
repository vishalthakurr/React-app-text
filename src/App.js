import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
// import About from "./component//About";
import React, { useState } from 'react'
import Alert from "./component/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";





// let name = "Vishal thakur"
function App() {

  const [mode, modestate] = useState('light')
  const [alert, setalert] = useState(null)



  const showalert = (meassage, type) => {

    setalert({
      msg: meassage,
      type: type
    })

    setTimeout(() => {
      setalert(null);
    }, 2000);

  }


  const toggleMode = () => {

    if (mode === 'light') {
      modestate("dark")
      document.body.style.backgroundColor = '#213a5d'
      showalert("Dark mode has been enable", "success")
    }
    else {
      modestate("light")
      document.body.style.backgroundColor = 'white'
      showalert("light mode has been enable", "success")
    }

  }


  return (
    <>
      {/* <Router> */}
        <Navbar title="vishal  Thakur" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/>   */}

        <Alert alert={alert} />

        <div className="container  my-3">
          {/* <Switch>
            <Route exact path="/about">
              <About  />
              
            </Route> */}

            {/* <Route exact path="/"> */}
              <TextForm showalert={showalert} heading=" Somthing write in the Textarea" mode={mode} />

            {/* </Route>
          </Switch> */}
        </div>

        {/* <About /> */}
      {/* </Router> */}
    </>
  );
}

export default App;
