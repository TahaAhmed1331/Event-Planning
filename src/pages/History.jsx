import { useRef, useState } from "react";
import Header from "../components/Header";
import Typography from "../components/Typography";
import { selectTabsData } from "../constants/history";
import { projectCards } from '../constants/Project'; // <-- Your project data

const History = () => {
  const [selectedKey, setSelectedKey] = useState("pending"); // Default selected tab
  const [hiddenpara, setHiddenpara] = useState(false)
  const scrollRef = useRef(null);

  // Filter projects based on status
  const filteredProjects = projectCards.filter(
    (project) => project.status === selectedKey
  );

console.log(hiddenpara)
  
  return (
    <div
      ref={scrollRef}
      className="bg-white/30 backdrop-blur-lg hide-scrollbar overflow-x-hidden 
      overflow-y-auto p-6 shadow-md border pt-0 border-lightBorder w-full h-full rounded-3xl"
    >
      <Header scrollContainerRef={scrollRef} headingText="History" />

      {/* Tabs */}
      <div className="flex flex-row justify-start items-center gap-20">
        {Object.entries(selectTabsData).map(([key, tab], idx) => (
          <Typography
            key={idx}
            onClick={() => setSelectedKey(tab.key)}
            className={`text-white !py-2 !px-3 cursor-pointer duration-75 text-shadow-2xs
              ${
                tab.key === selectedKey
                  ? "scale-110 border-b-2 border-[#5112ff59]"
                  : "scale-100 border-b-2 border-transparent"
              }
            `}
            variant="belowtitle"
          >
            {tab.title}
          </Typography>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className=" rounded-xl shadow-lg overflow-hidden border-2 border-white"
            onClick={()=> setHiddenpara(!hiddenpara)}
          >
            <img
              src={project.referenceImage[0]}
              alt={project.eventTitle}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <Typography variant="title" className="text-[black]">
                {project.eventTitle}
              </Typography>
              <Typography variant="belowtitle" className="uppercase text-gray-600 mb-2">
                by {project.userName} — {project.eventType}
              </Typography>
              <p className="text-sm text-gray-500">
                📍 {project.location}
              </p>
              <p className="text-sm text-gray-500">
                👥 {project.numberOfGuests} Guests | 🕒 {project.eventDuration}
              </p>
              <p className="text-sm text-gray-500">📅 {project.eventDate}</p>
              <p className="text-sm mt-2 text-gray-700">
                {/* {project.description.slice(0, 100)}... */}
{hiddenpara
  ? `${project.description.slice(0, 100)}...`
  : project.description}

              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
