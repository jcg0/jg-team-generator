const Engineer = require("../lib/engineer");

test("this is to create an engineer object", () => {
  const engineer = new Engineer("tyler", 1, "tyler@gmail.com", "tyler123");

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test("this is to return the github name", () => {
  const engineer = new Engineer("tyler", 1, "tyler@gmail.com", "tyler123");

  expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("this method will return the role", () => {
  const engineer = new Engineer("Tyler", 2, "tyler@gmail.com");

  expect(engineer.getRole()).toEqual("Engineer");
});
