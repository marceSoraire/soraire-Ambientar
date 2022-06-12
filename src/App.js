import { useState } from 'react';
import './App.css';

//componentes
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import CardComponents from './components/CardComponents/CardComponents'

const App = () => {
  const [counter, setCounter] = useState(0);

  const suma = () => setCounter(counter + 1);
  const resta = () =>  counter > 0 ? setCounter(counter - 1) : console.log( 'El producto esta vacio');

  return (
    <div className='App'>
      <Navigation/>
      <div className='cards'>
        <CardComponents
          precio='30k'
          producto='Celular'
          modelo='Samsung A22'
          img='https://gizmobo.com/wp-content/uploads/2021/11/samsung-galaxy-a22-5g-extra-2.webp'
          agregar={suma}
          sacar= {resta}
          contador={counter}
         />
        <CardComponents
          precio='80k'
          producto='Netbook'
          modelo='HP mini'
          img='https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2012/01/HPMini1104-1.jpg?width=120enable=upscale'
          agregar={suma}
          sacar= {resta}
          contador={counter}
        />
        <CardComponents
          precio='150k'
          producto='Consola'
          modelo='PlayStation 5'
          img='https://arsonyb2c.vtexassets.com/arquivos/ids/348010/PS5_Dig_DS_B.jpg?v=637363629365300000'
          agregar={suma}
          sacar= {resta}
          contador={counter}
        />
      </div>
      <div className='cards'>
        <CardComponents
          precio='230k'
          producto='Heladera'
          modelo='Samsung Inverter'
          img='https://d2r9epyceweg5n.cloudfront.net/stores/959/516/products/51mrs1wzk8l-_sl1000_1-d8bd50c9e4eaf9920815756371652730-1024-1024.jpg'
          agregar={suma}
          sacar= {resta}
          contador={counter}
        />
        <CardComponents
          precio='180k'
          producto='Cocina'
          modelo='Industrial'
          img='https://ig.com.ar/wp-content/uploads/2018/12/Cocina-industrial-en-zona-sur-Modelo-Hi-tech.jpg'
          agregar={suma}
          sacar= {resta}
          contador={counter}
        />
        <CardComponents
          precio='210k'
          producto='Televisior'
          modelo='LG smart'
          img='https://www.lg.com/cac/images/televisores/md07529735/gallery/D6.jpg'
          agregar={suma}
          sacar= {resta}
          contador={counter}
        />
      </div>
      <div>
      <Footer 
        title='Marcelo Soraire'
        subtitle='React.js Comision 37745'
        text='@Copyright'
      />
      </div>
    </div>
  );
}

export default App;