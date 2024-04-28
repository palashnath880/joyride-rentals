"use client";

import { Close } from "@mui/icons-material";
import { Collapse, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

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
    </header>
  );
}
