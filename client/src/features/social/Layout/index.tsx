import {
  useRoutes,
  useNavigate,
  Outlet,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { Twitter } from '../Twitter';
import { Facebook } from '../Facebook';
import { Youtube } from '../Youtube';
import { Button } from '../../../components/Button';
import { FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import { SocialNav } from '../styles';

export const SocialLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // let leagueElements = useRoutes([
  //   { path: '', element: <Navigate to="youtube" /> },
  //   { path: 'youtube', element: <Youtube /> },
  //   { path: 'facebook', element: <Facebook /> },
  //   { path: 'twitter', element: <Twitter /> },
  // ]);

  let elements = useRoutes([
    { path: '', element: <Navigate to="twitter" /> },
    { path: 'twitter', element: <Twitter /> },
    { path: 'facebook', element: <Facebook /> },
  ]);

  // const pathToRender = pathname.startsWith('/league');

  return (
    <SocialNav>
      <Button
        icon={<FaTwitter size={30} />}
        onClick={() => navigate('twitter')}
        noBorder
      />
      <Button
        icon={<FaFacebook size={30} />}
        onClick={() => navigate('facebook')}
        noBorder
      />
      {/* {pathToRender && (
        <Button
          icon={<FaYoutube size={30} />}
          onClick={() => navigate('youtube')}
          noBorder
        />
      )} */}
      <Outlet />
      {elements}
    </SocialNav>
  );
};
