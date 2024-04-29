"use client";

import {
  Close,
  Favorite,
  Login,
  Notifications,
  Person,
  Search,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  CircularProgress,
  Collapse,
  IconButton,
  InputAdornment,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SearchForm = () => {
  return (
    <div className="w-[330px]">
      <PopupState variant="popover">
        {(popupState) => (
          <>
            <TextField
              fullWidth
              size="medium"
              placeholder="search something here .."
              {...bindTrigger(popupState)}
              InputProps={{
                className: "!text-sm !rounded-full ",
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="inherit" />
                  </InputAdornment>
                ),
              }}
            />

            <Popover
              {...bindPopover(popupState)}
              transformOrigin={{ horizontal: "center", vertical: "top" }}
              anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
              slotProps={{
                paper: {
                  className: "!w-[330px] !mt-3 !px-4 !py-5 !rounded-xl",
                },
              }}
            >
              <div className="flex justify-center py-7">
                <CircularProgress size={30} />
              </div>
            </Popover>
          </>
        )}
      </PopupState>
    </div>
  );
};

export default function Header() {
  // states
  const [alertOpen, setAlertOpen] = useState(true);

  return (
    <header>
      {/* top header */}
      <Collapse in={alertOpen} className="!bg-primary">
        <div className="container mx-auto px-5 py-2">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Typography variant="body2" color={"white"}>
                Don{"'"}t Miss Out! 50% Off Joyride Rentals{" "}
                <Link
                  href={"/user/register"}
                  className="!underline !font-medium"
                >
                  Register Today
                </Link>
              </Typography>
            </div>
            <IconButton
              size="medium"
              className="!text-white"
              onClick={() => setAlertOpen(false)}
            >
              <Close fontSize="small" />
            </IconButton>
          </div>
        </div>
      </Collapse>

      {/* header area*/}
      <div className="bg-[#f2f2f2]">
        <div className="container mx-auto px-5 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <Link href={"/"}>
                <Image
                  src={"/images/logo.png"}
                  alt="logo"
                  width={80}
                  height={80}
                  className="!w-16 !h-16"
                />
              </Link>
              <SearchForm />
            </div>

            {/* right menu */}
            <div className="flex items-center gap-8">
              <Badge
                className="!cursor-pointer !text-secondary"
                badgeContent={1}
                color="primary"
                component={Link}
                href={"/favorite"}
              >
                <Favorite />
              </Badge>
              <Badge
                className="!cursor-pointer !text-secondary"
                badgeContent={1}
                color="primary"
              >
                <Notifications />
              </Badge>
              <Link href={"/user/profile"}>
                <Avatar sx={{ width: 34, height: 34 }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
