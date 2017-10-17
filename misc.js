//find first non repeating character in string

function firstNonRepeatChar(str) {
  let dic = {};
  let length = str.length;

  for (let i = 0; i < length; i++) {
    let char = str[i];
    if (dic[char]) {
      dic[char]++;
    } else dic[char] = 1;
  }
  for (let j in dic) {
    if (dic[j] == 1) {
      return j;
    }
  }
}

let firstTest = firstNonRepeatChar(
  'the quick brown fox jumps then quickly blow air'
);
console.log(firstTest);

function removeDuplicateChar(str) {
  //store characters in hash table with for loop
  //loop through hash table, compare each iteration, push duplicate chars into an array

  let charMap = {};
  let length = str.length;
  let dupes = [];
  let char;

  for (let i = 0; i < length; i++) {
    let char = str[i];
    if (charMap[char]) {
      charMap[char]++;
    } else charMap[char] = 1;
  }

  for (let j in charMap) {
    if (charMap[j] === 1) dupes.push(j);
  }

  return dupes.join('');
}

var dupesTest = removeDuplicateChar('Learn more javascript dude');
console.log(dupesTest);

function isPrime(num) {
  var divisor = 2;

  while (num > divisor) {
    if (num % divisor === 0) {
      return false;
    } else divisor++;
  }
  return true;
}

var isPrimeTest = isPrime(137);
console.log(isPrimeTest);

const hamming = (a, b) => {
  if (a.length !== b.length) {
    throw new Error('Strings must be equal in length');
  }

  let dist = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      dist++;
    }
  }

  return dist;
};

module.exports = hamming;

function primeFactors(n) {
  var factors = [],
    divisor = 2;

  while (n > 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

function fibonacci(n) {
  var fibo = [0, 1];

  if (n <= 2) return 1;

  for (var i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo[n];
}

function smallestCommons(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var multiple = max;
  console.log(multiple);

  for (var i = max; i >= min; i--) {
    if (multiple % i !== 0) {
      multiple += max;
      i = max;
    }
  }

  return multiple;
}

function sumPrimes(num) {
  function isPrime(n) {
    for (var i = 2; i <= n; i++) {
      if (n % i === 0 && n !== i) return false;
    }
    return true;
  }
  if (num === 1) return 0;

  if (isPrime(num) === false) {
    return sumPrimes(num - 1);
  }

  if (isPrime(num) === true) {
    return num + sumPrimes(num - 1);
  }
}

function sumFibs(num) {
  let arrFibs = [1];
  for (var i = 1; i <= num; ) {
    arrFibs.push(i);
    i = arrFibs[arrFibs.length - 1] + arrFibs[arrFibs.length - 2];
  }

  var res = arrFibs.reduce(function(prev, curr) {
    if (curr % 2 !== 0) return prev + curr;
    else return prev;
  });
  return res;
}
