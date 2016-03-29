import React, {PropTypes} from "react";


import { Segment, List } from "meteor/hubroedu:semantic-react";
import VotingContenderItem from "./VotingContenderItem.jsx";

const VotingComponent = class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  render () {
    const {
      contenders,
      vote,
    } = this.props;
    
    return (
      <Segment className="basic">
        <h1 className="ui massive center aligned header">
          Voting
        </h1>
        
        <List className="large divided">
          {contenders.map((contender, i) => {
            return (
              <VotingContenderItem key={i} contender={contender} onClick={vote} />
            );
          })}
        </List>
      </Segment>
    );
  }
};

export default VotingComponent;
