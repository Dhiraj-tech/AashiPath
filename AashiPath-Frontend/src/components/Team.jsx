import Founder from "../assets/Home/founder.jpg";
import Engineer1 from "../assets/Home/Engineer1.jpeg";
import Engineer2 from "../assets/Home/Engineer2.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Mr. Kumar Ujjwal Prasad Shah",
    designation: "Founder & Managing Director",
    image: Founder,
  },
  {
    id: 2,
    name: "Mr. Kumar Rahul Prasad",
    designation: "Senior Service Engineer | 3+ Years Experience",
    image: Engineer1,
  },
  {
    id: 3,
    name: "Mr. Sagar Kumar Mishra",
    designation: "Field Service Engineer | 2+ Years Experience",
    image: Engineer2,
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-label">Our People</span>
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle mx-auto">
            Experienced leadership and technical professionals committed to
            delivering reliable laboratory solutions and exceptional customer support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              <div className="relative overflow-hidden h-72">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-bold leading-snug">{member.name}</h3>
                  <p className="mt-1 text-sm text-sky-200 font-medium">
                    {member.designation}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
