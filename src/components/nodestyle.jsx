import styled from "styled-components";

const NodeStyle = styled.div`
  .node {
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    margin: 1.5px;
  }

  .node-start {
    background: green;
  }

  .node-end {
    background: red;
  }

  .iswall {
    background: #000;
  }
  .node-visited {
    animation-name: visitedAnimation;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }

  @keyframes visitedAnimation {
    0% {
      transform: scale(0.3);
      background-color: rgba(0, 0, 66, 0.75);
      border-radius: 10%;
    }

    50% {
      background-color: #b98cc1;
    }

    75% {
      transform: scale(1);
      background-color: #b98cc1;
    }

    100% {
      transform: scale(1);
      background-color: #b98cc1;
    }
  }

  .node-wall {
    background-color: rgb(12, 53, 71);
  }

  .node-shortest-path {
    animation-name: shortestPath;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }

  @keyframes shortestPath {
    0% {
      content: "X";
      transform: scale(0.6);
      background-color: aquamarine;
    }

    50% {
      content: "X";
      transform: scale(1);
      background-color: aquamarine;
    }

    100% {
      content: "X";
      transform: scale(1);
      background-color: aquamarine;
    }
  }
`;

export default NodeStyle;