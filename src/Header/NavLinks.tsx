import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Post Jobs", url: "/post-jobs" },
    { name: "About Us", url: "/about" },
  ];

  const location = useLocation();

  return (
    <div className="flex gap-6 h-full items-center">
      {links.map((link, index) => {
        const isActive = location.pathname === link.url;

        return (
          <div key={index} className="relative group">
            <Link
              to={link.url}
              className={`transition duration-300 ease-in-out pb-1 
                ${isActive ? "text-berry-900 font-semibold" : "text-chess-900 hover:text-berry-700"}
              `}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-berry-900 
                  transition-all duration-300 
                  ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} 
                  origin-left`}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavLinks;
