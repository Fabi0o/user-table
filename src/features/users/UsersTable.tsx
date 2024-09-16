import { useGetUsersQuery } from "./usersApiSlice"
import type { GridColDef } from "@mui/x-data-grid"
import { DataGrid } from "@mui/x-data-grid"

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
  const { data, isError, isLoading, isSuccess } = useGetUsersQuery()

  const rows = data?.map(user => {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
    }
  })

  return <DataGrid rows={rows} columns={columns} pageSizeOptions={[5, 10]} />
}
