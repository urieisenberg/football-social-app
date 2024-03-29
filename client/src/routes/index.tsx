import {
  Routes as Routing,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { Protected } from './Protected';
import { Public } from './Public';
import { Welcome } from '../pages/Welcome';
import { Register } from '../features/auth/register';
import { Login } from '../features/auth/login';
import { NotFound } from '../pages/NotFound';
import { Feed } from '../pages/Feed';
import { Contact } from '../pages/Contact';
import { League } from '../pages/League';
import { Team } from '../pages/Team';
import { Profile } from '../pages/Profile';
import { Account } from '../pages/Account';

export const Routes = () => {
  const location = useLocation();
  return (
    <Routing location={location} key={location.pathname}>
      {/* Protected Routes */}
      <Route path="/" element={<Protected />}>
        <Route path="" element={<Navigate to="league/135" />} />
        <Route path="league/:leagueid/*" element={<League />} />
        <Route path="team/:teamid/:teamname/*" element={<Team />} />
        <Route path="feed/*" element={<Feed />} />
        <Route path="profile/:username/*" element={<Profile />} />
        <Route path="contact/*" element={<Contact />} />
        <Route path="account/:userid/:username/*" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      {/* Public Routes */}
      <Route path="welcome" element={<Public />}>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="/welcome" />} />
      </Route>
    </Routing>
  );
};
