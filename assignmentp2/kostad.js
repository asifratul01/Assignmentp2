const readline = require('readline');

// Function to check if two strings are K-Ostad
function isKOstad(str1, str2, k) {
  // If lengths are different, more than k operations are needed
  if (str1.length !== str2.length) {
    return false;
  }

  // Count frequency of each character in both strings
  const freq1 = {};
  const freq2 = {};
  for (let char of str1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }
  for (let char of str2) {
    freq2[char] = (freq2[char] || 0) + 1;
  }

  // Calculate the number of mismatches
  let mismatches = 0;
  for (let char in freq1) {
    if (freq1[char] !== freq2[char]) {
      mismatches += Math.abs(freq1[char] - (freq2[char] || 0));
    }
  }

  // Each mismatch can be resolved with one operation
  return mismatches / 2 <= k;
}

// Read input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the first string: ', str1 => {
  rl.question('Enter the second string: ', str2 => {
    rl.question('Enter the value of K: ', k => {
      const result = isKOstad(str1, str2, parseInt(k));
      console.log(result ? 'Yes' : 'No');
      rl.close();
    });
  });
});
