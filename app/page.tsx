import Expertise from "@/components/expertise";
import FeaturedOn from "@/components/featuredon";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Instagram from "@/components/instagram";
import Navbar from "@/components/navbar";
import Portraits from "@/components/portraits";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="expertise">
        <Expertise />
      </div>
      <div id="portraits">
        <Portraits />
      </div>
      <div id="instagram">
        <Instagram />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="featured">
        <FeaturedOn />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
