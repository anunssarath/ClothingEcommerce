import React from 'react'
import Layout from '../../components/Layout/layout'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  useState } from "react";
import {  toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate , useLocation} from "react-router-dom";
import { useAuth } from '../../context/auth';
import { RiLockPasswordFill } from "react-icons/ri";

const defaultTheme = createTheme({
  typography: {
    fontFamily: 'Georgia, Times New Roman, Times, serif', // Replace with your desired font
  },
});



const ForgotPassword = () => {

  const [ email , setEmail] = useState('') 
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  

  const navigate = useNavigate();
  

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  



  return (
    <Layout title={'Forgot Password - ClothStore'}>
        <ThemeProvider theme={defaultTheme}>
         <Grid container component="main" sx={{ height: '100vh' }}>
         <CssBaseline />
         
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{marginLeft:"375px",marginTop:"55px"}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <RiLockPasswordFill />
            </Avatar>
            <h3 style={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}>Home Tech</h3>
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>
            <Box component="form" noValidate onSubmit={submitHandler} sx={{ mt: 1 }}>
              <TextField onChange={(e)=>setEmail(e.target.value)} value={email}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField onChange={(e)=>setAnswer(e.target.value)} value={answer}
                margin="normal"
                required
                fullWidth
                id="answer"
                label="Your Birth Place?"
                name="answer"
                autoComplete="answer"
                placeholder='Enter your answer here...'
                autoFocus
              />
              <TextField value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                minLength={8}
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="rememberMe" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2,  }}
              >
                Reset
              </Button>
              
            </Box>
          </Box>
        </Grid>
      </Grid>

          </ThemeProvider>
    </Layout>
  )
}

export default ForgotPassword