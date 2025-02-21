
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

    // Test Case #1 (BVT - Minimum valid scalene triangle)
    test('Test Case #1: Should classify as a Scalene Triangle (smallest valid triangle)', () => {
      expect(classifyTriangle(2, 3, 4)).toBe('Scalene');
    });

    // Test Case #2 (BVT - Maximum valid scalene triangle within reasonable limits)
    test('Test Case #2: Should classify as a Scalene Triangle (large values)', () => {
      expect(classifyTriangle(200, 199, 198)).toBe('Scalene');
    });

    // Test Case #3 (BVT - Smallest isosceles triangle)
    test('Test Case #3: Should classify as an Isosceles Triangle', () => {
      expect(classifyTriangle(6, 6, 10)).toBe('Isosceles');
    });

    // Test Case #4 (BVT - Large isosceles triangle)
    test('Test Case #4: Should classify as an Isosceles Triangle (large values)', () => {
      expect(classifyTriangle(100, 100, 150)).toBe('Isosceles');
    });

    // Test Case #5 (BVT - Smallest equilateral triangle)
    test('Test Case #5: Should classify as an Equilateral Triangle (smallest case)', () => {
      expect(classifyTriangle(2, 2, 2)).toBe('Equilateral');
    });

    // Test Case #6 (BVT - Large equilateral triangle)
    test('Test Case #6: Should classify as an Equilateral Triangle (large values)', () => {
      expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');
    });

    // Test Case #7 (BVT - Triangle Inequality Violation, just below threshold)
    test('Test Case #7: Should return "Not a Triangle" for nearly valid case', () => {
      expect(classifyTriangle(2, 3, 6)).toBe('Not a Triangle');
    });

    // Test Case #8 (BVT - Negative values)
    test('Test Case #8: Should return "Error: Input conditions C1, C2, or C3 failed." for negative side lengths', () => {
      expect(classifyTriangle(-4, 4, 4)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // Test Case #9 (BVT - Zero values)
    test('Test Case #9: Should return "Error: Input conditions C1, C2, or C3 failed." for zero-length sides', () => {
      expect(classifyTriangle(0, 6, 6)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // Test Case #10 (BVT - Extremely large valid scalene triangle)
    test('Test Case #10: Should classify as a Scalene Triangle with extreme large values', () => {
      expect(classifyTriangle(200, 199, 198)).toBe('Scalene');
    });

    // Test Case #11 (ECP - Typical scalene triangle)
    test('Test Case #11: Should classify as a Scalene Triangle', () => {
      expect(classifyTriangle(8, 7, 5)).toBe('Scalene');
    });

    // Test Case #12 (ECP - Typical isosceles triangle)
    test('Test Case #12: Should classify as an Isosceles Triangle', () => {
      expect(classifyTriangle(12, 12, 7)).toBe('Isosceles');
    });

    // Test Case #13 (ECP - Typical equilateral triangle)
    test('Test Case #13: Should classify as an Equilateral Triangle', () => {
      expect(classifyTriangle(30, 30, 30)).toBe('Equilateral');
    });

    // Test Case #14 (ECP - Valid, but nearly flat triangle)
    test('Test Case #14: Should return "Not a Triangle" for nearly flat triangle', () => {
      expect(classifyTriangle(1, 199, 200)).toBe('Not a Triangle');
    });

    // Test Case #15 (ECP - Large invalid triangle case)
    test('Test Case #15: Should return "Error: Input conditions C1, C2, or C3 failed." for large invalid side lengths', () => {
      expect(classifyTriangle(150, 250, 600)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // Test Case #16 (ECP - Different isosceles form)
    test('Test Case #16: Should classify as an Isosceles Triangle (two equal largest sides)', () => {
      expect(classifyTriangle(18, 25, 25)).toBe('Isosceles');
    });

    // Test Case #17 (ECP - Collinear points)
    test('Test Case #17: Should return "Not a Triangle" for a straight-line case', () => {
      expect(classifyTriangle(12, 12, 24)).toBe('Not a Triangle');
    });

    // Test Case #18 (ECP - Decimal values for valid scalene)
    test('Test Case #18: Should classify as a Scalene Triangle with decimal values', () => {
      expect(classifyTriangle(3.3, 4.4, 5.5)).toBe('Scalene');
    });

    // Test Case #19 (ECP - Decimal values invalid)
    test('Test Case #19: Should return "Error: Input conditions C1, C2, or C3 failed." for invalid decimal values', () => {
      expect(classifyTriangle(0.2, 0.3, 0.6)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // Test Case #20 (ECP - Borderline isosceles)
    test('Test Case #20: Should not classify as an Isosceles Triangle, but as "Not a Triangle', () => {
      expect(classifyTriangle(8, 8, 16)).toBe('Isosceles');
    });
    
    //END OF TEST CASES

  });
  