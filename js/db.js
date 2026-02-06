// Database Initialization using Dexie.js
const db = new Dexie('VehiclePartsDB');

db.version(1).stores({
    products: '++id, &code, name, costPrice, sellingPrice, totalQty, soldQty, availableQty', // availableQty for easier filtering, though redundant
    shops: '++id, &name, owner, phone, address, totalSales, totalPaid, outstanding',
    sales: '++id, &billNumber, date, timestamp, shopId, shopName', // items stored in object, no index needed on items usually unless searching
    settings: 'key, value'
});

db.on('populate', () => {
    db.settings.add({ key: 'admin_password', value: 'admin123' }); // Default password
    console.log("Database seeded with default settings.");
});

async function getProductByCode(code) {
    return await db.products.where('code').equals(code).first();
}

async function updateStock(productId, quantitySold) {
    await db.transaction('rw', db.products, async () => {
        const product = await db.products.get(productId);
        if (product) {
            const newSold = (product.soldQty || 0) + quantitySold;
            const newAvailable = product.totalQty - newSold;
            await db.products.update(productId, {
                soldQty: newSold,
                availableQty: newAvailable
            });
        }
    });
}
