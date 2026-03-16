import { useState } from 'react';
import './menuStyle.css';

interface MenuProps {
    activeId: string | null;
    onSelect: (id: string) => void;
}

const menuItems = [
    { id: 'what-we-do', label: 'What We Do' },
    { id: 'our-solution', label: 'Our Solution' },
    { id: 'the-team', label: 'The Team' },
    { id: 'contact-us', label: 'Contact Us' },
];

const Menu = ({ activeId, onSelect }: MenuProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const getItemStyle = (index: number) => {
        if (hoveredIndex === null) return {};

        const distance = Math.abs(index - hoveredIndex);
        // Scale: hovered = 1.02, neighbors shrink by distance
        const scale = Math.max(0.8, 1.02 - distance * 0.07);
        // Slight vertical offset to create the "roll" curve
        const translateY = distance === 0 ? -4 : distance * 3;
        const opacity = Math.max(0.5, 1 - distance * 0.15);

        return {
            transform: `scale(${scale}) translateY(${translateY}px)`,
            opacity,
        };
    };

    return (
        <div
            className="menu-page"
            onMouseLeave={() => setHoveredIndex(null)}
        >
            {menuItems.map((item, index) => (
                <div
                    key={item.id}
                    className={`menu-item${activeId === item.id ? ' active' : ''}`}
                    style={getItemStyle(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                >
                    <button
                        className="menu-link"
                        onClick={() => onSelect(item.id)}
                    >
                        {item.label}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Menu;