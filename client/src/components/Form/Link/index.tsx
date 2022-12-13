import { FormFooter, FormLink } from '../styles';

interface FormLinkProps {
  type: 'login' | 'register';
}

export const Link = ({ type }: FormLinkProps) => {
  const linkText = type === 'login' ? 'Register' : 'Login';
  const text =
    type === 'login' ? `Don't have an account?` : `Already have an account?`;

  return (
    <FormFooter>
      {text}
      <FormLink to={`/welcome/${linkText.toLocaleLowerCase()}`}>{linkText}</FormLink>
    </FormFooter>
  );
};
