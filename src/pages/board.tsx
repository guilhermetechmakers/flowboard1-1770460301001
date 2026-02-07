import { useParams } from "react-router-dom";
import {
  MousePointer2,
  Hand,
  Link2,
  Square,
  LayoutGrid,
  Undo2,
  Redo2,
  ZoomIn,
  ZoomOut,
  Grid3X3,
  Sparkles,
  Users,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const nodeTypes = [
  { type: "text", icon: Square, label: "Text" },
  { type: "link", icon: Link2, label: "Research link" },
  { type: "file", icon: Square, label: "File" },
  { type: "image", icon: Square, label: "Image" },
  { type: "task", icon: Square, label: "Task" },
  { type: "table", icon: LayoutGrid, label: "Table" },
  { type: "code", icon: Square, label: "Code" },
  { type: "note", icon: Square, label: "Note" },
];

const mockNodes = [
  { id: "1", x: 100, y: 100, title: "Research Topic", type: "text" },
  { id: "2", x: 300, y: 100, title: "Key Findings", type: "text" },
  { id: "3", x: 200, y: 250, title: "Next Steps", type: "task" },
];

export function BoardPage() {
  const { id } = useParams();

  return (
    <div className="fixed inset-0 flex flex-col bg-surface pt-16">
      {/* Toolbar */}
      <div className="flex items-center gap-1 border-b border-muted bg-background px-4 py-2">
        <Button variant="ghost" size="icon-sm">
          <MousePointer2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon-sm">
          <Hand className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon-sm">
          <Link2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon-sm">
          <Square className="h-4 w-4" />
        </Button>
        <div className="mx-2 h-4 w-px bg-muted" />
        <Button variant="ghost" size="icon-sm">
          <LayoutGrid className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon-sm">
          <Undo2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon-sm">
          <Redo2 className="h-4 w-4" />
        </Button>
        <div className="mx-2 h-4 w-px bg-muted" />
        <Button variant="ghost" size="icon-sm">
          <ZoomOut className="h-4 w-4" />
        </Button>
        <span className="text-xs text-foreground-secondary">100%</span>
        <Button variant="ghost" size="icon-sm">
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon-sm">
          <Grid3X3 className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Canvas */}
        <div className="relative flex-1 overflow-auto bg-muted/30">
          <div
            className="min-h-[800px] min-w-[1200px] p-8"
            style={{
              backgroundImage: `radial-gradient(rgb(230, 233, 238) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          >
            {mockNodes.map((node) => (
              <Card
                key={node.id}
                className="absolute w-48 cursor-pointer transition-all hover:shadow-card-hover"
                style={{ left: node.x, top: node.y }}
              >
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-foreground-secondary">
                      {node.type}
                    </span>
                  </div>
                  <h4 className="mt-1 font-semibold text-sm">{node.title}</h4>
                  <p className="mt-1 text-xs text-foreground-secondary line-clamp-2">
                    Double-click to edit content...
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Node types palette */}
        <div className="w-12 border-l border-muted bg-background py-2 flex flex-col items-center gap-1">
          {nodeTypes.map(({ icon: Icon, label }) => (
            <Button
              key={label}
              variant="ghost"
              size="icon"
              title={label}
              className="h-8 w-8"
            >
              <Icon className="h-4 w-4" />
            </Button>
          ))}
        </div>

        {/* Right sidebar - AI & Inspector */}
        <div className="hidden w-80 border-l border-muted bg-background lg:block">
          <div className="flex h-full flex-col">
            <div className="border-b border-muted p-3">
              <h3 className="font-semibold flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                AI Agent
              </h3>
              <p className="mt-1 text-sm text-foreground-secondary">
                Get summaries, suggestions, and generate content
              </p>
            </div>
            <div className="flex-1 overflow-auto p-3">
              <p className="text-sm text-foreground-secondary">
                Select a node to see AI suggestions, or ask a question below.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar - collaboration & version */}
      <div className="flex items-center justify-between border-t border-muted bg-background px-4 py-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon-sm">
            <Users className="h-4 w-4" />
          </Button>
          <span className="text-sm text-foreground-secondary">
            Project {id ?? "new"}
          </span>
          <Button variant="ghost" size="sm">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>
        <div className="text-xs text-foreground-secondary">
          Version history
        </div>
      </div>
    </div>
  );
}
