import CardTeam from "@/components/HomeComponents/AchievementsSection/components/CardTeam";
import Container from "@/components/Container";
import DescriptionSection from "@/components/DescriptionSection";
import TitleSection from "@/components/TitleSection";

const AchievementsSection = () => {
  return (
    <Container>
      <TitleSection title="The team" />
      <DescriptionSection>
        WE'RE A SMALL, FRIENDLY AND TALENTED TEAM. WE CRAFT BEAUTIFUL DIGITAL
        SOLUTIONS FOR AWESOME CLIENTS ACROSS ALL THE PLATFORMS.
      </DescriptionSection>

      <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-8 mx-auto gap-5">
        <CardTeam
          title="JAMES BEAN"
          job="CREATIVE DIRECTOR"
          imgSrc="https://demowp.vegatheme.com/ananke/wp-content/uploads/sites/2/2014/11/team1.jpg"
        />

        <CardTeam
          title="JAMES BEAN"
          job="CREATIVE DIRECTOR"
          imgSrc="https://demowp.vegatheme.com/ananke/wp-content/uploads/sites/2/2014/11/team2.jpg"
        />

        <CardTeam
          title="JAMES BEAN"
          job="CREATIVE DIRECTOR"
          imgSrc="https://demowp.vegatheme.com/ananke/wp-content/uploads/sites/2/2014/11/team3.jpg"
        />

        <CardTeam
          title="JAMES BEAN"
          job="CREATIVE DIRECTOR"
          imgSrc="https://demowp.vegatheme.com/ananke/wp-content/uploads/sites/2/2014/11/team4.jpg"
        />
      </div>
    </Container>
  );
};

export default AchievementsSection;
