import React , {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 256
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 10
  }
});


const Persons = (props) => {
  const classes = useStyles();
  const [click, setClick] = useState(false);

  if(click===true) {
    return <Redirect to='/profile'/>
  }

    return(
        <div>
          { props.person ? (
            <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {props.person.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Age {props.person.age}
              </Typography>
              <Typography variant="body2" component="p">
                Gender: {props.person.gender}
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button 
                size="small"
                onClick={() => {
                  setClick(true)
                }}
                >View Profile</Button>
            </CardActions>
          </Card>
          ): null }  
        </div>
    )
}
export default Persons