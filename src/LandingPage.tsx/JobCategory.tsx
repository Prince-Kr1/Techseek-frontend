import { jobsCategory } from "../Data/Data";


const JobCategory = () => {
  return (
    <div className="mt-20">
        <div className="text-4xl font-semibold text-center">
            Browse <span className="text-berry-900">Job</span> Category
        </div>

        <div className="text-center w-1/2 mx-auto mt-5 text-lg text-chess-600">
            Explore diverse job opportunities tailored to your skills. Start your career journey today!
        </div>

        <div className=" text-white px-6 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto ">
                {jobsCategory.map((job, index) => (
                    <div 
                        key={index} 
                        className="bg-berry-100 p-6 rounded-3xl border-none"
                    >
                        <div className="mb-4 cursor-pointer bg-berry-200 text-berry-700 w-12 h-12 rounded-2xl transform transition duration-300 hover:translate-x-3 hover:text-berry-950">
                            <div className="p-3">{job.icon}</div>
                        </div>
                        
                        <h3 className="font-semibold text-lg mb-2 text-chess-950 cursor-pointer hover:text-berry-800">{job.title}</h3>
                        <p className="text-sm text-chess-400">{job.desc}</p>
                        
                    </div>
                ))}
            </div>
            <p className="text-chess-600 text-center mt-10">and many more...</p>
        </div>

    </div>
  )
}

export default JobCategory