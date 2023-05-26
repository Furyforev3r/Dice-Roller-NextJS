"use client";

import styles from './page.module.css'
import { useState } from 'react'


export default function Home() {
  const [valueDice, setValueDice] = useState(0)

  const RollDice = (diceMax: number) => {
    setValueDice(Math.floor(Math.random()*diceMax)+1)
  }

  return (
    <>
      <header className={styles.title}>
        <h1>Roll Dice</h1>
      </header>
      <main className={styles.roller}>
        <h2 className={styles.diceResult}>{valueDice}</h2>
        <div className={styles.buttons}>
          <button className={`${styles.buttonRoller}`} onClick={() => {RollDice(4)}}>D4</button>
          <button className={`${styles.buttonRoller}`} onClick={() => {RollDice(6)}}>D6</button>
          <button className={`${styles.buttonRoller}`} onClick={() => {RollDice(8)}}>D8</button>
          <button className={`${styles.buttonRoller}`} onClick={() => {RollDice(10)}}>D10</button>
          <button className={`${styles.buttonRoller}`} onClick={() => {RollDice(12)}}>D12</button>
          <button className={`${styles.buttonRoller}`} onClick={() => {RollDice(20)}}>D20</button>
          <button className={`${styles.buttonRoller}`} onClick={() => {RollDice(100)}}>D100</button>
        </div>
      </main>
      <footer className={styles.footer}>
        <a href="https://github.com/furyforev3r">
          <h3>My Github!</h3>
        </a>
      </footer>
    </>
  )
}
