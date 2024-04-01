import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  py: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

export default function Cart() {
  return (
    <List sx={style}>
      <ListItem>
        <ListItemText primary="Full width variant below" />
        <ListItemText primary="Full width variant below" />
        <ListItemText primary="Full width variant below" />
      </ListItem>
    </List>
  );
}
