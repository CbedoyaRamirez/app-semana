import { useEffect, useState } from "react";
import style from "../css/User.module.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users || []);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h2>Usuarios</h2>
      <div className={style.container}>
        {Array.isArray(users) &&
          users.map((user) => (
            <div key={user.id} className={style.item} >
              <img src={user.image} alt={user.image} />
              <p className={style.detail} >
                {user.firstName} {user.lastName}
              </p>
              <p className={style.detail} >{user.email}</p>
              <p className={style.detail} >{user.username}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default UserList;
