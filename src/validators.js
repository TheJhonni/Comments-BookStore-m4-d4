class EmailValidator {
  constructor() {
    this.pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;
  }

  validate(Form) {
    return this.pattern.test(String(Form).toLowerCase());
  }
}

class MinCharsValidator {
  constructor(lenght) {
    this.lenght = lenght;
  }

  validate(Form) {
    return Form.lenght >= this.lenght;
  }

  getErrorMessage() {
    return `Must be at least ${this.lenght} chars long`;
  }
}

class PasswordValidator {
  constructor() {
    this.validators = [];
  }
  addValidator(validator) {
    this.validators.push(validator);
  }
  validate(Form) {
    let errors = [];

    this.validators.forEach((validator) => {
      if (!validator.validate(Form)) {
        errors.push(validator.getErrorMessage());
      }
    });
    return errors;
  }
}

const emailValidator = new EmailValidator();
const passwordValidator = new PasswordValidator();

passwordValidator.addValidator(new MinCharsValidator(8));

export { emailValidator, passwordValidator };
