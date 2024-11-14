type UserMap = {
    name : string
}

const userMap = new Map<string , UserMap>();

userMap.set("reased12", { name: "tharun"})
userMap.set("reased123", { name: "tharuns"})

const user = userMap.get("reased12")
userMap.delete("readed123")