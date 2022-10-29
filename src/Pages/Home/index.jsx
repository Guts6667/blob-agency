import './Home.css';
/**
 * 
 * @returns {JSX} Page HOME
 */
function Home() {
  return (
    <section className="container container__home" id='portfolio'>
      <h1>Bring your <strong>dream</strong> to life, take your project to the <strong>next level.</strong></h1>
      <p>BLOB Agency designs softwares and websites. Human interactions, accessibility, environment and reliaiblity are the key values driving our works.</p>
      <button className='btn'><a href="#contact">Contact</a></button>
    </section>
  );
}

export default Home;
