import React from "react";
import "./App.css";
import LocomotiveScrollContainer from "./components/locomotive-scroll";
import essense from "./video/essenseFinal.mp4";

function App() {
  const items = [
    {
      id: "1",
      name: "Hoodie 1",
      description: "oversized neon green hoodie",
      imgLink:
        "https://pangaia.com/cdn/shop/products/Organic-Cotton-Hoodie-Jade-Green-1.png?v=1662475619",
    },
    {
      id: "2",
      name: "Hoodie 2",
      description: "oversized brown hoodie",
      imgLink:
        "https://pangaia.com/cdn/shop/products/365-Organic-Cotton-Hoodie-Chesnut-Brown-1.png?v=1662625316",
    },
    {
      id: "3",
      name: "Hoodie 3",
      description: "oversized black hoodie",
      imgLink:
        "https://pangaia.com/cdn/shop/products/Organic-Cotton-Hoodie-Black-1.png?v=1662475635",
    },
    {
      id: "4",
      name: "Cargo Jeans",
      description: "Comfortable aesthetic cargo jeans",
      imgLink:
        "https://colors-clothing.com/cdn/shop/products/denimpantsColors_209.png?v=1679423531",
    },
    {
      id: "5",
      name: "The original Cargo",
      description: "our iconic cargo pants",
      imgLink:
        "https://moleculeclothing.online/media/catalog/product/cache/2/image/800x800/9df78eab33525d08d6e5fb8d27136e95/4/5/45019_c4_1_3/45019lolivegreenmoleculecomfycombats-32.png",
    },
    {
      id: "6",
      name: "Lost and found cargo",
      description: "for those who like to stand out",
      imgLink:
        "https://s3-us-west-2.amazonaws.com/stylyze-neimanmarcus/2022/12/20/63a1c9906d1ead565cd81311",
    },
  ];

  return (
    <div className="App select-none h-full overflow-none">
      <LocomotiveScrollContainer>
        <div data-scroll-sticky className="h-screen w-screen ">
          <div className="h-screen w-screen absolute top-0 z-0 ">
            <video
              className="h-full w-full object-cover"
              src={essense}
              loop
              muted
              autoPlay
            />
          </div>
        </div>
        <div className="h-72 w-screen flex flex-row border-y-[1px] border-black z-10 bg-white">
          <div className="border-r-[1px] border-black w-full h-full hover:bg-[#C8C8C8]">
            <div className="w-full h-full p-12 flex flex-col text-left justify-center z-10">
              <h1 className="text-2xl">CARGO </h1>
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
        <div className="px-8 py-32 flex flex-col uppercase bg-white">
          <h1 className="underline">trending:</h1>
          <div className="grid grid-cols-3 gap-12 uppercase text-left pt-8">
            {items.map((item) => (
              <div
                className="flex flex-col h-full w-full gap-4 p-2"
                id={item.id}
              >
                <div className="h-80 w-full overflow-hidden">
                <img
                  src={item.imgLink}
                  alt={item.description}
                  className="aspect-square w-full h-full object-cover hover:scale-[105%] ease-in-out duration-500"
                />
                </div>
                <div className="flex flex-col gap-0">
                  <h1>{item.name}</h1>
                  <span className="text-xs">{item.description}</span>
                </div>
                <div className="flex flex-row gap-2">
                  <button className="border-black bg-transparent w-full border-[1px] hover:bg-[#c8c8c8]">
                    add to cart
                  </button>
                  <button className="border-black bg-transparent w-8 rounded-full border-[1px] hover:bg-red-400">
                    ♡
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-6xl h-screen border-b-[1px] border-black bg-white border-t-[1px] select-none">
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
 
      <div id="infinite" className="font-bold z-10">
        <div id="infinite-fx" className="ticker-wrap">
          <span>ESSENSE APPAREL®</span>
          <span>ESSENSE APPAREL®</span>
        </div>
      </div>
      <div className="h-[120vh] w-screen overflow-hidden">
        <img src="https://images.pexels.com/photos/7645362/pexels-photo-7645362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="skating women" className="h-[full] w-screen object-cover"/>
      </div>
      <div
      className=" text-black text-left flex flex-col uppercase pt-16"
      id="footer"
    >
      <div className="contact z-10 font-medium">
        <ul>
          <li>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              Tiktok
            </a>
          </li>
          <li>
            <a
              href="/"
              target="_blank"
              aria-label="link to instagram"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="/"
              target="_blank"
              aria-label="link to twitter"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li className="invisible">
            <a
              href="/"
              target="_blank"
              aria-label="link to twitter"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li className="invisible">
            <a
              href="/"
              target="_blank"
              aria-label="link to twitter"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li className=" copyright">
            <span className="text-xs">@2023 essense APPAREL®</span>
          </li>
        </ul>
        <ul>
          <li>
            <a
              aria-label="link to work page where all work is displayed"
              >
              Sign in
            </a>
          </li>
          <li>
            <a
              aria-label="link to cabinet page where all concept projects are displayed"
            >
              Offers
            </a>
          </li>
          <li>
            <a
              aria-label="link to studio page"
            >
              WishList
            </a>
          </li>
          <li>
            <a
              aria-label="contact us, let's get in touch"
            >
              Cart
            </a>
          </li>
          <li>
            <a
              aria-label="contact us, let's get in touch"
            >
              Contact Us
            </a>
          </li>
          <li className="copyright">
              <span className="text-xs">Cookies Policy</span>
          </li>
        </ul>
        <ul>
          <li className="text-xs underline font-bold">Reach out</li>
          <li className="text-xs hover:opacity-50 ">
            <a
              href="/"
            >
              info@essenseapparel.com
            </a>
          </li>
        </ul>
      </div>
    </div>
      </LocomotiveScrollContainer>
    </div>
  );
}

export default App;
