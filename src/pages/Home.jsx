import { Helmet } from "react-helmet-async"

const Home = () => {
   
  return (
    <>
      <Helmet>
        <title>Craft Canvas || Home</title>
      </Helmet>
      <header
        className='text-center min-h-[72vh] text-5xl flex justify-center items-center'
      >
        Home
      </header>
      {/* <div className='text-center min-h-[72vh] text-5xl flex justify-center items-center'>
        Home
      </div> */}
    </>
  );
}
export default Home