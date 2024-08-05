import { useEffect, useState } from 'react';

const CameraList = () => {
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    const fetchCameras = async () => {
      const response = await fetch('/api/cameras');
      if (response.ok) {
        const data = await response.json();
        setCameras(data);
      } else {
        alert('Failed to fetch cameras. Please log in again.');
        window.location.href = '/login';
      }
    };

    fetchCameras();
  }, []);

  return (
    <div>
      {cameras.map((camera) => (
        <div key={camera.id}>{camera.name}</div>
      ))}
    </div>
  );
};

export default CameraList;
