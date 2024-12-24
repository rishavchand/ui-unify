import H1 from '@/components/ui/heading';
import P2 from '@/components/ui/Paragraph';
import P1 from '@/components/ui/Paragraph1';
import { TabsDemo } from '@/components/ui/Tab';

import React from 'react';

const page = () => {
  const exampleTabs = [
    { label: 'Tab 1', content: <div>Content for Tab 1</div> },
    { label: 'Tab 2', content: <div>Content for Tab 2</div> },
  ];

  return (
    <div className="md:px-20 px-4">
      <div className="flex flex-col md:space-y-2 space-y-1">
        <H1 H1="Accordion" />
        <div className="flex flex-col md:space-y-1">
          <P1
            P1="A vertically stacked set of interactive headings that each reveal a
        section of content."
          />
          <P2 Lib="shadcn/ui" />
        </div>
      </div>
      <div className='mt-4'>
       <TabsDemo/>
      </div>
    </div>
  );
};

export default page;
