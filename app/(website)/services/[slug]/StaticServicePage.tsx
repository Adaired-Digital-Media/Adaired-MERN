'use client';

import React, { JSX } from 'react';

import Banner from './Banner';
import GetsCredit from './GetsCredit';
import SEOPackages from './SeoPackages';
import KeyStats from './KeyStats';
import WhatAreService from './WhatAreService';
import NeedOfAdaired from './NeedOfAdaired';
import DataInTable from './DataInTable';
import BenefitofAiSEO from './BenefitofAiSEO';
import AdairedServiceResult from './AdairedServiceResult';
import NotSeeingResults from './NotSeeingResults';
import AdairedHelp from './AdairedHelp';
import BookAConsultation from './BookAConsultation';
import IndustryLeaders from './IndustryLeaders';
import Stopstruggling from './Stopstruggling';
import LeadingTools from './LeadingTools';
import WhatMakesAdaired from './WhatMakesAdaired';
import OurProcess from './OurProcess';
import TechStackMobile from './TechStackMobile';
import WhatIncluded from './WhatIncluded';
import IndustriesWeServe from './IndustriesWeServe';
import DominateAI from './DominateAI';
import ReadyToStart from './ReadyToStart';
import ImportantToBussiness from './ImportantToBussiness';
import AreYouTired from './AreYouTired';
import FAQ from '@/app/components/home/FAQ';

import { SERVICES_DATA } from './data';
import WhatMissing from './WhatMissing';
import NotFound from '@/app/components/not-found';

export type ServiceSlug = keyof typeof SERVICES_DATA;

export type SectionKey =
  | 'banner'
  | 'getsCredit'
  | 'seopackages'
  | 'keyStats'
  | 'areYouTired'
  | 'whatareservice'
  | 'whatareservice2'
  | 'needofservice'
  | 'needofservice2'
  | 'dataInTable'
  | 'importantToBussiness'
  | 'benefitofAiSeo'
  | 'serviceResult'
  | 'notSeeingResult'
  | 'adairedHelp'
  | 'buildlinks'
  | 'leadingTools'
  | 'industryOrLeadingTools'
  | 'whatIncluded'
  | 'ourProcess'
  | 'techStackMobile'
  | 'whatMissing'
  | 'stopStruggling'
  | 'whatMkeDeferent'
  | 'industriesWeServe'
  | 'leadingToolsForPerformence'
  | 'getplan'
  | 'faqData'
  | 'readyToStart';

type SectionRenderer = (serviceData: any) => JSX.Element | null;

