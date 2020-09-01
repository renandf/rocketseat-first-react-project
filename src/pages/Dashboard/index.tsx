import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
	return (
		<>
			<img src={logoImg} alt="Github Explorer" />
			<Title>Explore repositories on Github</Title>

			<Form>
				<input placeholder="Search for a repository..." />
				<button type="submit">Search</button>
			</Form>

			<Repositories>
				<a href="test">
					<img src="https://placeimg.com/200/200/people" alt="Person" />
					<div>
						<strong>rocketseat/unform</strong>
						<p>Testing description paragraph</p>
					</div>

					<FiChevronRight size={20} />
				</a>
				<a href="test">
					<img src="https://placeimg.com/200/200/people" alt="Person" />
					<div>
						<strong>rocketseat/unform</strong>
						<p>Testing description paragraph</p>
					</div>

					<FiChevronRight size={20} />
				</a>
				<a href="test">
					<img src="https://placeimg.com/200/200/people" alt="Person" />
					<div>
						<strong>rocketseat/unform</strong>
						<p>Testing description paragraph</p>
					</div>

					<FiChevronRight size={20} />
				</a>
			</Repositories>
		</>
	);
};

export default Dashboard;
