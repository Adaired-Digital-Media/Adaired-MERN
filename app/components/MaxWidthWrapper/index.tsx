import { cn } from '@core/utils/class-names';
import React from 'react';

const MaxWidthWrapper: React.FC<{
  className?: string;
  customPaddingRight?: number;
  customPaddingLeft?: number;
  isRowReverse?: boolean;
  children: React.ReactNode;
  style?: any;
}> = ({
  className,
  customPaddingRight,
  customPaddingLeft,
  isRowReverse,
  children,
  style,
}) => {
  const getPadding = (value?: number) =>
    value !== undefined ? `${value}%` : '8.5%';

  return (
    <section
      className={cn('mx-auto box-border', className)}
      style={{
        paddingRight: isRowReverse
          ? getPadding(customPaddingLeft)
          : getPadding(customPaddingRight),

        paddingLeft: isRowReverse
          ? getPadding(customPaddingRight)
          : getPadding(customPaddingLeft),

        ...style,
      }}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
