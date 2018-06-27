import FizzBuzz from './index';

const FizzBuzzList = () => {
  return Array(100).fill(1).map((v, i) => FizzBuzz(i + 1));
};

export default FizzBuzzList;
