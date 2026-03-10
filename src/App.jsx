import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo-section">
              <h1 className="logo">Vikranth's React App</h1>
              <p className="user-info">Vikranth Keshav | UID: 23BAI70358</p>
            </div>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Possible improvement: Add 404 Not Found page */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2026 React Router Example Application</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
