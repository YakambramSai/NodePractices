var testPromise = new Promise(function (a, b) {
    setTimeout(function () {
      var value = Boolean(Math.round(Math.random()));
      if (value) {
        a("Success1 !!!");
      } else {
        b("Failure1 !!!");
      }

    }, 2000);
  }).then(function (data) {
    console.log("Test1  :" + data);
    new Promise(function (a, b) {
        setTimeout(function () {
          var value = Boolean(Math.round(Math.random()));
          if (value) {
            a("Success3 !!!");
          } else {
            b("Failure3!!!");
          }

        }, 2000);
      }).then(function (data) {
        console.log("Test3  :" + data);
      })
      .catch(function (err) {
        console.log("Test3 :" + err);
      });
  })
  .catch(function (err) {
    console.log("Test1 :" + err);
    new Promise(function (a, b) {
        setTimeout(function () {
          var value = Boolean(Math.round(Math.random()));
          if (value) {
            a("Success2 !!!");
          } else {
            b("Failure2!!!");
          }

        }, 2000);
      }).then(function (data) {
        console.log("Test2  :" + data);
      })
      .catch(function (err) {
        console.log("Test2 :" + err);
      });
  });