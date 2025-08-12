import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import TestPage from './pages/TestPage';
import './App.css'
import ModalCardItem from './components/ModalCardItem/ModalCardItem';

function App() {
  const location = useLocation();
  const state = location.state as { background?: Location };
  const backgroundLocation = state?.background;

  return (
    <>
        <Navbar />
        <main>
          <Routes location={backgroundLocation || location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/test" element={<TestPage />} />
            {/* <Route path="/item/:id" element={<ItemPage />} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="*" element={<NotFoundPage />} /> */}
          </Routes> 
        </main>

        {backgroundLocation && (
          <Routes>
            <Route
              path="/library/:id"
              element={
                  <ModalCardItem />
              }
            />
          </Routes>
        )}
    </>
  )
}

export default App
