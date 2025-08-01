
// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const Nav = () => {
// //   const navigate = useNavigate();
// //   const [isLoggedInUser, setIsLoggedInUser] = useState(null);

// //   useEffect(() => {
// //     setIsLoggedInUser(localStorage.getItem("emailData"));
// //   }, []);

// //   const onLogout = () => {
// //     localStorage.removeItem("emailData");
// //     window.location.reload();
// //   };

// //   return (
// //     <div className="flex flex-col w-[90%] mx-auto pt-[1.5rem]">
// //       <div className="flex justify-between items-center">
// //         <div className="flex gap-[1rem] items-center">
// //           <img
// //             src="/currency.png"
// //             alt="Logo"
// //             className="w-[2.5rem] h-[2.5rem] cursor-pointer"
// //             onClick={() => navigate("/")}
// //           />
// //           <h1
// //             className="text-[2.5rem] font-semibold cursor-pointer"
// //             onClick={() => navigate("/")}
// //           >
// //             QuickShip
// //           </h1>
// //         </div>
// //         <div className="flex gap-[2rem] items-center">
// //           <p
// //             className="text-[1rem] cursor-pointer hover:text-[#2874fc] font-medium"
// //             onClick={() => navigate("/shipments")}
// //           >
// //             Shipments
// //           </p>
// //           <p
// //             className="text-[1rem] cursor-pointer hover:text-[#2874fc] font-medium"
// //             onClick={() => navigate("/tracking")}
// //           >
// //             Tracking & Support
// //           </p>
// //           <p
// //             className="text-[1rem] cursor-pointer hover:text-[#2874fc] font-medium"
// //             onClick={() => navigate("/AboutUs")}
// //           >
// //             About-Us
// //           </p>
// //         </div>

// //         {isLoggedInUser ? (
// //           <div
// //             className="bg-[#2874fc] rounded-lg px-[1.5rem] py-[0.5rem] cursor-pointer text-white text-[0.9rem] font-semibold"
// //             onClick={onLogout}
// //           >
// //             Logout
// //           </div>
// //         ) : (
// //           <div className="flex gap-[1rem] items-center">
// //             <p
// //               className="text-[1rem] cursor-pointer hover:text-[#2874fc] font-medium"
// //               onClick={() => navigate("/login")}
// //             >
// //               Login
// //             </p>
// //             <div
// //               className="bg-[#2874fc] rounded-lg px-[1.5rem] py-[0.5rem] cursor-pointer text-white text-[0.9rem] font-semibold"
// //               onClick={() => navigate("/signup")}
// //             >
// //               Get Started
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //       <div className="w-full h-[0.2rem] bg-gray-300 mt-[1rem]" />
// //     </div>
// //   );
// // };

// // export default Nav;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Nav = () => {
//   const navigate = useNavigate();
//   const [isLoggedInUser, setIsLoggedInUser] = useState(null);

//   useEffect(() => {
//     setIsLoggedInUser(localStorage.getItem("emailData"));
//   }, []);

//   const onLogout = () => {
//     localStorage.removeItem("emailData");
//     window.location.reload();
//   };

//   return (
//     <div className="flex flex-col w-[90%] mx-auto pt-[1.5rem]">
//       <div className="flex justify-between items-center">
//         <div className="flex gap-[1rem] items-center">
//           <img
//             src="/currency.png" // Retaining the same logo
//             alt="KrishiConnect Logo"
//             className="w-[2.5rem] h-[2.5rem] cursor-pointer"
//             onClick={() => navigate("/")}
//           />
//           <h1
//             className="text-[2rem] font-bold cursor-pointer text-[#2874fc]"
//             onClick={() => navigate("/")}
//           >
//             KrishiConnect
//           </h1>
//         </div>
//         <div className="flex gap-[2rem] items-center">
//           <p
//             className="text-[1rem] cursor-pointer hover:text-[#2874fc] font-medium"
//             onClick={() => navigate("/")}
//           >
//             Home
//           </p>
//           <p
//             className="text-[1rem] cursor-pointer hover:text-[#2874fc] font-medium"
//             onClick={() => navigate("/marketplace")}
//           >
//             Marketplace
//           </p>
//           <p
//             className="text-[1rem] cursor-pointer hover:text-[#2874fc] font-medium"
//             onClick={() => navigate("/aboutus")}
//           >
//             About Us
//           </p>
//           <p
//             className="text-[1rem] cursor-pointer hover:text-[#2874fc] font-medium"
//             onClick={() => navigate("/contactUs")}
//           >
//             Contact Us
//           </p>
//         </div>

