import "@ui/styles/globals.css";
import { ThemeProvider } from "@/Components/theme-provider"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
