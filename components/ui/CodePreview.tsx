import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TabsProps {
  tab1Name: string;
  tab1Content: React.ReactNode;
  tab2Name: string;
  tab2Content: React.ReactNode;
}

export function CodePreview({
  tab1Name,
  tab1Content,
  tab2Name,
  tab2Content,
}: TabsProps) {
  return (
    <Tabs defaultValue={tab1Name} className="overflow-hidden h-full">
      <TabsList className="flex w-full justify-start border-b border-gray-300 dark:border-gray-700">
        <TabsTrigger
          value={tab1Name}
          className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-b-blue-500 dark:data-[state=active]:border-b-blue-400 data-[state=active]:rounded-none"
        >
          {tab1Name}
        </TabsTrigger>
        <TabsTrigger
          value={tab2Name}
          className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-b-blue-500 dark:data-[state=active]:border-b-blue-400 data-[state=active]:rounded-none"
        >
          {tab2Name}
        </TabsTrigger>
      </TabsList>
      <div className="mt-8 border max-h-96 border-gray-300 dark:border-gray-700 rounded-lg ">
        <TabsContent className="p-4  max-h-96 overflow-auto " value={tab1Name}>
          {tab1Content}
        </TabsContent>
        <TabsContent className="p-4 max-h-96 overflow-auto " value={tab2Name}>
          {tab2Content}
        </TabsContent>
      </div>
    </Tabs>
  );
}
