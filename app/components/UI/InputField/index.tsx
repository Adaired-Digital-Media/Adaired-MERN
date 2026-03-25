import React from 'react';
import { CgAsterisk } from 'react-icons/cg';
export interface InputFieldProps {
  type?: string;
  name?: string;
  value?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  maxLength?: number;
  label?: string;
  error?: string;
  required?: boolean;
}
const labelClass = "flex text-black font-semibold mb-2 uppercase";

export const star = {
  value: '*',
};
const InputField = ({
  type,
  name,
  value,
  handleChange,
  placeholder,
  className,
  maxLength,
  label,
  error,
  required,
}: InputFieldProps) => {
  const dsp = false;
  return (
    <div className="relative">
      {label && <span className={labelClass}>{label} <CgAsterisk color='red' /></span>
      }
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        className={`${className} w-full text-[15px] rounded-[0.5rem] bg-[#F8F8F8] px-4 py-3 font-normal text-[#000000] outline-none placeholder:text-[#323232B2] focus:border-[#000000]`}
        placeholder={`${placeholder} ${required ? '*' : ''}`}
      />
      {error && (
        <span className="absolute left-0 top-[4.5rem] py-2 z-20 w-fit text-[12px] text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputField;
