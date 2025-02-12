import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

export function AgeCounter() {
  const [age, setAge] = useState(30);
  function AgePlus() {
    setAge(age + 1);
    console.log("j'augment l'age de 1 : ", age);
  }
  return (
    <>
      <TouchableOpacity onPress={AgePlus}>
        <Text style={visuel.ngonda}>Augmenter</Text>
      </TouchableOpacity>
      <Text style={visuel.ngonda}>J'ai {age} ans</Text>
    </>
  );
}

const visuel = StyleSheet.create({
  ngonda: {
    fontSize: 40,
  },
});
