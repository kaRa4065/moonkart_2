import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PrivateRoute from "./PrivateRoute";
import PublicRout from "./PublicRout";
import { isLoggedIn } from "./components/utils";


function App() {
  //emailorPhone value needed fo two componentss
  const [emailorPhone, setEmailorPhone] = useState("");
  return (
    <div className="App">
      {isLoggedIn() ? (
        <PrivateRoute />
      ) : (
        <PublicRout
          emailorPhone={emailorPhone}
          setEmailorPhone={setEmailorPhone}
        />
      )}
    </div>
  );
}

export default App;
