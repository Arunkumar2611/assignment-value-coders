import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

export default function CheckboxComponent(props) {
  const { checked, handleChange, name, label } = props

  return (
    <>
      <Checkbox name={name} onChange={handleChange} checked={checked} />
      {label}
    </>
  );
}
