import { useState } from "react";
// import Resume from "../../public/Resume/EsakkipandiResumeupdated.pdf"

const Header = () => {
    const [isClickedContent,setIsClickedContent] = useState("Home")
    const HeaderContents = ["Home","About","Service","Resume","Project","Contact"]

    const handleNavigate=(to:string)=>{
        setIsClickedContent(to)
        if(to === "Service" || to === "About" || to === "Project" || to === "Contact"){
            if (to === "Service" || to === "About" || to === "Project" || to === "Contact" ) {
                const section = document.getElementById(to);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }
        }
        if (to === "Resume") {
            const resumeUrl = "/Resume/EsakkipandiResumeupdated.pdf"; // Path in public folder
            const link = document.createElement("a");
            link.href = resumeUrl;
            link.download = "Esakkipandi_Resume.pdf"; // Custom filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Set Home after 2 seconds
            setTimeout(()=>{
                setIsClickedContent('Home')
            },2000)
        }
    }
    
    return (
      <header className=" bg-transparent hidden sm:flex justify-center items-center text-white p-3">
        <div className=" bg-gray-900  lg:w-[60%] rounded-full px-2 flex justify-between items-center  h-[60px]">
        {HeaderContents.slice(0,3).map((Content,index)=>(
            <button onClick={()=> handleNavigate(Content)} className={` ${isClickedContent === Content && "bg-orange-500"} rounded-full  py-2 px-6`} key={index}>
                <h1 className=" text-white">{Content}</h1>
            </button>
        ))}
           <button  className={` bg-orange-600 px-2 py-1 rounded-full `} >
                <h1 className=" text-white text-2xl font-semibold">EP</h1>
            </button>
        {HeaderContents.slice(3).map((Content,index)=>(
            <button onClick={()=> handleNavigate(Content)} className={` ${isClickedContent === Content && "bg-orange-500"} rounded-full  py-2 px-6`} key={index}>
                <h1 className=" text-white">{Content}</h1>
            </button>
        ))}
        </div>
      </header>
    );
  };
  
  export default Header;
  