export default function quicksort<T>(array:T[], key:keyof T, desc:boolean):T[] {
    if (array.length <= 1) {
      return array;
    }
    const pivot = array[0][key];
    const left = []; 
    const right = []
    for (let i = 1; i < array.length; i++) {
      if(desc)array[i][key] < pivot ? left.push(array[i]) : right.push(array[i]);
      else array[i][key] > pivot ? left.push(array[i]) : right.push(array[i]);
    }
    return quicksort(left,key, desc).concat(array[0], quicksort(right, key, desc));
}