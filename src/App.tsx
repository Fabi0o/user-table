import { Button, Container } from "@mui/material"
import "./App.css"

const App = () => {
  return (
    <Container
      sx={{ alignItems: "center", display: "flex", justifyContent: "center" }}
    >
      <Button variant="contained">Hello World!</Button>
    </Container>
  )
}

export default App
