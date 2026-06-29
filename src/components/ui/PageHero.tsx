interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
}

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="brand-gradient-bg pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {label && (
          <p className="text-sm font-semibold uppercase tracking-widest text-warm-gold">
            {label}
          </p>
        )}
        <h1 className="font-heading mt-2 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-white/70">{description}</p>
        )}
      </div>
    </section>
  );
}
