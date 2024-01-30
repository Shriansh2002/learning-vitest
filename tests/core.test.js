import { it, expect, describe, beforeEach } from 'vitest';
import {
    Stack,
    calculateDiscount,
    canDrive,
    createProduct,
    fetchData,
    getCoupons,
    isPriceInRange,
    isStrongPassword,
    isValidUsername,
    validateUserInput
} from '../src/core';

// describe('getCoupons', () => {
//     it('should return an array of coupons', () => {
//         const coupons = getCoupons();
//         expect(Array.isArray(coupons)).toBe(true);
//         expect(coupons.length).toBeGreaterThan(0);
//     });

//     it('should return an array with valid coupon codes', () => {
//         const coupons = getCoupons();
//         coupons.forEach((coupon) => {
//             expect(coupon).toHaveProperty('code');
//             expect(typeof coupon.code).toBe('string');
//             expect(coupon.code).toBeTruthy();
//         });
//     });

//     it('should return an array with valid discounts', () => {
//         const coupons = getCoupons();
//         coupons.forEach((coupon) => {
//             expect(coupon).toHaveProperty('discount');
//             expect(typeof coupon.discount).toBe('number');
//             expect(coupon.discount).toBeGreaterThan(0);
//             // expect(coupon.discount).toBeLessThanOrEqual(1);
//         });
//     });
// });

// describe('calculateDiscount', () => {
//     it('should return discounted price if given valid code', () => {
//         expect(calculateDiscount(10, 'SAVE10')).toBe(9);
//         expect(calculateDiscount(10, 'SAVE20')).toBe(8);
//     });

//     it('should handle non-numeric price', () => {
//         expect(calculateDiscount('10', 'SAVE10')).toMatch(/invalid/i);
//     });

//     it('should handle negative price', () => {
//         expect(calculateDiscount(-10, 'SAVE10')).toMatch(/invalid/i);
//     });

//     it('should handle invalid discount code', () => {
//         expect(calculateDiscount(10, 'INVALID')).toBe(10);
//     });
// });

// describe('validateUserInput', () => {
//     it('should return success if given valid input', () => {
//         expect(validateUserInput('shriansh', 42)).toMatch(/success/i);
//     });

//     it('should return an error if username is not a string', () => {
//         expect(validateUserInput(1, 42)).toMatch(/invalid/i);
//     });

//     it('should return an error if username is less than 3 characters', () => {
//         expect(validateUserInput('mo', 42)).toMatch(/invalid/i);
//     });

//     it('should return an error if username is longer than 255 characters', () => {
//         expect(validateUserInput('A'.repeat(256), 42)).toMatch(/invalid/i);
//     });

//     it('should return an error if age is not a number', () => {
//         expect(validateUserInput('mosh', '42')).toMatch(/invalid/i);
//     });

//     it('should return an error if age is less than 18', () => {
//         expect(validateUserInput('mosh', 17)).toMatch(/invalid/i);
//     });

//     it('should return an error if age is greater than 100', () => {
//         expect(validateUserInput('mosh', 101)).toMatch(/invalid/i);
//     });

//     it('should return an error if both username and age are invalid', () => {
//         expect(validateUserInput('', 0)).toMatch(/invalid username/i);
//         expect(validateUserInput('', 0)).toMatch(/invalid age/i);
//     });
// });

// describe('isPriceInRange', () => {
//     it.each([
//         { scenario: 'price < min', price: -10, result: false },
//         { scenario: 'price = min', price: 0, result: true },
//         {
//             scenario: 'price between min and max',
//             price: 50,
//             result: true
//         },
//         { scenario: 'price = max', price: 100, result: true },
//         { scenario: 'price > max', price: 200, result: false }
//     ])('should return $result if $scenario', ({ price, result }) => {
//         expect(isPriceInRange(price, 0, 100)).toBe(result);
//     });
// });

// describe('isValidUsername', () => {
//     const minLength = 5;
//     const maxLength = 15;

//     it('should return false if username is too short', () => {
//         expect(isValidUsername('a'.repeat(minLength - 1))).toBe(false);
//     });

//     it('should return false if username is too long', () => {
//         expect(isValidUsername('a'.repeat(maxLength + 1))).toBe(false);
//     });

//     it('should return true if username is at the min or max length', () => {
//         expect(isValidUsername('a'.repeat(minLength))).toBe(true);
//         expect(isValidUsername('a'.repeat(maxLength))).toBe(true);
//     });

//     it('should return true if username is within the length constraint', () => {
//         expect(isValidUsername('a'.repeat(minLength + 1))).toBe(true);
//         expect(isValidUsername('a'.repeat(maxLength - 1))).toBe(true);
//     });

//     it('should return false for invalid input types', () => {
//         expect(isValidUsername(null)).toBe(false);
//         expect(isValidUsername(undefined)).toBe(false);
//         expect(isValidUsername(1)).toBe(false);
//     });

