import './App.css';
import './Header.js'
import './Main.js'

function App() {
  return (
    <div className='Website'>
      <header>
        <h1>Welcome to my website!</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className='About-Us'>
          <h2>About Us</h2>
          <p>
            We are a small team of web developers based in the United States. We
            specialize in creating modern and responsive websites for businesses
            and individuals.
          </p>
        </section>

        <section className='Our-Services'>
          <h2>Our Services</h2>
          <ul>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>E-commerce Solutions</li>
            <li>Search Engine Optimization (SEO)</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
