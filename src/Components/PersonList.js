import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Persons from './Cards/Persons'
import Typography from '@material-ui/core/Typography'

class PersonList extends Component {
    state = {
        persons: [],
        searchString: ''
    }

    constructor() {
        super()
        this.getPersons()
    }

    getPersons = () => {
        // async function listAllObjectsFromS3Bucket(bucket, prefix) {
        //     let isTruncated = true;
        //     let marker;
        //     while(isTruncated) {
        //       let params = { Bucket: bucket };
        //       if (prefix) params.Prefix = prefix;
        //       if (marker) params.Marker = marker;
        //       try {
        //         const response = await s3.listObjects(params).promise();
        //         response.Contents.forEach(item => {
        //           console.log(item.Key);
        //         });
        //         isTruncated = response.IsTruncated;
        //         if (isTruncated) {
        //           marker = response.Contents.slice(-1)[0].Key;
        //         }
        //     } catch(error) {
        //         throw error;
        //       }
        //     }
        //   }
          
        //   listAllObjectsFromS3Bucket('<your bucket name>', '<optional prefix>');
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