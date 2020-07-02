import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import { VideoDetail , Searchbar , VideoList  } from './components';


class App extends React.Component{

      state={
        videos:[],
        selectedVideo: null,
      }
   

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search',{
          params:{
            part:'snippet',
            MaxResult:5,
            key:'AIzaSyC51J_NTauDD6ELNBGBzp6CiJzmqfD-QAs',
            q: searchTerm,
        }
        });
          this.setState({videos: response.data.items , selectedVideo: response.data.items[0]})
    }

    render(){
      
        const { selectedVideo, videos} = this.state; 
        

        return(
          <Grid justify="center" container spacing={10}>
              <Grid item xs={12}>
                  <Grid container spacing={10}>
                      <Grid item xs={12}>
                        <Searchbar onFormSubmit={this.handleSubmit} />
                      </Grid>
                    <Grid item xs={8}>
                        <VideoDetail video={selectedVideo}/>
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList videos={videos}/>
                    </Grid>
                  </Grid>
                </Grid>
          </Grid> 
        )
    }
}

export default App;