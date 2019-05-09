import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import logo from './logo.png';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  handleChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  routeChange = () => {
    if (this.state.email !== '' && this.state.password !== '') {
      let path = 'dashboard';
      this.props.history.push(path);
    }
  }

  render() {
    const { classes } = this.props;


    return (
      <main className={classes.main} id="main">
        <CssBaseline />
        <Paper className={classes.paper} id="paper">
          <div className="logo">
            <div className="login-logo"><img src={logo} alt="" /></div>
            <Typography component="h1" variant="h5" id="logo-title">
              Signal Molecule
        </Typography>
          </div>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth id="email-control">
              <TextField
                id="email"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <TextField
                id="password"
                label="Password"
                className={classes.textField}
                type="password"
                name="password"
                autoComplete="password"
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              id="checkbox"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              id="submit"
              onClick={this.routeChange}
            >
              Login
            </Button>
          </form>
          <div className="forgot">
            <Typography component="h1" variant="h5" id="forgot-password">
              Forgot password?
            </Typography>
            <a href="#">Click here<hr className="underline"></hr></a>
          </div>
        </Paper>
      </main>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);