const sectionRenderer: Record<SectionKey, SectionRenderer> = {
  banner: (serviceData) =>
    serviceData.banner?.isVisible ? (
      <Banner banner={serviceData.banner} />
    ) : null,

  getsCredit: (serviceData) =>
    serviceData.getsCredit?.isVisible ? (
      <GetsCredit getsCredit={serviceData.getsCredit} />
    ) : null,

  seopackages: (serviceData) =>
    serviceData.seopackages?.isVisible ? (
      <SEOPackages seopackages={serviceData.seopackages} />
    ) : null,


  keyStats: (serviceData) =>
    serviceData.keyStats?.isVisible ? (
      <KeyStats keyStats={serviceData.keyStats} />
    ) : null,

  areYouTired: (serviceData) =>
    serviceData.areYouTired?.isVisible ? (
      <AreYouTired areYouTired={serviceData.areYouTired} />
    ) : null,


  whatareservice: (serviceData) =>
    serviceData.whatareservice?.isVisible ? (
      <WhatAreService whatareaiseo={serviceData.whatareservice} />
    ) : null,

  whatareservice2: (serviceData) =>
    serviceData.whatareservice2?.isVisible ? (
      <WhatAreService whatareaiseo={serviceData.whatareservice2} />
    ) : null,

  needofservice: (serviceData) =>
    serviceData.needofservice?.isVisible ? (
      <NeedOfAdaired needOfService={serviceData.needofservice} />
    ) : null,

  needofservice2: (serviceData) =>
    serviceData.needofservice2?.isVisible ? (
      <NeedOfAdaired needOfService={serviceData.needofservice2} />
    ) : null,

  dataInTable: (serviceData) =>
    serviceData.dataInTable?.isVisible ? (
      <DataInTable dataInTable={serviceData.dataInTable} />
    ) : null,

  importantToBussiness: (serviceData) =>
    serviceData.importantToBussiness?.isVisible ? (
      <ImportantToBussiness
        importantToBussiness={serviceData.importantToBussiness}
      />
    ) : null,

  benefitofAiSeo: (serviceData) =>
    serviceData.benefitofAiSeo?.isVisible ? (
      <BenefitofAiSEO benefitofAiSeo={serviceData.benefitofAiSeo} />
    ) : null,

  buildlinks: (serviceData) =>
    serviceData.buildlinks?.isVisible ? (
      <BookAConsultation buildlinks={serviceData.buildlinks} />
    ) : null,

  serviceResult: (serviceData) =>
    serviceData.serviceResult?.isVisible ? (
      <AdairedServiceResult aiseoResult={serviceData.serviceResult} />
    ) : null,

  notSeeingResult: (serviceData) =>
    serviceData.notSeeingResult?.isVisible ? (
      <NotSeeingResults notSeeingResult={serviceData.notSeeingResult} />
    ) : null,

  adairedHelp: (serviceData) =>
    serviceData.adairedHelp?.isVisible ? (
      <AdairedHelp adairedHelp={serviceData.adairedHelp} />
    ) : null,

  industryOrLeadingTools: (serviceData) =>
    serviceData.industryLeaders?.isVisible ? <IndustryLeaders industryLeaders={serviceData.industryLeaders} /> : null,

  leadingTools: (serviceData) =>
    serviceData.leadingTools?.isVisible ? (
      <LeadingTools leadingTools={serviceData?.leadingTools} />
    ) : null,

  whatIncluded: (serviceData) =>
    serviceData.whatIncluded?.isVisible ? (
      <WhatIncluded whatIncluded={serviceData.whatIncluded} />
    ) : null,

  ourProcess: (serviceData) =>
    serviceData.ourProcess?.isVisible ? (
      <OurProcess ourProcess={serviceData.ourProcess} />
    ) : null,

  techStackMobile: (serviceData) =>
    serviceData.techStackMobile?.isVisible ? (
      <TechStackMobile techStackMobile={serviceData.techStackMobile} />
    ) : null,

  whatMissing: (serviceData) =>
    serviceData.whatMissing?.isVisible ? (
      <WhatMissing whatMissing={serviceData.whatMissing} />
    ) : null,

  stopStruggling: (serviceData) =>
    serviceData.stopStruggling?.isVisible ? (
      <Stopstruggling stopStruggling={serviceData.stopStruggling} />
    ) : null,

  whatMkeDeferent: (serviceData) =>
    serviceData.whatMkeDeferent?.isVisible ? (
      <WhatMakesAdaired whatMkeDeferent={serviceData.whatMkeDeferent} />
    ) : null,

  industriesWeServe: (serviceData) =>
    serviceData.industriesWeServe?.isVisible ? (
      <IndustriesWeServe industriesWeServe={serviceData.industriesWeServe} />
    ) : null,

  leadingToolsForPerformence: (serviceData) =>
    serviceData.leadingToolsForPerformence?.isVisible ? (
      <LeadingTools leadingTools={serviceData.leadingToolsForPerformence} />
    ) : null,

  getplan: (serviceData) =>
    serviceData.getplan?.isVisible ? (
      <DominateAI getplan={serviceData.getplan} />
    ) : null,

  faqData: (serviceData) =>
    serviceData.faqData?.isVisible ? <FAQ faqs={serviceData.faqData} /> : null,

  readyToStart: () => <ReadyToStart />,
};

type StaticServicePageProps = {
  serviceData: (typeof SERVICES_DATA)[keyof typeof SERVICES_DATA];
};
const StaticServicePage = ({ serviceData }: StaticServicePageProps) => {
  console.log(serviceData,"serviceData>>>>>>>>>>>>>")
  if (!serviceData) {
    return <NotFound />;
  }

  return (
    <div>
      {serviceData.sectionsOrder.map((sectionKey, index) => (
        <React.Fragment key={`${sectionKey}-${index}`}>
          {sectionRenderer[sectionKey](serviceData)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StaticServicePage;
