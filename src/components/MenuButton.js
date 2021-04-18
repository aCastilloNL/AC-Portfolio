import React from "react";
import { NavMenu } from "./";
import "../styles/MenuButton.scss";
import useToggle from "../utils/UseToggle";
import { useMenuUpdate } from "../context/MenuContext";
import { useSound } from "../context/SoundContext";
import { bttnSound } from "../assets/aud";

export const MenuButton = () => {
  const clickButton = useMenuUpdate();
  const sound = useSound();
  const [showNav, setShowNav] = useToggle();
  const btnClkSound = new Audio(bttnSound);

  const playBtnClk = () => (sound ? btnClkSound.play() : btnClkSound.pause);

  return (
    <div>
      {showNav ? (
        <NavMenu
          onClick={() => {
            setShowNav();
            clickButton();
          }}
        />
      ) : (
        <button
          className="menuButton metal radial"
          onClick={() => {
            playBtnClk();
            setShowNav();
            clickButton();
          }}
        >
          <span id="menTxt">MENU</span>
        </button>
      )}
    </div>
  );
};
