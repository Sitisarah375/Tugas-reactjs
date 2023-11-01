import './styles/App.css';
// import Component from './components/Component';
import Componentt from './components/Componentt';

const data = {
  title : 'Form Tambah', 
  subtitle : 'Isi Form', 
  owner : [ 
    {nama:"Sarah", kelas:"12"}, 
    {nama: "Kahfi", kelas:"12"}, 
    {nama: "Aufa", kelas:"12"}
  ]};

function App() {
  return (
    <div> 
      <header className="card">
        <Componentt title={data.title} subtitle={data.subtitle} owner={data.owner} />
        {/* <Component /> */}
      </header>
    </div>
  );
}

export default App;
