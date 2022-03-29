import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main className='Missing'>
      <h2>Oops... Page Not Found</h2>
      <p>Well, that's embarrassing.</p>
      <p>
        <Link to='/'>Visit Our HomePage</Link>
      </p>
    </main>
  );
};

export default Missing;
