import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super();

        this.props = props;
    }

    render() {
        return(
            <Title level={5} style={{textAlign: 'center'}}>Coming Soon!</Title>
        );
    }
}

export default Home;