import React from 'react';
import { CgAsterisk } from "react-icons/cg";

export interface MessageFieldProps {
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  rows?: number;
  label?: string;
  error?: string;
  required?: boolean;
}

const labelClass = "flex text-black font-semibold mb-2 uppercase";

const MessageField = ({
  name,
  value,
  handleChange,
  placeholder,
  className,
  rows,
  label,
  error,
  required,
}: MessageFieldProps) => {
  return (
    <div className='relative'>
      {label && (
        <span className={labelClass}>
          {label} {required && <CgAsterisk color="red" />}
        </span>
      )}
      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`${className} w-full text-[15px] rounded-[0.5rem] bg-[#F8F8F8] px-4 py-3 font-normal text-[#000000] outline-none placeholder:text-[#323232B2] focus:border-[#000000]`}
        rows={rows ?? 5}
      />
      {error && (
        <span className="absolute left-0 top-[13rem] py-2 z-20 w-fit text-[12px] text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};

export default MessageField;
