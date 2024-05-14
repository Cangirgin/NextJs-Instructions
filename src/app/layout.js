import { roboto } from "@/helpers/fonts";
import "./index.scss"
import { SessionProvider } from "next-auth/react"

export const metadata = {
  title: {
    template: "%s | Cosmo Shop",
    default: "Cosmo Shop"
  },
  description: "You can get luxury electronic devices",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} h-100`}>
      <body className={'d-flex flex-column  h-100 '}>
        <SessionProvider>
        {children}
        </SessionProvider>
      </body>
    </html>
  );
}