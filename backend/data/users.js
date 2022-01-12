import Bcrypt from 'bcryptjs'

const Users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: Bcrypt.hashSync('123456', 10), // because we created this users for test purpose, we are using this method to hash their password. we will go the normal route for users who signup directly from the portal.
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@example.com',
        password: Bcrypt.hashSync('123456', 10),
        
    },
    {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: Bcrypt.hashSync('123456', 10),
        
    },
]


export default Users;