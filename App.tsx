import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState<boolean>(false);
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState<number | null>(
    null
  );

  const handleChange = (text: string) => {
    setTask(text);
  };

  const handlePress = () => {
    setTasks((prev) => [...prev, task]);
    setTask("");
  };
  const handleDone = (index: number) => {
    setSelectedTaskIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const handleDelete = (index: number) => {
    const updatedItems = tasks.filter((task, idx) => idx !== index);
    setTasks(updatedItems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text>Everyday Task</Text>
      </View>
      <View style={styles.tasksList}>
        <ScrollView>
          {tasks.map((task, index) => (
            <View style={styles.taskList}>
              <View>
                <Text
                  key={index}
                  style={{
                    ...styles.task,
                    textDecorationLine:
                      index === selectedTaskIndex ? "line-through" : "none",
                  }}
                >
                  {task}
                </Text>
              </View>
              <View style={styles.taskButton}>
                <Button title="done" onPress={() => handleDone(index)} />
                <Button title="Delete" onPress={() => handleDelete(index)} />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={task}
          onChangeText={handleChange}
        />
        <Button title="ADD TASK" onPress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 0,
    position: "relative",
    color: "white",
  },
  navbar: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 4,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    bottom: 30,
    width: "100%",
    zIndex: 50,
    backgroundColor: "#ffffff",
    padding: 12,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    padding: 8,
    outlineStyle: "none",
    borderBottomWidth: 1.0,
  },
  tasksList: {
    flex: 4,
  },
  taskList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
  },
  task: {},
  taskButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default App;
