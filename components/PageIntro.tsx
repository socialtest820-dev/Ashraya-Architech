type PageIntroProps = {
  eyebrow: string;
  title: string;
  lede?: string;
};

export default function PageIntro({ eyebrow, title, lede }: PageIntroProps) {
  return (
    <section className="pageIntro">
      <p className="eyebrow" data-reveal>
        {eyebrow}
      </p>
      <div className="pageIntroGrid">
        <h1 className="h1" data-reveal style={{ "--d": 1 } as React.CSSProperties}>
          {title}
        </h1>
        {lede && (
          <p className="lede" data-reveal style={{ "--d": 2 } as React.CSSProperties}>
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
