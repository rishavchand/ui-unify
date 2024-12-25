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
    <Tabs defaultValue={tab1Name} className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger
          value={tab1Name}
          className="rounded-b-none data-[state=active]:bg-muted data-[state=active]:border-b-2 data-[state=active]:border-b-active dark:data-[state=active]:bg-dark-muted dark:data-[state=active]:border-b-dark-active"
        >
          {tab1Name}
        </TabsTrigger>
        <TabsTrigger
          value={tab2Name}
          className="rounded-b-none data-[state=active]:bg-muted data-[state=active]:border-b-2 data-[state=active]:border-b-active dark:data-[state=active]:bg-dark-muted dark:data-[state=active]:border-b-dark-active"
        >
          {tab2Name}
        </TabsTrigger>
      </TabsList>
      <TabsContent value={tab1Name}>{tab1Content}</TabsContent>
      <TabsContent value={tab2Name}>{tab2Content}</TabsContent>
    </Tabs>
  );
}
