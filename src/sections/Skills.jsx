'use client';
import Card from '../components/Card';
import Title from '../components/Title';

export default function Skills() {
  return <section id="skills">
    <div className="flex flex-col">
      <Title>Skills</Title>
      <div className="flex justify-around ">
        <Card
          className="w-80 h-40"
          front={<div className="bg-base-100 text-base-content">
            <h1>Web programming</h1>
            <div
              className="radial-progress ml-3"
              style={{ '--value': 100 }}
              role="progressbar"
            >
              100%
            </div>
          </div>}
          back={<div className="bg-info-content text-info">
            <ul>
              <li>React/Angular</li>
              <li>Typescript</li>
              <li>NodeJS/NextJS</li>
            </ul>
          </div>} />
        <Card
          className="w-80 h-40"
          front={<div className="bg-base-100 text-base-content">
            <h1>Backend programming</h1>
            <div
              className="radial-progress ml-3"
              style={{ '--value': 70 }}
              role="progressbar"
            >
              70%
            </div>
          </div>}
          back={<div className="bg-info-content text-info">
            <ul>
              <li>Java</li>
            </ul>
          </div>} />
      </div>
    </div>
  </section>;
}
