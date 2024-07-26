import React, { useState, lazy, Suspense } from 'react';
import Addbooks from '../components/Addbooks';
import Search from '../components/Search';
import Books from '../components/Layout/Books';
const Navbar = lazy(() => import('../components/Navbar'));

const Dashboard = () => {
  const [add, setAdd] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar add={add} setAdd={setAdd} search={search} setSearch={setSearch} />
      </Suspense>

      {add && <Addbooks />}
      {search && <Search />}
      {!add && <Books />}
    </div>
  );
}

export default Dashboard;
