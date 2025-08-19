import './ArcadeHeader.css';

interface ArcadeHeaderProps {
  title: string;
  subtitle?: string;
}

const ArcadeHeader = ({ title, subtitle }: ArcadeHeaderProps) => {
  return (
    <div className="arcade-header">
      <div className="arcade-header-glitch"></div>
      <h1 className="arcade-header-title">{title}</h1>
      {subtitle && <h2 className="arcade-header-subtitle">{subtitle}</h2>}
    </div>
  );
};

export default ArcadeHeader;