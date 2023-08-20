const wordSearch = (letters, word) => {
    // tranpose the letter matrix
    // add rows of the tranposed to original matrix
    const transLetters = transpose(letters);
    letters = letters.concat(transLetters);
    const horizontalJoin = letters.map(ls => ls.join(''))

    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    if (word === "") return true
    return false;
};

const transpose = function (matrix) {
    let newMatrix = [];
    // i = # of arrays - original rows
    for (let j = 0; j < matrix[0].length; j++) {
      newMatrix.push([]);
    }
    //console.log(newMatrix.length);
    for (let i = 0; i < matrix.length; i++) {
      // j = # of values in array - original columns
      for (let j = 0; j < matrix[0].length; j++) {
        newMatrix[j][i] = matrix[i][j];
      }
    }
    return newMatrix;
  };

  
module.exports = wordSearch