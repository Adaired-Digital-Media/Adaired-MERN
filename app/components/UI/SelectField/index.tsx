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
}

const labelClass = "flex text-[16px] text-black font-semibold mb-2 uppercase";

const SelectField = ({
  name,
  value,
  handleChange,
  options,
  placeholder,
  label,
  className,
}: any) => {
  return (
    <div>
      {label && <label className={labelClass}>{label} <CgAsterisk color='red' /></label>
      }
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className={`${className} w-full rounded-[0.5rem] text-xxs xl:text-xs bg-[#F8F8F8] px-4 py-3 font-normal text-black outline-none placeholder:text-[#A3A3A3] focus:border-[#000000] `}
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
    </div>
  );
};

export default SelectField;
