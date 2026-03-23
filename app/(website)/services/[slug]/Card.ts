import React from 'react';
import img_1 from '../../../../public/assets/aitools/Group 1000005558.svg';
import img_2 from '../../../../public/assets/aitools/Group 1000005566.svg';
import img_3 from '../../../../public/assets/aitools/Group 1000005571.svg';
import img_4 from '../../../../public/assets/aitools/Group 1000005578.svg';
import img_5 from '../../../../public/assets/aitools/Group 1000005587.svg';
import img_6 from '../../../../public/assets/aitools/Group 1000005766.svg';

export type CardData = {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
};

export const cards: CardData[] = [
  {
    icon: img_1,
    title: 'ChatGPT SEO',
    description: `We provide ChatGPT SEO solutions made to be AI discoverable. We ensure your content appears as a reliable, cited, and recommended source in the search results produced by the AI.\n
        Our strategy ensures cross-industry visibility, drives high-intent user engagement, and positions your content high in the AI search.`,
    linkText: 'Get Your Free AI SEO Audit',
    linkHref: '#',
  },

  {
    icon: img_2,
    title: 'Perplexity AI SEO',
    description: `Our Perplexity AI SEO service integrates the basics of SEO with answer-engine formatting to optimize your content for recognition, trust, and visibility with AI search engines. \n
        Through the combination of structured responses and content accessible to the AI, we enhance authority, engagement, and discoverability. This helps your brand appear in high-intent searches in the AI-based search results.`,
    linkText: 'Get Your Free AI SEO Audit',
    linkHref: '#',
  },

  {
    icon: img_3,
    title: 'Gemini AI SEO',
    description: `Our Gemini AI SEO services combine traditional SEO best practices with AI-first page structuring to make your content easily discoverable, cited, and trusted in Google's AI-powered Gemini search results. \n
        We ensure that your pages stand out as authoritative answers, boosting visibility, credibility, and user engagement in an increasingly AI-powered search landscape.`,
    linkText: 'Get Your Free AI SEO Audit',
    linkHref: '#',
  },

  {
    icon: img_4,
    title: 'Grok AI SEO',
    description: `Our Grok AI SEO helps to increase AI visibility, ensuring that insights are clear, authoritative, and easily discovered by Grok.   \n
        With the help of our strategies, your brand gains citation, trust, and recognition, gaining authority in your industry and maximizing content to provide answers using AI, high-intent traffic, and meaningful engagement.`,
    linkText: 'Get Your Free AI SEO Audit',
    linkHref: '#',
  },

  {
    icon: img_5,
    title: 'Answer Engine Optimization',
    description: `Being one of the leaders in Answer Engine Optimization, Adaired integrates search engine AI with SEO best practices to ensure your site is answerable on ChatGPT, Gemini, and Perplexity. \n
        We optimize content structure and relevance so that your pages gain recognition, credibility, and are continually surfaced by the AI-based search engines.`,
    linkText: 'Get Your Free AI SEO Audit',
    linkHref: '#',
  },

  {
    icon: img_6,
    title: 'Generative Engine Optimization',
    description: `Our Generative Engine Optimization services combine the basics of SEO with answer-based structuring, so that your content is easily found, cited, and surfaced by Gemini, Claude, and other AI engines. \n
        We position your brand as an authoritative source, boosting your visibility, trust, and engagement on AI-driven search engines, and optimize content to high-intent user search queries.`,
    linkText: 'Get Your Free AI SEO Audit',
    linkHref: '#',
  },
];
