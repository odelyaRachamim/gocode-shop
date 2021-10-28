import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Cart from "./Cart/Cart";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    shoppingCart: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Cart></Cart>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer("shoppingCart", true)}>
          Shopping Cart
        </Button>
        <Drawer
          anchor={"shoppingCart"}
          open={state["shoppingCart"]}
          onClose={toggleDrawer("shoppingCart", false)}
        >
          {list("shoppingCart")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
