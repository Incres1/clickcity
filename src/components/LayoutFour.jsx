import Character from "./Character";
import StatCard from "./StatCard";
import LevelCard from "./LevelCard";
import Items from "./Items";

const LayoutFour = () => {
  const {
    strength,
    dexterity,
    health,
    intelligence,
    luckiness,
    gold,
    level,
    experience,
    experienceToNextLevel,
    skillAllocation,
    skillPoints,
  } = Character();
  const { strengthFromItems, healthFromItems, luckFromitems } = Items();

  return (
    <div className="grid grid-cols-4 gap-4">
      <StatCard
        text={strength}
        type="Strength"
        skill={"strength"}
        statsFromItems={strengthFromItems}
        skillAllocation={skillAllocation}
        skillPoints={skillPoints}
      />
      <StatCard
        text={dexterity}
        type="Dexterity"
        skill={"dexterity"}
        skillAllocation={skillAllocation}
        skillPoints={skillPoints}
      />
      <StatCard
        text={health}
        type="Health"
        skill={"health"}
        statsFromItems={healthFromItems}
        skillAllocation={skillAllocation}
        skillPoints={skillPoints}
      />
      <StatCard
        text={intelligence}
        type="Intelligence"
        skill={"intelligence"}
        skillAllocation={skillAllocation}
        skillPoints={skillPoints}
      />
      <StatCard
        text={luckiness}
        type="Luckiness"
        skill={"luckiness"}
        statsFromItems={luckFromitems}
        skillAllocation={skillAllocation}
        skillPoints={skillPoints}
      />
      <LevelCard text={gold} type="Gold" />
      <LevelCard text={level} type="Level" />
      <LevelCard text={experience} type="Experience" />
      <LevelCard
        text={experienceToNextLevel}
        type="Experience required to level up"
      />
      <LevelCard text={skillPoints} type="Skill Points" />
    </div>
  );
};
export default LayoutFour;
