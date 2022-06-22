import { Navigate,Routes, Route} from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { DCpage } from '../heroes/pages/DCpage';
import { MarvelPage } from '../heroes/pages/MarvelPage';
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
