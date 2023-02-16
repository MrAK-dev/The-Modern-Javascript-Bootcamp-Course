module.exports = {
  getError(errors, prop) {
    //  prop === 'email' || 'password' || 'passwordConfrimation'
    try {
      return errors.mapped()[prop].msg;
    } catch (err) {
      return '';
    }
  },
};
