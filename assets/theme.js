(function () {
  'use strict';

  var example = function example() {
    fetch('../example.json').then(function (response) {
      return response.json();
    }).then(function (jsondata) {
      return console.log(jsondata);
    });
  };

  example();
})();
//# sourceMappingURL=theme.js.map
