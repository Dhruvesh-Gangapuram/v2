const validation = (user) => {
  let errors = {};


  if (!user.name) {
    errors.name = "Name is required.";
  }else if(!/^\S*$/.test(user.name)){
    errors.name = "Remove all the spaces"
  }else if (!/^.{8,}$/.test(user.name)){
    errors.name = "Please check the length."
  }


  if (!user.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    errors.email = "Email is Invalid.";
  }


  if (!user.password) {
    errors.password = "password is required.";
  } else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/.test(user.password)) {
    errors.password = "Minimum eight characters, at least one letter and one number";
  }


  if (!user.cpassword) {
    errors.cpassword = "password is empty.";
  } else if (user.password !== user.cpassword) {
    errors.cpassword = "password not match.";
  }


  return errors;
};

export default validation;
