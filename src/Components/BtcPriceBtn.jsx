import { useState, useEffect} from "react";
import axios from 'axios';
import { Button } from 'reactstrap';

const BtcPriceBtn = () => {
    const [btcPrice, setBtcPrice] = useState(null);

    const fetchBtcPrice = async () => {
    try {
        const response = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
        );
        setBtcPrice(response.data.bitcoin.usd);
    } catch (error) {
        console.error('Error fetching BTC price:', error);
    }
    };

    useEffect(() => {
    fetchBtcPrice();
    }, []);

    return (
    <div>
        <Button color="primary" size="lg" onClick={fetchBtcPrice}>
        {btcPrice !== null ? `$${btcPrice.toFixed(2)}` : 'Loading...'}
        </Button>
    </div>
    );
};

export default BtcPriceBtn
