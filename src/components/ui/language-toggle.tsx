import { useTranslation } from "@/providers/language-provider";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex items-center gap-0.5 border rounded-md overflow-hidden shrink-0">
      <button
        onClick={() => setLanguage("id")}
        className={cn(
          "px-2 py-1 text-xs font-medium transition-colors cursor-pointer",
          language === "id"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        ID
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "px-2 py-1 text-xs font-medium transition-colors cursor-pointer",
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        EN
      </button>
    </div>
  );
}
