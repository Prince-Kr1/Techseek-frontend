
import Companies from '@/LandingPage.tsx/Companies'
import DreamJob from '@/LandingPage.tsx/DreamJob'
import JobCategory from '@/LandingPage.tsx/JobCategory'
import ProcessFlow from '@/LandingPage.tsx/ProcessFlow'
import Testimonials from '@/LandingPage.tsx/Testimonials'


const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-berry-50">
        
        <DreamJob/>
        <Companies/>
        <JobCategory/>
        <ProcessFlow/>
        <Testimonials/>
        
    </div>
  )
}

export default HomePage