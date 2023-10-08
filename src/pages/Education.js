import Image from "next/image";
import acamicaLogo from "./images/acamica.jpeg";
import ubaLogo from "./images/uba.jpeg";
import { useLangContext } from "./_app";
import moment from "moment";
import Pill from "./utils/Pill";

export default function Education() {
  const { lang } = useLangContext();

  const data = {
    ENG: {
      title: "Education",
      values: [
        {
          logoUrl: acamicaLogo,
          dateFrom: moment("07-01-2019").format("MM/YYYY"),
          dateTo: moment("04-01-2020").format("MM/YYYY"),
          title: "Full Stack developer",
          institute: "Acamica",
          skills: [
            "React",
            "React Native",
            "Vue.js",
            "SQL",
            "AWS",
            "Heroku",
            "Fastlane",
          ],
        },
        {
          logoUrl: ubaLogo,
          dateFrom: moment("01-01-2011").format("MM/YYYY"),
          dateTo: moment("07-01-2013").format("MM/YYYY"),
          title: "Industrial Design",
          institute: "Buenos Aires University",
          skills: [
            "React",
            "React Native",
            "Vue.js",
            "SQL",
            "AWS",
            "Heroku",
            "Fastlane",
          ],
        },
      ],
    },
    ESP: {
      title: "Educación",
      values: [
        {
          logoUrl: acamicaLogo,
          dateFrom: moment("07-01-2019").format("MM/YYYY"),
          dateTo: moment("04-01-2020").format("MM/YYYY"),
          title: "Desarrollador Full Stack",
          institute: "Acamica",
          skills: [
            "React",
            "React Native",
            "Vue.js",
            "SQL",
            "AWS",
            "Heroku",
            "Fastlane",
          ],
        },
        {
          logoUrl: ubaLogo,
          dateFrom: moment("01-01-2011").format("MM/YYYY"),
          dateTo: moment("07-01-2013").format("MM/YYYY"),
          title: "Diseño Industrial",
          institute: "Universidad de Buenos Aires",
          skills: [
            "React",
            "React Native",
            "Vue.js",
            "SQL",
            "AWS",
            "Heroku",
            "Fastlane",
          ],
        },
      ],
    },
  };
  return (
    <div className="bg-white flex shadow rounded-xl overflow-hidden p-5 flex-col">
      <p className="text-xl mb-5">{data[lang].title}</p>

      {data[lang].values.map((elem) => (
        <div className="flex gap-5 mb-5" key={elem.institution}>
          <Image src={elem.logoUrl} className="w-12 h-12" alt={elem.company} />
          <div>
            <p className="text-sm text-gray-500">
              {elem.dateFrom} - {elem.dateTo}
            </p>
            <p>{elem.institution}</p>
            <p className="mb-2">{elem.title}</p>

            <div className="flex flex-wrap gap-1">
              {elem.skills.map((item) => (
                <Pill key={item} label={item} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
