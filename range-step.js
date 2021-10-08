function range (start, end, step) {
  let array = [];
  let current = start;
  if (current > end){
    return;
  } else {
    array.push(current);
  }
  for (let i = start; i < end; i += step){
    if (current + step <=  end){
      current += step;
      array.push(current);   
    }
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
