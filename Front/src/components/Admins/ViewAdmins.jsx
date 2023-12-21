import React, { useState, useEffect } from "react";

function ViewAdmins() {
	const [users, setUsers] = useState([]);
	const [cc, setCc] = useState("");
	const [results, setResults] = useState([]);
	const [nuser, setNuser] = useState("");

	const getAdmins = async () => {
		try {
			const traer = await fetch("http://localhost:8080/users");
			const jsonData = await traer.json();
			setUsers(jsonData);
			setResults(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getAdmins();
	}, []);

	function buscar() {
		let filteredUsers = users;

		if (cc) {
			filteredUsers = filteredUsers.filter(
				(dato) => dato.identification === cc
			);
		}

		if (nuser) {
			filteredUsers = filteredUsers.filter(
				(dato) => dato.user_name && dato.user_name.includes(nuser)
			);
		}

		setResults(filteredUsers);
	}

	function limpiar() {
		setNuser("");
		setCc("");
		setResults(users);
	}

	return (
		<>
			<h1 className="text-dark center">Lista de Administradores</h1>

			<input
				value={cc}
				onChange={(e) => {
					setCc(e.target.value);
				}}
				type="number"
				placeholder="Por Identificacion"
				className="form-control"
			/>
			<input
				value={nuser}
				onChange={(e) => {
					setNuser(e.target.value);
				}}
				type="text"
				placeholder="Por Nombre de Usuario"
				className="form-control"
			/>
			<button onClick={buscar}>Buscar</button>
			<button onClick={limpiar}>Limpiar</button>
			<table className="table table-dark table-striped table-bordered mt-5 text-center">
				<thead>
					<tr>
						<th>Nombres</th>
						<th>Apellidos</th>
						<th>Identificacion</th>
						<th>Usuario</th>
						<th>Roles</th>
						<th>Movil</th>
						<th>Estado</th>
					</tr>
				</thead>
				<tbody>
					{Array.isArray(results) &&
						results.map((user) => (
							<tr key={user.id}>
								<td>{user.name}</td>
								<td>{user.last_name}</td>
								<td>{user.identification}</td>
								<td>{user.user_name}</td>
								<td>{user.roles}</td>
								<td>{user.movil}</td>
								<td>{user.status === "ACTIVE" ? "Activo" : "Inactivo"}</td>
							</tr>
						))}
				</tbody>
			</table>
		</>
	);
}

export default ViewAdmins;
