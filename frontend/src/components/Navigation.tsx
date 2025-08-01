import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '🏠 Início' },
    { path: '/houses', label: '🏰 Casas' },
    { path: '/characters', label: '👥 Personagens' },
    { path: '/spells', label: '⚡ Feitiços' },
    { path: '/potions', label: '🧪 Poções' },
    { path: '/locations', label: '📍 Locais' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
