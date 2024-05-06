import { inriaSerif } from "@/utils/fonts";
import "./index.scss"

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inriaSerif.variable} h-100`}>
      <body className={'d-flex flex-column justify-content-between h-100 '}>
        {children}
      </body>
    </html>
  );
}
