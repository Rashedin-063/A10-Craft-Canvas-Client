import { Helmet } from "react-helmet-async"
import Banner from './../components/Banner';
import CraftItems from "../components/CraftItems";
import { useLoaderData } from "react-router-dom";
import ClientReview from "../components/ClientReview";
import FAQSection from "../components/FAQSection";
import SubcategorySection from "../components/SubcategorySection";

const Home = () => {
  const  items  = useLoaderData();
  
  return (
    <div className="space-y-8">
      <Helmet>
        <title>Craft Canvas || Home</title>
      </Helmet>
      <Banner />
      <CraftItems items={items} />
      <SubcategorySection/>
      <FAQSection/>
      <ClientReview />
    </div>
  );
}
export default Home