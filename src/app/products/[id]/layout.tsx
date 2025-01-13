export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <div>
        <h2>Product Layout</h2>
      </div>
    </div>
  );
}
