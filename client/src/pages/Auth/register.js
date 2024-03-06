import React , {useState} from "react";
import Layout from "../../components/Layout/layout";
import {Link} from 'react-router-dom'
import { toast } from "react-toastify";
import { createTheme, ThemeProvider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InfoIcon from '@mui/icons-material/Info';
import ReCAPTCHA from 'react-google-recaptcha';
import zxcvbn from 'zxcvbn';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme({
  typography: {
    fontFamily: 'Georgia, Times New Roman, Times, serif', 
  },
});



const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false); 
  const [recaptchaValue, setRecaptchaValue] = useState(null); 
  const navigate = useNavigate();
  
  
  

  

  const submitHandler = async (e) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error("Name is required");
      return;
    }

    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }

    if (!password.trim()) {
      toast.error(" Password is required");
      return;
    }
    

    if (!confirmPassword.trim()) {
        toast.error("Confirm Password is required");
        return;
      }
  
      if (!acceptTerms) {
        toast.error("Please accept the terms and conditions");
        return;
      }
  
      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      if (!recaptchaValue) {
        toast.error("Please complete the reCAPTCHA verification");
        return;
      }

    const { score, message } = getPasswordStrengthMessage(password);

    if (score < 3) {
      toast.error(message);
      return;
    }

    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message );
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }

    
    
  }



  const getPasswordStrengthMessage = (password) => {
    const result = zxcvbn(password);
    const { score, feedback } = result;
  
    // Customize the minimum requirements based on your policy
    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
  
    const requirementsMet = hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
  
    let message = '';
  
    if (requirementsMet) {
      message = 'Strong password!';
    } else if (password.length === 0) {
      message = 'Password is required';
    } else {
      message = 'Password should contain at least 8 characters with alphabets, numbers, and special symbols';
    }
  
    return { score, message };
  };
  
  

  return (
    <Layout title={'Register - Clothing Store'}>
      
      <ThemeProvider theme={defaultTheme}>
          <div style={{ marginBottom: '80px' }}>
          <Grid container component="main" sx={{ height: '100vh' }}>
              <CssBaseline />
              <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ margin: 'auto', maxWidth: '600px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <Box
                  sx={{
                    my: 8,
                    mx: 4,
                    mt: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <h3 style={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}>Clothing Store</h3>
                  <Typography component="h1" variant="h5">
                    Sign up
                  </Typography>
                  <Box component="form" noValidate sx={{ mt: 1, maxWidth: '800px' }} onSubmit={submitHandler}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField 
                          autoComplete="given-name"
                          name="Name"
                          required
                          fullWidth
                          id="Name"
                          label="Name"
                          autoFocus
                          value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField 
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField 
                          autoComplete="Mobile"
                          name="Contact"
                          required
                          fullWidth
                          id="contact"
                          label="Mobile Number"
                          autoFocus
                          value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField 
                          autoComplete="given-name"
                          name="Address"
                          required
                          fullWidth
                          id="Address"
                          label="Address"
                          autoFocus
                          value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                      </Grid>

                      

                      <Grid item xs={12}>
                          <TextField
                        minLength={8}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={(e) => {
                          const { message } = getPasswordStrengthMessage(e.target.value);
                          // You can use the message to display feedback to the user
                          console.log('Password strength message:', message);
                        }}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        helperText={
                          <span>
                      {getPasswordStrengthMessage(password).message}
                      <InfoIcon fontSize="small" />
                    </span>
                        }
                      />
                      </Grid>

                      <Grid item xs={12}>
                      <TextField
            required
            fullWidth
            name="confirmpassword"
            label="Confirm Password"
            type="password"
            id="confirmpassword"
            autoComplete="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Grid>

                       <Grid item xs={12}>
                        <TextField 
                          autoComplete="given-name"
                          name="Address"
                          required
                          fullWidth
                          id="Address"
                          label="Question : Your birth Place"
                          placeholder="This will be used to reset your password if needed"
                          autoFocus
                          value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                      </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                required
                checked={acceptTerms}
                onChange={() => setAcceptTerms(!acceptTerms)}
              />
            }
            label="Accept the terms and Conditions"
          />
        </Grid>

        <Grid item xs={12}>
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={(value) => setRecaptchaValue(value)}
          />
        </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2,  }}
                      
                    >
                      Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item >
                        <Link to="/login" variant="body2" >
                          Already have an account? Sign in
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </div>
        </ThemeProvider>


    </Layout>
  );
};

export default Register;