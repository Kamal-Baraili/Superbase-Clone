import HeroCard from "../shared/card/HeroCard";
import { HeroCardData } from "../../db/mockdata";
import { ServicesData } from "../../db/mockdata";
import { useState } from "react";

const Services = () => {
  const [isLogoHover, setLogoHover] = useState(0);

  return (
    <>
      <div className="w-11/12 mx-auto grid grid-cols-4 gap-8 mt-20">
        <div className="bg-[#171717] border px-5 border-zinc-600 hover:border-zinc-500 cursor-pointer rounded-xl col-span-2">
          <HeroCard
            iconSrc={HeroCardData[0].iconSrc}
            title={HeroCardData[0].title}
            paragraph={HeroCardData[0].paragraph}
            cardImage={HeroCardData[0].cardImage}
            ind={0}
          />
        </div>

        {HeroCardData.slice(1, 3).map((key, index) => (
          <div
            key={index + 1}
            className="col-span-1 bg-[#171717] border px-5 border-zinc-600 hover:border-zinc-500 cursor-pointer rounded-xl"
          >
            <HeroCard
              iconSrc={key.iconSrc}
              title={key.title}
              paragraph={key.paragraph}
              cardImage={key.cardImage}
              ind={1}
            />
          </div>
        ))}
      </div>

      <div className="w-11/12 mx-auto grid grid-cols-4 gap-8 m-8">
        {HeroCardData.slice(3).map((key, index) => (
          <div
            key={index + 3}
            className="col-span-1 bg-[#171717] border px-5 border-zinc-600 hover:border-zinc-500 cursor-pointer rounded-xl"
          >
            <HeroCard
              iconSrc={key.iconSrc}
              title={key.title}
              paragraph={key.paragraph}
              cardImage={key.cardImage}
              ind={1}
            />
          </div>
        ))}
      </div>
      <p className="w-11/12 mx-auto text-2xl">
        Use one or all.{" "}
        <span className="text-[#878787]">
          Best of breed products. Integrated as a platform.
        </span>
      </p>

      <div className="flex justify-between items-center py-26 my-26">
        <div className="w-9/12 h-[100px] mx-auto flex justify-between">
          <div>
            <h3 className="text-4xl text-[#878787]">Use Supabase with</h3>
            <div
              className="transition-all ease-in-out duration-500"
              key={isLogoHover}
            >
              <h3 className="text-4xl mt-4">
                {(() => {
                  switch (isLogoHover) {
                    case 0:
                      return "any framework";
                    case 1:
                      return "React";
                    case 2:
                      return "Next.js";
                    case 3:
                      return "RedwoodJS";
                    case 4:
                      return "Flutter";
                    case 5:
                      return "Kotlin";
                    case 6:
                      return "Svelte";
                    case 7:
                      return "SolidJS";
                    case 8:
                      return "Vue";
                    case 9:
                      return "Nuxt";
                    case 10:
                      return "Refine";
                    default:
                      return "any framework";
                  }
                })()}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {ServicesData.map((key, index) => (
              <div
                onMouseEnter={() => setLogoHover(index + 1)}
                onMouseLeave={() => setLogoHover(0)}
                key={index}
                className="p-2 border border-black hover:border-white cursor-pointer rounded-xl opacity-70 hover:opacity-100 transition-all ease-in-out duration-300"
              >
                <img className="h-10 w-10" src={key} alt="services-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
