'use client';
export const dynamic = 'force-dynamic';
import {
  AwardsSectionData,
  FAQSSectionData,
  SolutionsSectionData,
} from '@/@core/data/website/Homepage';

import About from '../../components/home/About';
import Certificate from '../../components/home/Certificate';
import Services from '../../components/home/Service';
import Expect from '../../components/home/Expect';
import WhyChoose from '../../components/home/WhyChoose';
import Testimonial from '../../components/home/Testimonial';
import Contact from '../../components/home/Contact';
import Blogs from '../../components/home/Blogs';
import PageBanner from '@/app/components/PageBanner';
import FAQ from '../../components/home/FAQ';
import Solutions from '../../components/home/Solutions';
import Clients from '../../components/home/Clients';
import Banner from '@/app/components/Banner';


export default function Home() {
  return (
    <>
      <Banner />
      <Certificate />
      <Solutions data={SolutionsSectionData} />
      <Services />
      <Expect />
      <Clients />
      <WhyChoose />
      <About />
      <Testimonial />
      <Contact />
      <Blogs />
      <FAQ faqs={FAQSSectionData} />
    </>
  );
}
