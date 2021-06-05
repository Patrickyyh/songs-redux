import React from 'react';
import { connect } from 'react-redux'; 

class SongList extends React.Component{

    render(){
        console.log(this.props);
        return <div>Songlist</div>
    }    
}

//
const mapStateToProps = (state) => {
 
    return {songs: state.songs}; 
    // this.props === {songs: state.songs}
}



// return a function and call this function 
export default connect(mapStateToProps) (SongList); 

