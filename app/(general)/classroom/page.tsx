"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";

/* Atividade EXTRA valendo um ponto para a 1ªVA:
Implementar a seguinte linguagem { {^n  }^n | n >= 0} na linguagem que você escolher. */

const VerificadorChaves: React.FC = () => {
  const [input, setInput] = useState("");
  const [resultado, setResultado] = useState<string | null>(null);

  const verificaLinguagem = (palavra: string): boolean => {
    let contador = 0;

    for (const char of palavra) {
      if (char === "{") {
        contador += 1;
      } else if (char === "}") {
        contador -= 1;
        if (contador < 0) {
          return false;
        }
      } else {
        return false;
      }
    }

    return contador === 0;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const testarLinguagem = () => {
    const aceita = verificaLinguagem(input);
    setResultado(aceita ? "Aceita" : "Não aceita");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Verificador de Chaves</h1>
      <div className={styles.inputGroup}>
        <input
          className={styles.input}
          type="text"
          value={input}
          placeholder="Aceita '{' ou '}'"
          onChange={handleInputChange}
        />
        <button className={styles.button} onClick={testarLinguagem}>
          Testar
        </button>
      </div>
      {resultado !== null && (
        <p
          className={`${styles.result} ${
            resultado === "Aceita" ? styles.success : styles.error
          }`}
        >
          Resultado: {resultado}
        </p>
      )}
    </div>
  );
};

export default VerificadorChaves;
