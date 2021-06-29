const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏼 Assertion Passed: ${actual} === ${expected}`);

  } else if (actual !== expected) {
    console.log(`👎🏼 😥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual('minus 5', -5)
// assertEqual('happy', 'Happy')
// assertEqual(9, 3)
// assertEqual('yes', 'yes')

module.exports = assertEqual;
