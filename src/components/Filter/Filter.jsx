import PropTypes from 'prop-types';
import { Input, Label } from "./Filter.styled"
export const Filter = ({ value , onChange }) => (
  <Label>
    Find contact by name
    <Input
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      />
    </Label>
)

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}