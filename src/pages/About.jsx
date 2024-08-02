import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div
      className={`max-w-lg md: md:max-w-xl lg:max-w-2xl mx-auto lg:mt-10 space-y-4 px-2 text-justify`}
    >
      <Helmet>
        <title>About</title>
      </Helmet>
      <h2 className='text-3xl text-center font-bold lg:pb-4'>About Us</h2>
      <h5 className='text-lg font-semibold'>
        Welcome to{' '}
        <a
          className='text-2xl text-warm-coral font-semibold hover:underline font-handlee ml-1'
          href='/'
          target='_blank'
        >
          Craft Canvas
        </a>{' '}
      </h5>
      <div className='text-lg space-y-1 pb-7 '>
        <p>
          At Craft Canvas, we are dedicated to inspire creativity and passion
          through the world of arts and crafts. Our mission is to offer a
          diverse and unparalleled collection of painting, drawing, sketching
          resources. Whether you are a beginner looking to explore your artistic
          side or an experienced artist seeking new techniques, Craft Canvas is
          your ultimate destination for all things creative.
        </p>
        <p>
          Our curated selection of art supplies, step-by-step guides, and
          project ideas caters to artists of all levels and styles. From vibrant
          watercolors and intricate ink drawings to stunning acrylics and
          delicate pastels, Craft Canvas provides the tools and knowledge you
          need to bring your artistic visions to life.
        </p>
        <p>
          Stay connected with us through our social media channels
          <a
            className='text-deep-plum ml-1 font-semibold hover:underline'
            href='https://www.facebook.com'
            target='_blank'
          >
            Facebook
          </a>
          ,
          <a
            className='text-deep-plum ml-1 font-semibold hover:underline'
            href='https://www.twitter.com'
            target='_blank'
          >
            Twitter
          </a>
          ,
          <a
            className='text-deep-plum ml-1 font-semibold hover:underline mr-2'
            href='https://www.instagram.com'
            target='_blank'
          >
            Instagram
          </a>
          or drop us an email at
          <a
            className='text-deep-plum ml-1 font-bold hover:underline'
            href='https://mail.google.com/mail/?view=cm&fs=1&to=rashedinislam.06@gmail.com'
            target='_blank'
          >
            contact@craftcanvas.com
          </a>
          . Join our community and start your creative journey with Craft Canvas
          today!
        </p>
      </div>
    </div>
  );
};

export default About;
