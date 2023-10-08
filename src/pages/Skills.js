import { useLangContext } from "./_app";
import Pill from "./utils/Pill";

export default function Skills() {
  const { lang } = useLangContext();

  const data = {
    ENG: {
      title: "Skills",
      values: [
        "React",
        "React Native",
        "Vue.js",
        "SQL",
        "AWS",
        "Heroku",
        "Fastlane",
      ],
    },
    ESP: {
      title: "Habilidades",
      values: [
        "React",
        "React Native",
        "Vue.js",
        "SQL",
        "AWS",
        "Heroku",
        "Fastlane",
      ],
    },
  };
  return (
    <div className="bg-white flex shadow rounded-xl overflow-hidden p-5 flex-col">
      <p className="text-xl mb-5">{data[lang].title}</p>
      <div className="flex flex-wrap gap-2">
        {data[lang].values.map((item) => (
          <Pill key={item} label={item} />
        ))}
      </div>
    </div>
  );
}
