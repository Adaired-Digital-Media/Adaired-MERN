import React from 'react';
import { notFound } from 'next/navigation';
import PageBanner from '@/app/components/PageBanner';
import NavigationMenu from '@/app/components/UI/NavigationMenu';
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';

// import CTA from '@web-components/PageDynamicSections/CTA';
// import FaqSection from '@web-components/PageDynamicSections/FaqSection';
// import StickyScroll from '@web-components/PageDynamicSections/StickyScrollSection';
// import ImageWithIconbox from '@web-components/PageDynamicSections/ImageWithIconboxSection';
// import KeyFeatureListLayout from '@web-components/PageDynamicSections/KeyFeatureListLayout';
// import TwoColumnFeatureSection from '@web-components/PageDynamicSections/TwoColumnFeatureSection';

import { BaseURL } from '@/app/baseUrl';

interface ApiServicePageProps {
  slug: string;
}

const fetchService = async (slug: string) => {
  try {
    const res = await fetch(`${BaseURL}/service/${slug}`, {
      next: { revalidate: 60 },
    });

    // if (!res.ok) return null;

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const ApiServicePage = async ({ slug }: ApiServicePageProps) => {
  const fetchedService = await fetchService(slug);

  if (!fetchedService) {
    notFound();
  }

  const { bodyData } = fetchedService?.data;

  return (
    <>
      <PageBanner title={fetchedService?.data?.serviceName} />

      <div className="space-y-12 pb-20 md:space-y-24">
        {bodyData?.map((data: any) => {
          switch (data.componentName) {
            case 'TwoColumnFeatureSection':
              return (
                <MaxWidthWrapper key={data.componentName}>
                  <div className="mt-12 flex gap-10">
                    <div className="w-full xl:w-[70%]">
                      {/* <TwoColumnFeatureSection
                        colorScheme={fetchedService?.data?.colorScheme}
                        data={data}
                      /> */}
                    </div>

                    <aside className="hidden w-[30%] xl:block">
                      <div className="sticky top-28 space-y-8">
                        {fetchedService?.data?.childServices?.length > 0 && (
                          <NavigationMenu
                            colorScheme={fetchedService?.data?.colorScheme}
                            serviceName={fetchedService?.data?.serviceName}
                            childServices={fetchedService?.data?.childServices}
                          />
                        )}
                        {/* <GetInTouchForm
                          colorScheme={fetchedService?.data?.colorScheme}
                        /> */}
                      </div>
                    </aside>
                  </div>
                </MaxWidthWrapper>
              );

            // case 'KeyFeatureCrossLayout':
            //   return (
            //     <MaxWidthWrapper key={data.componentName}>
            //       <KeyFeatureCrossLayout
            //         colorScheme={fetchedService?.data?.colorScheme}
            //         data={data}
            //       />
            //     </MaxWidthWrapper>
            //   );

            // case 'ImagewithDetailedFeatureDescription':
            //   return (
            //     <MaxWidthWrapper key={data.componentName}>
            //       <ImageWithDetailedFeatureDescription
            //         colorScheme={fetchedService?.data?.colorScheme}
            //         data={data.body}
            //       />
            //     </MaxWidthWrapper>
            //   );

            // case 'FAQ':
            //   return (
            //     <MaxWidthWrapper key={data.componentName}>
            //       <FaqSection faqs={data.body.faq ?? []} />
            //     </MaxWidthWrapper>
            //   );

            // case 'CallToAction':
            //   return (
            //     <MaxWidthWrapper key={data.componentName}>
            //       <CTA
            //         title={data.body.title}
            //         colorScheme={fetchedService?.data?.colorScheme}
            //       />
            //     </MaxWidthWrapper>
            //   );

            // case 'KeyFeatureListLayout':
            //   return (
            //     <MaxWidthWrapper key={data.componentName}>
            //       <KeyFeatureListLayout
            //         colorScheme={fetchedService?.data?.colorScheme}
            //         data={data.body}
            //       />
            //     </MaxWidthWrapper>
            //   );

            // case 'ServiceKeyFeaturesLayout':
            //   return (
            //     <ServiceKeyFeaturesLayout
            //       key={data.componentName}
            //       colorScheme={fetchedService?.data?.colorScheme}
            //       data={data.body}
            //     />
            //   );

            // case 'StickyScrollLayout':
            //   return (
            //     <StickyScroll
            //       key={data.componentName}
            //       colorScheme={fetchedService?.data?.colorScheme}
            //       data={data.body}
            //     />
            //   );

            // case 'ImageWithIconBoxList':
            //   return (
            //     <ImageWithIconbox
            //       key={data.componentName}
            //       colorScheme={fetchedService?.data?.colorScheme}
            //       data={data.body}
            //     />
            //   );

            default:
              return null;
          }
        })}
      </div>

      {fetchedService.bodyScript && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: fetchedService.bodyScript,
          }}
        />
      )}
    </>
  );
};

export default ApiServicePage;
