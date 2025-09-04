export default function QuoteCard({ quote, name }: { quote: string; name: string }) {
    return (
      <figure className="rounded-2xl border border-emerald-200 bg-white p-5">
        <blockquote className="text-gray-700">“{quote}”</blockquote>
        <figcaption className="mt-3 text-sm font-medium text-gray-900">– {name}</figcaption>
      </figure>
    );
  }