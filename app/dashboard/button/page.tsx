import { Button } from "@/components/ui/button";
import { Loader2, Rocket, Send } from "lucide-react";

export default function ButtonPage() {
  return (
    <div className="grid md:grid-cols-5 gap-3">
      <Button>Default</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant={"destructive"}>destructive</Button>
      <Button variant={"link"}>link</Button>
      <Button variant={"outline"}>outline</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button disabled>disabled</Button>
      <Button capitalize={false} variant={"success"}>
        success
      </Button>
      <Button size={"icon"}>
        <Rocket />
      </Button>
      <Button>
        <Send className="mr-2" />
        Send an email
      </Button>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please be patient
      </Button>
    </div>
  );
}
