import { Link } from "react-router";
import { buttonVariants } from "@/components/ui/button";
import { gutter } from "@/lib/layout";

const NotFoundScreen = () => {
  return (
    <div className={`mt-16 ${gutter}`}>
      <p className="text-sm tabular-nums text-muted-foreground sm:mt-2 sm:text-right">
        404
      </p>
      <div className="min-w-0 max-w-sm">
        <h1 className="font-reading text-[1.75rem] leading-[1.15] tracking-[-0.01em]">
          Page not found
        </h1>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className={buttonVariants({ variant: "outline" })}>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundScreen;