// VerificadorLinguagem.tsx
"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";

/*  desenvolver um algoritmo que reconheça a linguagem {a^n b^(2n) | n >= 0}. */

const VerificadorLinguagem: React.FC = () => {
  const [input, setInput] = useState("");
  const [resultado, setResultado] = useState<string | null>(null);

  const verificaLinguagem = (s: string): boolean => {
    let contadorA = 0;
    let contadorB = 0;

    for (let char of s) {
      if (char === "a") {
        if (contadorB > 0) {
          return false; // Não aceita 'a' após 'b'
        }
        contadorA++;
      } else if (char === "b") {
        contadorB++;
      } else {
        return false; // Caracteres inválidos
      }
    }

    return contadorB === 2 * contadorA;
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
      <h1 className={styles.title}>Verificador de Linguagem</h1>
      <div className={styles.inputGroup}>
        <input
          className={styles.input}
          type="text"
          value={input}
          placeholder="Aceita 'a' ou 'b'"
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

export default VerificadorLinguagem;
