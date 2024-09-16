import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface FilterEmailSlice {
  value: string
}

const initialState: FilterEmailSlice = {
  value: "",
}

export const filterEmailSlice = createAppSlice({
  name: "filterEmail",
  initialState,
  reducers: create => ({
    filterEmail: create.reducer((state, action: PayloadAction<string>) => {
      state.value = action.payload
    }),
  }),
  selectors: {
    selectFilterEmail: counter => counter.value,
  },
})

export const { filterEmail } = filterEmailSlice.actions

export const { selectFilterEmail } = filterEmailSlice.selectors
