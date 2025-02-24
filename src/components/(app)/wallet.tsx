import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

export default function Wallet() {
  return (
    <Card className="p-4">
      <CardHeader className="px-1">
        <CardTitle className="relative flex items-center gap-x-2">
          <div className="flex size-2">
            <span className="relative inline-flex size-2 rounded-full bg-secondary" />
          </div>
          <span>موجودی کیف پول شما</span>
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="flex items-center justify-between">
        <div className="flex flex-col gap-y-1.5">
          <span className="text-muted-foreground text-xs">مبلغ موجودی:</span>
          <div className="flex items-center gap-x-1.5">
            <p className="text-2xl text-foreground">۱,۴۵۴,۱۵۴</p>
            <span className="text-xs">تومانءء</span>
          </div>
        </div>
        <Button className="self-end">افزایش موجودی</Button>
      </CardContent>
    </Card>
  );
}
