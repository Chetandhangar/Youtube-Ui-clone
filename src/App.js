import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import {SearchBar, VideoDetail } from './components';


class App extends React.Component{
    render(){
        return(
          <Grid justify="center" container spacing={16}>
              <Grid item xs={12}>
                  <Grid container spacing={16}>
                      <Grid item xs={12}>
                        <SearchBar onFormSubmit={this.handleSubmit} />
                      </Grid>
                    <Grid item xs={8}>
                        <VideoDetail />
                    </Grid>
                    <Grid items xs={4}>
                        {/*video list */}
                    </Grid>
                  </Grid>
                </Grid>
          </Grid> 
        )
    }
}

export default App;