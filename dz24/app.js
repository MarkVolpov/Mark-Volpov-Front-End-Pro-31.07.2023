function toCamelCase(str) {
  return str.replace(/_([a-z])/g, (match, group) => group.toUpperCase());
}
// 1. Приклади виклику з різними аргументами
console.log(toCamelCase('hello_world')); // 'helloWorld';
console.log(toCamelCase('very_long_property_name')); // 'veryLongPropertyName';
console.log(toCamelCase('kebab-case-key')); // 'kebab-case-key'; don't need to be changed

const response = {
    user_id: 'abc123',
    company_name: 'Hillel',
    contract_expiration_date: '22/11/2013',
    'secret-token': 'unique$ecret',
  };
  
  let camelCasedResponse = {};
  
  for (let key in response) {
    const newKey = toCamelCase(key);
    camelCasedResponse[newKey] = response[key];
  }
  
  console.log(camelCasedResponse);