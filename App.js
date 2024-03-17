import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Tasks from "./components/Tasks";

export default function App() {
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  const handleTask = () => {
    Keyboard.dismiss();
    setTaskItem([...taskItem, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItem];
    itemsCopy.splice(index, 1);
    setTaskItem(itemsCopy);
  };
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.title}>My Todo</Text>
        <View style={styles.items}>
          {taskItem.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Tasks text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTask}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write something..."}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleTask()}>
          <View style={styles.addWraper}>
            <Text style={styles.add}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    marginTop: 80,
    marginHorizontal: 23,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTask: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWraper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderColor: "#C0C0C0",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  add: {},
});
