export const getColsAndRows = <T>(
  arr: T[],
  numCols: number,
  numOfRows: number,
) => {
  const array: T[][] = [];
  Array.from({ length: numCols }, (_, i) => i + 1).forEach((v, j) => {
    array.push(arr?.slice((0 + j) * numOfRows, numOfRows * v) as T[]);
  });
  return array;
};
