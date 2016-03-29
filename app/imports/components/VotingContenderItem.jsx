import React, {PropTypes} from "react";

import {
  Item,
  Button,
  Content,
  Image,
} from "meteor/hubroedu:semantic-react";


const ContenderItem = class extends React.Component {
  render () {
    const { contender, onClick } = this.props;
    
    return (
      <Item>
        <Content className="right floated">
          <Button size="small" color="green" onClick={() => onClick(contender._id)} data-vote={contender.name}>
            Vote
          </Button>
        </Content>
        
        <Image className="avatar" src={contender.icon} />
        <Content>
          <div className="header">
            {contender.name}
          </div>
        </Content>
      </Item>
    );
  }
};

ContenderItem.propTypes = {

};

export default ContenderItem;
