import Marquee from "react-fast-marquee";
import { companies } from "../Data/Data";


const Companies = () => {
  return (
    <div className="mt-20">
        <div className="text-4xl font-semibold text-center">
            Trusted by <span className="text-berry-900">1000+</span> Companies
        </div>

        <Marquee pauseOnHover={true} className="mt-5">
            {
                companies.map((company, index) => (
                    <div 
                        key={index} 
                        className="mx-5 my-7 rounded-xl  hover:bg-berry-100"
                    >
                        <img 
                            className="w-30 h-14 p-2 object-contain"
                            src={`/Companies/${company}.png`} 
                            alt={company} 
                        />
                    </div>
                ))
            }
        </Marquee>
    </div>
  )
}

export default Companies