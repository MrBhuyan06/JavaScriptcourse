// try {
//   console.log("abhihsker");
//   e, f[pmerf];
//   console.log("ofjwofoh");
// } catch (abs) {
//   console.log(abs.message);
//   console.log(abs.name);
//   console.log(abs.stack);
// }
//try watch is sync inside it asunc code
// try {
//   setTimeout(() => {
//     // console.log("1000");
//     try {
//       blavla;
//     } catch (err) {
//       console.log(err);
//     }
//   }, 1000);
// } catch (err) {
//   console.log(err);
// }

//undefine err
try {
  let data = {
    name: "Abhi",
    add: "bbsr",
  };
  //   let objData = JSON.parse(data);
  if (!data.age) {
    // console.log(objData);
    throw new SyntaxError("someThink is went wrong");
  }
} catch (err) {
  console.log(err.name);
}
