import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Persons from './Cards/Persons'
import Typography from '@material-ui/core/Typography'

class PersonList extends Component {
    state = {
        persons: [
            {
                name:"Kaushik Mishra",
                key:1,
                age:"19",
                gender:"Male"
            },
            {
                name:"Kaushik Mishra",
                key:2,
                age:"19",
                gender:"Male"
            },
            {
                name:"Kaushik Mishra",
                key:3,
                age:"19",
                gender:"Male"
            },
            {
                name:"Kaushik Mishra",
                key:4,
                age:"19",
                gender:"Male"
            },
        ],
        searchString: ''
    }

    constructor() {
        super()
        this.getPersons()
    }

    getPersons = () => {
        
        
    }

    onSearchInputChange = (event) => {
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getPersons()
    }

    render() {
        return (
            <div>
                {this.state.persons ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Courses"
                            margin="normal"
                            onChange={this.onSearchInputChange} />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.persons.length ? this.state.persons.map(Currentperson => (
                                <Grid item xs={12} sm={4} lg={4} xl={3} style={{padding: 24}}>
                                    <Persons person={Currentperson} />
                                </Grid>
                            )) : 
                            <Typography variant="subtitle1" color="textSecondary" >
                                No Person found
                            </Typography> }
                        </Grid>
                    </div>
                ) : "No Persons found" }
            </div>
        )
    }
}

export default PersonList;