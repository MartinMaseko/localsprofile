import { Link } from 'react-router-dom';
import type { CTA } from '../../content/types';
import './buttonStyle.css';

interface ButtonProps extends CTA {
  className?: string;
}

const Button = ({ label, to, href, variant, className = '' }: ButtonProps) => {
  const classes = `btn btn-${variant}${className ? ` ${className}` : ''}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {label}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {label}
      </a>
    );
  }

  return <button className={classes}>{label}</button>;
};

export default Button;
