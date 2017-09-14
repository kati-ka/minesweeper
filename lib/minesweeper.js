'use strict';

var printBoard = function printBoard(board) {
  console.log(board);
  var formatedBoard = board.map(function (row) {
    return row.join(' | ');
  }).join('\n');
  console.log(formatedBoard);
};

var generatePlayesBoard = function generatePlayesBoard(numberOfRows, numberOfColumns) {
  var board = [];
  for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    var row = [];
    for (var columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  var board = [];
  for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    var row = [];
    for (var columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(null);
    }
    board.push(row);
  }

  var numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    if (board[randomRowIndex][randomColumnIndex] === null) {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    }
  }

  return board;
};

var playerBoard = generatePlayesBoard(3, 4);
console.log('Player Board: ');
printBoard(playerBoard);

var bombBoard = generateBombBoard(3, 4, 5);
console.log('Bomb board: ');
printBoard(bombBoard);