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
    { name: "Benita Grace", role: "Chair", tagline: "Transforming the landscape through innovative leadership", imageUrl: benita, linkedinUrl: "https://www.linkedin.com/in/benita-grace-966184253", instagramUrl: "https://www.instagram.com/benita.grace18" },
    { name: "Hanna Elsa Jaiju", role: "Vice Chair", tagline: "Where vision meets strategic direction", imageUrl: hanna, linkedinUrl: "https://www.linkedin.com/in/hannaelsajaiju" },
    { name: "Kalaipriya S", role: "Secretary", tagline: "The Keeper of the Narrative", imageUrl: kalai, linkedinUrl:"http://www.linkedin.com/in/kalaipriya-suresh-270b55287", instagramUrl: "https://www.instagram.com/kalai._.priya" },
    { name: "Jeyasri KS", role: "Treasurer", tagline: "Where financial expertise meets strategic vision", imageUrl: jeyasri, linkedinUrl:"https://www.linkedin.com/in/jeyasri-ks-1310b8288", instagramUrl: "https://www.instagram.com/_.jeyasri28._" },
  ];

  const coreMembers = {
    Management: [
      { name: "Kavirithanya", role: "Management Lead", tagline: "Executing plans with precision and purpose", imageUrl: kavirithanya, linkedinUrl:"https://www.linkedin.com/in/kavirithanya-52093a251", instagramUrl:"https://www.instagram.com/kavirithanya" },
      { name: "Freneta", role: "Management Co-lead", tagline: "Fueling the fire of innovation", imageUrl: freneta, linkedinUrl:"https://www.linkedin.com/in/freneta-amalraj-11bab72a8", instagramUrl: "https://www.instagram.com/freneta_fries" },
    ],
    Technical: [
      { name: "Renusri", role: "Technical Lead", tagline: "Crafting vision that brings ideas to life.", imageUrl: renusri, linkedinUrl: "https://www.linkedin.com/in/renusri-s-413938246", instagramUrl: "https://www.instagram.com/renusris_01" },
      { name: "Priyadarshini", role: "Technical Co-lead", tagline: "Design solutions that inspire and elevate.", imageUrl: priya, linkedinUrl: "http://www.linkedin.com/in/priyadharshini-r-9a756a288", instagramUrl: "https://www.instagram.com/prrriiiyaaa_" },
    ],
    Content: [
      { name: "Virutika", role: "Content Lead", tagline: "The architect of innovative solutions in tech", imageUrl: virutika, linkedinUrl: "https://www.linkedin.com/in/virutika-pugazhendhi-7699482a0", instagramUrl: "https://www.instagram.com/_.virutika._" },
      { name: "Chandra", role: "Content Co-lead", tagline: "Pioneering innovative solutions, one code at a time", imageUrl: chandra, linkedinUrl: "https://www.linkedin.com/in/sashritha-chandra-8a9586319", instagramUrl: "https://www.instagram.com/sashritha34" },
    ],
    Design: [
      { name: "Janapriya", role: "Design Lead", tagline: "Transforming ideas into engaging content", imageUrl: janapriya, linkedinUrl: "https://www.linkedin.com/in/janapriya-s-11j01" },
      { name: "Paveethra", role: "Design Co-lead", tagline: "Crafting compelling stories that resonate", imageUrl: paveethra, linkedinUrl: "https://www.linkedin.com/in/pavethraa09", instagramUrl: "https://www.instagram.com/invites/contact" },
    ],
    Media: [
      { name: "Koushika", role: "Media Lead", tagline: "The intersection of media and creativity", imageUrl: koushika, linkedinUrl: "https://www.linkedin.com/in/koushika-ramesh-b70a78315" },
      { name: "Dhanashree", role: "Media Co-lead", tagline: "The art of storytelling, perfected.", imageUrl: dhanashree, linkedinUrl: "https://www.linkedin.com/in/dhanashree-elumalai-436b55311", instagramUrl: "https://www.instagram.com/dhanucore._" },
    ],
  };

  const facultyCoordinators = [
    { name: "Dr.S.Saranya", role: "Coordinator", tagline: "", imageUrl: saranya },
    { name: "Divya", role: "Coordinator", tagline: "", imageUrl: divya }
  ];

  return (
    <section className="core-team">
      <h1>Core Team</h1>
      <p>Meet the Core Team of ACM-W Sathyabama
Our core team is comprised of talented and motivated students who share a passion for technology and empowering women in computing. Led by a team of dedicated leaders, including our executive council and team leads, they work collaboratively to drive ACM-W's mission forward. With diverse skills and expertise, our core team members are the driving force behind our events, initiatives, and community-building efforts, striving to create a supportive and inclusive environment for all members.
</p>

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
