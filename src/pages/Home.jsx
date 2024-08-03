import { Helmet } from "react-helmet-async"
import Banner from './../components/Banner';

const Home = () => {
   
  return (
    <>
      <Helmet>
        <title>Craft Canvas || Home</title>
      </Helmet>
      <Banner/>
    </>
  );
}
export default Home