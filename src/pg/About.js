import React from "react";
import "../styles/AboutMe.scss";
import { meHeadshot } from "../assets/img";
import { useMenu } from "../context/MenuContext";

export const AboutPg = () => {
  const showNav = useMenu();

  return (
    <div className={`page ${showNav ? "" : "full"}`}>
      <h2 className="pageTitle">Who I Am</h2>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "4vw",
        }}
      >
        <aside
          style={{
            width: "16vmax",
            height: "16vmax",
            border: "3px solid ghostwhite",
            borderRadius: "50%",
            margin: "2vh 1rem 1rem",
            contain: "content",
          }}
        >
          <img
            src={meHeadshot}
            alt="Alfred Headshot"
            style={{
              width: "16vmax",
              marginLeft: "1vh",
            }}
          />
        </aside>

        <main
          id="aboutMain"
          className={`${showNav ? "trans" : "full"}`}
          style={{
            width: "50vw",
            paddingRight: "1rem",
          }}
        >
          <p style={{ marginTop: "0" }}>
            I'm currently based in The Hague, Netherlands. Originally I'm from
            So'California. I've recently switched careers from Legal Videography
            to Full Stack Development.
          </p>

          <p>
            I started learning Java in June 2020. In August I stopped and began
            the Front End Masters bootcamp. Afterwards, I attended the Wild Code
            School in Oct of the same year for professional training. Then I
            made the big switch from Java to JavaScript. This portfolio reflects
            the skills I've learned thus far, showcasing projects from my
            schooling, clients and personal.
          </p>

          <p id={ showNav ? "endP" : "endPTrue"}>
            In my leisure time (although rare :p) I enjoy watching movies. I'm a
            huge Sci-Fi and Horror fan. I watch some Anime, too. I also love to
            travel and eat! Message me for any questions, comments or inquiries,
            or simply to say hello.
          </p>
        </main>
      </main>
    </div>
  );
};
