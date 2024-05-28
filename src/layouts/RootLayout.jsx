import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem } from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6,1fr)">
      <GridItem
      as='aside'
      colSpan={{base:6,lg:2, xl:1}}
      height={{lg:'100vh'}}
      bg='purple.500'
      p={{base:'20px', lg:'30px'}}
      >
      <span>aside</span>

      </GridItem>
      <GridItem 
      as='main'
      p='30px'
      colSpan={{base:6,lg:4,xl:5}}>
        <Navbar/>
        <Outlet />
      </GridItem>
    </Grid>
  )
}
