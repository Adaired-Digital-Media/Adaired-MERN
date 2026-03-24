'use client';

import { IoClose } from 'react-icons/io5';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import validators from '@/@core/utils/validators';
import axios from 'axios';
import { BaseURL } from '@/app/baseUrl';
import Heading from '../../common/Heading';
import { GiCheckMark } from "react-icons/gi";
import { IoIosArrowRoundForward } from 'react-icons/io';
import { GoPlus } from "react-icons/go";
import BottomPerson from '../../../../public/assets/popup/bottom-person.png';

interface GetEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetEnquiryModal = ({ isOpen, onClose }: GetEnquiryModalProps) => {
  const router = useRouter();

  const [isHover, setIsHover] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [file, setFile] = useState<File | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

  const labelClass = "text-[16px] text-black font-semibold mb-2 uppercase";
  const fields = [
    { name: 'name', label: 'Name' },
    { name: 'email', label: 'Email' },
    { name: 'phone', label: 'Phone Number' },
    { name: 'website', label: 'Website Url' },
  ]

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: '',
    range: '',
    referral: '',
    startDate: '',
    services: '',
    file: '',
    agreed: '',
  });

  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: '',
    range: '',
    referral: '',
    startDate: '',
    services: '',
    file: '',
    agreed: '',
  });

  if (!isOpen) return null;

  const servicesList = [
    "Search Engine Optimization",
    "Frontend & Backend Development",
    "E-Commerce",
    "Social Media Management",
    "Mobile App Development",
    "Pay Per Click",
    "Link Building",
    "Local SEO",
    "CMS",
    "AI SEO",
  ];

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    if (name === 'phone' && !/^\d*$/.test(value)) return;

    if (name === 'file') {
      setFile(files?.[0] || null);
      return;
    }

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (validators[name as keyof typeof validators]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validators[name as keyof typeof validators](value),
      }));
    }
  };

  const toggleService = (service: string) => {
    setSelected((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const validateForm = () => {
    const newErrors = {
      name: inputValue.name ? '' : 'Name is required',
      email: validators.email(inputValue.email),
      phone: validators.phone(inputValue.phone),
      website: inputValue.website ? '' : 'Enter a valid website URL',
      message: inputValue.message ? '' : 'Message is required',
      range: inputValue.range ? '' : 'Please select budget',
      referral: inputValue.referral ? '' : 'Please select referral',
      startDate: inputValue.startDate ? '' : 'Select start date',
      services: selected.length > 0 ? '' : 'Select at least one service',
      file: file ? '' : 'Please upload a file',
      agreed: agreed ? '' : 'You must accept privacy policy',
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((err) => err === '');
  };

  const handleClick = async () => {
    if (loading) return;


    if (!validateForm()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setLoading(true);

    try {

      // const payload = {
      //   name: inputValue.name,
      //   email: inputValue.email,
      //   phone: inputValue.phone,
      //   website: inputValue.website,
      //   message: inputValue.message,
      //   range: inputValue.range,
      //   referral: inputValue.referral,
      //   startDate: inputValue.startDate,
      //   gRecaptchaToken: token,
      // };

      const formData = new FormData();

      Object.entries(inputValue).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      formData.append('services', JSON.stringify(selected));

      if (file) formData.append('file', file);

      const response = await fetch('/api/zoho/leadRegister', {
        method: 'POST',
        // headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify(payload),
        body: formData,
      });

      if (!response.ok) throw new Error('Submission failed');

      await axios.post(`${BaseURL}/mail/send`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setInputValue({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: '',
        range: '',
        referral: '',
        startDate: '',
        services: '',
        file: '',
        agreed: '',
      });

      setSelected([]);
      setFile(null);
      setAgreed(false);

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
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-50 rounded-3xl bg-white shadow-xl md:w-[95%] lg:w-[70%] max-h-[90vh] overflow-y-auto no-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          <IoClose size={22} />
        </button>

        {/* Modal Content */}
        <div className="relative flex justify-center gap-3 px-[10rem] pt-[4rem] pb-[0.5rem] -z-10">
          <div className="w-full">
            <Heading
              headingParts={[
                {
                  text: 'Let’s Talk',
                  color: '#000000',
                  weight: 700,
                },
                {
                  text: 'About Your Goals',
                  color: '#FB9100',
                  weight: 700,
                },
              ]}
              isInCenter={true}
            />
            <p className="text-center text-[15px] font-medium text-[#323232]">
              Find performance gaps limiting your website’s visibility and effectiveness.
            </p>

            {/* Inputs */}
            < div className='bg-[#F9F9F9] p-[4rem] rounded-3xl my-[4rem]' >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8">
                {fields.map((field) => (
                  <div key={field.name} className="flex flex-col">
                    <label className={labelClass}>
                      {field.label} *
                    </label>
                    <input
                      name={field.name}
                      value={(inputValue as any)[field.name]}
                      onChange={handleChange}
                      placeholder={`Enter your ${field.label.toLowerCase()}...`}
                      className="bg-white border border-gray-300 p-3 mb-2 rounded-[6px]"
                      required
                    />
                    {['name', 'email', 'phone', 'website'].includes(field.name) &&
                      errors[field.name as keyof typeof errors] && (
                        <p className="text-red-500 text-xs">
                          {errors[field.name as keyof typeof errors]}
                        </p>
                      )}
                  </div>
                ))}
              </div>

              {/* Services */}
              <div className="space-y-4 mb-8">
                <p className='uppercase font-semibold my-4'>Services Required *</p>
                <div className="flex flex-wrap gap-3">
                  {servicesList.map((service) => {
                    const isSelected = selected.includes(service);
                    return (
                      <div
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`flex items-center justify-between gap-[3rem] px-4 py-2 rounded-[6px] cursor-pointer border transition-all
                            ${isSelected
                            ? "bg-[#FB9100] text-white border-[#FB9100]"
                            : "bg-white text-black border-gray-300"
                          }`}
                      >
                        <p className={`text-[14px] ${isSelected ? 'text-white' : 'text-black'}`}>
                          {service}
                        </p>

                        {isSelected ? (
                          <GiCheckMark size={16} />
                        ) : (
                          <GoPlus size={16} />
                        )}
                      </div>
                    );
                  })}
                  {errors.services && (
                    <p className="text-red-500 text-xs mt-2">{errors.services}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <p className='uppercase font-semibold my-4'>Project Details *</p>
              <textarea
                name={'message'}
                value={inputValue.message}
                rows={6}
                onChange={handleChange}
                placeholder="Tell us about your Project goals , timeline , and any specific requirements..."
                className="bg-white border border-gray-300 w-full rounded-[6px] p-4 mb-4"
              />
              {errors.message && (
                <p className="text-red-500 text-xs">{errors.message}</p>
              )}

              {/* Selects */}
              <p className='uppercase font-semibold my-4'>Additional Details *</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-6 border border-gray-300 rounded-[6px] bg-white mb-4">

                <div className="flex flex-col">
                  <label className="text-[16px] text-black font-semibold mb-2 uppercase">Select your budget range *</label>
                  <select
                    name="range"
                    value={inputValue.range}
                    onChange={handleChange}
                    required
                    className="bg-white border border-gray-300 p-3 mb-2 rounded-xl"
                  >
                    <option value="">Select Range</option>
                    <option value="0-10k">0 - 10k</option>
                    <option value="10k-50k">10k - 50k</option>
                    <option value="50k+">50k+</option>
                  </select>
                  {errors.range && (
                    <p className="text-red-500 text-xs">{errors.range}</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="text-[16px] text-black font-semibold mb-2 uppercase">How did you hear about us? *</label>
                  <select
                    name="referral"
                    value={inputValue.referral}
                    onChange={handleChange}
                    required
                    className="bg-white border border-gray-300 p-3 mb-2 rounded-xl"
                  >
                    <option value="">How did you hear about us?</option>
                    <option value="google">Google</option>
                    <option value="social">Social Media</option>
                    <option value="friend">Friend / Referral</option>
                    <option value="ads">Ads</option>
                  </select>
                  {errors.referral && (
                    <p className="text-red-500 text-xs">{errors.referral}</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="text-[16px] text-black font-semibold mb-2 uppercase">When do you want to get started? *</label>
                  <input
                    type="date"
                    name="startDate"
                    value={inputValue.startDate}
                    onChange={handleChange}
                    required
                    className="bg-white border border-gray-300 p-3 mb-2 rounded-xl"
                  />
                  {errors.startDate && (
                    <p className="text-red-500 text-xs">{errors.startDate}</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="text-[16px] text-black font-semibold mb-2 uppercase">Attachments *</label>
                  <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    required
                    className="bg-white border border-gray-300 p-3 mb-2 rounded-xl"
                  />
                  {errors.file && (
                    <p className="text-red-500 text-xs">{errors.file}</p>
                  )}
                </div>
              </div>

              {/* Checkbox */}
              <div className='flex items-center gap-2 mt-[3rem]'>
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => {
                    setAgreed(prev => {
                      setErrors(prevErr => ({ ...prevErr, agreed: '' }));
                      return !prev;
                    });
                  }}
                  className="w-4 h-4 cursor-pointer"
                />
                <p className='text-[14px]'>
                  I agree to the processing of personal data according to the Privacy Policy.
                </p>
              </div>

              {errors.agreed && (
                <p className="text-red-500 text-xs ml-6">{errors.agreed}</p>
              )}

              {/* Submit */}
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
            <Image
              src={BottomPerson}
              alt='Person Image'
              width={336}
              height={431}
            />
          </div>
        </div>
      </div>
    </div >
  );
};

export default GetEnquiryModal;