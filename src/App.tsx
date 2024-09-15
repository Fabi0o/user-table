import { Button, Container } from "@mui/material"
import "./App.css"
import { Users } from "./features/users/Users"

const App = () => {
  return (
    <Container
      sx={{ alignItems: "center", display: "flex", justifyContent: "center" }}
    >
      <Button variant="contained">Hello World!</Button>
      <Users />
    </Container>
  )
}

export default App
