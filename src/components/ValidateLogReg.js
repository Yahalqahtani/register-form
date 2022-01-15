//! Login Validate Function
export const validateLogin = values => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.Email) {
        errors.Email = 'Email Required';
    } else if (!regex.test(values.Email)) {
        errors.Email('This is not a valid email format');
    }
    if (!values.Password) {
        errors.Password = 'Password Required';
    } else if (values.Password.length < 4) {
        errors.Password = 'The password should be more than 4 Charecters';
    } else if (values.Password.length > 12) {
        errors.Password = 'Password maximum 12 charecters';
    }
    return errors;
};
//! Register Validate function
export const validateRegister = values => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.FirstName) {
        errors.FirstName = 'Frist Name Required';
    }
    if (!values.LastName) {
        errors.LastName = 'Last Name Required';
    }
    if (!values.Email) {
        errors.Email = 'Email Required';
    } else if (!regex.test(values.Email)) {
        errors.Email = 'This is not a valid email format';
    }
    if (!values.Password) {
        errors.Password = 'Password Required';
    } else if (values.Password.length < 4) {
        errors.Password = 'The password should be more than 4 Charecters';
    } else if (values.Password.length > 12) {
        errors.Password = 'Password maximum 12 charecters';
    }
    return errors;
};
