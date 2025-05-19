import { defaultLang, languages } from "@/i18n/ui";
import { ChevronDown, Languages } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function LanguageSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          popoverTarget="languages"
          size="icon"
          variant="ghost"
          className="p-0 h-auto w-full md:w-auto"
        >
          <Languages />
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        {Object.entries(languages).map(([code, name]) => (
          <DropdownMenuItem key={code}>
            <a
              className="hover:text-primary duration-300"
              href={code == defaultLang ? "/" : `/${code}`}
            >
              {name}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
