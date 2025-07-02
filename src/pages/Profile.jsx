import { useContext, useRef, useState } from "react";
import Header from "../components/Header";
import Typography from "../components/Typography";
import RatingStar from "../components/RatingStar";
import ProfileAnalyticsChart from "../components/Profile/ProfileAnalyticsChart";
import Tag from "../components/tag";
import { RecentProjectCardData, tagsData } from "../constants/profile";
import Crousal from "../components/Coursal";
import ProfileCards from "../components/Profile/ProfileCards";
import Inputfield from "../components/Inputfield";
import ChipsInput from "../components/Profile/ChipsInput";
import { ImagePlus } from "lucide-react";
import ImageUploader from "../components/Profile/ImageUploader";
import AuthContext from "../context/AuthContext";

const Profile = () => {
  const {user} = useContext(AuthContext)
  const scrollRef = useRef(null);
  const [isEdited, setIsEdited] = useState(false);

  const [profileData, setProfileData] = useState({
    profilePhoto:
      "https://posterjack.ca/cdn/shop/articles/Portriat_Photography_Composition_Tips.jpg?v=1563409841&width=1500",
    coverPhoto:
      "https://timelinecovers.pro/facebook-cover/download/the-day-in-one-image-facebook-cover.jpg",
    name: user.name,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nobis modi ullam quo explicabo error dicta, ea magni repudiandae placeat voluptatibus consequatur unde aliquid, culpa soluta quasi reiciendis eius minima!",
    services: [
      "wedding",
      "birthday",
      "ceremony",
      "bridal shower",
      "barat",
      "mehndi",
    ],
  });

  return (
    <div
      ref={scrollRef}
      className="bg-white/30 backdrop-blur-lg hide-scrollbar overflow-x-hidden 
      overflow-y-auto p-6 shadow-md border pt-0 border-lightBorder w-full h-full rounded-3xl"
    >
      <Header
        scrollContainerRef={scrollRef}
        headingText="Profile"
        buttons={
          isEdited
            ? [
                {
                  label: "Save Changes",
                  variant: "primary",

                  onClick: () => {
                    console.log("save changes");
                    setIsEdited(false);
                    console.log("profileData:" ,profileData);
                  },
                },
                {
                  label: "Discard Changes",
                  variant: "secondary",

                  onClick: () => {
                    console.log("discard changes");
                    setIsEdited(false);
                  },
                },
              ]
            : [
                {
                  label: "Edit Profile",
                  variant: "primary",

                  onClick: () => {
                    console.log("edit pofile ");
                    setIsEdited(true);
                  },
                },
              ]
        }
      />
      <div className="p-1 mx-auto flex flex-col gap-20">
        <div className="h-50 rounded-3xl relative">
          <div className={`relative w-full h-full overflow-hidden rounded-3xl`}>
          {isEdited ? (
    <ImageUploader

      currentImage={profileData.coverPhoto}
      onImageChange={(newImage) =>
        setProfileData((prev) => ({ ...prev, coverPhoto: newImage }))
      }
    />
  ) : (
    <img
      src={profileData.coverPhoto}
      alt=""
      className="w-full h-full object-cover"
    />
  )}
          </div>
          <div className="absolute overflow-hidden border-6 border-white -bottom-[30%] left-10 w-40 z-50 h-40 rounded-full bg-orange-400">
             {isEdited ? (
    <ImageUploader
    size={40}
      currentImage={profileData.profilePhoto}
      onImageChange={(newImage) =>
        setProfileData((prev) => ({ ...prev, profilePhoto: newImage }))
      }
    />
  ) : (
    <img
      src={profileData.profilePhoto}
      alt=""
      className="w-full h-full object-cover"
    />
  )}
          </div>
        </div>
        <div className=" rounded-3xl p-1 flex justify-between">
          <div className=" bg-white/20 border-lightBgShade p-5 backdrop-blur-3xl border-1 w-[35%] gap-4 flex flex-col justify-normal rounded-3xl">
            <Typography variant="title" className="text-BlackText">
              {isEdited ? (
                <Inputfield
                  name="name"
                  containerClassName="!rounded-lg"
                  value={profileData.name}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              ) : (
                profileData.name
              )}
            </Typography>
            <Typography
              variant="xs"
              className="!leading-5 text-[0.9rem] !break-word !break-all  text-BlackText"
            >
              {isEdited ? 
                <Inputfield
                  name="name"
                  type="textarea"
                  containerClassName="!rounded-lg"
                  value={profileData.description}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                />
               : 
                profileData.description
              }
            </Typography>
            <RatingStar className="gap-3" rating={3.3} />
            <div className="mt-3 flex flex-row flex-wrap gap-2">
              {isEdited ? (
                <ChipsInput
                  label="Services"
                  chips={profileData.services}
                  setChips={(newChips) =>
                    setProfileData((prev) => ({ ...prev, services: newChips }))
                  }
                />
              ) : (
                <div className="mt-3 flex flex-wrap gap-2">
                  {profileData.services.map((item, idx) => (
                    <Tag key={idx} text={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="p-1 w-[62%]">
            <ProfileAnalyticsChart
              completedJobs={27}
              proposalsSent={45}
              lockedProjects={18}
              responsesReceived={36}
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col">
          <Typography
            variant="lightHeading"
            className="font-semibold py-6 text-shadow-lg text-textHeading"
          >
            Recent Events Deliver
          </Typography>
          {
            <Crousal
              viewPerPage={1}
              cards={RecentProjectCardData.map((item, idx) => {
                return (
                  <ProfileCards
                    key={idx}
                    RecentProjectCard={true}
                    recentClientName={item.name}
                    recentEventDate={item.date}
                    recentProjectTitle={item.projectTitle}
                    recentProjectInformation={item.projectInformation}
                    recentProjectVideo={item.resultVideo}
                    recentProjectRating={item.rating}
                  />
                );
              })}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Profile;
