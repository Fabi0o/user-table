import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface FilterNameSlice {
  value: string
}

const initialState: FilterNameSlice = {
  value: "",
}

export const filterNameSlice = createAppSlice({
  name: "filterName",
  initialState,
  reducers: create => ({
    filterName: create.reducer((state, action: PayloadAction<string>) => {
      state.value = action.payload
    }),
  }),
  selectors: {
    selectFilterName: counter => counter.value,
  },
})

export const { filterName } = filterNameSlice.actions

export const { selectFilterName } = filterNameSlice.selectors
