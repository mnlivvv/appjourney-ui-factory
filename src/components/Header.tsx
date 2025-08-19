import '../styles/Header.css';

export default function Header() {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <header className="header">
      <div className="header-content">
        <h1>My Todo Notepad</h1>
        <p className="date">{formattedDate}</p>
      </div>
      <div className="torn-edge"></div>
    </header>
  );
}