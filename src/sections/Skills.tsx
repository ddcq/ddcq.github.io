'use client'
import Card from '../components/Card'
import Title from '../components/Title'

export default function Skills() {
  return (
    <section id="skills">
      <div className="flex flex-col">
        <Title>Compétences</Title>
        <div className="flex flex-wrap justify-center gap-4">
          <Card
            className="w-80 h-52"
            front={
              <div className="bg-base-100 text-base-content flex flex-col items-center justify-center">
                <h1 className="text-xl font-bold mb-2">Frontend</h1>
                <div
                  className="radial-progress"
                  style={{ '--value': 95 } as React.CSSProperties}
                  role="progressbar"
                  aria-label="Compétence Frontend: 95%"
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  95%
                </div>
              </div>
            }
            back={
              <div className="bg-info-content text-info p-4">
                <ul className="text-sm space-y-1">
                  <li>• React / Redux</li>
                  <li>• Angular 2+</li>
                  <li>• TypeScript / JavaScript</li>
                  <li>• Next.js</li>
                  <li>• HTML5 / CSS3</li>
                  <li>• Tailwind / Material-UI</li>
                </ul>
              </div>
            }
          />

          <Card
            className="w-80 h-52"
            front={
              <div className="bg-base-100 text-base-content flex flex-col items-center justify-center">
                <h1 className="text-xl font-bold mb-2">Backend</h1>
                <div
                  className="radial-progress"
                  style={{ '--value': 90 } as React.CSSProperties}
                  role="progressbar"
                  aria-label="Compétence Backend: 90%"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  90%
                </div>
              </div>
            }
            back={
              <div className="bg-info-content text-info p-4">
                <ul className="text-sm space-y-1">
                  <li>• Java / Spring / Hibernate</li>
                  <li>• Node.js / Express</li>
                  <li>• REST APIs</li>
                  <li>• Microservices</li>
                  <li>• JEE / EJB</li>
                </ul>
              </div>
            }
          />

          <Card
            className="w-80 h-52"
            front={
              <div className="bg-base-100 text-base-content flex flex-col items-center justify-center">
                <h1 className="text-xl font-bold mb-2">Bases de données</h1>
                <div
                  className="radial-progress"
                  style={{ '--value': 85 } as React.CSSProperties}
                  role="progressbar"
                  aria-label="Compétence Bases de données: 85%"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  85%
                </div>
              </div>
            }
            back={
              <div className="bg-info-content text-info p-4">
                <ul className="text-sm space-y-1">
                  <li>• Oracle / PL/SQL</li>
                  <li>• SQL Server</li>
                  <li>• PostgreSQL</li>
                  <li>• MongoDB</li>
                  <li>• Redis</li>
                </ul>
              </div>
            }
          />

          <Card
            className="w-80 h-52"
            front={
              <div className="bg-base-100 text-base-content flex flex-col items-center justify-center">
                <h1 className="text-xl font-bold mb-2">DevOps & Tools</h1>
                <div
                  className="radial-progress"
                  style={{ '--value': 80 } as React.CSSProperties}
                  role="progressbar"
                  aria-label="Compétence DevOps: 80%"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  80%
                </div>
              </div>
            }
            back={
              <div className="bg-info-content text-info p-4">
                <ul className="text-sm space-y-1">
                  <li>• Git / GitHub / GitLab</li>
                  <li>• Docker / Kubernetes</li>
                  <li>• Jenkins / Circle-CI</li>
                  <li>• Maven / Gradle / npm</li>
                  <li>• Linux / Windows Server</li>
                </ul>
              </div>
            }
          />

          <Card
            className="w-80 h-52"
            front={
              <div className="bg-base-100 text-base-content flex flex-col items-center justify-center">
                <h1 className="text-xl font-bold mb-2">Méthodologies</h1>
                <div
                  className="radial-progress"
                  style={{ '--value': 95 } as React.CSSProperties}
                  role="progressbar"
                  aria-label="Compétence Méthodologies: 95%"
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  95%
                </div>
              </div>
            }
            back={
              <div className="bg-info-content text-info p-4">
                <ul className="text-sm space-y-1">
                  <li>• Scrum / Kanban</li>
                  <li>• Agile / SAFe</li>
                  <li>• TDD / BDD</li>
                  <li>• Code Review</li>
                  <li>• Pair Programming</li>
                  <li>• CI/CD</li>
                </ul>
              </div>
            }
          />

          <Card
            className="w-80 h-52"
            front={
              <div className="bg-base-100 text-base-content flex flex-col items-center justify-center">
                <h1 className="text-xl font-bold mb-2">Expertise</h1>
                <div
                  className="radial-progress"
                  style={{ '--value': 90 } as React.CSSProperties}
                  role="progressbar"
                  aria-label="Expertise: 90%"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  90%
                </div>
              </div>
            }
            back={
              <div className="bg-info-content text-info p-4">
                <ul className="text-sm space-y-1">
                  <li>• Architecture logicielle</li>
                  <li>• Migration legacy</li>
                  <li>• Leadership technique</li>
                  <li>• Mentoring équipe</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
            }
          />
        </div>
      </div>
    </section>
  )
}
