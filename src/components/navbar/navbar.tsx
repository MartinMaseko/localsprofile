import { useState } from 'react';
import { menuContent } from '../menu/menuContent';
import LocalsLogo from '../../assets/images/siteLogo.png';
import './navbarStyle.css';

const navItems = Object.values(menuContent).map((s) => ({
    id: s.id,
    title: s.title,
}));

interface NavbarProps {
    activeSection: string;
    onSectionSelect: (id: string) => void;
}

const Navbar = ({ activeSection, onSectionSelect }: NavbarProps) => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Mobile: logo left + hamburger right */}
            <div className="navbar-mobile">
                <img src={LocalsLogo} alt="Locals.ZA" className="navbar-logo" />
                <button
                    className="navbar-toggle"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <img
                        src={
                            open
                                ? 'https://img.icons8.com/ios/50/ffb803/xbox-menu.png'
                                : 'https://img.icons8.com/ios-filled/50/ffb803/xbox-menu.png'
                        }
                        alt="Menu"
                        className="navbar-toggle-icon"
                    />
                </button>
            </div>

            {/* Desktop: links with centered logo */}
            <div className="navbar-desktop">
                <img src={LocalsLogo} alt="Locals.ZA" className="navbar-logo" />
            </div>

            {/* Mobile dropdown */}
            <div className={`navbar-dropdown${open ? ' open' : ''}`}>
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        className={`navbar-dropdown-link${activeSection === item.id ? ' active' : ''}`}
                        onClick={() => {
                            onSectionSelect(item.id);
                            setOpen(false);
                        }}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;