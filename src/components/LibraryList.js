import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStateToProps from 'react-redux/lib/connect/mapStateToProps';

class LibraryList extends Component{
    render(){
        return;
    }
}

const mapStateToProps = state => {
    return{libraries:state.libraries};
};

export default connect(mapStateToProps)(LibraryList);
