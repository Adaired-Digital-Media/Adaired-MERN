"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import validators from "@/@core/utils/validators";
import axios from "axios";
import Heading from "../../common/Heading";
import BottomPerson from "../../../../public/assets/popup/bottom-person.png";
import { COMMON_MESSAGES, ENQUIRY_MESSAGES } from "@core/constants/messages";
import { BaseURL } from "@/app/baseUrl";
import InputField from "../../UI/InputField";
import SelectField from "../../UI/SelectField";
import MessageField from "../../UI/MessageField/MessageField";
import { IoClose } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CgAsterisk } from "react-icons/cg";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";
import { MdEdit, MdShoppingCart } from "react-icons/md";
import {
  FaHandshake,
  FaCode,
  FaLink,
  FaMobileScreenButton,
  FaRectangleAd,
} from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";

interface GetEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetEnquiryModal = ({ isOpen, onClose }: GetEnquiryModalProps) => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);
  const [loading, setLoading] = useState(false);
  const [servicesList, setServicesList] = useState<any[]>([]);
  const [errors, setErrors] = useState<any>({});
  const fields = [
    {
      name: "name",
      label: "Name",
      required: true,
      validate: (value: string) =>
        value.length < 2 ? ENQUIRY_MESSAGES.NAME_MIN : "",
    },
    {
      name: "email",
      label: "Email",
      required: true,
      validate: (value: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : ENQUIRY_MESSAGES.EMAIL_INVALID,
    },
    {
      name: "phone",
      label: "Phone",
      required: true,
      validate: (value: string) =>
        /^[0-9]{10}$/.test(value) ? "" : ENQUIRY_MESSAGES.PHONE_INVALID,
    },
    {
      name: "website",
      label: "Website",
      required: true,
      validate: (value: string) =>
        value && !/^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.*)?$/.test(value)
          ? ENQUIRY_MESSAGES.WEBSITE_INVALID
          : "",
    },
  ];

  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    services: [] as { id: string }[],
    description: "",
    additionDetails: {
      budget: "",
      source: "",
      startFrom: "",
      attachments: "file.pdf",
    },
    termsAndCondition: false,
  });

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`${BaseURL}/serviceCategory`);

        const serviceOrderMap: Record<string, number> = {
          "Search Engine Optimization": 1,
          "Frontend and Backend Development": 2,
          CMS: 3,
          "E-Commerce": 4,
          "Social Media Management": 5,
          "Mobile App Development": 6,
          "Pay Per Click": 7,
          "Link Building": 8,
          "Local SEO": 9,
          "AI SEO": 10,
        };

        const sortedServices = (res.data?.data || []).sort((a: any, b: any) => {
          const orderA = serviceOrderMap[a.name] ?? 999;
          const orderB = serviceOrderMap[b.name] ?? 999;

          return orderA - orderB;
        });

        setServicesList(sortedServices);
      } catch (err) {
        console.error(err);
      }
    };

    fetchServices();
  }, []);

  const serviceIcons: Record<string, React.ReactNode> = {
    "Search Engine Optimization": <FaMagnifyingGlassChart size={14} />,
    "Frontend and Backend Development": <FaCode size={14} />,
    "E-Commerce": <MdShoppingCart size={14} />,
    "Social Media Management": <FaHandshake size={14} />,
    "Mobile App Development": <FaMobileScreenButton size={14} />,
    "Pay Per Click": <FaRectangleAd size={14} />,
    "Link Building": <FaLink size={14} />,
    "Local SEO": <FaMapLocationDot size={14} />,
    CMS: <MdEdit size={14} />,
    "AI SEO": <FaRobot size={14} />,
  };

  if (!isOpen) return null;

  const handleChange = (e: any) => {
    const { name, value, files, type, checked } = e.target;

    if (name === "phone" && !/^\d*$/.test(value)) return;

    const fieldValue = type === "checkbox" ? checked : files ? files[0] : value;

    // ✅ UPDATE STATE (nested + normal)
    if (name.includes(".")) {
      const [parent, child] = name.split(".");

      setInputValue((prev: any) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: fieldValue,
        },
      }));
    } else {
      setInputValue((prev: any) => ({
        ...prev,
        [name]: fieldValue,
      }));
    }

    // ✅ REAL-TIME VALIDATION (FOR ALL FIELDS)
    let error = "";

    // 🔥 SOURCE
    if (name === "additionDetails.source") {
      error = fieldValue ? "" : COMMON_MESSAGES.REQUIRED("Source");
    }

    // 🔥 START DATE
    else if (name === "additionDetails.startFrom") {
      error = fieldValue ? "" : COMMON_MESSAGES.REQUIRED("Start date");
    }

    // 🔥 BUDGET (if needed)
    else if (name === "additionDetails.budget") {
      error = fieldValue ? "" : COMMON_MESSAGES.REQUIRED("Budget");
    }

    // 🔥 description
    else if (name === "description") {
      error = fieldValue.length < 10 ? ENQUIRY_MESSAGES.DESCRIPTION_MIN : "";
    }

    // 🔥 other validators
    else if ((validators as any)[name]) {
      error = (validators as any)[name](fieldValue);
    }

    setErrors((prev: any) => ({
      ...prev,
      [name]: error, // ✅ FULL PATH KEY
    }));
  };

  const toggleService = (id: string) => {
    setInputValue((prev) => {
      const exists = prev.services.find((s) => s.id === id);

      const updatedServices = exists
        ? prev.services.filter((s) => s.id !== id)
        : [...prev.services, { id }];

      setErrors((prevErr: any) => ({
        ...prevErr,
        services: updatedServices.length > 0 ? "" : prevErr.services,
      }));

      return {
        ...prev,
        services: updatedServices,
      };
    });
  };

  const validateForm = () => {
    const newErrors: any = {};

    // ✅ validate normal fields
    fields.forEach((field) => {
      const value = (inputValue as any)[field.name];

      if (field.required && !value) {
        newErrors[field.name] = field.validate(value);
      } else if (field.validate) {
        newErrors[field.name] = field.validate(value);
      }
    });

    // ✅ description
    newErrors["description"] =
      inputValue.description.length < 10
        ? ENQUIRY_MESSAGES.DESCRIPTION_MIN
        : "";

    // ✅ NESTED FIELDS (FIXED)
    newErrors["additionDetails.budget"] = inputValue.additionDetails.budget
      ? ""
      : COMMON_MESSAGES.REQUIRED("Budget");

    newErrors["additionDetails.source"] = inputValue.additionDetails.source
      ? ""
      : COMMON_MESSAGES.REQUIRED("Source");

    newErrors["additionDetails.startFrom"] = inputValue.additionDetails
      .startFrom
      ? ""
      : COMMON_MESSAGES.REQUIRED("Start date");

    // ✅ services
    newErrors["services"] =
      inputValue.services.length > 0 ? "" : ENQUIRY_MESSAGES.SERVICES_REQUIRED;

    // ✅ checkbox
    newErrors["termsAndCondition"] = inputValue.termsAndCondition
      ? ""
      : ENQUIRY_MESSAGES.TERMS_REQUIRED;

    setErrors(newErrors);

    return Object.values(newErrors).every((err) => !err);
  };

  const handleClick = async () => {
    if (loading) return;

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(`${BaseURL}/enquiry/send`, inputValue);

      if (res.data?.success) {
        router.push("/thankyou");
        setInputValue({
          name: "",
          email: "",
          phone: "",
          website: "",
          services: [] as { id: string }[],
          description: "",
          additionDetails: {
            budget: "",
            source: "",
            startFrom: "",
            attachments: "file.pdf",
          },
          termsAndCondition: false,
        });
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      <div className="relative rounded-3xl shadow-xl bg-white h-full lg:h-fit md:w-[95%] lg:w-[65%] z-50 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black cursor-pointer z-60"
        >
          <IoClose size={22} />
        </button>

        <div className="max-h-full lg:max-h-[90vh] overflow-y-auto no-scrollbar">
          <div className="relative flex justify-center gap-3 px-[1rem] md:px-[2.5rem] lg:px-[8rem] pt-[4rem] pb-[0.5rem]">
            <div className="w-full">
              <Heading
                headingParts={[
                  { text: "Let’s Talk", color: "#000000", weight: 700 },
                  { text: "About Your Goals", color: "#FB9100", weight: 700 },
                ]}
                isInCenter={true}
              />

              <p className="text-center text-[15px] font-medium text-[#323232]">
                Find performance gaps limiting your website’s visibility and
                effectiveness.
              </p>

              <div className="bg-[#F9F9F9] py-[2rem] px-[1rem] md:p-[3rem] lg:p-[4rem] rounded-3xl my-[2rem] md:my-[3rem] lg:my-[4rem]">
                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {fields.map((field, idx: number) => (
                    <InputField
                      key={idx}
                      label={field.label}
                      name={field.name}
                      required={true}
                      value={(inputValue as any)[field.name]}
                      handleChange={handleChange}
                      placeholder={`Enter your ${field.label.toLowerCase()}...`}
                      className="bg-white border border-gray-300 p-3 mb-4"
                      error={errors[field.name]}
                    />
                  ))}
                </div>

                {/* Services */}
                <div className="space-y-4 mb-8">
                  <p className="flex text-[16px] uppercase font-semibold my-4">
                    Services Required <CgAsterisk color="red" />
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {servicesList.map((service, idx: number) => {
                      const isSelected = inputValue.services.some(
                        (s) => s.id === service._id,
                      );
                      return (
                        <div
                          key={idx + 1}
                          onClick={() => toggleService(service._id)}
                          className={`flex items-center justify-between gap-[3rem] px-4 py-2 rounded-[0.5rem] cursor-pointer border transition-all ${isSelected ? "bg-[#FB9100] text-white border-[#FB9100]" : "bg-white text-black border-gray-300"}`}
                        >
                          <div className="flex items-center gap-2">
                            {/* Icons */}
                            {/* {serviceIcons[service?.name]} */}
                            <p
                              className={`text-[14px] text-left  ${isSelected ? "text-white" : "text-black"}`}
                            >
                              {service?.name}
                            </p>
                          </div>

                          {isSelected ? (
                            <GiCheckMark size={12} />
                          ) : (
                            <GoPlus size={16} />
                          )}
                        </div>
                      );
                    })}
                    {errors.services && (
                      <span className="text-red-500">{errors.services}</span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <p className="flex uppercase font-semibold text-[16px] my-4">
                  Project Details <CgAsterisk color="red" />
                </p>
                <MessageField
                  placeholder="Tell us about your Project goals , timeline , and any specific requirements..."
                  name="description"
                  value={inputValue.description}
                  handleChange={handleChange}
                  rows={8}
                  className="bg-white border border-gray-300 w-full p-4 mb-4"
                  error={errors.description}
                />

                <p className="flex uppercase text-[16px] font-semibold my-4">
                  Additional Details <CgAsterisk color="red" />
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 border border-gray-300 rounded-[0.5rem] bg-white mb-4">
                  {/* Budget */}
                  <div className="flex flex-col">
                    <SelectField
                      label={"Select your budget range"}
                      name="additionDetails.budget"
                      value={inputValue.additionDetails.budget}
                      handleChange={handleChange}
                      className="bg-white border border-gray-300 p-3 mb-4"
                      required
                      error={errors["additionDetails.budget"]}
                      options={[
                        {
                          label: "Select Range",
                          value: "",
                        },
                        {
                          label: "10000",
                          value: "10000",
                        },
                        {
                          label: "0 - 10k",
                          value: "0 - 10k",
                        },
                        {
                          label: "10k - 50k",
                          value: "10k - 50k",
                        },
                        {
                          label: "50k+",
                          value: "50k+",
                        },
                      ]}
                    />
                  </div>

                  {/* Source */}
                  <div className="flex flex-col">
                    <SelectField
                      label={"How did you hear about us?"}
                      name="additionDetails.source"
                      value={inputValue.additionDetails.source}
                      handleChange={handleChange}
                      className="bg-white border border-gray-300 p-3 mb-4"
                      error={errors["additionDetails.source"]}
                      options={[
                        {
                          label: "How did you hear about us?",
                          value: "",
                        },
                        {
                          label: "Google",
                          value: "google",
                        },
                        {
                          label: "Social Media",
                          value: "social",
                        },
                        {
                          label: "Friend / Referral",
                          value: "friend",
                        },
                        {
                          label: "Ads",
                          value: "ads",
                        },
                      ]}
                    />
                  </div>

                  {/* Start Date */}
                  <InputField
                    label={"When do you want to get started?"}
                    type="date"
                    required={true}
                    name="additionDetails.startFrom"
                    value={inputValue.additionDetails.startFrom}
                    handleChange={handleChange}
                    className="bg-white border border-gray-300 p-3 mb-4"
                    error={errors["additionDetails.startFrom"]}
                  />

                  {/* File */}
                  <InputField
                    label={"Attachments"}
                    type="file"
                    name="additionDetails.file"
                    handleChange={handleChange}
                    className="bg-white border border-gray-300 p-3 mb-4"
                  />

                  {/* Upload file design */}
                  {/* <div className="flex items-center gap-2 bg-white border border-gray-300 p-3 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                  </svg>

                  <span className="w-full text-xxs font-normal text-[#000000] focus:border-[#000000] xl:text-xs">
                    Click to upload file
                  </span>
                </div> */}
                </div>

                {/* Checkbox */}
                <div className="flex gap-2 mt-[3rem]">
                  <input
                    type="checkbox"
                    checked={inputValue.termsAndCondition}
                    onChange={() => {
                      setInputValue((prev) => ({
                        ...prev,
                        termsAndCondition: !prev.termsAndCondition,
                      }));

                      setErrors((prev: any) => ({
                        ...prev,
                        agreed: "",
                      }));
                    }}
                    className="mb-auto mt-1.5"
                  />
                  <p className="text-[14px] my-auto">
                    I agree to the processing of personal data according to the
                    Privacy Policy.
                  </p>
                </div>
                {errors.agreed && (
                  <span className="text-red-500">{errors.agreed}</span>
                )}

                {/* Button */}
                <div className={`flex gap-2 lg:gap-4 mt-[4rem]`}>
                  <button
                    disabled={loading}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    onClick={handleClick}
                    className={`px-[2rem] bg-black text-white flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[60px] py-[0.75rem] font-montserrat text-xxs font-medium transition-all duration-300 ease-out active:scale-95 xl:text-xs 1366:text-[14px] 1400:text-[18px] 1470:text-[18px] 1600:text-[18px] 1680:text-[18px] hover:bg-[#FB9100]
                    } `}
                  >
                    <p>{loading ? "Submitting..." : "Get a Quote"}</p>
                    <IoIosArrowRoundForward
                      size={25}
                      className={`${isHover ? "rotate-[360deg] transition-all duration-300 ease-out active:scale-95" : "rotate-[310deg]"}`}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute right-0 bottom-0 hidden lg:block">
              <Image
                src={BottomPerson}
                alt="Person Image"
                className="w-full h-auto min-w-[clamp(180px,30vw,320px)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetEnquiryModal;
