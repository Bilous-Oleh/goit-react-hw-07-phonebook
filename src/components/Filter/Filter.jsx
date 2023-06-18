import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

export function Filter({ filter, onChange }) {
  return (
    <Label className="filter">
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Enter name"
      />
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
