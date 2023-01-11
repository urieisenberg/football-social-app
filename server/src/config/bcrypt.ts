import bcryptjs from 'bcryptjs';

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcryptjs.genSalt(10);
  return await bcryptjs.hash(password, salt);
};

export const comparePassword = async (
  password: string,
  receivedPassword: string
): Promise<boolean> => {
  return await bcryptjs.compare(password, receivedPassword);
};
