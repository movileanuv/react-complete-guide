import './App.css';
import UserCreateForm from "./components/UserCreateForm";
import UserList from "./components/UserList";
import {useState} from "react";

function App() {
  const [usersList, setUsers] = useState([])

  function addUser(name, age) {
    setUsers(users => [...users, {name: name, age: age}])
  }

  return (
    <div>
      <UserCreateForm addUser={addUser}></UserCreateForm>
      <UserList usersList={usersList}></UserList>
    </div>
  );
}

export default App;
