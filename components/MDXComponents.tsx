import React from "react";
import { Terminal, Info, CheckCircle2, AlertCircle, Zap } from "lucide-react";

export const Callout = ({
  type = "info",
  children,
}: {
  type?: string;
  children: React.ReactNode;
}) => {
  const styles = {
    info: {
      bg: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-l-4 border-blue-500",
      text: "text-blue-900 dark:text-blue-200",
      icon: "text-blue-600 dark:text-blue-400",
      Icon: Info,
    },
    success: {
      bg: "bg-green-50 dark:bg-green-950/30",
      border: "border-l-4 border-green-500",
      text: "text-green-900 dark:text-green-200",
      icon: "text-green-600 dark:text-green-400",
      Icon: CheckCircle2,
    },
    warning: {
      bg: "bg-yellow-50 dark:bg-yellow-950/30",
      border: "border-l-4 border-yellow-500",
      text: "text-yellow-900 dark:text-yellow-200",
      icon: "text-yellow-600 dark:text-yellow-400",
      Icon: AlertCircle,
    },
    tip: {
      bg: "bg-purple-50 dark:bg-purple-950/30",
      border: "border-l-4 border-purple-500",
      text: "text-purple-900 dark:text-purple-200",
      icon: "text-purple-600 dark:text-purple-400",
      Icon: Zap,
    },
  };

  const style = styles[type as keyof typeof styles] || styles.info;
  const Icon = style.Icon;

  return (
    <div
      className={`${style.bg} ${style.border} rounded-r-lg p-4 my-6 flex gap-3 backdrop-blur-sm transition-all hover:shadow-md`}
    >
      <Icon size={20} className={`flex-shrink-0 ${style.icon}`} />
      <div className={`text-sm md:text-base font-medium ${style.text}`}>
        {children}
      </div>
    </div>
  );
};

export const CodeBlock = ({ title, code }: { title: string; code: string }) => (
  <div className="my-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 shadow-2xl font-sans transition-all hover:shadow-3xl">
    <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-800 dark:to-slate-900 border-b border-slate-600 dark:border-slate-700">
      <div className="flex gap-2 items-center">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>
        <Terminal size={14} className="text-slate-400 ml-2" />
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
          {title}
        </span>
      </div>
    </div>
    <pre className="p-4 overflow-x-auto text-sm text-slate-100 font-mono scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800">
      <code>{code}</code>
    </pre>
  </div>
);
