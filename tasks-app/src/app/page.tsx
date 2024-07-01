import TaskIndex from '../tasks/pages/index'

export default function Home() {

	const isAuthenticated : boolean = true;

	if (!isAuthenticated) {
		return <p>Please login...</p>
	}

	return (
		<TaskIndex/>
	);	
}
