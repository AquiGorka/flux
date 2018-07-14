import React, { Component, Fragment, Children, cloneElement } from 'react';

class Flux extends Component {
  render() {
    const { children, ...rest } = this.props;

    return (
      <Fragment>
        {Children.map(children, child =>
          cloneElement(child, {
            ...rest,
            ...this.state,
            flux: state => this.setState({ ...state }),
          }),
        )}
      </Fragment>
    );
  }
}

export default Flux;
