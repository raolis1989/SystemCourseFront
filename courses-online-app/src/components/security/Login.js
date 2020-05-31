import React from 'react'; 
import style from '../Tool/Style'
import { Container, Typography, Avatar, TextField, Button } from '@material-ui/core';
import LockOutLinedIcon from  '@material-ui/icons/LockOutlined';

const Login = () => {
    return (
        <Container maxWidth="xs">
            <div style={style.paper}>
                <Avatar style={style.avatar}>
                    <LockOutLinedIcon style={style.icon}/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login User
                </Typography>
                <form style={style.form}>
                    <TextField  variant="outlined" label="UserName" name="username" fullWidth margin="normal"/>
                    <TextField variant="outlined" type="password" name="password" label="password" fullWidth margin="normal" />
                    <Button type="submit" fullWidth variant="contained" color="primary" style={style.submit}>
                      Enter
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default Login; 