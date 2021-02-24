import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={username: '', email:'', number:''};
 
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textinput}
        placeholder="Name"
        placeholderTextColor="Black"
        onChangeText={username=>this.setState({username})}
      />

<TextInput style={styles.textinput}
        placeholder="Email"
        placeholderTextColor="Black"
        onChangeText={email=>this.setState({email})}
        />

<TextInput style={styles.textinput}
        placeholder="Number"
        placeholderTextColor="Black"
        onChangeText={number=>this.setState({number})}
        />
        <Button
        title="About Page"
        onPress={()=>this.props.navigation.navigate('About', {u1:this.state.username}, {e1:this.state.email},
        {n1:this.state.number})}
        />
        
    </View>
      
    );
  }
}

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
         {this.props.navigation.state.params.u1}
          </Text>
        <Text>
         {this.props.navigation.state.params.e1}
         </Text>
        <Text>
         {this.props.navigation.state.params.n1}
        </Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  About:{
    screen: AboutScreen,
  }
});

export default createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center'
  },
  textinput:{
    borderWidth: 4,
    borderColor: 'skyblue',
    margin:10,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    height: 40,
    width: 200,

  }
})