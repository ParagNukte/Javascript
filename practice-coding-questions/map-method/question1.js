const dates = [
  "2025-08-01T10:00:00Z",
  "2025-07-15T14:30:00Z",
  "2025-06-20T09:00:00Z",
  "2025-09-10T18:00:00Z",
  "2025-08-05T12:00:00Z",
  "2025-08-25T08:00:00Z",
  "2025-07-30T16:45:00Z",
  "2025-09-01T11:15:00Z",
  "2025-08-10T22:00:00Z",
  "2025-08-02T07:30:00Z",
  "2025-08-15T19:00:00Z",
];

const formattedDate = dates.map((date) => {
  if (typeof date === "string" && date.includes("T")) return date.split("T")[0];
});

console.log(formattedDate);
