import React , {useState, useEffect } from 'react';


const Login = () => {
  const initialValues = {
    email: " ",
    password: "",
  
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
    return errors;
  };
  return (
    <div className='container'>
        <div className='app-wrapper'>
          <div>
              <h1 className='title'>Login Account</h1>
          </div>
         
          <form onSubmit={handleSubmit } className='form-wrapper'>
           <div className='name'>
             <label className='label'>Email</label>
             <input className='input'  name='email' type='email'
             value={formValues.email}
             onChange={handleChange}/>
          </div>
          <p>{formErrors.email}</p>
          <div className='name'>
             <label className='label'>Password</label>
             <input className='input'  name='password' type='password'
             value={formValues.password}
             onChange={handleChange}
             />
          </div>
          <p>{formErrors.password}</p>
          <button className='submit'>Login Sucessfuly</button>
       </form>
      </div>
</div>
  );
}
export default Login