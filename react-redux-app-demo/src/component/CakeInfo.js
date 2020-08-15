import React, { Component } from 'react';
import { connect } from 'react-redux';
import buyCakeAction from '../action/buyCakeAction';


class CakeInfo extends Component {
   constructor(props) {
       super();
   }
 
    render() {
        return (
            <div>
                <h1>Number of Cakes : {this.props.numCake}</h1>
                <button onClick = {this.props.buyCakeAction}>Order me</button>
            </div>
        );
    }

    
        
    

}

function mapStateToProps(state) {
    console.log(state.numCake);
    return {numCake : state.numCake};
}

function mapDispatchToProps(dispatch) {
    return {buyCakeAction : () => dispatch(buyCakeAction())};
}


export default connect(mapStateToProps,mapDispatchToProps) (CakeInfo);