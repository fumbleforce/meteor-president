import React from "react";
import { FlowRouter } from "meteor/kadira:flow-router";
import { mount } from "react-mounter";

import Layout from "./Layout.jsx";
import ResultsPage from "./containers/ResultsPage.jsx";
import VotingPage from "./containers/VotingPage.jsx";
import MainPage from "./components/MainPage.jsx";


FlowRouter.route("/", {
  action: () => {
    mount(Layout, {
      content: () => <MainPage /> });
  }
});

FlowRouter.route("/results", {
  action: () => {
    mount(Layout, {
      content: () => <ResultsPage /> });
  }
});

FlowRouter.route("/vote", {
  action: () => {
    mount(Layout, {
      content: () => <VotingPage /> });
  }
});

