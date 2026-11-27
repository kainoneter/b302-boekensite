import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

interface LogoProps {
  textColor?: string;
}

export function Logo({ textColor = "text-ink"} : LogoProps) {
  return (
    <Link to="/books" className="flex items-center gap-2">
      <img src={logo} alt="" className="h-10 w-10" />
      <span className={`text-[26px] font-display ${textColor}`}>Buro<i>ogappeltjes</i></span>
    </Link>
  );
}
