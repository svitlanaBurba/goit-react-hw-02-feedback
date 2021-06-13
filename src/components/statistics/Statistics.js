import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StatisticsItem} from './StatisticsStyled';

class Statistics extends Component {
  render() {
    // console.log(this.props);
    return (
      <>
        {this.props.options.map(option => (
          <StatisticsItem key={option}>
            {option}: {this.props.feedback[option]}
          </StatisticsItem>
        ))}
        <p>Total: {this.props.total}</p>
        <p>Positive feedback: {this.props.positivePercentage}%</p>
      </>
    );
  }
}

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  feedback: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};
export default Statistics;
