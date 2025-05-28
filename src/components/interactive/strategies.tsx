import type { ui } from "@/i18n/ui";
import { useTranslations } from "@/lib/utils";
import { BadgeCheck, ChartSpline, FileCode, Users } from "lucide-react";
import { useCallback } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import TabContentCard from "./tab-content-card";

const icons = {
  production: FileCode,
  data: ChartSpline,
  empowerment: Users,
  advocacy: BadgeCheck,
};

type Props = {
  lang: keyof typeof ui;
  content: {
    value: string;
    bulletList: string[];
    title: string;
  }[];
};

export default function Strategies({ lang, content }: Props) {
  const t = useCallback(useTranslations(lang), [lang]);

  return (
    <Tabs defaultValue="production" className="mt-16 gap-0 md:gap-8">
      <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 gap-1 p-1">
        {content.map(({ value }, index) => {
          const Icon = icons[value as keyof typeof icons];
          return (
            <TabsTrigger key={value} value={value}>
              {Icon && <Icon />}
              <p className="hidden md:block">
                {t(`strategies.tab${index + 1}`)}
              </p>
            </TabsTrigger>
          );
        })}
      </TabsList>
      {content.map(({ value, bulletList, title }) => {
        const Icon = icons[value as keyof typeof icons];
        return (
          <TabContentCard
            key={value}
            value={value}
            icon={Icon && <Icon className="text-grey-100 size-8" />}
            bulletList={bulletList}
            title={title}
          />
        );
      })}
    </Tabs>
  );
}
