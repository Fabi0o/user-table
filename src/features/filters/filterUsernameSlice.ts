import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface FilterUsernameSlice {
  value: string
}

const initialState: FilterUsernameSlice = {
  value: "",
}

export const filterUsernameSlice = createAppSlice({
  name: "filterUsername",
  initialState,
  reducers: create => ({
    filterUsername: create.reducer((state, action: PayloadAction<string>) => {
      state.value = action.payload
    }),
  }),
  selectors: {
    selectFilterUsername: counter => counter.value,
  },
})

export const { filterUsername } = filterUsernameSlice.actions

export const { selectFilterUsername } = filterUsernameSlice.selectors
