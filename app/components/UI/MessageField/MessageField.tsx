import React from 'react';

export interface MessageFieldProps {
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  rows?: number;
  error?: string;
}

const MessageField = ({
  name,
  value,
  handleChange,
  placeholder,
  className,
  rows,
  error,
}: MessageFieldProps) => {
  return (
    <div className='relative'>
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
