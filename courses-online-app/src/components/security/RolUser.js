import React from 'react';
import style from '../Tool/Style';
import { Container, Typography, Grid, Button, TextField } from '@material-ui/core';

const RolUser = () =>{
    return (
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <Typography component="h1" variant="h5">
                    Rol User
                </Typography>
            </div>
            <form style={style.form}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField name="name" variant="outlined" fullWidth label="Name and LastName"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField name="email" variant="outlined" fullWidth label="Email"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField name="username" variant="outlined" fullWidth label="UserName"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField name="password" type="password" variant="outlined" fullWidth label="Password"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField name="confirmpassword" type="password" variant="outlined" fullWidth label="Password Confirm"/>
                    </Grid>
                    <Grid container justify="center">
                       <Grid item xs={12} md={6}>
                            <Button type="submit" fullWidth variant="contained" size="large" color="primary" style={style.submit}>
                                Save Data
                            </Button>
                       </Grid> 
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};


export default RolUser; 