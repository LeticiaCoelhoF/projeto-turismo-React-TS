
import { createContext, useState } from "react";

interface UserContextType {
    name: string, //tipagem
    save: (name: string) => void
}

export const UserContext = createContext<UserContextType | undefined>(undefined);
export default function UserProvider({children}: any){
    const [name, setName] = useState<string>('');
    const contextValues = {name, save}

    function save(name: string){//implementando o método da interface
        setName(name);
    }

    return(
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    );
}
