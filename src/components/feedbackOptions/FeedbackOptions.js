import {React, Component} from 'react';
import PropTypes from 'prop-types';
import {ButtonContainer} from './ButtonContainerStyled';

class FeedbackOptions extends Component {
  render() {
    return (
      <>
        {this.props.options.map(option => (
          <ButtonContainer
            key={option}
            type="button"
            data-option={option}
            onClick={this.props.onLeaveFeedback}
          >
            {option}
          </ButtonContainer>
        ))}
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired
};
export default FeedbackOptions;
