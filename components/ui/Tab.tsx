import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TabsProps {
  tab1Name: string;
  tab1Content: React.ReactNode;
  tab2Name: string;
  tab2Content: React.ReactNode;
}

export function Tab({
  tab1Name,
  tab1Content,
  tab2Name,
  tab2Content,
}: TabsProps) {
  return (
    <Tabs defaultValue={tab1Name} className="overflow-hidden">
      <TabsList className="flex w-auto overflow-hidden justify-start">
        <TabsTrigger
          value={tab1Name}
          className="px-4 py-2 rounded-t-md data-[state=active]:bg-muted data-[state=active]:border-b-2   data-[state=active]:border-b-active dark:data-[state=active]:bg-dark-muted dark:data-[state=active]:border-b-dark-active"
        >
          {tab1Name}
        </TabsTrigger>
        <TabsTrigger
          value={tab2Name}
          className="px-4 py-2 rounded-t-md data-[state=active]:bg-muted data-[state=active]:border-b-2 data-[state=active]:border-b-active dark:data-[state=active]:bg-dark-muted dark:data-[state=active]:border-b-dark-active"
        >
          {tab2Name}
        </TabsTrigger>
      </TabsList>
      <div className="overflow-auto h-full">
        <TabsContent className="p-4" value={tab1Name}>
          {tab1Content}
        </TabsContent>
        <TabsContent className="p-4" value={tab2Name}>
          {tab2Content}
        </TabsContent>
      </div>
    </Tabs>
  );
}
