import ThemeSwitcher from './ThemeSwitcher'

export default function Header() {
  return (
    <div className='flex justify-between px-4 py-2'>
      <h1>Server rendered weather app</h1>
      <ThemeSwitcher />
    </div>
  )
}
