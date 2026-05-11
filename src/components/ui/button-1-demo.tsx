import { Button } from "@/components/ui/button-1";

export default function RoundedDemo() {
  return (
    <div className="flex justify-between items-center gap-2">
      <Button shadow shape="rounded" size="small" type="secondary">
        Upload
      </Button>
      <Button shadow shape="rounded" type="secondary">
        Upload
      </Button>
      <Button shadow shape="rounded" size="large" type="secondary">
        Upload
      </Button>
    </div>
  );
}
