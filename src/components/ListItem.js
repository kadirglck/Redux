import React, {Component} from 'react';
import {Text} from 'react-native';
import {CardSection} from './common';
import ll from './LibraryList';

export default class ListItem extends Component{
    render() {
        const {titleStyle} = styles;

        console.log(this.props.item);
        return(
            <CardSection>
                <Text style={titleStyle}>
                    {this.props.item.title}
                </Text>
            </CardSection>
        );
    }
}

const styles = {
  titleStyle:{
      fontSize:18,
      paddingLeft:15
  }
};


