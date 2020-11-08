import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TextField } from 'mui-rff';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { IconButton, InputAdornment } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import { Form } from 'react-final-form';
import { makeValidate } from 'react-final-form';
import * as Yup from 'yup';

function App() {
  const onSubmit = (values) => {
    console.log({ values });
  };

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().password().required(),
  });

  const validate = makeValidate(schema);

  return (
    <Grid container justify="center">
      <Grid item md={4}>
        <Card>
          <CardContent>
            <Box display="flex" flexDirection="column">
              <Typography variant="h4" Align="center">
                Login
              </Typography>
              <Form
                validate={validate}
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit} noValidate>
                    <TextField
                      name="email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      name="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility">
                              <Visibility />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    {/* /* <TextField
                      label="Email"
                      type="email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      onChange={(event) => setEmail(event.target.value)}
                      value={email}
                    />
                    <TextField
                      label="Password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      onChange={(event) => setPassword(event.target.value)}
                      value={password}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility">
                              <Visibility />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    /> */}
                  </form>
                )}
              />

              <Box marginTop={4} display="flex" justifyContent="center">
                <Button
                  type="submit"
                  onClick={onSubmit}
                  variant="contained"
                  color="primary"
                >
                  Send
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
