import { useState } from 'react';


function AdoptionForm({data, setData}) {
   const [form, setForm] = useState({
        name:'',
        email:'',
        phone:''
    })
    const [error, setError] = useState("")

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        })
        // console.log(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // Validation
        if(!form.name || !form.phone || !form.phone) {
            setError("Please fill in all fields")
            return
        }


        // create new entry
        const newForm = {...Form}

        //Add to the state
        setData([newForm, ...data])

        // Reset form data
        setForm ({
            name:'',
            email:'Email',
            phone:''
        })


    }
    return ( 
        <form onSubmit={handleSubmit} className="mb-6 bg-zinc-100" >
            <h1 className="text-4xl mt-6 p-5 mb-4">Adoption Form </h1>
          <div className="mb-4">
            <label htmlFor="fname" className="block font-semibold">Full name</label>
            <input name="name" type="text" className="w-full p-2 border rounded-lg"  value={form.name} onChange={handleChange} />
            </div>  
            <div className="mb-4">
            <label htmlFor="email" className="block font-semibold">Email</label>
            <input name="email" type="email" className="w-full p-2 border rounded-lg"  value={form.email} onChange={handleChange}/>
            </div>  
            <div className="mb-4">
            <label htmlFor="phone" className="block font-semibold">Phone</label>
            <input name="phone" type="number" className="w-full p-2 border rounded-lg"  onChange={handleChange} />
            </div> 
            <button className="bg-black text-white px-4 py-2 rounded-2xl hover:bg-gray-800 transition">
            Submit Application
          </button>
             

        </form>

     );
}
  

export default AdoptionForm;