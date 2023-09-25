'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function SearchLocation() {
  const [location, setLocation] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus the input if '/' key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className='flex min-h-screen flex-col items-start pt-12 gap-4'>
      <h1 className='text-xl font-bold text-center'>
        Enter city name to view weather
      </h1>

      <form
        className='flex gap-2'
        onSubmit={(e) => {
          e.preventDefault()
          window.location.href = `/location/${location}`
        }}
      >
        <input
          className='border-2 border-gray-200 rounded-md bg-black text-white'
          ref={inputRef}
          type='text'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Link
          className='bg-black p-2 text-white border-2 border-white rounded-lg w-24 text-center'
          href={`/location/${location}`}
        >
          Go!
        </Link>
      </form>
    </div>
  )
}
