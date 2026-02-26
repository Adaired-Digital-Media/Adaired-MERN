import React from "react";

const MaxWidthWrapper: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <section
      className={`${className} mx-auto box-border w-[95%] lg:w-[90%] xl:w-[83%]`}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
