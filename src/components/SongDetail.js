import React from 'react';
import { connect } from 'react-redux';

// helper function for rendering 


const SongDetail = (props)=>{
    
const renderSelected = (term) =>{
    if(term === null){
        return (<div>Song details</div>); 
    }else{
        return ( 
          <h3 className = "ui header">
              
              <div className = "content">
                  {term.title}
                  <div className = "sub header">Duration: {term.duration}</div>
              </div>
         </h3>
         
        
      );

    }
}; 


    console.log(props); 
    return (
    <div className = "item">{renderSelected(props.selectedSong)}</div>
    
    ); 
};


const mapStateToProps = (state) => {
   
    return {selectedSong: state.selectedSong}; 
   
}


export default connect(mapStateToProps)(SongDetail) ; 