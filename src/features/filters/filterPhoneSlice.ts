import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface FilterPhoneSlice {
  value: string
}

const initialState: FilterPhoneSlice = {
  value: "",
}

export const filterPhoneSlice = createAppSlice({
  name: "filterPhone",
  initialState,
  reducers: create => ({
    filterPhone: create.reducer((state, action: PayloadAction<string>) => {
      state.value = action.payload
    }),
  }),
  selectors: {
    selectFilterPhone: counter => counter.value,
  },
})

export const { filterPhone } = filterPhoneSlice.actions

export const { selectFilterPhone } = filterPhoneSlice.selectors
