import React from "react";
import Title from "../common/title/Title";
import PriceCard from "../pricing/PriceCard";

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Title subtitle='OUR PRICING' title='Pricing & Packages' />
        <div className='price container grid'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Hprice;
