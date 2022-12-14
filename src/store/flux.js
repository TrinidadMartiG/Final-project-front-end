const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			dataFirstSection: null,
			dataSecondSection: null,
			dataThirdSection: null,
			dataFourthSection: null,
			email: null,
			password: null,
			user_id: null
		},

		actions: {
			// Use getActions to call a function within a fuction
			getDataFirstSection: (user) => {
				fetch("https://8080-trinidadmar-finalprojec-uaqaje52lgr.ws-us79.gitpod.io/data_firstsection/"+user)
					.then(response => response.json())
					.then(result => setStore({ dataFirstSection: result }))
					.catch(error => console.log('error', error));
			},
			getDataSecondSection: () => {
				fetch("https://8080-trinidadmar-finalprojec-uaqaje52lgr.ws-us79.gitpod.io/data_secondsection/5")
					.then(response => response.json())
					.then(result => setStore({ dataSecondSection: result }))
					.catch(error => console.log('error', error));
			},
			getDataThirdSection: () => {
				fetch("https://8080-trinidadmar-finalprojec-uaqaje52lgr.ws-us79.gitpod.io/data_thirdsection/5")
					.then(response => response.json())
					.then(result => setStore({ dataSecondSection: result }))
					.catch(error => console.log('error', error));
			},
			getDataFourthSection: () => {
				fetch("https://8080-trinidadmar-finalprojec-uaqaje52lgr.ws-us79.gitpod.io/data_fourthsection/5")
					.then(response => response.json())
					.then(result => setStore({ dataFourthSection: result }))
					.catch(error => console.log('error', error));
			},
			login: (email, password) => {
				fetch("https://8080-trinidadmar-finalprojec-uaqaje52lgr.ws-us79.gitpod.io/login", {
					method: "POST",
					body: JSON.stringify({
						email: email,
						password: password
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then(response => response.json())
				.then(data => console.log(data))
				.then(data => store.user_id(data.user_id))
			}
		},
	};
};

export default getState;
