"use client";
import { templates } from "@/data/templates";
import { createContext, useContext, useEffect, useState } from "react";
import type { TemplateMeta } from "@/types/templates";
import type { ReactNode } from "react";

const LOCAL_STORAGE_KEY = "selectedTemplateSlug";

type TemplateContextValue = {
  currentTemplate: TemplateMeta;
  setCurrentTemplateBySlug: (slug: string) => void;
  setCurrentTemplate: (template: TemplateMeta) => void;
  templatesList: TemplateMeta[];
};

const TemplateContext = createContext<TemplateContextValue | null>(null);

const findDefaultTemplate = (): TemplateMeta => {
  const defaultOne = templates.find((template) => template.isDefault);
  if (defaultOne) return defaultOne;
  return templates[0];
};

export const TemplateProvider = ({ children }: { children: ReactNode }) => {
  const [templatesList] = useState<TemplateMeta[]>(templates);

  const [currentTemplate, setCurrentTemplate] = useState<TemplateMeta>(() => {
    return findDefaultTemplate();
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const found = templates.find((template) => template.slug === saved);
        if (found) {
          setCurrentTemplate(found);
        }
      }
    } catch (error) {
      console.log("template: failed to read localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, currentTemplate.slug);
    } catch (error) {
      console.log("template: failed to write localStorage", error);
    }

    const onStorage = (e: StorageEvent) => {
      if (e.key === LOCAL_STORAGE_KEY && typeof e.newValue === "string") {
        const found = templates.find(
          (template) => template.slug === e.newValue
        );
        if (found) setCurrentTemplate(found);
      }
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [currentTemplate]);

  const setCurrentTemplateBySlug = (slug: string) => {
    const found = templates.find((template) => template.slug === slug);
    if (found) setCurrentTemplate(found);
  };

  return (
    <TemplateContext.Provider
      value={{
        currentTemplate,
        setCurrentTemplate,
        setCurrentTemplateBySlug,
        templatesList,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplate = () => {
  const ctx = useContext(TemplateContext);
  if (!ctx)
    throw new Error("useTemplate must be used within a TemplateProvider");
  return ctx;
};

export default TemplateProvider;
