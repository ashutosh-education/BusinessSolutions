import { Copy } from "lucide-react";
import { Fira_Code } from "next/font/google";
import { useState } from "react";

const firaCode = Fira_Code({ subsets: ["latin"] });

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [showToast, setShowToast] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000); // Hide toast after 2 seconds
  };

  const cn = (...classes: (string | undefined | false)[]) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div className="relative rounded-lg border bg-card/50 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition"
          onClick={copyCode}
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>
      <pre className={cn("p-4 overflow-x-auto", firaCode.className)}>
        <code className="text-sm">{code}</code>
      </pre>
      {showToast && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm rounded-lg px-4 py-2 shadow-lg">
          <div className="font-medium">Copied to clipboard</div>
          <div className="text-gray-400">The code has been copied to your clipboard.</div>
        </div>
      )}
    </div>
  );
}
