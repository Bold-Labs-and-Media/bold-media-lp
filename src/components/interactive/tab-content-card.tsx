import type { ReactNode } from "react";
import { TabsContent } from "../ui/tabs";

type Props = {
  value: string;
  icon: ReactNode;
  bulletList: string[];
  title: string;
};

export default function TabContentCard({
  value,
  icon,
  bulletList,
  title,
}: Props) {
  return (
    <TabsContent
      value={value}
      className="rounded-md bg-white shadow-md p-6 space-y-6"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-full p-3 w-fit bg-primary/10">{icon}</div>
        <h3 className="text-grey-100 text-2xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-4">
        {bulletList.map((item, index) => (
          <li key={index} className="flex gap-3">
            <div className="size-5 bg-primary/10 rounded-full flex justify-center items-center">
              <div className="size-2 bg-primary rounded-full" />
            </div>
            <p className="flex-1">{item}</p>
          </li>
        ))}
      </ul>
    </TabsContent>
  );
}