//         {isLoggedInUser ? (
//           <div
//             className="bg-[#2874fc] rounded-lg px-[1.5rem] py-[0.5rem] cursor-pointer text-white text-[0.9rem] font-semibold"
//             onClick={onLogout}
//           >
//             Logout
//           </div>
//         ) : (
//           <div className="flex gap-[1rem] items-center">
//             <p
//               className="text-[1rem] cursor-pointer hover:text-[#2874fc] font-medium"
//               onClick={() => navigate("/login")}
//             >
//               Logout
//             </p>
//             <div
//               className="bg-[#2874fc] rounded-lg px-[1.5rem] py-[0.5rem] cursor-pointer text-white text-[0.9rem] font-semibold"
//               onClick={() => navigate("/signup")}
//             >
//               Get Started
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="w-full h-[0.2rem] bg-gray-300 mt-[1rem]"/>
//     </div>
//   );
// };

// export default Nav;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger and close icons

const Nav = () => {
  const navigate = useNavigate();
  const [isLoggedInUser, setIsLoggedInUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoggedInUser(localStorage.getItem("emailData"));
  }, []);

  const onLogout = () => {
    localStorage.removeItem("emailData");
    window.location.reload();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col w-[90%] mx-auto pt-[1.5rem]">
      <div className="flex justify-between items-center">
        <div className="flex gap-[1rem] items-center">
          <img
            src="/currency.png" // Retaining the same logo
            alt="KrishiConnect Logo"
            className="w-[2.5rem] h-[2.5rem] cursor-pointer"
            onClick={() => navigate("/")}
          />
          <h1
            className="text-[2rem] font-bold cursor-pointer text-[#219653]"
            onClick={() => navigate("/")}
          >
            KrishiConnect
          </h1>
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="text-[2rem] cursor-pointer" />
          ) : (
            <FaBars className="text-[2rem] cursor-pointer" />
          )}
        </div>
        <div className={`hidden md:flex gap-[2rem] items-center`}>
          <p
            className="text-[1rem] cursor-pointer hover:text-[#219653] font-medium"
            onClick={() => navigate("/")}
          >
            Home
          </p>
          <p
            className="text-[1rem] cursor-pointer hover:text-[#219653] font-medium"
            onClick={() => navigate("/marketplace")}
          >
            Marketplace
          </p>
          <p
            className="text-[1rem] cursor-pointer hover:text-[#219653] font-medium"
            onClick={() => navigate("/aboutus")}
          >
            About Us
          </p>
          <p
            className="text-[1rem] cursor-pointer hover:text-[#219653] font-medium"
            onClick={() => navigate("/contactUs")}
          >
            Contact Us
          </p>
        </div>

        {isLoggedInUser ? (
          <div
            className="hidden md:block bg-gradient-to-r from-[#219653] to-[#6fcf97] rounded-lg px-[1.5rem] py-[0.5rem] cursor-pointer text-white text-[0.9rem] font-semibold"
            onClick={onLogout}
          >
            Logout
          </div>
        ) : (
          <div className="hidden md:flex gap-[1rem] items-center">
            <p
              className="text-[1rem] cursor-pointer hover:text-[#219653] font-medium"
              onClick={() => navigate("/login")}
            >
              Login
            </p>
            <div
              className="bg-gradient-to-r from-[#219653] to-[#6fcf97] rounded-lg px-[1.5rem] py-[0.5rem] cursor-pointer text-white text-[0.9rem] font-semibold"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start mt-[1rem] gap-[1rem]">
          <p
            className="text-[1rem] cursor-pointer hover:text-[#219653] font-medium"
            onClick={() => {
              navigate("/");
              toggleMenu();
            }}
          >
            Home
          </p>
          <p
            className="text-[1rem] cursor-pointer hover:text-[#219653] font-medium"
            onClick={() => {
              navigate("/marketplace");
              toggleMenu();
            }}
          >
            Marketplace
          </p>
          <p
            className="text-[1rem] cursor-pointer hover:text-[#219653] font-medium"
            onClick={() => {
              navigate("/aboutus");
              toggleMenu();
            }}
          >
            About Us
          </p>
          <p
            className="text-[1rem] cursor-pointer hover:text-[#219653] font-medium"
            onClick={() => {
              navigate("/contactUs");
              toggleMenu();
            }}
          >
            Contact Us
          </p>
          {isLoggedInUser ? (
            <div
              className="bg-gradient-to-r from-[#219653] to-[#6fcf97] rounded-lg px-[1.5rem] py-[0.5rem] cursor-pointer text-white text-[0.9rem] font-semibold"
              onClick={() => {
                onLogout();
                toggleMenu();
              }}
            >
              Logout
            </div>
          ) : (
            <div className="flex flex-col gap-[1rem]">
              <p
                className="text-[1rem] cursor-pointer hover:text-[#219653] font-medium"
                onClick={() => {
                  navigate("/login");
                  toggleMenu();
                }}
              >
                Login
              </p>
              <div
                className="bg-gradient-to-r from-[#219653] to-[#6fcf97] rounded-lg px-[1.5rem] py-[0.5rem] cursor-pointer text-white text-[0.9rem] font-semibold"
                onClick={() => {
                  navigate("/signup");
                  toggleMenu();
                }}
              >
                Get Started
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Nav;
