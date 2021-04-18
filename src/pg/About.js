import React from "react";
import "../styles/AboutMe.scss";
import { meHeadshot } from "../assets/img";
import { useMenu } from "../context/MenuContext";

export const AboutPg = () => {
  const showNav = useMenu();

  return (
    <div className={`page ${showNav ? "" : "full"}`}>
      <h2 className="pageTitle">Who I Am</h2>
      <main id="mainMain">
        <aside id="Me">
          <img src={meHeadshot} alt="Alfred Headshot" />
        </aside>

        <main id="aboutMain" className={`${showNav ? "trans" : "full"}`}>
          <p style={{ marginTop: "0" }}>
          I'm a Southern California transplant now living in The Hague, Netherlands.  I am always searching for my next opportunity and challenge.
          </p>

          <p>
          After completing an introduction to Java, I completed the Front End Masters bootcamp.  I then enrolled and completed a six-month course at the Wild Code School for further professional training. This portfolio reflects the skills I've learned thus far, showcasing projects I completed in my schooling and for clients.
          </p>

          <p id={showNav ? "endP" : "endPTrue"}>
            In my leisure time (although rare) I enjoy watching movies. I'm a
            huge Sci-Fi and Horror fan. I also love to
            travel and eat, of course. As mentioned earlier, feel free to message me for any questions, comments or inquiries,
            or even to simply say hello.
          </p>
        </main>
      </main>
    </div>
  );
};
