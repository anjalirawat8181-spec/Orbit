import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Explorer' },
  { to: '/path', label: 'Learning Path' },
  { to: '/dashboard', label: 'Dashboard' },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <span className="font-semibold text-violet-600 text-lg tracking-tight">Orbit</span>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                isActive
                  ? 'text-sm font-medium text-violet-600'
                  : 'text-sm text-gray-500 hover:text-gray-900 transition-colors'
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-gray-500 hover:text-gray-900"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-gray-200 bg-white px-4 py-3 flex flex-col gap-3">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-sm font-medium text-violet-600'
                  : 'text-sm text-gray-500'
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};
