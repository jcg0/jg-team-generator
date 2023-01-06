const Intern = require("../lib/intern");

test("this is to create an engineer object", () => {
  const intern = new Intern(
    "tyler",
    1,
    "tyler@gmail.com",
    "University of Florida"
  );

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

test("this is to return the school name", () => {
  const intern = new Intern(
    "tyler",
    1,
    "tyler@gmail.com",
    "University of Florida"
  );

  expect(intern.getSchool()).toEqual(expect.any(String));
});

test("this method will return the role", () => {
  const intern = new Intern(
    "Tyler",
    2,
    "tyler@gmail.com",
    "University of Florida"
  );

  expect(intern.getRole()).toEqual("Intern");
});
