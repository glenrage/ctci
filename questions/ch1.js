// 1.1 Implement an algorithim to determine if a string has all unique characters. What if you cant use additional data structures?

export const uniqueSet = str => new Set(str).size === str.length;

export function isUniqueLoop(str) {
  let len = str.length

  for(let i = 0; i < len; i++){
    for(let j = i + 1; j < len; j++) {
      if(str[i] === str[j]) return false
    }
  }

  return true
}





// 1.2 Given two strings, write a method to decide if one is a permutation of the other
