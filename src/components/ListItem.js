import React, { Component } from 'react';
import { CardSection } from './common';
import { Text } from 'react-native'

export default class ListItem extends Component {
  render(){
    const {id, title } = this.props.library.item;
    return (
      <CardSection>
        <Text style ={styles.titleStyle}> {title} </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

