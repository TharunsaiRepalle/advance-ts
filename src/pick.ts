interface UserPick {
    id: string,
    name: string,
    age: number,
    email : string,
    password: string
}

//picking only those fields which are required for the function instead of passing entire interface/type.
type UpdatedProps  = Pick<UserPick, 'name' | 'email'>

function displayUserDetails ( updateUserprops : UpdatedProps) {
    console.log(`Name : ${updateUserprops.name}
        Email : ${updateUserprops.email}`)
}