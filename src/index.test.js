import FizzBuzz from './index';
import FizzBuzzList from './FizzBuzzList';

describe('FizzBuzz', () =>{
  it('display-errormessage-if-0', () => {
    const result = FizzBuzz(0);
    expect(result).toBe('Error');
  });
  
  it('returns-1-if-1', () => {
    const result = FizzBuzz(1);
    expect(result).toBe('1');
  });
  
  it('returns-Fizz-if-3', () => {
    const result = FizzBuzz(3);
    expect(result).toBe('Fizz');
  });
  
  it('returns-Buzz-if-5', () => {
    const result = FizzBuzz(5);
    expect(result).toBe('Buzz');
  });
});

describe('FizzBuzzList', () =>{
  it('returns-100-elements', () => {
    const result = FizzBuzzList();
    expect(result).toHaveLength(100);
  });

  it('check-third-element-equals-Fizz',() =>{
      const result = FizzBuzzList();
      expect(result[2]).toBe('Fizz');
  });

  it('check if last element is 100', () =>{ 
      const result = FizzBuzzList();
      expect(result[99]).toBe('100');
  });
});
