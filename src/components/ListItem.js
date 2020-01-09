import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback,View, LayoutAnimation} from 'react-native';
import { connect } from 'react-redux';
import {CardSection} from './common';
import actions from '../actions';

class ListItem extends Component{
    componentWillUpdate(): void {
        LayoutAnimation.spring();
    }


    renderDescription() {
        const { item, expanded} = this.props;
        if(expanded){
            return (
                <CardSection>
                <Text style={{flex:1}}>
                    {item.description}
                </Text>
                </CardSection>
            );
        }
    }
    render() {
        const {titleStyle} = styles;
        const {id, title} = this.props.item;

        //console.log(this.props);
        return(
            <TouchableWithoutFeedback
            onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle:{
        fontSize:18,
        paddingLeft:15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded =state.selectedLibraryId === ownProps.item.id;
    return {expanded}

    //return { selectedLibraryId: state.selectedLibraryId}
};

export default connect(mapStateToProps, actions)(ListItem);


