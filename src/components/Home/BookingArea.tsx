"use client";

import { AccessTime, Alarm, CarRental } from "@mui/icons-material";
import {
  Button,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
  MobileTimePicker,
} from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import Image from "next/image";
import React from "react";

interface LocationInputProps {
  label: string;
  name?: string;
  selectedPlace?: string | null | undefined;
  onChange?: () => void;
}

const LocationInput = ({
  onChange,
  label,
  name,
  selectedPlace,
}: LocationInputProps) => {
  return (
    <>
      <FormControl
        fullWidth
        variant="outlined"
        sx={{
          "& .MuiFormLabel-root": {
            paddingLeft: "7px !important",
          },
          "& .MuiInputLabel-shrink": {
            paddingLeft: "0px !important",
          },
        }}
      >
        <InputLabel id={`${name}-labelId`} className="!text-sm">
          {label}
        </InputLabel>
        <Select
          label={label}
          labelId={`${name}-labelId`}
          className="!text-sm !rounded-full"
        >
          <MenuItem value="hello" className="!text-sm">
            Hello
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

const DateInput = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          sx={{
            "& .MuiInputBase-input": {
              fontSize: "14px !important",
              paddingLeft: "18px !important",
            },
            "& fieldset": {
              borderRadius: "9999px !important",
            },
            "& .MuiInputAdornment-positionEnd": {
              paddingRight: "4px !important",
            },
          }}
          label={<Typography variant="body2">Select pickup date</Typography>}
        />
      </LocalizationProvider>
    </>
  );
};

const TimeInput = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileTimePicker
          sx={{
            "& .MuiInputBase-input": {
              fontSize: "14px !important",
              paddingLeft: "18px !important",
            },
            "& fieldset": {
              borderRadius: "9999px !important",
            },
          }}
          label={<Typography variant="body2">Select pickup time</Typography>}
          slotProps={{
            textField: {
              InputProps: {
                endAdornment: (
                  <InputAdornment position="end">
                    <AccessTime />
                  </InputAdornment>
                ),
              },
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
};

const ReturnDateTime = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DateTimePicker
          sx={{
            "& .MuiInputBase-input": {
              fontSize: "14px !important",
              paddingLeft: "18px !important",
            },
            "& fieldset": {
              borderRadius: "9999px !important",
            },
            "& .MuiInputAdornment-positionEnd": {
              paddingRight: "4px !important",
            },
          }}
          slotProps={{
            popper: {
              sx: {
                "& .MuiList-root": {
                  width: "48px !important",
                  scrollbarWidth: "thin",
                },
                "& .MuiList-root li": {
                  fontSize: "14px !important",
                  width: "40px !important",
                },
              },
            },
          }}
          label={
            <Typography variant="body2">Select return date and time</Typography>
          }
        />
      </LocalizationProvider>
    </>
  );
};

export default function BookingArea({
  districts,
  upazilas,
}: {
  districts: { id: number; name: string }[];
  upazilas: { id: number; name: string; district_id: number }[];
}) {
  console.log(districts, upazilas);

  return (
    <section>
      <div className="container mx-auto px-5">
        <div className="rounded-xl bg-gray-100 shadow-md overflow-hidden px-5 py-8 flex gap-5">
          <div className="w-[260px]  py-4 px-4 rounded-xl flex flex-col justify-center gap-4">
            <div className="!w-40 mx-auto">
              <Image
                src={"/images/car-booking.png"}
                width={200}
                height={140}
                alt="Car"
                className="!w-full !h-auto object-contain"
                draggable={false}
              />
            </div>
            <Typography variant="subtitle2" className="!text-primary">
              Reserve a car for your upcoming trip.
            </Typography>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-5">
              <div className="col-span-full flex items-end">
                <div className="flex-1">
                  <LocationInput label="Select pickup location" />
                </div>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  className="!text-sm"
                >
                  TO
                </Divider>
                <div className="flex-1">
                  <LocationInput label="Select drop-off location" />
                </div>
              </div>
              <DateInput />
              <TimeInput />
              <ReturnDateTime />
            </div>
            <div className="flex justify-center mt-7">
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
      </div>
    </section>
  );
}
