import React from 'react';
import { ABOUT_DATA } from './aboutData';
// import Stopstruggling from '../services/[slug]/Stopstruggling';
// import AdairedServiceResult from '../services/[slug]/AdairedServiceResult';
import MeetTheFounderSection from './MeetTheFounder';
import HowItStarted from './HowItStarted';
import PeopleBehindWork from './PeopleBehindWork';
import IndustriesWeWorkWith from './IndustriesWeWorkWith';
import GrowingBrands from './GrowingBrands';
import Testimonial from '../../components/home/Testimonial';
// import ReadyToStart from '../services/[slug]/ReadyToStart';
import Solutions from '../../components/home/Solutions';
// import KeyStats from '../services/[slug]/KeyStats';
import AboutBanner from './AboutBanner';

const page = () => {
  return (
    <div>
      <AboutBanner banner={ABOUT_DATA?.banner}/>
      {/* {ABOUT_DATA?.stopStruggling && (
        <Stopstruggling stopStruggling={ABOUT_DATA?.stopStruggling} />
      )}
      {ABOUT_DATA?.serviceResult?.isVisible && (
        <AdairedServiceResult aiseoResult={ABOUT_DATA?.serviceResult} />
      )}
      {ABOUT_DATA?.keyStats?.isVisible && (
        <KeyStats keyStats={ABOUT_DATA?.keyStats} />
      )} */}
      <MeetTheFounderSection MeetTheFounder={ABOUT_DATA?.MeetTheFounder} />
      <HowItStarted howItStarted={ABOUT_DATA?.howItStarted} />
      <PeopleBehindWork peopleBehindWork={ABOUT_DATA?.peopleBehindWork} />
      <IndustriesWeWorkWith
        industriesWeWorkWith={ABOUT_DATA?.industriesWeWorkWith}
      />
      <Solutions data={ABOUT_DATA?.seeDifference} />
      <GrowingBrands />
      <Testimonial />
      {/* <ReadyToStart className="pt-[6rem]" /> */}
    </div>
  );
};

export default page;
