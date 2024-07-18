import './App.css'

// chakra
import { ChakraProvider } from '@chakra-ui/react';

// router
import { BrowserRouter as Router, Routes, Route } from 'react-dom';

// pages
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';

function App() {

  return (
    <>
      <ChakraProvider>
        <Router>
          <Route path='/' element={<LandingPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Router>
      </ChakraProvider>
    </>
  )
}

export default App
