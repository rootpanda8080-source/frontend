import React from 'react'
import { Link } from 'react-router-dom'
import { BiStar, BiDownload, BiChevronRight, BiCheck, BiMenu, BiArrowBack } from 'react-icons/bi'

export default function PlayStorePage() {
  const openPlayStore = () => {
    window.open('https://play.google.com/store/apps/details?id=com.kotak.mobank', '_blank')
  }

  const screenshots = [
    'https://tse4.mm.bing.net/th/id/OIP.Y11wY73asVYCqJXSh-nFrAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
    'https://tse4.mm.bing.net/th/id/OIP.Y11wY73asVYCqJXSh-nFrAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
    'https://tse4.mm.bing.net/th/id/OIP.Y11wY73asVYCqJXSh-nFrAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
    'https://tse4.mm.bing.net/th/id/OIP.Y11wY73asVYCqJXSh-nFrAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3'
  ]

  const reviews = [
    { name: 'Raj Kumar', rating: 5, date: '2 days ago', text: 'Very easy to use and helpful app. Highly recommended!', helpful: 223 },
    { name: 'Priya Sharma', rating: 4, date: '1 week ago', text: 'Great app for banking services. Quick and simple.', helpful: 156 },
    { name: 'Amit Patel', rating: 5, date: '2 weeks ago', text: 'Best app for managing all bank related tasks. Love it!', helpful: 89 }
  ]

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-20 md:pb-4">
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-[960px] mx-auto px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-9 md:h-9" fill="none">
              <path d="M0 0h40v40H0V0z" fill="white"/>
              <path d="M19.7 19.2L4.3 35.3c0 0 0 0 0 0 .5 1.7 2.1 3 4 3 .8 0 1.5-.2 2.1-.6l0 0l17.4-9.9L19.7 19.2z" fill="#EA4335"/>
              <path d="M35.3 16.4L35.3 16.4l-7.5-4.3-8.4 7.4 8.5 8.3 7.5-4.2c1.3-.7 2.2-2.1 2.2-3.6 .1 2.1-.8 3.5-2.1 4.2z" fill="#FBBC04"/>
              <path d="M4.3 4.7C4.2 5 4.2 5.4 4.2 5.8v28.5c0 .4 0 .7.1 1.1l16-15.7L4.3 4.7z" fill="#4285F4"/>
              <path d="M19.8 20l8-7.9L10.5 2.3c-.6-.4-1.4-.6-2.2-.6-1.9 0-3.6 1.3-4 3 0 0 0 0 0 0L19.8 20z" fill="#34A853"/>
            </svg>
            <span className="text-xs md:text-sm text-[#5f6368]">Google Play</span>
          </div>
          <input 
            type="text" 
            placeholder="Search apps & games"
            className="hidden md:block w-72 bg-[#f1f3f4] rounded-full px-4 py-2 text-sm border border-transparent hover:bg-white hover:border-gray-200 focus:bg-white focus:border-blue-500 focus:outline-none transition"
          />
          <div className="flex items-center gap-2 md:gap-3">
            <button className="md:hidden w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
              <img src="https://lh3.googleusercontent.com/ogw/AGvuzYZt1sUF-0xRjGmL2tC9-3sYRhvFjJJR3V21E1Y=s32" className="w-7 h-7 md:w-8 md:h-8 rounded-full" alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[960px] mx-auto px-3 md:px-4 py-4 md:py-6">
        <Link to="/" className="flex items-center gap-1 text-sm text-gray-500 mb-3 hover:text-gray-700">
          <BiArrowBack className="text-lg" />
          <span>Back</span>
        </Link>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl md:rounded-2xl overflow-hidden shadow-lg flex-shrink-0 mx-auto md:mx-0 bg-white">
            <img 
              src="https://tse4.mm.bing.net/th/id/OIP.Y11wY73asVYCqJXSh-nFrAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" 
              alt="Kotak Bank" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-xl md:text-2xl font-normal text-[#202124] mb-1">Kotak - 811 & Mobile Banking</h1>
            <p className="text-sm text-[#1e88e5] mb-2 hover:underline cursor-pointer">Kotak Mahindra Bank</p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
              <span>This app is compatible with your device</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
              <button 
                onClick={openPlayStore}
                className="bg-[#1e88e5] text-white px-6 py-2 md:py-2.5 rounded-[4px] font-medium text-sm hover:bg-[#1976d2] transition w-full md:w-auto"
              >
                Install
              </button>
              <div className="flex items-center gap-1 text-xs md:text-sm text-gray-600">
                <BiStar className="text-yellow-400" />
                <span>4.2</span>
                <span className="text-gray-400 hidden sm:inline">•</span>
                <span className="text-gray-500 hidden sm:inline">125K reviews</span>
              </div>
              <div className="flex items-center gap-1 text-xs md:text-sm text-gray-600">
                <BiDownload />
                <span>10M+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-6 md:mb-8 overflow-x-auto pb-2 -mx-3 px-3 md:mx-0 md:px-0">
          {screenshots.map((img, i) => (
            <div key={i} className="w-[140px] h-[240px] md:w-[180px] md:h-[320px] rounded-lg md:rounded-xl overflow-hidden shadow-md flex-shrink-0 bg-gray-200">
              <img src={img} alt="Screenshot" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg md:rounded-[8px] p-3 md:p-4 mb-4 md:mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h2 className="text-base md:text-lg text-[#202124] font-normal">About this app</h2>
            <BiChevronRight className="text-gray-400" />
          </div>
          <p className="text-xs md:text-sm text-[#5f6368] mb-3 md:mb-4 leading-relaxed">
            Kotak - 811 & Mobile Banking App is designed to take your banking experience to the next level. 
            Experience seamless banking with our user-friendly interface. Manage your accounts, transfer funds, 
            pay bills, and more - all from the comfort of your home.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2.5 py-1 md:px-3 md:py-1.5 bg-[#e8f0fe] rounded-[12px] md:rounded-[16px] text-xs text-[#1e88e5]">Finance</span>
            <span className="px-2.5 py-1 md:px-3 md:py-1.5 bg-[#e8f0fe] rounded-[12px] md:rounded-[16px] text-xs text-[#1e88e5]">Banking</span>
          </div>
        </div>

        <div className="bg-white rounded-lg md:rounded-[8px] p-3 md:p-4 mb-4 md:mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h2 className="text-base md:text-lg text-[#202124] font-normal">Ratings & reviews</h2>
            <BiChevronRight className="text-gray-400" />
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mb-4 md:mb-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-normal text-[#202124] mb-1">4.2</div>
              <div className="flex gap-0.5 mb-1 justify-center">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-3.5 md:w-4 h-3.5 md:h-4" viewBox="0 0 24 24" fill={i <= 4 ? "#FBBC04" : "#e0e0e0"}>
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              <div className="text-xs text-gray-500">125K reviews</div>
            </div>
            <div className="flex-1 w-full sm:max-w-[200px]">
              {[5,4,3,2,1].map(star => (
                <div key={star} className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-gray-500 w-3">{star}</span>
                  <div className="flex-1 h-1.5 md:h-2 bg-[#e8f0fe] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#1e88e5] rounded-full" 
                      style={{ width: star === 5 ? '60%' : star === 4 ? '25%' : '15%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3 md:space-y-4">
            {reviews.map((review, i) => (
              <div key={i} className="border-b border-gray-100 pb-3 md:pb-4 last:border-0">
                <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                  <div className="w-8 md:w-10 h-8 md:h-10 bg-[#6a4b9c] rounded-full flex items-center justify-center text-white text-xs md:text-sm font-medium">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-xs md:text-sm text-[#202124]">{review.name}</div>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(s => (
                        <svg key={s} className="w-3 md:w-3.5 h-3 md:h-3.5" viewBox="0 0 24 24" fill={s <= review.rating ? "#FBBC04" : "#e0e0e0"}>
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                      <span className="text-xs text-gray-500 ml-1">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-[#5f6368] ml-10 md:ml-13">{review.text}</p>
                <div className="text-xs text-gray-500 mt-1 ml-10 md:ml-13">{review.helpful} people found this helpful</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg md:rounded-[8px] p-3 md:p-4 mb-4 md:mb-6 shadow-sm">
          <h2 className="text-base md:text-lg text-[#202124] font-normal mb-3 md:mb-4">App info</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:gap-y-4 text-xs md:text-sm">
            <div>
              <span className="text-[#5f6368]">Updated</span>
              <p className="text-[#202124]">March 26, 2026</p>
            </div>
            <div>
              <span className="text-[#5f6368]">Size</span>
              <p className="text-[#202124]">45 MB</p>
            </div>
            <div>
              <span className="text-[#5f6368]">Installs</span>
              <p className="text-[#1e88e5]">10M+</p>
            </div>
            <div>
              <span className="text-[#5f6368]">Version</span>
              <p className="text-[#202124]">3.5.2</p>
            </div>
            <div className="col-span-2">
              <span className="text-[#5f6368]">Developer</span>
              <p className="text-[#1e88e5] hover:underline cursor-pointer">Kotak Mahindra Bank</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg md:rounded-[8px] p-3 md:p-4 shadow-sm">
          <h2 className="text-base md:text-lg text-[#202124] font-normal mb-3 md:mb-4">Data safety</h2>
          <p className="text-xs md:text-sm text-[#5f6368] mb-3 md:mb-4">
            Safety starts with understanding how developers collect and share your data.
          </p>
          <div className="space-y-2 md:space-y-3">
            <div className="flex items-start gap-2 md:gap-3">
              <BiCheck className="text-green-500 mt-0.5 flex-shrink-0" />
              <div className="text-xs md:text-sm text-[#202124]">
                <span className="font-medium">Data isn't encrypted</span>
              </div>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <BiCheck className="text-green-500 mt-0.5 flex-shrink-0" />
              <div className="text-xs md:text-sm text-[#202124]">
                <span className="font-medium">You can request that data be deleted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 md:p-4 shadow-lg z-40">
        <div className="max-w-[960px] mx-auto flex items-center gap-3 md:gap-4">
          <button 
            onClick={openPlayStore}
            className="bg-[#1e88e5] text-white px-4 md:px-8 py-2.5 md:py-3 rounded-[4px] font-medium text-sm hover:bg-[#1976d2] transition flex items-center justify-center gap-2 flex-1 md:flex-none"
          >
            <BiDownload className="text-lg" />
            <span className="md:hidden">Install</span>
            <span className="hidden md:inline">Install</span>
          </button>
          <div className="text-xs md:text-sm text-gray-600 hidden sm:block">
            <span className="font-medium text-[#202124]">Free</span>
            <span className="text-gray-400"> • Contains ads</span>
          </div>
        </div>
      </div>
    </div>
  )
}
