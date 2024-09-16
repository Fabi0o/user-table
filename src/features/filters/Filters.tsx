import { TextField } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { filterName, selectFilterName } from "./filterNameSlice"
import { filterUsername, selectFilterUsername } from "./filterUsernameSlice"
import { filterEmail, selectFilterEmail } from "./filterEmailSlice"
import { filterPhone, selectFilterPhone } from "./filterPhoneSlice"
import { useEffect } from "react"

const Filters = () => {
  const dispatch = useAppDispatch()

  const nameFilter = useAppSelector(selectFilterName)
  const usernameFilter = useAppSelector(selectFilterUsername)
  const emailFilter = useAppSelector(selectFilterEmail)
  const phoneFilter = useAppSelector(selectFilterPhone)

  useEffect(() => {
    console.log(nameFilter, usernameFilter, emailFilter, phoneFilter)
  }, [nameFilter, usernameFilter, emailFilter, phoneFilter])

  return (
    <>
      <TextField
        sx={{ flex: 1 }}
        id="filled-basic"
        label="name"
        variant="filled"
        value={nameFilter}
        onChange={e => dispatch(filterName(e.target.value))}
      />
      <TextField
        sx={{ flex: 1 }}
        id="filled-basic"
        label="username"
        variant="filled"
        value={usernameFilter}
        onChange={e => dispatch(filterUsername(e.target.value))}
      />
      <TextField
        sx={{ flex: 1 }}
        id="filled-basic"
        label="email"
        variant="filled"
        value={emailFilter}
        onChange={e => dispatch(filterEmail(e.target.value))}
      />
      <TextField
        sx={{ flex: 1 }}
        id="filled-basic"
        label="phone"
        variant="filled"
        value={phoneFilter}
        onChange={e => dispatch(filterPhone(e.target.value))}
      />
    </>
  )
}

export { Filters }
