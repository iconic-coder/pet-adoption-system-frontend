import React, { useState } from 'react';

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
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // Validation
        if(!form.name || !form.email || !form.phone) {
            setError("Please fill in all fields")
            return
        }

        // create new entry
        const newForm = {...form}

        //Add to the state
        setData([newForm, ...data])

        // Reset form data
        setForm({
            name:'',
            email:'',
            phone:''
        })
        
        setError("")
    }
    return ( 
        <form onSubmit={handleSubmit} className="card p-6 mb-6">
            <h1 className="text-3xl font-bold gradient-text mb-6">Adoption Application</h1>
            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
            
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input 
                    name="name" 
                    type="text" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200" 
                    value={form.name} 
                    onChange={handleChange} 
                    required
                />
            </div>  
            
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input 
                    name="email" 
                    type="email" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200" 
                    value={form.email} 
                    onChange={handleChange}
                    required
                />
            </div>  
            
            <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                <input 
                    name="phone" 
                    type="tel" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200" 
                    value={form.phone}
                    onChange={handleChange}
                    required
                />
            </div> 
            
            <button type="submit" className="btn-primary w-full">
                Submit Application
            </button>
        </form>
     );
}
  

export default AdoptionForm;