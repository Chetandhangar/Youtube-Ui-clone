import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import { VideoDetail , Searchbar } from './components';


class App extends React.Component{


   

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search',{
          params:{
            part:'snippet',
            MaxResult:5,
            key:'AIzaSyC51J_NTauDD6ELNBGBzp6CiJzmqfD-QAs',
            q: searchTerm,
        }
        });

       console.log(response.data.items);
    }

    render(){
      
        return(
          <Grid justify="center" container spacing={10}>
              <Grid item xs={12}>
                  <Grid container spacing={10}>
                      <Grid item xs={12}>
                        <Searchbar onFormSubmit={this.handleSubmit} />
                      </Grid>
                    <Grid item xs={8}>
                        <VideoDetail />
                    </Grid>
                    <Grid item xs={4}>
                        {/*video list */}
                    </Grid>
                  </Grid>
                </Grid>
          </Grid> 
        )
    }
}

export default App;