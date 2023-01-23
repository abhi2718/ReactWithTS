import { useState } from "react";
type UserProfile = {
    name: string,
    email: string
}
export const Auth = () => {
    const [user, setUser] = useState<UserProfile | null>(null);
    const handleLogIn = (): void => {
        setUser({
            name: "Abhishek Singh",
            email: "abhishek@example.com"
        });
    } 
    const handleLogout = (): void => { 
        setUser(null);
    } 

    return (
        <div>
            <p>{user?.name}</p>
            <button type="button" onClick={handleLogIn}>LogIn</button>
            <button type="button" onClick={handleLogout}>LogOut</button>
        </div>
    );
}