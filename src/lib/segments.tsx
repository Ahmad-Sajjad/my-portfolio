import { Fragment, type ReactNode } from "react";
import type { TextSegment } from "@/types/portfolio";

/**
 * Render a `TextSegment[]` to React: plain strings stay as text,
 * `{ em }` segments become `<em>` with the design's italic-accent style
 * (driven by CSS, e.g. `.section-title em`, `.hero h1 em`).
 *
 * Pass into headings / quotes / sentences instead of dangerouslySetInnerHTML.
 */
export function renderSegments(segments: TextSegment[]): ReactNode {
  return segments.map((s, i) =>
    typeof s === "string" ? (
      <Fragment key={i}>{s}</Fragment>
    ) : (
      <em key={i}>{s.em}</em>
    ),
  );
}
