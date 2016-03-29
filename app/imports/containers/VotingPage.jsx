import _ from "lodash";
import { createContainer } from 'meteor/react-meteor-data';

import VotingComponent from "../components/VotingComponent.jsx";
import ContenderCollection from "../models/ContenderCollection.js";

const vote = function (contenderId) {
  ContenderCollection.update(contenderId, {
    $inc: { votes: 1 }
  });
}

export default createContainer(({ params }) => {
  const currentPath = FlowRouter.current().path;
  
  const contenders = ContenderCollection.find().fetch();
  
  
  return {
    ...params,
    vote,
    contenders,
  };
}, VotingComponent);
