(function () {
  'use strict';

  var example = function example() {
    console.info('This is an example to show the use of import/export syntax.');
  };

  example();
})();
const requestUrl = 'example.json';
const request = new Request(requestUrl);
const response = await fetch(request);
const title = response.json;
const homePageTitle = document.querySelector('.title');
console.log(title);
//# sourceMappingURL=theme.js.map
