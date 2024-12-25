import H1 from '@/components/ui/heading';
import P2 from '@/components/ui/Paragraph';
import P1 from '@/components/ui/Paragraph1';
import { Tab } from '@/components/ui/Tab';

import React from 'react';
import { AccordionDemo } from '../preview/AccordianDemo';
import { Snippet } from '@nextui-org/snippet';
import { CodeBlockDemo } from '@/components/ui/Codeblock';

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
      <div className="mt-4 w-full  h-96 overflow-auto">
        <Tab
          tab1Name="Preview"
          tab1Content={
            <div>
              <AccordionDemo />
            </div>
          }
          tab2Name="Code"
          tab2Content={
            <div className="">
              <CodeBlockDemo
                code={`const DummyComponent = () => {
  const [count, setCount] = React.useState(0);
 
  const handleClick = () => {
    setCount(prev => prev + 1);
  };
 
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
      <p className="mb-2">Fight Club Fights Count: {count}</p>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};
`}
                filename="DummyComponent.tsx"
                highlightLines={[]}
              />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default page;
