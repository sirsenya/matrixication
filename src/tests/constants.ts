export const matrix1 = [
  [1, 2, 3, 3, 2, 3, 4, 2, 1, 3],
  [3, 3, 1, 2, 2, 2, 2, 2, 4, 4],
  [1, 2, 2, 2, 1, 3, 2, 1, 3, 3],
  [1, 1, 1, 4, 4, 1, 1, 3, 3, 4],
  [1, 1, 4, 4, 2, 3, 4, 3, 4, 1],
  [2, 4, 1, 4, 4, 4, 1, 2, 3, 1],
  [3, 3, 2, 2, 2, 2, 4, 2, 2, 4],
  [4, 1, 3, 3, 4, 4, 1, 3, 3, 1],
  [3, 2, 1, 3, 3, 1, 3, 4, 2, 1],
];
export const modified1 = [
  [1, 2, 3, 3, 2, 3, 4, 2, 1, 3],
  [3, 3, 1, 0, 0, 0, 0, 0, 4, 4],
  [0, 0, 0, 0, 1, 3, 2, 1, 3, 3],
  [0, 0, 0, 0, 4, 1, 1, 3, 3, 4],
  [0, 1, 4, 0, 2, 3, 4, 3, 4, 1],
  [2, 4, 1, 0, 0, 0, 1, 2, 3, 1],
  [3, 3, 0, 0, 0, 0, 4, 2, 2, 4],
  [4, 1, 3, 3, 4, 4, 1, 3, 3, 1],
  [3, 2, 1, 3, 3, 1, 3, 4, 2, 1],
];

export const addressesResult1 = [
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [1, 7],
  [2, 0],
  [2, 1],
  [2, 2],
  [2, 3],
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 3],
  [4, 0],
  [4, 3],
  [5, 3],
  [5, 4],
  [5, 5],
  [6, 2],
  [6, 3],
  [6, 4],
  [6, 5],
];

export const matrix2 = [
  [1, 3, 2, 4],
  [3, 3, 3, 1],
  [1, 3, 2, 4],
];

export const modified2 = [
  [1, 0, 2, 4],
  [0, 0, 0, 1],
  [1, 0, 2, 4],
];

export const addressesResult2 = [
  [0, 1],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 1],
];

export const matrix3 = [
  [4, 3, 1, 2, 4, 2],
  [4, 4, 3, 3, 2, 2],
  [4, 4, 1, 1, 3, 4],
  [2, 3, 2, 3, 3, 2],
  [1, 3, 3, 1, 1, 2],
  [2, 4, 1, 1, 4, 2],
  [1, 2, 3, 3, 1, 3],
];
export const modified3 = [
  [0, 3, 1, 2, 4, 2],
  [0, 4, 3, 3, 2, 2],
  [0, 4, 1, 1, 3, 4],
  [2, 3, 2, 3, 3, 0],
  [1, 3, 3, 1, 1, 0],
  [2, 4, 1, 1, 4, 0],
  [1, 2, 3, 3, 1, 3],
];

export const addressesResult3 = [
  [0, 0],
  [1, 0],
  [2, 0],
  [3, 5],
  [4, 5],
  [5, 5],
];

export const matrix4 = [
  [4, 3, 1, 2, 4, 2],
  [4, 4, 3, 3, 2, 2],
  [4, 4, 1, 1, 3, 4],
  [2, 3, 2, 3, 3, 2],
  [1, 3, 3, 1, 3, 2],
  [2, 4, 1, 3, 3, 3],
  [1, 2, 3, 3, 3, 3],
];

export const modified4 = [
  [0, 3, 1, 2, 4, 2],
  [0, 4, 3, 3, 2, 2],
  [0, 4, 1, 1, 0, 4],
  [2, 3, 2, 3, 0, 2],
  [1, 3, 3, 1, 0, 2],
  [2, 4, 1, 0, 0, 0],
  [1, 2, 0, 0, 0, 0],
];

export const addressesResult4 = [
  [0, 0],
  [1, 0],
  [2, 0],
  [2, 4],
  [3, 4],
  [4, 4],
  [5, 3],
  [5, 4],
  [5, 5],
  [6, 2],
  [6, 3],
  [6, 4],
  [6, 5],
];

export const matrix5 = [
  [3, 3, 3, 1],
  [1, 2, 2, 1],
];

export const modified5 = [
  [0, 0, 0, 1],
  [1, 2, 2, 1],
];

export const addressesResult5 = [
  [0, 0],
  [0, 1],
  [0, 2],
];

export const matrix1Copy = JSON.parse(JSON.stringify(matrix1));
export const matrix2Copy = JSON.parse(JSON.stringify(matrix2));
export const matrix3Copy = JSON.parse(JSON.stringify(matrix3));
export const matrix4Copy = JSON.parse(JSON.stringify(matrix4));
export const matrix5Copy = JSON.parse(JSON.stringify(matrix5));
export const modified1Copy = JSON.parse(JSON.stringify(modified1));
export const modified2Copy = JSON.parse(JSON.stringify(modified2));
export const modified3Copy = JSON.parse(JSON.stringify(modified3));
export const modified4Copy = JSON.parse(JSON.stringify(modified4));
export const modified5Copy = JSON.parse(JSON.stringify(modified5));
