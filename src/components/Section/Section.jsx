import { TitleMain } from './Section.styled';
import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <section>
      <TitleMain>{title}</TitleMain>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
