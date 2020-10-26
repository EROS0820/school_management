import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import FacebookIcon from 'src/icons/Facebook';
import GoogleIcon from 'src/icons/Google';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#3f51b5',
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    '& .MuiOutlinedInput-root': {
      borderRadius: '50px !important',
    }
  },
  form: {
    backgroundColor: theme.palette.background.default,
    flex: 1,
    padding: '60px 50px 100px 50px',
    borderRadius: '0px 5px 5px 0px',
    textAlign: 'center'
  },
  sign_section: {
    display: 'flex',
    maxWidth: '1000px !important',
  },
  avatar: {
    backgroundColor: theme.palette.background.dark,
    flex: 1,
    borderRadius: '5px 0px 0px 5px',
  },
  section_flex: {
    display: 'flex',
    width: '1000px',
  },
  round: {
    borderRadius: '50px',
  }
}));

const LoginView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container
          maxWidth="sm"
          className={classes.sign_section}
        >
          <div className={classes.section_flex}>
            <div className={classes.avatar}>

            </div>
            <div className={classes.form}>
              <Formik
                
                initialValues={{
                  email: '',
                  password: ''
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                  password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={() => {
                  navigate('/app/dashboard', { replace: true });
                }}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Box mb={3} display='flex' justifyContent='center'>
                      <Typography
                        color="textPrimary"
                        variant="h2"
                      >
                        Welcome Back!
                      </Typography>
                    </Box>
                    <TextField
                      error={Boolean(touched.email && errors.email)}
                      fullWidth
                      helperText={touched.email && errors.email}
                      margin="normal"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="email"
                      value={values.email}
                      variant="outlined"
                      placeholder='Username'
                    />
                    <TextField
                      error={Boolean(touched.password && errors.password)}
                      fullWidth
                      helperText={touched.password && errors.password}
                      margin="normal"
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.password}
                      variant="outlined"
                      placeholder='Password'
                    />
                    <Box my={2}>
                      <Button
                        className={classes.round}
                        color="primary"
                        disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                      >
                        Login
                      </Button>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        color="textSecondary"
                        variant="body1"
                      >
                        <Link
                          component={RouterLink}
                          to="/register"
                          variant="h5"
                        >
                          Forgot Password?
                        </Link>
                      </Typography>
                    </Box>
                  </form>
                )}
              </Formik>
            </div>
          </div>
          
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
