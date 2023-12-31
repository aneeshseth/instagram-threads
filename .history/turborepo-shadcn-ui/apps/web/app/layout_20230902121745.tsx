import "@ui/styles/globals.css";
import { ThemeProvider } from "@/Components/theme-provider"
import {RecoilRoot} from 'recoil'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RecoilRoot>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
       </ThemeProvider>
       </RecoilRoot>
      </body>
    </html>
  );
}
