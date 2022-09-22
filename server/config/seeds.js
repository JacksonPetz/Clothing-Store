const db = require('./connection');
const { User, Category, Clothes } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Clothes' },
        { name: 'Clothes 2' },
        
    ]);

    console.log('categories seeded');

    await Clothes.deleteMany();

    const clothes = await Clothes.insertMany([
        {
            name: 'Addidas',
            description: 'A simply  addidas shirt.',
            image: './images/addidas1.jpg',
            category: categories[0]._id,
            price: 10.75,
            quantity: 1
        },
        {
            name: 'Addidas',
            description: 'Red Addidas Shirt',
            image: './images/addidas2.jpg',
            category: categories[0]._id,
            price: 10.75,
            quantity: 1
        },
        {
            name: 'Addidas',
            description: 'Classic Black addidas shirt',
            image: './images/addidas3.jpg',
            category: categories[0]._id,
            price: 12.75,
            quantity: 1
        },
        {
            name: 'Nike',
            description: 'Grey Nike Shirt',
            image: './images/athlete-t-shirt-men-green-tee-shirt.png',
            category: categories[0]._id,
            price: 22.25,
            quantity: 1
        },
        {
            name: 'Puma',
            description: 'Red Puma Shirt',
            image: './images/puma1.jpg',
            category: categories[0]._id,
            price: 14.25,
            quantity: 1
        },
        {
            name: 'Puma',
            description: 'Classic white puma shirt.',
            image: './images/puma3.jpg',
            category: categories[0]._id,
            price: 13.25,
            quantity: 1
        },
        {
            name: 'Umbro',
            description: 'White Umbro Shirt',
            image: './images/umbro1.jpg',
            category: categories[1]._id,
            price: 17.75,
            quantity: 1
        },
        {
            name: 'Umbro',
            description: 'Classic Umbro yellow shirt',
            image: './images/umbro4.jpg',
            category: categories[1]._id,
            price: 24.75,
            quantity: 1
        },
        {
            name: 'Sports Jersey',
            description: 'Black, gold and green soccer jersey',
            image: './images/sports3.jpg',
            category: categories[1]._id,
            price: 32.25,
            quantity: 1
        },
        {
            name: 'Sports',
            description: 'Orange ugly soccer jersey.',
            image: './images/sports6.jpg',
            category: categories[1]._id,
            price: 1.25,
            quantity: 1
        },
    //     
    ]);

    console.log('clothes seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'T',
        lastName: 'Mash',
        email: 'tmash@testemail.com',
        password: 'password12345',
        orders: [
            {
                clothes: [clothes[0]._id, clothes[0]._id, clothes[1]._id]
            }
        ]
    });

    await User.create({
        firstName: 'test',
        lastName: 'test',
        email: 'test@testemail.com',
        password: 'password12345'
    });

    console.log('users seeded');

    process.exit();
});