import "./WorkFeatures.css";
import WorkCard from "./WorkCard/WorkCard";
import { Features } from "../../utils/features";

const WorkFeatures = () => {
  return (
		<div className="row p-5">
			{/* left side section start */}
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
				<div className="row">
					{Features.slice(0, 2).map((feature, index) => {
						return <WorkCard key={index} {...feature} />
					})}
				</div>
			</div>
			{/* left side section end */}
			{/* right side section start */}
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
				<div className="row">
					{Features.slice(2, 4).map((feature, index) => {
						return <WorkCard key={index} {...feature} />
					})}
				</div>
			</div>
			{/* right side section end */}
		</div>
	)
}

export default WorkFeatures