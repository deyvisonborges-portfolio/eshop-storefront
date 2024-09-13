import { useQuery, useQueryClient } from "@tanstack/react-query";

export function createQueryGlobalState<T>(
  queryKey: unknown[],
  initialData: T | null
) {
  return function () {
    const queryClient = useQueryClient();
    const { data } = useQuery({
      queryKey: [queryKey],
      queryFn: () => Promise.resolve(initialData),
    });

    return data;
  };
}
