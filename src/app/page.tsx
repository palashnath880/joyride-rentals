import BookingArea from "@/components/Home/BookingArea";
import HeroSliders from "@/components/Home/HeroSliders";
import PopularCars from "@/components/Home/PopularCars";
import RecommendedCars from "@/components/Home/RecommendedCars";

const fetchDistrictsAndUpazilas = async () => {
  const districts = fetch(`${process.env.NEXT_WEBSITE_URL}/api/district`, {
    method: "GET",
  });
  const upazilas = fetch(`${process.env.NEXT_WEBSITE_URL}/api/upazila`, {
    method: "GET",
  });

  // resolve all promise
  const res = await Promise.all([districts, upazilas]);
  const districtsData = await res[0].json();
  const upazilassData = await res[1].json();
  return { districts: districtsData || [], upazilas: upazilassData || [] };
};

export default async function Home() {
  const { districts, upazilas } = await fetchDistrictsAndUpazilas();

  return (
    <>
      <HeroSliders />
      <BookingArea districts={districts} upazilas={upazilas} />
      <PopularCars />
      <RecommendedCars />
    </>
  );
}
