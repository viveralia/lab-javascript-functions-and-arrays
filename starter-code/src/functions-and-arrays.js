// Find the maximum
const maxOfTwoNumbers = (num1, num2) => {
  if (num1 > num2) {
    return num1
  } else if (num2 > num1) {
    return num2
  } else {
    return num1
  }
}

const result = maxOfTwoNumbers(4, 4)
console.log(`Max: ${result}`)

// Finding Longest Word
var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
]

const findLongestWord = arr => {
  let longestWordLength = 0
  let longestWord
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWordLength) {
      longestWordLength = arr[i].length
      longestWord = arr[i]
    }
  }
  return longestWord
}

const result2 = findLongestWord(words)
console.log(`Longest Word: ${result2}`)

// Calculating a Sum
var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]

const sumArray = arr =>
  arr.reduce((acc, currentValue) => {
    return acc + currentValue
  }, 0)

const result3 = sumArray(numbers)
console.log(`Sum: ${result3}`)

// Calculate the Average
var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9]

const averageNumbers = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      var average = sumArray(arr) / arr.length
    } else {
      return undefined
    }
  }
  return average
}
const result4 = averageNumbers(numbersAvg)
console.log(`Average: ${result4}`)

// Array of Strings
var wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
]

const averageWordLength = arr => {
  let wordsArrToLengthArr = []
  for (let i = 0; i < arr.length; i++) {
    wordsArrToLengthArr.push(arr[i].length)
  }
  return averageNumbers(wordsArrToLengthArr)
}

const result5 = averageWordLength(wordsArr)
console.log(`Average with strings: ${result5}`)

// Unique Arrays
var wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
]

const uniquifyArray = arr => {
  if (arr.length > 0) {
    let uniqueArr = arr.filter((e, i) => arr.indexOf(e) === i)
    return uniqueArr
  } else {
    return undefined
  }
}

const result6 = uniquifyArray(wordsUnique)
console.log(`Unique Array:`, result6)

// Finding Elements
var wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
]

const doesWordExist = (arr, wordToLookFor) => arr.includes(wordToLookFor)

const result7 = doesWordExist(wordsFind, 'lol')
console.log(
  `The array ${
    result7 ? 'includes' : 'does not include'
  } the word you are looking for`
)

// Counting Repetion
var wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
]
const howManyTimes = (arr, wordToSearchFor) => {
  if (arr.length > 0) {
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === wordToSearchFor) {
        counter++
      }
    }
    return counter
  } else {
    return false
  }
}

const result8 = howManyTimes(wordsCount, 'matter')
console.log(
  `The word you are looking for appears ${result8} time(s) in the array`
)

// Bonus Quest

var matrix = [
  [
    08,
    02,
    22,
    97,
    38,
    15,
    00,
    40,
    00,
    75,
    04,
    05,
    07,
    78,
    52,
    12,
    50,
    77,
    91,
    08
  ],
  [
    49,
    49,
    99,
    40,
    17,
    81,
    18,
    57,
    60,
    87,
    17,
    40,
    98,
    43,
    69,
    48,
    04,
    56,
    62,
    00
  ],
  [
    81,
    49,
    31,
    73,
    55,
    79,
    14,
    29,
    93,
    71,
    40,
    67,
    53,
    88,
    30,
    03,
    49,
    13,
    36,
    65
  ],
  [
    52,
    70,
    95,
    23,
    04,
    60,
    11,
    42,
    69,
    24,
    68,
    56,
    01,
    32,
    56,
    71,
    37,
    02,
    36,
    91
  ],
  [
    22,
    31,
    16,
    71,
    51,
    67,
    63,
    89,
    41,
    92,
    36,
    54,
    22,
    40,
    40,
    28,
    66,
    33,
    13,
    80
  ],
  [
    24,
    47,
    32,
    60,
    99,
    03,
    45,
    02,
    44,
    75,
    33,
    53,
    78,
    36,
    84,
    20,
    35,
    17,
    12,
    50
  ],
  [
    32,
    98,
    81,
    28,
    64,
    23,
    67,
    10,
    26,
    38,
    40,
    67,
    59,
    54,
    70,
    66,
    18,
    38,
    64,
    70
  ],
  [
    67,
    26,
    20,
    68,
    02,
    62,
    12,
    20,
    95,
    63,
    94,
    39,
    63,
    08,
    40,
    91,
    66,
    49,
    94,
    21
  ],
  [
    24,
    55,
    58,
    05,
    66,
    73,
    99,
    26,
    97,
    17,
    78,
    78,
    96,
    83,
    14,
    88,
    34,
    89,
    63,
    72
  ],
  [
    21,
    36,
    23,
    09,
    75,
    00,
    76,
    44,
    20,
    45,
    35,
    14,
    00,
    61,
    33,
    97,
    34,
    31,
    33,
    95
  ],
  [
    78,
    17,
    53,
    28,
    22,
    75,
    31,
    67,
    15,
    94,
    03,
    80,
    04,
    62,
    16,
    14,
    09,
    53,
    56,
    92
  ],
  [
    16,
    39,
    05,
    42,
    96,
    35,
    31,
    47,
    55,
    58,
    88,
    24,
    00,
    17,
    54,
    24,
    36,
    29,
    85,
    57
  ],
  [
    86,
    56,
    00,
    48,
    35,
    71,
    89,
    07,
    05,
    44,
    44,
    37,
    44,
    60,
    21,
    58,
    51,
    54,
    17,
    58
  ],
  [
    19,
    80,
    81,
    68,
    05,
    94,
    47,
    69,
    28,
    73,
    92,
    13,
    86,
    52,
    17,
    77,
    04,
    89,
    55,
    40
  ],
  [
    04,
    52,
    08,
    83,
    97,
    35,
    99,
    16,
    07,
    97,
    57,
    32,
    16,
    26,
    26,
    79,
    33,
    27,
    98,
    66
  ],
  [
    88,
    36,
    68,
    87,
    57,
    62,
    20,
    72,
    03,
    46,
    33,
    67,
    46,
    55,
    12,
    32,
    63,
    93,
    53,
    69
  ],
  [
    04,
    42,
    16,
    73,
    38,
    25,
    39,
    11,
    24,
    94,
    72,
    18,
    08,
    46,
    29,
    32,
    40,
    62,
    76,
    36
  ],
  [
    20,
    69,
    36,
    41,
    72,
    30,
    23,
    88,
    34,
    62,
    99,
    69,
    82,
    67,
    59,
    85,
    74,
    04,
    36,
    16
  ],
  [
    20,
    73,
    35,
    29,
    78,
    31,
    90,
    01,
    74,
    31,
    49,
    71,
    48,
    86,
    81,
    16,
    23,
    57,
    05,
    54
  ],
  [
    01,
    70,
    54,
    71,
    83,
    51,
    54,
    69,
    16,
    92,
    33,
    48,
    61,
    43,
    52,
    01,
    89,
    19,
    67,
    48
  ]
]

const greatestProduct = arr => {
  let greatestProductSoFar = 0
  // One axis
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let currentProduct =
        arr[i][j] * arr[i][j + 1] * arr[i][j + 2] * arr[i][j + 3]
      if (currentProduct > greatestProductSoFar) {
        greatestProductSoFar = currentProduct
      }
    }
  }
  return greatestProductSoFar
}
console.log(greatestProduct(matrix))
