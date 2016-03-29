import React, {PropTypes} from "react";

import {
  Item,
  Button,
  Content,
  Image,
} from "meteor/hubroedu:semantic-react";

const getRankColor = function (rank) {
  if (rank === 1) {
    return "yellow";
  } else if (rank === 2) {
    return "orange";
  }
}

const ContenderItem = class extends React.Component {
  render () {
    const { contender, rank, maxVotes } = this.props;
    
    return (
      <Item>
        <Content className="right floated">
          <Label size="small" className="" color="green">
            {contender.votes}
          </Label>
        </Content>
        
        <Image className="avatar" src={contender.icon} style={{ left: contender.votes * 5 + "px", display: "block" }} />
        <Content>
          <div className="header">
            <Label size="small" className="" color={getRankColor(rank)}>
              {rank}
            </Label>
            
            <span className="name">
              {contender.name}
            </span>
          </div>
        </Content>
      </Item>
    );
  }
};

ContenderItem.propTypes = {

};

export default ContenderItem;
