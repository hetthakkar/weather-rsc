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
    <div>
      <h1 className='text-4xl font-bold text-center'>
        {location.name}, {location.country}
      </h1>
      <div className='mt-4'>
        <h2>Current forecast</h2>
        <p>Temperature: {current.temp_c} C</p>
        <p className='text-sm text-gray-200'>
          Feels like: {current.feelslike_c} C
        </p>
      </div>
    </div>
  )
}
