import React, { useState } from 'react'

const Signup = () => {

  const [userCredential, setUserCredential] = useState({
    name: "",
    phone: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const setCredential = (e) => {
    let nameOfData = e.target.name;
    let value = e.target.value;
    setUserCredential({...userCredential, [nameOfData]:value});
  }

  const sendData = async (e) => {
    e.preventDefault();
    const {name, phone, role, email, password, confirmPassword} = userCredential;
    
    const res = await fetch('/signup', {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, role, password, confirmPassword
      })
    });

    const data = res.json();
    if(!data || data.status === 500){
      alert("REGISTRATION FAILED");
    } 
    else{
      alert("REGISTRATION SUCCESSFULL");
      
    }
  }

  return (
    <div className = "container mt-5 m-auto w-50 border p-5">
      <form>
        <h1>Sign Up</h1>
        <div className="mb-3">
          <label for="name" className = "form-label">Name</label>
          <input name = "name" type="text" className = "form-control" aria-describedby="emailHelp"  value = {userCredential.name} onChange = {setCredential}/>
          <div id="emailHelp" className = "form-text">We'll never share your name with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="phone" className = "form-label">Phone Number</label>
          <input name = "phone" type="number" className ="form-control" aria-describedby="emailHelp" value = {userCredential.phone} onChange = {setCredential}/>
          <div id="emailHelp" className ="form-text">We'll never share your phone with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="role" className = "form-label">Role</label>
          <select name = "role" className ="form-control" aria-describedby="emailHelp" value = {userCredential.role} onChange = {setCredential}>
            <option value = "Farmer">Farmer</option>
            <option value = "Customer">Customer</option>
          </select>
          <div id="emailHelp" className ="form-text">We'll never share your role with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input name = "email" type="email" className = "form-control" aria-describedby="emailHelp" value = {userCredential.email} onChange = {setCredential}/>
          <div id="emailHelp" className = "form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input name = "password" type="password" class="form-control" id="exampleInputPassword1" value = {userCredential.password} onChange = {setCredential}/>
        </div>
        <div className="mb-3">
          <label for="confirmPassword" class="form-label">Confirm Password</label>
          <input name = "confirmPassword" type="password" class="form-control" value = {userCredential.confirmPassword} onChange = {setCredential}/>
        </div>
        <div className="mb-3">
                <a href = "/login">Already have an account? Log in</a>
            </div>
        <button type="submit" className = "btn btn-primary" onClick = {sendData}>Submit</button>
    </form>
    </div>
  )
}

export default Signup
