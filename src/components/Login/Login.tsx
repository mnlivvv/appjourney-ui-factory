import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
// Import login logo
import loginLogo from '../../assets/images/login-logo.jpg';

interface LoginProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const Login = ({ setIsLoggedIn }: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a saved username in localStorage for remember me feature
    const savedUsername = localStorage.getItem('savedUsername');
    if (savedUsername) {
      setUsername(savedUsername);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Simple validation
    if (!username.trim()) {
      setError('Please enter your username');
      return;
    }
    
    if (!password.trim()) {
      setError('Please enter your password');
      return;
    }
    
    // Save username if remember me is checked
    if (rememberMe) {
      localStorage.setItem('savedUsername', username);
    } else {
      localStorage.removeItem('savedUsername');
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Accept any username and password combination
      // In a real application, you would validate against a backend service
      if (username.trim() && password.trim()) {
        setIsLoggedIn(true);
        // Store login state in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        // Store the username to display on the home page
        localStorage.setItem('username', username);
        navigate('/home');
      } else {
        setError('Username and password cannot be empty');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-logo">
          <img src={loginLogo} alt="Company Logo" />
        </div>
        <h1>Welcome Back</h1>
        <p className="login-subtitle">Please sign in to continue</p>
        <p className="login-note">You can use any username and password</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          
          <div className="form-footer">
            <div className="remember-me">
              <input 
                type="checkbox" 
                id="remember" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <span className="forgot-password">You can enter any password</span>
          </div>
          
          <button 
            type="submit" 
            className={`login-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        
        <p className="register-link">
          No account needed! Just enter any username and password to login.
        </p>
      </div>
    </div>
  );
};

export default Login;