import { memo } from 'react';

interface HeaderProps {
  quote: string;
}

const Header = ({ quote }: HeaderProps) => {
  return (
    <header>
      <h1>Task Master</h1>
      <div className="quote-container">
        <p className="daily-quote">"{quote}"</p>
      </div>
    </header>
  );
};

export default memo(Header);