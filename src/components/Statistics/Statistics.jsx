import { StatisticsContainer } from './Statistics.styled';
import PropTypes from 'prop-types';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatisticsContainer>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </StatisticsContainer>
  );
}

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
