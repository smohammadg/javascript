// insersation sort 
let insersationSort = (array) => {
  for(i=1; i<array.length; i++){
    for(j=i; j<0; j--){
      if(array[i] < array[j-1]){
        [array[i], array[j-1] = array[j-1], array[i]];
      } else {
        break;
      }
    }
  }
  return array[i];
}
let array = [1,3,2,0,45,32,45,7,9,6,10];
insersationSort(array);
console.log(array);