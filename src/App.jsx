import { Routes, Route, Navigate } from 'react-router-dom';
import Lista from './components/Lista';
import Detail from './components/Dados';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Lista />} />
      <Route path="/dados/:id" element={<Detail />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
