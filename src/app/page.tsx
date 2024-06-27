"use client"
import React, { useEffect } from 'react';
import io from 'socket.io-client';
// '0b0c13471299dde746d9be8617ba901fb2ba71078ec71a7cc4080d54'
const SocketComponent = () => {
  useEffect(() => {
    const url = 'https://app-test.icenna.com';
    console.log(document.cookie)
    // Create the manager with the configuration
    const socket = io(url, {
      withCredentials: true,
      transports: ['websocket'],
      extraHeaders: {
        Cookie: document.cookie // Ensure cookies are included in headers
      }
    });
    console.log(socket.io.opts.extraHeaders);

    socket.on('connect', () => {
      console.log('Connected');
    });
    console.log(socket.connected);
    socket.on('disconnect', () => {
      console.log('Disconnected');
    });

    console.log(socket);
    
    // Clean up on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>Socket Component</div>;
};

export default SocketComponent;
