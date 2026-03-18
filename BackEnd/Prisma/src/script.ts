import { prisma } from './prisma'

async function main() {
    await prisma.user.deleteMany(); // Just for this demo, everytime we run, we start with an empty database
    // CRUD

    /********************************************************/
    // 1) Create : Create a new user with a post
    // To Add a single record
    const user = await prisma.user.create({
        data: {
            name: "Kyle",
            email: "kyle@test.com",
            age: 27,
            userPreferences: {
                create: {
                    emailUpdates: true,
                }
            }
        },
        include: {
            userPreferences: true,
        }
    })
    console.log('Created user:', user)

    // To Add multiple records
    // const user = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "Alice",
    //             email: "alice@example.com",
    //             age: 30,
    //         },
    //         {
    //             name: "Bob",
    //             email: "bob@example.com",
    //             age: 25,
    //         },
    //     ]
    // })
    // console.log('Created user:', user)

    /********************************************************/
    // 2) Read
    
    // Fetch all users
    // const allUsers = await prisma.user.findMany()
    // console.log('All users:', allUsers)
    
    // Fetch a single user
    // const fetchedUser = await prisma.user.findUnique({
        //     where: {email: "kyle@test.com"},
        // })
        // console.log('Fetched user:', fetchedUser)
        
        
    /********************************************************/
    // 2) Update : Update user's age
    const updatedUser = await prisma.user.update({
        where: {
            email: "kyle@test.com"
        },
        data: {
            email: "kyle.newemail@test.com"
        }
    })

    console.log('Updated user:', updatedUser)

    /********************************************************/
    // 3) Delete : Delete all users
    // await prisma.user.deleteMany()
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error("Error: ", e)
        await prisma.$disconnect()
        process.exit(1)
    })




