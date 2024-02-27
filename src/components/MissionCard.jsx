'use client';
export default function MissionCard({ img, society, project, description, path }) {
  return (
    <div className="card w-96 h-96 bg-base-100 shadow-xl m-4 bg-base-300">
      <figure className="h-36">
        <img src={img} className="h-full object-cover"  />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{project}</h2>
        <h3 className="card-title italic">{society}</h3>
        <p>{description}</p>
        { path && (
          <a className="btn btn-primary" href={path}  >Détails...</a>
        )}
      </div>
    </div>
  );
}
