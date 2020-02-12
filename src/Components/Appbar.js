import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router';
import  auth  from '../Auth/auth';
import fire from '../Config/fire';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function Appbar() {
  const classes = useStyles();
  const [authenticated, setAuthenticated] = useState(true);

  if(authenticated===false) {
    return (<Redirect to='/'/>)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Berry Med
          </Typography>
          <Button color="inherit" onClick={() => {
            fire.auth().signOut();
            setAuthenticated(false);
            auth.logout(() => {
                  console.log("logged out");
                });
            }}
          >
          Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Appbar;