import React from "react";
import axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3001/getUsers").then((res) => {
      setListOfUsers(res.data);
    });
  }, []);
  return (
    <center>
      <h1>Mern App Users</h1>
      <h2>List of Users </h2>
      {listOfUsers.map((user) => {
        return (
          <>
            <h3>Name : {user.name}</h3>
            <h3>Age : {user.age}</h3>
          </>
        );
      })}
    </center>
  );
}

export default App;
