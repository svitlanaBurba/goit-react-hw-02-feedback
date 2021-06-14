import React from 'react';
import PropTypes from 'prop-types';
import {StatisticsItem} from './StatisticsStyled';

const Statistics = ({options, feedback, total, positivePercentage}) => {
    return (
      <>
        {options.map(option => (
          <StatisticsItem key={option}>
            {option}: {feedback[option]}
          </StatisticsItem>
        ))}
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </>
    );
  }

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  feedback: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};
export default Statistics;
