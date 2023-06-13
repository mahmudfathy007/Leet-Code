var interpret = function(command) {
  let result = '';

  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') {
      result += 'G';
    } else if (command[i] === '(' && command[i + 1] === ')') {
      result += 'o';
      i++; // Skip the next character since it has been processed
    } else if (command[i] === '(' && command[i + 1] === 'a' && command[i + 2] === 'l' && command[i + 3] === ')') {
      result += 'al';
      i += 3; // Skip the next three characters since they have been processed
    }
  }

  return result;
};
