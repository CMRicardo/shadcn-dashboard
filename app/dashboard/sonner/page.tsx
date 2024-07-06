"use client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Page() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            position: "top-right",
            description: new Date().toLocaleDateString(),
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Event has been created", {
            position: "top-right",
            description: new Date().toLocaleDateString(),
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show success Toast
      </Button>
    </div>
  );
}
