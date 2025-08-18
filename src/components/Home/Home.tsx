import { useNavigate } from 'react-router-dom';
import './Home.css';

interface HomeProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const Home = ({ setIsLoggedIn }: HomeProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear login state
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Your Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>
      
      <main className="home-content">
        <div className="welcome-message">
          <h2>Hello, User!</h2>
          <p>You have successfully logged in to the application.</p>
        </div>
        
        <div className="dashboard-cards">
          <div className="card">
            <h3>Getting Started</h3>
            <p>Learn how to use this application and its features.</p>
          </div>
          
          <div className="card">
            <h3>Recent Activity</h3>
            <p>View your recent activities and interactions.</p>
          </div>
          
          <div className="card">
            <h3>Settings</h3>
            <p>Configure your account and application preferences.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;