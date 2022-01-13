class EmailValidator {
  constructor() {
    this.pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;
  }

  validate(Form) {
    return this.pattern.test(String(Form).toLowerCase());
  }
}

const emailValidator = new EmailValidator();

export { emailValidator };
