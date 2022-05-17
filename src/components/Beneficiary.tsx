import React from 'react'
import Button from './Button';

type Props = {name:string}

const Beneficiary = ({ name }) => {

    const deleteBeneficiary = async (name: string) => {
      await fetch("http://localhost:8000/beneficiary/addBenefciary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ beneficiaryName }),
      })
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) =>
          //,,,
          console.log("success")
        )
        .catch((err) => console.log(err));
    };
  return (
    <div className="h-20 border-pink-400 bg-slate-200 border-solid m-4 border-2 flex justify-between">
      <h2 className=" px-2 font-semibold text-blue-500 my-auto">{name}</h2>
      <div className="flex my-auto">
        <Button text={"Edit"} handleClick={() => console.log("edit")}></Button>
        <Button text={"Delete"} handleClick={() => deleteBeneficiary}></Button>
      </div>
    </div>
  );
};

export default Beneficiary