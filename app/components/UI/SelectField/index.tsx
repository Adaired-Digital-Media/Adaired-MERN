import React from 'react';
import { CgAsterisk } from 'react-icons/cg';

export interface SelectFieldProps {
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
  label?: string;
  className?: string;
  error?: string;
}

const labelClass = "flex text-black font-semibold mb-2 uppercase";

const SelectField = ({
  name,
  value,
  handleChange,
  options,
  placeholder,
  label,
  className,
  error,
}: any) => {
  return (
    <div className='relative'>
      {label && <span className={labelClass}>{label} <CgAsterisk color='red' /></span>}
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className={`${className} w-full text-[15px] rounded-[0.5rem] bg-[#F8F8F8] px-4 py-3 font-normal text-black outline-none placeholder:text-[#A3A3A3] focus:border-[#000000] `}
      // className={`${className} w-full`}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}

        {options?.map((opt: any, idx: number) => (
          <option key={idx} value={opt?.value || opt?._id}>
            {opt?.label || opt?.name}
          </option>
        ))}
      </select>
      {error && (
        <span className="absolute left-0 top-[4.5rem] py-2 z-20 w-fit text-[12px] text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};

export default SelectField;
