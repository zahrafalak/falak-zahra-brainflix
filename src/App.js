import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';


function App() {
  return (
    <>
      <Header />
      <Hero />

      <section>
        <video controls poster="/images/w3html5.gif">
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
        </video>
      </section>
    </>
  );
}

export default App;
