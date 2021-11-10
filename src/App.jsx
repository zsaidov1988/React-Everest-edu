
import './App.css';
import content from './assets/content';
import { useState } from "react";

function App() {

  const [lang, setLang] = useState("uz");
  return (
    <>
      <div className="header">
        <div className="nav">
          <a href="#"><img className="logo-pic" src="./img/logo.png" alt="Logo of site" width="114" height="85" /></a>
          <ul className="navbar list">
            <li className="navbar-item"><a href="#" className="navbar-link active no-decoration">{content[lang].home}</a></li>
            <li className="navbar-item"><a href="#" className="navbar-link no-decoration">{content[lang].aboutUs}</a></li>
            <li className="navbar-item"><a href="#" className="navbar-link no-decoration">{content[lang].contacts}</a></li>
          </ul>
          <select defaultValue={lang} onChange={(evt) => {
            setLang(evt.target.value);
          }}>
            <option value="uz">UZ</option>
            <option value="en">EN</option>
          </select>
        </div>
        <div>

          <div className="container">
            <div className="welcome">
              <h2 className="welcome-header">{content[lang].welcome}</h2>
              <p className="welcome-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, nemo, ea et ipsum magni aliquam recusandae rerum  alias modi soluta mollitia, odit animi natus consequuntur quibusdam nam explicabo! Explicabo, accusamus.</p>
              <a href="#" className="welcome-link no-decoration">{content[lang].learnMore}</a>
            </div>
          </div>

          <a className="link-down no-decoration" href="#"><img className="down-arrow" src="./img/down-arrow.png" alt="Arrow down" width="52" height="70" /></a>
        </div>
      </div>

      <div className="courses">
        <div className="container">
          <h2 className="courses-header">{content[lang].ourCources}</h2>
          <ul className="courses-list list">
            <li className="courses-item">
              <a href="#" className="courses-item-link no-decoration">
                <img src="./img/flag-en.png" alt="English course" className="courses-item-img" width="297" height="297" />
                <h2 className="courses-item-header">{content[lang].english}</h2>
                <p className="courses-item-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus eos magnam facere temporibus culpa, praesentium quas beatae, repudiandae nulla ipsamreiciendis enim consectetur veritatis asperiores corporisrerum voluptatum id quasi.</p>
              </a>
            </li>
            <li className="courses-item">
              <a href="#" className="courses-item-link no-decoration">
                <img src="./img/flag-ru.png" alt="Russian course" className="courses-item-img" width="297" height="297" />
                <h2 className="courses-item-header">{content[lang].russian}</h2>
                <p className="courses-item-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus eos magnam facere temporibus culpa, praesentium quas beatae, repudiandae nulla ipsamreiciendis enim consectetur veritatis asperiores corporisrerum voluptatum id quasi.</p>
              </a>
            </li>
            <li className="courses-item">
              <a href="#" className="courses-item-link no-decoration">
                <img src="./img/math.png" alt="Math course" className="courses-item-img" width="297" height="297" />
                <h2 className="courses-item-header">{content[lang].math}</h2>
                <p className="courses-item-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus eos magnam facere temporibus culpa, praesentium quas beatae, repudiandae nulla ipsamreiciendis enim consectetur veritatis asperiores corporisrerum voluptatum id quasi.</p>
              </a>
            </li>
            <li className="courses-item">
              <a href="#" className="courses-item-link no-decoration">
                <img src="./img/physics.png" alt="Physics course" className="courses-item-img" width="297" height="297" />
                <h2 className="courses-item-header">{content[lang].physics}</h2>
                <p className="courses-item-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus eos magnam facere temporibus culpa, praesentium quas beatae, repudiandae nulla ipsamreiciendis enim consectetur veritatis asperiores corporisrerum voluptatum id quasi.</p>
              </a>
            </li>
            <li className="courses-item">
              <a href="#" className="courses-item-link no-decoration">
                <img src="./img/amir-temur.png" alt="History course" className="courses-item-img" width="297" height="297" />
                <h2 className="courses-item-header">{content[lang].history}</h2>
                <p className="courses-item-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus eos magnam facere temporibus culpa, praesentium quas beatae, repudiandae nulla ipsamreiciendis enim consectetur veritatis asperiores corporisrerum voluptatum id quasi.</p>
              </a>
            </li>
            <li className="courses-item">
              <a href="#" className="courses-item-link no-decoration">
                <img src="./img/flag-uz.png" alt="Uzbek course" className="courses-item-img" width="297" height="297" />
                <h2 className="courses-item-header">{content[lang].motherTongue}</h2>
                <p className="courses-item-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus eos magnam facere temporibus culpa, praesentium quas beatae, repudiandae nulla ipsamreiciendis enim consectetur veritatis asperiores corporisrerum voluptatum id quasi.</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="teachers">
        <div className="container">
          <h2 className="teachers-header">{content[lang].ourTeachers}</h2>
          <ul className="teachers-list list">
            <li className="teachers-item">
              <a href="#" className="teachers-link no-decoration"><img src="./img/teacher1.png" alt="Lorem Ipsumov" className="teachers-img" /></a>
              <h3 className="teachers-item-header">Lorem Ipsumov</h3>
              <p className="teachers-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit aperiam animi</p>
            </li>
            <li className="teachers-item">
              <a href="#" className="teachers-link no-decoration"><img src="./img/teacher2.png" alt="Lorem Ipsumov" className="teachers-img" /></a>
              <h3 className="teachers-item-header">Lorem Ipsumov</h3>
              <p className="teachers-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit aperiam animi</p>
            </li>
            <li className="teachers-item">
              <a href="#" className="teachers-link no-decoration"><img src="./img/teacher3.png" alt="Lorema Ipsumova" className="teachers-img" /></a>
              <h3 className="teachers-item-header">Lorema Ipsumova</h3>
              <p className="teachers-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit aperiam animi</p>
            </li>
            <li className="teachers-item">
              <a href="#" className="teachers-link no-decoration"><img src="./img/teacher4.png" alt="Lorema Ipsumova" className="teachers-img" /></a>
              <h3 className="teachers-item-header">Lorema Ipsumova</h3>
              <p className="teachers-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit aperiam animi</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="map">
        <div className="container">
          <img src="./img/map.jpg" alt="Map" className="map-img" width="1100" height="580" />
        </div>
      </div>

      <div className="contact wrap">
        <div className="container">
          <h2 className="contact-header">{content[lang].adminContact}</h2>
          <a href="tel:+998991234567" className="contact-link no-decoration"><img src="./img/phone_yellow.svg" alt="Phone" className="contact-link-img" width="40" height="40" /><span> 99 123-45-67</span></a>
        </div>
      </div>

      <div className="footer">
        <div className="footer-flex">
          <div className="footer-left">
            <a href="#"><img src="./img/logo_footer.png" alt="Logo of site" className="footer-logo" width="162" height="120" /></a>
            <p className="footer-left-text-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, deserunt laudantium reprehenderit odit recusandae sed, aperiam animi debitis quae eos voluptate! Nihil deleniti at, repellat debitis consequatur ipsa fugit ea?</p>
            <p className="footer-left-text-bottom">{content[lang].copyright} 2021</p>
          </div>
          <ul className="footer-list list">
            <li className="footer-item">
              <h4 className="footer-item-header">{content[lang].aboutUs}</h4>
              <ul className="footer-item-menu list">
                <li className="footer-item-menu-item"><a href="tel:+998991234567" className="footer-item-menu-link no-decoration"><img src="./img/phone.svg" alt="Phone" width="14" height="14" /> 99 123-45-67</a></li>
                <li className="footer-item-menu-item"><a href="tel:+998991234567" className="footer-item-menu-link no-decoration"><img src="./img/phone.svg" alt="Phone" width="14" height="14" /> 99 123-45-67</a></li>
                <li className="footer-item-menu-item"><a href="#" className="footer-item-menu-link no-decoration"><img src="./img/mail.svg" alt="Mail" width="12" height="12" /> everestedu@gmail.com</a></li>
              </ul>
            </li>
            <li className="footer-item">
              <h4 className="footer-item-header">{content[lang].socialNets}</h4>
              <ul className="footer-item-menu list">
                <li className="footer-item-menu-item"><a href="#" className="footer-item-menu-link no-decoration"><img src="./img/telegram.svg" alt="Telegram" width="12" height="12" /> Telegram</a></li>
                <li className="footer-item-menu-item"><a href="#" className="footer-item-menu-link no-decoration"><img src="./img/instagram.svg" alt="Instagram" width="11" height="11" /> Instagram</a></li>
                <li className="footer-item-menu-item"><a href="#" className="footer-item-menu-link no-decoration"><img src="./img/facebook.svg" alt="Facebook" width="11" height="11" /> Facebook</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
