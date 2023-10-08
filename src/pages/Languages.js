import { useLangContext } from "./_app";

export default function Languages() {
  const { lang } = useLangContext();

  const data = {
    ENG: {
      title: "Languages",
      values: [
        { label: "Spanish", icon: "es", level: "Native" },
        { label: "English", icon: "gb", level: "Advanced" },
        { label: "Italian", icon: "it", level: "Elementary" },
      ],
    },
    ESP: {
      title: "Idiomas",
      values: [
        { label: "Español", icon: "es", level: "Nativo" },
        { label: "Inglés", icon: "gb", level: "Advanzado" },
        { label: "Italiano", icon: "it", level: "Básico" },
      ],
    },
  };
  return (
    <div className="bg-white flex shadow rounded-xl overflow-hidden p-5 flex-col">
      <p className="text-xl mb-5">{data[lang].title}</p>
      <div>
        {data[lang].values.map((item) => (
          <div className="flex justify-between">
            <p>
              {/* <span className={`fi fi-${item.icon}`} /> */}
              {item.label}
            </p>
            <p className="text-indigo-500">{item.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
