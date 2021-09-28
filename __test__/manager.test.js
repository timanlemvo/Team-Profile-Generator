const { expect } = require("@jest/globals")
const Manager = require('../lib/Manager')

test('check for employee', () => {
    const employee = new Manager('Steve', '311', 'test@gmail.com', '818-348-0360');
    console.log(employee);

    expect(employee.name).toBe('Steve');
    expect(employee.id).toBe('311');
    expect(employee.email).toBe('test@gmail.com');
    expect(employee.officeNumber).toEqual(expect.any(String));
    expect(employee.getRole()).toBe('Manager');
}); 