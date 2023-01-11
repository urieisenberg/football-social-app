import { Transfer } from '../types';

export const transformTransfersResponse = (response: any) => {
  const thisYearTransfers = response.response.filter(
    (transfer: any) =>
      transfer.transfers[0].date.includes('2022') ||
      transfer.transfers[0].date.includes('2023')
  );
  
  return thisYearTransfers as Transfer[];
};
