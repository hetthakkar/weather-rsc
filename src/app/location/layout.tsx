export default function LocationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex min-h-screen flex-col items-start justify-between p-12 md:p-24'>
      {children}
    </div>
  )
}
