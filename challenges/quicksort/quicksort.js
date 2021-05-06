// let left
// let right
function QuickSort(arr, left=0, right=arr.length-1) {
 
  
// console.log(right)
  let pivot;
  let position;

  if (left < right) {
    pivot = right;
    position = Partition(arr, pivot, left, right);
    QuickSort(arr, left, position - 1);
    QuickSort(arr, position + 1, right);
  }
  return arr;
}
function Partition(arr, pivot, left, right) {
  let pivotValue = arr[pivot],
    position = left;
  for (let x = left; x < right; x++) {
    if (arr[x] < pivotValue) {
      Swap(arr, x, position);
      position++;
    }
  }
  Swap(arr, right, position);
  return position;
}
function Swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports= QuickSort