import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();

    // Split users into two halves
    const firstHalf = users.slice(0, 5);
    const secondHalf = users.slice(5, 10);

    return (
        <div className='container'>
            <div className="users-columns">
                <div className="column">
                    {firstHalf.map((user) => (
                        <Link to={user.id.toString()} key={user.id}>
                            <div className="user">
                                <h4>{user.name}</h4>
                                <p>{user.email}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="column">
                    {secondHalf.map((user) => (
                        <Link to={user.id.toString()} key={user.id}>
                            <div className="user">
                                <h4>{user.name}</h4>
                                <p>{user.email}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Users;

