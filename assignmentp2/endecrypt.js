const readline = require('readline');

// Function to encrypt the string
function encrypt(s) {
  if (!s) return '';

  let result = '';
  let count = 1;

  // Traverse the string and count consecutive identical characters
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      result += s[i - 1] + count.toString();
      count = 1;
    }
  }

  // Append the last character and its count
  result += s[s.length - 1] + count.toString();

  // Reverse the result to get the encrypted string
  return result.split('').reverse().join('');
}

// Function to decrypt the string
function decrypt(encrypted) {
  if (!encrypted) return '';

  // Reverse the encrypted string to get the intermediate result
  const intermediate = encrypted.split('').reverse().join('');

  let result = '';
  let i = 0;

  // Traverse the intermediate result and reconstruct the original string
  while (i < intermediate.length) {
    const char = intermediate[i];
    i++;
    let count = '';

    // Extract the count (digits) following the character
    while (i < intermediate.length && /\d/.test(intermediate[i])) {
      count += intermediate[i];
      i++;
    }

    // Repeat the character based on the count
    result += char.repeat(count ? parseInt(count) : 1);
  }

  return result;
}

// Read input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the string to encrypt: ', inputString => {
  // Encrypt the string
  const encrypted = encrypt(inputString);
  console.log(`Encrypted: ${encrypted}`);

  // Decrypt the string
  const decrypted = decrypt(encrypted);
  console.log(`Decrypted: ${decrypted}`);

  // Check if decrypted string matches the input
  console.log(`Decrypted matches input: ${decrypted === inputString}`);

  rl.close();
});
