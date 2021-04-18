import React from "react";
import "../styles/Intro.scss";
import { WindupChildren, Pause, Pace } from "windups";

export const Intro = () => {
  return (
    <div className="page">
      <main id="introBox">
        <WindupChildren>
          <Pace getPace={(char) => (char === "" ? 300 : 30)}>
            <h1>
              {"Hi!"}
              <Pause ms={700} />
              {" I'm Alfred."}
            </h1>
            <Pause ms={800} />
            <h2>Welcome to my Portfolio.</h2>
          </Pace>
          <Pause ms={1200} />
          <Pace getPace={(char) => (char === "" ? 300 : 30)}>
            <section id="introStackContainer">
              <span className="introStack" style={{ display: "block" }}>
                {
                  "I'm a Full-Stack Developer with a penchant for learning and creativity."
                }
              </span>
              <Pause ms={1200} />
              <span className="introStack" style={{ display: "block" }}>
                {" The Menu below contains the keys for exploration."}
              </span>
              <Pause ms={1200} />
              <span className="introStack">
                {
                  " Enjoy your stay and please reach out to me for absolutely anything."
                }
              </span>
            </section>
          </Pace>
        </WindupChildren>
      </main>
    </div>
  );
};

// export default Intro;
