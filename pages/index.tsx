import Navbar from "@/components/organisme/Navbar";
import MainBanner from "@/components/organisme/MainBanner";
import TransactionStep from "@/components/organisme/TransactionStep";
import FeatureGame from "@/components/organisme/FeatureGame";
import Reached from "@/components/organisme/Reached";
import Story from "@/components/organisme/Story";
import Footer from "@/components/organisme/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeatureGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
