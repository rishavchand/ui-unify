import H1 from '@/components/ui/heading';
import P2 from '@/components/ui/Paragraph';
import P1 from '@/components/ui/Paragraph1';
import React from 'react';

const page = () => {
  return (
    <div className='md:px-20 px-4'>
      <div className='flex flex-col md:space-y-2 space-y-1'>
      <H1 H1="Accordion" />
      <div className='flex flex-col md:space-y-1'>
      <P1
        P1="A vertically stacked set of interactive headings that each reveal a
        section of content."
      />
      <P2 Lib="shadcn/ui" />
      </div>
      </div>
    </div>
  );
};

export default page;
