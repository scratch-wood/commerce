import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const MUIButton = ({backgroundColor, ...props}:ButtonProps) => {
   return (
      <Button variant="contained" style={{ backgroundColor }}>Contained</Button>
  );
}