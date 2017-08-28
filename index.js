function theBeatlesPlay(array1, array2) {
  let array = []
  let arrayLength = array1.length
  let i = 0

  while (i < arrayLength) {
    array.push(array1[i] + " plays " + array2[i])
    i += 1
  }
  return array
}

function johnLennonFacts(array) {
  for (let i=0; i < array.length; i++) {
    array[i] = array[i] + "!!!"
  }
  return array
}

function iLoveTheBeatles(number) {
  let newArray = []

  do {
    newArray.push("I love the Beatles!")
    number += 1
  } while (number < 15)

  return newArray
}
