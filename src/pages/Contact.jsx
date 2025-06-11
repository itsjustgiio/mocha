import React, { useState } from 'react';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAlphaInput = (setter) => (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z]*$/.test(value)) {
      setter(value);
    }
  };

  const handlePhoneInput = (e) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 10);
    let formatted = '';

    if (raw.length > 0) {
      formatted += '(' + raw.slice(0, 3);
    }
    if (raw.length >= 4) {
      formatted += ') ' + raw.slice(3, 6);
    } else if (raw.length > 3) {
      formatted += ')';
    }
    if (raw.length >= 7) {
      formatted += ' - ' + raw.slice(6);
    } else if (raw.length > 6) {
      formatted += ' -';
    }

    setPhone(formatted);
  };

  return (
    <div className="bg-[#c4a484] min-h-screen p-6 font-[Gabarito]">
      <div className="max-w-3xl mx-auto bg-[#FEEFC6] p-6 rounded-md shadow-md text-center">
        <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
        <p className="text-sm">Have a question, suggestion, or bug report? We’d love to hear from you!</p>
      </div>

      <form className="max-w-3xl mx-auto mt-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={handleAlphaInput(setFirstName)}
              className="w-full px-4 py-2 rounded border border-black bg-[#fbe9d9] text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={handleAlphaInput(setLastName)}
              className="w-full px-4 py-2 rounded border border-black bg-[#fbe9d9] text-black"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold">Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 rounded border border-black bg-[#fbe9d9] text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Phone Number</label>
          <input
            type="tel"
            placeholder="(xxx) xxx - xxxx"
            value={phone}
            onChange={handlePhoneInput}
            className="w-full px-4 py-2 rounded border border-black bg-[#fbe9d9] text-black placeholder-gray-400"
            maxLength={16}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Comments</label>
          <textarea
            placeholder="Reason for contacting us..."
            rows="6"
            className="w-full px-4 py-2 rounded border border-black bg-[#fbe9d9] text-black"
          ></textarea>
        </div>

        <div className="text-center pt-2">
          <button
            type="submit"
            className="bg-[#654321] text-white px-6 py-2 rounded-md shadow font-semibold hover:bg-[#543210]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
