import Image from "next/image";

type Props = {
  /** Path under /public, e.g. "/projects/powersell.png". When omitted, a
   *  CSS-only placeholder is rendered using the project name as the badge. */
  image?: string;
  name: string;
};

/**
 * Renders the project thumbnail used in both the editorial row and the
 * read-more modal. The container around this component (`.proj-item .thumb`
 * for rows, `.proj-modal-thumb` for the modal) sets the aspect ratio and
 * size — this component fills it via next/image.
 */
export function ProjectMock({ image, name }: Props) {
  if (image) {
    return (
      <>
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 1024px) 160px, (max-width: 1600px) 220px, 280px"
          style={{
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </>
    );
  }

  // CSS-only placeholder for projects without a hero screenshot.
  return (
    <div className="mock-fallback" aria-hidden>
      <div className="mock-grid-bg" />
      <span className="mock-fallback-name">{name}</span>
    </div>
  );
}
