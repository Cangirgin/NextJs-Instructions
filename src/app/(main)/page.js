import Spacer from "@/components/common/spacer";
import UpcomingProduct from "@/components/homepage/UpcomingProduct";
import Slider from "@/components/homepage/slider";

export const metadata = {
  title: "Home",
  description: "You can get luxury electronic devices",
};

export default function Home() {

  return (
    <div>
      <Spacer height={50} />
      < Slider />
      <Spacer height={50} />
      <UpcomingProduct />
      <Spacer height={50} />
    </div>
  );
} 