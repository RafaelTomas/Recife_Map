import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';

import District from './component/District';
import BikeLane from './component/BikeLane';;


const actions = [
  { icon: <DirectionsBikeIcon />, name: 'Ciclovia'},
  { icon: <LocationCityOutlinedIcon />, name: 'Bairros' },
];

function App() {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
       <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={e => setAction(action.name)}
          />
        ))}
      </SpeedDial>
         {action === 'Bairros' || action === ''? <District/>:
      <BikeLane/>}
    </>
  );
}

export default App;