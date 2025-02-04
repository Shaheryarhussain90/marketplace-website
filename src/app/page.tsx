import Image from "next/image";
import Link from "next/link";

import Topheader from "./Components/topheader";


import Herosection from "./Components/herosection";

 import EditorSection from "./Components/editsection";

import Card from "./Components/card";

import Green from "./Components/green";
import Shopping from "./Components/sopping"
 import Contac from "./Components/contac";
import Feature from "./Components/feature";
import Product from "./Components/pricing";
// import Product1 from './Components/product1';
import Team from './Components/team';
import About from './Components/about';
import Pricing from './Components/pricing';
import Sanitydata from "./Components/sanitydata/page"



export default function Home() {
  return (
    <div>
      {/* <Topheader/> */}
      <Herosection/>
      <EditorSection/>
      <Sanitydata/>
      <Card/>
      <Green/>
      <Shopping/>
      <Feature/>
      <Product/>
      {/* <Product1/> */}
      <Team/>
      
      <Pricing/> 
      
       <About/>
      <Contac/> 
      
      


    </div>
  );
}
