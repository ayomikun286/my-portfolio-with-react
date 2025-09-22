"use client";
import React, { useEffect } from "react";
import "./home.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import NavbarMobile from "./NavbarMobile";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faTiktok } from "@fortawesome/free-brands-svg-icons/faTiktok";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { url } from "inspector";
import Card from "./Card";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons/faCss3Alt";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons/faSquareJs";
import { faWordpress } from "@fortawesome/free-brands-svg-icons/faWordpress";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "./form";

const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="text-[#d1cfcf]">
      <nav className=" hidden fixed top-0 w-screen left-0 md:flex justify-between items-center bg-[#001] px-15 py-5 bg-[#001] z-50">
        <div className="flex justify-cennter items-center space-x-10">
          <div className="">
            <h1 className="logo text-[#ff4500] text-3xl font-bold hover:scale-110 ease transition ease-in-out duration-500 ">
              Port<span className="text-xl mx-1">folio</span>
            </h1>
          </div>
          {/* <div className=" nav-link text-[#d1cfcf] flex justify-center items-center space-x-5  text-sm ">
            <p>HOME</p>
            <p>ABOUT ME</p>
            <p>PROJECTS</p>
            <p>SKILLS</p>
            <p>CONTACT ME</p>
          </div> */}
        </div>
        <a href="https://github.com/ayomikun286" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className=" text-5xl  shadow-2xl  rounded-full hover:text-[#ff4500] cursor-pointer transition ease-in-out duration-500 hover:scale-110 "
          />
        </a>
      </nav>
      <NavbarMobile />
      <div className="my-28 items-center md:my-26 flex flex-w py-5 flex-wrap-reverse md:flex-wrap justify-center gap-y-30 md:space-y-0 text-center md:text-left md:justify-between  md:px-20">
        <div className=" flex flex-col gap-y-8 h-100 md:h-auto md:gap-y-5 " data-aos="fade-up">
          <p className="text-2xl">Hello, my name is </p>
          <h1 className=" text-7xl md:text-7xl leading-21 ">
            {" "}
            Edegbai Ayomikun <br /> Oluwaseun
          </h1>
          <p className="text-2xl">
            I'm a <span className="text-[#ff4500]">FRONTEND DEVELOPER</span>
          </p>
          <div
            className="  flex gap-2 md:gap-5 text-orange-600 text-5xl md:text-4xl my-5 justify-center  md:justify-start "
            style={{ filter: "drop-shadow(2px 2px 6px orangered)" }}
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="hover:scale-120 transition duration-500 ease-in-out "
            />
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:scale-120 transition duration-500 ease-in-out "
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="hover:scale-120 transition duration-500 ease-in-out "
            />
            <FontAwesomeIcon
              icon={faTiktok}
              className="hover:scale-120 transition duration-500 ease-in-out "
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="hover:scale-120 transition duration-500 ease-in-out "
            />
          </div>
          <div>
            <a href="">
              <button className="px-10 md:px-7 rounded-full  shadow-lg shadow-orange-500   py-2 md:py-2 text-sm bg-orange-600 hover:translate-y-[-5px] transition duration-500 ease-in-out ">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="user border-1 h-100 w-100 rounded-full bg-[#001] flex justify-center items-end border-orange-600" data-aos="fade-in">
          <img src="images/user.png" alt="" className="max-w-90 min-50" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start md:px-20 h-auto items-center md:gap-20 mt-60 md:mt-30" data-aos="fade-up">
        <div className="border-1 border-orange-600 flex justify-center items-end rounded max-h-120 " style={{boxShadow:"0px 0px 20px orangered"}}  data-aos="fade-up">
          <img src="images/user.png" alt="" className="max-w-90 min-w-50" />
        </div>
        <div className="w-150 text-justify px-3 text-lg md:text-lg md:px-0 flex flex-col gap-5 "  data-aos="fade-up" >
          <h1 className=" text-center mt-12 mb-10 md:mt-0 md:text-start text-5xl"  >
            About <span className="text-orange-600">me</span>
          </h1>
          < p  data-aos="fade-up" className="mb-5 md:mb-0">
            Hi, I’m Ayomikun, a passionate Frontend Developer with a strong eye
            for design and usability. My journey began with WordPress, where I
            discovered how creativity and technology come together to build
            websites people love to use. Over time, I transitioned into modern
            frontend development, sharpening my skills with HTML, CSS,
            JavaScript, React, and Tailwind CSS.
          </p>

          <p data-aos="fade-up" className="mb-5 md:mb-0">
            I’m especially enthusiastic about React and responsive design,
            ensuring every project I work on looks and performs beautifully
            across devices. Recently, I’ve been exploring the possibilities of
            building apps and expanding my skills beyond the web.
          </p>
          <p data-aos="fade-up" className="mb-8 md:mb-0" >
            Outside of coding, I enjoy brainstorming creative solutions,
            experimenting with new tools, and staying curious about the
            ever-evolving world of web development.
          </p>
          < a href="" className=" flex justify-center md:justify-start" data-aos="fade-up"  >
            <button className="px-10 md:px-7 rounded-full  shadow-lg shadow-orange-500   py-2 md:py-2 text-sm bg-orange-600 hover:translate-y-[-5px] transition duration-500 ease-in-out ">
              Read More
            </button>
          </a>
        </div>
      </div>
      <div className="mt-30 flex justify-center items-center flex-wrap flex-col " data-aos="fade-up">
        <h1 className=" text-center mt-12 mb-10 md:mt-0 text-5xl">
          Latest < span className="text-orange-600">Projects</span>
        </h1>
        <div className="flex gap-x-5 gap-y-8 flex-wrap justify-center items-center">
          <Card data-aos="fade-up"
            detailsContent={
              <div className=" cardCont flex flex-col justify-end px-5 py-2 items-center gap-y-8 w-[100%] h-[100%]  ">
                <h1 className="text-3xl ">E-Commerce</h1>
                <div className="flex gap-x-5 justify-cennter items-cennter">
                  <a href="">
                    <button className="px-6 py-2 bg-orange-600 rounded-sm shadow-sm shadow-orange-600 hover:scale-105 transition duration-500 ease-in-out">
                      vist
                    </button>
                  </a>
                  <a href="">
                    <button className="px-6 py-2 bg-gray-600 rounded-sm shadow-sm shadow-gray-600 hover:scale-105 transition duration-500 ease-in-out">
                      code
                    </button>
                  </a>
                </div>
                <p>
                  <span className="text-2xl">E-Commerce</span>
                  <br />
                  your one-stop shopfor all your needs, Find the best deals and
                  shop effortlessly with us
                </p>
              </div>
            }
            className="max-w-100 w-96 md:w-100 h-80 rounded-lg shadow-sm shadow-orange-600 hover:scale-103 transition duration-500 ease " 
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('images/e-commaers.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            children={undefined}
          ></Card>
          <Card data-aos="fade-up"
            detailsContent={
              <div className=" cardCont flex flex-col justify-end px-5 py-2 items-center gap-y-8 w-[100%] h-[100%]  ">
                <h1 className="text-3xl ">RealEstate</h1>
                <div className="flex gap-x-5 justify-cennter items-cennter">
                  <a href="https://aahomesandproperties.com" target="_blank">
                    <button className="px-6 py-2 bg-orange-600 rounded-sm shadow-sm shadow-orange-600 hover:scale-105 transition duration-500 ease-in-out">
                      vist
                    </button>
                  </a>
                  <a href="">
                    <button className="px-6 py-2 bg-gray-600 rounded-sm shadow-sm shadow-gray-600 hover:scale-105 transition duration-500 ease-in-out">
                      code
                    </button>
                  </a>
                </div>
                <p>
                  <span className="text-2xl">RealEstate</span>
                  <br />
                  your real estate agent website that sute your taset and get
                  you more custormer
                </p>
              </div>
            }
            className="max-w-100 w-96 md:w-100 h-80 rounded-lg shadow-sm shadow-orange-600 hover:scale-103 transition duration-500 ease-in-out " 
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('images/reel.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            children={undefined}
          ></Card>
          <Card data-aos="fade-up"
            detailsContent={
              <div className=" cardCont flex flex-col justify-end px-5 py-2 items-center gap-y-8 w-[100%] h-[100%]  ">
                <h1 className="text-3xl ">Calculator</h1>
                <div className="flex gap-x-5 justify-cennter items-cennter">
                  <a
                    href="https://calculator-nine-lake-86.vercel.app/"
                    target="_blank"
                  >
                    <button className="px-6 py-2 bg-orange-600 rounded-sm shadow-sm shadow-orange-600 hover:scale-105 transition duration-500 ease-in-out">
                      vist
                    </button>
                  </a>
                  <a href="">
                    <button className="px-6 py-2 bg-gray-600 rounded-sm shadow-sm shadow-gray-600 hover:scale-105 transition duration-500 ease-in-out">
                      code
                    </button>
                  </a>
                </div>
                <p>
                  <span className="text-2xl">Calculator</span>
                  <br />A real time calaculator that works perfectly
                </p>
              </div>
            }
            className="max-w-100 w-96 md:w-100 h-80 rounded-lg shadow-sm shadow-orange-600 hover:scale-103 transition duration-500 ease-in-out " 
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('images/calculator.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            children={undefined}
          ></Card>
        </div>
      </div>



      <div className="flex flex-col justify-center items-center mt-30 px-5 w-[100%] " data-aos="fade-up">
        <h1 className=" text-center mt-12 mb-10 md:mt-0  text-5xl">Skills</h1>
        <div className=" hidden bg-gray-900 w-[100%] max-w-250 min-w-100 flex md:hidden flex-col px-2 md:px-5 py-9 rounded-lg items-center gap-y-5 md:gap-y-4">
          <div className="flex items-center gap-x-2 w-[100%] justify-between px-2">
            <p className="flex items-center flex-col">
              < span className="place-self-start">
                <FontAwesomeIcon icon={faHtml5}  className=" text-lg md:text-2xl" />
              </span>
              HTML5
            </p>
            <div className="h-2 w-[80%] bg-gray-500 flex items-center rounded-lg overflow-hidden">
              <div className="h-2 w-[90%] bg-blue-400"></div>
            </div>
            <p>90%</p>
          </div>


          <hr className="w-[100%]" />
          <div className="flex items-center gap-x-2 w-[100%] justify-between px-2">
            <p className="flex items-center flex-col">
              <span className="place-self-start">
                <FontAwesomeIcon icon={faCss3Alt}  className=" text-lg md:text-2xl" />
              </span>
              CSS3
            </p>
            <div className="h-2 w-[80%] bg-gray-500 flex items-center rounded-lg overflow-hidden">
              <div className="h-2 w-[80%] bg-blue-400"></div>
            </div>
            <p>80%</p>
          </div>
          <hr className="w-[100%]" />
          <div className="flex items-center gap-x-2 w-[100%] justify-between px-2">
            <p className="flex items-center flex-col">
              < span className="place-self-start">
              
               <FontAwesomeIcon icon={faSquareJs} className=" text-lg md:text-2xl" />
              </span>
              JS
            </p>
            <div className="h-2 w-[80%] bg-gray-500 flex items-center rounded-lg overflow-hidden ml-4">
              <div className="h-2 w-[70%] bg-blue-400"></div>
            </div>
            <p>70%</p>
          </div>
          <hr className="w-[100%]" />

          <div className="flex items-center gap-x-2 w-[100%] justify-between px-2">
            <p className="flex items-center flex-col">
              <span className="place-self-start">
                <FontAwesomeIcon
                  icon={faReact}
                  className=" text-lg md:text-2xl"
                />
              </span>
              React
            </p>
            <div className="h-2 w-[80%] bg-gray-500 flex items-center rounded-lg overflow-hidden">
              <div className="h-2 w-[50%] bg-blue-400"></div>
            </div>
            <p>50%</p>
          </div>
          <hr className="w-[100%]" />

          <div className="flex items-center gap-x-2 w-[100%] justify-between px-2">
            <p className="flex items-center gap-1 md:gap-0 flex-col">
              <span className="place-self-start">
                <img src="images/tail.png" alt="" className=" w-9 md:w-6" />
              </span>
              Tailwind
            </p>
            <div className="h-2 w-[80%] bg-gray-500 flex items-center rounded-lg overflow-hidden">
              <div className="h-2 w-[80%] bg-blue-400"></div>
            </div>
            <p>80%</p>
          </div>
          <hr className="w-[100%]" />
          <div className="flex items-center gap-x-2 w-[100%] justify-between px-2">
            <p className="flex items-center flex-col">
              <span className="place-self-start">
                <FontAwesomeIcon icon={faWordpress} className=" text-lg md:text-2xl" />
              </span>
              Wordpress
            </p>
            <div className="h-2 w-[80%] bg-gray-500 flex items-center rounded-lg overflow-hidden">
              <div className=" bar h-2 w-[80%] bg-blue-400"></div>
            </div>
            <p>80%</p>
          </div>
          <hr className="w-[100%]" />
          <div className="flex items-center gap-x-2 w-[100%] justify-between px-2">
            <p className="flex items-center gap-1 flex-col md:">
              <span className="place-self-start">
                 <img src="images/mobile.png" alt="" className="md:w-8 w-8" />

              </span>
             
              Responsive
            </p>
            <div className="h-2 w-[80%] bg-gray-500 flex items-center rounded-lg overflow-hidden">
              <div className="h-2 w-[80%] bg-blue-400"></div>
            </div>
            <p>80%</p>
          </div>
        </div>
        <div className=" skills flex md:flex flex-wrap justify-center items-center w-[100%] max-w-[1200px] h-auto gap-y-20 md:gap-10 mt-10">
          <div style={{boxShadow:"0px 0px 20px #e34f26 "}} data-aos="fade-up">
            <FontAwesomeIcon icon={faHtml5} className="text-5xl text-[#e34f26]"/>
            <p>HTML5</p>
          </div>
          <div style={{boxShadow:"0px 0px 20px #1572b6"}} data-aos="fade-up">
            <FontAwesomeIcon icon={faCss3Alt}  className=" text-5xl text-[#1572b6]" />
            <p>CSS3</p>
          </div>
          <div style={{boxShadow:"0px 0px 20px #f7df1e"}} data-aos="fade-up">
             <FontAwesomeIcon icon={faSquareJs} className=" text-5xl text-[#f7df1e]" />
            <p>JAVESCRIPT</p>
          </div>
          <div style={{boxShadow:"0px 0px 20px #61dafb "}} data-aos="fade-up">
           <FontAwesomeIcon
                  icon={faReact}
                  className=" text-5xl text-[#61dafb]"
                />
            <p>REACT</p>
          </div>
          <div style={{boxShadow:"0px 0px 20px #06b6d4"}} data-aos="fade-up">
             <img src="images/tail.png" alt="" className=" w-18" />
            <p>TAILWIND</p>
          </div>
          <div style={{boxShadow:"0px 0px 20px #21759b"}} data-aos="fade-up">
           <FontAwesomeIcon icon={faWordpress} className=" text-5xl text-[#21759b]" />
            <p>WORDPRESS</p>
          </div>
          <div style={{boxShadow:"0px 0px 20px #ff440054"}} data-aos="fade-up">
             <img src="images/mobile.png" alt="" className=" w-15" />
            <p>HTML5</p>
          </div>
        </div>
      </div>
      <ContactForm/>
      {/* < div className="mt-30 w-[100%]h-auto px-3 flex justify-center items-center " data-aos="fade-up"> 
      <form action="https://formspree.io/f/xyzdbwwz" method="POST" className="w-[100%] bg-gray-400 max-w-150 px-5 py-8 md:px-5 rounded-xl flex flex-col justify-center items-center gap-5" >
        <h1 className="text-center text-3xl text-black font-bold">Contact Me</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name " required/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Message</label>
          <textarea></textarea>
        </div>
        <div>
          < button className="bg-orange-600 rounded-xl h-15 text-white transition duration-500 ease-in-out hover:translate-y-[-3px] ">Send Message</button>
        </div>

      </form>
      </div>   */}
  </div>
  );
};

export default Home;
