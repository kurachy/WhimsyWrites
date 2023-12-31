const required = value => value ? undefined : 'This field is required.';
const email = value => /\S+@\S+\.\S+/.test(value) ? undefined : 'Email is invalid.';

const composeValidators = (...validators) => value => {
  return validators.reduce((error, validator) => error || validator(value), undefined);
};

module.exports = {
  required,
  email,
  composeValidators
};
