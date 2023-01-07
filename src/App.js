import React from "react";
import { UserChildren, UserClass, UserFunction } from "./user";
import Korinsik from "./user/Korisnik";

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            users: [
                { name: "Ivan", years: 30 },
                { name: "Marko", years: 35 },
                { name: "Ana", years: 25 },
            ],
            children: "A hobi mi je plivanje.",
        };
    }

    handleButtonPress = () => {
        const { users } = this.state;

        const newUsers = users.map((user) => {
            return { ...user, years: user.years + 1 };
        });

        this.setState({ users: newUsers });
    };

    changeName = (event) => {
        let users = [...this.state.users];
        let user = {
            ...users[0],
            name: event.target.value
        };
        users[0] = user;
        this.setState({ users });
    };

    render() {
        const { users, children } = this.state;

        return (
            <div>
                <h1>React aplikacija</h1>
                <p>Ovo zbilja radi</p>
                <button onClick={this.handleButtonPress}>
                    Promjena godina
                </button>
                <Korinsik name={users[0].name} handleChange={this.changeName} />
                <UserFunction name={users[0].name} years={users[0].years} />
                <UserFunction name={users[1].name} years={users[1].years} />
                <UserClass name={users[2].name} years={users[2].years} />
                <UserChildren name={users[2].name} years={users[2].years}>
                    {children}
                </UserChildren>
            </div>
        );
    }
}
