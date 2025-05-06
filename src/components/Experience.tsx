import { useState } from "react";

type Role = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export default function Experience() {
  const [pastRoles] = useState<Role[]>([]);

  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Experience</h2>

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
    </div>
  );
}
