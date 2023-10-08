export default function Pill({ label }) {
  return (
    <span className="whitespace-nowrap items-center rounded-full bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-600 print:bg-white print:border-solid print:border-2">
      {label}
    </span>
  );
}
