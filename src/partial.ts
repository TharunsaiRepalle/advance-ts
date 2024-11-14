interface UserPartial {
    id: string,
    name: string,
    age: number,
    email : string,
    password: string
}

//picking only those fields which are required for the function instead of passing entire interface/type.
type UpdateProps  = Pick<UserPartial, 'name' | 'email'>

// make all types in updatedProps optional.
type UpdatePropsOptional = Partial<UpdateProps>

function displayUserDetail ( updateUserprops : UpdatePropsOptional) {
    console.log(`Name : ${updateUserprops.name}
        Email : ${updateUserprops.email}`)
}