import React, { useState, useEffect } from 'react';
import PhotoList from './PhotoList';
import './AlbumList.css'; 

const AlbumList = ({ userId }) => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, [userId]);

  function handlePhotosClick(albumId) {
    setSelectedAlbumId(albumId);
  }

  return (
    <div className="album-list-container">
      <h2>Альбоми</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <div className="album-info">
              <span>{album.title}</span>
              <button onClick={() => handlePhotosClick(album.id)}>Photos</button>
            </div>
            {selectedAlbumId === album.id && <PhotoList albumId={selectedAlbumId} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;