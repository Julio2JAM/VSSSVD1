import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;