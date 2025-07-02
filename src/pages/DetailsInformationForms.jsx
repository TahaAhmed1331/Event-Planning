import { useContext, useState } from "react";
import Inputfield from "../components/Inputfield";
import ChipsInput from "../components/Profile/ChipsInput";
import ImageUploader from "../components/Profile/ImageUploader";
import Button from "../components/Button";
import Back from "../../public/assets/svg/MyIcon";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ProtectedRoutes } from "../constants/routes";
import Typography from "../components/Typography";

const DetailsInformationForms = () => {
  const navigate = useNavigate();
  const { detailInformation, setDetailInformation } = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const newErrors = {};
    if (!detailInformation.name) newErrors.name = "Name is required";
    if (!detailInformation.description)
      newErrors.description = "Description is required";
    if (!detailInformation.profilePic)
      newErrors.profilePic = "Profile picture is required";
    if (!detailInformation.cover) newErrors.cover = "Cover image is required";
    if (detailInformation.services.length === 0)
      newErrors.services = "Add at least one service";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    
    localStorage.setItem(
      "detailInformation",
      JSON.stringify(detailInformation)
    );
  localStorage.removeItem("tempUser"); 
  localStorage.removeItem("canAccessDetailsPage");
navigate("/login");
  };

  return (
    <div className="w-full h-screen relative flex justify-center items-center bg-theme-gradient p-5">
      <div className="w-[48%] h-full hide-scrollbar rounded-3xl bg-white/20 backdrop-blur-3xl p-10 flex flex-col gap-6 overflow-y-auto">
        <Typography
          variant={"heading"}
          className={"capitalize text-textHeading !mx-auto"}
        >
          Provide information Details
        </Typography>

        <div className="flex flex-col gap-10 w-full ">
          <div className=" w-full h-58 flex flex-col gap-2">
            <label className="text-sm text-textHeading">Cover Image</label>
            <ImageUploader
              size={35}
              currentImage={detailInformation.profilePic}
              onImageChange={(img) =>
                setDetailInformation({ ...detailInformation, profilePic: img })
              }
            />
            {errors.cover && (
              <span className="text-red-500 text-xs">{errors.cover}</span>
            )}
          </div>
          <div className="w-50 h-50 overflow-hidden flex flex-col gap-2 ">
            <label className="text-sm text-textHeading">Profile Picture</label>
           <div className=" overflow-hidden w-40  h-40">
            <ImageUploader
            
            size={28}
              currentImage={detailInformation.cover}
              onImageChange={(img) =>
                setDetailInformation({ ...detailInformation, cover: img })
              }
            />
            </div>
            {errors.profilePic && (
              <span className="text-red-500 text-xs">{errors.profilePic}</span>
            )}
          </div>
        </div>

        <Inputfield
            containerClassName={'!my-2'}
          label="Name"
          placeholder="Enter your full name"
          type="text"
          value={detailInformation.name}
          error={errors.name}
          onChange={(e) =>
            setDetailInformation({ ...detailInformation, name: e.target.value })
          }
        />

        <Inputfield
        containerClassName={'!my-2'}
          label="Description"
          placeholder="Write about yourself"
          type="textarea"
          value={detailInformation.description}
          error={errors.description}
          onChange={(e) =>
            setDetailInformation({
              ...detailInformation,
              description: e.target.value,
            })
          }
        />
        <ChipsInput
        containerClassName={'!my-2'}
          label="Services You Offer"
          chips={detailInformation.services}
          setChips={(chips) =>
            setDetailInformation({ ...detailInformation, services: chips })
          }
          placeholder="Enter services press Enter"
        />
        {errors.services && (
          <span className="text-red-500 text-xs px-2">{errors.services}</span>
        )}

        <Button
          text="Submit"
          classname="!w-full !mt-4"
          variant="capsule"
          onClick={handleSubmit}
        />
      </div>

      <div className="absolute top-10 left-10 py-2 text-textHeading w-fit px-4 font-light text-lg bg-textHeading rounded-full">
        <Back />
      </div>
    </div>
  );
};

export default DetailsInformationForms;
