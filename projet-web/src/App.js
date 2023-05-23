import './App.css';
import React from 'react';
import Grid from '@mui/material/Grid'
import { FormControl, InputAdornment, InputLabel, TextField } from '@mui/material';
import Input from '@mui/material/Input';
//import AccountCircle from '@mui/icons-material/AccountCircle'

function App() {
  return (
    
    <Grid className='App'>
        <h1>Bienvenue sur RS ESEO </h1>
        <Grid container spacing={2} className='App-header'>
          <Grid item={6}>
            <h2>Connexion</h2>
            <FormControl variant='standard'>
              <TextField id='email' label='Email'/>
              <TextField id='mot-de-passe' label='Mot de passe'/>
            </FormControl>
          </Grid>
          <Grid item={6}>
            <h2>Inscription</h2>
            <FormControl variant='standard'>
              <TextField id='nom' label='Nom'/>
              <TextField id='prenom' label='Prénom'/>
              <TextField id='promotion' label='Promotion'/>
              <TextField id='email' label='email'/>
              <TextField id='mot-de-passe' label='Mot de passe'/>
              <TextField id='conf-mdp' label='Confirmer mot de passe'/>
            </FormControl>
          </Grid>
        </Grid>
    </Grid>
  );
}

export default App;
