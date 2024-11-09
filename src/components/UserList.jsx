// src/components/UserList.js
import { useEffect, useState } from 'react';
import { getUsers } from '../services/api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Usuarios</h2>
      {users.map(user => (
        <div key={user.id}>
          <img src={user.photo} alt={user.name} />
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
