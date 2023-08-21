//count the frequency of string
//i/p 'aabbccddeeffrr'
//o/p '{a:2,b:2,c:2,e:3....}

function countFrequency(str) {
  if (!str) {
    return "string is empty";
  }
  let countFrequency = {};
  for (item of str) {
    countFrequency[item] = (countFrequency[item] || 0) + 1;
  }
  return countFrequency;
}
let res = countFrequency("aabbccfee");
console.log(res);
