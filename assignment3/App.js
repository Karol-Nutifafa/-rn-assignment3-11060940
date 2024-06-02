import React from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, Button, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const categories = [
    { key: 'Exercise', tasks: 12, icon: 'bicycle', image: require('./assets/left.png') },
    { key: 'Study', tasks: 12, icon: 'book', image: require('./assets/right.png') },
    { key: 'Code', tasks: 10, icon: 'code', image: require('./assets/left.png') },
    { key: 'Cook', tasks: 8, icon: 'cutlery', image: require('./assets/right.png') },
   
  ];

  const ongoingTasks = [
    'Mobile App Development', 'Web Development', 'Database Management', 
    'API Development', 'UI/UX Design', 'Testing Automation', 'Project Planning', 
    'Client Meeting', 'Marketing Strategy', 'Content Creation', 'Budget Review', 
    'Network Configuration', 'Data Analysis', 'Graphic Design', 'Social Media Management'
  ];

  return (
    <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Hello, Devs</Text>
      <Text>14 tasks today</Text>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="gray"
        />
        <Image source={require('./assets/yourImage.jpg')} style={styles.yourImageStyle} />
      </View>
    </View>
      <ScrollView style={styles.scrollView} horizontal={false}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({ item }) => (
            <View style={styles.category}>
              <Text style={styles.categoryText}>{item.key}</Text>
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.taskCount}>{item.tasks} Tasks</Text>
            </View>
          )}
          keyExtractor={item => item.key}
        />
        <Text style={styles.sectionHeader}>Ongoing Task</Text>
        <View style={styles.taskList}>
          {ongoingTasks.map((task, index) => (
            <View key={index} style={styles.taskItem}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerContainer: {
    marginBottom: 20,
  },
  header: {
    fontSize: 28, // Increased font size
    fontWeight: 'bold', // Bold text
  },
  yourImageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
    marginLeft: 20,
  },
  searchContainer: {
   
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    flexShrink: 1, 
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 0,
    height: 50, 
    width : 200,
    borderColor: 'gray',
    borderWidth: 0, // No border
  },

  scrollView: {
    flex: 1,
  },
  category: {
    width: 180, // Adjust width based on your layout needs
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryImage: {
    width: 100,
    height: 100,
    marginBottom: 5,  // Adjust or remove as necessary for spacing between image and text below
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5, // Space between the category name and task count text
  },
  taskCount: {
    fontSize: 14,
    marginBottom: 5, // Space between the task cou