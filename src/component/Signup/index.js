import React, { useState, useEffect } from "react";

// import  styles from './styles.module.css';
const Signup = () => {
  const initialValues = {
    username: " ",
    email: " ",
    password: "",
    confirmpassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "ConfirmPassword is required";
    } else if (values.confirmpassword.length < 4) {
      errors.confirmpassword = "ConfirmPassword must be more than 4 characters";
    } else if (values.confirmpassword.length > 10) {
      errors.confirmpassword =
        "ConfirmPassword cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h1 className="title">Signup Form </h1>
        </div>

        <form onSubmit={handleSubmit} className="form-wrapper">
          <div className="name">
            <label className="label">Full Name</label>
            <input
              className="input"
              name="username"
              type="text"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="email">
            <label className="label">Email</label>
            <input
              className="input"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              name="password"
              type="password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>

          <p>{formErrors.password}</p>

          <div className="confirm password">
            <label className="label"> confirm Password</label>
            <input
              className="input"
              name="confirmpassword"
              type="password"
              value={formValues.confirmpassword}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.confirmpassword}</p>
          <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
