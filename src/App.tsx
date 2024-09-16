import { Container, Paper } from "@mui/material"
import "./App.css"
import { UsersTable } from "./features/users/UsersTable"

const App = () => {
  return (
    <Container
      sx={{
        alignItems: "center",
        display: "flex",
        height: 400,
        justifyContent: "center",
      }}
    >
      <UsersTable />
    </Container>
  )
}

export default App
