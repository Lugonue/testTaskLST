function serialize(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  let result = [];
  let currentNum = null;
  let currentLen = 0;
  for (let num of numbers) {
    if (num === currentNum) {
      currentLen++;
    } else {
      if (currentNum !== null) {
        result.push(`${currentLen} ${currentNum}`);
      }
      currentNum = num;
      currentLen = 1;
    }
  }
  result.push(`${currentLen} ${currentNum}`);
  return result.join(" ");
}

function deserialize(string) {
  let result = new Array();
  let parts = string.split(" ");
  for (let i = 0; i < parts.length; i += 2) {
    let count = parseInt(parts[i]);
    let num = parseInt(parts[i + 1]);
    for (let j = 0; j < count; j++) {
      result.push(String(num));
    }
  }
  return result.join(' ');
}

export {
  serialize,
  deserialize
}