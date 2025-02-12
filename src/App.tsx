import { FormEvent, useState } from "react";

import "./App.css";

interface InfoProps {
  nome: string;
  age: number;
}

function App() {
  const [nameInput, setNameInput] = useState<string>("");

  const [birthInput, setBirthInput] = useState<any>("");

  const [info, setInfo] = useState<InfoProps | null>(null);

  function calcular(event: FormEvent) {
    event.preventDefault();

    if (!nameInput || !birthInput) {
      alert("Por favor, preencha todos os dados");
      return;
    }
    if (birthInput < 1900) {
      alert("Preencha uma data válida, porfavor");

      setNameInput("");

      setBirthInput("");
      return;
    }

    const currentYear = new Date().getUTCFullYear();

    const age = currentYear - Number(birthInput);

    setInfo({
      nome: nameInput,
      age: age,
    });

    setNameInput("");

    setBirthInput("");
  }

  return (
    <div>
      <header className="title"> Descubra a sua idade</header>

      <main className="container">
        <form className="form">
          <label className="label1">Digite seu nome?</label>
          <input
            className="input"
            type="text"
            placeholder="Digite seu nome"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            required
            min="3"
          />
          <label className="label2">Digite o ano em que você nasceu?</label>
          <input
            className="input"
            type="text"
            placeholder="Digite o seu ano de nascimento"
            value={birthInput}
            onChange={(e) => setBirthInput(e.target.value)}
            required
            minLength={4}
            maxLength={4}
          />

          <button onClick={calcular} className="button">
            Descobrir idade
          </button>
        </form>

        {info !== null && (
          <h1 className="result">
            {info?.nome}, você tem exatamente {info?.age} anos
          </h1>
        )}
      </main>
    </div>
  );
}

export default App;
