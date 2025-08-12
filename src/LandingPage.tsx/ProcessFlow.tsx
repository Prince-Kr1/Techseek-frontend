import { processToApply } from "@/Data/Data";
import "../index.css"; 
import howItWorks from "../assets/howItWorks.png";

const ProcessFlow = () => {
  return (
    <div className="mt-20">
      {/* Heading */}
      <div className="text-4xl font-semibold text-center">
        How it <span className="text-berry-900">Works</span>
      </div>

      <div className="text-center w-1/2 mx-auto mt-5 text-lg text-chess-600">
        Effortlessly navigate through the process and land your dream job.
      </div>

      <div className="flex items-center justify-center min-h-[80vh] mt-5">
        {/* Image Section */}
        <div className="flex items-center justify-center w-[50%] ml-20">
          <div className="w-[40rem]">
            <img
              src={howItWorks}
              alt="landing image"
              className="w-full h-150"
            />
          </div>
        </div>

        {/* Steps Section */}
        <div className="w-[50%] space-y-3 ml-30">
          {processToApply.map((process, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-4   transition duration-300"
            >
              {/* Icon */}
              <div className="bg-berry-900 text-berry-50 rounded-full p-6 icon-hover hover:bg-berry-700 hover:shadow-lg transition duration-300">
                {process.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1 pl-3">
                <div className="font-semibold text-xl">{process.title}</div>
                <div className="text-chess-600">{process.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;