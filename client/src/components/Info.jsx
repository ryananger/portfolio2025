import React, {useState, useEffect} from 'react';

const Info = function({name}) {
  const infos = {
    '15puzzl': (
      <>
      <h3>15puzzl</h3>
      <p>
        The 15 Puzzle is a sliding puzzle.
        <br/><br/>It has 15 square tiles numbered 1 to 15 in a frame that is 4 tile positions high and 4 tile positions wide, with one unoccupied position.
        <br/><br/>The goal of the puzzle is to place the tiles in numerical order (from left to right, top to bottom).
      </p>
      </>
    ),
    numberful: (
      <>
      <h3>numberful</h3>
      <p>
        A cross sum is a numerical logic puzzle akin to a crossword puzzle.
        <br/><br/>It consists of a grid of blank and numbered cells.
        <br/><br/>The blank cells are to be filled with a digit between 1 to 9, and are arranged such that digits do not repeat within a given row or column, and add up to the corresponding sum for each row and column.
      </p>
      </>
    ),
    sudoku: (
      <>
      <h3>sudoku</h3>
      <p>
      Sudoku is a logic-based number-placement puzzle.
      <br/><br/>In classic Sudoku, the objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 subgrids that compose the grid contains all of the digits from 1 to 9.
      </p>
      </>
    )
  };

  return (
    <div id={'info-' + name} className={'info texture v'}>
      {infos[name]}
    </div>
  );
};

export default Info;

