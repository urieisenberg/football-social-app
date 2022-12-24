import { footballApi } from '../../../app/services/football-api';
import { Transfer } from '../types';
import { transformTransfersResponse } from '../utils/transfersTransformResponse';

const transfersApi = footballApi.injectEndpoints({
  endpoints: (build) => ({
    getTransfers: build.query<Transfer[], string>({
      query: (teamId) => `transfers/?team=${teamId}`,
      transformResponse: transformTransfersResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetTransfersQuery } = transfersApi;
