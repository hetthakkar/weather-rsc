export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-start justify-between px-12 py-10">
      {children}
    </div>
  );
}
