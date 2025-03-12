import Image from 'next/image';
import AboutImg from '../../public/About/Development-cuate.svg'

export default function AboutUs() {
    return (
      <div id="About" className="  flex-1  mt-10 lg:gap-0 lg:flex justify-between sm:justify-center h-full items-center w-[100%] bg-[#F0A04B] rounded-2xl px-8">
        <div>
        <Image src={AboutImg} className="" alt=""  />
        </div>
        <div className=' flex-1 items-center gap-4 h-full md:pb-5 lg:pb-0  lg:min-h-[340px]'>
            <h1 className=' text-white font-semibold flex justify-center sm:justify-start items-center  text-2xl'>About</h1>
            <p className="text-white text-base  md:text-lg leading-relaxed text-justify max-w-lg md:max-w-max">
            I am EsakkiPandi, a MERN Stack Developer. I have completed my Undergraduate and Postgraduate degrees in both BCA and MCA. 
            I specialize in building scalable web applications, designing interactive user interfaces, and optimizing backend performance. 
            With a strong passion for coding, I continuously explore new technologies to enhance my development skills. 
            My expertise includes working with modern JavaScript frameworks, managing databases efficiently, and implementing secure authentication systems.
          </p>
            </div>
      </div>
    );
  }
  