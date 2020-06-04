import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,

  FlatList,
  Image, 
  Modal
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import logo from './assets/image/shop.png'; 


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);


const[isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle } 
    ]);
    setIsAddMode(false);
  };

  const removeGoalHander = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (

    
    <View style={styles.screen}>
          <Image source={logo} style={styles.logo2} /> 

      <Button title="Add new ithem" onPress={() =>setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHander}
            title={itemData.item.value}
          />
        )}
      ></FlatList>
    </View>
  
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 80, 
    


  }, 
  logo2: {
marginLeft: '30%',
    width: 100,
     height: 100
  }

});







