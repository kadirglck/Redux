import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component{
    renderItem(item) {
        return <ListItem item={item} />;
    }
    render(){
        return(
          <FlatList
          data={this.props.libraries}//listemiz
          renderItem={this.renderItem}//kullanıcıya göstereceğimiz bölüm
          //renderItem={({item}) => (<Text>{item.title}</Text>)}  ==> bu sekilde gösterme basarili
          keyExtractor={library => library.id.toString()}//elemanların id degerlerini tanımlama(string olmalı)
          />
        );
    }
}

const mapStateToProps = state => {
    return{libraries : state.libraries};
};

export default connect(mapStateToProps)(LibraryList);
