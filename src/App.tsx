import { Box, Container, Paper } from "@mui/material"
import "./App.css"
import { UsersTable } from "./features/users/UsersTable"
import { Filters } from "./features/filters/Filters"

const App = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        height: 400,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "5px",
        }}
      >
        <Filters />
      </Box>

      <UsersTable />
    </Container>
  )
}

export default App
