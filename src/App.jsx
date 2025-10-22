import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TransactionDetails from './pages/TransactionDetails';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transaction/:id" element={<TransactionDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;