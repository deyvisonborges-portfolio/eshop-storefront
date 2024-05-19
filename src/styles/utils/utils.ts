import cssUtils from "./index.module.scss";

export type UtilsStyles =
  | "select-none"
  | "font-bold"
  | "touchable"
  | "gap-8"
  | undefined;

export function mapUtilities(utilities: UtilsStyles[]): string[] {
  if (!Array.isArray(utilities)) return [];
  return utilities.map((utility) => {
    if (utility !== undefined) return cssUtils[utility];
    return "";
  });
}
