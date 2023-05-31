import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  FlatList
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

  
function App() {
  const [text, onChangeText] = React.useState('');
  const [title, onChangeTitle] = React.useState('');
  

    return(
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>Task Title</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTitle}
        placeholder='Enter the Task'
        value={title}
      />
      
      <Text style={styles.title}>Task Description</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Task Description"
        
      />
      <Button
       
        title="Add"
        onPress={() =>
          {Alert.alert('Task Added Successfully')}
        }
      />
    </View>
    <Separator/>
    <View >
      <Text style={styles.title}></Text>
    </View>
  </SafeAreaView>
)};
const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent:'center',
    marginHorizontal: 10,
  },
  title: {
    textAlign: 'center',
    marginVertical: 4,
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default App;