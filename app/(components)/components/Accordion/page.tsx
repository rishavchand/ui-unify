import H1 from '@/components/ui/heading';
import P2 from '@/components/ui/Paragraph';
import P1 from '@/components/ui/Paragraph1';
import { CodePreview } from '@/components/ui/CodePreview';

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
      <div className="mt-4 w-full max-h-full overflow-auto">
        <CodePreview
          tab1Content={
            <div>
              <AccordionDemo />
            </div>
          }
          tab2Content={
            <div className="">
              <CodeBlockDemo
                code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
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
