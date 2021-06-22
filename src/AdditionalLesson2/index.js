import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Topic1 from "./1_renderProps_cats"

class AdditionalLesson extends PureComponent {
  render() {
    return (
      <div className="">
        <Topic1 />
      </div>
    );
  }
}

export default AdditionalLesson;

AdditionalLesson.propTypes = {};

AdditionalLesson.defaultProps = {};
