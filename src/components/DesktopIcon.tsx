import React from 'react';
import { DesktopIconProps } from '../types';

const DesktopIcon: React.FC<DesktopIconProps> = ({
  id,
  label,
  icon,
  onClick
}) => {
  return (
    <div className="desktop-icon" onClick={onClick} data-id={id}>
      <div className="icon-image">
        <img src={icon} alt={label} style={{ width: '48px', height: '48px', imageRendering: 'pixelated' }} />
      </div>
      <div className="icon-label text-glow">{label}</div>
    </div>
  );
};

export default DesktopIcon;