console.log("AI Chatbot Sales Assistant running...");

function qualifyLead(message) {
    if (message.includes("price")) {
        return "High-intent lead detected";
    }

    return "Normal inquiry";
}

console.log(qualifyLead("Can I know the pricing?"));
