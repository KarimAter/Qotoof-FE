import Head from 'next/head';
import React, { useRef, useState } from 'react'
import styles from '../../styles/Home.module.css'


type Props = {}


const BenForm = (props: Props) => {


  const [response, setResponse] = useState<JSX.Element | string>("");


const nameInputRef = useRef(null);

const submitToBackend = async (e:React.SyntheticEvent) => {
    e.preventDefault();
    const beneficiaryName = nameInputRef.current.value;
   await fetch("http://localhost:8000/beneficiary", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({beneficiaryName}),
   })
     .then((res) => {
       console.log(res);

       // .json() converts JSON object to JS object
       return res.json();
     })
     .then((data) => setResponse(`${data.beneficiaryName} is added successfully`))
     .catch((err) => console.log(err));
  };
    return (
        <div className={styles.container}>
          <Head>
            <title>Qotoof Charity</title>
            <meta name="Charity org" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main>
            <h2>Entering Form</h2>
            <form onSubmit={submitToBackend}>
              <label htmlFor="beneficiary">Beneficiary Name</label>
              <input type={"text"} id={"beneficiary"} ref={nameInputRef} />
              <button type="submit">Submit to backend</button>
            </form>
            <h4>{response}</h4>
          </main>
        </div>
      );
}

export default BenForm