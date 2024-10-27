import express, { json } from 'express';
import cors from 'cors';
const app = express();
const PORT = 3000;

app.use(cors());
app.use(json());

// Endpoint to analyze products
app.post('/analyze', async (req, res) => {
    const productDetailsArray = req.body;

    // Map each product to calculate trust score and construct seller page URL
    const trustScores = productDetailsArray.map(product => {
        // Assign base score based on "Shipped by Amazon" status
        let score = product.isShippedByAmazon ? 80 : 60;

        // Construct the seller page URL
        const sellerPageUrl = `https://www.amazon.com/sp?ie=UTF8&seller=${product.sellerUUID}`;

        // Return trust score object for each product
        return { sellerUUID: product.sellerUUID, trustScore: score, sellerPageUrl };
    });

    // Send an array of trust score objects
    res.json(trustScores);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
