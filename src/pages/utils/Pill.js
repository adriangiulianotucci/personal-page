export default function Pill({ key, label }) {
  return (
    <span
      key={key}
      className="whitespace-nowrap items-center rounded-full bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-600 print:bg-white print:border-solid print:border-2"
    >
      {label}
    </span>
  );
}
