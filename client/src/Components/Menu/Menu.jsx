import React, { useState, useMemo, useContext } from "react";
import {
    Box,
    Typography,
    IconButton,
    Paper,
    Button,
    Radio,
    FormControlLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import Header from '../Header'

// prices 
const PRICES = {
    size: { small: 12.99, medium: 18.99, large: 25.99, xlarge: 29.99 },
    crust: { regular: 0, thin: 0, pan: 2.0 },
    sauce: { marinara: 0, alfredo: 1.5 },
    toppings: {
        pepperoni: 1.0,
        chicken: 1.5,
        bacon: 1.25,
        ham: 1.0,
        hamburger: 1.5, 
    },
    beverages: {
        sprite: 2.5,
        coke: 2.5,
        pepper: 2.5,
        "diet-coke": 2.5,
        orange: 2.5,
    },
    dessert: {
        cookies: 5.99,
        "cookie-pie": 12.99,
        "apple-pie": 15.99,
        brownie: 8.99,
        rolls: 6.99,
    },
    sides: {
        "garlic-bread": 4.99,
        wings: 16.99,
        salad: 7.99,
        sticks: 9.99,
        veggie: 8.99,
    },
};

function Section({ title, children }) {
    return (
        <Paper
            elevation={2}
            sx={{
                backgroundColor: "#f8e9c8",
                borderRadius: "22px",
                p: 2,
                mb: 2,
            }}
        >
        <Typography sx={{ fontFamily: "serif", fontSize: "1.05rem", mb: 1 }}>
        {title}
        </Typography>
        {children}
        </Paper>
    );
}

export default function Menu() {
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);

  // Controlled selections (null means unselected)
    const [size, setSize] = useState(null);
    const [crust, setCrust] = useState(null);
    const [sauce, setSauce] = useState(null);
    const [topping, setTopping] = useState(null);

  // quantities for optional items (beverages/sides/dessert)
    const [quantities, setQuantities] = useState({});

  // helper to toggle single-choice items (clicking already-selected will unselect)
    function toggleChoice(keySetter, currentValue, clickedValue) {
        if (currentValue === clickedValue) {
            keySetter(null);
        } else {
            keySetter(clickedValue);
        }
    }

    function incQty(id) {
        setQuantities((q) => ({ ...q, [id]: (q[id] || 0) + 1 }));
    }
    function decQty(id) {
        setQuantities((q) => {  
            const next = { ...q };
            next[id] = Math.max(0, (next[id] || 0) - 1);
            if (next[id] === 0) delete next[id];
            return next;
        });
    }

  // calculate total using useMemo for performance
    const total = useMemo(() => {
        let sum = 0;
        if (size) sum += PRICES.size[size] ?? 0;
        if (crust) sum += PRICES.crust[crust] ?? 0;
        if (sauce) sum += PRICES.sauce[sauce] ?? 0;
        if (topping) sum += PRICES.toppings[topping] ?? 0;

    // quantities: beverages, dessert, sides keys
        for (const [id, qty] of Object.entries(quantities)) {
            const price =
            PRICES.beverages[id] ??
            PRICES.dessert[id] ??
            PRICES.sides[id] ??
            0;
            sum += price * qty;
        }

    // Round to 2 decimals
        return Math.round(sum * 100) / 100;
    }, [size, crust, sauce, topping, quantities]);

    function handleAddToCart() {
    // create order snapshot
    const order = {
        timestamp: Date.now(),
        selections: { size, crust, sauce, topping },
        quantities,
        subTotal: total,
    };
    addToCart(order);
    // keep selections intact — optionally clear after add
    }

    function handleCheckout() {
        // push cart + current selections to checkout page
        // pass both cart and current selection as state
        handleAddToCart(); // ensure current selection included
        // navigate to /checkout 
        navigate("/checkout", { state: { fromMenu: true } });
    }

    return (
        <Box>
        <Header />

        <Box sx={{ pt: 10, px: 3, maxWidth: 1000, mx: "auto" }}>
            <Typography align="center" sx={{ fontSize: "1.6rem", mb: 2 }}>
                BUILD YOUR ORDER
            </Typography>

            <Section title="SIZE">
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            {Object.keys(PRICES.size).map((k) => (
                <FormControlLabel
                key={k}
                control={<Radio checked={size === k} />}
                label={`${k.toUpperCase()} (${PRICES.size[k].toFixed(2)}$)`}
                onClick={() => toggleChoice(setSize, size, k)}
                sx={{ mr: 0 }}
                />
            ))}
            </Box>
            </Section>

        <Section title="CRUST">
            <Box sx={{ display: "flex", gap: 2 }}>
            {Object.keys(PRICES.crust).map((k) => (
                <FormControlLabel
                key={k}
                control={<Radio checked={crust === k} />}
                label={`${k.toUpperCase()} ${PRICES.crust[k] ? `(+${PRICES.crust[k]}$)` : ""}`}
                onClick={() => toggleChoice(setCrust, crust, k)}
                />
            ))}
            </Box>
        </Section>

        <Section title="SAUCE">
            <Box sx={{ display: "flex", gap: 2 }}>
            {Object.keys(PRICES.sauce).map((k) => (
                <FormControlLabel
                key={k}
                control={<Radio checked={sauce === k} />}
                label={`${k.toUpperCase()} ${PRICES.sauce[k] ? `(+${PRICES.sauce[k]}$)` : ""}`}
                onClick={() => toggleChoice(setSauce, sauce, k)}
                />
            ))}
            </Box>
        </Section>

        <Section title="TOPPINGS">
            <Box sx={{ display: "flex", gap: 2 }}>
            {Object.keys(PRICES.toppings).map((k) => (
                <FormControlLabel
                key={k}
                control={<Radio checked={topping === k} />}
                label={`${k.toUpperCase()} (+${PRICES.toppings[k]}$)`}
                onClick={() => toggleChoice(setTopping, topping, k)}
                />
            ))}
            </Box>
        </Section>

        <Section title="BEVERAGES">
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {Object.keys(PRICES.beverages).map((k) => (
                <Box
                    key={k}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        borderRadius: 1,
                        px: 1,
                    }}
                >
                    <Typography sx={{ minWidth: 140 }}>{k.toUpperCase()}</Typography>
                    <Typography sx={{ width: 60 }}>{PRICES.beverages[k].toFixed(2)}$</Typography>
                    <IconButton size="small" onClick={() => decQty(k)}>
                    <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Typography>{quantities[k] || 0}</Typography>
                    <IconButton size="small" onClick={() => incQty(k)}>
                    <AddIcon fontSize="small" />
                    </IconButton>
                </Box>
            ))}
            </Box>
        </Section>

        <Section title="DESSERT">
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {Object.keys(PRICES.dessert).map((k) => (
            <Box key={k} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ minWidth: 180 }}>{k.toUpperCase()}</Typography>
                <Typography sx={{ width: 60 }}>{PRICES.dessert[k].toFixed(2)}$</Typography>
                <IconButton size="small" onClick={() => decQty(k)}>
                <RemoveIcon fontSize="small" />
                </IconButton>
                <Typography>{quantities[k] || 0}</Typography>
                <IconButton size="small" onClick={() => incQty(k)}>
                <AddIcon fontSize="small" />
                </IconButton>
            </Box>
            ))}
            </Box>
        </Section>

        <Section title="SIDES">
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {Object.keys(PRICES.sides).map((k) => (
                <Box key={k} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ minWidth: 180 }}>{k.toUpperCase()}</Typography>
                <Typography sx={{ width: 60 }}>{PRICES.sides[k].toFixed(2)}$</Typography>
                <IconButton size="small" onClick={() => decQty(k)}>
                <RemoveIcon fontSize="small" />
                </IconButton>
                <Typography>{quantities[k] || 0}</Typography>
                <IconButton size="small" onClick={() => incQty(k)}>
                <AddIcon fontSize="small" />
                </IconButton>
                </Box>
            ))}
            </Box>
        </Section>
        </Box>

      {/* Bottom bar */}
        <Box
        sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            background: "#6a422a",
            color: "white",
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}
        >
        <Typography sx={{ fontSize: "1.15rem" }}>
            Order Total: <b>{total}$</b>
        </Typography>

        <Box>
            <Button
                variant="contained"
                sx={{ mr: 2, backgroundColor: "#f7d1a3", color: "#4a2d1c" }}
                onClick={handleAddToCart}
            >
            Add to Cart
            </Button>

            <Button
            variant="contained"
            sx={{ backgroundColor: "#f7d1a3", color: "#4a2d1c" }}
            onClick={handleCheckout}
            >
            Checkout
            </Button>
        </Box>
        </Box>
    </Box>
);
}
