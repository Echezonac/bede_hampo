import Marquee from "react-fast-marquee"
import { skills } from "../../../utils/skillicons"
import SkillItem from "./SkillItem/SkillItem"

const Skills = () => {
	return <Marquee className="col-12 p-5 " speed={50} pauseOnHover={true}>
        {skills.map((skill, index)=>{
            return <SkillItem {...skill} key={index} />
        })}
    </Marquee>
}

export default Skills
