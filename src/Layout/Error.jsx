import React from 'react';
import { useRouteError } from 'react-router-dom';
import img from '../assets/img/error/error.jpg'

const Error = () => {
    const { error, status } = useRouteError()
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">{error?.message}</h1>
            <p className="mb-5">{status ? status : '404'}</p>
            
          </div>
        </div>
      </div>
    );
};

export default Error;