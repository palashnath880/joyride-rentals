import BookingArea from "@/components/Home/BookingArea";
import HeroSliders from "@/components/Home/HeroSliders";
import PopularCars from "@/components/Home/PopularCars";
import RecommendedCars from "@/components/Home/RecommendedCars";

export default function Home() {
  return (
    <>
      <HeroSliders />
      <BookingArea />
      <PopularCars />
      <RecommendedCars />
    </>
  );
}
