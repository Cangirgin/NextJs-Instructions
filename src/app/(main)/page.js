import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import Slider from "@/components/homepage/slider";
import { Container } from "react-bootstrap";

export const metadata = {
  title: "Home",
  description: "You can get luxury electronic devices",
};

export default function Home() {

  return (
    <Container >
      <Spacer height={50} />

      <PageHeader title="Home" />

      <Spacer />

      < Slider />
      <Spacer />
    </Container>
  );
}