"use client";

import { useLahoreTime } from "@/hooks/useLahoreTime";
import { site } from "@/data/site";

/**
 * The small mono-text overlay on the bottom-left of the about photo.
 * Client-only because the second line is the live Lahore clock.
 */
export function PhotoCorner() {
  const { time } = useLahoreTime();
  return (
    <div className="corner">
      <span>
        {site.monogram} · {site.location.city.slice(0, 3).toUpperCase()}
      </span>
      <span>{time}</span>
    </div>
  );
}
