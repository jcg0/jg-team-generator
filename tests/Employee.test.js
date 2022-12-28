const Employee = require("../lib/employee");

// test("What is this tests goal?")
test("this is create an employee object", () => {
  const employee = new Employee("Tyler", 2, "tyler@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("this method will return the name", () => {
  const employee = new Employee("Tyler", 2, "tyler@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

test("this method will return the name", () => {
  const employee = new Employee("Tyler", 2, "tyler@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
