import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from "@mui/material";
import MainHomePage from './Newcomponent/Home';
import Review from './Newcomponent/Review';


function App() {
  return (
    <BrowserRouter>
    <Container maxWidth="xl">
      <Routes>
        <Route path="/" element={<Navigate to="/form/builder" replace  />} />
        <Route path="/form/builder" element={<MainHomePage />} />
        <Route path="/form/answer" element={<Review />} />     
      </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
