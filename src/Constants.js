import REAZDONOR from "./Assets/Projects/reazdonor.png";
import LAMBDA from "./Assets/Projects/lambda.png";
import FRUIT from "./Assets/Projects/fruitprice.jpg";
import PROTOTYPE from "./Assets/Projects/prototype.png";
import CHAT from "./Assets/Projects/chat.png";
import FLARE from "./Assets/Projects/flare.jpg";

export const PROJECTS = [
  {
    image: REAZDONOR,
    name: "ReazDonor",
    technologyUsed: "Python, Flask, HTML, CSS",
    description: "ReazDonor is a web application that allows donors to discover and donate to organizations.",
    url: "https://github.com/mdreazul/ReazDonor",
    isResearch: false,
  },
  {
    image: LAMBDA,
    name: "Lambda Calculus Interpreter",
    technologyUsed: "Python, PLY",
    description: "Custom Luggage Tags and Passport Holders engraved with everywhere you've traveled and everywhere you will travel in the future.",
    url: "https://github.com/mdreazul/Lambda-Calculus-Interpreter",
    isResearch: false,
  },
  {
    image: FRUIT,
    name: "Fruit Price Adjustor",
    technologyUsed: "Python, NodeJS, React, Express.js, Tensorflow",
    description: "Wasted food has tremendous environmental and economic impacts. Fruit Price Adjustor sets an appropriate price based on the ripeness of a fruit in order to reduce the sell ripening fruits quickly, thus reducing waste.",
    url: "https://github.com/mdreazul/Fruit-Price-Adjustor",
    isResearch: false,
  },
  {
    image: CHAT,
    name: "Live Chat App",
    technologyUsed: "Python, Flask",
    description: "A real-time chat application that leverages websockets to display messages as the other person is typing.",
    url: "https://github.com/mdreazul/Live-Chat-App",
    isResearch: false,
  },
  {
    image: PROTOTYPE,
    name: "An Analysis of Delay in Live 360° Video Streaming Systems",
    technologyUsed: "C++, JavaScript",
    description: "A prototype used to measure the delay of live 360 video streaming systems. It captures regular video stream using six GoPro cameras, and stitchs them into a 360 video. After that, the 360 video will be transferred to the video server Nginx. The clients can send request to the video server to watch the live video. The system pipeline can be divided into different tasks, and it allows developers to measure the time consumption of each task.",
    url: "https://dl.acm.org/doi/abs/10.1145/3394171.3413539",
    isResearch: true,
  },
  {
    image: FLARE,
    name: "Improving Solar Flare Prediction by Time Series Outlier Detection",
    technologyUsed: "Python, Matplotlib",
    description: "An investigation of the impact of outliers in a multivariate time series benchmark dataset, namely SWAN-SF, on flare prediction models, and test our hypothesis. That is, there exist outliers in SWAN-SF, removal of which enhances the performance of the prediction models on unseen datasets.",
    url: "https://arxiv.org/abs/2206.07197",
    isResearch: true,
  },
];
