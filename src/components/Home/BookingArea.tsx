import { CarRental } from "@mui/icons-material";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

const LocationInput = () => {
  return (
    <>
      <FormControl variant="standard" fullWidth>
        <InputLabel id="" className="!text-sm !pl-2">
          Select pickup location
        </InputLabel>
        <Select
          label="Select pickup location"
          className="!text-sm"
          inputProps={{ className: "!pl-2" }}
        >
          <MenuItem value="hello">Hello</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default function BookingArea() {
  return (
    <section>
      <div className="container mx-auto px-5">
        <div className="rounded-xl bg-gray-100 overflow-hidden px-5 py-8">
          <div className="flex items-center justify-between gap-5">
            <div className="w-2/5">
              <Typography
                variant="h6"
                fontWeight={600}
                className="!text-primary"
              >
                Pick-Up
              </Typography>
              <div className="flex items-center mt-2">
                <LocationInput />
              </div>
            </div>
            <Divider orientation="vertical" variant="middle" />
            <div className=" w-2/5">
              <Typography
                variant="h6"
                fontWeight={600}
                className="!text-primary"
              >
                Drop-Off
              </Typography>
              <div className="flex items-center">
                <LocationInput />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              variant="contained"
              className="!py-3 !px-7 !rounded-full"
              startIcon={<CarRental />}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
