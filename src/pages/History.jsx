import { useRef, useState } from "react";
import Header from "../components/Header";
import Typography from "../components/Typography";;
import { selectTabsData } from "../constants/history";

const History = () => {
  const [select, setSelect] = useState(selectTabsData.pendingProposals.title);
  const scrollRef = useRef(null);
  return (
    <div
      ref={scrollRef}
      className="bg-white/30 backdrop-blur-lg hide-scrollbar overflow-x-hidden 
      overflow-y-auto p-6 shadow-md border pt-0 border-lightBorder w-full h-full rounded-3xl"
    >
      <Header scrollContainerRef={scrollRef} headingText="History" />
      <div className="flex flex-row justify-start items-center gap-20">
        {selectTabsData &&
          Object.entries(selectTabsData).map((item, idx) => (
            <Typography
              className={`text-white !py-2 !px-3 cursor-pointer duration-75 text-shadow-2xs
                ${
                  item[1].title === select
                    ? "scale-110 border-b-2 border-[#5112ff59]"
                    : "scale-100 border-b-2 border-transparent"
                }
                `}
              variant="belowtitle"
              key={idx}
              onClick={()=> setSelect(item[1].title)}
            >
              {item[1].title}
            </Typography>
          ))}
      </div>
    </div>
  );
};

export default History;
