

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <ul className="flex justify-end">
        <li className="mr-4 bg-lime-500 p-2 rounded-lg">Home</li>
        <li className="mr-4 bg-lime-500 p-2 rounded-lg">About</li>
        <li className="mr-4 bg-lime-500 p-2 rounded-lg">Services</li>
        <li className="mr-4 bg-lime-500 p-2 rounded-lg">Contact</li> 
    </ul>
    {children}
    </>
  );
}
