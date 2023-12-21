import React, { useState, useEffect } from "react";

function ViewAdmins() {
	const [users, setUsers] = useState([]);

	const getAdmins = async () => {
		try {
			const traer = await fetch("http://localhost:8080/users");
			const jsonData = await traer.json();
			setUsers(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getAdmins(); // Corrige el nombre de la función
	}, []);

	return (
		<>
			<h1 className="text-dark">Lista de Administradores</h1>
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
					{Array.isArray(users) &&
						users.map((user) => (
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