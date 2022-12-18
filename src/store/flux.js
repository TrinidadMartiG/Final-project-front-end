import { json } from "react-router";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			dataFirstSection: null,
			dataSecondSection: null,
			dataThirdSection: null,
			dataFourthSection: null,
			email: null,
			password: null,
			user: null,
		},

		actions: {
			// Use getActions to call a function within a fuction
			getDataFirstSection: (id) => {
				fetch("https://8080-trinidadmar-finalprojec-uaqaje52lgr.ws-us79.gitpod.io/data_firstsection/" + id)
					.then(response => response.json())
					.then(result => setStore({ dataFirstSection: result }))
					.catch(error => console.log('error', error));
			},
			getDataSecondSection: (id) => {
				fetch("https://8080-trinidadmar-finalprojec-uaqaje52lgr.ws-us79.gitpod.io/data_secondsection/" + id)
					.then(response => response.json())
					.then(result => setStore({ dataSecondSection: result }))
					.catch(error => console.log('error', error));
			},
			getDataThirdSection: (id) => {
				fetch("https://8080-trinidadmar-finalprojec-uaqaje52lgr.ws-us79.gitpod.io/data_thirdsection/" + id)
					.then(response => response.json())
					.then(result => setStore({ dataThirdSection: result }))
					.catch(error => console.log('error', error));
			},
			getDataFourthSection: (id) => {
				fetch("https://8080-trinidadmar-finalprojec-uaqaje52lgr.ws-us79.gitpod.io/data_fourthsection/" + id)
					.then(response => response.json())
					.then(result => setStore({ dataFourthSection: result }))
					.catch(error => console.log('error', error));
			},
			registerUser: (name, email, password, history) => {
				fetch("https://8080-trinidadmar-finalprojec-uaqaje52lgr.ws-us79.gitpod.io/create_user", {
					method: "POST",
					body: JSON.stringify({
						name: name,
						email: email,
						password: password
					}),
					headers: {
						"Content-Type": "application/json",
					},
				})
					.then(response => response.json())
					.then(data => {
						if (data.registerUser == "ok"){
							history.push("/")
						}})
					.catch(error => console.log(error))
			}, 

			login: (email, password, history) => {
				fetch("https://8080-trinidadmar-finalprojec-uaqaje52lgr.ws-us79.gitpod.io/login", {
					method: "POST",
					body: JSON.stringify({
						email: email,
						password: password,
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						if (data.login == "ok") {
							sessionStorage.setItem("user", JSON.stringify(data))
							setStore({
								user: data
							})
							history.push("/")
						}
					})
			},
			checkUser: () => {
				if (sessionStorage.getItem("user")) {
					setStore({
						user: JSON.parse(sessionStorage.getItem("user"))
					})
				}
			},
			logout: (history) => {
				if (sessionStorage.getItem("user")) {
					sessionStorage.removeItem("user")
					setStore({
						user: null
					})
					history.push("/login")
				}
			}
		},
	};
};

export default getState;
