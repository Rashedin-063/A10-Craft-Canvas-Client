import { Helmet } from "react-helmet-async"
import Banner from './../components/Banner';
import CraftItems from "../components/CraftItems";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const  data  = useLoaderData();
  console.log(data)
  
   
  return (
    <>
      <Helmet>
        <title>Craft Canvas || Home</title>
      </Helmet>
      <Banner />
      <CraftItems data={data} />
    </>
  );
}
export default Home