// });

// describe('canDrive', () => {
//     it('should return error for invalid country code', () => {
//         expect(canDrive(20, 'FR')).toMatch(/invalid/i);
//     });

//     it.each([
//         { age: 15, country: 'US', result: false },
//         { age: 16, country: 'US', result: true },
//         { age: 17, country: 'US', result: true },
//         { age: 16, country: 'UK', result: false },
//         { age: 17, country: 'UK', result: true },
//         { age: 18, country: 'UK', result: true }
//     ])('should return $result for $age, $country', ({ age, country, result }) => {
//         expect(canDrive(age, country)).toBe(result);
//     });
// });

// describe('fetchData', () => {
//     it('should return a promise that will resolve to an array of numbers', async () => {
//         try {
//             await fetchData();
//         } catch (error) {
//             expect(error).toHaveProperty('reason');
//             expect(error.reason).toMatch(/fail/i);
//         }
//     });
// });

// describe('Stack', () => {
//     let stack;

//     beforeEach(() => {
//         stack = new Stack();
//     });

//     it('push should add an item to the stack', () => {
//         stack.push(1);

//         expect(stack.size()).toBe(1);
//     });

//     it('pop should remove and return the top item from the stack', () => {
//         stack.push(1);
//         stack.push(2);

//         const poppedItem = stack.pop();

//         expect(stack.size()).toBe(1);
//         expect(poppedItem).toBe(2);
//         expect(stack.size()).toBe(1);
//     });

//     it('pop should throw an error if stack is empty', () => {
//         expect(() => stack.pop()).toThrow(/empty/i);
//     });

//     it('peek should return the top item from the stack without removing it', () => {
//         stack.push(1);
//         stack.push(2);
//         stack.push(10);

//         const peekedItem = stack.peek();

//         expect(peekedItem).toBe(10);
//         expect(stack.size()).toBe(3);
//     });

//     it('peek should throw an error if stack is empty', () => {
//         expect(() => stack.peek()).toThrow(/empty/i);
//     });

//     it('isEmpty should return true if stack is empty', () => {
//         expect(stack.isEmpty()).toBe(true);
//     });

//     it('isEmpty should return false if stack is not empty', () => {
//         stack.push(1);
//         expect(stack.isEmpty()).toBe(false);
//     });

//     it('size should return the number of items in the stack', () => {
//         stack.push(1);
//         stack.push(2);

//         expect(stack.size()).toBe(2);
//     });

//     it('clear should remove all items from the stack', () => {
//         stack.push(1);
//         stack.push(2);

//         stack.clear();

//         expect(stack.size()).toBe(0);
//     });

// });


// describe('createProduct', () => {
//     it('no product name', () => {
//         const product = { price: 1000 };
//         const result = createProduct(product);
//         expect(result).toHaveProperty('success');
//         expect(result).toHaveProperty('error');

//         expect(typeof result.error === 'object');
//         expect(result.error).toHaveProperty('code');
//         expect(result.error.code).toBe('invalid_name');

//         expect(result.success).toBe(false);
//     });

//     it('no product price', () => {
//         const product = { name: 'iPhone' };
//         const result = createProduct(product);
//         expect(result).toHaveProperty('success');
//         expect(result).toHaveProperty('error');

//         expect(typeof result.error === 'object');
//         expect(result.error).toHaveProperty('code');
//         expect(result.error.code).toBe('invalid_price');

//         expect(result.success).toBe(false);
//     });

//     it('product price <= 0', () => {
//         const product = { name: 'iPhone', price: 0 };
//         const result = createProduct(product);
//         expect(result).toHaveProperty('success');
//         expect(result).toHaveProperty('error');

//         expect(typeof result.error === 'object');
//         expect(result.error).toHaveProperty('code');
//         expect(result.error.code).toBe('invalid_price');

//         expect(result.success).toBe(false);
//     });

//     it('valid product', () => {
//         const product = { name: 'iPhone', price: 1000 };
//         const result = createProduct(product);
//         expect(result).toHaveProperty('success');
//         expect(result).toHaveProperty('message');

//         expect(result.success).toBe(true);
//     });

// });

describe('isStrongPassword', () => {
    it('password is less than 8 characters', () => {
        expect(isStrongPassword('9y8h')).toBe(false);
    });

    it('password is greater than 255 characters', () => {
        expect(isStrongPassword('9y8h'.repeat(64))).toBe(false);
    });

    it('password does not contain at least one uppercase letter', () => {
        expect(isStrongPassword('9y8hjklm')).toBe(false);
    });

    it('password does not contain at least one lowercase letter', () => {
        expect(isStrongPassword('9Y8HJKLM')).toBe(false);
    });

    it('password does contain at least one number', () => {
        expect(isStrongPassword('yYhHjJkKlL')).toBe(false);
    });

    it('correct password', () => {
        expect(isStrongPassword('9y8hjklM')).toBe(true);
    });
});