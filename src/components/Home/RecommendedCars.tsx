import { Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import CarItem from "../shared/CarItem";

export default function RecommendedCars() {
  return (
    <section className="mt-10">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between py-5">
          <Typography variant="body1" className="!text-gray-400">
            Recommended Cars
          </Typography>
          <Button
            variant="contained"
            LinkComponent={Link}
            href="/cars"
            className="!rounded-full !py-2 !px-6"
          >
            View All
          </Button>
        </div>

        <div className="py-5">
          <div className="grid grid-cols-4 gap-6">
            {[...Array(8)].map((item, index) => (
              <CarItem
                key={index}
                capacity={5}
                discount={0}
                id="1292"
                image="/images/logo.png"
                name="Nissan GTR"
                rent={200}
                slug="nissan-gtr"
                type="Sport"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
