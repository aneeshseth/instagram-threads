import "@ui/styles/globals.css";
import { ThemeProvider } from "@/Components/theme-provider"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
       </ThemeProvider>
      </body>
    </html>
  );
}
