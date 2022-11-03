import "./styles.css";
import peopleJson from "./projects.json";
let people = peopleJson.people;
// console.log(people)
export default function App() {
  let projects = [];
  let groupedProjects = {};
  people.forEach((person) => {
    if (!projects.includes(person.project)) {
      projects.push(person.project);
      groupedProjects[person.project] = [
        people[people.findIndex((people) => people.project === person.project)]
      ];
    } else {
      groupedProjects[person.project].push(person);
    }
  });
  console.log(groupedProjects);

  return (
    <div className="px-20 w-screen">
      <table className="border w-full table-fixed">
        <thead>
          <tr className="h-0 opacity-0">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
        </thead>
        <tbody>
          <tr className="h-fit">
            <td colSpan="4" className="bg-gray-800 text-center text-white p-5">
              <div className="people w-fill justify-between h-10 flex ">
                <div className="person self-center w-fit flex  flex-col align-center">
                  <div className="img w-20 h-20 aspect-square bg-blue-300 rounded-full"></div>
                  <h2 className=" inline" style={{ width: "fit-content" }}>
                    Name
                  </h2>
                </div>
                <div className="person self-center w-fit flex  flex-col align-center">
                  <div className="img w-20 h-20 bg-blue-300 rounded-full"></div>
                  <h2 className=" inline" style={{ width: "fit-content" }}>
                    Name
                  </h2>
                </div>
                <div className="person self-center w-fit flex  flex-col align-center">
                  <div className="img w-20 h-20 bg-blue-300 rounded-full"></div>
                  <h2 className=" inline" style={{ width: "fit-content" }}>
                    Name
                  </h2>
                </div>
                <div className="person self-center w-fit flex  flex-col align-center">
                  <div className="img w-20 h-20 bg-blue-300 rounded-full"></div>
                  <h2 className=" inline" style={{ width: "fit-content" }}>
                    Name
                  </h2>
                </div>
              </div>
              <h1 className="mt-10">
                Title of <br />
                project here
              </h1>
            </td>
            <td className="bg-gray-300">
              <div className="people w-fill justify-between h-10 flex ">
                <div className="person self-center w-fit flex  flex-col align-center">
                  <div className="img w-20 h-20 bg-blue-300 rounded-full"></div>
                  <h2 className=" inline" style={{ width: "fit-content" }}>
                    Name
                  </h2>
                </div>
              </div>
              <h1 className="mt-10">
                Title of <br />
                project here
              </h1>
            </td>
            <td colSpan="2" className="bg-gray-200">
              rr
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
