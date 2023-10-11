import * as React from "react";

import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import classes from "./AppBar.module.css";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" elevation={0}>
        <Toolbar>
          <motion.button className={classes.button62home} whileHover={{ scale: 1.2 }} transition={{type: 'tween', stiffness: 500, mass: 5}}>
            <NavLink to="/">Home</NavLink>
          </motion.button>
          <motion.button className={classes.button62} whileHover={{ scale: 1.2 }} transition={{type: 'tween', stiffness: 500, mass: 5}}>
            <NavLink to="/gratitude">Gratitude</NavLink>
          </motion.button>
          <motion.button className={classes.button62} whileHover={{ scale: 1.2 }} transition={{type: 'tween', stiffness: 500, mass: 5}}>
            <NavLink to="/affirmations">Affirmations</NavLink>
          </motion.button>
          <motion.button className={classes.button62} whileHover={{ scale: 1.2 }} transition={{type: 'tween', stiffness: 500, mass: 5}}>
            <NavLink to="/goodfeelings">Good Feelings</NavLink>
          </motion.button>
          <motion.button className={classes.button62} whileHover={{ scale: 1.2 }} transition={{type: 'tween', stiffness: 500, mass: 5}}>
            <NavLink to="/habits">Habits</NavLink>
          </motion.button>
          <motion.button className={classes.button62} whileHover={{ scale: 1.2 }} transition={{type: 'tween', stiffness: 500, mass: 5}}>
            <NavLink to="/journal">Journal</NavLink>
          </motion.button>
          <motion.button className={classes.button62} whileHover={{ scale: 1.2 }} transition={{type: 'tween', stiffness: 500, mass: 5}}>
            <NavLink to="/profile">Profile</NavLink>
          </motion.button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


