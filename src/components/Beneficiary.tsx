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
    <div
      className="flex justify-between min-h-fit h-16 rounded-md bg-gray-100  m-4 border-2 
    shadow-md"
    >
      <h2 className=" px-2 font-semibold text-textPrimary-700 my-auto">
        {name}
      </h2>
      <div className="flex my-auto">
        <Button text={"Edit"} handleClick={() => deleteBeneficiary}></Button>
        <Button text={"Delete"} handleClick={() => deleteBeneficiary}></Button>
      </div>
    </div>
  );
};

export default Beneficiary