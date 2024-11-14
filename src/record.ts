type UserRecord = {
    id: string;
    name: string;
}

type Users = {
    [key: string]: UserRecord
}

const users: Users = {
    "abde12": {
        id: "abde12",
        name: "tharun"
    },
    "abde123": {
        id: "abde123",
        name: "tharun"
    }
}

// using records you can write simplify logic.
interface UserRec {
    id: string,
    name : string
}

type UsersR = Record<string , UserRec>

const usersR: UsersR = {
    "abde12": {
        id: "abde12",
        name: "tharun"
    },
    "abde123": {
        id: "abde123",
        name: "tharun"
    }
}