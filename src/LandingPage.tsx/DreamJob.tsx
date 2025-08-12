import SearchBar from "./SearchBar"
import landing1 from "../assets/landing1.png";

const DreamJob = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-20 py-8 lg:py-0">

        <div className="flex flex-col w-full lg:w-[50%] mb-8 lg:mb-0">
            
            <div className="text-3xl sm:text-4xl lg:text-6xl mb-5 leading-tight font-bold [&>span]:text-berry-900 text-center lg:text-left">
                Find your <span>next tech oppurtunity</span> with us
            </div>
           
            <div className="text-base sm:text-lg mb-8 lg:mb-15 w-full lg:w-[90%] text-chess-600 text-center lg:text-left">
                Discover the latest job opportunities in development, design, data science, and more. 
            </div>

            <div className="w-full lg:w-[95%]">
                <SearchBar/>
            </div>
        </div>

        <div className="flex items-center justify-center w-full lg:w-[50%]">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-[40rem]">
            <img src={landing1} alt="landing image" className="w-full h-auto" />
            </div> 
        </div>

    </div>
  )
}

export default DreamJob