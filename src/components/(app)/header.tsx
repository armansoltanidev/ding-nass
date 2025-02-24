import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="flex gap-x-2">
      <Button variant="outline" className="flex-2">
        آرمان سلطانی
        <span className="text-muted-foreground text-xs">۰۹۱۲۲۴۷۳۱۸۵</span>
      </Button>
      <Button variant="outline" className="flex-1">
        باشگاه مشتریان
      </Button>
    </header>
  );
}
