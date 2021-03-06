import React from "react";
import { makeStyles, Toolbar } from "@material-ui/core";

// import components
import ProjectContainer from "./projectContainer";

// import colors
import { HeaderText } from "../common";
import { colors } from "../common";

const projects = [
  {
    group: "Rigel Technologies (Internship) | Diglog (Startup)",
    data: [
      {
        title: "Mobile FE",
        description:
          "I truly learned alot of software engineering practices through this experience supporting the Diglog project. I am grateful to have experience to quickly adapt in a new environment, although my flutter skills is quite rusty at the start, but I managed to pick up pace developing new features within a short period of time. I was able to experience SDLC (Software Development Life-Cycle) practice which helped improved my productivity.",
        techStacks: ["flutter", "docker", "AWS"],
      },
      {
        title: "Middleware",
        description:
          "I am glad that I took the opportunity requesting for additional task through backend development as I am also tasked to develop a new feature, might as well implement the whole system for efficiency. I also learnt TypeORM, AWS SES, and AWS SNS from this development which I am very grateful of!",
        techStacks: ["nest.js", "docker", "AWS", "SQL"],
      },
    ],
  },
  {
    group: "IBM (Internship) | Enterprise Application",
    data: [
      {
        title: "Kafka Streams",
        description:
          "As a B2C, having unique and personalized services/offerings are business propositions that will allow more customer attraction. I was very fortunate to be able to gain experience developing an application which such qualities. The utilization of Kafka allowed me to gain insights on how real-time data processing are done as well as the Microservice infrastructure which follows with Kafka.",
        techStacks: ["kafka", "node.js", "docker", "kubernetes"],
      },
      {
        title: "Mobile Frontend",
        description:
          "As the cherry on top, the mobile frontend provides data visualization for the Kafka environment. Added a touch of push notification, allowing Kafka's real-time streaming prowess to come to life.",
        techStacks: ["react-native", "docker", "kubernetes"],
      },
      {
        title: "Middleware",
        description:
          "Of course, since the whole theme of the project was developed around Javascript, I do to decided that the middleware be Javascript as well. Providing the means of communication through HTTPS protocol for external applications to connect with Kafka, the middleware allows specific routing to settle on saving data to the Database, streamline data to be processed in Kafka, and Pull out transformed and relevant data to specific components throughout the project.",
        techStacks: ["express", "node.js", "mongodb", "docker", "kubernetes"],
      },
      {
        title: "Transaction Frontend",
        description:
          "The simulation does not only come from the Mobile app or Postman. This component of the project is dedicated to ease out testers to demo the whole project flow.",
        techStacks: ["react", "docker", "kubernetes"],
      },
    ],
  },
  {
    group: "School | Design Innovation Project",
    data: [
      {
        title: "DIP Mobile Frontend",
        description:
          "One of the most influential projects I've embarked so far. The frontend provides features for users to experience a forum to discuss on their preferred school modules. This app allows sharing of contents, i.e. images/pdf/excel/word and provides a navigation tool to keep track of remote labs and classrooms throughout NTU.",
        techStacks: ["flutter"],
      },
      {
        title: "DIP Backend",
        description:
          "As the service provider for the frontend's features, this backend API's provide the necessary tools to share resources and authenticate users. Utilizing filestream to manage file resources to be stored in the database and JWT (JSON Web Token) to authenticate users, these features were made possible.",
        techStacks: ["express", "node.js", "mongodb"],
      },
    ],
  },
  {
    group:
      "Get Together Day (School Organisation) | GTD Unsolved | GTD Website",
    data: [
      {
        title: "GTD Unsolved",
        description:
          "A web-app dedicated to market my organisation's Escape Room game service. This project provides customer with the insights to our 3 chapter games and also allow them to directly register to join",
        techStacks: ["react", "heroku"],
      },
      {
        title: "GTD Unsolved Service",
        description:
          "This app serves as GTD Unsolved's backend service to store player registration data",
        techStacks: ["express", "mongodb", "AWS", "node.js"],
      },
      {
        title: "GTD Website",
        description:
          "This website is to dedicate all the hardworking personnels of GTD which they have all have earned acknowledgement. To bring the legacy of pass year events and also each fun memories. it is now available in https://pintugtd.com, go check it out!",
        techStacks: ["react"],
      },
      {
        title: "TTC Game Web-app",
        description:
          "This game platform is developed as a liaison with the Project Officers. We experimented on web-socket which bring forth the live changes through as a better gaming experience. Currently available on https://ttc-dev.herokuapp.com",
        techStacks: ["react", "heroku"],
      },
      {
        title: "TTC Game Service",
        description:
          "A Socket-based service developed to support TTC Game Web-app, serving the necessary user progress and game-related data",
        techStacks: ["node.js", "express", "heroku", "mongodb"],
      },
    ],
  },
  {
    group: "Personal",
    data: [
      {
        title: "Personal Web",
        description:
          "It's about me! showing my passion and love to software development, more features will be added in the future",
        techStacks: ["react"],
      },
    ],
  },
];

export default function ProjectsPage(props) {
  const projectClasses = projectStyles();
  return (
    <div className={projectClasses.root}>
      <Toolbar />
      <header className={projectClasses.header}>
        <HeaderText>Projects</HeaderText>
      </header>
      <div className={projectClasses.body}>
        {projects.map((project) => (
          <ProjectContainer data={project.data} title={project.group} />
        ))}
      </div>
    </div>
  );
}

const projectStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: colors.white,
    backgroundAttachment: "scroll",
  },
  header: {
    paddingLeft: theme.spacing(4),
    fontSize: "32pt",
    [theme.breakpoints.down("md")]: {
      fontSize: "24pt",
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18pt",
    },
  },
  body: {
    width: "100%",
    boxSizing: "border-box",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
