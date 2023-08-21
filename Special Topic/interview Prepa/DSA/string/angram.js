//angram in string
// i/p "hello" "lleho"
//print true and fasle

//approach
//1.check for the length should same
//.count the hello with frequency
//.check in 2 string and minus the first counter counter

function isAngram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  let counterFrequency = {};
  for (item of str1) {
    // console.log(item);
    counterFrequency[item] = (counterFrequency[item] || 0) + 1;
  }
  //   console.log(counterFrequency);
  //now loop into 2 string and minus the frequency
  for (item of str2) {
    if (!counterFrequency[item]) {
      return false;
    }
    counterFrequency[item] -= 1;
  }
  return true;
}

const res = isAngram("hello", "lll ho");
console.log(res);
