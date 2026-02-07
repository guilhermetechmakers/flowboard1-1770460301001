import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileJson, FileSpreadsheet } from "lucide-react";

export function DashboardImportPage() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="space-y-8 animate-in-up">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Import / Export</h1>
        <p className="mt-1 text-foreground-secondary">
          Data ingestion and content export
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Import</CardTitle>
            <CardDescription>
              Upload CSV or JSON. Map columns and validate.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div
              className="flex flex-col items-center justify-center rounded-input border-2 border-dashed border-muted bg-surface p-12 transition-colors hover:border-primary/50"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const f = e.dataTransfer.files[0];
                if (f) setFile(f);
              }}
            >
              <Upload className="h-12 w-12 text-foreground-secondary" />
              <p className="mt-2 text-sm font-medium">Drop file here or click to upload</p>
              <p className="text-xs text-foreground-secondary">
                CSV, JSON up to 10MB
              </p>
              <Button variant="outline" size="sm" className="mt-4">
                Choose file
              </Button>
            </div>
            {file && (
              <p className="text-sm text-foreground-secondary">
                Selected: {file.name}
              </p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Export</CardTitle>
            <CardDescription>
              Export as PNG, PDF, CSV, or JSON
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <FileSpreadsheet className="h-4 w-4 mr-2" />
              Export as PNG
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <FileSpreadsheet className="h-4 w-4 mr-2" />
              Export as PDF
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <FileJson className="h-4 w-4 mr-2" />
              Export as JSON
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <FileSpreadsheet className="h-4 w-4 mr-2" />
              Export as CSV
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
