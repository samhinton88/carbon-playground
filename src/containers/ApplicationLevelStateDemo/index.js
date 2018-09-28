import React, { Component } from 'react';
import { connect } from 'react-redux';

class ApplicationLevelStateDemo extends Component {

  render() {
    console.log(this.props);
    return (
      <div className='application-level-state-demo'>
        <h2>
        ApplicationLevelState
        </h2>
        {JSON.stringify(this.props.state)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {


  return {
    state
  };
};

export default connect(mapStateToProps)(ApplicationLevelStateDemo);