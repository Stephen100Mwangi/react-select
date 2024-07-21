import React, { useState } from 'react'
import Select from "react-select"

const App = () => {

  const options = [
    {value:"Chocolate",label:"Chocolate"},
    {value:"Coffee",label:"Coffee"},
    {value:"Vanilla",label:"Vanilla"},
    {value:"Strawberry",label:"Strawberry"},
    {value:"Blueberry Burst",label:"Blueberry Burst"},
    {value:"Mountain Blackberry",label:"Mountain Blackberry"},
    {value:"White Chocolate Macadamia",label:"White Chocolate Macadamia"}
  ]

  const languages = [
    {value:"HTML",label:"HTML"},
    {value:"CSS",label:"CSS"},
    {value:"JavaScript",label:"JS"},
    {value:"Python",label:"Python"},
    {value:"Java",label:"Java"},
    {value:"pHP",label:"PHP"},
    {value:"Solidity",label:"Solidity"},
    {value:"C",label:"C"},
    {value:"C#",label:"C#"},
    {value:"Kotlin",label:"Kotlin"},
    {value:"Dart",label:"Dart"},
    {value:"Bash",label:"Bash"},
    {value:"Haskell",label:"Haskell"},
    {value:"Ruby",label:"Ruby"},
    {value:"Pascal",label:"Pascal"},
    {value:"Perl",label:"Perl"},
    {value:"Scala",label:"Scala"},
    {value:"TypeScript",label:"TypeScript"},
    {value:"Rust",label:"Rust"}
  ]

  const customStyles = {
    controls: (provided)=>({...provided, width:"400px",borderRadius:"10px"}),
    options: (provided,state)=>({...provided,color:"white",backgroundColor: state.isSelected?"green":"black"})
  }

  const [optionSelected,setItem] = useState("");
  const [selectedLanguages,setLanguages] = useState([]);

  
  return (
    <div className='flex flex-col space-y-20 justify-center items-center'>
      <div className="flex flex-col space-y-5">
        <p className='text-base font-bold text-red-500'>React Select</p>
        <p className='text-green-500 font-bold text-xl'>What is your favorite yoghurt flavour</p>
        <div className='w-[500px]'>
          <Select options={options} styles={customStyles} onChange={(option) =>setItem(option)}></Select>
        </div>

        <p className='text-green-500 font-bold'>Flavours you love: <span className='text-black'>{optionSelected.label}</span></p>
      </div>
      
      <div className="flex flex-col space-y-5">
        <p className='text-green-500 font-bold text-xl'>What languages are you proficient in?</p>
        <div className='w-[500px]'>
          <Select options={languages} styles={customStyles} isMulti onChange={(options) =>setLanguages(options)}></Select>
        </div>

        <p className='text-green-500 font-bold'>Languages you know: <span className='text-black font-light'>{selectedLanguages.map(lang => lang.label).join(', ')}</span></p>
      </div>
    </div>
  )
}

export default App
