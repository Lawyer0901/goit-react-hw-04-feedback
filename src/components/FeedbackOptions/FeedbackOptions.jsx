import { Button, ButtonContainer } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonContainer>
      {options.map(option => (
        <Button key={option} onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </ButtonContainer>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
