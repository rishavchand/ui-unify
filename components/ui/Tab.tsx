import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3 ">
        <TabsTrigger
          value="account"
          className="rounded-b-none data-[state=active]:bg-muted data-[state=active]:border-b-2 data-[state=active]:border-b-active dark:data-[state=active]:bg-dark-muted dark:data-[state=active]:border-b-dark-active"
        >
          Account
        </TabsTrigger>
        <TabsTrigger
          value="password"
          className="rounded-b-none data-[state=active]:bg-muted data-[state=active]:border-b-2 data-[state=active]:border-b-active dark:data-[state=active]:bg-dark-muted dark:data-[state=active]:border-b-dark-active"
        >
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p>hey</p>
      </TabsContent>
      <TabsContent value="password">
        <p>hey2</p>
      </TabsContent>
    </Tabs>
  );
}
