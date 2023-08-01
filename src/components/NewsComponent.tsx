import Image from "next/image";
import { useState } from "react";
const imageLoader = (slug: number) => {
  return `/newsImage${slug}.jpg`;
};

export default function NewsComponent({ slug }: { slug: number }) {
  console.log(imageLoader(slug));

  return (
    <div className=" mx-auto w-[400px] h-[70vh] overflow-hidden ">
      {
        <Image
          src={imageLoader(slug)}
          alt="news item"
          height={400}
          width={400}
          unoptimized
        />
      }
      {slug === 1 ? (
        <>
          <p>
            New Delhi: Central and state governments collected ₹1.65 trillion in
            Goods and Services Tax (GST) revenue in July, an improvement of 11%
            from the year-ago period, official data showed on Tuesday.
          </p>
          <p>
            This is the fifth time that GST revenue collection has remained
            above the ₹1.6 trillion mark, said a statement from the finance
            ministry. The governments estimate for monthly average collection
            this fiscal is ₹1.65 trillion. The government collected ₹41,239
            crore by way of integrated GST (IGST) and ₹840 crore by way of GST
            cess on imports. After settlement for inter-state sales, the Centre
            collected ₹69,558 crore and states collected ₹70,811 crore as their
            respective shares of GST revenue in July, the finance ministry
            statement said.
          </p>
          <p>
            In July, revenue from domestic transactions (which includes import
            of services) was 15% higher than the revenues from these sources in
            the same month last year, the statement said.
          </p>{" "}
        </>
      ) : (
        <>
          <p>
            Markets have touched all-time high levels lately. But are nowhere
            close to all-time high valuations. That’s because Nifty has spent
            almost 20 months in the range of 16,000-18,000 level before breaking
            out.
          </p>
          <p>
            And in this period, the earnings have grown by 28-30 per cent;
            thereby resulting in a moderation of valuation multiples. Nifty is
            trading at 15-18 per cent cheaper valuations compared to October
            2021. Having said this, the second half could be tough for developed
            economies as the impact of rate hikes starts to reflect on consumer
            spending, real estate and other key constituents of the economy.
            Domestically, the elections in key states and the run-up to general
            elections next year could result in some volatility.{" "}
          </p>
          <p>
            Given the healthy growth in earnings and expected multi-year
            economic upcycle in India, the volatility for any domestic and
            global reasons would be an opportunity to accumulate quality stocks
            at better price points for handsome returns over the next
            two-to-five years.
          </p>
        </>
      )}
    </div>
  );
}
