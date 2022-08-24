import { useState } from 'react'
import { addNote } from '../redux/forms/formSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid'
import * as React from 'react';
import Radio from '@mui/material/Radio'; 
import FormList from './FormList';
import Footer from './Footer';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';


import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';

function Form() {
  const [selectedValue, setSelectedValue] = React.useState('a'); 
  const [color , setColor] = useState('bgBlack');
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addNote({ id: nanoid(), note, color}));
      setNote('');
  }
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: 'white', height: '50vh', margin:'10px',  borderWidth:'1px', borderRadius:'10px',  }}>
          <AppBar position="static" sx={{ marginY: '8px'}}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <ModeEditRoundedIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                NotesApp
              </Typography>
            </Toolbar>
          </AppBar>
          <div >
          <TextField value={note} onChange= {(e) => setNote(e.target.value)} fullWidth label="Note" id="fullWidth" />
          </div>
          
          
          <Grid container spacing={2} style={{margin:'1px',}} >
            <Grid item xs={8} style={{textAlign:'start'}} >
            <Radio
            checked={selectedValue === 'a'}
            style={{color: '#5D8BF4'}}
            onChange={(event) => {setSelectedValue(event.target.value); setColor('bgRed');}}
            value="a"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'A' }}
          />
          <Radio
            checked={selectedValue === 'b'}
            style={{color: '#7FB5FF'}}
            onChange={(event) => {setSelectedValue(event.target.value); setColor('bgOrange');}}
            value="b"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'B' }}
          />
          <Radio
            checked={selectedValue === 'c'}
            style={{color: '#2074d4'}}
            onChange={(event) => {setSelectedValue(event.target.value); setColor('bgYellow');}}
            value="c"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'C' }}
          />
            </Grid>
            <Grid item xs={4} style={{textAlign:'center',}} >
            <Fab color="primary" aria-label="edit" onClick={handleSubmit} size="small" >
              <AddIcon />
            </Fab>
            </Grid>
        </Grid>
        <FormList />
        <Footer />
        </Box>
      </Container>
    </React.Fragment>
    
  )
}

export default Form