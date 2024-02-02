'use client';
export default function EducationCard({ year, name, org }) {
  return (
    <div className="card w-80 bg-base-100 shadow-xl image-full m-4">
      <div className="card-body">
        <h2 className="card-title text-sm">{year}</h2>
        <h3 className="card-title">{name}</h3>
        <p className="italic">{org}</p>
      </div>
    </div>
  );
}
