import {React} from 'react';
import PropTypes from 'prop-types';
import {ButtonContainer} from './ButtonContainerStyled';

const FeedbackOptions = ({options,onLeaveFeedback}) => {
    return (
      <>
        {options.map(option => (
          <ButtonContainer
            key={option}
            type="button"
            data-option={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </ButtonContainer>
        ))}
      </>
    );
  }


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};
export default FeedbackOptions;
