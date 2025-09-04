export default function FeatureList() {
    const features = [
      "Ökologisch & materialbewusst",
      "Schnelle & zuverlässige Umsetzung",
      "Handwerk auf Augenhöhe",
      "Individuelle Lösungen",
    ];
  
    return (
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand-primary" />
            {f}
          </li>
        ))}
      </ul>
    );
  }