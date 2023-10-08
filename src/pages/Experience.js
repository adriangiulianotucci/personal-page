import Image from "next/image";
import gizconnectionLogo from "./images/gizconnection.jpeg";
import starLogo from "./images/star.jpeg";
import { useLangContext } from "./_app";
import moment from "moment";
import Pill from "./utils/Pill";

export default function Experience() {
  const { lang } = useLangContext();

  const data = {
    ENG: {
      title: "Experience",
      values: [
        {
          logoUrl: gizconnectionLogo,
          dateFrom: moment("12-01-2020").format("MM/YYYY"),
          dateTo: "Present",
          company: "GizConnection",
          role: "Full Stack developer",
          description:
            "Libero quas veritatis nulla distinctio fuga nihil temporibus et. Quia dicta sapiente qui porro molestiae nobis incidunt voluptatem. Et voluptas sunt nihil. At perferendis voluptatem dolores nulla. Adipisci dolore non. Praesentium ipsa magnam ut quia explicabo voluptates.",
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
          logoUrl: starLogo,
          dateFrom: moment("02-01-2014").format("MM/YYYY"),
          dateTo: moment("11-01-2020").format("MM/YYYY"),
          company: "Star Company",
          role: "Supplies Manager",
          description:
            "Libero quas veritatis nulla distinctio fuga nihil temporibus et. Quia dicta sapiente qui porro molestiae nobis incidunt voluptatem. Et voluptas sunt nihil. At perferendis voluptatem dolores nulla. Adipisci dolore non. Praesentium ipsa magnam ut quia explicabo voluptates.",
          skills: [
            "Supplier Management",
            "Cost Analysis",
            "Team Leadership",
            "Inventory Optimization",
          ],
        },
      ],
    },
    ESP: {
      title: "Experiencia",
      values: [
        {
          logoUrl: gizconnectionLogo,
          dateFrom: moment("12-01-2020").format("MM/YYYY"),
          dateTo: "Presente",
          company: "GizConnection",
          role: "Desarrollador Full Stack",
          description:
            "Libero quas veritatis nulla distinctio fuga nihil temporibus et. Quia dicta sapiente qui porro molestiae nobis incidunt voluptatem. Et voluptas sunt nihil. At perferendis voluptatem dolores nulla. Adipisci dolore non. Praesentium ipsa magnam ut quia explicabo voluptates.",
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
          logoUrl: starLogo,
          dateFrom: moment("02-01-2014").format("MM/YYYY"),
          dateTo: moment("11-01-2020").format("MM/YYYY"),
          company: "Star Company",
          role: "Director de compras",
          description:
            "Libero quas veritatis nulla distinctio fuga nihil temporibus et. Quia dicta sapiente qui porro molestiae nobis incidunt voluptatem. Et voluptas sunt nihil. At perferendis voluptatem dolores nulla. Adipisci dolore non. Praesentium ipsa magnam ut quia explicabo voluptates.",
          skills: [
            "Gestión de proveedores",
            "Análisis de costos",
            "Liderazgo de equipos",
            "Optimización de inventario",
          ],
        },
      ],
    },
  };
  return (
    <div className="bg-white flex shadow rounded-xl overflow-hidden p-5 flex-col">
      <p className="text-xl mb-5">{data[lang].title}</p>

      {data[lang].values.map((elem) => (
        <div className="flex gap-5 mb-5">
          <Image src={elem.logoUrl} className="w-12 h-12" alt={elem.company} />
          <div>
            <p className="text-sm text-gray-500">
              {elem.dateFrom} - {elem.dateTo}
            </p>
            <p>{elem.company}</p>
            <p className="text-indigo-500">{elem.role}</p>
            <p className="text-sm mb-2">{elem.description}</p>

            <div className="flex flex-wrap gap-1">
              {elem.skills.map((item) => (
                <Pill label={item} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
