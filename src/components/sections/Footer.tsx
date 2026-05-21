import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="watermark" aria-hidden>
        {site.name.split(" ")[0]}.
      </div>
      <div className="wrap">
        <div className="row">
          <span>
            © {year} {site.name}
          </span>
          <span>Built and designed in {site.location.city} — handcrafted, not assembled.</span>
          <a href="#top">back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
