import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

import Ada from './assets/Ada.svg';
import MenuIcon from './assets/ada-menu.svg';
import Image from './assets/ada.png';
import Layer from './assets/layer.png';
import Open from './assets/open.png';
import Project from './assets/project.png';
import Arrow from './assets/arrow.svg'
import Babyl from './assets/babyl.png'
import Pointer from './assets/pointer.png'
import Food from './assets/food.png'
import Climate from './assets/climate.png'
import Music from './assets/music.png'
import ArrowLeft from './assets/left.svg'
import Linkedin from './assets/linkedin.svg'
import X from './assets/x.svg'
import Dribbble from './assets/dribbble.svg'

const projects = [
  {
    image: Babyl,
    name: "Babyl Application"
  },
  {
    image: Food,
    name: "Food Dash"
  },
  {
    image: Music,
    name: "Music Player"
  },
  {
    image: Climate,
    name: "Climate modified"
  },
  {
    image: Babyl,
    name: "Dall Mostigon"
  },
  {
    image: Food,
    name: "Pen Testing"
  },
  {
    image: Music,
    name: "Local Simple"
  },
  {
    image: Climate,
    name: "Cloudinary"
  },
];


function App() {
  const [data, setData] = useState([]);
  const [next, setNext] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getFourData();
  }, []);
  
  const getFourData = () => {
    const newArray = [];
    for (let i = 0; i < projects.length; i++) {
      if (i < 4) {
        newArray.push(projects[i]);
      }
    }
    setData(newArray);
  }

  const changeProjects = () => {
    if(next){
      const newArray = [];
      for (let i = 0; i < projects.length; i++) {
        if (i >= 4) {
          newArray.push(projects[i]);
        }
      }
      setNext(!next);
      setData(newArray);
    }else{
      const newArray = [];
      for (let i = 0; i < projects.length; i++) {
        if (i < 4) {
          newArray.push(projects[i]);
        }
      }
      setNext(!next);
      setData(newArray);
    }
  }

  return (
    <div className='w-[100%] min-h-screen bg-[#CA847A] font-ribeye'>
      {/* Navbar */}
      <div className='flex flex-row justify-between items-center mx-[20px] 2xl:mx-[70px] pt-5'>
        <img src={Ada} className='w-[73px] h-[70px]' alt='ADA logo' />
        <div className='2xl:flex flex-row gap-20 text-2xl hidden'>
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Contacts</a>
        </div>
        <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="hidden 2xl:block">
            <img src={MenuIcon} alt="Menu" />
          </Menu.Button>
          <button onClick={() => {
            setOpen(true)
          }} className="block 2xl:hidden">
            <img src={MenuIcon} alt="Menu" />
          </button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center justify-between rounded-md px-2 py-2 text-sm`}
                  >
                    <span className='mt-1'>Download CV</span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                    </svg>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
        {/* <button>
        </button> */}
      </div>

      <div className='flex flex-col 2xl:flex-row items-center 2xl:items-start justify-between'>
        <div className='flex flex-col mx-[70px] mt-[150px]'>
          <span className='text-2xl text-center 2xl:text-start'>Hi There?</span>
          <span className='sm:w-[642px] text-[45px] mt-3 text-center 2xl:text-start'>ALINE NIYOMUBEYI: I AM A <span className='text-[#3E4455]'>DESIGNER</span>. Welcome to my world of creativity! ✨</span>
          <span className='text-[24px] opacity-[70%] sm:w-[478px] mt-3 text-center 2xl:text-start'>Crafting beauty in every pixel, on a mission to transform ideas into visual poetry.</span>
          <button className='bg-[#3E4455] text-white w-[336px] h-[81px] rounded-[20px] mt-[30px] text-2xl self-center 2xl:self-start'>View my work.</button>
        </div>
        <img src={Image} className='2xl:w-[700px] w-[500px] 2xl:h-[770px] z-[0] mt-[70px]' alt="Image-Ada" />
      </div>

      <div className='relative h-[700px] 2xl:h-[600px]'>
        <div className='w-full z-20 absolute sm:top-[15%] 2xl:px-[200px] px-10 flex flex-col sm:flex-row justify-between'>
          <div className='2xl:w-[546px] w-full flex flex-col gap-3 items-center justify-center text-center mt-5'>
            <img src={Project} alt="Project" />
            <h1 className='text-[32px]'>Creative Designs</h1>
            <p className='text-black opacity-[70%] text-2xl'>I create innovative and visually captivating solutions that seamlessly blend form and function.</p>
          </div>
          <div className='2xl:w-[546px] w-full flex flex-col gap-3 items-center justify-center text-center'>
            <img src={Open} alt="Project" />
            <h1 className='text-[32px]'>Applications</h1>
            <p className='text-black opacity-[70%] text-2xl'>I specialize in creating responsive designs for both mobile and website applications. ensuring best user experience</p>
          </div>
        </div>
        <img src={Layer} className='absolute top-[-150px] h-[600px] left-0 w-full z-10' alt="Layer" />
      </div>

      <div className='bg-[#3E4455] min-h-[1921px] w-full opacity-[100%] 2xl:px-[70px] px-[20px] py-[70px]'>
        <h1 className='text-white text-[32px]'>Look at my projects</h1>
        <button className='2xl:w-[336px] w-[90%] relative h-[81px] flex flex-row justify-between items-center px-10 mt-10 rounded-[20px] border-[1px] border-[#CA847A] text-white text-2xl'>
          <span>Mobile Apps</span>
          <img src={Arrow} className='' alt='Dropdown' />
        </button>
        <div className='mt-[50px] 2xl:w-[85%] w-[100%] mx-auto items-center justify-center flex flex-row flex-wrap gap-10'>
          {data.map((item, idx) => <div key={idx} className={`bg-[#CA847A] 2xl:w-[562px] w-[100%] self-center h-[614px] rounded-[10px] flex flex-col justify-between`}>
              <div className='h-[466px] w-full flex items-center justify-center'>
                <img src={item.image} className='' alt="Project" />
              </div>
              <div className='bg-[#3E4455] border-[1px] border-[#CA847A] w-full h-[148px] rounded-[10px] flex flex-row justify-between items-center 2xl:px-12 px-[20px]'>
                <div className='flex flex-col gap-5 text-[#CA847A]'>
                  <span className='2xl:text-[32px] text-[25px]'>{item.name}</span>
                  <span className='2xl:text-2xl text-[20px]'>Full app</span>
                </div>
                <img src={Pointer} alt="Pointer" className='w-[40px]' />
              </div>
            </div>)}
        </div>
        <img src={ArrowLeft} onClick={changeProjects} alt="Arrow-left" className={`mt-[90px] mx-auto cursor-pointer ${!next && 'rotate-180'}`} />
      </div>
      <div className='w-full min-h-[480px] pb-5 bg-[#CA847A] 2xl:px-[200px] px-[30px] relative'>
        <div className='flex flex-col 2xl:pb-0 pb-20 2xl:flex-row justify-between mt-[80px]'>
          <h1 className='text-[32px]'>About me</h1>
          <p className='2xl:text-2xl text-[20px] 2xl:w-[858px] w-[90%] mt-10 2xl:mt-0'>Greetings! I'm a passionate UI/UX designer with a robust background in information technology. With a keen eye for aesthetics and a deep understanding of user experience principles, I specialize in crafting visually appealing and intuitive digital solutions. My journey in IT has equipped me with a strong foundation in technology, allowing me to seamlessly blend creativity with functionality. From wireframes to polished interfaces, I leverage my expertise to enhance user interactions and create designs that resonate. Let's embark on a journey where innovation meets seamless user experiences!</p>
        </div>
        <div className='flex flex-row gap-5 absolute 2xl:bottom-[80px] bottom-5 right-5 2xl:right-[100px]'>
          <img src={Linkedin} alt="Linkedin" />
          <img src={Dribbble} alt="Dribbble" />
          <img src={X} alt="X" />
        </div>
      </div>
      <div className='w-full min-h-[1004px] bg-[#3E4455] 2xl:px-[70px] px-[20px] py-[60px]'>
        <div className='w-full h-[950px]'>
          <div className='flex flex-col w-full '>
            <span className='text-[35px] text-white'>Interested in Collaboration?</span><span className='text-[24px] text-white mt-[-10px]'>Let me Know</span>
          </div>
          <div className='flex flex-col items-center gap-5 2xl:w-[805px] w-[100%] mx-auto mt-[110px]'>
            <div className='2xl:w-[805px] w-[100%] gap-5 flex 2xl:flex-row flex-col justify-between'>
              <input type="text" className='text-[#CA847A] text-[24px] 2xl:w-[392px] w-full border-[1px] border-[#CA847A] rounded-[20px] bg-[#3E4455] h-[97px] p-10' placeholder='Full Name' />
              <input type="text" className='text-[#CA847A] text-[24px] 2xl:w-[392px] w-full border-[1px] border-[#CA847A] rounded-[20px] bg-[#3E4455] h-[97px] p-10' placeholder='Email Address' />
            </div>
            <input type="text" className='text-[#CA847A] text-[24px] 2xl:w-[805px] w-[100%] border-[1px] border-[#CA847A] rounded-[20px] bg-[#3E4455] h-[97px] p-10' placeholder='Subject' />
            <textarea className='text-[#CA847A] text-[24px] 2xl:w-[805px] w-[100%] border-[1px] border-[#CA847A] rounded-[20px] bg-[#3E4455] h-[223px] p-10' placeholder='Type your message' ></textarea>
            <button className='2xl:w-[525px] w-[90%] h-[81px] bg-[#CA8A7A] text-[24px] mt-[60px] rounded-[20px] self-center'>Partner with me</button>
          </div>
        </div>
      </div>
      <div className='w-full h-[114px] bg-[#CA847A] flex items-center justify-center'>
          <h1 className='text-[20px] text-center'>© 2024 Aline Niyomubyeyi. All Rights Reserved.</h1>
      </div>
     {open && <div className='fixed bg-[#CA847A] w-full h-screen top-0 left-0 px-5 z-[100] flex flex-col justify-between'>
        <img src={Ada} className='w-[73px] h-[70px]' alt='ADA logo' />
        <div className='flex flex-col gap-5 underline'>
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Contacts</a>
        </div>
        <button className='w-[90%] border-[1px] border-[#000] rounded-[20px] h-[50px] flex flex-row gap-[20px] items-center justify-center mb-[100px]'>
          <span>Download CV</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
          </svg>
        </button>
        <button onClick={() => {
          setOpen(false);
        }} className='absolute top-5 right-5'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>}
    </div>
  )
}

export default App
