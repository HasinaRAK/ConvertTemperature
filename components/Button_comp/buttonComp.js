import { Text, View, TouchableOpacity } from "react-native";
import { s } from "./buttonComp.style";

export function ButtonComp({ onClic, units }) {
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={onClic} style={s.button}>
        <Text style={s.text}>Convert to {units}</Text>
      </TouchableOpacity>
    </View>
  );
}
