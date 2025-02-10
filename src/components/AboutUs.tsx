import Image from 'next/image';
import AboutImg from '../../public/About/Development-cuate.svg'

export default function AboutUs() {
    return (
      <div id="About" className="  flex-1  mt-10 sm:gap-0 sm:flex justify-between h-full items-center w-[100%] bg-[#F0A04B] rounded-2xl px-8">
        <Image src={AboutImg} className="" alt=""  />
        <div className=' flex-1 items-center gap-4 h-full min-h-[340px]'>
            <h1 className=' text-white font-semibold flex justify-center sm:justify-start items-center  text-2xl'>About</h1>
            <p className="text-white text-base sm:text-lg leading-relaxed text-justify max-w-lg sm:max-w-max">
            I am EsakkiPandi, a MERN Stack Developer. I have completed my Undergraduate and Postgraduate degrees in both BCA and MCA. 
            I specialize in building scalable web applications, designing interactive user interfaces, and optimizing backend performance. 
            With a strong passion for coding, I continuously explore new technologies to enhance my development skills. 
            My expertise includes working with modern JavaScript frameworks, managing databases efficiently, and implementing secure authentication systems.
          </p>
            </div>
      </div>
    );
  }
  