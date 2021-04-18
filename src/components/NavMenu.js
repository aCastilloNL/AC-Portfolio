import React from "react";
import "../styles/NavMenu.scss";
import { Link } from "react-router-dom";
import useToggle from "../utils/UseToggle";
import { useSound } from "../context/SoundContext";
import { bttnSound, lnkSound } from "../assets/aud";
import { gitHub, home, eMail, projects, cV, meIcon } from "../assets/img";

export const NavMenu = (props) => {
  const [fade, setFade] = useToggle();
  const sound = useSound();
  const buttSound = new Audio(bttnSound),
    linkSound = new Audio(lnkSound);

  return (
    <nav>
      <ul id="columnNav" className={`navMenu ${fade ? "close" : "show"}`}>
        <li id="projIcon">
          <Link
            onClick={() => {
              sound ? linkSound.play() : linkSound.pause();
              setFade();
              setTimeout(() => props.onClick(), 500);
            }}
            to="/projects"
          >
            <img src={projects} alt="Projects Link" />
          </Link>
        </li>
        <li
          className="highCon"
          onClick={() => (sound ? linkSound.play() : linkSound.pause())}
        >
          <a
            href="https://github.com/aCastilloNL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="colMidImg" src={gitHub} alt="Github Link" />
          </a>
        </li>
        <li
          className="highCon"
          id="cvli"
          onClick={() => (sound ? linkSound.play() : linkSound.pause())}
        >
          <a
            href="https://drive.google.com/file/d/1qTyPekL67lNFEXdt3hgOy7UReWi8sCAo/preview"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="cvImg" src={cV} alt="Curriculum Vitae Link" />
          </a>
        </li>
      </ul>
      <button
        id="navMenButt"
        className={fade ? `menuButton metal radial` : null}
        onClick={() => {
          sound ? buttSound.play() : buttSound.pause();
          setFade();
          setTimeout(() => props.onClick(), 375);
        }}
      >
        <span id="menTxt">MENU</span>
      </button>
      <ul id="rowNav" className={`navMenu ${fade ? "close" : "show"}`}>
        <li>
          <Link
            to="/"
            onClick={() => (sound ? linkSound.play() : linkSound.pause())}
          >
            <img src={home} alt="Home Link" />
          </Link>
        </li>
        <li id="me">
          <Link
            to="/about"
            onClick={() => (sound ? linkSound.play() : linkSound.pause())}
          >
            <img src={meIcon} alt="About Me Link" />
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => (sound ? linkSound.play() : linkSound.pause())}
          >
            <img src={eMail} alt="Contact Link" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
