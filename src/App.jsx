import Header from "./components/Header";
import  "./assets/App.css";
import { useState } from "react";



function App() {


  // declare these guys as state

const [accountsize, setaccountsize] = useState(10)
const [slneeded, setslneeded] = useState(2)
const [leverage, setleverage] = useState(10)
const [target, settarget] = useState(0)
const [risk, setrisk] = useState(2)


const [output, setoutput] = useState([0,0,0,0,0])






function calculate(){

  // calculate everything in temporary fast variables
  // then set overall data on one state in one go

  const tempploss=((risk/100)*(accountsize))
  const temeppossize=(tempploss/(slneeded/100)) //*
  const tempsetcost=temeppossize/leverage//*
  const tempsetreward=(((target*leverage)/100)*tempsetcost)

  
  // const tempploss=(((risk/100)*(accountsize)))
  // const temeppossize=((((risk/100)*(accountsize)))/(slneeded/100)) //*
  // const tempsetcost=(((((risk/100)*(accountsize)))/(slneeded/100))/leverage)//*
  // const tempsetreward=(((target*leverage)/100)*(((((risk/100)*(accountsize)))/(slneeded/100))/leverage))


  const constdata=[temeppossize,tempsetcost,tempsetreward,tempploss] // push this to single state

  console.log(constdata)
  setoutput(constdata)
}




    



  return (
    <div className="container">


 
      <div className="row mt-5">

        <div className="col-md-2"></div>

        {/* MAIN PAGE CONTENTS */}
        
        <div className="col-md-8 px-4 bg-">



        <Header title="Position Calculator"/>

        <div className="row mt-5">
          <div className="col p-5 bg-white basecont">


<div className="row">
  <div className="col-md-8">

    

 
   
   <div className="col-md-10">
    
  

<div className="m-1">
    <span className="mt-3">Total Account Size ($)</span>
    <input type="text" name="accountsizw" className="myInput m-1 p-2 px-3 border rounded" placeholder="$" value={accountsize} onChange={(e)=> {setaccountsize(e.target.value)}}/>
</div>


<div className="m-1">
    <span className="mt-3">Stop Loss Needed (%)</span>
    <input type="text" className="myInput m-1 p-2 px-3 border rounded" placeholder="%" value={slneeded} onChange={(e)=> {setslneeded(e.target.value)}}/>
</div>


<div className="m-1">
    <span className="mt-3">Risk Per Trade (%)</span>
    <input type="text" className="myInput m-1 p-2 px-3 border rounded" placeholder="" value={risk} onChange={(e)=> {setrisk(e.target.value);}}/>
</div>

<hr></hr>

<div className="m-1">
    <span className="mt-3">Leverage</span>
    <small className="mt-3">Leverage is used to determine position cost</small>

    <input type="text" className="myInput m-1 p-2 px-3 border rounded" placeholder="" value={leverage} onChange={(e)=> {setleverage(e.target.value)}} />
</div>


<div className="m-1">
    <span className="mt-3">Profit Target</span>
    <small className="mt-3">Target is used to determine risk to reward</small>

    <input type="text" className="myInput m-1 p-2 px-3 border rounded" placeholder="" value={target} onChange={(e)=> {settarget(e.target.value) }}/>
</div>


<button type="button" className="mt-2 btn btn-primary" onClick={calculate}>Calculate</button>
       




    </div>



  </div>
  <div className="col-md-4 ">
    

    <div className="row  text-center border resCont p-3">
      <div className="col-sm-12 m-1">
        <span className="resTitle">POSITION SIZE</span>
        <h2>${output[0]}</h2>
       </div>

       <div className="col-sm-12  m-1">
        <span className="resTitle">POSITION COST</span>
        <h2 className="">${output[1]}</h2>
       </div>

       <div className="col-sm-12  m-1">
        <span className="resTitle">POTENTIAL PROFIT</span>
        <h1 className="text-success">+$ {output[2]}</h1>
        <span className="resTitle"><small className="text-success">10% INCREASE IN ACCOUNT</small></span>

       </div>

       <div className="col-sm-12  m-1">
        <span className="resTitle">POTENTIAL LOSS</span>
        <h1 className="text-danger">-$ {output['3']}
        </h1>
        <span className="resTitle"><small>% DECREASE IN ACCOUNT</small></span>  
       </div>

 


       </div>

      


  </div>
</div>




          </div>
        </div>




        </div>
        {/* MAIN PAGE CONTENTS */}

        <div className="col-md-2"></div>
      </div>



    </div>
  );
}

export default App;



