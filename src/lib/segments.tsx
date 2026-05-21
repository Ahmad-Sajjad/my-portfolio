import { Fragment, type ReactNode } from "react";
import type { TextSegment } from "@/types/portfolio";

/**
 * Render a `TextSegment[]` to React: plain strings stay as text,
 * `{ em }` segments become italic-accent `<em>`, `{ strong }` segments
 * become full-color `<strong>` (against an otherwise dimmed body).
 *
 * Pass into headings, paragraphs, and quotes instead of
 * dangerouslySetInnerHTML.
 */
export function renderSegments(segments: TextSegment[]): ReactNode {
  return segments.map((s, i) => {
    if (typeof s === "string") return <Fragment key={i}>{s}</Fragment>;
    if ("em" in s) return <em key={i}>{s.em}</em>;
    return <strong key={i}>{s.strong}</strong>;
  });
}
