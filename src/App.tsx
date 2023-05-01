import React from "react";
import "./App.css";
import LocomotiveScrollContainer from "./components/locomotive-scroll";
import essense from "./video/essenseFinal.mp4"


function App() {
  return (
    <div className="App">
      <LocomotiveScrollContainer>
        <div data-scroll-sticky className="h-screen w-screen ">
          <div className="h-screen w-screen absolute top-0 z-0 ">
            <video className="h-full w-full object-cover" src={essense} loop muted autoPlay/>
          </div>
        </div>
        <div className="h-72 w-screen flex flex-row border-y-[1px] border-black z-10 bg-white">
          <div className="border-r-[1px] border-black w-full h-full hover:bg-[#C8C8C8]">
            <div className="w-full h-full p-12 flex flex-col text-left justify-center z-10">
              <h1 className="text-2xl">CARGO</h1>
              <h2>aesthtetic and combfortable</h2>
            </div>
          </div>
          <div className="border-r-[1px] border-black w-full h-full hover:bg-[#C8C8C8]">
            <div className="w-full h-full p-12 flex flex-col text-left justify-center">
              <h1 className="text-2xl">HOODIES</h1>
              <h2>aesthtetic and combfortable</h2>
            </div>
          </div>
          <div className="border-r-[1px] border-black w-full h-full hover:bg-[#C8C8C8]">
            <div className="w-full h-full p-12 flex flex-col text-left justify-center">
              <h1 className="text-2xl ">T-SHIRTS</h1>
              <h2>aesthtetic and combfortable</h2>
            </div>
          </div>
          <div className="w-full h-full hover:bg-[#C8C8C8]">
            <div className="w-full h-full p-12 flex flex-col text-left justify-center">
              <h1 className="text-2xl">SHORTS</h1>
              <h2>aesthtetic and combfortable</h2>
            </div>
          </div>
        </div>
        <div className="text-6xl h-screen border-b-[1px] border-black bg-white">
          <div className="w-full h-full flex flex-col">
            <div className="h-full w-full border-black border-b-[1px] hover:bg-[#C8C8C8] flex justify-center items-center">
              <h1>MEN</h1>
            </div>
            <div className="h-full w-full border-black border-b-[1px] hover:bg-[#C8C8C8] flex justify-center items-center">
              WOMEN
            </div>
            <div className="h-full w-full border-black hover:bg-[#C8C8C8] flex justify-center items-center">
              KIDS
            </div>
          </div>
        </div>
      </LocomotiveScrollContainer>
    </div>
  );
}

export default App;
