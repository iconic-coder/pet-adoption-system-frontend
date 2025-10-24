import React, { useState } from 'react';
import './GiveUpForm.css'; 

function GiveUpForm() {
  const [formData, setFormData] = useState({
    petName: '', petType: '', breed: '', age: '', gender: '', weight: '', color: '',
    microchipped: '', microchipNumber: '', spayedNeutered: '', description: '',
    goodWithKids: '', goodWithPets: '', houseTrained: '', specialNeeds: '',
    ownerName: '', email: '', phone: '', address: '', city: '', emergencyContact: '', emergencyPhone: '',
    ownershipDuration: '', vetName: '', vetPhone: '', vetAddress: '', lastVetVisit: '',
    vaccinations: '', medicalConditions: '', medications: '', reason: '', urgency: '',
    preferredNewHome: '', surrenderDate: '', ownershipProof: false, medicalRecords: false,
    legalOwner: false, surrenderAgreement: false
  });

  const [files, setFiles] = useState({ medicalRecords: null, ownershipProof: null, photos: [] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.ownershipProof || !formData.medicalRecords || !formData.legalOwner || !formData.surrenderAgreement) {
      alert('Please complete all required fields and confirmations.');
      return;
    }
    try {
      // TODO: Add API endpoint
      const response = await fetch('/api/surrender', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, files })
      });
      if (!response.ok) throw new Error('Submission failed');
      // Handle success (redirect/show message)
    } catch (error) {
      console.error('Error:', error);
      // Handle error state
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };
  
  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles({ ...files, [name]: name === 'photos' ? Array.from(selectedFiles) : selectedFiles[0] });
  };

  const inputClass = "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white shadow-sm hover:shadow-md";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-2";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Pet Surrender Application
          </h1>
          <p className="text-lg text-gray-600">Help us find the perfect home for your beloved pet</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white shadow-2xl rounded-3xl p-8 border border-gray-100">
          
          {/* Pet Information */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl border-l-4 border-blue-400">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
              🐾 Pet Information
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className={labelClass}>Pet Name *</label>
                <input type="text" name="petName" required value={formData.petName} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Pet Type *</label>
                <select name="petType" required value={formData.petType} onChange={handleChange} className={inputClass}>
                  <option value="">Select type</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="bird">Bird</option>
                  <option value="rabbit">Rabbit</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Breed *</label>
                <input type="text" name="breed" required value={formData.breed} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Age *</label>
                <input type="text" name="age" required value={formData.age} onChange={handleChange} placeholder="e.g., 2 years" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Gender *</label>
                <select name="gender" required value={formData.gender} onChange={handleChange} className={inputClass}>
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Weight</label>
                <input type="text" name="weight" value={formData.weight} onChange={handleChange} placeholder="e.g., 25 lbs" className={inputClass} />
              </div>
            </div>
            <div className="mt-6">
              <label className={labelClass}>Pet Description *</label>
              <textarea name="description" rows="3" required value={formData.description} onChange={handleChange} 
                placeholder="Describe personality, habits, and temperament..." className={inputClass}></textarea>
            </div>
          </div>

          {/* Medical Information */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-2xl border-l-4 border-red-400">
            <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
              🏥 Medical Records (Required)
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Veterinarian Name *</label>
                <input type="text" name="vetName" required value={formData.vetName} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Vet Phone *</label>
                <input type="tel" name="vetPhone" required value={formData.vetPhone} onChange={handleChange} className={inputClass} />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>Vet Address *</label>
                <input type="text" name="vetAddress" required value={formData.vetAddress} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Last Vet Visit *</label>
                <input type="date" name="lastVetVisit" required value={formData.lastVetVisit} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Current Medications</label>
                <input type="text" name="medications" value={formData.medications} onChange={handleChange} className={inputClass} />
              </div>
            </div>
            <div className="mt-6">
              <label className={labelClass}>Vaccination History *</label>
              <textarea name="vaccinations" rows="2" required value={formData.vaccinations} onChange={handleChange} 
                placeholder="List all vaccinations and dates" className={inputClass}></textarea>
            </div>
          </div>

          {/* Owner Information */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border-l-4 border-green-400">
            <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              👤 Owner Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input type="text" name="ownerName" required value={formData.ownerName} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Phone *</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>City *</label>
                <input type="text" name="city" required value={formData.city} onChange={handleChange} className={inputClass} />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>Address *</label>
                <input type="text" name="address" required value={formData.address} onChange={handleChange} className={inputClass} />
              </div>
            </div>
          </div>

          {/* Surrender Details */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl border-l-4 border-yellow-400">
            <h2 className="text-2xl font-bold text-yellow-800 mb-6 flex items-center">
              📋 Surrender Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Urgency *</label>
                <select name="urgency" required value={formData.urgency} onChange={handleChange} className={inputClass}>
                  <option value="">Select urgency</option>
                  <option value="immediate">Immediate (1-2 days)</option>
                  <option value="urgent">Urgent (1 week)</option>
                  <option value="flexible">Flexible (1 month)</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Preferred Date</label>
                <input type="date" name="surrenderDate" value={formData.surrenderDate} onChange={handleChange} className={inputClass} />
              </div>
            </div>
            <div className="mt-6">
              <label className={labelClass}>Reason for Surrender *</label>
              <textarea name="reason" rows="3" required value={formData.reason} onChange={handleChange} 
                placeholder="Please explain your situation..." className={inputClass}></textarea>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-2xl border-l-4 border-purple-400">
            <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
              📎 Required Documents
            </h2>
            <div className="space-y-6">
              <div>
                <label className={labelClass}>Medical Records *</label>
                <input type="file" name="medicalRecords" onChange={handleFileChange} 
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" className={inputClass} />
                <p className="text-sm text-gray-500 mt-2">Complete veterinary records including vaccinations</p>
              </div>
              <div>
                <label className={labelClass}>Proof of Ownership *</label>
                <input type="file" name="ownershipProof" onChange={handleFileChange} 
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" className={inputClass} />
                <p className="text-sm text-gray-500 mt-2">Adoption papers, purchase receipt, or registration</p>
              </div>
              <div>
                <label className={labelClass}>Pet Photos (Optional)</label>
                <input type="file" name="photos" onChange={handleFileChange} accept=".jpg,.jpeg,.png" multiple className={inputClass} />
              </div>
            </div>
          </div>

          {/* Legal Agreements */}
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-8 rounded-2xl border-l-4 border-gray-400">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              ⚖️ Legal Confirmations
            </h2>
            <div className="space-y-4">
              {[
                { name: 'legalOwner', text: 'I am the legal owner with right to surrender' },
                { name: 'ownershipProof', text: 'I have provided valid ownership proof and medical records' },
                { name: 'medicalRecords', text: 'All medical information is accurate and complete' },
                { name: 'surrenderAgreement', text: 'I understand this permanently transfers ownership' }
              ].map(item => (
                <label key={item.name} className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                  <input type="checkbox" name={item.name} checked={formData[item.name]} onChange={handleChange} 
                    className="mt-1 h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" required />
                  <span className="text-sm font-medium text-gray-700">{item.text} *</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="flex space-x-4 pt-6">
            <button type="submit" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Submit Application
            </button>
            <button type="button" className="px-8 py-4 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition-colors font-semibold">
              Save Draft
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GiveUpForm;