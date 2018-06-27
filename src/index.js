const FizzBuzz = (number) => {
  if(number === 3){
    return 'Fizz';
  }
  else if(number === 5){
    return 'Buzz';
  }
  else if(number <= 0){
    return 'Error';
  }
  return number.toString();
};
export default FizzBuzz;

