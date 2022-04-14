(function () {
  'use strict';

  var example = function example() {
    console.info('This is an example to show the use of import/export syntax.');
  };

  example();
})();
import * as data from '../../src/static/example.json';
console.log(data.homePage);
//# sourceMappingURL=theme.js.map
