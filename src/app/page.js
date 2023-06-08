"use client";
import React, { useEffect, useRef } from "react";

const IndexPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="invert filter filter:hue-rotate(180deg)">
        <img
          src="/spiral.gif"
          rel="multiple circular spirals"
          alt="lucas contini"
          className="w-40 h-40 mb-8"
        />
      </div>
      <ul className="flex space-x-5">
        <li>
          <a href="https://soundcloud.com/lucas-contini">
            <img
              src="/soundcloud.svg"
              rel="soundcloud"
              className="hover:scale-110 duration-00"
            />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/lucasccontini">
            <img
              src="/instagram.svg"
              rel="instagram"
              className="hover:scale-110 duration-00"
            />
          </a>
        </li>
        <li>
          <a href="https://youtube.com/ch3zin">
            <img
              src="/youtube.svg"
              rel="youtube"
              className="hover:scale-110 duration-00"
            />
          </a>
        </li>
        <li>
          <a href="https://open.spotify.com/user/lucaschezin">
            <img
              src="/spotify.svg"
              rel="spotify"
              className="hover:scale-110 duration-00"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default IndexPage;
