export const transformCoacByIdResponse = (response: any) => {
  return response.response[0];
};

export const transformCoachResponse = (response: any) => {
  return response.response;
};
