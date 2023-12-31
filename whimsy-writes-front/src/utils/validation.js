
export const required = value => (value ? undefined : 'This field is required.');


export const email = value =>
  value && /\S+@\S+\.\S+/.test(value) ? undefined : 'Email is invalid.';


export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);


