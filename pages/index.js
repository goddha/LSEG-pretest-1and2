import styles from '../styles/pretest.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const methods = ['isPrime', 'isFibonacci']
export default function Q1() {
  const [inputState, setinputState] = useState(1)
  const [resultState, setresultState] = useState(false)
  const [selectMethod, setselectMethod] = useState(methods[0])

  useEffect(() => {
    setresultState(checkNum(selectMethod, inputState))
  }, [selectMethod, inputState])

  const validateNum = (getNumber) => {
    const number = Math.round(getNumber)
    if (number < 1) {
      return 1
    }
    return number
  }
  const checkNum = (method, num) => {
    console.log({ method }, { num })
    if ((method = methods[0])) {
      for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false
      return num > 1
    } else if ((method = methods[1])) {
      if (num === 1) {
        return [0, 1]
      } else {
        var arr = fib(num - 1)
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        return arr
      }
    } else {
      return 'Error'
    }
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.first}>
          <input
            type='number'
            min={1}
            value={inputState}
            onChange={(e) => {
              setinputState(validateNum(e.target.value))
            }}
          />
        </div>
        <div className={styles.second}>
          <select
            name='method'
            value={selectMethod || methods[0]}
            onChange={(e) => {
              setselectMethod(e.target.value)
            }}>
            {methods.map((name) => {
              return (
                <option key={name} value={name}>
                  {name}
                </option>
              )
            })}
          </select>
        </div>
        <div className={styles.third}>
          {inputState} {selectMethod}? : {`${resultState}`}
        </div>
      </div>
      <Link href='/q2'>
        <a className={styles.link}>&gt;&gt; question2</a>
      </Link>
    </>
  )
}
