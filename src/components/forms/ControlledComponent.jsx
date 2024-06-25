import React from 'react'
import { useState } from 'react'

const ControlledComponent = () => {
const [formData, setFormData] = useState({
    name:'',
    email:'',
})
const [errors, setErrors] = useState({})

const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
        ...formData,
        [name]: value
    });
}

const validated = () =>{
    const newErrors = {};
    if(!formData.name) newErrors.name = 'Name is required';
    if(!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is not valid';
    return newErrors;
}

const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validated()
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }
    console.log('Form submited:', formData);
}


  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <input
            type="text" 
            name='name' 
            value={formData.name} 
            onChange={handleChange} />
            {errors.name && <span style={{color:'red'}}>{errors.name}</span>}
        </div>
        <div>
            <label>Email</label>
            <input 
            // type="email" 
            name='email' 
            value={formData.email} 
            onChange={handleChange} />
            {errors.email && <span style={{color:'red'}}>{errors.email}</span>}
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default ControlledComponent