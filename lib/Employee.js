// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name='null', id=0, email='null', role='Employee') {
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }

    if (typeof id !== "number") {
      throw new Error("Expected parameter 'id' to be a non-negative number");
    }

    if (typeof email !== "string" || !email.trim().length) {
      throw new Error("Expected parameter 'email' to be a non-empty string");
    }

    if (typeof role !== "string" || !role.trim().length) {
      throw new Error("Expected parameter 'role' to be a non-empty string");
    }

    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }

}

module.exports = Employee;