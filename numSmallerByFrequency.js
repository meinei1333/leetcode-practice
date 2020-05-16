/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (oqueries, owords) {
  var queries = [];
  var words = [];
  var result = [];
  oqueries.forEach(element => {
      queries.push(countSmallestCharacter(element));
  });
  owords.forEach(element => {
      words.push(countSmallestCharacter(element));
  })
  queries.forEach((query, index) => {
      words.forEach(word => {
          if (!result[index]) {
              result[index] = 0;
          }
          if (word > query) {
              result[index] += 1;
          }
      })
  })
  console.log('queries', queries);
  console.log('queries2', queries2);
  console.log('words', words);
  console.log('result', result);
  return result;
  //console.log('a', getMaxCount('abbbcb'));
};


function countSmallestCharacter(str) {
  const charAndCount = new Array(256).fill(0);

  for (let i = 0; i < str.length; i++) {
      charAndCount[str.charCodeAt(i)]++;
  }

  for (let i = 0; i < charAndCount.length; i++) {
      if (charAndCount[i] !== 0) {
          return charAndCount[i];
      }
  }
}

function getMaxCount_series(str) {
  var ar = str.split('');
  var count = 1;
  var lastElement;
  var lastCount = 0;
  ar.forEach(element => {
      if (element === lastElement) {
          count++;
          if (lastCount < count) {
              lastCount = count;
          }
      }
      lastElement = element;
  });
  return lastCount;
}

function getMaxCount_RegExp(str) {
  let resultArray = [];
  for (let index = 0; index < str.length; index++) {
      const s = str[index];
      let regexp = RegExp(`${s}`, 'g');
      let array = str.match(regexp);
      resultArray.push(array.length);
  }
  return resultArray.sort()[resultArray.length - 1];
}

console.log('numSmallerByFrequency', numSmallerByFrequency(
  ["bba", "abaaaaaa", "aaaaaa", "bbabbabaab", "aba", "aa", "baab", "bbbbbb", "aab", "bbabbaabb"], ["aaabbba"]));