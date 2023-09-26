import SearchLocation from '@/components/SearchLocation'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-start justify-between p-12 md:p-24'>
      <h1 className='text-2xl md:text-4xl font-bold text-center text-foreground'>
        Weather
      </h1>
      <SearchLocation />
    </main>
  )
}
