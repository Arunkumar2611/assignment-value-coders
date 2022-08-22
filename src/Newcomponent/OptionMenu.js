import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function OptionMenu(props) {
  const { option, handleOptionChange } = props

  return (
    <div>
      <FormControl sx={{ mt: 2 }} fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">Select Options</InputLabel>
        <Select
          fullWidth
          value={option}
          onChange={handleOptionChange}
          label="select options"
        >
          <MenuItem fullWidth value="paragraph">Paragraph</MenuItem>
          <MenuItem fullWidth value="checkbox">Checkbox</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
