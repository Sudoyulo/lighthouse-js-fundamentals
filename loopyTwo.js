function loopyLighthouse (range,tuple,words){

  for (let i = range[0]; i <= range[1]; i++){
    if ( i % tuple[0] === 0 && i % tuple[1] === 0){
      console.log(words[0] + words[1]);
    } else if (i % tuple[0] === 0){
      console.log(words[0]);
    } else if (i % tuple[1] === 0){
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
  return 0;
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

