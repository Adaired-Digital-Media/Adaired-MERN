import Image from 'next/image';
import React from 'react';
import map from '../../../../public/assets/icons/map.png';
import call from '../../../../public/assets/icons/call.png';
import mail from '../../../../public/assets/icons/mail.png';
import Link from 'next/link';

export interface IFooterTop {
  icon: any;
  name: String;
  description: String;
  path: any;
}
const data = [
  {
    icon: map,
    name: 'Find Us',
    description: 'B-509, 5th Floor, Bestech Business Towers,',
    path: 'https://maps.app.goo.gl/CEMtUbQd1246YQ3c7',
  },
  {
    icon: call,
    name: 'Call Us',
    description: '91-8907300008',
    path: 'tel:+91-8907300008',
  },
  {
    icon: mail,
    name: 'Mail Us',
    description: 'info@adaired.com',
    path: 'mailto:info@adaired.com',
  },
];
const FooterTop = () => {
  return (
    // <div className="grid w-full grid-cols-1 lg:grid-cols-4">
    //   {data?.map((item: IFooterTop, idx) => {
    //     return (
    //       <div
    //         className={`${item?.name === 'Find Us' && 'col-span-2'} flex gap-3 py-2`}
    //       >
    //         <Link
    //           key={idx}
    //           href={item?.path}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <Image
    //             src={item?.icon}
    //             width={50}
    //             height={45}
    //             alt="icon"
    //             className="mb-auto"
    //           />
    //         </Link>

    //         <div>
    //           <p className="text-[18px] text-white">{item?.name}</p>
    //           <Link
    //             key={idx}
    //             href={item?.path}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <p className="pt-1 text-left text-[20px] font-[600] leading-7 text-white">
    //               {item?.description}
    //             </p>
    //             <p className="cursor-pointer pt-1 text-[20px] font-[600] leading-7 text-white">
    //               {item?.name === 'Find Us'
    //                 ? 'Sector 66, SAS Nagar, Punjab 160066'
    //                 : ''}
    //             </p>
    //           </Link>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
    <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {data?.map((item: IFooterTop, idx) => {
        return (
          <div
            key={idx}
            className={`flex items-start gap-4 ${
              item?.name === 'Find Us' ? 'md:col-span-2 lg:col-span-2' : ''
            } `}
          >
            {/* Icon Wrapper */}
            <div className="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center">
              <Image
                src={item?.icon}
                width={124}
                height={124}
                alt="icon"
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-left text-[18px] text-white">{item?.name}</p>

              <Link
                key={idx}
                href={item?.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="pt-1 text-left text-[20px] font-semibold leading-7 text-white">
                  {item?.description} <br className="hidden md:block" />{' '}
                  {item?.name === 'Find Us' &&
                    'Sector 66, SAS Nagar, Punjab 160066'}
                </p>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FooterTop;
