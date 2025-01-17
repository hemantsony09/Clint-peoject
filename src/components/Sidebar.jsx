import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemButton,
  Button,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null); // Track the open menu
  const navigate = useNavigate(); // React Router's hook for navigation

  const handleDropdownClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu); // Toggle the dropdown
  };

  const handleLogout = () => {
    localStorage.clear(); // Clear all localStorage data
    navigate("/"); // Redirect to the home page
  };

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
          flexDirection: "column", // Arrange items in column
          justifyContent: "space-between", // Space between main content and logout button
          paddingTop: "2rem",
        },
      }}
    >
      <List sx={{ width: "100%", padding: 0 }}>
        {/* Trade Upload Button */}
        <NavLink
          to="/admin/trade"
          style={({ isActive }) => ({
            textDecoration: "none",
          })}
        >
          <ListItem
            button
            sx={{
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#4a3a3a",
              },
              color: "#fff0d1",
            }}
          >
            <ListItemText
              primary="Trade Upload"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            />
          </ListItem>
        </NavLink>

        {/* Events Upload Button */}
        <NavLink
          to="/admin/event"
          style={({ isActive }) => ({
            textDecoration: "none",
          })}
        >
          <ListItem
            button
            sx={{
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#4a3a3a",
              },
              color: "#fff0d1",
            }}
          >
            <ListItemText
              primary="Events Upload"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            />
          </ListItem>
        </NavLink>

        {/* All Items Dropdown */}
        <ListItemButton
          sx={{
            justifyContent: "center",
            "&:hover": {
              backgroundColor: "#4a3a3a",
            },
          }}
          onClick={() => handleDropdownClick("allItems")}
        >
          <ListItemText
            primary="All Items"
            sx={{
              color: "#fff0d1",
              textAlign: "center",
            }}
          />
          {openMenu === "allItems" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMenu === "allItems"} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{
              backgroundColor: "#4a3a3a",
            }}
          >
            <NavLink
              to="/admin/producttable/trade"
              style={({ isActive }) => ({
                textDecoration: "none",
              })}
            >
              <ListItem
                button
                sx={{
                  pl: 4,
                  "&:hover": {
                    backgroundColor: "#5a4a4a",
                  },
                  display: "flex",
                  justifyContent: "center",
                  color: "#fff0d1",
                }}
              >
                <ListItemText
                  primary="Trade"
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                />
              </ListItem>
            </NavLink>
            <NavLink
              to="/admin/producttable/events"
              style={({ isActive }) => ({
                textDecoration: "none",
              })}
            >
              <ListItem
                button
                sx={{
                  pl: 4,
                  "&:hover": {
                    backgroundColor: "#5a4a4a",
                  },
                  display: "flex",
                  justifyContent: "center",
                  color: "#fff0d1",
                }}
              >
                <ListItemText
                  primary="Events"
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                />
              </ListItem>
            </NavLink>
          </List>
        </Collapse>
      </List>

      {/* Logout Button */}
      <Button
        variant="contained"
        color="error"
        onClick={handleLogout}
        sx={{
          width: "60%",
          margin: "0 auto",
          marginBottom: 5,
          backgroundColor: "#fff0d1",
          color: "#3b3030",
          "&:hover": {
            backgroundColor: "#ccc0a7",
            color: "#3b3030",
          },
        }}
      >
        Logout
      </Button>
    </Drawer>
  );
};

export default Sidebar;
