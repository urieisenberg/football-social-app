import {
  Routes as Routing,
  Route,
  Navigate,
} from 'react-router-dom';
import { Welcome } from './pages/Welcome';

export const Routes = () => {
  return (
    <Routing>
      <Route path="welcome" element={<Welcome />} />
      <Route path="/welcome" element={<Navigate to="/" replace />} />
    </Routing>
  );
};
