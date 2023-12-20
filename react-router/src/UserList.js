import React, { useState, useEffect } from 'react';
import AlbumList from './AlbumList';
import PhotoList from './PhotoList';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  function handleAlbumClick(userId) {
    setSelectedUserId(userId);
  }

  return (
    <div className="user-list-container">
      <h1>Список користувачів</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div className="user-info">
              <span>{user.name}</span>
              <button onClick={() => handleAlbumClick(user.id)}>Album</button>
            </div>
            {selectedUserId === user.id && (
              <AlbumList userId={selectedUserId} />
            )}
          </li>
        ))}
      </ul>
      {selectedUserId && <PhotoList />}
    </div>
  );
};

export default UserList;