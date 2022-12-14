import React from 'react'
import Link from 'next/link';
function Navbar() {
  return (
    <nav>
      <div className='logo'>
          <h1>Ninja List</h1>
      </div>
      <Link href='/'><a>Home</a></Link>
      <Link href='/About'><a>About</a></Link>
      <Link href='/ninjas'><a>Ninja Listing</a></Link>
    </nav>
  );
};

export default Navbar;