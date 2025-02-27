import React from "react";
import "../styles/styles.css";
import MemberCard from "./Membercard";
import benita from "../assets/benita.png";
import hanna from "../assets/hanna.png";
import kalai from "../assets/kalai.png";
import jeyasri from "../assets/jeyasri.png";
import kavirithanya from "../assets/kavirithanya.png"; 
import renusri from "../assets/renusri.png";
import priya from "../assets/priya.png";
import virutika from "../assets/virutika.png";
import chandra from "../assets/chandra.png";
import janapriya from "../assets/janapriya.png";
import paveethra from "../assets/paveethra.png";
import koushika from "../assets/koushika.png";
import dhanashree from "../assets/dhanashree.png";
import freneta from "../assets/freneta.png";
import saranya from "../assets/saranya.png";
import divya from "../assets/Divya.png";

const CoreTeam = () => {
  const officeBearers = [
    { name: "Benita Grace", role: "Chair", tagline: "Tagline", imageUrl: benita, linkedinUrl: "https://www.linkedin.com/in/benita-grace-966184253", instagramUrl: "https://www.instagram.com/benita.grace18" },
    { name: "Hanna Elsa Jaiju", role: "Vice Chair", tagline: "Tagline", imageUrl: hanna, linkedinUrl: "https://www.linkedin.com/in/hannaelsajaiju" },
    { name: "Kalaipriya S", role: "Secretary", tagline: "Tagline", imageUrl: kalai, linkedinUrl:"http://www.linkedin.com/in/kalaipriya-suresh-270b55287", instagramUrl: "https://www.instagram.com/kalai._.priya" },
    { name: "Jeyasri KS", role: "Treasurer", tagline: "Tagline", imageUrl: jeyasri, linkedinUrl:"https://www.linkedin.com/in/jeyasri-ks-1310b8288", instagramUrl: "https://www.instagram.com/_.jeyasri28._" },
  ];

  const coreMembers = {
    Management: [
      { name: "Kavirithanya", role: "Management Lead", tagline: "Tagline", imageUrl: kavirithanya, linkedinUrl:"https://www.linkedin.com/in/kavirithanya-52093a251", instagramUrl:"https://www.instagram.com/kavirithanya" },
      { name: "Freneta", role: "Management Co-lead", tagline: "Tagline", imageUrl: freneta, linkedinUrl:"https://www.linkedin.com/in/freneta-amalraj-11bab72a8", instagramUrl: "https://www.instagram.com/freneta_fries" },
    ],
    Technical: [
      { name: "Renusri", role: "Technical Lead", tagline: "Tagline", imageUrl: renusri, linkedinUrl: "https://www.linkedin.com/in/renusri-s-413938246", instagramUrl: "https://www.instagram.com/renusris_01" },
      { name: "Priyadarshini", role: "Technical Co-lead", tagline: "Tagline", imageUrl: priya, linkedinUrl: "http://www.linkedin.com/in/priyadharshini-r-9a756a288", instagramUrl: "https://www.instagram.com/prrriiiyaaa_" },
    ],
    Content: [
      { name: "Virutika", role: "Content Lead", tagline: "Tagline", imageUrl: virutika, linkedinUrl: "https://www.linkedin.com/in/virutika-pugazhendhi-7699482a0", instagramUrl: "https://www.instagram.com/_.virutika._" },
      { name: "Chandra", role: "Content Co-lead", tagline: "Tagline", imageUrl: chandra, linkedinUrl: "https://www.linkedin.com/in/sashritha-chandra-8a9586319", instagramUrl: "https://www.instagram.com/sashritha34" },
    ],
    Design: [
      { name: "Janapriya", role: "Design Lead", tagline: "Tagline", imageUrl: janapriya, linkedinUrl: "https://www.linkedin.com/in/janapriya-s-11j01" },
      { name: "Paveethra", role: "Design Co-lead", tagline: "Tagline", imageUrl: paveethra, linkedinUrl: "https://www.linkedin.com/in/pavethraa09", instagramUrl: "https://www.instagram.com/invites/contact" },
    ],
    Media: [
      { name: "Koushika", role: "Media Lead", tagline: "Tagline", imageUrl: koushika, linkedinUrl: "https://www.linkedin.com/in/koushika-ramesh-b70a78315" },
      { name: "Dhanashree", role: "Media Co-lead", tagline: "Tagline", imageUrl: dhanashree, linkedinUrl: "https://www.linkedin.com/in/dhanashree-elumalai-436b55311", instagramUrl: "https://www.instagram.com/dhanucore._" },
    ],
  };

  const facultyCoordinators = [
    { name: "Dr.S.Saranya", role: "Coordinator", tagline: "", imageUrl: saranya },
    { name: "Divya", role: "Coordinator", tagline: "", imageUrl: divya }
  ];

  return (
    <section className="core-team">
      <h1>Core Team</h1>
      <p>The core team of ACM-W at Sathyabama University is a group of passionate, dedicated individuals focused on empowering women 
        in the fields of computing and technology. Our mission is to foster an inclusive and collaborative environment where women can 
        grow, innovate, and lead.</p>

      <h2>Office Bearers</h2>
      <div className="office-bearers">
        {officeBearers.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            tagline={member.tagline}
            imageUrl={member.imageUrl}
            linkedinUrl={member.linkedinUrl}
            instagramUrl={member.instagramUrl}
          />
        ))}
      </div>

      <h2>Core Members</h2>
      {Object.entries(coreMembers).map(([category, members], index) => (
        <div key={index}>
          <h3>{category}</h3>
          <div className="core-category">
            {members.map((member, idx) => (
              <MemberCard
                key={idx}
                name={member.name}
                role={member.role}
                tagline={member.tagline}
                imageUrl={member.imageUrl}
                linkedinUrl={member.linkedinUrl}
                instagramUrl={member.instagramUrl}
              />
            ))}
          </div>
        </div>
      ))}

      <h2>Faculty Coordinators</h2>
      <div className="faculty-coordinators">
        {facultyCoordinators.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            tagline={member.tagline}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default CoreTeam;
