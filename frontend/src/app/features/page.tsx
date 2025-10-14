import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Features() {
  return (
    <main className="px-4 sm:px-6 lg:px-8">
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Create professional resumes in minutes
        </h1>
        <h3 className="text-xl font-medium">
          Pick a template, live-preview changes, and export clean PDFs — no
          design skills required.
        </h3>
        <div className="flex flex-col items-center justify-center">
          <Link className="hover:text-blue-700 underline text-base" href="/">
            Create Your Resume
          </Link>
          <Link
            className="hover:text-blue-700 underline text-base"
            href="/templates"
          >
            See Templates
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Easy Resume Builder (live preview)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-3">
              Build and edit your resume with instant visual feedback. See every
              change update live as you type — no need to reload or reformat.
            </p>
            <span className="text-blue-600 font-medium">
              Example: &quot;Real-time editing experience&quot;
            </span>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <CardTitle>Multiple Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-3">
              Choose from a variety of clean, modern templates designed to fit
              different professional styles — from developers to designers.
            </p>

            <span className="text-blue-600 font-medium">
              Example: &quot;Professional designs&quot;
            </span>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <CardTitle>Markdown Export</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-3">
              Export your entire resume as Markdown for easy versioning or
              customization in any text editor.
            </p>

            <span className="text-blue-600 font-medium">
              Example: &quot;Perfect for developers who love plain text&quot;
            </span>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <CardTitle>HTML Export</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-3">
              Generate a standalone HTML version of your resume that preserves
              your layout and styling — ideal for personal portfolio hosting.
            </p>
            <span className="text-blue-600 font-medium">
              Example: &quot;Embed directly into your website&quot;
            </span>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <CardTitle>Download as PDF or Markdown</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-3">
              Download your resume in multiple formats with one click. Keep a
              printable PDF or a lightweight Markdown version for editing.
            </p>
            <span className="text-blue-600 font-medium">
              Example: &quot;Flexible export options&quot;
            </span>
          </CardContent>
        </Card>
      </section>

      <section className="bg-blue-50 rounded-3xl p-8 text-center mb-6">
        <h2 className="text-2xl font-semibold mb-4">Why Choose This Tool?</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Built for developers and professionals alike — intuitive to use,
          backed by a simple API for PDF generation, and designed to make resume
          building fast and maintainable.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-150 ease-in-out"
        >
          Start Building Your Resume
        </Link>
      </section>
    </main>
  );
}
