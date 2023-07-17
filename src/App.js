import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [name,setName] = useState("");
  const [mobile,setMobile] = useState();
  const [password,setPassword] = useState();
  const [repassword,setRePassword] = useState();
  const [position,setPosition] = useState();
  const [agree,setAgree] = useState(false);
  const [gender,setGender] = useState("male");

  let male = useRef();
  let female = useRef();
  let other = useRef();

  const handleSubmit=(event)=>{
    event.preventDefault();
    if(name == "" || name == null){
      alert("Please Enter Name")
    }
    else if(mobile.length != 10){
      alert("Enter a valid Mobile number")
    }
    else if(password == null){
      alert('Enter Password')
    }
    else if(repassword != password){
      alert("Re write the password which is used in password field")
    }
    else if(position == null){
      alert("Please select valid Position")
    }
    else if(!agree){
      alert("Please check the terms & condition")
    }
    else{
      if(password){
        let numbercount=0;
        let smallleter = 0;
        let upperleter = 0;
        let specialletter = 0;
        for(let i=0;i<password.length;i++){
            if(Number(password[i]) || password[i]=="0"){
              numbercount+=1;
            }
            else if(password[i] == "#" || password[i] == "@"){
              specialletter+=1;
            }   
            else if(password[i].toLowerCase() == password[i]){
              smallleter+=1;
            }
            else if(password[i].toUpperCase() == password[i]){
              upperleter+=1;
            }
            
        }
        if(numbercount < 4){
          alert("password having atleast 4 number")
        }
        else if(smallleter < 2){
          alert("password has atleast 2 small case letter")
        }
        else if(upperleter < 2){
          alert("password has atleast 2 capital case letter")
        }
        else if(specialletter < 1){
          alert("Password has atleast 1 special character")
        }
        else{
          console.log({name,mobile,password,repassword,position,agree,gender});
        }
      }
    }
  }

  return (
    <div className="App">
      <h1>Full Stack Developer Task</h1>
      <form onSubmit={e=>handleSubmit(e)} >
        <div>
          <label>Name : </label>
          <input type='text' placeholder='Enter Name' onChange={e=>setName(e.target.value)} />
        </div>
        <div>
          <label>Mobile : </label>
          <input type='number' placeholder='Enter Mobile Number' onChange={e=>setMobile(e.target.value)} />
        </div>
        <div>
          <label>Password : </label>
          <input type='password' placeholder='Password' onChange={e=>setPassword(e.target.value)} />
        </div>
        <div>
          <label>Re-Password : </label>
          <input type='password' placeholder='Re-Enter the Password' onChange={e=>setRePassword(e.target.value)} />
        </div>
        <div>
          <label>Position : </label>
          <select onChange={e=>setPosition(e.target.value)} >
            <option>Select</option>
            <option value={'Manager'}>Manager</option>
            <option value={'Human Resource'}>Human Resource</option>
            <option value={'Team Lead'}>Team Lead</option>
            <option value={'System Engineer'}>System Engineer</option>
          </select>
        </div> 
          <input type='checkbox' onChange={e=>setAgree(!agree)} />
          <label>I agree the company terms & condition.</label> <br/>
        
          <label>Gender : </label>
          <input type='radio' ref={male} onChange={e=>{
            female.current.checked = false
            other.current.checked = false
            setGender('male')
          }} />
          <label>Men</label>
          <input type='radio' ref={female} onChange={e=>{
            male.current.checked = false
            other.current.checked = false
            setGender("female")
          }}/>
          <label>Female</label>
          <input type='radio' ref={other} onChange={e=>{
            male.current.checked = false
            female.current.checked = false
            setGender("other")
          }}/>
          <label>Other</label>    <br/>    
        
          <input type='submit' />
        
      </form>
    </div>
  );
}

export default App;
