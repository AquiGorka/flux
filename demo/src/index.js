import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Flux from '../../src';

const View1 = props => {
  return (
    <Fragment>
      <div>View 1: Flux state: {JSON.stringify(props)}</div>
      <button onClick={() => props.flux({ view1: !props.view1 })}>
        Toogle view1
      </button>
    </Fragment>
  );
};

const View2 = props => {
  return (
    <Fragment>
      <div>View 2: Flux state: {JSON.stringify(props)}</div>
      <button onClick={() => props.flux({ view2: !props.view2 })}>
        Toggle view2
      </button>
    </Fragment>
  );
};

class Demo extends Component {
  render() {
    return (
      <Fragment>
        <h1>Flux Demo</h1>
        <Flux>
          <View1 />
          <View2 />
        </Flux>
      </Fragment>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
