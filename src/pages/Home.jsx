import { Helmet } from "react-helmet-async"

const Home = () => {
   
  return (
    <>
      <Helmet>
        <title>Craft Canvas || Home</title>
      </Helmet>
      <header
        className='text-center text-5xl flex justify-center items-center'
      >
        Home
      </header>
    </>
  );
}
export default Home