import {useState} from "react"

export default function Donarform() {
  const [firstname,setfirstname] = useState("")
  const [lastname,setlastname] = useState("")
  const [emailid,setemailid] = useState("")
  const [phoneno,setphoneno] = useState("")
  const [bloodgroup,setbloodgroup] = useState("")
  const [age,setage] = useState("")
  const [city,setcity] = useState("")
  const [donation,setdonation] = useState("")
  
  function handleform(event){
    let userdata = {
      firstname:firstname,
      lastname:lastname,
      emailid:emailid,
      phoneno:phoneno,
      bloodgroup:bloodgroup,
      age:age,
      city:city,
      donation:donation,      
    }
    event.preventDefault()
    fetch('/api/formdata',{
      method:'post',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(userdata)
    }).then(response=>response.json()).then(data=>{
      console.log(data)
    })}
  return (
  <>
<div class='formalign'>
    <form onSubmit={handleform}>
  <div class="row">
    <div class="col">
      <input name="firstname" type="text" onChange={e=>setfirstname(e.target.value)} class="form-control"
      placeholder="First name"/>
    </div>
    <div class="col">
      <input name="lastname" type="text" onChange={e=>setlastname(e.target.value)} class="form-control"
      placeholder="Last name"/>
    </div>
    <div class="col">
      <input name="emailid" type="email" onChange={e=>setemailid(e.target.value)} class="form-control"
      placeholder="email ID"/>
    </div>
  </div>
  <br></br>
        <div class="row">
            <div class="col">
            <input name="phoneno" type="number" onChange={e=>setphoneno(e.target.value)} class="form-control"
            placeholder="Phone No." />
            </div>
            <div class="col">
            <input name="bloodgroup" type="text" onChange={e=>setbloodgroup(e.target.value)} class="form-control"
            placeholder="Blood Group" />
            </div>
            <div class="col">
            <input name="age" type="number" onChange={e=>setage(e.target.value)} class="form-control"
            placeholder="Age" />
            </div>
            </div>
            <br></br>
            <div class="row">
            <div class="col">
            <input name="city" type="text" onChange={e=>setcity(e.target.value)} class="form-control"
            placeholder='City'/>
            </div>
            <div class="col">
            <select name="donation" onChange={e=>setdonation(e.target.value)} class="form-control"
            >
                <option>CLick to choose the organ</option>
                <option>Heart</option>
                <option>Lungs</option>
                <option>Liver</option>
                <option>Kidneys</option>
                <option>Pancreas</option>
                <option>small Bowel</option>
            </select>
            </div>
        </div>
        <br></br>
        <button type="submit" class="btn btn-success">Submit</button>
    </form>
    </div>
    <br></br></>
    )
}
