import { useEffect, useState } from "react";
import style from "../css/User.module.css";
import Header from "./Header";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [image, setImage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users || []);
      })
      .catch((error) => console.error(error));
    setImage(sessionStorage.getItem("image"));
  }, []);

  const filteredUser = users.filter((product) =>
    product.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className={style.containerTitle}>
        <h2>Usuarios</h2>
      </div>
      <div className={style.containerFilter}>
        <input className={style.containerFilterInput} 
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="buscar usuario" />
      </div>
      <div className={style.container}>
        {Array.isArray(users) &&
          filteredUser.map((user) => (
            <div key={user.id} className={style.item}>
              <img src={user.image} alt={user.image} />
              <p className={style.detail}>
                {user.firstName} {user.lastName}
              </p>
              <p className={style.detail}>{user.email}</p>
              <p className={style.detail}>{user.username}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default UserList;
