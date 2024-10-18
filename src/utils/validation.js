// validation.js

// Regular expression for validating a strong password:
// - At least 8 characters
// - Contains at least one uppercase letter
// - Contains at least one lowercase letter
// - Contains at least one number
// - Contains at least one special character
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const validateSignup = (formData) => {
  const { name, email, password } = formData;

  if (!name) {
    return 'Name is required';
  }

  if (!email) {
    return 'Email is required';
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return 'Email is invalid';
  }

  if (!password) {
    return 'Password is required';
  }

  if (!passwordRegex.test(password)) {
    return 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character';
  }

  return null; // No validation errors
};

export const validateLogin = (formData) => {
  const { email, password } = formData;

  if (!email) {
    return 'Email is required';
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return 'Email is invalid';
  }

  if (!password) {
    return 'Password is required';
  }

  return null; // No validation errors
};
