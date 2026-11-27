import { LogOut } from 'lucide-react';
import { Badge } from './badge';
import { Button } from './buttons/button';
import { NavLink } from 'react-router-dom';
export function Account() {
  return (
    <div className="flex items-center gap-2">
      <Badge type="admin" />
      <NavLink
        to="/login"
      >
        <Button
          variant="ghost"
          icon={LogOut}
          // disabled
        >
          Uitloggen
        </Button>
      </NavLink>
    </div>
  );
}
