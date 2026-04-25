'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [nameA, setNameA] = useState('Time A')
  const [nameB, setNameB] = useState('Time B')

  const [pointsA, setPointsA] = useState(0)
  const [pointsB, setPointsB] = useState(0)

  const [winA, setWinA] = useState(0)
  const [winB, setWinB] = useState(0)

  const [point, setPoint] = useState(1)

  function addPoint(team: string) {
    if (team === 'a') {
      let newPointsA: number

      if (pointsB === 11) {
        newPointsA = pointsA + 3
      } else {
        newPointsA = pointsA + point
      }

      if (newPointsA < 12) {
        setPointsA(newPointsA)
      } else {
        setWinA(winA + 1)
        resetPoints()
      }

    } else if (team === 'b') {
      let newPointsB: number

      if (pointsA === 11) {
        newPointsB = pointsB + 3
      } else {
        newPointsB = pointsB + point
      }

      if (newPointsB < 12) {
        setPointsB(newPointsB)
      } else {
        setWinB(winB + 1)
        resetPoints()
      }

    }
    setPoint(1)
  }

  function removePoint(team: string) {
    if (team === 'a') {
      const newPointsA = pointsA - point
      if (newPointsA >= 0) {
        setPointsA(newPointsA)

      } else {
        setPointsA(0)
      }

    } else if (team === 'b') {
      const newPointsB = pointsB - point
      if (newPointsB >= 0) {
        setPointsB(newPointsB)

      } else {
        setPointsB(0)
      }

    }
    setPoint(1)
  }

  function truco() {
    if (point === 1) {
      setPoint(point + 2)
    } else if (point <= 9) {
      setPoint(point + 3)
    }
  }

  function duck() {
    if (point > 3) {
      setPoint(point - 3)
    } else if (point > 1) {
      setPoint(point - 2)
    }
  }

  function resetPoints() {
    setPointsA(0)
    setPointsB(0)
  }

  function resetWins() {
    setWinA(0)
    setWinB(0)
  }

  function resetAll() {
    resetPoints()
    resetWins()
    setPoint(1)
  }

  return (
    <div className="
      bg-cover
      bg-center
      bg-[url('/bg.jpg')]
    ">
      <div className="
        backdrop-blur
        backdrop-brightness-50
        backdrop-saturate-40
      ">
        <div className="
          overflow-auto
          flex flex-col items-center
          max-w-200
          h-dvh
          mx-auto
          pt-10
          px-4
        ">
          <h1 className="
            select-none
            relative
            font-sancreek
            text-9xl
            drop-shadow-lg
            drop-shadow-black
            text-red-600
          ">
            Truco
            <span className="
              absolute -top-4 right-10
              font-popins font-blck text-3xl
              text-white
            ">Placar</span>
          </h1>
          <div className="
            flex flex-row
            text-2xl
            mt-4
            text-white
            
            [&_input]:w-full
            [&_input]:outline-none
            [&_input]:font-bold
            [&_input]:text-3xl
            [&_input]:text-center
            [&_input]:uppercase
            [&_input]:cursor-pointer
          ">
            {/* team a */}
            <div className="flex flex-col items-center">
              <div className="flex flex-row items-center gap-1">
                <img src="/trofeu.png" alt="" className="size-6" />
                {winA}
              </div>
              <input onFocus={(e) => e.target.select()} name="nameA" id="nameA" type="text" maxLength={8} defaultValue={'Time A'} />
              <div className="text-6xl">
                {pointsA}
              </div>
              <div className="flex flex-col items-center gap-2 mt-4 text-2xl">
                <button
                  onClick={() => addPoint('a')}
                  className="rounded-lg text-gray-300 bg-green-500/70 size-14 cursor-pointer hover:bg-green-500 transition-all">+</button>
                {pointsB === 11 ? '3' : point}
                <button
                  onClick={() => removePoint('a')}
                  className="rounded-lg text-gray-300 bg-red-500/70 size-14 cursor-pointer hover:bg-red-500 transition-all">-</button>
              </div>
            </div>
            {/* team b */}
            <div className="flex flex-col items-center">
              <div className="flex flex-row items-center gap-1">
                <img src="/trofeu.png" alt="" className="size-6" />
                {winB}
              </div>
              <input onFocus={(e) => e.target.select()} name="nameA" id="nameA" type="text" maxLength={8} defaultValue={'Time b'} />
              <div className="text-6xl">
                {pointsB}
              </div>
              <div className="flex flex-col items-center gap-2 mt-4 text-2xl">
                <button
                  onClick={() => addPoint('b')}
                  className="rounded-lg text-gray-300 bg-green-500/70 size-14 cursor-pointer hover:bg-green-500 transition-all">+</button>
                {pointsA === 11 ? '3' : point}
                <button
                  onClick={() => removePoint('b')}
                  className="rounded-lg text-gray-300 bg-red-500/70 size-14 cursor-pointer hover:bg-red-500 transition-all">-</button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-end md:justify-center gap-4 w-full mt-8 mb-4 text-2xl">
            {pointsA !== 11 && pointsB !== 11
              ? (
                <>
                  {point > 1 && (
                    <button
                      onClick={duck}
                      className="
                  py-2
                  border-2 rounded-lg
                  border-white
                  text-white
                  bg-white/20

                  hover:border-amber-300
                  hover:text-yellow-300
                  hover:bg-yellow-300/20
                  cursor-pointer transition-all
              ">
                      🦆 Correu ({point === 3 && '1' || point === 6 && '3' || point === 9 && '6' || point === 12 && '9'}) 🦆
                    </button>
                  )}

                  {point <= 9 && (
                    <button
                      onClick={truco}
                      className="
                  py-2
                  border-2 rounded-lg
                  border-white
                  text-white
                  bg-white/20

                  hover:border-amber-300
                  hover:text-yellow-300
                  hover:bg-yellow-300/20
                  cursor-pointer transition-all
              ">
                      ♣ {point === 1 && 'Trucooooo' || point === 3 && 'Pedir 6' || point === 6 && 'Pedir 9' || point === 9 && 'Pedir 12'} ♣
                    </button>
                  )}
                </>
              )
              : (
                <div className="
                  py-2
                  border-2 rounded-lg
                  text-center
                  border-yellow-500
                  text-yellow-500
                  bg-yellow-500/20
                  animate-[pulse_200ms_infinite]
              ">🎉 MÃO DE 11 🎉</div>
              )}

            <div
              onClick={resetAll}
              className="text-base text-white text-center hover:text-yellow-300 cursor-pointer transition-all">Zerar tudo</div>
          </div>
        </div>
      </div>
    </div>
  );
}
