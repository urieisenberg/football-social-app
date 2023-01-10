import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1 || '/');
    }, 2000);
  }, [navigate]);

  return (
    <div className="container text-center">
      <h3>Page not found</h3>
    </div>
  );
};
