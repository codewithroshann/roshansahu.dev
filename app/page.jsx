import Container from "@/components/Container";
import Profile from "@/components/Profile";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-3">
        <Profile />
        <Expertise />
        <Footer/>
      </div>
    </Container>
  );
}
