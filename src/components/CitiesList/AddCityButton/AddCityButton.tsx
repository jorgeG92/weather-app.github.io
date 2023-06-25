import { Button, ButtonProps } from '@mui/material';
import { FC, useState } from 'react';

const AddCityButton: FC = () => {
  const [flag, setFlag] = useState(false);

  const onClick: ButtonProps['onChange'] = () => {
    setFlag(!flag);
  };

  return (
    <Button
      variant="contained"
      color={flag ? 'success' : 'warning'}
      onClick={onClick}
    >
      {flag ? 'Añadir' : 'Eliminar'} ciudad
    </Button>
  );
};

export default AddCityButton;
