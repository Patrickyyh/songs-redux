import { combineReducers } from 'redux';


// Static 
const songsReducer = () =>{    
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Start', duration: '3:15'},
        {title: 'I Want it that way', duration: '1:45'}
    ];

};


const selectedSongReducer = (selectedSong = null , action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload; 
    }

    return selectedSong ; 

}

// using combine Reducer to combine all the reducers and export it .
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});


