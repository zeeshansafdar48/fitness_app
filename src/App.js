import { Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import './App.css';

function App() {
  return (
    <Box
      width="400px"
      m="auto"
      sx={{
        width: {
          xl: '1488px',
        },
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
