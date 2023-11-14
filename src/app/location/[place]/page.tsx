import SearchLocation from "@/components/SearchLocation";
import { getWeather } from "@/lib/getWeather";
import { Metadata } from "next";
import Link from "next/link";
type Props = {
  params: {
    place: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location, current } = await getWeather(params.place);

  if (!location || !current) {
    return {
      title: "Location not found",
      description: "Location not found",
    };
  }

  return {
    title: `${location.name} Weather`,
    description: `Weather in ${location.name}`,
  };
}

export default async function Place({ params }: { params: { place: string } }) {
  const { location, current } = await getWeather(params.place);

  if (!location || !current) {
    return (
      <div className="flex flex-col">
        Location not found
        <Link
          href="/"
          className="mt-4 w-24 rounded-lg border-2 border-white bg-black p-2 text-center text-white"
        >
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-start">
      <div className="mb-10">
        <SearchLocation />
      </div>
      <div className="flex w-full flex-col items-start justify-between md:flex-row">
        <div className="flex items-center justify-start">
          <img src={current.condition.icon} alt={current.condition.text} />
          <h1 className="text-2xl font-bold md:text-center md:text-4xl">
            {location.name}, {location.country}
          </h1>
        </div>
        <div className="hidden flex-col justify-end">
          <p>{location.localtime}</p>
        </div>
      </div>
      <hr className="my-4 w-[100%]  md:max-w-[800px]" />
      <div className="">
        <p className="text-lg">Temperature: {current.temp_c}&deg; C</p>
        <p className="text-sm">Feels like: {current.feelslike_c}&deg; C</p>

        <p className="mt-4 text-lg">Wind: {current.wind_kph} km/h</p>
        <p className="text-sm">Direction: {current.wind_dir}</p>

        <p className="mt-4 text-lg">Humidity: {current.humidity}%</p>
        <p className="text-sm">Cloud: {current.cloud}%</p>

        <p className="mt-4 text-lg">Precipitation: {current.precip_mm} mm</p>
        <p className="text-sm">Pressure: {current.pressure_mb} mb</p>
      </div>
    </div>
  );
}
