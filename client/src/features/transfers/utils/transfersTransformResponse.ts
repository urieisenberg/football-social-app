import { FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';

export const transformTransfersResponse = (
  response: any,
  meta: FetchBaseQueryMeta,
  arg: string
) => {
  const thisYearTransfers = response.transfers.filter((transfer: any) =>
    transfer.date.includes('2022')
  );
  const arrived = thisYearTransfers.filter(
    (transfer: any) => transfer.teams.in.id === parseInt(arg)
  );
  const left = thisYearTransfers.filter(
    (transfer: any) => transfer.teams.out.id === parseInt(arg)
  );

  return { arrived, left };
};
