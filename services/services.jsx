import { UNITS } from "../constant";

function getOppoUnit(unit) {
  return unit === UNITS.celsuis ? UNITS.fahrenheit : UNITS.celsuis;
}

function convertUnitTo(unit, value) {
  return unit === UNITS.celsuis ? (value - 32) / 1.8 : value * 1.8 + 32;
}
function isColdTemp(value, unit) {
  if (unit === UNITS.celsuis) {
    return value <= 0;
  } else return value <= 32;
}
export { getOppoUnit, convertUnitTo, isColdTemp };
