import "./SkillItem.css"

const SkillItem = ({img, title}) => {
  return (
		<div>
			<div className="skill-item mx-auto">
				<img
					src={img}
					alt="bede_hampo_skills"
					className="img-fluid d-block mx-auto skill-icon"
				/>
			</div>
			<p className="text-center mt-3">{title}</p>
		</div>
	)
}

export default SkillItem