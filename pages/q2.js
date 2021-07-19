// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import styles from '../styles/pretest.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Q1() {
  const [dataState, setdataState] = useState(null)
  const [inputState, setinputState] = useState('')

  const fetchData = async () => {
    const res = await fetch('https://api.publicapis.org/categories')
    setdataState(await res.json())
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div style={{ padding: 5 }}>
      Filter :
      <input
        onChange={(e) => {
          setinputState(e.target.value)
        }}
      />
      <table style={{ border: '1px solid black' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: '#d0d0d0', padding: 10, fontSize: 20 }}>categories</th>
          </tr>
        </thead>
        <tbody>
          {dataState?.map((data) => {
            if (data.toLowerCase().includes(inputState.toLocaleLowerCase()))
              return (
                <tr key={data}>
                  <td style={{ padding: 3 }}>{data}</td>
                </tr>
              )
          })}
        </tbody>
      </table>
      <Link href='/'>
        <a className={styles.link}>&gt;&gt; question1</a>
      </Link>
    </div>
  )
}
