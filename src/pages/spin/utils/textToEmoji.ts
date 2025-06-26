export default function textToEmoji  (text: string) {
    const emojiMap: Record<string, string> = {
        'cherry': '🍒',
        'lemon': '🍋',
        'orange': '🍊',
        'apple': '🍎',
        'grape': '🍇',
        'banana': '🍌',
        'watermelon': '🍉',
        'strawberry': '🍓',
        'pineapple': '🍍',
        'seven': '7️⃣',
        'bar': '📊',
        'bell': '🔔',
        'diamond': '💎',
        'heart': '❤️',
        'spade': '♠️',
        'club': '♣️',
        'wild': '🃏',
        'jackpot': '💰'
    };
    return emojiMap[text.toLowerCase()] || text;
};