import { BadgeCheck, ChartSpline, Cpu, FileCode, Users } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import TabContentCard from "./tab-content-card";

export default function Strategies() {
  return (
    <Tabs defaultValue="adoption" className="mt-16 gap-0 md:gap-8">
      <TabsList className="w-full grid grid-cols-2 md:grid-cols-5 gap-1 p-1">
        <TabsTrigger value="adoption" className="py-1.5">
          <Cpu />
          <p className="hidden md:block">Adoção</p>
        </TabsTrigger>
        <TabsTrigger value="production">
          <FileCode />
          <p className="hidden md:block">Produção</p>
        </TabsTrigger>
        <TabsTrigger value="data">
          <ChartSpline />
          <p className="hidden md:block">Dados</p>
        </TabsTrigger>
        <TabsTrigger value="empowerment">
          <Users />
          <p className="hidden md:block">Empoderamento</p>
        </TabsTrigger>
        <TabsTrigger value="advocacy" className="col-span-2 md:col-span-1">
          <BadgeCheck />
          <p className="hidden md:block">Advocacia</p>
        </TabsTrigger>
      </TabsList>
      <TabContentCard
        value="adoption"
        icon={<Cpu size={32} className="text-grey-100" />}
        bulletList={[
          "Investimento em Inteligência Artificial (IA) para personalização de conteúdo e análise de dados do público.",
          "Uso de Blockchain para autenticação e proteção de informações.",
          "Desenvolvimento de plataformas interativas que combinam vídeo, áudio e realidade aumentada.",
        ]}
        title="Adoção de Tecnologia de Ponta"
      />
    </Tabs>
  );
}
