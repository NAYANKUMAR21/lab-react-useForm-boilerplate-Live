import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const [state, setState] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (data) => {
    console.log(data);
    setState(true);
  };
  return (
    <div>
      <div>{state == true ? 'Registration Successfull' : ''}</div>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <div>
          <input
            type="text"
            placeholder="First Name.."
            {...register('firstName', {
              required: 'Please dont keep input feild empty',
            })}
          />
          <div style={{ color: 'red' }}>
            {errors.firstName ? errors.firstName.message : null}
          </div>
        </div>
        <div>
          <input
            // required={true}
            type="text"
            placeholder="Last Name.."
            {...register('lastName', {
              required: 'Please dont keep input feild empty',
            })}
          />
          <div style={{ color: 'red' }}>
            {errors.lastName ? errors.lastName.message : null}
          </div>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email.."
            {...register('email', {
              required: true,

              validate: (value) => {
                if (value.includes('@')) {
                  return true;
                }
                return 'invalid email';
              },
            })}
          />
          <div style={{ color: 'red' }}>
            {errors.email ? errors.email.message : null}
          </div>
        </div>
        <div>
          <input
            // required={true}
            type="password"
            placeholder="Password.."
            {...register('password', {
              required: true,
              minLength: {
                value: 5,
                message: 'Password must be more than 4 characters',
              },
              maxLength: {
                value: 20,
                message: 'Password cannot be more than 20 characters',
              },
            })}
          />
          <div style={{ color: 'red' }}>
            {errors.password ? errors.password.message : null}
          </div>
        </div>
        <input type="submit" value={'Register'} />
      </form>
    </div>
  );
}

export default App;
