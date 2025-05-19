import type { ui } from "@/i18n/ui";
import { useTranslations } from "@/lib/utils";
import { BadgeCheck, ChartSpline, Cpu, FileCode, Users } from "lucide-react";
import { useCallback } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import TabContentCard from "./tab-content-card";

type Props = {
  lang: keyof typeof ui;
};

export default function Strategies({ lang }: Props) {
  const t = useCallback(useTranslations(lang), [lang]);
  return (
    <Tabs defaultValue="adoption" className="mt-16 gap-0 md:gap-8">
      <TabsList className="w-full grid grid-cols-2 md:grid-cols-5 gap-1 p-1">
        <TabsTrigger value="adoption" className="py-1.5">
          <Cpu />
          <p className="hidden md:block">{t("strategies.tab1")}</p>
        </TabsTrigger>
        <TabsTrigger value="production">
          <FileCode />
          <p className="hidden md:block">{t("strategies.tab2")}</p>
        </TabsTrigger>
        <TabsTrigger value="data">
          <ChartSpline />
          <p className="hidden md:block">{t("strategies.tab3")}</p>
        </TabsTrigger>
        <TabsTrigger value="empowerment">
          <Users />
          <p className="hidden md:block">{t("strategies.tab4")}</p>
        </TabsTrigger>
        <TabsTrigger value="advocacy" className="col-span-2 md:col-span-1">
          <BadgeCheck />
          <p className="hidden md:block">{t("strategies.tab5")}</p>
        </TabsTrigger>
      </TabsList>
      <TabContentCard
        value="adoption"
        icon={<Cpu size={32} className="text-grey-100" />}
        bulletList={[
          t("strategies.value1-point1"),
          t("strategies.value1-point2"),
          t("strategies.value1-point3"),
        ]}
        title={t("strategies.value1-title")}
      />
    </Tabs>
  );
}
