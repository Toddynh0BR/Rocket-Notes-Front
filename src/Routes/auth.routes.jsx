import { Routes, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { SignUpIn } from '../pages/SignUpIn'

export function AuthRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} /> */}
      <Route path="/" element={<SignUpIn />} />
      <Route path="*" element={<SignUpIn />} />
    </Routes>
  )
}