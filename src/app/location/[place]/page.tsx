import { getWeather } from '@/lib/getWeather'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default async function Place({ params }: { params: { place: string } }) {
  const { location, current } = await getWeather(params.place)

  if (!location || !current) {
    return (
      <div className='flex flex-col'>
        Location not found
        <Link
          href='/'
          className='bg-black p-2 text-white border-2 border-white rounded-lg w-24 mt-4 text-center'
        >
          Go back
        </Link>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-start w-full'>
      <div className='flex flex-col md:flex-row justify-between items-start w-full'>
        <div className='flex items-center justify-start'>
          <img src={current.condition.icon} alt={current.condition.text} />
          <h1 className='text-2xl md:text-4xl font-bold md:text-center'>
            {location.name}, {location.country}
          </h1>
        </div>
        <div className='hidden flex-col justify-end'>
          <p>{location.localtime}</p>
        </div>
      </div>
      <hr className='my-4 w-[100%]  md:max-w-[800px]' />
      <div className=''>
        {/* Degree symbol */}

        <p className='text-lg'>Temperature: {current.temp_c}&deg; C</p>
        <p className='text-sm'>Feels like: {current.feelslike_c}&deg; C</p>

        <p className='text-lg mt-4'>Wind: {current.wind_kph} km/h</p>
        <p className='text-sm'>Direction: {current.wind_dir}</p>

        <p className='text-lg mt-4'>Humidity: {current.humidity}%</p>
        <p className='text-sm'>Cloud: {current.cloud}%</p>

        <p className='text-lg mt-4'>Precipitation: {current.precip_mm} mm</p>
        <p className='text-sm'>Pressure: {current.pressure_mb} mb</p>
      </div>
    </div>
  )
}
