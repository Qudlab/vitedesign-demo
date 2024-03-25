import React, { useState } from 'react';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement your search logic here
  };

  return (
    <header className="navbar bg-primary py-4 px-6 flex justify-between items-center">
      <a href="/">
        <img src="https://amazing-mooncake-5b5750.netlify.app/logo192.png" alt="Logo" className="h-12" />
      </a>
      <form onSubmit={handleSearchSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="input bg-gray-200 rounded-l-md px-4 py-2 focus:outline-none"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit" className="btn bg-secondary text-white rounded-r-md px-6 py-2 ml-2">
          Search
        </button>
      </form>
      <div>
        <button className="btn bg-secondary text-white px-6 py-2 mr-4">Login</button>
        <button className="btn btn-outline px-6 py-2">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
