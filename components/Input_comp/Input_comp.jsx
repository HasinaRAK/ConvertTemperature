import { Alert, Text, TextInput, View } from "react-native";
import { s } from "./input_comp.style";
export function InputComp({ onChangeValue, def_value, unit }) {
  return (
    <View style={s.container}>
      <TextInput
        style={s.inputStyle}
        placeholder="Entrer la valeur de la température"
        keyboardType="numeric"
        maxLength={4}
        defaultValue={def_value}
        onChangeText={onChangeValue}
      />
      <Text style={s.unite}>{unit}</Text>
    </View>
  );
}
