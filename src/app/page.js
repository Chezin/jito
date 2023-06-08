"use client"
import React, { useEffect, useRef } from 'react';

const IndexPage = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="invert filter filter:hue-rotate(180deg)">
        <img src="/spiral.gif" rel="multiple circular spirals" alt="lucas contini" className="w-40 h-40 mb-8"/>
      </div>
      <ul className="flex space-x-5">
        <li>
          <img src="/soundcloud.svg" rel="soundcloud" href="https://soundcloud.com/lucas-contini" className="hover:scale-10 duration-00" />
        </li>
        <li>
          <img src="/instagram.svg" rel="instagram" href="https://instagram.com/lucasccontini" className="hover:scale-110 duration-00" />
        </li>
        <li>
          <img src="/youtube.svg" rel="youtube" href="https://youtube.com/ch3zin" className="hover:scale-110 duration-00" />
        </li>
        <li>
          <img src="spotify.svg" rel="spotify" href="https://open.spotify.com/user/lucaschezin" className="hover:scale-110 duration-00" />
        </li>
      </ul>
    </div>
  );
};

export default IndexPage;