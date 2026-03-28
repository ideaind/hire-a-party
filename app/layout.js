export const metadata = {
  title: "Hire a Party",
  description: "Small celebrations, beautifully managed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
