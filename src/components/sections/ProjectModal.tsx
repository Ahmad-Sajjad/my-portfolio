"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/types/portfolio";
import { ProjectMock } from "./ProjectMock";

type Props = {
  project: Project | null;
  onClose: () => void;
};

/**
 * Read-more dialog for a project row. Renders into `document.body`
 * via portal, locks page scroll while open, restores focus on close,
 * supports Escape + backdrop click + the X button.
 *
 * Designed to feel editorial — same tokens as the rest of the page,
 * no rounded-corners-and-drop-shadow modal chrome.
 */
export function ProjectModal({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const open = project !== null;

  useEffect(() => {
    if (!open) return;

    lastFocused.current = document.activeElement as HTMLElement | null;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);

    // Stop Lenis so the page doesn't scroll behind the modal.
    type LenisLike = { stop?: () => void; start?: () => void };
    const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
    lenis?.stop?.();
    document.documentElement.classList.add("lenis-stopped");

    // Defer focus until after the portal mounts.
    const id = window.setTimeout(() => closeRef.current?.focus(), 30);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(id);
      document.documentElement.classList.remove("lenis-stopped");
      lenis?.start?.();
      lastFocused.current?.focus?.();
    };
  }, [open, onClose]);

  if (!project) return null;

  return createPortal(
    <div
      className="proj-modal-back open"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="proj-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="proj-modal-title"
        data-lenis-prevent
      >
        <button
          ref={closeRef}
          type="button"
          className="proj-modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M6 6l12 12" />
            <path d="M18 6L6 18" />
          </svg>
        </button>

        <div className="proj-modal-thumb">
          <ProjectMock image={project.image} name={project.name} />
        </div>

        <div className="proj-modal-body">
          <div className="proj-modal-meta">
            <span>{project.year}</span>
            <span className="dot">·</span>
            <span>{project.role}</span>
            <span className="dot">·</span>
            <span className="cat">{project.category}</span>
            {project.status === "archived" && (
              <>
                <span className="dot">·</span>
                <span className="archived">archived</span>
              </>
            )}
            {project.platforms && project.platforms.length > 0 && (
              <>
                <span className="dot">·</span>
                <span>{project.platforms.join(" · ")}</span>
              </>
            )}
          </div>

          <h3 id="proj-modal-title" className="proj-modal-title">
            {project.name}
          </h3>

          <p className="proj-modal-desc">
            {project.longDescription ?? project.description}
          </p>

          <div className="proj-modal-stack">
            {project.stack.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <div className="proj-modal-foot">
            {project.status === "archived" ? (
              <span className="visit muted">Archived — no longer live</span>
            ) : project.url !== "#" ? (
              <a
                className="visit"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit project <span aria-hidden>↗</span>
              </a>
            ) : (
              <span className="visit muted">
                {project.metric ?? "No public link"}
              </span>
            )}
            <span className="modal-hint">esc to close</span>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
