"use client";

import { useEffect, useState } from "react";

/**
 * Live clock for Asia/Karachi (PKT, UTC+5, no DST). Re-renders every
 * second. Returns SSR-safe placeholders on first render to avoid
 * hydration mismatch — the visible value updates immediately on mount.
 */
export function useLahoreTime() {
  const [state, setState] = useState<{
    time: string;
    day: string;
    hour: number;
    ready: boolean;
  }>({ time: "--:--:--", day: "---", hour: 0, ready: false });

  useEffect(() => {
    const fmtTime = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Karachi",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const fmtDay = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Karachi",
      weekday: "short",
    });
    const fmtHour = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Karachi",
      hour: "2-digit",
      hour12: false,
    });

    const tick = () => {
      const now = new Date();
      setState({
        time: fmtTime.format(now),
        day: fmtDay.format(now).toUpperCase(),
        hour: parseInt(fmtHour.format(now), 10),
        ready: true,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return state;
}
