'use client';

export default function PageHero({ title, description }: { title: string, description?: string }) {
  return (
    <section 
      className="pt-[140px] pb-[80px] text-white rounded-b-[35px] text-center"
      style={{
        background: 'linear-gradient(180deg, #0284c7 0%, #38bdf8 60%, #7dd3fc 100%)'
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="font-extrabold text-4xl md:text-5xl tracking-tight mb-4">{title}</h1>
        {description && (
          <p className="text-white/90 text-lg max-w-2xl mx-auto">{description}</p>
        )}
      </div>
    </section>
  );
}
