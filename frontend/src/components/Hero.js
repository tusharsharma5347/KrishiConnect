
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const textVariants = {
//   initial: {
//     x: -500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
//   scrollButton: {
//     opacity: 0,
//     y: 10,
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//     },
//   },
//   // New variant for image animation
//   imageSlide: {
//     initial: {
//       x: "-100vw", // Start off-screen to the left
//     },
//     animate: {
//       x: 0,
//       transition: {
//         duration: 1, // Adjust the duration to your preference
//         ease: "easeInOut",
//       },
//     },
//   },
// };

// const Hero = () => {
//   const navigate = useNavigate();
//   const [isLoggedInUser, setIsLoggedInUser] = useState(null);

//   useEffect(() => {
//     setIsLoggedInUser(localStorage.getItem("emailData"));
//   }, []);

//   return (
//     <div className="flex justify-evenly my-[3rem]">
//       <div className="flex flex-col w-[30rem] gap-[1rem]">
//         <h1 className="madimi-one-regular text-[3.5rem] font-bold">
//           Courier and Parcel Services{" "}
//           <span className="text-[#2874fc]">Revoltionised</span>
//         </h1>
//         <div
//           className="bg-[#2874fc] hover:bg-[#2876fcf1] w-[18rem] flex justify-center cursor-pointer py-[1rem] text-[0.9rem] text-white font-bold"
//           onClick={() => navigate(isLoggedInUser ? "/p2p" : "/signup")}
//         >
//           Get Started
//           <div className="flex items-center ml-[0.5rem]">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="3.5"
//               stroke="currentColor"
//               className="w-4 h-4 font-bold hover:w-6 hover:h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
//               />
//             </svg>
//           </div>
//         </div>
//         <motion.div
//           className="scroll-img "
//           variants={textVariants}
//           animate="scrollButton"
//         >
//           <svg
//             className="scroll-img w-[3.5rem] cursor-pointer"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//           >
//             <path d="M8.01266 4.56502C8.75361 4.16876 9.5587 4 11.1411 4H12.8589C14.4413 4 15.2464 4.16876 15.9873 4.56502C16.6166 4.90155 17.0985 5.38342 17.435 6.01266C17.8312 6.75361 18 7.5587 18 9.14111V14.8589C18 16.4413 17.8312 17.2464 17.435 17.9873C17.0985 18.6166 16.6166 19.0985 15.9873 19.435C15.2464 19.8312 14.4413 20 12.8589 20H11.1411C9.5587 20 8.75361 19.8312 8.01266 19.435C7.38342 19.0985 6.90155 18.6166 6.56502 17.9873C6.16876 17.2464 6 16.4413 6 14.8589V9.14111C6 7.5587 6.16876 6.75361 6.56502 6.01266C6.90155 5.38342 7.38342 4.90155 8.01266 4.56502ZM12.8589 2H11.1411C9.12721 2 8.04724 2.27848 7.06946 2.8014C6.09168 3.32432 5.32432 4.09168 4.8014 5.06946C4.27848 6.04724 4 7.12721 4 9.14111V14.8589C4 16.8728 4.27848 17.9528 4.8014 18.9305C5.32432 19.9083 6.09168 20.6757 7.06946 21.1986C8.04724 21.7215 9.12721 22 11.1411 22H12.8589C14.8728 22 15.9528 21.7215 16.9305 21.1986C17.9083 20.6757 18.6757 19.9083 19.1986 18.9305C19.7215 17.9528 20 16.8728 20 14.8589V9.14111C20 7.12721 19.7215 6.04724 19.1986 5.06946C18.6757 4.09168 17.9083 3.32432 16.9305 2.8014C15.9528 2.27848 14.8728 2 12.8589 2ZM13 6H11V11H13V6ZM7.75781 13.758L12.0005 18.0006L16.2431 13.758L14.8289 12.3438L12.0005 15.1722L9.17203 12.3438L7.75781 13.758Z" />
//           </svg>
//         </motion.div>
//       </div>
//       <motion.div
//         className="flex items-center"
//         variants={textVariants.imageSlide}
//         initial="initial"
//         animate="animate"
//       >
//         <img
//           src="/720.jpg"
//           alt="heroImage"
//           className="w-full max-w-[35rem] h-auto"
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
  imageSlide: {
    initial: {
      x: "100vw",
    },
    animate: {
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  },
};

const Hero = () => {
  const navigate = useNavigate();
  const [isLoggedInUser, setIsLoggedInUser] = useState(null);

  useEffect(() => {
    setIsLoggedInUser(localStorage.getItem("emailData"));
  }, []);

  return (
    
    <div className="flex flex-col lg:flex-row justify-evenly my-[3rem] lg:my-[5rem]">
      <div id="google_translate_element"></div>
      <div className="flex flex-col w-full lg:w-[40%] gap-[1rem] text-center lg:text-left">
        <h1 className="text-[2.5rem] lg:text-[3.5rem] font-bold leading-tight">
          KrishiConnect - Your Gateway to{" "}
          <span className="text-agritech-green">Fair and Transparent</span> Farming
        </h1>
        <p className="text-[1.2rem] mb-[2rem]">
          कृषि कनेक्ट - किसानों और खरीदारों के बीच एक सीधा संपर्क
        </p>
        <div
          className="bg-agritech-gradient hover:from-green-600 hover:to-green-700 w-[18rem] flex justify-center mx-auto lg:mx-0 cursor-pointer py-[1rem] text-[1rem] text-white font-bold rounded-lg shadow-lg transition-all duration-300"
          onClick={() => navigate(isLoggedInUser ? "/marketplace" : "/signup")}
        >
          Get Started
          <div className="flex items-center ml-[0.5rem]">
            {/* Optionally add a leaf/farm icon here */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-4 h-4 font-bold">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>
        <motion.div
          className="scroll-img mx-auto lg:mx-0"
          variants={textVariants}
          animate="scrollButton"
        >
          <svg
            className="scroll-img w-[3.5rem] cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8.01266 4.56502C8.75361 4.16876 9.5587 4 11.1411 4H12.8589C14.4413 4 15.2464 4.16876 15.9873 4.56502C16.6166 4.90155 17.0985 5.38342 17.435 6.01266C17.8312 6.75361 18 7.5587 18 9.14111V14.8589C18 16.4413 17.8312 17.2464 17.435 17.9873C17.0985 18.6166 16.6166 19.0985 15.9873 19.435C15.2464 19.8312 14.4413 20 12.8589 20H11.1411C9.5587 20 8.75361 19.8312 8.01266 19.435C7.38342 19.0985 6.90155 18.6166 6.56502 17.9873C6.16876 17.2464 6 16.4413 6 14.8589V9.14111C6 7.5587 6.16876 6.75361 6.56502 6.01266C6.90155 5.38342 7.38342 4.90155 8.01266 4.56502ZM12.8589 2H11.1411C9.12721 2 8.04724 2.27848 7.06946 2.8014C6.09168 3.32432 5.32432 4.09168 4.8014 5.06946C4.27848 6.04724 4 7.12721 4 9.14111V14.8589C4 16.8728 4.27848 17.9528 4.8014 18.9305C5.32432 19.9083 6.09168 20.6757 7.06946 21.1986C8.04724 21.7215 9.12721 22 11.1411 22H12.8589C14.8728 22 15.9528 21.7215 16.9305 21.1986C17.9083 20.6757 18.6757 19.9083 19.1986 18.9305C19.7215 17.9528 20 16.8728 20 14.8589V9.14111C20 7.12721 19.7215 6.04724 19.1986 5.06946C18.6757 4.09168 17.9083 3.32432 16.9305 2.8014C15.9528 2.27848 14.8728 2 12.8589 2ZM13 6H11V11H13V6ZM7.75781 13.758L12.0005 18.0006L16.2431 13.758L14.8289 12.3438L12.0005 15.1722L9.17203 12.3438L7.75781 13.758Z" />
          </svg>
        </motion.div>
      </div>
      <motion.div
        className="flex items-center mt-[2rem] lg:mt-0"
        variants={textVariants.imageSlide}
        initial="initial"
        animate="animate"
      >
        <img
          src="/agriculture-hero.jpg" // Updated to a more relevant image for KrishiConnect
          alt="KrishiConnect Hero"
          className="w-full max-w-[35rem] mb- h-auto "
        />
      </motion.div>
    </div>
  );
};

export default Hero;

