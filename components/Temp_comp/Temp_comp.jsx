import { Text } from "react-native";
import { s } from "./Temp_comp.style";

export function TempComp({ value, unit }) {
  return (
    <>
      <Text style={s.tempStyle}>
        {value} {unit}
      </Text>
    </>
  );
}
