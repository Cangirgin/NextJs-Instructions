import { Inter, Roboto, Inria_Serif, } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"], variable: "--font-robot" });
const inriaSerif = Inria_Serif({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-inria-serif" });

export { inriaSerif, roboto, inter };