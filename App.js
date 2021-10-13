const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
]

import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import  Introduction  from './src/Components/Introduction'
import  logo  from './assets/logo.png';
import  WebDev  from './assets/webdev.png';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Linking } from 'react-native';

export default function App() {
 

  return (
    
    <View style={styles.container}>
     
      <Text style={styles.titleText}>Start Larning</Text>
      <Image
      style={styles.imageLgo} source={ logo }>
        </Image>

    <Text style={styles.titleText}> Learning Path</Text>
    <br></br>
    <br></br>
   

<div>
<View style={{flex: 1, flexDirection: 'row'}}>
 <Card  containerStyle={styles.card}>
  <Card.Image source={WebDev} style={{height: 90 ,width:170}}>
  </Card.Image>
    <br></br>
    <br></br>
    <Text style={styles.CardText}>
     Web Development 
    </Text><br></br>
    <Text style={styles.cardHyperlink}>
    Start Learning
    </Text>
   
</Card>

<Card  containerStyle={styles.card}>
  <Card.Image source={WebDev} style={{height: 90 ,width:170}}>
  </Card.Image>
    <br></br>
    <br></br>
    <Text style={styles.CardText}>
    Data Science
    </Text><br></br>
    <Text style={styles.cardHyperlink}>
    Start Learning
    </Text>
   
</Card>

<Card  containerStyle={styles.card}>
  <Card.Image source={WebDev} style={{height: 90 ,width:170}}>
  </Card.Image>
    <br></br>
    <br></br>
    <Text style={styles.CardText} >
     Marketing
    </Text><br></br>
    <Text style={styles.cardHyperlink}>
    Start Learning
    </Text>
   
</Card>
</View>
</div>
 <br></br>
 <br></br>
 <br></br>
 <Text style={styles.titleText}>Free Courses</Text>
 <Text style={styles.freeCourse} onPress={() => Linking.openURL('http://google.com')}>
  View All Free Courses</Text>
    <text>Intro to Web Developement</text>
 <Introduction></Introduction>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 150
   
  },
  imageLgo :{
    width: 300, height: 150 ,
    alignSelf: "flex-end",
  },
  freeCourse: {
    alignSelf: "flex-end",
    fontSize: 20,
    fontWeight: "bold",
    color : "red"

  },
  card:{
    height:200,
    width:200
  },
  CardText: {
    fontSize: 15,
    fontWeight: "bold"
  },
  cardHyperlink: {
    fontSize: 10,
    color : "red"

  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
