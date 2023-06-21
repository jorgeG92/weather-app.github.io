import { useTheme } from '@mui/material/styles';
import styled from '@emotion/styled';
import { Icon, Typography, useMediaQuery } from '@mui/material';
import { FC, ReactNode } from 'react';

const WeekInfoBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  borderRadius: 5,
  padding: 10,
});

const WeekBoxTempContainer = styled('div')({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const StyledIcon = styled(Icon)({
  fontSize: 100,
});

const WeekInfoItem: FC<{ children: ReactNode }> = ({ children }) => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <WeekInfoBox>
      <Typography>Dia X</Typography>
      <StyledIcon style={{ fontSize: isPhone ? 45 : 70 }}>start</StyledIcon>
      <WeekBoxTempContainer>
        {/* Max */}
        <Typography color="red" variant="body1">
          20º
        </Typography>
        {/* Min */}
        <Typography color="blue" variant="body1">
          10º
        </Typography>
      </WeekBoxTempContainer>
    </WeekInfoBox>
  );
};

export default WeekInfoItem;
