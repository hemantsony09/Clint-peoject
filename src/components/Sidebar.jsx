import React from "react";
import { NavLink } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          backgroundColor: "#3b3030",
          color: "#fff0d1",
          display: "flex",
          alignItems: "center",
          paddingTop: "2rem",
          // justifyContent: "center",
        },
      }}
    >
      <List sx={{ width: "100%", padding: 0 }}>
        <ListItem
          sx={{
            justifyContent: "center",
            "&:hover": {
              backgroundColor: "#4a3a3a",
            },
          }}
        >
          <NavLink
            to="/admin/trade"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#fff0d1" : "#e0e0e0",
              fontWeight: isActive ? "bold" : "normal",
              textAlign: "center",
              width: "100%",
              padding: "10px 0",
            })}
          >
            <ListItemText primary="Trade" />
          </NavLink>
        </ListItem>
        <ListItem
          sx={{
            justifyContent: "center",
            "&:hover": {
              backgroundColor: "#4a3a3a",
            },
          }}
        >
          <NavLink
            to="/admin/event"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#fff0d1" : "#e0e0e0",
              fontWeight: isActive ? "bold" : "normal",
              textAlign: "center",
              width: "100%",
              padding: "10px 0",
            })}
          >
            <ListItemText primary="Events" />
          </NavLink>
        </ListItem>
        <ListItem
          sx={{
            justifyContent: "center",
            "&:hover": {
              backgroundColor: "#4a3a3a",
            },
          }}
        >
          <NavLink
            to="/admin/producttable"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#fff0d1" : "#e0e0e0",
              fontWeight: isActive ? "bold" : "normal",
              textAlign: "center",
              width: "100%",
              padding: "10px 0",
            })}
          >
            <ListItemText primary="All items" />
          </NavLink>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
