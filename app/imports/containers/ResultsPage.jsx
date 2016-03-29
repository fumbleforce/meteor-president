import _ from "lodash";
import { createContainer } from 'meteor/react-meteor-data';

import ResultsComponent from "../components/ResultsComponent.jsx";
import ContenderCollection from "../models/ContenderCollection.js";

const reset = function () {
  Meteor.call("reset");
  Meteor.call("seed");
};

export default createContainer(({ params }) => {
  const currentPath = FlowRouter.current().path;
  const maxVotes = 100;
  const contenders = ContenderCollection.find({}, { sort: { votes: -1 } }).fetch();
  
  const won = _.find(contenders, c => c.votes >= maxVotes);
  
  return {
    ...params,
    won,
    reset,
    contenders,
  };
}, ResultsComponent);
