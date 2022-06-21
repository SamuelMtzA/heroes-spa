import {Routes} from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { DCpage } from '../heroes/pages/DCpage';
import { MarvelPage } from '../heroes/pages/MarvelPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="marvel" element={<MarvelPage/>}/>
      <Routes path="dc" element={<DCpage/>}/>
      <Routes path="login" element={<LoginPage/>}/>
    </Routes>
    
  )
}
