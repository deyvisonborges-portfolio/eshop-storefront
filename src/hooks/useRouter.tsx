import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter as useAppRouter } from "next/navigation";
import { useRouter as usePageRouter } from "next/router";
import { useCallback, useMemo } from "react";

export function useNavigation() {
  const pageRouter = usePageRouter();
  const appRouter = useAppRouter();

  const onRouteRedirect = useCallback((route: string, options?: any) => {
    return appRouter.push("", options);
  }, []);

  return useMemo(() => {
    return { onRouteRedirect };
  }, []);
}
