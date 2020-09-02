import React, { useState, useEffect, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories, Error } from "./styles";

interface Repository {
	full_name: string;
	description: string;
	owner: {
		login: string;
		avatar_url: string;
	};
}

const Dashboard: React.FC = () => {
	const [newRepo, setNewRepo] = useState("");
	const [inputError, setInputError] = useState("");
	const [repositories, setRepositories] = useState<Repository[]>(() => {
		const storedRepos = localStorage.getItem("@GithubExplorer:repositories");

		if (storedRepos) {
			return JSON.parse(storedRepos);
		} else {
			return [];
		}
	});

	useEffect(() => {
		localStorage.setItem(
			"@GithubExplorer:repositories",
			JSON.stringify(repositories)
		);
	}, [repositories]);

	async function handleAddRepository(
		e: FormEvent<HTMLFormElement>
	): Promise<void> {
		e.preventDefault();

		if (!newRepo) {
			setInputError("Please insert the author/repository before searching.");
			return;
		}

		try {
			const response = await api.get<Repository>(`repos/${newRepo}`);

			const repository = response.data;

			setInputError("");
			setRepositories([...repositories, repository]);
			setNewRepo("");
		} catch (err) {
			setInputError(
				"The repository might not exist or there was an error when trying to search."
			);
		}
	}

	return (
		<>
			<img src={logoImg} alt="Github Explorer" />
			<Title>Explore repositories on Github</Title>

			<Form hasError={!!inputError} onSubmit={handleAddRepository}>
				<input
					value={newRepo}
					onChange={(e) => setNewRepo(e.target.value)}
					placeholder="Search for author/repository..."
				/>
				<button type="submit">Search</button>
			</Form>

			{inputError && <Error>{inputError}</Error>}

			<Repositories>
				{repositories.map((repository) => (
					<Link
						key={repository.full_name}
						to={`/repository/${repository.full_name}`}
					>
						<img
							src={repository.owner.avatar_url}
							alt={repository.owner.login}
						/>
						<div>
							<strong>{repository.full_name}</strong>
							<p>{repository.description}</p>
						</div>

						<FiChevronRight size={20} />
					</Link>
				))}
			</Repositories>
		</>
	);
};

export default Dashboard;
