import React, { useState, useEffect } from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);
  return (
    <div id="App">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário GitHub</label>
            <input name="github_username" id="github_username" required></input>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                name="latitude"
                id="latitude"
                value={latitude}
                type="number"
                onChange={e => setLatitude(e.target.value)}
                required
              ></input>
            </div>
            <div className="input-block">
              <label htmlFor="logintude">Longitude</label>
              <input
                name="logintude"
                id="logintude"
                value={longitude}
                type="number"
                onChange={e => setLongitude(e.target.value)}
                required
              ></input>
            </div>
          </div>
          <button type={"submit"}>Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/17389588?s=460&v=4"
                alt="Mateus Sousa"
              />
              <div className="user-info">
                <strong>Mateus Sousa</strong>
                <span>ReactJs, React Native, NodeJs</span>
              </div>
            </header>
            <p>Code Love</p>
            <a href="https://github.com/sousaprogramador">
              Acessar Perfil do Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/17389588?s=460&v=4"
                alt="Mateus Sousa"
              />
              <div className="user-info">
                <strong>Mateus Sousa</strong>
                <span>ReactJs, React Native, NodeJs</span>
              </div>
            </header>
            <p>Code Love</p>
            <a href="https://github.com/sousaprogramador">
              Acessar Perfil do Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/17389588?s=460&v=4"
                alt="Mateus Sousa"
              />
              <div className="user-info">
                <strong>Mateus Sousa</strong>
                <span>ReactJs, React Native, NodeJs</span>
              </div>
            </header>
            <p>Code Love</p>
            <a href="https://github.com/sousaprogramador">
              Acessar Perfil do Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/17389588?s=460&v=4"
                alt="Mateus Sousa"
              />
              <div className="user-info">
                <strong>Mateus Sousa</strong>
                <span>ReactJs, React Native, NodeJs</span>
              </div>
            </header>
            <p>Code Love</p>
            <a href="https://github.com/sousaprogramador">
              Acessar Perfil do Github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
