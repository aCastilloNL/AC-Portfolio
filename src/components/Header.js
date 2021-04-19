import React from "react";
import "../styles/Header.scss";
import { useSound, useSoundUpdate } from "../context/SoundContext";
import { soundOn, soundOff } from "../assets/img";
import { lnkSound } from "../assets/aud";

export const Header = () => {
  const toggleSound = useSoundUpdate();
  const linkSound = new Audio(lnkSound);
  const sound = useSound();

  return (
    <header>
      <span id="txtContainer">
        <h2 id="headerTitle">Alfred Castillo </h2>
        <p id="copyrightTxt">© 2021</p>
      </span>
      <button 
      id="soundBtn" 
      onClick={toggleSound}
      className={sound ? "soundBtnOn" : "soundBtnOff"}>
        <img
          id="soundBtnImg"
          src={sound ? soundOn : soundOff}
          className={sound ? "soundOn" : "soundOff"}
          onClick={() => !sound && linkSound.play()}
          alt="Mute Button"
        />
      </button>
    </header>
  );
};
