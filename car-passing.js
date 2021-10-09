const carPassing = function (cars, speed) {

  var input = {
    time : Date.now(),
    "speed" : speed
  }

  cars.push(input);

  return cars;

}
