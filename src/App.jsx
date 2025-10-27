import React from 'react';
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';

const App = () => {
  return (
    <div className='w-11/12 mx-auto my-5 space-y-5'>
      <Navbar></Navbar>
      <Blogs></Blogs>
    </div>
  );
};

export default App;