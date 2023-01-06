const Manager = require("../lib/manager");

test("this is to create an manager object", () => {
  const manager = new Manager("tyler", 1, "tyler@gmail.com", 3);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("this is to return the office number", () => {
  const manager = new Manager("tyler", 1, "tyler@gmail.com", 3);

  expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test("this method will return the role", () => {
  const manager = new Manager("Tyler", 2, "tyler@gmail.com", 3);

  expect(manager.getRole()).toEqual("Manager");
});
