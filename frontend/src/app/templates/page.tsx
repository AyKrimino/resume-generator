"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTemplate } from "@/context/TemplateContext";
import { templates } from "@/data/templates";
import Link from "next/link";

export default function Templates() {
  const { setCurrentTemplateBySlug } = useTemplate();
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center flex-wrap gap-6 md:gap-8 py-8 px-4">
      {templates.map((template, index) => (
        <Card
          key={index}
          className="w-full max-w-sm overflow-hidden transition-all duration-150 hover:shadow-xl hover:-translate-y-1 border border-gray-200"
        >
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-bold text-gray-900">
              {template.name}
            </CardTitle>
            <CardDescription className="text-gray-600 mt-1">
              {template.description}
            </CardDescription>

            <Link
              href={template.authorWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3"
            >
              <h3 className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-150">
                Author:{" "}
                <span className="hover:underline cursor-pointer">
                  {template.author}
                </span>
              </h3>
            </Link>

            <CardAction className="mt-4">
              <Button
                variant="link"
                className="text-blue-600 hover:text-blue-800 p-0"
              >
                <Link
                  onClick={() => setCurrentTemplateBySlug(template.slug)}
                  href="/"
                  className="font-medium"
                >
                  Use This Template
                </Link>
              </Button>
            </CardAction>
          </CardHeader>

          <CardContent className="p-0 relative">
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
              <img
                src={template.previewPath}
                alt={`${template.name} preview`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <div className="px-4 pt-4 pb-4">
              <div className="flex flex-wrap gap-2">
                {template.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
