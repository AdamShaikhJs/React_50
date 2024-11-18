import React, { useState } from 'react'

export default function FormCustom() {
  const [user,setUser]=useState({
    fname:'',
    mobile:'',
    gender: '',
    country: '',
    interests: [], // To hold selected interests

  })
  const [data,setData]=useState([])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'interests') {
      setUser((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value] // Add to interests if checked
          : prev.interests.filter((interest) => interest !== value), // Remove if unchecked
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleSubmit=()=>{
    setData([...data,user])
  }
  return (
    <div className='box'>
        <p>😍 form data</p>
       <div>
        firstName <input placeholder='first name' value={user.fname} onChange={handleChange} name="fname"/> <br/>
        mobile <input placeholder='mobile number' value={user.mobile} onChange={handleChange} name="mobile"/> <br/>
        gender<input type="radio" name="gender" value="male" onChange={handleChange} /> Male
        <input type="radio" name="gender" value="female" onChange={handleChange} /> Female<br />
        country
        <select name="country" value={data.country} onChange={handleChange}>
          <option value="">Select a country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="India">India</option>
        </select><br />

        <label>Interests:</label><br />
        <input type="checkbox" name="interests" value="Reading" onChange={handleChange} /> Reading<br />
        <input type="checkbox" name="interests" value="Traveling" onChange={handleChange} /> Traveling<br />
        <button onClick={handleSubmit}>submit</button><button onClick={()=>setData([])}>clear Data</button>
       </div>
       <pre>
       {JSON.stringify(data, null, 2)}
       </pre>
    </div>
  )
}
