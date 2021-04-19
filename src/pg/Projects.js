import React from "react";
import "../styles/Projects.scss";
import { lnkSound } from "../assets/aud";
import { exp } from "../utils/projectData";
import { useSound } from "../context/SoundContext";
import { useMenu } from "../context/MenuContext";

export const ProjectsPg = () => {
  const showNav = useMenu(),
    sound = useSound(),
    linkSound = new Audio(lnkSound);

  return (
    <main id="projMain" className={`page ${showNav ? "trans" : "full"}`}>
      <h2 className="pageTitle">Projects</h2>
      <hr
        style={{
          backgroundColor: "dimgrey",
          border: "none",
          height: "1px",
          margin: "0",
        }}
      />
      <p id="pageDesc">
        Here you'll find a selection of my completed projects. This section is
        constantly updated.
      </p>

      <hr
        style={{
          backgroundColor: "dimgrey",
          border: "none",
          height: "1px",
        }}
      />

      <section id="idSect">
        {exp.projects.map((project) => (
          <figure id={`${project.id}Fig`} key={project.num}>
            <figcaption>
              <h2 key={`${project.id}`}> [ {project.name} ] </h2>
              <p key={`${project.id}Desc`}>{project.description}</p>

              <details>
                <summary
                  id="viewTech"
                  onClick={() => sound && linkSound.play()}
                >
                  View tech stack
                </summary>

                <ul key={`${project.num}Tech`} className="techStackCont">
                  {project.technologies.map((tech, id) => (
                    <div key={`${tech}${id}`} className="techLiBllt">
                      {typeof tech === "object" ? (
                        <>
                          {Object.keys(tech).map((key, id) => (
                            <ul
                              key={`${key}ul${id}`}
                              className="techTypTtlCont"
                            >
                              <details>
                                <summary
                                  onClick={() => sound && linkSound.play()}
                                >
                                  <strong
                                    key={`${key}obj${id}`}
                                    className="techTypeTitle"
                                  >
                                    [{key}]
                                  </strong>
                                </summary>
                                {Array.isArray(tech[key]) ? (
                                  tech[key].map((el, id) => (
                                    <li
                                      key={`${el}${id}`}
                                      className="techLiBllt"
                                    >
                                      {typeof el == "object"
                                        ? Object.keys(el).map((sftwr, id) => (
                                            <React.Fragment
                                              key={`${sftwr}rf${id}`}
                                            >
                                              <details
                                                onClick={() =>
                                                  sound && linkSound.play()
                                                }
                                              >
                                                <summary
                                                  onClick={() =>
                                                    sound && linkSound.play()
                                                  }
                                                >
                                                  {sftwr}
                                                </summary>
                                                <ul key={`${sftwr}${id}`}>
                                                  {el[sftwr].map((pkg, id) => (
                                                    <li
                                                      key={`${pkg}${id}`}
                                                      className="techLiBllt"
                                                    >
                                                      {pkg}
                                                    </li>
                                                  ))}
                                                </ul>
                                              </details>
                                            </React.Fragment>
                                          ))
                                        : el.toString()}
                                    </li>
                                  ))
                                ) : (
                                  <li
                                    key={`${key}val${id}`}
                                    className="techLiBllt"
                                  >
                                    {tech[key].toString()}
                                  </li>
                                )}
                              </details>
                            </ul>
                          ))}
                        </>
                      ) : (
                        <li>{tech}</li>
                      )}
                    </div>
                  ))}
                </ul>
              </details>
            </figcaption>
            <img
              src={project.pictures[0]}
              key={`img${project.num}`}
              alt={`${project.name}`}
            />
          </figure>
        ))}
      </section>
    </main>
  );
};
