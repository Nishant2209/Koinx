import { Stack, Typography, Link, IconButton, Drawer } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import img from "../../assets/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawer = (isOpen) => {
    setOpen(isOpen);
  };

  return (
    <Stack
      className="bg-white z-50 sticky top-0 w-full"
      sx={{
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Stack className="flex flex-row justify-between items-center py-4 px-8">
        <img src={img} style={{ width: "100px", height: "25px" }} alt="KoinX" />
        <Stack className="flex-row gap-5 justify-center items-center hidden md:flex">
          <Typography
            component={Link}
            className="font-bold text-black no-underline cursor-pointer"
          >
            Features
          </Typography>

          <Typography
            component={Link}
            className="font-bold text-black no-underline cursor-pointer"
          >
            Exchanges
          </Typography>

          <Typography
            component={Link}
            className="font-bold text-black no-underline cursor-pointer"
          >
            How it works?
          </Typography>

          <Typography
            component={Link}
            className="font-bold text-black no-underline cursor-pointer"
          >
            Blog
          </Typography>

          <Typography
            component={Link}
            className="font-bold text-black no-underline cursor-pointer"
          >
            About us
          </Typography>

          <Button
            variant="outlined"
            className="font-semibold ml-4 px-8 capitalize border-1 text-blue border-blue hover:bg-blue hover:text-white transition-all ease-in-out delay-200"
          >
            Sign in
          </Button>
        </Stack>

        <Stack className="block md:hidden">
          <IconButton onClick={() => handleDrawer(true)}>
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="right"
            open={open}
            onClose={() => handleDrawer(false)}
          >
            <Stack className="h-full relative min-w-[260px]">
              <Stack className="p-8 gap-6 h-full justify-start items-center relative">
                <Stack className="w-full border-b border-black justify-center items-center pb-4">
                  <Typography
                    component={Link}
                    className="font-bold text-black no-underline cursor-pointer text-base"
                  >
                    Features
                  </Typography>
                </Stack>
                <Stack className="w-full border-b border-black justify-center items-center pb-4">
                  <Typography
                    component={Link}
                    className="font-bold text-black no-underline cursor-pointer text-base"
                  >
                    Exchanges
                  </Typography>
                </Stack>

                <Stack className="w-full border-b border-black justify-center items-center pb-4">
                  <Typography
                    component={Link}
                    className="font-bold text-black no-underline cursor-pointer text-base"
                  >
                    How it works?
                  </Typography>
                </Stack>

                <Stack className="w-full border-b border-black justify-center items-center pb-4">
                  <Typography
                    component={Link}
                    className="font-bold text-black no-underline cursor-pointer text-base"
                  >
                    Blog
                  </Typography>
                </Stack>

                <Stack className="w-full border-b border-black justify-center items-center pb-4">
                  <Typography
                    component={Link}
                    className="font-bold text-black no-underline cursor-pointer text-base"
                  >
                    About Us
                  </Typography>
                </Stack>

                <Button
                  variant="outlined"
                  className="font-semibold ml-4 px-8 capitalize border-2 text-blue border-blue hover:bg-blue hover:text-white transition-all ease-in-out delay-200"
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Drawer>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navbar;
