import React, { useState, useContext } from 'react';
import './style.css';
import pic from '../../assets/react-heros.png';
import { useHistory } from 'react-router-dom';
import { Context } from '../../App';

const Home = () => {
  const { username, password } = useContext(Context);
  const history = useHistory();

  function validateForm() {
    return username[0].length > 0 && password[0].length > 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (username[0] === 'julian' && password[0] === 'badman') {
      alert('login successfull');
      history.push('/success');
    } else {
      alert('Incorrect username or password');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='imgcontainer'>
        <img src={pic} className='avatar' />
      </div>
      <div className='container'>
        <label htmlFor='username'>
          <b>Username</b>
        </label>
        <input
          type='text'
          placeholder='Enter Username'
          name='username'
          onChange={e => username[1](e.target.value)}
          required
        />
        <label htmlFor='password'>
          <b>Password</b>
        </label>
        <input
          type='password'
          placeholder='Enter Password'
          name='password'
          onChange={e => password[1](e.target.value)}
          required
        />
        <button type='submit' disabled={!validateForm()}>
          Login
        </button>
      </div>
    </form>
  );
};

export default Home;
