// import link element
import { Link } from 'react-router-dom';

import { useState } from 'react';

// export login button with click prop
export default function Login(props) {


    // return login section
    return (
      <div>
        {/* <span>Login</span> */}
        <form>
          <label>Email</label>
          <input type="text" placeholder='Enter email...' />
          <label>Password</label>
          <input type="password" placeholder='Enter password...' />
          <button onClick={props.toggleBool}>Login</button>
        </form>
      </div>
    );
  }
