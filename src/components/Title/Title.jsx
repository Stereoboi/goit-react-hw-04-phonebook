import { Titles } from "./Title.styled"
import PropTypes from 'prop-types';

export const Title = ({ title }) => (
  <Titles>{ title }</Titles>
)

Title.propTypes = {
  title: PropTypes.string,
}