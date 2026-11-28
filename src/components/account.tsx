import { LogOut, Lock } from 'lucide-react';
import { Badge } from './badge';
import { Button } from './buttons/button';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth/context';


export function Account() {
  const auth = useAuth()

  return (
    <div className="flex items-center gap-2">
      {auth?.token ? (
        <>
          <Badge type="admin" />
          <NavLink
            to="/login"
          >
            <Button
              variant="ghost"
              icon={LogOut}
              onClick={() => void auth.logout().catch(() => {
                // toast implement
              })}
              // disabled
            >
              Uitloggen
            </Button>
          </NavLink>
        </>
      ) : (
        <NavLink
          to="/login"
        >
          <Button
            variant="secondary"
            icon={Lock}
          >
            Inloggen als admin
          </Button>
        </NavLink>
      )}      
    </div>
  );
}
