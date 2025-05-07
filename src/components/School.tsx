import { useState, useEffect } from "react";

type School = {
  name: string;
  startYear: number;
  endYear: number;
};

export default function School() {
  const [schools, setSchools] = useState<School[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/NicholasRucinski/NicholasRucinski/refs/heads/main/School.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const transformed: School[] = Object.entries(data).map(
          ([name, value]: [string, any]) => ({
            name,
            startYear: value.startYear,
            endYear: value.endYear,
          })
        );

        transformed.sort((a, b) => b.endYear - a.endYear);

        setSchools(transformed);
      })
      .catch((err) => {
        console.error("Failed to fetch schools:", err);
        setSchools([]);
      });
  }, []);

  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Education</h2>
      {schools.map((school, idx) => (
        <div className="mb-8" key={idx}>
          <h3 className="text-base sm:text-lg font-semibold">{school.name}</h3>
          <p className="text-sm mt-1 text-muted-foreground">
            {school.startYear} – {school.endYear}
          </p>
        </div>
      ))}
    </div>
  );
}
