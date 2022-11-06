import { Routes, Route } from 'react-router-dom'

import { Home } from './Pages/Home/Home'
import { Resume } from './Pages/Resume/Resume'

export function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/resume" element={<Resume />}/>
        {/* <Route path="/listings/:id" element={<Listing />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<NotFound />}/> */}
    </Routes>
  )
}