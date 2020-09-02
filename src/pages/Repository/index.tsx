import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import { Header, RepositoryInfo, Issues } from "./styles";

interface RepositoryParams {
	repository: string;
}

const Repository: React.FC = () => {
	const { params } = useRouteMatch<RepositoryParams>();

	return (
		<>
			<Header>
				<img src={logoImg} alt="Github Explorer" />
				<Link to="/">
					<FiChevronLeft size={16} /> voltar
				</Link>
			</Header>

			<RepositoryInfo>
				<header>
					<img src="" alt="" />
					<div>
						<strong>Test</strong>
						<p>test</p>
					</div>
				</header>
				<ul>
					<li>
						<strong>1890</strong>
						<span>Stars</span>
					</li>
					<li>
						<strong>48</strong>
						<span>Forks</span>
					</li>
					<li>
						<strong>67</strong>
						<span>Open Issues</span>
					</li>
				</ul>
			</RepositoryInfo>

			<Issues>
				<Link to={"test"}>
					<div>
						<strong>repository.full_name</strong>
						<p>repository.description</p>
					</div>

					<FiChevronRight size={20} />
				</Link>
			</Issues>
		</>
	);
};

export default Repository;
