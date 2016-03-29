import React, {PropTypes} from "react";

import { Container } from "meteor/hubroedu:semantic-react";

const Layout = class extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    const { content } = this.props;
    
    return (
      <Container>
        {content()}
      </Container>
    );
  }
};

export default Layout;
