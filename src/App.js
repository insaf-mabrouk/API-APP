import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import UserCard from "./UserCard";


function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  });

  return (
    <div className="App">
      <div className="cardApp">
        {user.map((el) => (
          
            <UserCard user={el} />
          
        ))}
      </div>
    </div>
  );
}

export default App;
