import React, { useState } from 'react';

function GiveUpPet() {
  const [formData, setFormData] = useState({
    // Pet Information
    petName: '',
    petType: '',
    breed: '',
    age: '',
    gender: '',
    weight: '',
    color: '',
    microchipped: '',
    microchipNumber: '',
    spayedNeutered: '',
    description: '',
    temperament: '',
    goodWithKids: '',
    goodWithPets: '',
    houseTrained: '',
    specialNeeds: '',
    
    // Owner Information
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    emergencyContact: '',
    emergencyPhone: '',
    
    // Ownership & Medical
    ownershipDuration: '',
    vetName: '',
    vetPhone: '',
    vetAddress: '',
    lastVetVisit: '',
    vaccinations: '',
    medicalConditions: '',
    medications: '',
    
    // Surrender Details
    reason: '',
    urgency: '',
    preferredNewHome: '',
    surrenderDate: '',
    
    // Legal
    ownershipProof: false,
    medicalRecords: false,
    legalOwner: false,
    surrenderAgreement: false
  });

  const [files, setFiles] = useState({
    medicalRecords: null,
    ownershipProof: null,
    photos: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required documents
    if (!formData.ownershipProof || !formData.medicalRecords) {
      alert('Please confirm you have the required documents (medical records and proof of ownership).');
      return;
    }
    
    if (!formData.legalOwner || !formData.surrenderAgreement) {
      alert('Please confirm the legal requirements.');
      return;
    }
    
    console.log('Surrender form submitted:', formData, files);
    alert('Thank you for your submission. Our team will review your application and contact you within 24-48 hours to schedule an appointment.');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles({
      ...files,
      [name]: name === 'photos' ? Array.from(selectedFiles) : selectedFiles[0]
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Pet Surrender Form
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We understand that sometimes circumstances change. We're here to help find your pet a loving new home.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="card">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Pet Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  🐾 Pet Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pet Name *
                    </label>
                    <input
                      type="text"
                      name="petName"
                      required
                      value={formData.petName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pet Type *
                    </label>
                    <select
                      name="petType"
                      required
                      value={formData.petType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select pet type</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="bird">Bird</option>
                      <option value="rabbit">Rabbit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Breed *
                    </label>
                    <input
                      type="text"
                      name="breed"
                      required
                      value={formData.breed}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age *
                    </label>
                    <input
                      type="text"
                      name="age"
                      required
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="e.g., 2 years, 6 months"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      required
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Weight
                    </label>
                    <input
                      type="text"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      placeholder="e.g., 25 lbs, 5 kg"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Color/Markings
                    </label>
                    <input
                      type="text"
                      name="color"
                      value={formData.color}
                      onChange={handleChange}
                      placeholder="e.g., Brown with white chest"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Microchipped? *
                    </label>
                    <select
                      name="microchipped"
                      required
                      value={formData.microchipped}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="unknown">Unknown</option>
                    </select>
                  </div>
                  {formData.microchipped === 'yes' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Microchip Number
                      </label>
                      <input
                        type="text"
                        name="microchipNumber"
                        value={formData.microchipNumber}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Spayed/Neutered? *
                    </label>
                    <select
                      name="spayedNeutered"
                      required
                      value={formData.spayedNeutered}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="unknown">Unknown</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      House Trained? *
                    </label>
                    <select
                      name="houseTrained"
                      required
                      value={formData.houseTrained}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select option</option>
                      <option value="yes">Yes</option>
                      <option value="partially">Partially</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Good with Children? *
                    </label>
                    <select
                      name="goodWithKids"
                      required
                      value={formData.goodWithKids}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="unknown">Unknown</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Good with Other Pets? *
                    </label>
                    <select
                      name="goodWithPets"
                      required
                      value={formData.goodWithPets}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="unknown">Unknown</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How long have you owned this pet? *
                    </label>
                    <input
                      type="text"
                      name="ownershipDuration"
                      required
                      value={formData.ownershipDuration}
                      onChange={handleChange}
                      placeholder="e.g., 3 years"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pet Description & Temperament *
                  </label>
                  <textarea
                    name="description"
                    rows="3"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your pet's personality, habits, favorite activities, and any behavioral notes..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Needs or Medical Conditions
                  </label>
                  <textarea
                    name="specialNeeds"
                    rows="2"
                    value={formData.specialNeeds}
                    onChange={handleChange}
                    placeholder="Any special dietary needs, medical conditions, or care requirements..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>

              {/* Medical Records & Veterinary Information */}
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h2 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                  🏥 Medical Records & Veterinary Information (Required)
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Veterinarian Name *
                    </label>
                    <input
                      type="text"
                      name="vetName"
                      required
                      value={formData.vetName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Veterinarian Phone *
                    </label>
                    <input
                      type="tel"
                      name="vetPhone"
                      required
                      value={formData.vetPhone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Veterinarian Address *
                    </label>
                    <input
                      type="text"
                      name="vetAddress"
                      required
                      value={formData.vetAddress}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Veterinary Visit *
                    </label>
                    <input
                      type="date"
                      name="lastVetVisit"
                      required
                      value={formData.lastVetVisit}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Medications
                    </label>
                    <input
                      type="text"
                      name="medications"
                      value={formData.medications}
                      onChange={handleChange}
                      placeholder="List any current medications"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vaccination History *
                  </label>
                  <textarea
                    name="vaccinations"
                    rows="2"
                    required
                    value={formData.vaccinations}
                    onChange={handleChange}
                    placeholder="List all vaccinations and dates (Rabies, DHPP, etc.)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medical History & Conditions
                  </label>
                  <textarea
                    name="medicalConditions"
                    rows="2"
                    value={formData.medicalConditions}
                    onChange={handleChange}
                    placeholder="Any past surgeries, injuries, chronic conditions, allergies, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>

              {/* Owner Information */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                  👤 Owner Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      name="ownerName"
                      required
                      value={formData.ownerName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Emergency Contact Name
                    </label>
                    <input
                      type="text"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Emergency Contact Phone
                    </label>
                    <input
                      type="tel"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Surrender Details */}
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-yellow-800 mb-4 flex items-center">
                  📋 Surrender Details
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level *
                    </label>
                    <select
                      name="urgency"
                      required
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select urgency</option>
                      <option value="immediate">Immediate (within 1-2 days)</option>
                      <option value="urgent">Urgent (within 1 week)</option>
                      <option value="flexible">Flexible (within 1 month)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Surrender Date
                    </label>
                    <input
                      type="date"
                      name="surrenderDate"
                      value={formData.surrenderDate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Surrender *
                  </label>
                  <textarea
                    name="reason"
                    rows="3"
                    required
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Please explain your situation in detail. This helps us better care for your pet and find the right home."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred New Home Type
                  </label>
                  <textarea
                    name="preferredNewHome"
                    rows="2"
                    value={formData.preferredNewHome}
                    onChange={handleChange}
                    placeholder="Any preferences for your pet's new home? (e.g., no small children, experienced pet owners, etc.)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>

              {/* Document Upload */}
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h2 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                  📎 Required Documents
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Medical Records (Required) *
                    </label>
                    <input
                      type="file"
                      name="medicalRecords"
                      onChange={handleFileChange}
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">Upload complete veterinary records including vaccination history</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Proof of Ownership (Required) *
                    </label>
                    <input
                      type="file"
                      name="ownershipProof"
                      onChange={handleFileChange}
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">Upload adoption papers, purchase receipt, or registration documents</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pet Photos (Optional)
                    </label>
                    <input
                      type="file"
                      name="photos"
                      onChange={handleFileChange}
                      accept=".jpg,.jpeg,.png"
                      multiple
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">Upload recent photos of your pet (up to 5 photos)</p>
                  </div>
                </div>
              </div>

              {/* Legal Agreements */}
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h2 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                  ⚖️ Legal Agreements & Confirmations
                </h2>
                <div className="space-y-4">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="legalOwner"
                      checked={formData.legalOwner}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                    <span className="text-sm text-gray-700">
                      I confirm that I am the legal owner of this pet and have the right to surrender ownership. *
                    </span>
                  </label>
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="ownershipProof"
                      checked={formData.ownershipProof}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                    <span className="text-sm text-gray-700">
                      I have provided valid proof of ownership and complete medical records. *
                    </span>
                  </label>
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="medicalRecords"
                      checked={formData.medicalRecords}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                    <span className="text-sm text-gray-700">
                      All medical information provided is accurate and complete to the best of my knowledge. *
                    </span>
                  </label>
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="surrenderAgreement"
                      checked={formData.surrenderAgreement}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                    <span className="text-sm text-gray-700">
                      I understand that by surrendering this pet, I am permanently giving up all rights and cannot reclaim the pet. I agree to the shelter's surrender policies and procedures. *
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex space-x-4">
                <button type="submit" className="btn-primary flex-1">
                  Submit Surrender Application
                </button>
                <button type="button" className="btn-secondary">
                  Save as Draft
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Information Boxes */}
        <div className="mt-8 space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
              📝 What Happens Next?
            </h3>
            <ul className="text-blue-700 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Application review within 24-48 hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Veterinary records verification with your vet</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Schedule surrender appointment and health assessment</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Complete behavioral evaluation and care plan</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Begin search for the perfect forever home</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-3 flex items-center">
              ⚠️ Important Requirements
            </h3>
            <ul className="text-amber-700 space-y-2">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span><strong>Medical Records:</strong> Complete veterinary history including vaccinations, surgeries, and treatments</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span><strong>Proof of Ownership:</strong> Adoption papers, purchase receipt, or registration documents</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span><strong>Current on Vaccinations:</strong> Pet must be up-to-date on required vaccinations</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span><strong>Health Check:</strong> Recent veterinary examination (within 30 days preferred)</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
              💚 Our Commitment
            </h3>
            <ul className="text-green-700 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>No-kill shelter - we find homes for all healthy, adoptable pets</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Comprehensive medical care and behavioral support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Thorough screening of potential adopters</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Updates on your pet's adoption journey (if requested)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiveUpPet;