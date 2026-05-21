import type { TextSegment } from "@/types/portfolio";
import { renderSegments } from "@/lib/segments";

type Props = {
  index: string;
  eyebrow: string;
  title: TextSegment[];
  meta?: string;
  titleId?: string;
};

export function SectionHead({ index, eyebrow, title, meta, titleId }: Props) {
  return (
    <div className="section-head">
      <div>
        <div className="eyebrow">
          {index} · {eyebrow}
        </div>
        <h2 className="section-title" id={titleId}>
          {renderSegments(title)}
        </h2>
      </div>
      {meta && <div className="meta">{meta}</div>}
    </div>
  );
}
