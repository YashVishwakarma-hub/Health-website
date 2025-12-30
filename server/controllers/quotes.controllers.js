import axios from 'axios';

export const getQuotes = async(req, res) => {
    try {
        const response = await axios.get('https://zenquotes.io/api/random/');

        const quotesData = response.data[0]

        res.status(200).json({
            quote: quotesData.q,
            author: quotesData.a
        })

    } catch (error) {
        res.status(500).json({
            message: 'failed to fetch data from API'
        })
    }
}