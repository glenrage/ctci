//find first non repeating character in string

function firstNonRepeatChar(str) {
  let dic = {}
  let length = str.length

  for(let i =0; i < length; i++) {
    let char = str[i]
    if(dic[char]) {
      dic[char] ++;
    } else dic[char] = 1;
  }
  for(let j in dic) {
    if(dic[j] == 1) {
      return j;
    }
  }
}

let firstTest = firstNonRepeatChar('the quick brown fox jumps then quickly blow air')
console.log(firstTest)

function removeDuplicateChar(str) {
  //store characters in hash table with for loop
  //loop through hash table, compare each iteration, push duplicate chars into an array

  let charMap = {}
  let length = str.length
  let dupes = []
  let char;

  for(let i = 0; i < length; i++) {
    let char = str[i];
    if(charMap[char]) {
      charMap[char]++
    } else charMap[char] = 1;
  }

  for(let j in charMap) {
    if(charMap[j] === 1)
    dupes.push(j)
  }

  return dupes.join('')
}

var dupesTest = removeDuplicateChar('Learn more javascript dude')
console.log(dupesTest)

function isPrime(num) {
  var divisor = 2;

  while(num > divisor) {
    if(num % divisor === 0) {
      return false;
    }
    else divisor++
  }
  return true;
}

var isPrimeTest = isPrime(137)
console.log(isPrimeTest)
