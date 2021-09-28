const { expect } = require("@jest/globals")
const Employee = require('../lib/Employee')

test('check for employee', () => {
    const employee = new Employee('Steve', '311', 'test@gmail.com');
    console.log(employee);

    expect(employee.name).toBe('Steve');
    expect(employee.id).toBe('311');
    expect(employee.email).toBe('test@gmail.com');
});