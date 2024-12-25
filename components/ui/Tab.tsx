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
    <Tabs defaultValue={tab1Name} className="">
      <TabsList className="grid w-full grid-cols-3">
        <div className="flex flex-row mb-10">
          <TabsTrigger
            value={tab1Name}
            className="  w-40 rounded-b-none data-[state=active]:bg-muted data-[state=active]:border-b-2 data-[state=active]:border-b-active dark:data-[state=active]:bg-dark-muted dark:data-[state=active]:border-b-dark-active"
          >
            {tab1Name}
          </TabsTrigger>
          <TabsTrigger
            value={tab2Name}
            className=" w-40 rounded-b-none data-[state=active]:bg-muted data-[state=active]:border-b-2 data-[state=active]:border-b-active dark:data-[state=active]:bg-dark-muted dark:data-[state=active]:border-b-dark-active"
          >
            {tab2Name}
          </TabsTrigger>
        </div>
      </TabsList>
      <div className="border  p-4 rounded-md  border-slate-400 ">
        <TabsContent className=" " value={tab1Name}>
          {tab1Content}
        </TabsContent>
        <TabsContent className=" overflow-auto w-[1000px]" value={tab2Name}>
          {tab2Content}
        </TabsContent>
      </div>
    </Tabs>
  );
}
