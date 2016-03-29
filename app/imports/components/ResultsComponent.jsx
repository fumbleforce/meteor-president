import React, {PropTypes} from "react";

import { Segment, List } from "meteor/hubroedu:semantic-react";
import ResultContenderItem from "./ResultContenderItem.jsx";

const ResultsComponent = class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  render () {
    const {
      contenders,
      won,
      reset,
    } = this.props;
    
    return (
      <Segment className="basic" id="results">
        <h1 className="ui massive center aligned header">
          Results
        </h1>
        
        <List className="large divided" style={{ width: "1000px", margin: "0 auto" }}>
          {contenders.map((contender, i) => {
            return (
              <ResultContenderItem key={i} rank={i + 1} contender={contender} maxVotes={1000} />
            );
          })}
        </List>
        {won ?
        <Dimmer className="active" id="victory">
          <Content>
            <div className="center">
              <Header className="inverted">
                <div>
                  <span id="winner">
                    {won.name}
                  </span> won!!!
                </div>
              </Header>
            
              <Button
                size="large"
                color="green"
                onClick={reset}
                className="labeled icon">
                
                <Icon icon="recycle" />
                
                Reset
              </Button>
            </div>
          </Content>
        </Dimmer>
        : null}
      </Segment>
    );
  }
};

export default ResultsComponent;
