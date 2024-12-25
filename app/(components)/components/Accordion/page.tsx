import H1 from '@/components/ui/heading';
import P2 from '@/components/ui/Paragraph';
import P1 from '@/components/ui/Paragraph1';
import { Tab } from '@/components/ui/Tab';

import React from 'react';
import { AccordionDemo } from '../preview/AccordianDemo';
import { Snippet } from '@nextui-org/snippet';

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
      <div className="mt-4">
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
              <Snippet symbol="">
                <span>{`import {`}</span>
                <span>{`  Accordion,`}</span>
                <span>{`  AccordionContent,`}</span>
                <span>{`  AccordionItem,`}</span>
                <span>{`  AccordionTrigger,`}</span>
                <span>{`} from "@/components/ui/accordion"`}</span>
                <span>{``}</span>
                <span>{`export function AccordionDemo() {`}</span>
                <span>{`  return (`}</span>
                <span>{`    <Accordion type="single" collapsible className="w-full">`}</span>
                <span>{`      <AccordionItem value="item-1">`}</span>
                <span>{`        <AccordionTrigger>Is it accessible?</AccordionTrigger>`}</span>
                <span>{`        <AccordionContent>`}</span>
                <span>{`          Yes. It adheres to the WAI-ARIA design pattern.`}</span>
                <span>{`        </AccordionContent>`}</span>
                <span>{`      </AccordionItem>`}</span>
                <span>{`      <AccordionItem value="item-2">`}</span>
                <span>{`        <AccordionTrigger>Is it styled?</AccordionTrigger>`}</span>
                <span>{`        <AccordionContent>`}</span>
                <span>{`          Yes. It comes with default styles that matches the other`}</span>
                <span>{`          components&apos; aesthetic.`}</span>
                <span>{`        </AccordionContent>`}</span>
                <span>{`      </AccordionItem>`}</span>
                <span>{`      <AccordionItem value="item-3">`}</span>
                <span>{`        <AccordionTrigger>Is it animated?</AccordionTrigger>`}</span>
                <span>{`        <AccordionContent>`}</span>
                <span>{`          Yes. It&apos;s animated by default, but you can disable it if you`}</span>
                <span>{`          prefer.`}</span>
                <span>{`        </AccordionContent>`}</span>
                <span>{`      </AccordionItem>`}</span>
                <span>{`    </Accordion>`}</span>
                <span>{`  )}`}</span>
              </Snippet>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default page;
