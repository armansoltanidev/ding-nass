import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

export default function Services() {
  return (
    <Card className="p-4">
      <CardHeader className="px-1">
        <CardTitle className="relative flex items-center gap-x-1.5">
          <div className="flex size-2">
            <span className="relative inline-flex size-2 rounded-full bg-secondary" />
          </div>
          <span className="font-light">خدمات پرکاربرد</span>
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="flex items-center justify-between">
        
      </CardContent>
    </Card>
  );
}
