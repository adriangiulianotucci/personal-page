import NavBar from "./NavBar";
import Avatar from "./Avatar";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Education from "./Education";
import Languages from "./Languages";

export default function Home() {
  return (
    <div className="flex items-center flex-col bg-indigo-100">
      <NavBar />
      <main className="flex p-5 grid grid-cols-[30%_70%] gap-5 w-3/4 print:w-full justify-center">
        <div className="flex flex-col gap-5">
          <Avatar />
          <PersonalInfo />
          <Skills />
          <Languages />
        </div>
        <div className="flex flex-col gap-5">
          <AboutMe />
          <Experience />
          <Education />
        </div>
      </main>
    </div>
  );
}
