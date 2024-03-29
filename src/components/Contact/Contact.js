import React, { useRef, useEffect,useState } from "react";
import { IoIosCall } from "react-icons/io";
import { Icondiv, Buttondiv, IcondivGradient } from "./ContactStyle";
import { gsap } from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";

import { AiTwotoneMinusCircle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import GoogleMapComponentWithMarker from "./GoogleMapComponentWithMarker";

const initalState = {
  name: "",
  email: "",
  project: "",
};
const Contact = () => {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}.`);
        return;
      }
    }
    setError("");
  };
  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputName]: value }));
  };

  const Maplog = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  const BoxText = useRef();
  const Cursor = useRef();
  const MapLocator = useRef();
  const sentence = [
    " Remember why you started.",
    "I am developer",
    "Let us talk?",
  ];
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.to(MapLocator.current, {
      boxShadow: "0px 0px 10px 0px blue",
      ease: "power2.inOut",
      repeat: -1,
    });
    gsap.to(Cursor.current, { opacity: 0, ease: "power2.inOut", repeat: -1 });
    let masterTl = gsap.timeline({ repeat: -1 });
    sentence.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(BoxText.current, {
        duration: 2,
        text: word,
      });
      masterTl.add(tl);
    });
  }, []);

  return (
    <div>
      <div className="text-center pb-[20%] text-white">
        <h1 className="text-8xl">
          <span className="md:text-8xl text-5xl" ref={BoxText} />
          <span className="md:text-[100px] " ref={Cursor}>
            |
          </span>
        </h1>
        <h2 className="md:text-6xl text-4xl">Contact Us</h2>
      </div>
      <div className="xl:flex xl:fixed bottom-0 h-[50%] w-full">
        <div
          className="xl:w-2/4 bg-black w-full"
          style={{
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "center",
            padding: 0,
          }}
        >
          <div className="w-full">
            <GoogleMapComponentWithMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAqXuLdPt6JQj8AcoTH12seV1bcAuNoEEA"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
        <div className="xl:w-[40%] bg-slate-900 text-white items-center flex justify-center transition-all duration-500 ">
          <div className="w-[70%] xl:py-0 py-20">
            <h4 className="xl:text-7xl text-5xl mb-5">Meet Us</h4>
            <div className="mt-24">
              <div className="flex mb-9">
                <Icondiv>
                  <IoIosCall />
                </Icondiv>
                <span className="ml-10 text-2xl">+91 1234567890</span>
              </div>
              <div className="flex mb-9">
                <IcondivGradient className="font-bold ">@</IcondivGradient>
                <span className="ml-10 text-2xl">contact@threearrow.in</span>
              </div>
              <div className="flex">
                <Icondiv>
                  <ImLocation />
                </Icondiv>
                <span className="ml-10 text-2xl w-full leading-relaxed ">
                  6 ff, EF tower, Shreeji Gold, nr. C.K prajapati school,
                  Laxmipura Rd, opp. Sona and Bandhan party plot, Subhanpura,
                  Vadodara, Gujarat 390003, India
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-2/4 bg-slate-100 text-black items-center flex justify-center transition-all duration-500">
          <div className="w-[80%] xl:py-0 py-20">
            <h4 className="xl:text-7xl text-5xl mb-20">Pitch us</h4>
            <div className="leading-relaxed">
              <form onSubmit={handleSubmit}>
                <p>
                  hello,
                  <br />
                  my name is{" "}
                  <Icondiv>
                    <input
                      type="text"
                      name="name"
                      value={state.name}
                      onChange={handleInput}
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "your name")}
                      className="bg-slate-100 w-32 outline-none font-semibold"
                      placeholder="your name"
                    ></input>
                  </Icondiv>{" "}
                  and my e-mail address is
                  <Icondiv>
                    {" "}
                    <input
                      type="email"
                      name="email"
                      value={state.email}
                      onChange={handleInput}
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "your email")}
                      className="bg-slate-100 w-36 outline-none font-semibold"
                      placeholder="your email"
                    ></input>
                  </Icondiv>{" "}
                  and I would like to discuss about
                  <Icondiv>
                    {" "}
                    <input
                      type="text"
                      name="project"
                      value={state.project}
                      onChange={handleInput}
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "this project")}
                      className="bg-slate-100 w-36 outline-none font-semibold"
                      placeholder="this project."
                    ></input>
                  </Icondiv>
                </p>
                <p className="text-red-900">{error}</p>
                <Buttondiv
                  type="submit"
                  className="mt-10 text-white py-5 px-14 transition-all duration-700 delay-75"
                >
                  Send
                </Buttondiv>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
