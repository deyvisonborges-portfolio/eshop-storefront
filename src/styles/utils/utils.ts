import cssUtils from "./index.module.scss";

export type UtilsStyles = "select-none" | "font-bold";

export function mapUtilities(utilities?: UtilsStyles[]): string[] {
  if (!Array.isArray(utilities)) return [];
  return utilities.map((utility) => cssUtils[utility]);
}