import PageHeader from "@/components/common/page-header";
import Slider from "@/components/homepage/slider";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <PageHeader title="Home" />

      < Slider />
    </Container>
  );
}