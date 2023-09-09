//create a function return a promise

function fetchData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let data = { msg: "api is success" };
      res(data);
    }, 2000);
  });
}
fetchData()
  .then((data) => {
    console.log(data.msg);
  })
  .catch((err) => {
    console.log(err);
  });
