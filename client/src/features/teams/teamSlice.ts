import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TeamInfo } from './types';

const teamSlice = createSlice({
  name: 'team',
  initialState: {
    team: null,
    venue: null,
  } as unknown as TeamInfo,
  reducers: {
    setTeam: (state, action: PayloadAction<TeamInfo>) => {
      state.team = action.payload.team;
      state.venue = action.payload.venue;
    },
  },
});

export const { setTeam } = teamSlice.actions;
export default teamSlice.reducer;
