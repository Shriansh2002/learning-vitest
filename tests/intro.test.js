import { describe, test, it, expect } from 'vitest';
import { calculateAverage, factorial, fizzBuzz, max } from '../src/intro';

// describe(name, function);
describe('max', () => {
    // it(name, function)
    it('should return the first argument if it is greater test1', () => {
        expect(max(2, 1)).toBe(2);
    });

    it('should return the second argument if it is greater test2', () => {
        expect(max(1, 2)).toBe(2);
    });

    it('should return either argument if they are equal test3', () => {
        expect(max(2, 2)).toBe(2);
    });
});

describe('fizzBuzz', () => {
    it('should return Fizz if the number is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    it('should return Fizz if the number is divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });

    it('should return Buzz if the number is divisible by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });

    it('should return the number if it is not divisible by 3 or 5', () => {
        expect(fizzBuzz(1)).toBe('1');
    });
});


describe('calculateAverage', () => {
    it('should return NaN if the array is empty', () => {
        expect(calculateAverage([])).toBe(NaN);
    });

    it('should calculate the average of the numbers in the array', () => {
        expect(calculateAverage([1, 2, 3])).toBe(2);
    });

    it('should return the number if the array only has one element', () => {
        expect(calculateAverage([1])).toBe(1);
    });

    it('should return the number if the array only has two elements', () => {
        expect(calculateAverage([1, 2])).toBe(1.5);
    });

    it('should return the number if not passed the array', () => {
        expect(calculateAverage()).toBe(NaN);
    });

    it('should return the NaN if the array is null', () => {
        expect(calculateAverage(null)).toBe(NaN);
    });
});

describe('factorial', () => {
    it('should return 1 if the number is 0', () => {
        expect(factorial(0)).toBe(1);
    });

    it('should return 1 if the number is 1', () => {
        expect(factorial(1)).toBe(1);
    });

    it('should return the factorial of 5', () => {
        expect(factorial(5)).toBe(120);
    });

    it('should return the factorial of 6', () => {
        expect(factorial(6)).toBe(720);
    });

    it('should return NaN if the number is negative', () => {
        expect(factorial(-1)).toBe(undefined);
    });

});