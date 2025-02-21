
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {

    /*

    Test cases provided by Amir
  

    
    test('Should classify as a Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
    });
  
    test('Should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');

    });
  
    test('Should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
    });

    */

    /*
    Name: Matthew Greeson
    Date: 2/21/25
    Course: CIS 470
    Assignment: Activity #3
    */

    // Test Case #1 
    test('Test Case #1: Should classify as Scalene Triangle', () => {
      expect(classifyTriangle(12, 6, 8)).toBe('Scalene');
    });

    // Test Case #2 
    test('Test Case #2: Should classify as Equilateral Triangle', () => {
      expect(classifyTriangle(1, 1, 1)).toBe('Equilateral');
    });

    // Test Case #3
    test('Test Case #3: Should classify as Isosceles Triangle', () => {
      expect(classifyTriangle(21, 11, 21)).toBe('Isosceles');
    });

    // Test Case #4 
    test('Test Case #4: Should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(10, 11, 100)).toBe('Not a Triangle');
    });

    /*

    This section contains test cases that fail on purpose (5-7)

    */

    // Test Case #5 
    test('Test Case #5: Should fail and not classify as a Scalene Triangle, but as an Isosceles', () => {
      expect(classifyTriangle(99, 99, 71)).toBe('Scalene');
    });

    // Test Case #6
    test('Test Case #6: Should fail and not classify as a Isosceles Triangle, but as a Scalene', () => {
      expect(classifyTriangle(23, 8, 16)).toBe('Isosceles');
    });

    // Test Case #7 
    test('Test Case #7: Should fail and not classify as a Equilateral Triangle, but should return "Not a Triangle', () => {
      expect(classifyTriangle(11, 80, 32)).toBe('Equilateral');
    });

    

    // Test Case #8 
    test('Test Case #8: Should classify as a Scalene Triangle', () => {
      expect(classifyTriangle(12, 6, 8)).toBe('Scalene');
    });

    // Test Case #9 
    test('Test Case #9: Should classify as a Scalene Triangle', () => {
      expect(classifyTriangle(12, 6, 8)).toBe('Scalene');
    });

    // Test Case #10 
    test('Test Case #10: Should classify as a Scalene Triangle', () => {
      expect(classifyTriangle(12, 6, 8)).toBe('Scalene');
    });

    // Test Case #11 
    test('Test Case #11: Should classify as a Scalene Triangle', () => {
      expect(classifyTriangle(12, 6, 8)).toBe('Scalene');
    });

    // Test Case #12 
    test('Test Case #12: Should classify as a Scalene Triangle', () => {
      expect(classifyTriangle(12, 6, 8)).toBe('Scalene');
    });

    // Test Case #13 
    test('Test Case #13: Should classify as a Scalene Triangle', () => {
      expect(classifyTriangle(12, 6, 8)).toBe('Scalene');
    });

    // Test Case #14
    test('Test Case #14: Should classify as a Scalene Triangle', () => {
      expect(classifyTriangle(12, 6, 8)).toBe('Scalene');
    });

    // Test Case #15
    test('Test Case #15: Should classify as a Scalene Triangle', () => {
      expect(classifyTriangle(12, 6, 8)).toBe('Scalene');
    });

    // Test Case #16 
    test('Test Case #16: Should classify as a Scalene Triangle', () => {
      expect(classifyTriangle(12, 6, 8)).toBe('Scalene');
    });

    // Test Case #17 
    test('Test Case #17: Should classify as a Scalene Triangle', () => {
      expect(classifyTriangle(12, 6, 8)).toBe('Scalene');
    });

    // Test Case #18
    test('Test Case #18: Should classify as a Scalene Triangle', () => {
      expect(classifyTriangle(12, 6, 8)).toBe('Scalene');
    });

    // Test Case #19
    test('Test Case #19: Should classify as a Scalene Triangle', () => {
      expect(classifyTriangle(12, 6, 8)).toBe('Scalene');
    });

    // Test Case #20 
    test('Test Case #20: Should classify as a Scalene Triangle', () => {
      expect(classifyTriangle(12, 6, 8)).toBe('Scalene');
    });

    //END OF TEST CASES

  });
  