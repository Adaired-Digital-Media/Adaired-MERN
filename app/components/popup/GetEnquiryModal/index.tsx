'use client';

import { IoClose } from 'react-icons/io5';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import validators from '@/@core/utils/validators';
import axios from 'axios';
import Heading from '../../common/Heading';
import { GiCheckMark } from "react-icons/gi";
import { IoIosArrowRoundForward } from 'react-icons/io';
import { GoPlus } from "react-icons/go";
import { CgAsterisk } from "react-icons/cg";
import BottomPerson from '../../../../public/assets/popup/bottom-person.png';
import InputField from '../../UI/InputField';
import { BaseURL } from '@/app/baseUrl';
import SelectField from '../../UI/SelectField';

interface GetEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetEnquiryModal = ({ isOpen, onClose }: GetEnquiryModalProps) => {
  const router = useRouter();

  const [isHover, setIsHover] = useState(false);
  const [loading, setLoading] = useState(false);

  const [servicesList, setServicesList] = useState<any[]>([]);

  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const [errors, setErrors] = useState<any>({});

  const handleFileUpload = async (e: any) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('upload_preset', 'YOUR_UPLOAD_PRESET');

      const res = await axios.post(
        'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/auto/upload',
        formData
      );

      const url = res.data.secure_url;

      setInputValue((prev) => ({
        ...prev,
        additionDetails: {
          ...prev.additionDetails,
          attachments: url,
        },
      }));

