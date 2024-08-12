import { Routes, Route } from 'react-router-dom';

import { Preview } from '../pages/Preview';
import { Create } from '../pages/Create';
import { Home } from '../pages/Home';
import { User } from '../pages/User';

export function AppRoutes() {
  return (
    <Routes >
      <Route path="/" element={<Home />}/>
      <Route path="/user" element={<User />}/>
      <Route path='/create' element={<Create />}/>
      <Route path='/preview/:id' element={<Preview />}/>
    </Routes>
  )
}