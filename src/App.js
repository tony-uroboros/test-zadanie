import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import stomach from './stomach.png';
import tooth from './tooth.png';
import injury from './injury.png';
import heart from './heart.png';
import XMLID from './XMLID 1497.png';
import Lor from './pic/Лор 1.png';
import child from './pic/child.png';
import gas from './pic/Union (2).png';
import stet from './pic/test.png';
import oft from './pic/Frame 849.png';
import uro from './pic/Union (1).png';
import fon from './pic/Union.png';
import nev from './pic/Group 231.png';
import stom from './pic/Group 232.png';
import lupa from './Group 230.svg';
import vopr from './Frame 1022.svg';
import kmp from './kmp.png';
import mcv from './mcv.png';
import lk from './lk.png';
import krug from './krug.png';
import strelka from './strelka.svg';
import logo from './logo.png';
import vhod from './footer/vhod.svg';
import kalendar from './footer/kalendar.svg';
import diag from './footer/diag.svg';
import { logDOM } from '@testing-library/react';

function App() {
  document.addEventListener('DOMContentLoaded', function () {   
    var button1 = document.getElementById('slide');
    button1.onclick = function () {
        document.getElementById('headd').scrollLeft += 100;
    };
    var button2 = document.getElementById('slide2');
  button2.onclick = function () {
      document.getElementById('headd').scrollLeft -= 100;
  };
  var button3 = document.getElementById('slide3');
    button3.onclick = function () {
        document.getElementById('kliniki').scrollLeft -= 320;
    };
    var button4 = document.getElementById('slide4');
  button4.onclick = function () {
      document.getElementById('kliniki').scrollLeft += 320;
  };
}, false);
 
  return (<div>
    <div>
      <a href='https://enzimo.ru/?page=1' target='_blank' rel="noopener noreferrer"><img src={lupa} alt='lupa' className='lupa'/></a>
      <a href='https://enzimo.ru/?page=1' target='_blank' rel="noopener noreferrer"><img src={vopr} alt='vopr' className='vopr'/></a>
    </div>
  <div className='headd' id='headd'>
    <div className='menu1'>
      <img src={stomach} alt={"желудок"} className='imgg'/>
      <p className='boli'>Боли в животе</p>
      </div>
    <div className='menu2'>
    <img src={tooth} alt={"зуб"} className='imgg'/>
      <p className='boli'>Зубная боль</p>
      </div>
    <div className='menu3'>
      <img src={injury} alt={"нога"} className='imgg'/>
      <p className='boli'>Последствия травм</p>
      </div>
    <div className='menu4'>
    <img src={heart} alt={"сердце"} className='imgg'/>
      <p className='boli'>Проблемы с сердцем</p>
      </div>
    <div className='menu5'>
    <img src={XMLID} alt={"вирус"} className='imgg'/>
      <p className='boli'>Простуда</p>
      </div>
        
    </div>
        <button id="slide2" type="button"> <img src={strelka} alt='' className='strelka2' /> </button>
        <button id="slide" type="button"> <img src={strelka} alt='' className='strelka' /> </button>
        <button id="slide4" type="button"> <img src={strelka} alt='' className='strelka2' /> </button>
        <button id="slide3" type="button"> <img src={strelka} alt='' className='strelka' /> </button>
    <div className='vrachi'>
    <div className='vrachi1'>

    <div className='prf'>
    <img src={stet} alt={"Терапевт"} className='img1'/>
    <div className='dctr'>
      <p className='dc'>Терапевт</p>
      <p className='sop'>Специалист общего профиля</p>
      </div>
      </div>

      <div className='prf'>
      <img src={fon} alt={"Фониатор"} className='img1'/>
      <div className='dctr'>
      <p className='dc'>Фониатор</p>
      <p className='sop'>Специалист общего профиля</p>
      </div>
      </div>
      <div className='prf'>
      <img src={gas} alt={"Гастроэнтеролог"} className='img1'/>
      <div className='dctr'>
      <p className='dc'>Гастроэнтеролог</p>
      <p className='sop'>Специалист общего профиля</p>
      </div>
      </div>
    </div>
    <div className='vrachi2'>
    <div className='prf'>
    <img src={child} alt={"Педиатр"} className='img1'/>
    <div className='dctr'>
      <p className='dc'>Педиатор</p>
      <p className='sop'>Специалист общего профиля</p>
      </div>
      </div>
      <div className='prf'>
      <img src={uro} alt={"Уролог"} className='img1'/>
      <div className='dctr'>
      <p className='dc'>Уролог</p>
      <p className='sop'>Специалист общего профиля</p>
      </div>
      </div>
      <div className='prf'>
      <img src={nev} alt={"Невролог"} className='img1'/>
      <div className='dctr'>
      <p className='dc'>Невролог</p>
      <p className='sop'>Специалист общего профиля</p>
      </div>
      </div>
    </div>
    <div className='vrachi3'>
    <div className='prf'>
    <img src={Lor} alt={"Лор"} className='img1'/>
    <div className='dctr'>
      <p className='dc'>Лор</p>
      <p className='sop'>Специалист общего профиля</p>
      </div>
      </div>
      <div className='prf'>
      <img src={oft} alt={"Офтальмолог"} className='img1'/>
      <div className='dctr'>
      <p className='dc'>Офтальмолог</p>
      <p className='sop'>Специалист общего профиля</p>
      </div>
      </div>
      <div className='prf'>
      <img src={stom} alt={"Стоматолог терапевт"} className='img1'/>
      <div className='dctr'>
      <p className='dc'>Стоматолог терапевт</p>
      <p className='sop'>Специалист общего профиля</p>
      </div>
      </div>
    </div>
    <p className='seeall'><a href='https://enzimo.ru/?page=1' target='_blank' rel="noopener noreferrer">Посмотреть все {'>'}</a></p>
    <div className='clin'><p className='nclin'>КЛИНИКИ</p></div>
    </div>
    
    <div className='kliniki' id='kliniki'>
    <div className='klin1'>
    <img src={kmp} alt='kmp' className='img2'/>
      <div className='kl'>КЛИНИКА МАРИИ ПОПОВОЙ</div>
      <img src={krug} alt='krug' className='img3'/>
    </div>
    <div className='klin2'>
      <img src={mcv} alt='mcv' className='img2'/>
      <div className='kl1'>МЕДИЦИНСКИЙ ЦЕНТР ВИТА</div>
      <img src={krug} alt='krug' className='img3'/>
    </div>
    <div className='klin3'>
    <img src={lk} alt='lk' className='img2'/>
      <div className='kl'>ЛОР КЛИНИКА</div>
      <img src={krug} alt='krug' className='img33'/>
    </div>
    <div className='klin4'>
    <img src={kmp} alt='kmp' className='img2'/>
      <div className='kl'>КЛИНИКА МАРИИ ПОПОВОЙ</div>
      <img src={krug} alt='krug' className='img3'/>
    </div>
    <div className='klin5'>
      <img src={mcv} alt='mcv' className='img2'/>
      <div className='kl1'>МЕДИЦИНСКИЙ ЦЕНТР ВИТА</div>
      <img src={krug} alt='krug' className='img3'/>
    </div>
    <div className='klin6'>
    <img src={lk} alt='lk' className='img2'/>
      <div className='kl'>ЛОР КЛИНИКА</div>
      <img src={krug} alt='krug' className='img33'/>
    </div>
    </div>
    
    <div className='footer'>
    <div id="footer1"><img src={logo} alt='logo' className='fi' /></div> 
    <div id="footer2"><img src={kalendar} alt='Расписание' className='fi2'/></div>
    <div id="footer3"><img src={diag} alt='Статистика' className='fi'/></div>
    <div id="footer4"><img src={vhod} alt='Вход' className='fi'/></div> 
      </div>
  </div>
  )
}



export default App;