const json =
  '{"name":"Clive","age":26,"eyeColour":"blue","city":"bruton","postcode":"undefined"}';

const user = JSON.parse(json);

const jsonConvert = JSON.stringify(user);

// console.log(user);
// console.log(json);

// console.log(typeof user);
// console.log(typeof json);

console.log(jsonConvert);
console.log(typeof jsonConvert);
