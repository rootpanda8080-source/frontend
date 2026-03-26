import React from 'react'

export default function MobileBanking() {
  return (
    <div className="bg-[#f5f5f5] py-10 text-center my-8 px-4">
      <h2 className="text-[#c41e3a] text-[22px] font-bold mb-6">MOBILE BANKING</h2>
      <img 
        src="https://mir-s3-cdn-cf.behance.net/projects/404/b7f382151402405.Y3JvcCw4MTMsNjM1LDAsNDI.png" 
        alt="Mobile Banking" 
        className="max-w-[300px] mx-auto mb-6"
      />
      <button className="bg-[#c41e3a] text-white rounded-[30px] w-[220px] h-[50px] text-[16px] font-medium hover:bg-[#a31830] transition">
        Download App
      </button>
    </div>
  )
}
