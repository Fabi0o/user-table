import { useGetUsersQuery } from "./usersApiSlice"

export const Users = () => {
  const { data, isError, isLoading, isSuccess } = useGetUsersQuery()
  return <div>{data?.map(user => <div key={user.id}>{user.name}</div>)}</div>
}
