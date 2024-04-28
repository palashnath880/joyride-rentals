import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterMenu = ({
  heading,
  data,
}: {
  heading: string;
  data: { href: string; label: string }[];
}) => {
  return (
    <div className="flex flex-col gap-3">
      <Typography variant="h6">{heading}</Typography>
      <ul className="pl-3 space-y-2">
        {data.map(({ href, label }, index) => (
          <li key={index}>
            <Typography
              component={Link}
              href={href}
              variant="body2"
              className="hover:!underline !duration-200"
            >
              {label}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Footer() {
  return (
    <footer>
      {/* menu area */}
      <div className="container mx-auto px-5 py-10">
        <div className="grid gap-5 grid-cols-11">
          <div className="col-span-5">
            <div className="w-[300px] max-w-full flex flex-col gap-3">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={160}
                height={160}
                className="!w-36 !h-36"
              />
              <Typography variant="body2">
                Cruise in style with Joyride Rentals! We offer a variety of cars
                to fit your needs, perfect for exploring the open road or
                getting around town. Rent yours today and experience the joy of
                the ride!
              </Typography>
            </div>
          </div>
          <div className="col-span-2">
            <FooterMenu
              data={[
                { href: "https://discord.com", label: "How it Works" },
                { href: "https://facebook.com", label: "Featured" },
                { href: "https://instagram.com", label: "Partnership" },
                { href: "https://youtube.com", label: "Business Relation" },
              ]}
              heading="About"
            />
          </div>
          <div className="col-span-2">
            <FooterMenu
              data={[
                { href: "https://discord.com", label: "Events" },
                { href: "https://facebook.com", label: "Blog" },
                { href: "https://instagram.com", label: "Podcast" },
                { href: "https://youtube.com", label: "Invite a Friend" },
              ]}
              heading="Community"
            />
          </div>
          <div className="col-span-2">
            <FooterMenu
              data={[
                { href: "https://discord.com", label: "Discord" },
                { href: "https://facebook.com", label: "Facebook" },
                { href: "https://instagram.com", label: "Instagram" },
                { href: "https://youtube.com", label: "Youtube" },
              ]}
              heading="Socials"
            />
          </div>
        </div>
      </div>

      {/* copyright area */}
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between border-t border-secondary border-opacity-60 py-5">
          <Typography variant="body2">
            ©2020 - {new Date().getFullYear()} Joyride Rentals. All rights
            reserved
          </Typography>

          <ul className="flex items-center gap-6">
            <li>
              <Typography
                href={"/privacy-policy"}
                component={Link}
                variant="subtitle2"
                className="hover:!underline duration-200"
              >
                Privacy & Policy
              </Typography>
            </li>
            <li>
              <Typography
                href={"/terms-conditions"}
                component={Link}
                variant="subtitle2"
                className="hover:!underline duration-200"
              >
                Terms & Conditions
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
