import { Helmet } from "react-helmet-async"
import Banner from './../components/Banner';
import CraftItems from "../components/CraftItems";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const  items  = useLoaderData();
  
  return (
    <>
      <Helmet>
        <title>Craft Canvas || Home</title>
      </Helmet>
      <Banner />
      <CraftItems items={items} />
    </>
  );
}
export default Home