'use client';
export default function SocietyCard({ img, society, group, period }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full m-4">
      <figure>
        <img src={img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{society}</h2>
        <h3 className="card-title italic">{group}</h3>
        <p>{period}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">En détails...</button>
        </div>
      </div>
    </div>
  );
}
