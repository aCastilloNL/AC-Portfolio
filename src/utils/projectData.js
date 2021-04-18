import {ilha, pickaChew, laNurserie} from "../assets/img";

export const exp = {
  projects: [
    {
      num: "1",
      name: "Ilha",
      id: "ilha",
      website: "www.ilha.io",
      description:
        "An online learning platform providing interactive music lessons for students by real teachers.",
      pictures: [ilha],
      github: "",
      technologies: [
        {
          MERN: [
            {
              mongoDB: ["Mongoose", "Atlas"]
            },
            "ExpressJS",
            {
              React: ["Hooks", "Router DOM"],
            },
            "Redux",
            "NodeJS",
          ],
          Authentication: ["JSONWebToken", "Bcrypt"],
          Database: ["mongoDB", "Mongoose", "Postman"],
          UI: ["Material-UI", "Styled-components"],
          UX: ["Agile", "Scrum", "Jira", "Trello"],
        },
        "Axios",
        "WebRTC",
      ],
    },
    {
      num: "2",
      name: "Pick-a-Chew",
      id: "pickachew",
      website: "pikachew.netlify.com",
      description:
        "A Recipe Finder food app providing recipes and step-by-step instructions for the ingredients available in the user's kitchen.",
      pictures: [pickaChew],
      github: "",
      technologies: [
        {
          React: ["Class Components", "Select", "Responsive Carousel"],
        },
        "Spoonacular Food & Recipe API",
        "NodeJS",
      ],
    },
    {
      num: "3",
      name: "La Nurserie",
      id: "laNurserie",
      website: "lanurserie.netlify.com",
      description:
        "Website application integrated with WhatsApp, providing daycare assistance to parents and guardians unable to reach tutelage solutions for their children.",
      pictures: [laNurserie],
      github: "",
      technologies: [
        {
          React: ["Hooks", "Router DOM", "Icons"],
          Database: ["mongoDB", "Mongoose", "Atlas", "Postman"],
          UI: ["Material-UI", "Styled-components"],
          UX: ["Agile", "Kanban", "Trello"],
        },
        "ExpressJS",
        {
          NodeJS: "Node-Geocoder",
        },
        "Twilio Studio API",
        "Open Street Maps",
        {
          Prototyping: ["Figma", "Miro"],
          Deployment: ["Netlify", "Heroku"],
        },
      ],
    },
  ],
};
