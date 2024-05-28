import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem } from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6,1fr)">
      <GridItem
      as='aside'
      colSpan={1}
      height='100vh'
      bg='purple.500'
      p='10px'
      >
      <span>aside</span>

      </GridItem>
      <GridItem 
      as='main'
      p='30px'
      colSpan={5}>
        <Navbar/>
        <Outlet />
      </GridItem>
    </Grid>
  )
}
