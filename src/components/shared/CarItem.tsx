import {
  CarRental,
  Favorite,
  FavoriteBorder,
  LocalGasStation,
  Person2,
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CarItemProps {
  id: string;
  slug: string;
  name: string;
  type: string;
  capacity: number;
  rent: number;
  discount: number;
  image: string;
}

export default function CarItem({
  capacity,
  discount,
  image,
  name,
  rent,
  type,
  id,
  slug,
}: CarItemProps) {
  const rentPrice = discount > 0 ? rent - (rent / 100) * discount : rent;
  const isSaved = false;

  return (
    <div className="px-4 bg-gray-100 rounded-lg shadow-md">
      <div className="py-4 flex justify-between items-start">
        <div className="flex flex-col">
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle2" className="!text-gray-400">
            {type}
          </Typography>
        </div>
        <IconButton size="small" className="!text-primary">
          {isSaved ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
      </div>
      <div className="aspect-video w-full">
        <Image
          src={image}
          width={300}
          height={200}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex items-center justify-between mt-4 !text-sm !font-medium">
        <span className="!text-gray-400 flex items-center gap-1">
          <LocalGasStation fontSize="small" />
          80L
        </span>
        <span className="!text-gray-400 flex items-center gap-1">
          <Person2 fontSize="small" />
          {capacity} people
        </span>
      </div>
      <div className="pb-4 pt-3 flex justify-between items-center">
        <div className="flex flex-col">
          <Typography variant="h6" className="flex items-center !font-semibold">
            {rentPrice}/
            <Typography
              variant="body1"
              className="!text-gray-400 !font-semibold !ml-0.5"
            >
              day
            </Typography>
          </Typography>
          {discount && discount > 0 ? (
            <Typography
              variant="body1"
              className="!text-gray-400 !font-semibold"
            >
              ${rent}
            </Typography>
          ) : null}
        </div>
        <Button
          variant="contained"
          className="!py-2.5 !px-4 !text-sm !font-normal !rounded-full"
          LinkComponent={Link}
          href={`/cars/${slug}`}
        >
          Rent Now
        </Button>
      </div>
    </div>
  );
}
