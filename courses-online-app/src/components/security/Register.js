import React from 'react';
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core';


const style ={ 
    paper : {
        marginTo: 8,
        display:"flex",
        flexDirection :"column",
        alignItems :"center"
    },
    form:{
        width:"100%",
        marginTop:20
    },
    submit: {
        marginTop:15
    }
}


const RegisterUser= () =>{
    return (
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <Typography component="h1" variant="h5">
                     Register User
                </Typography>
                <form style= {style.form}>
                    <Grid container spacing = {2}>
                         <Grid item xs={12} md={6}> 
                            <TextField name="name" variant="outlined" fullWidth label="Name" />
                         </Grid>
                         <Grid item xs={12} md={6}>
                            <TextField name="lastname" variant="outlined" fullWidth label="LastName"/>
                         </Grid>
                         <Grid item xs={12} md={6}>
                            <TextField name="email" variant="outlined" fullWidth label="Email"/>
                         </Grid>
                         <Grid item xs={12} md={6}>
                            <TextField name="username" variant="outlined" fullWidth label="UserName"/>
                         </Grid>
                         <Grid item xs={12} md={6}>
                             <TextField name="password" type="password" variant="outlined" fullWidth label="UserName"/>
                         </Grid>
                         <Grid item xs={12} md={6}>
                             <TextField name="confirmpassword" type="password" variant="outlined" fullWidth label="Confirma Password"/>
                         </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs={12}  md={6}>
                            <Button type="submit" fullWidth variant="contained" color="primary" size="large" style={style.submit}>
                                    Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default RegisterUser;