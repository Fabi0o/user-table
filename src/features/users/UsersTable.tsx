import { useGetUsersQuery } from "./usersApiSlice"
import type { GridColDef } from "@mui/x-data-grid"
import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react"
import { useAppSelector } from "../../app/hooks"
import { selectFilterName } from "../filters/filterNameSlice"
import { selectFilterUsername } from "../filters/filterUsernameSlice"
import { selectFilterEmail } from "../filters/filterEmailSlice"
import { selectFilterPhone } from "../filters/filterPhoneSlice"

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "username", headerName: "Username", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
  },
]

export const UsersTable = () => {
  const { data } = useGetUsersQuery()

  const unfilteredRows = data?.map(user => {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
    }
  })

  const [filteredRows, setFilteredRows] = useState(unfilteredRows)

  const nameFilter = useAppSelector(selectFilterName)
  const usernameFilter = useAppSelector(selectFilterUsername)
  const emailFilter = useAppSelector(selectFilterEmail)
  const phoneFilter = useAppSelector(selectFilterPhone)

  useEffect(() => {
    setFilteredRows(
      unfilteredRows?.filter(
        user =>
          (nameFilter
            ? user.name.toLowerCase().includes(nameFilter.toLowerCase())
            : true) &&
          (usernameFilter
            ? user.username.toLowerCase().includes(usernameFilter.toLowerCase())
            : true) &&
          (emailFilter
            ? user.email.toLowerCase().includes(emailFilter.toLowerCase())
            : true) &&
          (phoneFilter ? user.phone.includes(phoneFilter) : true),
      ),
    )
  }, [nameFilter, usernameFilter, emailFilter, phoneFilter])

  return <DataGrid rows={filteredRows} columns={columns} />
}
