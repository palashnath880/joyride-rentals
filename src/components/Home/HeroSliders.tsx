"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { Button, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface SlideItem {
  image: string;
  slug: string;
  name: string;
  description: string;
}

export default function HeroSliders() {
  const data: SlideItem[] = [
    {
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      image: "/images/car.png",
      name: "Nissan GTR ",
      slug: "nissan",
    },
    {
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      image: "/images/car.png",
      name: "Nissan GTR ",
      slug: "nissan",
    },
    {
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      image: "/images/car.png",
      name: "Nissan GTR ",
      slug: "nissan",
    },
    {
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      image: "/images/car.png",
      name: "Nissan GTR ",
      slug: "nissan",
    },
    {
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      image: "/images/car.png",
      name: "Nissan GTR ",
      slug: "nissan",
    },
    {
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      image: "/images/car.png",
      name: "Nissan GTR ",
      slug: "nissan",
    },
    {
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      image: "/images/car.png",
      name: "Nissan GTR ",
      slug: "nissan",
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-5 py-14">
        <div className="!relative">
          <Swiper
            slidesPerView={2}
            spaceBetween={40}
            speed={1000}
            navigation={{ nextEl: "#heroNextBtn", prevEl: "#heroPrevBtn" }}
            modules={[Navigation]}
          >
            {data.map(({ description, image, name, slug }, index) => (
              <SwiperSlide key={index} className="!py-5">
                <div
                  className="rounded-xl overflow-hidden w-full aspect-video flex flex-col justify-end relative !bg-cover !bg-no-repeat !shadow-lg"
                  style={{
                    background: `linear-gradient(#b1aeae50, #b1aeae50), url(/images/texture_background.jpg)`,
                  }}
                >
                  <div className="absolute top-0 left-0 w-2/3 h-auto px-8 py-5">
                    <Typography variant="h5" fontWeight={600}>
                      {name}
                    </Typography>
                    <Typography variant="body2">{description}</Typography>
                    <Button
                      variant="contained"
                      className="!py-3 !px-6 !font-normal !text-sm !rounded-full !mt-4"
                      LinkComponent={Link}
                      href={`/cars/${slug}`}
                    >
                      Rent Now
                    </Button>
                  </div>
                  <div className="flex justify-end h-[40%]">
                    <div className="h-full w-auto">
                      <Image
                        src={image}
                        alt="Hello"
                        width={400}
                        height={300}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* navigation button */}
          <IconButton
            color="primary"
            id="heroPrevBtn"
            className="!bg-primary disabled:!opacity-70 !text-white !absolute !top-1/2 !-translate-y-1/2 !z-[10000] !left-0 !-translate-x-1/2"
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            color="primary"
            id="heroNextBtn"
            className="!bg-primary disabled:!opacity-70 !text-white !absolute !top-1/2 !-translate-y-1/2 !z-[10000] !right-0 !translate-x-1/2"
          >
            <ChevronRight />
          </IconButton>
        </div>
      </div>
    </section>
  );
}
