import { IconBell, IconSettings } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


import logo from '../assets/logo.png';
import pfp from '../assets/pfp.jpg';
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="sticky top-0 w-full h-20 bg-chess-50 text-chess-950 flex justify-between px-6 items-center 
                  font-['poppins'] shadow-md z-50 ">
       
      {/* Logo */}
      <div className="flex justify-center items-center gap-1 font-[600] text-3xl">
        <div>
          <img src={logo} alt="logo" className="w-10 h-full" />
        </div>
        <div>
          <h2 className="text-berry-900">techseek</h2>
        </div>
      </div>

      {/* Nav Links */}
      {NavLinks()}

      {/* SignUp */}
      <div className="flex gap-3">
          
          <div className="flex gap-2 justify-center items-center">
            <div>Morty</div>
            <div>
              <Avatar>
                <AvatarImage src= {pfp}/>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
        
        <div className="flex items-center gap-3 ">
          {/* Settings */}
          <button className="rounded-full border border-purple-600 p-1.5">
            <IconSettings stroke={1.5} className="h-5 w-5 text-chess-950" />
          </button>            

          {/* Notifications with dot */}
          <div className="relative inline-block">
            <button className="rounded-full border border-purple-600 p-1.5">
              <IconBell stroke={1.5} className="h-5 w-5 text-chess-950" />
            </button>
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-berry-500" />
          </div>
        </div>
         
      </div>
    </div>
  )
}

export default Header