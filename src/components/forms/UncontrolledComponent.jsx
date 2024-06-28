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
    <div className='bg-purple-400 w-full m-4 p-8 ml-1 shadow-lg md:max-w-sm md:mx-auto'>
        <form onSubmit={handleSubmit} className='bg-white mb-4 m-2 p-5 md:flex md:flex-wrap md:justify-between'>
            <div className='flex flex-col px-2 md:w-1/2'>
                <label className='text-black text-xs font-bold mb-2 ml-[-6.1rem] md:-ml-5 tracking-wide'>First Name</label>
                <input className='border-hidden rounded py-1 px-4 mb-3 text-[12px] md:text[32px] text-gray-900 bg-purple-100 '
                type="text"
                ref={firstNameRef} 
                />
                {/* My code for take home */}
                <div className='text-[10px] -ml-24 md:-ml-7'>
                    {errors.firstname && <span style={{color:'red'}}>{errors.firstname}</span>}
                </div>
            </div>
            <div className='flex flex-col px-2 md:w-1/2'>
                <label className='text-black text-xs font-bold mb-2 -ml-24 md:-ml-1  tracking-wide'>Last Name</label>
                <input className='border-hidden rounded py-1 px-4 mb-3 text-[12px] md:text[32px] md:ml-2 text-gray-900 bg-purple-100'
                type="text"
                ref={lastNameRef} 
                />
                {/* My code for take home */}
                <div className='text-[10px] -ml-24 md:-ml-2'>
                    {errors.lastname && <span style={{color:'red'}}>{errors.lastname}</span>}
                </div>
            </div>
            <div className='flex flex-col px-2 md:w-full'>
                <label className='text-black text-xs font-bold mb-2 -ml-32 md:ml-[-11.5rem]  tracking-wide'>Email</label>
                <input className='border-hidden rounded py-1 px-4 mb-3 text-[12px] md:text[32px] text-gray-900 bg-purple-100' 
                type="email" 
                ref={emailRef} 
                />
                {/* My code for take home */}
                <div className='text-[10px] -ml-28 md:-ml-44'>
                    {errors.email && <span style={{color:'red'}}>{errors.email}</span>}
                </div>
            </div>
            <div className='flex flex-col px-2 md:w-full'>
                <label className='text-black text-xs font-bold mb-2 ml-[-4.5rem] md:ml-[-8rem] tracking-wide'>Phone Number</label>
                <input className='border-hidden rounded py-1 px-4 mb-3 text-[12px] md:text[32px] text-gray-900 bg-purple-100'
                type="tel"
                ref={phoneNumberRef} 
                />
                {/* My code for take home */}
                <div className='text-[10px] ml-[-4.2rem] md:-ml-32'>
                    {errors.phone && <span style={{color:'red'}}>{errors.phone}</span>}
                </div>
            </div>
            <button className='bg-purple-400 hover:bg-purple-800 text-white mb-4 w-52 md:w-[15.5rem] md:ml-2 py-1' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UncontrolledComponent
