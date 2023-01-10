import { Massage } from './NoFeedbackMassage.styled';
import PropTypes from 'prop-types';

export function NoFeedbackMassage({ text }) {
  return <Massage>{text}</Massage>;
}

NoFeedbackMassage.propTypes = {
  text: PropTypes.string,
};
