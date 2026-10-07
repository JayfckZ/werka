"use client";

// Rola até #contato (funciona mesmo sem JS) e avisa o formulário qual plano foi escolhido.
export default function PlanLink({ plan, className, children }: { plan: string; className?: string; children: React.ReactNode }) {
  return (
    <a
      href="#contato"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent("select-plan", { detail: plan }))}
    >
      {children}
    </a>
  );
}