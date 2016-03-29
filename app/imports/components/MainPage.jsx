import React, {PropTypes} from "react";

import {
  Segment,
} from "meteor/hubroedu:semantic-react";

import ResultsPage from "../containers/ResultsPage.jsx";
import VotingPage from "../containers/VotingPage.jsx";


const MainPage = class extends React.Component {
  render () {
    return (
      <div>
        <ResultsPage />
        <VotingPage />
      </div>
    );
  }
};

MainPage.propTypes = {

};

export default MainPage;
