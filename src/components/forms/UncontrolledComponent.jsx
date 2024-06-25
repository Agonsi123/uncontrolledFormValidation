import React, {useRef, useState} from 'react'

// My code for first take home
const UncontrolledComponent = () => {
const firstNameRef = useRef(null)
const lastNameRef = useRef(null)
const emailRef = useRef(null)
const phoneNumberRef = useRef(null)
const [errors, setErrors] = useState({})

const validated = () =>{
    let newErrors = {
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
    };
    if(!firstNameRef.current.value)newErrors.firstname = 'Firstname is required';
    if(!lastNameRef.current.value)newErrors.lastname = 'Lastname is required';
    if(!emailRef.current.value)newErrors.email = 'Email is required';
    if(!phoneNumberRef.current.value)newErrors.phone = 'Phone number is required'
    else if(!/\S+@\S+\.\S+/.test(emailRef.current.value))newErrors.email = 'Email is not valid';
    console.log(newErrors.email);
    return newErrors;
}
//My code for take home stops

const handleSubmit = (e) => {
    e.preventDefault();
    const firstname = firstNameRef.current.value;
    const lastname = lastNameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneNumberRef.current.value;
    // My code for take home for this section
    let newErrors = validated()

    if (!firstname || !lastname || !email || !phone) {
        // alert('Kindly complete all the fields');
        setErrors(newErrors);
        return;
    }
    console.log('Form submitted:', {firstname, lastname, email, phone});
}

  return (
    <div className='bg-purple-400 w-full m-4 p-8 ml-1 shadow-lg sm:m-6'>
        <form onSubmit={handleSubmit} className='bg-white mb-4 my-1 px-3 py-6'>
            <div className='flex flex-col px-2 mb-4'>
                <label className='text-black text-xs font-bold mb-2 ml-[-7.1rem] sm:ml-[-8rem] tracking-wide'>First Name</label>
                <input className='border-hidden rounded py-1 px-4 mb-3 text-[12px] bg-purple-100'
                type="text"
                ref={firstNameRef} 
                />
                {/* My code for take home */}
                {errors.firstname && <span style={{color:'red'}}>{errors.firstname}</span>}
            </div>
            <div className='flex flex-col px-2 mb-4'>
                <label className='text-black text-xs font-bold mb-2 -ml-28 sm:-ml-32 tracking-wide'>Last Name</label>
                <input className='border-hidden rounded py-1 px-4 mb-3 text-[12px] bg-purple-100'
                type="text"
                ref={lastNameRef} 
                />
                {/* My code for take home */}
                {errors.lastname && <span style={{color:'red'}}>{errors.lastname}</span>}
            </div>
            <div className='flex flex-col px-2 mb-4'>
                <label className='text-black text-xs font-bold mb-2 -ml-36 sm:-ml-40 tracking-wide'>Email</label>
                <input className='border-hidden rounded py-1 px-4 mb-3 text-[12px] bg-purple-100' 
                type="email" 
                ref={emailRef} 
                />
                {/* My code for take home */}
                {errors.email && <span style={{color:'red'}}>{errors.email}</span>}
            </div>
            <div className='flex flex-col px-2 mb-4'>
                <label className='text-black text-xs font-bold mb-2 ml-[-5.3rem] sm:ml-[-6.2rem] tracking-wide'>Phone Number</label>
                <input className='border-hidden rounded py-1 px-4 mb-3 text-[12px] bg-purple-100'
                type="tel"
                ref={phoneNumberRef} 
                />
                {/* My code for take home */}
                {errors.phone && <span style={{color:'red'}}>{errors.phone}</span>}
            </div>
            <button className='bg-purple-400 hover:bg-purple-800 text-white mb-4' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UncontrolledComponent