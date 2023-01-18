// import link element
import { Link } from 'react-router-dom';

import { useState } from 'react';

// export login button with click prop
export default function Logout(props) {

    // return login section
    return (
      <div>
        <span>Logout</span>
        <button onClick={props.toggleBool}>Logout</button>
        <form>
          <label>Hello, {props.user} </label>
          <input type="text" placeholder='Enter email...' />
          <label>Password</label>
          <input type="password" placeholder='Enter password...' />
          <button onClick={props.toggleBool}>Button</button>
        </form>
      </div>
    );
  }
