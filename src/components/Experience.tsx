import { useState, useEffect } from "react";

type Role = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export default function Experience() {
  const [pastRoles, setPastRoles] = useState<Role[]>([]);
  const [pastNonRelatedRoles, setPastNonRelatedRoles] = useState<Role[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/NicholasRucinski/NicholasRucinski/refs/heads/main/Work.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setPastRoles(data.Related);
        setPastNonRelatedRoles(data.Nonrelated);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setPastRoles([]);
      });
  }, []);
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Experience</h2>
      <h3 className="mb-4 text-lg font-heading sm:text-xl underline">
        Related Experience
      </h3>
      {pastRoles.map((role, id) => {
        return (
          <div className="mb-8" key={id}>
            <h3 className="text-lg font-heading sm:text-xl">
              {role.role} @ {role.company}
            </h3>

            <p className="mb-4 mt-0.5 text-sm">
              {role.startDate} - {role.endDate}
            </p>
            <p>{role.description}</p>
          </div>
        );
      })}
      <h3 className="mb-4 text-lg font-heading sm:text-xl underline">
        Non-Related Experience
      </h3>
      {pastNonRelatedRoles.map((role, id) => {
        return (
          <div className="mb-8" key={id}>
            <h3 className="text-lg font-heading sm:text-xl">
              {role.role} @ {role.company}
            </h3>

            <p className="mb-4 mt-0.5 text-sm">
              {role.startDate} - {role.endDate}
            </p>
            <p>{role.description}</p>
          </div>
        );
      })}
    </div>
  );
}
