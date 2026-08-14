import type { TeamMember } from '../../content/types';
import './teamMemberCardStyle.css';

interface TeamGridProps {
  heading?: string;
  members: TeamMember[];
}

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const TeamMemberCard = ({ heading, members }: TeamGridProps) => {
  return (
    <section className="page-section team-section">
      <div className="page-container">
        {heading && <h2 className="section-heading">{heading}</h2>}
        <div className="team-grid">
          {members.map((member) => (
            <div key={member.name} className="team-member-card">
              <span className="team-member-initials" aria-hidden="true">
                {initials(member.name)}
              </span>
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
              <p className="team-member-bio">{member.bio}</p>
              {member.email && (
                <a href={`mailto:${member.email}`} className="team-member-email">
                  {member.email}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMemberCard;
