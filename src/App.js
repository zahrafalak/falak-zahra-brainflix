import './App.scss';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />

      <section>
        <video controls poster="/images/w3html5.gif">
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  );
}

export default App;
