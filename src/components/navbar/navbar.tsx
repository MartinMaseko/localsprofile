import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems, getStartedCTA, SITE_NAME } from '../../content/site';
import Button from '../common/Button';
import './navbarStyle.css';

const Wordmark = () => (
    <span className="navbar-wordmark">
        Locals<span className="navbar-wordmark-accent">{SITE_NAME.replace('Locals', '')}</span>
    </span>
);

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Mobile: wordmark left + menu toggle right */}
            <div className="navbar-mobile">
                <NavLink to="/" className="navbar-logo-link" onClick={() => setOpen(false)}>
                    <Wordmark />
                </NavLink>
                <button
                    className="navbar-toggle"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? 'Close' : 'Menu'}
                </button>
            </div>

            {/* Desktop: wordmark + links + CTA */}
            <div className="navbar-desktop">
                <NavLink to="/" className="navbar-logo-link">
                    <Wordmark />
                </NavLink>
                <div className="navbar-links">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.to === '/'}
                            className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
                <Button {...getStartedCTA} variant="primary" className="navbar-cta" />
            </div>

            {/* Mobile dropdown */}
            <div className={`navbar-dropdown${open ? ' open' : ''}`}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.to === '/'}
                        className={({ isActive }) => `navbar-dropdown-link${isActive ? ' active' : ''}`}
                        onClick={() => setOpen(false)}
                    >
                        {item.label}
                    </NavLink>
                ))}
                <Button {...getStartedCTA} variant="primary" className="navbar-dropdown-cta" />
            </div>
        </nav>
    );
};

export default Navbar;
