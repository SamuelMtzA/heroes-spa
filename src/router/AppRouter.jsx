import { Navigate,Routes, Route} from 'react-router-dom';

import { DCpage, MarvelPage } from '../heroes';
import { LoginPage } from '../auth';
import { Navbar } from '../UI';

export const AppRouter = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="marvel" element={<MarvelPage/>}/>
        <Route path="dc" element={<DCpage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="/" element={<Navigate to="marvel" />}/>
      </Routes>
    </>
  )
}
