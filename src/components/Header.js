import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Select, MenuItem, Typography, Button } from '@material-ui/core'
import { Description, Contacts } from '@material-ui/icons'

import  {AUTH_TOKEN} from '../constants'

const headerTheme = makeStyles({
  navBar: {
    backgroundColor: "#00638B",
    margin: "auto",
    maxHeight: "20vh",
    display: "flex",
    flex: "no-wrap"
  },
  header: {
    color: "#fff",
    textAlign: "center",
    width: "18%",
  },
  headerTitle: {
    fontFamily: "Ropa Sans",
    fontSize: "2.0rem",
    color: "#fff",
    margin: "10px 0px 0px 0px",
    textAlign: "center",
  },
  headerSubtitle: {
    fontFamily: "Ropa Sans",
    fontSize: "1.2rem",
    color: "#fff",
    textAlign: "center",
    margin: "-10px 0px 10px 0px",
    minWidth: "100px" 
  },
  select: {
    color: "#fff",
    fontSize: "1.5rem",
    height: "100%",
    margin: "auto",
    fontFamily: "Ropa Sans",
    '&:before': {borderColor: "#00638B"},
    '&:after': {borderColor: "#00638B"}, 
  },
  icon: {color: "#fff"},
  navigation: {

  },
  navigationButton: {
    color: "#fff",
    height: "100%",
    margin: "0 10px"
  }
})

export default function Header() {

    const classes = headerTheme()
    
    return (
      <div className={classes.navBar}>
        <div className={classes.header}>
          <Typography className={classes.headerTitle}>Amazônia Protege</Typography>
          <Typography className={classes.headerSubtitle}>Laudos</Typography>
        </div>
        <Select defaultValue="MapBiomas" className={classes.select} classes={{icon: classes.icon}}>
          <MenuItem value="MapBiomas">MapBiomas</MenuItem>
          <MenuItem value="Prodes">Prodes</MenuItem>
        </Select>
        <div className={classes.navigation}>
          <Button className={classes.navigationButton} onClick={() => localStorage.setItem(AUTH_TOKEN, '')}>
            <Description color="inherit" ></Description>
            Laudos
          </Button>
        </div>
        <div className={classes.navigation}>
          <Button className={classes.navigationButton}>
            <Contacts color="inherit" ></Contacts>
            Contatos
          </Button>
        </div>
      </div>
    )
}



