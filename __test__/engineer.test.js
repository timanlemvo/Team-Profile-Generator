const { expect } = require("@jest/globals")
const Engineer = require('../lib/Engineer')

test('check for employee', () => {
    const employee = new Engineer('Steve', '311', 'test@gmail.com','bobsburgs');
    console.log(employee);

    expect(employee.name).toBe('Steve');
    expect(employee.id).toBe('311');
    expect(employee.email).toBe('test@gmail.com');
    expect(employee.github).toEqual(expect.any(String));
    expect(employee.getRole()).toBe('Engineer');
});