      setFileUrl(url);

    } catch (error) {
      console.error('Cloudinary upload failed', error);
    } finally {
      setUploading(false);
    }
  };

  const fields = [
    { name: 'name', label: 'Name' },
    { name: 'email', label: 'Email' },
    { name: 'phone', label: 'Phone Number' },
    { name: 'website', label: 'Website Url' },
  ];

  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    services: [] as { id: string }[],
    description: '',
    additionDetails: {
      budget: '',
      source: '',
      startFrom: '',
      attachments: '',
    },
    termsAndCondition: false,
  });
  console.log(inputValue, "inputValue>>>");

  const serviceOrder = [
    "SEO",
    "Frontend and Backend Development",
    "E-Commerce",
    "Social Media Management",
    "Mobile App Development",
    "Pay Per Click",
    "Link Building",
    "Local SEO",
    "CMS",
    "AI SEO",
  ];

  useEffect(() => {
    const fetchServices = async () => {
      try {

        const res = await axios.get(`${BaseURL}/serviceCategory`);
        // const sortedServices = res.data?.data.sort(
        //   (a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        // );
        // setServicesList(sortedServices);

        setServicesList(res.data?.data || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchServices();
  }, []);

  if (!isOpen) return null;

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    if (name === 'phone' && !/^\d*$/.test(value)) return;

    if (name === 'file') {
      setFile(files?.[0] || null);
      return;
    }

    setInputValue((prev: any) => ({
      ...prev,
      [name]: value,
    }));

    if ((validators as any)[name]) {
      setErrors((prev: any) => ({
        ...prev,
        [name]: (validators as any)[name](value),
      }));
    }
  };

  const toggleService = (id: string) => {
    setInputValue((prev) => {
      const exists = prev.services.find((s) => s.id === id);

      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s.id !== id)
          : [...prev.services, { id }],
      };
    });
  };

  const handleAdditionalChange = (e: any) => {
    const { name, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      additionDetails: {
        ...prev.additionDetails,
        [name]: value,
      },
    }));
  };

  const validateForm = () => {
    const newErrors: any = {
      description: inputValue.description ? '' : 'Description is required',
      budget: inputValue.additionDetails.budget ? '' : 'Select budget',
      source: inputValue.additionDetails.source ? '' : 'Select source',
      services: inputValue.services.length > 0 ? '' : 'Select at least one service',
      agreed: inputValue.termsAndCondition ? '' : 'Accept terms',
      startFrom: inputValue.additionDetails.startFrom ? '' : 'Select start date',
      file: inputValue.additionDetails.attachments ? '' : 'Upload file',
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === '');
  };

  const handleClick = async () => {
    if (loading) return;

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      console.log(inputValue, "FINAL PAYLOAD");

      await axios.post(`${BaseURL}/enquiry/send`, inputValue);

      router.push('/thankyou');
    } catch (error) {
      console.error(error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-50 rounded-3xl bg-white shadow-xl md:w-[95%] lg:w-[70%] max-h-[90vh] overflow-y-auto no-scrollbar">

        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-black">
          <IoClose size={22} />
        </button>

        <div className="relative flex justify-center gap-3 px-[10rem] pt-[4rem] pb-[0.5rem] -z-10">
          <div className="w-full">

            <Heading
              headingParts={[
                { text: 'Let’s Talk', color: '#000000', weight: 700 },
                { text: 'About Your Goals', color: '#FB9100', weight: 700 },
              ]}
              isInCenter={true}
            />

            <p className="text-center text-[15px] font-medium text-[#323232]">
              Find performance gaps limiting your website’s visibility and effectiveness.
            </p>

            <div className='bg-[#F9F9F9] p-[4rem] rounded-3xl my-[4rem]'>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {fields.map((field) => (
                  <InputField
                    label={field.label}
                    name={field.name}
                    value={(inputValue as any)[field.name]}
                    handleChange={handleChange}
                    placeholder={`Enter your ${field.label.toLowerCase()}...`}
                    className="bg-white border border-gray-300 p-3 mb-2 rounded-[6px]"
                    error={errors[field.name]}
                  />
                ))}
              </div>

              {/* Services */}
              <div className="space-y-4 mb-8">
                <p className='flex uppercase font-semibold my-4'>Services Required <CgAsterisk color='red' /></p>
                <div className="flex flex-wrap gap-3">
                  {servicesList.map((service) => {
                    const isSelected = inputValue.services.some((s) => s.id === service._id);
                    return (
                      <div
                        key={service._id}
                        onClick={() => toggleService(service._id)}
                        className={`flex items-center justify-between gap-[3rem] px-4 py-2 rounded-[6px] cursor-pointer border transition-all
                          ${isSelected ? "bg-[#FB9100] text-white border-[#FB9100]" : "bg-white text-black border-gray-300"}`}
                      >
                        <p className={`text-[14px] ${isSelected ? 'text-white' : 'text-black'}`}>
                          {service.name}
                        </p>
                        {isSelected ? <GiCheckMark size={16} /> : <GoPlus size={16} />}
                      </div>
                    );
                  })}
                  {errors.services && <p className="text-red-500 text-xs mt-2">{errors.services}</p>}
                </div>
              </div>

              {/* Message */}
              <p className='flex uppercase font-semibold my-4'>Project Details <CgAsterisk color='red' /></p>
              <textarea
                placeholder='Tell us about your Project goals , timeline , and any specific requirements...'
                name="description"
                value={inputValue.description}
                onChange={handleChange}
                rows={6}
                className="bg-white border border-gray-300 w-full rounded-[6px] p-4 mb-4"
              />
              {errors.description && <p className="text-red-500 text-xs mt-2">{errors.description}</p>}

              <p className='flex uppercase font-semibold my-4'>Additional Details <CgAsterisk color='red' /></p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 border border-gray-300 rounded-[6px] bg-white mb-4">

                {/* Budget */}
                <div className="flex flex-col">
                  <SelectField
                    label={'Select your budget range'}
                    name="budget"
                    value={inputValue.additionDetails.budget}
                    handleChange={handleAdditionalChange}
                    className="bg-white border border-gray-300 p-3 mb-2 rounded-xl"
                    required
                    options={[
                      {
                        label: 'Select Range',
                        value: '',
                      },
                      {
                        label: '10000',
                        value: '10000'
                      },
                      {
                        label: '0 - 10k',
                        value: '0 - 10k',
                      },
                      {
                        label: '10k - 50k',
                        value: '10k - 50k',
                      },
                      {
                        label: '50k+',
                        value: '50k+',
                      },
                    ]}
                  />
                  {errors.budget && <p className="text-red-500 text-xs">{errors.budget}</p>}
                </div>

                {/* Source */}
                <div className="flex flex-col">
                  <SelectField
                    label={'How did you hear about us?'}
                    name="source"
                    value={inputValue.additionDetails.source}
                    handleChange={handleAdditionalChange}
                    className="bg-white border border-gray-300 p-3 mb-2 rounded-xl"
                    options={[
                      {
                        label: 'How did you hear about us?',
                        value: '',
                      },
                      {
                        label: 'Google',
                        value: 'google'
                      },
                      {
                        label: 'Social Media',
                        value: 'social',
                      },
                      {
                        label: 'Friend / Referral',
                        value: 'friend',
                      },
                      {
                        label: 'Ads',
                        value: 'ads',
                      },
                    ]}
                  />
                  {errors.source && <p className="text-red-500 text-xs">{errors.source}</p>}
                </div>

                {/* Start Date */}
                <InputField
                  label={'When do you want to get started?'}
                  type="date"
                  name="startFrom"
                  value={inputValue.additionDetails.startFrom}
                  handleChange={handleAdditionalChange}
                  className="bg-white border border-gray-300 p-3 mb-2 rounded-xl"
                  error={errors.startFrom}
                />

                {/* File */}
                <InputField
                  label={'Attachments'}
                  type="file"
                  name="file"
                  handleChange={handleFileUpload}
                  className="bg-white border border-gray-300 p-3 mb-2 rounded-xl"
                  error={errors.file}
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
              <div className='flex items-center gap-2 mt-[3rem]'>
                <input
                  type="checkbox"
                  checked={inputValue.termsAndCondition}
                  onChange={() =>
                    setInputValue((prev) => ({
                      ...prev,
                      termsAndCondition: !prev.termsAndCondition,
                    }))
                  }
                />
                <p className='text-[14px]'>I agree to the processing of personal data according to the Privacy Policy.</p>
              </div>
              {errors.agreed && <p className="text-red-500 text-xs mt-2">{errors.agreed}</p>}

              {/* Button */}
              <div className={`flex gap-2 lg:gap-4 mt-[7rem]`}>
                <button
                  disabled={loading}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                  onClick={handleClick}
                  className={`px-[2rem] bg-black text-white flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[60px] py-[0.75rem] font-montserrat text-xxs font-medium transition-all duration-300 ease-out active:scale-95 xl:text-xs 1366:text-[14px] 1400:text-[18px] 1470:text-[18px] 1600:text-[18px] 1680:text-[18px] hover:bg-[#FB9100]
                    } `}
                >
                  {loading ? 'Submitting...' : 'Get a Quote'}
                  <IoIosArrowRoundForward
                    size={25}
                    className={`${isHover ? 'rotate-[360deg] transition-all duration-300 ease-out active:scale-95' : 'rotate-[310deg]'}`}
                  />
                </button>
              </div>

            </div>
          </div>

          <div className='absolute right-0 bottom-0'>
            <Image src={BottomPerson} alt='Person Image' width={336} height={431} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetEnquiryModal;