import axios from 'axios';

export default axios.create({
baseURL:'https//www.googleapis.com/youtube/v3',
params:{
    part:'snippet',
    MaxResult:5,
    key:'AIzaSyC51J_NTauDD6ELNBGBzp6CiJzmqfD-QAs'
}


});