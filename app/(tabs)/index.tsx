import { Text, View, ImageBackground, Alert } from "react-native";
import { s } from "../../app/style/index.style";
import hot from "../../assets/images/Img_projet/hot.png";
import cold from "../../assets/images/Img_projet/cold.png";
import { InputComp } from "../../components/Input_comp/Input_comp";
import { TempComp } from "../../components/Temp_comp/Temp_comp";
import { useEffect, useState } from "react";
import { DEFAULT_TEMPERATURE, DEFAULT_UNITS, UNITS } from "@/constant";
import {
  getOppoUnit,
  convertUnitTo,
  isColdTemp,
} from "../../services/services";
import { ButtonComp } from "../../components/Button_comp/buttonComp";

export default function HomeScreen() {
  const [inValue, setInValue] = useState(DEFAULT_TEMPERATURE);
  const [curUnit, setCurUnit] = useState(DEFAULT_UNITS);
  const [stateBg, setStateBg] = useState();
  const oppUnits = getOppoUnit(curUnit);

  function getoperat() {
    const valueAsFloat = Number.parseFloat(inValue);
    return isNaN(valueAsFloat)
      ? ""
      : convertUnitTo(oppUnits, valueAsFloat).toFixed(1);
  }

  useEffect(() => {
    const tempAsFloat = Number.parseFloat(inValue);
    if (!isNaN(tempAsFloat)) {
      const isCold = isColdTemp(inValue, curUnit);
      setStateBg(isCold ? cold : hot);
    }
  }, [inValue]);

  return (
    <ImageBackground source={stateBg} style={s.container}>
      <View style={s.desk}>
        <TempComp value={getoperat()} unit={oppUnits} />
        <InputComp
          onChangeValue={setInValue}
          def_value={DEFAULT_TEMPERATURE}
          unit={curUnit}
        />
        <ButtonComp
          onClic={() => {
            setCurUnit(oppUnits);
          }}
          units={curUnit}
        />
      </View>
    </ImageBackground>
  );
}
