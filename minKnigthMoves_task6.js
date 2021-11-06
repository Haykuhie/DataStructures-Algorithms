function minKnightMoves(boardSize, startX, startY, endX, endY) {
    const board = [];
    for (let i = 0; i < boardSize; i++) {
      board[i] = [];
    }
  
    const addMove = (x, y, level) => {
      if (
        x >= 0 &&
        x <= boardSize - 1 &&
        y >= 0 &&
        y <= boardSize - 1 &&
        board[x][y] == null
      ) {
        board[x][y] = level;
      }
    };
  
    const addAllMoves = (x, y, level) => {
      addMove(x + 1, y + 2, level);
      addMove(x + 2, y + 1, level);
      addMove(x + 2, y - 1, level);
      addMove(x + 1, y - 2, level);
      addMove(x - 1, y - 2, level);
      addMove(x - 2, y - 1, level);
      addMove(x - 2, y + 1, level);
      addMove(x - 1, y + 2, level);
    };
  
    const addAllPossible = (level) => {
      for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
          if (board[i][j] === level) {
            addAllMoves(i, j, level + 1);
          }
        }
      }
    };
    return (findPath = () => {
      addMove(startX, startY, 0);
      let index = 0;
      do {
        addAllPossible(index++);
      } while (board[endX][endY] == null);
      return board[endX][endY];
    });
  }
  const final= minKnightMoves(8, 0, 7, 7, 0)
  console.log(final());
