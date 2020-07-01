import React from 'react';
import {Paper, TextField} from '@material-ui/core';

class SearchBar extends React.Component{

    state = {
        searchTerm:''
    }

    handleChange = (event) => {
            this.setState({searchTerm: event.target.value})
    }

    handleSubmit =() => {
        const {searchTerm} = this.state;
       

    }

       
    
        render(){
            return(
                <Paper elevation={6} style={{padding: '25px'}}>
                    <form onSumit={this.handleSubmit}>
                        <TextField fullwidth label="Serach..." onChange={this.handleChange}/>
                    </form>
                </Paper>
            );
        }
}
export default SearchBar;