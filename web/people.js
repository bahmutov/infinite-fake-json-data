require('console.json');
var casual = require('casual');

casual.define('user', function() {
  return {
    email: casual.email,
    firstname: casual.first_name,
    lastname: casual.last_name
  };
});

exports.run = function () {
  var data = {};
  data.people = [];
  var MAX_N = 10000;
  for (var k = 0; k < MAX_N; k += 1) {
    data.people.push(casual.user);
  }

  console.log('Have', data.people.length, 'person list');
  // console.json(data);
  return data;
};
