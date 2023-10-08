import moment from "moment";
import { useLangContext } from "./_app";

export default function PersonalInfo() {
  const { lang } = useLangContext();

  const data = {
    ENG: {
      title: "Information",
      values: [
        { title: "Location", value: "Buenos Aires" },
        {
          title: "Experience",
          value: `${moment().diff("2020/12/01", "years")} years`,
        },
      ],
    },
    ESP: {
      title: "Información",
      values: [
        { title: "Ubicación", value: "Buenos Aires" },
        {
          title: "Experiencia",
          value: `${moment().diff("2020/12/01", "years")} años`,
        },
      ],
    },
  };
  return (
    <div className="bg-white flex shadow rounded-xl overflow-hidden p-5 flex-col">
      <p className="text-xl mb-5">{data[lang].title}</p>
      <div className="grid grid-cols-2">
        {data[lang].values.map((item) => (
          <>
            <p className="text-lg text-gray-500">{item.title}</p>
            <p className="text-lg text-right">{item.value}</p>
          </>
        ))}
      </div>
    </div>
  );
}
