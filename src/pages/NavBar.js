import { useLangContext } from "./_app";
import "node_modules/flag-icons/css/flag-icons.min.css";

export default function NavBar() {
  const { lang, setLang } = useLangContext();

  return (
    <nav className="w-full bg-indigo-900 print:hidden">
      <div className="p-2 flex gap-2 justify-end">
        <button
          type="button"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={() => print()}
        >
          {lang === "ENG" ? "Print" : "Imprimir"}
        </button>
        <div className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className={`relative inline-flex items-center rounded-l-md px-3 py-2 text-sm font-semibold text-gray-900 ${
              lang === "ESP" ? "bg-indigo-200" : "bg-white"
            }`}
            onClick={() => setLang("ESP")}
          >
            <span className="fi fi-es" />
          </button>
          <button
            type="button"
            className={`relative -ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ${
              lang === "ENG" ? "bg-indigo-200" : "bg-white"
            }`}
            onClick={() => setLang("ENG")}
          >
            <span className="fi fi-gb" />
          </button>
        </div>
      </div>
    </nav>
  );
}
