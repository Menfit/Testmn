// ============================================
// TON MINING CASINO - ULTIMATE LEGENDARY EDITION v27.0
// ============================================
// تحسينات شاملة:
// - إعادة تصميم العجلة 3D (نصوص مقوسة من المركز للحافة، تأثيرات كازينو حقيقية)
// - إصلاح مشكلة السلوتس (الرموز تظهر بعد كل لفة)
// - إضافة Progressive Jackpot Card مع فائزين وهميين متناوبين
// - إضافة Referral Milestones بتصميم Grid احترافي
// - إعادة تنظيم الأزرار (Bonus, Scroll Top, Auto Clicker)
// - Auto Clicker يعمل بعد إغلاق التطبيق (نظام الحساب عند الفتح)
// - إعادة ترتيب صفحة البروفيل
// - تعديل Header (إظهار ID)
// ============================================

// ====== 1. TELEGRAM WEBAPP ======
const tg = window.Telegram?.WebApp;
if (tg) {
    tg.ready();
    tg.expand();
    tg.enableClosingConfirmation?.();
    tg.setHeaderColor('#0a0b0f');
    tg.setBackgroundColor('#0a0b0f');
    console.log("✅ Telegram WebApp initialized");
}

// ====== 2. CONFIGURATION ======
const CONFIG = {
    TON: {
        WALLET: "UQAq2CLybaIP93EGFlGL2n8A9DkGk5RPL2lYWJpoJlp8foJh",
        API_KEY: "e53929324c8cabe222c3005cd3518fe1f3c7861aa6b02442d05fb630ab31fa78",
        CENTER_API: "https://toncenter.com/api/v2/",
        ADMIN_ID: "1653918641",
        ADMIN_PASSWORD: "Admin97€",
        MIN_WITHDRAW: 1.0,
        MIN_DEPOSIT: 1.0,
        WALLET_REGEX: /^(UQ|EQ)[a-zA-Z0-9\-_]{46,48}$/,
        MANIFEST_URL: "https://menfit.github.io/Testmn/tonconnect-manifest.json"
    },
    FIREBASE: {
        apiKey: "AIzaSyD39Q7g7A2MpuuN42eWtr_bOPt-_1tvbhI",
        authDomain: "ton-71a00.firebaseapp.com",
        projectId: "ton-71a00",
        storageBucket: "ton-71a00.firebasestorage.app",
        messagingSenderId: "97952285427",
        appId: "1:97952285427:web:e7704e52fd108bdabded86"
    },
    COLLECTIONS: {
        USERS: 'users',
        DEPOSITS: 'deposits',
        WITHDRAWALS: 'withdrawals',
        TRANSACTIONS: 'transactions'
    },
    APP: {
        BASE_URL: "https://t.me/TONMininginstantbot/Ton",
        REFERRAL_PARAM: "startapp"
    },
    DEPOSIT_ADDRESSES: {
        TON: "UQAq2CLybaIP93EGFlGL2n8A9DkGk5RPL2lYWJpoJlp8foJh",
        USDT: "0x7b80739cC565bFd9Cc115C821FE628d7FB11d9e1",
        BNB: "0x7b80739cC565bFd9Cc115C821FE628d7FB11d9e1",
        ETH: "0x7b80739cC565bFd9Cc115C821FE628d7FB11d9e1",
        BTC: "bc1qczhr09tvhmas82t6fjs6qm0gaqh2ny20e5uhs4",
        SOL: "9ymhe6wAFzmXwNGiPeqkB9TqsRLexbHzFtRXNFExoknL"
    },
    DEPOSIT_MINIMUMS: {
        TON: 1.0, USDT: 10, BNB: 0.015, ETH: 0.005, BTC: 0.0005, SOL: 0.12
    },
    WITHDRAW_NETWORKS: {
        USDT: [
            { name: 'BEP20 (BSC)', value: 'BEP20', fee: 0.0005, feeCurrency: 'BNB' },
            { name: 'ERC20 (Ethereum)', value: 'ERC20', fee: 0.001, feeCurrency: 'ETH' }
        ]
    },
    NETWORK_TYPES: {
        USDT: 'bsc', BNB: 'bsc', ETH: 'erc20', BTC: 'bitcoin', SOL: 'solana', TON: 'ton'
    },
    CACHE: {
        USER_TTL: 300000,
        PRICES_TTL: 10800000,
        HISTORY_TTL: 600000,
        MINING_TTL: 60000,
        LISTENER_TTL: 30000,
        LEADERBOARD_TTL: 3600000,
        WHEEL_TTL: 86400000,
        SLOTS_TTL: 86400000
    },
    ECONOMY: {
        REFERRAL_BONUS: 0.005,
        REFERRAL_PERCENT: 0.20,
        AUTO_CLICKER_PRICE: 0.5,
        AUTO_CLICKER_DURATION: 15 * 24 * 60 * 60 * 1000,
        WHEEL_SPIN_PRICE: 0.25,
        WHEEL_FREE_SPIN_INTERVAL: 24 * 60 * 60 * 1000,
        WHEEL_GUARANTEED_MEDIUM_EVERY: 15,
        WHEEL_GUARANTEED_BIG_EVERY: 20,
        WHEEL_JACKPOT_EVERY: 15,
        WHEEL_BIG_WIN_EVERY: 15,
        SLOTS_SPIN_PRICE: 0.15,
        SLOTS_TURBO_PRICE: 0.30,
        SLOTS_FREE_SPIN_INTERVAL: 12 * 60 * 60 * 1000,
        SLOTS_WIN_RATE: 0.70,
        SLOTS_FREE_SPIN_EVERY: 10,
        SLOTS_PACK_5: { spins: 5, price: 0.75, bonus: 0 },
        SLOTS_PACK_10: { spins: 10, price: 1.5, bonus: 1 },
        SLOTS_PACK_50: { spins: 50, price: 7.5, bonus: 5 },
        SLOTS_PACK_100: { spins: 100, price: 15, bonus: 10 },
        WHEEL_PACK_5: { spins: 5, price: 1.25, bonus: 0 },
        WHEEL_PACK_10: { spins: 10, price: 2.5, bonus: 1 },
        WHEEL_PACK_50: { spins: 50, price: 12.5, bonus: 5 },
        WHEEL_PACK_100: { spins: 100, price: 25, bonus: 10 },
        STREAK_BONUS: { 3: 1.05, 7: 1.10, 30: 1.25 },
        DAILY_LOGIN_BONUS: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.10],
        MAX_WITHDRAW_DAILY: 100,
        MAX_DEPOSIT_DAILY: 1000,
        PROGRESSIVE_JACKPOT_START: 100,
        PROGRESSIVE_JACKPOT_INCREMENT: 0.01,
        HEAT_INCREMENT_ON_LOSS: 12,
        HEAT_DECREMENT_ON_SMALL_WIN: 10,
        HEAT_RESET_ON_BIG_WIN: 0,
        AUTO_SPIN_DELAY: 2000,
        BONUS_PACKS: [
            { spins: 5, price: 1.25, bonus: 1, name: "Mini" },
            { spins: 10, price: 2.5, bonus: 2, name: "Standard" },
            { spins: 50, price: 12.5, bonus: 15, name: "Mega" },
            { spins: 100, price: 25, bonus: 35, name: "Ultra" },
            { spins: 250, price: 62.5, bonus: 250, name: "Legendary" }
        ]
    },
    CMC_ICONS: {
        TON: "https://s2.coinmarketcap.com/static/img/coins/64x64/11419.png",
        USDT: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
        BNB: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
        BTC: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
        ETH: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
        SOL: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
    },
    CRYPTO_IDS: {
        TON: "the-open-network", USDT: "tether", BNB: "binancecoin",
        BTC: "bitcoin", ETH: "ethereum", SOL: "solana"
    },
    SWAP_CURRENCIES: [
        { symbol: 'TON', name: 'Toncoin' },
        { symbol: 'USDT', name: 'Tether' },
        { symbol: 'BTC', name: 'Bitcoin' },
        { symbol: 'ETH', name: 'Ethereum' },
        { symbol: 'SOL', name: 'Solana' },
        { symbol: 'BNB', name: 'BNB' }
    ],
    ALL_ASSETS: [
        { symbol: 'TON', name: 'Toncoin' },
        { symbol: 'USDT', name: 'Tether' },
        { symbol: 'BNB', name: 'BNB' },
        { symbol: 'BTC', name: 'Bitcoin' },
        { symbol: 'ETH', name: 'Ethereum' },
        { symbol: 'SOL', name: 'Solana' }
    ]
};

// ====== 3. WHEEL PRIZES (16 قطاع – تصميم كازينو حقيقي) ======
const WHEEL_PRIZES = [
    { label: "0.25", type: "TON", amount: 0.25, color: "#1e3a5f", weight: 6, icon: "💰", effect: "small", gradient: ["#1e3a5f", "#0f2a4a"], topText: "0.25", bottomText: "SMALL WIN" },
    { label: "0.5", type: "TON", amount: 0.5, color: "#2d4a6e", weight: 6, icon: "💰", effect: "small", gradient: ["#2d4a6e", "#1a3550"], topText: "0.5", bottomText: "SMALL WIN" },
    { label: "1", type: "TON", amount: 1, color: "#2e6b3e", weight: 5, icon: "💰", effect: "small", gradient: ["#2e6b3e", "#1e4a2e"], topText: "1", bottomText: "WIN" },
    { label: "🆓", type: "FREE", amount: 0, color: "#5a3e8c", weight: 4, icon: "🎁", effect: "freespin", gradient: ["#5a3e8c", "#3e2a6b"], topText: "FREE", bottomText: "BONUS" },
    { label: "2", type: "TON", amount: 2, color: "#b8860b", weight: 5, icon: "💰", effect: "medium", gradient: ["#b8860b", "#9a6a0a"], topText: "2", bottomText: "WIN" },
    { label: "🍀", type: "LUCK", amount: 0.1, color: "#4a5568", weight: 4, icon: "🍀", effect: "luck", gradient: ["#4a5568", "#2d3748"], topText: "LUCK", bottomText: "+0.1 TON" },
    { label: "3", type: "TON", amount: 3, color: "#cc7b2c", weight: 4, icon: "💰", effect: "medium", gradient: ["#cc7b2c", "#b85e1a"], topText: "3", bottomText: "WIN" },
    { label: "×2", type: "MULTIPLIER", amount: 0, color: "#b23c8c", weight: 3, icon: "⚡", effect: "multiplier", gradient: ["#b23c8c", "#8e2a6b"], topText: "2X", bottomText: "NEXT WIN" },
    { label: "5", type: "TON", amount: 5, color: "#b83b2c", weight: 3, icon: "🔥", effect: "big", gradient: ["#b83b2c", "#9a2a1a"], topText: "5", bottomText: "NICE WIN" },
    { label: "🆓", type: "FREE", amount: 0, color: "#5a3e8c", weight: 4, icon: "🎁", effect: "freespin", gradient: ["#5a3e8c", "#3e2a6b"], topText: "FREE", bottomText: "BONUS" },
    { label: "10", type: "TON", amount: 10, color: "#c92a2a", weight: 2, icon: "💎", effect: "big", gradient: ["#c92a2a", "#aa1a1a"], topText: "10", bottomText: "NICE WIN" },
    { label: "🍀", type: "LUCK", amount: 0.2, color: "#4a5568", weight: 3, icon: "🍀", effect: "luck", gradient: ["#4a5568", "#2d3748"], topText: "LUCK", bottomText: "+0.2 TON" },
    { label: "25", type: "TON", amount: 25, color: "#d45c1a", weight: 2, icon: "💎", effect: "big", gradient: ["#d45c1a", "#b8440a"], topText: "25", bottomText: "BIG WIN" },
    { label: "50", type: "TON", amount: 50, color: "#e87c1a", weight: 1, icon: "💎", effect: "jackpot", gradient: ["#e87c1a", "#c85c0a"], topText: "50", bottomText: "BIG WIN" },
    { label: "JACK", type: "JACKPOT", amount: 100, color: "#ff3333", weight: 1, icon: "👑", effect: "jackpot", gradient: ["#ff3333", "#cc0000"], topText: "100", bottomText: "JACKPOT" },
    { label: "MEGA", type: "MEGA", amount: 200, color: "#cc00cc", weight: 1, icon: "👑", effect: "mega", gradient: ["#cc00cc", "#990099"], topText: "200", bottomText: "MEGA" }
];

// ====== 4. SLOTS SYMBOLS (7 رموز 3D) ======
const SLOTS_SYMBOLS_DATA = [
    { symbol: '🍒', weight: 30, value: 0.25, type: 'TON', color: '#ff4444', effect: 'small', icon3d: true },
    { symbol: '🍋', weight: 25, value: 0.25, type: 'TON', color: '#ffdd00', effect: 'small', icon3d: true },
    { symbol: '🍇', weight: 20, value: 0.5, type: 'TON', color: '#aa44ff', effect: 'small', icon3d: true },
    { symbol: '💎', weight: 15, value: 1.0, type: 'TON', color: '#00f2ff', effect: 'medium', icon3d: true },
    { symbol: '⭐', weight: 10, value: 2.0, type: 'TON', color: '#ffff00', effect: 'medium', icon3d: true },
    { symbol: '7️⃣', weight: 5, value: 5.0, type: 'TON', color: '#ffaa00', effect: 'big', icon3d: true },
    { symbol: '🎰', weight: 2, value: 25.0, type: 'TON', color: '#ff00ff', effect: 'jackpot', icon3d: true }
];

// ====== 5. FAKE WINNERS (للعرض في Progressive Jackpot Card) ======
const FAKE_WINNERS = [
    { name: "CryptoKing", game: "wheel", amount: 50, time: "2 min ago", icon: "🎡" },
    { name: "TonWhale", game: "slots", amount: 25, time: "5 min ago", icon: "🎰" },
    { name: "LuckyMiner", game: "wheel", amount: 100, time: "12 min ago", icon: "🎡" },
    { name: "JackpotHit", game: "slots", amount: 75, time: "18 min ago", icon: "🎰" },
    { name: "GoldHunter", game: "wheel", amount: 150, time: "25 min ago", icon: "🎡" },
    { name: "SlotMaster", game: "slots", amount: 200, time: "35 min ago", icon: "🎰" },
    { name: "MegaWinner", game: "wheel", amount: 500, time: "1 hour ago", icon: "🎡" }
];

// ====== 6. DAILY CHALLENGES ======
const DAILY_CHALLENGES = [
    { id: 'wheel_spins', name: 'Spin the Wheel 10 times', target: 10, reward: 1, unit: 'TON', icon: '🎡', type: 'wheel' },
    { id: 'slots_spins', name: 'Play Slots 15 times', target: 15, reward: 2, unit: 'TON', icon: '🎰', type: 'slots' },
    { id: 'wheel_win', name: 'Win 5+ TON on Wheel', target: 1, reward: 3, unit: 'TON', icon: '🏆', type: 'wheel' },
    { id: 'slots_win', name: 'Win 10+ TON on Slots', target: 1, reward: 5, unit: 'TON', icon: '💎', type: 'slots' },
    { id: 'any_big_win', name: 'Get a BIG WIN (25+ TON)', target: 1, reward: 10, unit: 'TON', icon: '🔥', type: 'any' }
];

// ====== 7. REFERRAL MILESTONES ======
const REFERRAL_MILESTONES = [
    { referrals: 3, reward: 1, unit: 'USDT' },
    { referrals: 10, reward: 5, unit: 'USDT' },
    { referrals: 50, reward: 50, unit: 'USDT' },
    { referrals: 100, reward: 150, unit: 'USDT' },
    { referrals: 250, reward: 300, unit: 'USDT' },
    { referrals: 500, reward: 550, unit: 'USDT' },
    { referrals: 1000, reward: 1200, unit: 'USDT' }
];

// ====== 8. TRANSLATIONS ======
const translations = {
    en: {
        'app.name': 'TON Mining Casino',
        'nav.mining': 'Mining',
        'nav.market': 'Market',
        'nav.casino': 'Casino',
        'nav.profile': 'Profile',
        'send': 'Send',
        'receive': 'Receive',
        'swap': 'Swap',
        'history': 'History',
        'claim': 'CLAIM',
        'copy': 'Copy',
        'confirm': 'Confirm',
        'refresh': 'Refresh',
        'mining.currentCycle': 'Current Mining Cycle',
        'mining.nextReward': 'Next Reward',
        'mining.activeRigs': 'Active Mining Rigs',
        'mining.hashrate': 'Hashrate',
        'mining.earned': 'Earned',
        'market.title': 'Mining Hardware',
        'filters.all': 'All',
        'filters.basic': 'Basic',
        'filters.pro': 'Pro',
        'filters.quantum': 'Quantum',
        'filters.hot': 'Hot Deals',
        'casino.title': 'Casino Games',
        'casino.wheel': 'Lucky Wheel',
        'casino.slots': 'Slot Machine',
        'casino.play': 'Play Now',
        'casino.free': 'Free',
        'casino.price': 'Price',
        'casino.turbo': 'Turbo Spin',
        'casino.packs': 'Packs',
        'casino.spinsLeft': 'spins left',
        'casino.yourSpins': 'Your Spins',
        'slots.title': 'Slot Machine',
        'slots.spin': 'SPIN',
        'slots.turbo': 'TURBO',
        'slots.free': 'FREE',
        'slots.price': '0.15 TON',
        'slots.turboPrice': '0.30 TON',
        'slots.win': '🎰 YOU WON {amount} {currency}!',
        'slots.bigwin': '🎰🎰 BIG WIN! {amount} {currency}!',
        'slots.jackpot': '🎰🎰🎰 JACKPOT! {amount} {currency}!',
        'slots.pack5': '5 Spins',
        'slots.pack10': '10 Spins +1',
        'slots.pack50': '50 Spins +5',
        'slots.pack100': '100 Spins +10',
        'slots.bought': '✅ Purchased {spins} spins!',
        'wheel.title': 'Lucky Wheel',
        'wheel.spin': 'SPIN',
        'wheel.free': 'FREE',
        'wheel.price': '0.25 TON',
        'wheel.win': '🎡 YOU WON {prize}!',
        'wheel.bigwin': '🔥🔥 BIG WIN! {prize}!',
        'wheel.nicewin': '💎 NICE WIN! {prize}!',
        'wheel.jackpot': '🎰🎰🎰 JACKPOT! {amount} {currency}!',
        'wheel.megajackpot': '👑👑👑 MEGA JACKPOT! {amount} {currency}!',
        'wheel.pack5': '5 Spins',
        'wheel.pack10': '10 Spins +1',
        'wheel.pack50': '50 Spins +5',
        'wheel.pack100': '100 Spins +10',
        'wheel.spinsLeft': '{count} spins until jackpot',
        'wheel.jackpotTimer': '{count}/{total}',
        'wheel.streak': '{days} DAYS | BEST: {best}',
        'wheel.goodLuck': '🍀 GOOD LUCK! Try again!',
        'wheel.freeSpinStored': '🆓 FREE SPIN STORED!',
        'wheel.nextBigWin': '🔥 BIG WIN in {count} spins',
        'wheel.nextJackpot': '👑 JACKPOT in {count} spins',
        'wheel.nextMega': '💎 MEGA in {count} spins',
        'profile.title': 'My Profile',
        'wallet.totalBalance': 'Total Balance',
        'wallet.myAssets': 'My Assets',
        'wallet.connected': 'Connected:',
        'wallet.disconnected': 'Wallet disconnected',
        'referral.title': 'Referral Program',
        'referral.yourLink': 'Your Referral Link',
        'referral.bonusNote': 'Get 0.005 TON + 20% of their mining!',
        'referral.milestones': 'Referral Milestones',
        'notifications.title': 'Notifications',
        'notifications.clear_read': 'Clear Read',
        'notifications.clear_all': 'Clear All',
        'notifications.no_notifications': 'No notifications',
        'messages.success': 'Success',
        'messages.error': 'Error',
        'messages.loading': 'Loading...',
        'notif.welcomeBonus': '🎉 Welcome! You got 0.005 TON!',
        'notif.referralBonus': '🎉 Someone joined with your link! You got 0.005 TON!',
        'notif.wheelWin': '🎡 You won {prize}!',
        'notif.wheelJackpot': '🎡🎡🎡 JACKPOT! You won {amount} {currency}!',
        'notif.slotsWin': '🎰 You won {amount} {currency}!',
        'notif.slotsJackpot': '🎰🎰🎰 JACKPOT! You won {amount} {currency}!',
        'notif.autoClickerBought': '🤖 Auto Miner activated for 15 days!',
        'notif.depositSubmitted': '✅ Deposit request submitted!',
        'notif.withdrawSubmitted': '✅ Withdrawal request submitted!',
        'notif.depositApproved': '✅ Your deposit of {amount} {currency} has been approved!',
        'notif.depositRejected': '❌ Your deposit was rejected: {reason}',
        'notif.withdrawApproved': '✅ Your withdrawal of {amount} {currency} has been approved!',
        'notif.withdrawRejected': '❌ Your withdrawal was rejected: {reason}',
        'admin.clickRefresh': 'Click refresh to load pending requests',
        'admin.refresh': 'Refresh',
        'admin.password': 'Enter Admin Password',
        'admin.wrongPassword': 'Wrong credentials',
        'admin.noPending': 'No pending requests',
        'admin.error': 'Error loading requests',
        'admin.approve': 'Approve',
        'admin.reject': 'Reject',
        'error.insufficient': 'Insufficient balance! Need {amount} TON',
        'error.insufficient.pack': 'Insufficient balance! Buy a pack or add funds.',
        'error.payment': 'Payment failed. Please try again.',
        'error.minDeposit': 'Minimum deposit is {min} {currency}',
        'error.invalidHash': 'Invalid transaction hash',
        'error.hashUsed': 'Transaction hash already used',
        'error.enterAmount': 'Please enter a valid amount',
        'error.invalidAddress': 'Invalid {currency} address',
        'pack.buy': 'Buy Pack',
        'pack.confirm': 'Confirm purchase of {spins} spins for {price} TON?',
        'pack.telegramPay': 'Payment via Telegram Wallet',
        'pack.success': '✅ Successfully purchased {spins} spins!',
        'autospin.on': 'Auto Spin ON',
        'autospin.off': 'Auto Spin OFF',
        'win.normal': '🎉 YOU WON!',
        'win.big': '🔥🔥 BIG WIN! 🔥🔥',
        'win.nice': '💎 NICE WIN! 💎',
        'win.jackpot': '🎰🎰🎰 JACKPOT! 🎰🎰🎰',
        'win.mega': '👑👑👑 MEGA JACKPOT! 👑👑👑',
        'table.machine': 'Machine',
        'table.3days': '3 Days',
        'table.7days': '7 Days',
        'table.15days': '15 Days',
        'withdraw.network': 'Select Network',
        'withdraw.fee': 'Network fee: {fee} {currency}',
        'challenge.completed': 'Challenge Completed!',
        'challenge.reward': 'You earned {reward} {unit}!',
        'heat.meter': 'HEAT METER',
        'heat.tip': 'More losses = bigger wins!',
        'progressive.jackpot': 'PROGRESSIVE JACKPOT',
        'auto.spin': 'Auto Spin',
        'spins.until.big': 'Spins until BIG WIN',
        'spins.until.jackpot': 'Spins until JACKPOT',
        'bonus.get': 'GET BONUS',
        'bonus.packs': 'SPECIAL BONUS PACKS',
        'bonus.legendary': '⭐ LEGENDARY ⭐',
        'milestone.title': '🏆 REFERRAL MILESTONES',
        'milestone.claim': 'CLAIM',
        'milestone.locked': 'LOCKED',
        'milestone.claimed': 'CLAIMED'
    },
    ar: {
        'app.name': 'كازينو تعدين TON',
        'nav.mining': 'التعدين',
        'nav.market': 'المتجر',
        'nav.casino': 'الكازينو',
        'nav.profile': 'الملف',
        'send': 'إرسال',
        'receive': 'استقبال',
        'swap': 'تبديل',
        'history': 'السجل',
        'claim': 'استلام',
        'copy': 'نسخ',
        'confirm': 'تأكيد',
        'refresh': 'تحديث',
        'mining.currentCycle': 'دورة التعدين الحالية',
        'mining.nextReward': 'المكافأة القادمة',
        'mining.activeRigs': 'الأجهزة النشطة',
        'mining.hashrate': 'السرعة',
        'mining.earned': 'الأرباح',
        'market.title': 'أجهزة التعدين',
        'filters.all': 'الكل',
        'filters.basic': 'أساسي',
        'filters.pro': 'محترف',
        'filters.quantum': 'كمومي',
        'filters.hot': 'عروض ساخنة',
        'casino.title': 'ألعاب الكازينو',
        'casino.wheel': 'عجلة الحظ',
        'casino.slots': 'آلة السلوت',
        'casino.play': 'العب الآن',
        'casino.free': 'مجاني',
        'casino.price': 'السعر',
        'casino.turbo': 'سبين سريع',
        'casino.packs': 'باقات',
        'casino.spinsLeft': 'لفة متبقية',
        'casino.yourSpins': 'لفاتك',
        'slots.title': 'آلة السلوت',
        'slots.spin': 'لفة',
        'slots.turbo': 'سرعة',
        'slots.free': 'مجاني',
        'slots.price': '0.15 TON',
        'slots.turboPrice': '0.30 TON',
        'slots.win': '🎰 فزت بـ {amount} {currency}!',
        'slots.bigwin': '🎰🎰 فوز كبير! {amount} {currency}!',
        'slots.jackpot': '🎰🎰🎰 جاكبوت! {amount} {currency}!',
        'slots.pack5': '5 لفات',
        'slots.pack10': '10 لفات +1',
        'slots.pack50': '50 لفة +5',
        'slots.pack100': '100 لفة +10',
        'slots.bought': '✅ تم شراء {spins} لفة!',
        'wheel.title': 'عجلة الحظ',
        'wheel.spin': 'دوران',
        'wheel.free': 'مجاني',
        'wheel.price': '0.25 TON',
        'wheel.win': '🎡 فزت بـ {prize}!',
        'wheel.bigwin': '🔥🔥 فوز كبير! {prize}!',
        'wheel.nicewin': '💎 فوز رائع! {prize}!',
        'wheel.jackpot': '🎰🎰🎰 جاكبوت! {amount} {currency}!',
        'wheel.megajackpot': '👑👑👑 جاكبوت ضخم! {amount} {currency}!',
        'wheel.pack5': '5 لفات',
        'wheel.pack10': '10 لفات +1',
        'wheel.pack50': '50 لفة +5',
        'wheel.pack100': '100 لفة +10',
        'wheel.spinsLeft': '{count} لفة حتى الجاكبوت',
        'wheel.jackpotTimer': '{count}/{total}',
        'wheel.streak': '{days} يوم | الأفضل: {best}',
        'wheel.goodLuck': '🍀 حظ سعيد! حاول مرة أخرى!',
        'wheel.freeSpinStored': '🆓 تم تخزين لفة مجانية!',
        'wheel.nextBigWin': '🔥 فوز كبير بعد {count} لفات',
        'wheel.nextJackpot': '👑 جاكبوت بعد {count} لفات',
        'wheel.nextMega': '💎 ضخم بعد {count} لفات',
        'profile.title': 'ملفي الشخصي',
        'wallet.totalBalance': 'الرصيد الإجمالي',
        'wallet.myAssets': 'أصولي',
        'wallet.connected': 'متصل:',
        'wallet.disconnected': 'المحفظة غير متصلة',
        'referral.title': 'برنامج الإحالة',
        'referral.yourLink': 'رابط الإحالة',
        'referral.bonusNote': 'احصل على 0.005 TON + 20% من تعدينهم!',
        'referral.milestones': 'مراحل الإحالة',
        'notifications.title': 'الإشعارات',
        'notifications.clear_read': 'حذف المقروء',
        'notifications.clear_all': 'حذف الكل',
        'notifications.no_notifications': 'لا توجد إشعارات',
        'messages.success': 'نجاح',
        'messages.error': 'خطأ',
        'messages.loading': 'جاري التحميل...',
        'notif.welcomeBonus': '🎉 مرحباً! حصلت على 0.005 TON!',
        'notif.referralBonus': '🎉 شخص انضم عبر رابطك! حصلت على 0.005 TON!',
        'notif.wheelWin': '🎡 فزت بـ {prize}!',
        'notif.wheelJackpot': '🎡🎡🎡 جاكبوت! فزت بـ {amount} {currency}!',
        'notif.slotsWin': '🎰 فزت بـ {amount} {currency}!',
        'notif.slotsJackpot': '🎰🎰🎰 جاكبوت! فزت بـ {amount} {currency}!',
        'notif.autoClickerBought': '🤖 تم تفعيل المنجم الآلي!',
        'notif.depositSubmitted': '✅ تم تقديم طلب الإيداع!',
        'notif.withdrawSubmitted': '✅ تم تقديم طلب السحب!',
        'notif.depositApproved': '✅ تمت الموافقة على إيداع {amount} {currency}!',
        'notif.depositRejected': '❌ تم رفض الإيداع: {reason}',
        'notif.withdrawApproved': '✅ تمت الموافقة على سحب {amount} {currency}!',
        'notif.withdrawRejected': '❌ تم رفض السحب: {reason}',
        'admin.clickRefresh': 'اضغط تحديث لتحميل الطلبات',
        'admin.refresh': 'تحديث',
        'admin.password': 'أدخل كلمة سر المشرف',
        'admin.wrongPassword': 'بيانات دخول خاطئة',
        'admin.noPending': 'لا توجد طلبات معلقة',
        'admin.error': 'خطأ في تحميل الطلبات',
        'admin.approve': 'موافقة',
        'admin.reject': 'رفض',
        'error.insufficient': 'رصيد غير كاف! تحتاج {amount} TON',
        'error.insufficient.pack': 'رصيد غير كاف! اشتر باقة أو أضف رصيد.',
        'error.payment': 'فشل الدفع. حاول مرة أخرى.',
        'error.minDeposit': 'الحد الأدنى للإيداع {min} {currency}',
        'error.invalidHash': 'هاش معاملة غير صالح',
        'error.hashUsed': 'هاش المعاملة مستخدم بالفعل',
        'error.enterAmount': 'الرجاء إدخال مبلغ صحيح',
        'error.invalidAddress': 'عنوان {currency} غير صالح',
        'pack.buy': 'شراء الباقة',
        'pack.confirm': 'تأكيد شراء {spins} لفة بـ {price} TON؟',
        'pack.telegramPay': 'الدفع عبر محفظة تليجرام',
        'pack.success': '✅ تم شراء {spins} لفة بنجاح!',
        'autospin.on': 'تشغيل تلقائي',
        'autospin.off': 'إيقاف تلقائي',
        'win.normal': '🎉 فزت!',
        'win.big': '🔥🔥 فوز كبير! 🔥🔥',
        'win.nice': '💎 فوز رائع! 💎',
        'win.jackpot': '🎰🎰🎰 جاكبوت! 🎰🎰🎰',
        'win.mega': '👑👑👑 جاكبوت ضخم! 👑👑👑',
        'table.machine': 'الجهاز',
        'table.3days': '٣ أيام',
        'table.7days': '٧ أيام',
        'table.15days': '١٥ يوماً',
        'withdraw.network': 'اختر الشبكة',
        'withdraw.fee': 'رسوم الشبكة: {fee} {currency}',
        'challenge.completed': 'تم إكمال التحدي!',
        'challenge.reward': 'لقد ربحت {reward} {unit}!',
        'heat.meter': 'مقياس الحرارة',
        'heat.tip': 'خسائر أكثر = أرباح أكبر!',
        'progressive.jackpot': 'الجاكبوت التراكمي',
        'auto.spin': 'دوران تلقائي',
        'spins.until.big': 'لفات حتى الفوز الكبير',
        'spins.until.jackpot': 'لفات حتى الجاكبوت',
        'bonus.get': 'احصل على مكافأة',
        'bonus.packs': 'باقات المكافآت الخاصة',
        'bonus.legendary': '⭐ أسطوري ⭐',
        'milestone.title': '🏆 إنجازات الإحالة',
        'milestone.claim': 'استلام',
        'milestone.locked': 'مغلق',
        'milestone.claimed': 'تم الاستلام'
    }
};

// ====== 9. LANGUAGE MANAGEMENT ======
let currentLanguage = localStorage.getItem('preferred_language') || 'en';

function t(key, params = {}) {
    let text = translations[currentLanguage]?.[key] || translations.en[key] || key;
    Object.keys(params).forEach(p => text = text.replace(`{${p}}`, params[p]));
    return text;
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    localStorage.setItem('preferred_language', currentLanguage);
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', currentLanguage === 'ar');
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.getAttribute('data-i18n'));
    });
    const langIcon = document.getElementById('langIcon');
    if (langIcon) langIcon.textContent = currentLanguage === 'en' ? '🇬🇧' : '🇸🇦';
    showToast(t('messages.success'), 'success');
}

// ====== 10. MACHINES DATA ======
const MACHINES = [
    {
        id: 'm1', name: 'Free Miner', nameAr: 'منجم مجاني',
        description: 'Start mining for free! Perfect for beginners.',
        descriptionAr: 'ابدأ التعدين مجاناً! مثالي للمبتدئين.',
        icon: 'fa-gem', color: '#808080', filter: 'free',
        yield: 0.01, interval: 4 * 3600000, cycleText: '4 hours', cycleTextAr: '٤ ساعات',
        hashrate: '10 MH/s', requirements: null,
        plans: [
            { duration: 3, durationText: '3 days', durationTextAr: '٣ أيام', price: 0, returnPercent: 0, returnAmount: 0, total: 0 },
            { duration: 7, durationText: '7 days', durationTextAr: '٧ أيام', price: 0, returnPercent: 0, returnAmount: 0, total: 0 },
            { duration: 15, durationText: '15 days', durationTextAr: '١٥ يوماً', price: 0, returnPercent: 0, returnAmount: 0, total: 0 }
        ]
    },
    {
        id: 'm2', name: 'Turbo v2', nameAr: 'تربو v2',
        description: 'High-speed ASIC miner. 3x faster!',
        descriptionAr: 'جهاز عالي السرعة. أسرع بثلاث مرات!',
        icon: 'fa-bolt', color: '#0088cc', filter: 'basic',
        yield: 0.2, interval: 2.5 * 3600000, cycleText: '2.5 hours', cycleTextAr: '٢.٥ ساعة',
        hashrate: '50 MH/s', requirements: null,
        plans: [
            { duration: 3, durationText: '3 days', durationTextAr: '٣ أيام', price: 5.0, returnPercent: 40, returnAmount: 2.0, total: 7.0 },
            { duration: 7, durationText: '7 days', durationTextAr: '٧ أيام', price: 10.0, returnPercent: 80, returnAmount: 8.0, total: 18.0 },
            { duration: 15, durationText: '15 days', durationTextAr: '١٥ يوماً', price: 15.0, returnPercent: 170, returnAmount: 25.5, total: 40.5 }
        ]
    },
    {
        id: 'm3', name: 'Turbo v3', nameAr: 'تربو v3',
        description: 'Next-gen cooling system. Maximum efficiency!',
        descriptionAr: 'تبريد متطور. كفاءة قصوى!',
        icon: 'fa-rocket', color: '#00f2ff', filter: 'pro',
        yield: 0.35, interval: 2 * 3600000, cycleText: '2 hours', cycleTextAr: 'ساعتان',
        hashrate: '120 MH/s', requirements: null,
        plans: [
            { duration: 3, durationText: '3 days', durationTextAr: '٣ أيام', price: 7.5, returnPercent: 40, returnAmount: 3.0, total: 10.5 },
            { duration: 7, durationText: '7 days', durationTextAr: '٧ أيام', price: 15.0, returnPercent: 80, returnAmount: 12.0, total: 27.0 },
            { duration: 15, durationText: '15 days', durationTextAr: '١٥ يوماً', price: 22.5, returnPercent: 170, returnAmount: 38.25, total: 60.75 }
        ]
    },
    {
        id: 'm4', name: 'ASIC Pro', nameAr: 'ASIC برو',
        description: 'Professional mining rig. Serious power!',
        descriptionAr: 'جهاز احترافي. قوة هائلة!',
        icon: 'fa-gem', color: '#bc13fe', filter: 'pro',
        yield: 0.5, interval: 3600000, cycleText: '1 hour', cycleTextAr: 'ساعة',
        hashrate: '300 MH/s', requirements: { minEarnings: 5 },
        plans: [
            { duration: 3, durationText: '3 days', durationTextAr: '٣ أيام', price: 10.0, returnPercent: 40, returnAmount: 4.0, total: 14.0 },
            { duration: 7, durationText: '7 days', durationTextAr: '٧ أيام', price: 20.0, returnPercent: 80, returnAmount: 16.0, total: 36.0 },
            { duration: 15, durationText: '15 days', durationTextAr: '١٥ يوماً', price: 30.0, returnPercent: 170, returnAmount: 51.0, total: 81.0 }
        ]
    },
    {
        id: 'm5', name: 'Quantum RIG', nameAr: 'كوانتم ريج',
        description: 'Quantum computing technology. The future!',
        descriptionAr: 'تقنية كمومية. مستقبل التعدين!',
        icon: 'fa-crown', color: '#ffaa00', filter: 'quantum',
        yield: 0.8, interval: 45 * 60 * 1000, cycleText: '45 minutes', cycleTextAr: '٤٥ دقيقة',
        hashrate: '800 MH/s', requirements: { referrals: 3 },
        plans: [
            { duration: 3, durationText: '3 days', durationTextAr: '٣ أيام', price: 50, returnPercent: 80, returnAmount: 40, total: 90 },
            { duration: 7, durationText: '7 days', durationTextAr: '٧ أيام', price: 75, returnPercent: 120, returnAmount: 90, total: 165 },
            { duration: 15, durationText: '15 days', durationTextAr: '١٥ يوماً', price: 100, returnPercent: 200, returnAmount: 200, total: 300 }
        ]
    },
    {
        id: 'm6', name: 'Legendary', nameAr: 'أسطوري',
        description: 'The ultimate mining machine. Legendary status!',
        descriptionAr: 'الجهاز الأقوى. مكانة أسطورية!',
        icon: 'fa-star', color: '#ff4444', filter: 'quantum',
        yield: 1.2, interval: 30 * 60 * 1000, cycleText: '30 minutes', cycleTextAr: '٣٠ دقيقة',
        hashrate: '2 GH/s', requirements: { referrals: 5, minEarnings: 25, streak: 7 },
        plans: [
            { duration: 3, durationText: '3 days', durationTextAr: '٣ أيام', price: 75, returnPercent: 80, returnAmount: 60, total: 135 },
            { duration: 7, durationText: '7 days', durationTextAr: '٧ أيام', price: 112.5, returnPercent: 120, returnAmount: 135, total: 247.5 },
            { duration: 15, durationText: '15 days', durationTextAr: '١٥ يوماً', price: 150, returnPercent: 200, returnAmount: 300, total: 450 }
        ]
    }
];

// ====== 11. FIREBASE ======
let firebaseApp, db;
try {
    if (typeof firebase !== 'undefined') {
        firebaseApp = firebase.initializeApp(CONFIG.FIREBASE);
        db = firebase.firestore();
        db.enablePersistence({ synchronizeTabs: true }).catch(console.warn);
        console.log("🔥 Firebase initialized");
    }
} catch (error) {
    console.error("Firebase error:", error);
}

// ====== 12. USER ID ======
const userId = tg?.initDataUnsafe?.user?.id?.toString() || 
               localStorage.getItem('ton_user_id') || 
               'user_' + Math.random().toString(36).substr(2, 9);
const userName = tg?.initDataUnsafe?.user?.first_name || 'Crypto Miner';
const userFirstName = tg?.initDataUnsafe?.user?.first_name || 'Miner';
const userLastName = tg?.initDataUnsafe?.user?.last_name || '';
const userUsername = tg?.initDataUnsafe?.user?.username || '';
const userPhoto = tg?.initDataUnsafe?.user?.photo_url || '';

localStorage.setItem('ton_user_id', userId);

// ====== 13. ADMIN ======
let isAdmin = false;
let adminClickCount = 0, lastAdminClick = 0;
let currentRejectId = null, currentRejectType = null, currentRejectData = null;

function checkAdminAndAddCrown() {
    if (userId === CONFIG.TON.ADMIN_ID && isAdmin) {
        const headerActions = document.querySelector('.header-actions-bottom');
        if (!headerActions) return;
        const existingCrown = document.getElementById('adminCrownBtn');
        if (existingCrown) existingCrown.remove();
        const crownBtn = document.createElement('button');
        crownBtn.id = 'adminCrownBtn';
        crownBtn.className = 'icon-btn';
        crownBtn.innerHTML = '<i class="fa-solid fa-crown" style="color: gold;"></i>';
        crownBtn.onclick = showAdminPanel;
        crownBtn.title = 'Admin Panel';
        headerActions.appendChild(crownBtn);
    }
}

function handleAvatarClick() {
    const now = Date.now();
    if (now - lastAdminClick > 2000) adminClickCount = 0;
    adminClickCount++;
    lastAdminClick = now;
    
    if (adminClickCount >= 5) {
        const pwd = prompt(t('admin.password'));
        
        if (userId === CONFIG.TON.ADMIN_ID && pwd === CONFIG.TON.ADMIN_PASSWORD) {
            isAdmin = true;
            checkAdminAndAddCrown();
            showAdminPanel();
        } else if (pwd) {
            showToast(t('admin.wrongPassword'), 'error');
        }
    }
}

// ====== 14. CACHE KEYS ======
const CACHE_KEYS = {
    USER: `user_${userId}`,
    TRANSACTIONS: `transactions_${userId}`,
    PRICES: 'live_prices',
    NOTIFICATIONS: `notifications_${userId}`,
    REFERRAL_PROCESSED: `referral_processed_${userId}`,
    LEADERBOARD: 'leaderboard_cache',
    BACKUPS: 'user_backups'
};

// ====== 15. USER STATE ======
let userData = {
    uid: userId,
    username: userName,
    firstName: userFirstName,
    lastName: userLastName,
    telegramUsername: userUsername,
    photoUrl: userPhoto,
    
    balances: { TON: 0, USDT: 0, BNB: 0, BTC: 0, ETH: 0, SOL: 0 },
    balance: 0,
    totalEarned: 0,
    totalWithdrawn: 0,
    totalDeposited: 0,
    activeMachine: 'm1',
    activePlan: MACHINES[0].plans[0],
    machineExpiry: Infinity,
    lastClaim: Date.now(),
    claims: 0,
    streak: 0,
    longestStreak: 0,
    lastClaimDate: new Date().toDateString(),
    upgrades: 0,
    autoClicker: { active: false, expiry: 0, lastAutoClaim: 0, pendingRewards: 0 },
    
    wheel: { 
        lastFreeSpin: 0, 
        totalSpins: 0, 
        heatLevel: 0,
        spinsSinceLastMedium: 0,
        spinsSinceLastBig: 0,
        purchasedSpins: 0,
        freeSpins: 0,
        autoSpin: false,
        totalWon: 0,
        biggestWin: 0
    },
    
    slots: { 
        lastFreeSpin: 0, 
        totalSpins: 0, 
        purchasedSpins: 0,
        freeSpins: 0,
        multiplier: 1,
        autoSpin: false,
        spinsWithoutWin: 0,
        totalWon: 0,
        biggestWin: 0
    },
    
    referrals: [],
    referralEarnings: 0,
    referralCount: 0,
    referralCode: null,
    referredBy: null,
    referralMilestonesClaimed: [],
    referralMiningTrack: {},
    
    pendingWithdrawals: [],
    completedWithdrawals: [],
    pendingDeposits: [],
    completedDeposits: [],
    transactions: [],
    notifications: [],
    
    language: currentLanguage,
    createdAt: Date.now(),
    tonWallet: null,
    usedHashes: [],
    
    dailyLogin: { lastLogin: null, streak: 0 },
    dailyChallenges: {
        date: null,
        completed: [],
        claimed: [],
        streak: 0
    },
    casinoStats: {
        totalWon: 0,
        biggestWin: 0,
        lastWinDate: null
    },
    progressiveJackpot: CONFIG.ECONOMY.PROGRESSIVE_JACKPOT_START,
    fakeWinnerIndex: 0,
    lastFakeWinnerUpdate: Date.now()
};

userData.balance = userData.balances.TON;

// ====== 16. CACHE MANAGEMENT ======
let lastUserLoadTime = 0;
let lastPricesLoadTime = 0;
let lastHistoryCheckTime = 0;

function loadUserFromCache() {
    try {
        const cached = localStorage.getItem(CACHE_KEYS.USER);
        if (cached) {
            const data = JSON.parse(cached);
            Object.assign(userData, data);
            userData.balance = userData.balances.TON;
            console.log("✅ User loaded from cache");
            return true;
        }
    } catch (e) {}
    return false;
}

function saveUserToCache() {
    try {
        localStorage.setItem(CACHE_KEYS.USER, JSON.stringify({ 
            ...userData, 
            _timestamp: Date.now() 
        }));
        backupUserData();
        console.log("💾 User data saved to cache");
    } catch (e) {
        console.error("Failed to save to cache:", e);
    }
}

function loadLocalTransactions() {
    try {
        return JSON.parse(localStorage.getItem(CACHE_KEYS.TRANSACTIONS)) || [];
    } catch {
        return [];
    }
}

function saveLocalTransactions(txs) {
    try {
        localStorage.setItem(CACHE_KEYS.TRANSACTIONS, JSON.stringify(txs));
    } catch {}
}

function loadLocalNotifications() {
    try {
        return JSON.parse(localStorage.getItem(CACHE_KEYS.NOTIFICATIONS)) || [];
    } catch {
        return [];
    }
}

function saveLocalNotifications(notes) {
    try {
        localStorage.setItem(CACHE_KEYS.NOTIFICATIONS, JSON.stringify(notes));
    } catch {}
}

function backupUserData() {
    try {
        const backups = JSON.parse(localStorage.getItem(CACHE_KEYS.BACKUPS) || '[]');
        backups.unshift({ data: userData, timestamp: Date.now() });
        if (backups.length > 3) backups.pop();
        localStorage.setItem(CACHE_KEYS.BACKUPS, JSON.stringify(backups));
    } catch (e) {}
}

function restoreFromBackup() {
    try {
        const backups = JSON.parse(localStorage.getItem(CACHE_KEYS.BACKUPS) || '[]');
        if (backups.length === 0) {
            showToast("No backups found", "error");
            return false;
        }
        const latest = backups[0];
        Object.assign(userData, latest.data);
        userData.balance = userData.balances.TON;
        saveUserToCache();
        updateUI();
        showToast("✅ Data restored from backup!", "success");
        return true;
    } catch (e) {
        showToast("❌ Failed to restore backup", "error");
        return false;
    }
}

// ====== 17. AUTO CLICKER – يعمل بعد إغلاق التطبيق ======
function processPendingAutoClickerRewards() {
    if (!userData.autoClicker.active) return 0;
    
    const now = Date.now();
    const lastClaim = userData.autoClicker.lastAutoClaim;
    const expiry = userData.autoClicker.expiry;
    
    if (now > expiry) {
        userData.autoClicker.active = false;
        saveUserToCache();
        return 0;
    }
    
    const timePassed = now - lastClaim;
    const machine = getActiveMachine();
    const cyclesPassed = Math.floor(timePassed / machine.interval);
    
    if (cyclesPassed <= 0) return 0;
    
    const rewardPerCycle = machine.yield * getStreakBonus();
    const totalReward = rewardPerCycle * cyclesPassed;
    
    userData.balances.TON += totalReward;
    userData.balance = userData.balances.TON;
    userData.totalEarned += totalReward;
    userData.autoClicker.lastAutoClaim = now - (timePassed % machine.interval);
    
    addTransaction('auto_miner', totalReward, { currency: 'TON', cycles: cyclesPassed });
    saveUserToCache();
    
    return totalReward;
}

function checkAutoClickerRewardsOnStart() {
    const reward = processPendingAutoClickerRewards();
    if (reward > 0) {
        showToastPro(`🤖 Auto Miner collected ${reward.toFixed(4)} TON while you were away!`, 'success');
    }
}

// ====== 18. ON-DEMAND LISTENERS ======
let activeListeners = new Map();
let listenerTimeouts = new Map();

function startOnDemandListener(collection, docId, callback, timeoutMs = CONFIG.CACHE.LISTENER_TTL) {
    const id = `${collection}_${docId}`;
    
    if (activeListeners.has(id)) {
        activeListeners.get(id)();
        activeListeners.delete(id);
    }
    
    if (listenerTimeouts.has(id)) {
        clearTimeout(listenerTimeouts.get(id));
        listenerTimeouts.delete(id);
    }
    
    console.log(`👂 Starting on-demand listener for ${id} (${timeoutMs/1000}s)`);
    
    const unsubscribe = db.collection(collection).doc(docId).onSnapshot(
        (doc) => {
            if (doc.exists) {
                const data = doc.data();
                callback(data);
                if (data.status === 'approved' || data.status === 'rejected') {
                    console.log(`✅ Final status reached, stopping listener`);
                    stopOnDemandListener(id);
                }
            }
        },
        (error) => {
            console.error(`❌ Listener error:`, error);
            stopOnDemandListener(id);
        }
    );
    
    activeListeners.set(id, unsubscribe);
    
    const timeout = setTimeout(() => {
        console.log(`⏰ Listener timeout after ${timeoutMs/1000}s`);
        stopOnDemandListener(id);
    }, timeoutMs);
    
    listenerTimeouts.set(id, timeout);
}

function stopOnDemandListener(id) {
    if (activeListeners.has(id)) {
        activeListeners.get(id)();
        activeListeners.delete(id);
    }
    if (listenerTimeouts.has(id)) {
        clearTimeout(listenerTimeouts.get(id));
        listenerTimeouts.delete(id);
    }
}

function stopAllListeners() {
    activeListeners.forEach(u => u());
    activeListeners.clear();
    listenerTimeouts.forEach(t => clearTimeout(t));
    listenerTimeouts.clear();
}

// ====== 19. GAME PAGE NAVIGATION ======
let currentPage = 'mining';

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(page + 'Page');
    if (target) target.classList.add('active');
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    const nav = document.querySelector(`[data-page="${page}"]`);
    if (nav) nav.classList.add('active');
    currentPage = page;
    const header = document.getElementById('mainHeader');
    if (header) header.style.display = (page === 'wheelGame' || page === 'slotsGame') ? 'none' : 'flex';
    if (page === 'market') renderMarket();
    if (page === 'profile') { 
        updateLeaderboard(); 
        renderReferralMilestones(); 
        renderReferralTree(); 
        updateChart(); 
    }
    if (page === 'casino') { 
        updateWheelUI(); 
        updateSlotsUI(); 
        renderDailyChallenges();
        updateProgressiveJackpotDisplay();
        updateFakeWinnerDisplay();
    }
    showRandomSticker();
    
    // التحكم في ظهور زر Bonus (يظهر فقط في صفحة الكازينو)
    const bonusBtn = document.getElementById('floatingBonusBtn');
    if (bonusBtn) {
        bonusBtn.style.display = page === 'casino' ? 'flex' : 'none';
    }
}

function openWheelGame() {
    console.log("🎡 Opening Wheel Game");
    const header = document.getElementById('mainHeader');
    if (header) header.style.display = 'none';
    showPage('wheelGame');
    setTimeout(() => {
        initWheelCanvas();
        updateWheelUI();
        updateHeatMeter('wheel');
        updateGuaranteedCounters();
        updateProgressiveJackpotDisplay();
    }, 100);
}

function openSlotsGame() {
    console.log("🎰 Opening Slots Game");
    const header = document.getElementById('mainHeader');
    if (header) header.style.display = 'none';
    showPage('slotsGame');
    setTimeout(() => {
        initSlotsCanvas();
        updateSlotsUI();
        updateHeatMeter('slots');
        updateProgressiveJackpotDisplay();
    }, 100);
}

function exitGame() {
    console.log("🔙 Exiting game");
    const header = document.getElementById('mainHeader');
    if (header) header.style.display = 'flex';
    showPage('casino');
    stopAutoSpin();
}

function showWallet() {
    showPage('profile');
}

// ====== 20. UTILITIES ======
function formatAddress(addr) { return addr?.length > 10 ? addr.slice(0,6)+'...'+addr.slice(-4) : addr || ''; }
function formatTON(amount) { return amount.toFixed(4); }
function formatNumber(num) {
    if (num >= 1e6) return (num/1e6).toFixed(2)+'M';
    if (num >= 1e3) return (num/1e3).toFixed(2)+'K';
    return num.toFixed(2);
}

function formatBalance(amount, currency) {
    if (currency === 'USDT' || currency === 'TON') return amount.toFixed(2);
    if (currency === 'BNB' || currency === 'ETH' || currency === 'SOL') return amount.toFixed(4);
    if (currency === 'BTC') return amount.toFixed(6);
    return amount.toFixed(4);
}

function isValidAddress(address, currency) {
    const network = CONFIG.NETWORK_TYPES[currency] || 'bsc';
    if (network === 'bsc' || network === 'erc20') return address.startsWith('0x') && address.length === 42;
    if (network === 'solana') return address.length >= 32 && address.length <= 44 && !address.startsWith('0x');
    if (network === 'bitcoin') return address.startsWith('1') || address.startsWith('3') || address.startsWith('bc1');
    if (network === 'ton') return CONFIG.TON.WALLET_REGEX.test(address);
    return address.length > 0;
}

function validateTransactionHash(txHash, currency) {
    const network = CONFIG.NETWORK_TYPES[currency] || 'bsc';
    if (network === 'bsc' || network === 'erc20') return txHash.startsWith('0x') && txHash.length === 66;
    if (network === 'solana') return txHash.length >= 64 && txHash.length <= 88 && !txHash.startsWith('0x');
    return txHash.length > 10;
}

function randomId() { return Date.now().toString(36) + Math.random().toString(36).substr(2,9); }

function showToast(message, type='info') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    const toastMessage = document.getElementById('toastMessage');
    const toastIcon = toast.querySelector('i');
    
    toastMessage.textContent = message;
    if (type === 'success') toastIcon.className = 'fa-regular fa-circle-check';
    else if (type === 'error') toastIcon.className = 'fa-regular fa-circle-xmark';
    else toastIcon.className = 'fa-regular fa-circle-info';
    
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
}

function showToastPro(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const existing = container.querySelector('.toast-pro');
    if (existing) {
        existing.classList.add('closing');
        setTimeout(() => existing.remove(), 300);
    }
    const toast = document.createElement('div');
    toast.className = `toast-pro ${type}`;
    let icon = 'fa-circle-info';
    if (type === 'success') icon = 'fa-circle-check';
    else if (type === 'error') icon = 'fa-circle-xmark';
    else if (type === 'warning') icon = 'fa-circle-exclamation';
    toast.innerHTML = `<i class="fa-regular ${icon}"></i><span class="message">${message}</span>`;
    container.appendChild(toast);
    if (type === 'error') hapticFeedback('error');
    else if (type === 'success') hapticFeedback('success');
    setTimeout(() => {
        toast.classList.add('closing');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

function animateElement(selector, animation) {
    const el = document.querySelector(selector);
    if (el) { el.classList.add(animation); setTimeout(() => el.classList.remove(animation), 500); }
}

function scrollToTop() { document.querySelector('.main-content')?.scrollTo({top:0,behavior:'smooth'}); }

function hapticFeedback(type='light') {
    if (tg?.HapticFeedback) {
        if (type === 'light') tg.HapticFeedback.impactOccurred('light');
        else if (type === 'medium') tg.HapticFeedback.impactOccurred('medium');
        else if (type === 'heavy') tg.HapticFeedback.impactOccurred('heavy');
        else if (type === 'success') tg.HapticFeedback.notificationOccurred('success');
        else if (type === 'error') tg.HapticFeedback.notificationOccurred('error');
        else if (type === 'warning') tg.HapticFeedback.notificationOccurred('warning');
    }
}

function createParticles() {
    const container = document.querySelector('.energy-particles');
    if (!container) return;
    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() + 's';
        container.appendChild(p);
        setTimeout(() => p.remove(), 2000);
    }
}

// تأثيرات بصرية
function createScreenFlash() {
    const flash = document.createElement('div');
    flash.className = 'screen-flash';
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 300);
}

function createScreenShake() {
    document.body.classList.add('screen-shake');
    setTimeout(() => document.body.classList.remove('screen-shake'), 500);
}

function createGoldExplosion() {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'gold-particle';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';
        particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
        particle.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }
}

function createConfetti() {
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);
        confetti.animate([{ top: '-10px' }, { top: '100vh' }], { duration: 2000 + Math.random() * 2000 }).onfinish = () => confetti.remove();
    }
}

// تأثيرات الجليد للعجلة
function createIceParticles() {
    const ring = document.querySelector('.wheel-icy-ring');
    if (!ring) return;
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'ice-particle';
        const angle = Math.random() * Math.PI * 2;
        const radius = 150 + Math.random() * 30;
        particle.style.left = 50 + Math.cos(angle) * (radius / 3.2) + '%';
        particle.style.top = 50 + Math.sin(angle) * (radius / 3.2) + '%';
        particle.style.setProperty('--tx', (Math.random() - 0.5) * 80 + 'px');
        particle.style.setProperty('--ty', (Math.random() - 0.5) * 80 + 'px');
        particle.style.animationDelay = Math.random() + 's';
        ring.appendChild(particle);
        setTimeout(() => particle.remove(), 2000);
    }
}

function createIcyBurst() {
    const container = document.querySelector('.wheel-game-container');
    if (!container) return;
    const burst = document.createElement('div');
    burst.className = 'icy-burst';
    container.appendChild(burst);
    setTimeout(() => burst.remove(), 1000);
}

// ====== 21. MINING MANAGER ======
let miningTimer = null, autoClickerTimer = null;

function startMining() {
    if (miningTimer) clearInterval(miningTimer);
    miningTimer = setInterval(updateMining, 1000);
    updateMining();
    if (userData.autoClicker?.active) startAutoClicker();
}

function stopMining() {
    if (miningTimer) { clearInterval(miningTimer); miningTimer = null; }
    if (autoClickerTimer) { clearInterval(autoClickerTimer); autoClickerTimer = null; }
}

function updateMining() {
    const progress = getClaimProgress();
    const timeLeft = getTimeUntilNextClaim();
    const progressBar = document.getElementById('miningProgress');
    const timerEl = document.getElementById('miningTimer');
    const claimBtn = document.getElementById('claimBtn');
    const nextEl = document.getElementById('nextReward');
    const activeMachineName = document.getElementById('activeMachineName');
    const machine = getActiveMachine();
    const hashRateEl = document.getElementById('hashRate');
    const streakCountEl = document.getElementById('streakCount');
    const totalEarnedEl = document.getElementById('totalEarned');
    
    if (progressBar) progressBar.style.width = progress + '%';
    if (activeMachineName) activeMachineName.textContent = currentLanguage === 'ar' ? machine.nameAr : machine.name;
    if (hashRateEl) hashRateEl.textContent = machine.hashrate.split(' ')[0];
    if (streakCountEl) streakCountEl.textContent = userData.streak;
    if (totalEarnedEl) totalEarnedEl.textContent = formatTON(userData.totalEarned);
    
    if (progress >= 100) {
        if (timerEl) { timerEl.textContent = 'READY'; timerEl.style.color = '#22c55e'; }
        if (claimBtn) claimBtn.disabled = false;
    } else {
        if (timerEl) { timerEl.textContent = formatTime(timeLeft); timerEl.style.color = '#00f2ff'; }
        if (claimBtn) claimBtn.disabled = true;
    }
    
    if (nextEl) nextEl.textContent = formatTON(machine.yield * getStreakBonus()) + ' TON';
    
    if (isMachineExpired()) handleExpiry();
    
    if (userData.autoClicker?.active && Date.now() > userData.autoClicker.expiry) {
        userData.autoClicker.active = false;
        saveUserToCache();
        stopAutoClicker();
        showToast('Auto Miner expired', 'info');
    }
}

function formatTime(ms) {
    if (ms <= 0) return '00:00:00';
    const s = Math.floor(ms / 1000);
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
}

async function claim() {
    const machine = getActiveMachine();
    if (getTimeUntilNextClaim() > 0) { showToast('Not ready yet', 'error'); return; }
    
    const bonus = getStreakBonus();
    const reward = machine.yield * bonus;
    
    updateStreak();
    
    userData.balances.TON += reward;
    userData.balance = userData.balances.TON;
    userData.totalEarned += reward;
    userData.lastClaim = Date.now();
    userData.claims++;
    
    addTransaction('mining', reward, { machine: machine.id, bonus });
    saveUserToCache();
    
    if (userData.referredBy) {
        try {
            if (db) {
                const referrerQuery = await db.collection(CONFIG.COLLECTIONS.USERS).where('referralCode', '==', userData.referredBy).limit(1).get();
                if (!referrerQuery.empty) await addReferralMiningBonus(referrerQuery.docs[0].id, reward);
            }
        } catch (e) {}
    }
    
    showToast(`Claimed ${formatTON(reward)} TON!${bonus > 1 ? ` (${((bonus-1)*100).toFixed(0)}% bonus)` : ''}`, 'success');
    hapticFeedback('success');
    showWinPopup(`${formatTON(reward)} TON`, 'normal');
    createParticles();
    updateUI();
    if (db) saveToFirebase();
}

async function addReferralMiningBonus(referrerId, miningAmount) {
    if (!db) return;
    const bonus = miningAmount * CONFIG.ECONOMY.REFERRAL_PERCENT;
    try {
        await db.collection(CONFIG.COLLECTIONS.USERS).doc(referrerId).update({
            'balances.TON': firebase.firestore.FieldValue.increment(bonus),
            totalEarned: firebase.firestore.FieldValue.increment(bonus),
            referralEarnings: firebase.firestore.FieldValue.increment(bonus)
        });
        await addNotification(referrerId, `Referral mining bonus: ${bonus.toFixed(4)} TON`, 'success');
    } catch (e) {}
}

function handleExpiry() {
    if (userData.activeMachine !== 'm1') {
        userData.activeMachine = 'm1';
        userData.activePlan = MACHINES[0].plans[0];
        userData.machineExpiry = Infinity;
        saveUserToCache();
        showToast('Your rental has expired. Free Miner activated.', 'warning');
        updateUI();
    }
}

function addTransaction(type, amount, details = {}) {
    const tx = { 
        id: randomId(), 
        type, 
        amount, 
        currency: details.currency || 'TON', 
        balance: userData.balance, 
        timestamp: Date.now(), 
        ...details 
    };
    
    if (!userData.transactions) userData.transactions = [];
    userData.transactions.unshift(tx);
    if (userData.transactions.length > 100) userData.transactions = userData.transactions.slice(0, 100);
    
    saveLocalTransactions(userData.transactions);
    return tx;
}

function getTimeUntilNextClaim() {
    const machine = getActiveMachine();
    return Math.max(0, machine.interval - (Date.now() - userData.lastClaim));
}

function getClaimProgress() {
    const machine = getActiveMachine();
    return Math.min((Date.now() - userData.lastClaim) / machine.interval * 100, 100);
}

function getActiveMachine() { return MACHINES.find(m => m.id === userData.activeMachine) || MACHINES[0]; }
function isMachineExpired() { return userData.activeMachine !== 'm1' && userData.machineExpiry < Date.now(); }

function updateStreak() {
    const today = new Date().toDateString();
    if (userData.lastClaimDate === today) return userData.streak;
    
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const newStreak = userData.lastClaimDate === yesterday ? userData.streak + 1 : 1;
    
    userData.streak = newStreak;
    userData.lastClaimDate = today;
    if (newStreak > userData.longestStreak) userData.longestStreak = newStreak;
    return newStreak;
}

function getStreakBonus() {
    if (userData.streak >= 30) return CONFIG.ECONOMY.STREAK_BONUS[30];
    if (userData.streak >= 7) return CONFIG.ECONOMY.STREAK_BONUS[7];
    if (userData.streak >= 3) return CONFIG.ECONOMY.STREAK_BONUS[3];
    return 1.0;
}

// ====== 22. AUTO CLICKER ======
function startAutoClicker() {
    if (autoClickerTimer) clearInterval(autoClickerTimer);
    autoClickerTimer = setInterval(async () => {
        if (!userData.autoClicker?.active) return;
        if (Date.now() > userData.autoClicker.expiry) {
            userData.autoClicker.active = false;
            saveUserToCache();
            stopAutoClicker();
            showToast('Auto Miner expired', 'info');
            return;
        }
        if (getTimeUntilNextClaim() <= 0) await claim();
    }, 1000);
}

function stopAutoClicker() {
    if (autoClickerTimer) { clearInterval(autoClickerTimer); autoClickerTimer = null; }
}

function buyAutoClicker() {
    if (userData.balances.TON < CONFIG.ECONOMY.AUTO_CLICKER_PRICE) {
        showToast(t('error.insufficient', { amount: CONFIG.ECONOMY.AUTO_CLICKER_PRICE }), 'error');
        return;
    }
    userData.balances.TON -= CONFIG.ECONOMY.AUTO_CLICKER_PRICE;
    userData.balance = userData.balances.TON;
    userData.autoClicker = { 
        active: true, 
        expiry: Date.now() + CONFIG.ECONOMY.AUTO_CLICKER_DURATION, 
        lastAutoClaim: Date.now(),
        pendingRewards: 0
    };
    saveUserToCache();
    addTransaction('autoclicker', CONFIG.ECONOMY.AUTO_CLICKER_PRICE, { 
        currency: 'TON', 
        details: 'Auto Miner purchase (15 days)' 
    });
    startAutoClicker();
    showToast(t('notif.autoClickerBought'), 'success');
    updateUI();
}

// ====== 23. TON CONNECT ======
let tonConnectUI = null, tonWallet = null;

async function initTonConnect() {
    if (typeof TON_CONNECT_UI === 'undefined') return false;
    try {
        tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
            manifestUrl: CONFIG.TON.MANIFEST_URL,
            buttonRootId: 'tonConnectButton',
            language: currentLanguage === 'ar' ? 'ar' : 'en'
        });
        tonConnectUI.onStatusChange(handleWalletChange);
        setTimeout(updateWalletUI, 1000);
        return true;
    } catch (e) { return false; }
}

function handleWalletChange(wallet) {
    tonWallet = wallet;
    updateWalletUI();
    if (wallet) {
        userData.tonWallet = wallet.account.address;
        saveUserToCache();
        getWalletBalance();
    } else {
        userData.tonWallet = null;
    }
}

function updateWalletUI() {
    const statusEl = document.getElementById('profileWalletStatus');
    const infoEl = document.getElementById('connectedWalletInfo');
    const addressEl = document.getElementById('profileConnectedAddress');
    const balanceEl = document.getElementById('connectedWalletBalance');
    const payBtn = document.getElementById('confirmPaymentBtn');
    const depositBtn = document.getElementById('confirmDepositBtn');
    const modalInfo = document.getElementById('paymentWalletInfo');
    const modalAddress = document.getElementById('modalConnectedAddress');
    const modalUserBalance = document.getElementById('modalUserBalance');
    
    if (modalUserBalance) modalUserBalance.textContent = formatBalance(userData.balances.TON || 0, 'TON') + ' TON';
    
    if (tonWallet) {
        if (statusEl) statusEl.innerHTML = '<div class="status-indicator online"></div><span>Connected</span>';
        if (infoEl) infoEl.style.display = 'flex';
        if (addressEl) addressEl.textContent = formatAddress(tonWallet.account.address);
        if (modalInfo) modalInfo.style.display = 'flex';
        if (modalAddress) modalAddress.textContent = formatAddress(tonWallet.account.address);
        if (payBtn) payBtn.disabled = false;
        if (depositBtn) depositBtn.disabled = false;
    } else {
        if (statusEl) statusEl.innerHTML = '<div class="status-indicator offline"></div><span>Disconnected</span>';
        if (infoEl) infoEl.style.display = 'none';
        if (modalInfo) modalInfo.style.display = 'none';
        if (payBtn) payBtn.disabled = currentPaymentMethod === 'wallet';
        if (depositBtn) depositBtn.disabled = true;
    }
}

async function getWalletBalance() {
    if (!tonWallet) return null;
    try {
        const res = await fetch(`${CONFIG.TON.CENTER_API}getAddressBalance?address=${tonWallet.account.address}&api_key=${CONFIG.TON.API_KEY}`);
        const data = await res.json();
        if (data.ok) {
            const balance = data.result / 1e9;
            const balanceEl = document.getElementById('connectedWalletBalance');
            if (balanceEl) balanceEl.textContent = balance.toFixed(2) + ' TON';
            return balance;
        }
    } catch (e) {}
    return null;
}

async function connectWallet() {
    if (!tonConnectUI) { if (!await initTonConnect()) { showToast('Failed to initialize TON Connect', 'error'); return; } }
    try { await tonConnectUI.openModal(); } catch (e) { showToast('Failed to connect wallet', 'error'); }
}

async function disconnectWallet() { if (tonConnectUI) { await tonConnectUI.disconnect(); showToast('Wallet disconnected', 'info'); } }

// ====== 24. UI UPDATE ======
function updateUI() {
    updateBalance();
    updateMiningStats();
    renderActiveMachines();
    renderPlansTable();
    updateActivityFeed();
    updateStreakDisplay();
    updateReferralPreview();
    renderAssets();
    updateWalletUI();
    updateLeaderboard();
    updateAutoClickerUI();
}

function updateBalance() {
    const headerBalance = document.getElementById('headerBalance');
    const profileBalance = document.getElementById('profileBalance');
    const profileUsd = document.getElementById('profileUsd');
    const modalUserBalance = document.getElementById('modalUserBalance');
    const casinoWinnings = document.getElementById('casinoWinnings');
    
    if (headerBalance) headerBalance.textContent = formatTON(userData.balances.TON);
    if (profileBalance) profileBalance.textContent = formatTON(userData.balances.TON) + ' TON';
    
    const totalUsd = calculateTotalUsd();
    if (profileUsd) profileUsd.textContent = '≈ $' + totalUsd.toFixed(2);
    if (modalUserBalance) modalUserBalance.textContent = formatTON(userData.balances.TON) + ' TON';
    if (casinoWinnings) casinoWinnings.textContent = formatTON(userData.casinoStats?.totalWon || 0);
}

function calculateTotalUsd() {
    let total = 0;
    for (const [cur, amt] of Object.entries(userData.balances)) {
        if (cur === 'USDT') total += amt;
        else total += amt * (livePrices[cur]?.price || 0);
    }
    return total;
}

function updateMiningStats() {
    const machine = getActiveMachine();
    const hashRate = document.getElementById('hashRate');
    const streakCount = document.getElementById('streakCount');
    const totalEarned = document.getElementById('totalEarned');
    const bestStreak = document.getElementById('bestStreak');
    const miningDays = document.getElementById('miningDays');
    const totalReferralsStats = document.getElementById('totalReferralsStats');
    
    if (hashRate) hashRate.textContent = machine.hashrate.split(' ')[0];
    if (streakCount) streakCount.textContent = userData.streak;
    if (totalEarned) totalEarned.textContent = formatTON(userData.totalEarned);
    if (bestStreak) bestStreak.textContent = userData.longestStreak;
    if (miningDays) miningDays.textContent = Math.floor(userData.claims / 6) || 1;
    if (totalReferralsStats) totalReferralsStats.textContent = userData.referrals?.length || 0;
}

function updateStreakDisplay() {
    const streakEmoji = document.getElementById('streakEmoji');
    if (streakEmoji) {
        if (userData.streak >= 30) streakEmoji.textContent = '👑🔥';
        else if (userData.streak >= 7) streakEmoji.textContent = '🔥🔥';
        else if (userData.streak >= 3) streakEmoji.textContent = '🔥';
        else streakEmoji.textContent = '✨';
    }
}

function renderActiveMachines() {
    const grid = document.getElementById('activeMachinesGrid');
    if (!grid) return;
    const activeMachine = getActiveMachine();
    
    grid.innerHTML = MACHINES.slice(0, 2).map(m => {
        const isActive = userData.activeMachine === m.id;
        const progress = isActive ? getClaimProgress() : 0;
        const timeLeft = isActive ? formatTime(getTimeUntilNextClaim()) : '--:--:--';
        return `<div class="active-machine-card ${isActive ? 'active' : ''}" onclick="showPage('market')">
            <div class="machine-header"><i class="fas ${m.icon}" style="color: ${m.color};"></i><h4>${currentLanguage === 'ar' ? m.nameAr : m.name}</h4></div>
            <div class="machine-progress"><div class="machine-progress-bar"><div class="machine-progress-fill" style="width: ${progress}%;"></div></div>
            <div class="machine-time"><span>${isActive ? 'Next' : 'Inactive'}</span><span class="value">${isActive ? timeLeft : '--:--'}</span></div></div>
            <div class="machine-footer"><span class="machine-yield">${m.yield} TON/cycle</span>${isActive ? '<span class="machine-status"><i class="fas fa-check-circle"></i> Active</span>' : ''}</div>
        </div>`;
    }).join('');
}

function renderPlansTable() {
    const tbody = document.getElementById('plansTableBody');
    if (!tbody) return;
    tbody.innerHTML = MACHINES.map(m => {
        const name = currentLanguage === 'ar' ? m.nameAr : m.name;
        return `<tr>
            <td><i class="fas ${m.icon}" style="color: ${m.color};"></i> ${name}</td>
            ${m.plans.map(p => p.price === 0 ? '<td>FREE</td>' : `<td>${p.price} TON<br><small>+${p.returnAmount} TON</small></td>`).join('')}
        </tr>`;
    }).join('');
}

function updateActivityFeed() {
    const feed = document.getElementById('activityFeed');
    if (!feed) return;
    const recent = userData.transactions?.slice(0, 5) || [];
    if (recent.length === 0) { feed.innerHTML = '<div class="empty-state">No activity yet</div>'; return; }
    
    feed.innerHTML = recent.map(tx => {
        const timeAgo = formatRelativeTime(tx.timestamp);
        let icon = 'fa-bolt', title = 'Mining';
        if (tx.type === 'deposit') { icon = 'fa-arrow-down'; title = 'Deposit'; }
        else if (tx.type === 'withdraw') { icon = 'fa-arrow-up'; title = 'Withdrawal'; }
        else if (tx.type === 'rental') { icon = 'fa-microchip'; title = 'Rental'; }
        else if (tx.type === 'swap') { icon = 'fa-exchange-alt'; title = 'Swap'; }
        else if (tx.type === 'referral_bonus') { icon = 'fa-users'; title = 'Referral'; }
        else if (tx.type === 'autoclicker') { icon = 'fa-robot'; title = 'Auto Miner'; }
        else if (tx.type === 'wheel') { icon = 'fa-wheelchair'; title = 'Wheel'; }
        else if (tx.type === 'slots') { icon = 'fa-sliders-h'; title = 'Slots'; }
        
        const currency = tx.currency || 'TON';
        return `<div class="activity-item">
            <div class="activity-icon"><i class="fas ${icon}"></i></div>
            <div class="activity-content"><div class="activity-title">${title}</div><div class="activity-time">${timeAgo}</div></div>
            <div class="activity-amount">${tx.type === 'withdraw' ? '-' : '+'}${formatBalance(tx.amount, currency)} ${currency}</div>
        </div>`;
    }).join('');
}

function formatRelativeTime(ts) {
    const diff = Date.now() - ts;
    if (diff < 60000) return 'just now';
    if (diff < 3600000) return `${Math.floor(diff/60000)} min ago`;
    if (diff < 86400000) return `${Math.floor(diff/3600000)} hours ago`;
    return `${Math.floor(diff/86400000)} days ago`;
}

function updateReferralPreview() {
    const refCount = document.getElementById('previewRefCount');
    const refEarnings = document.getElementById('previewRefEarnings');
    const refLink = document.getElementById('previewReferralLink');
    
    if (refCount) refCount.textContent = userData.referrals?.length || 0;
    if (refEarnings) refEarnings.textContent = formatTON(userData.referralEarnings || 0);
    if (refLink) refLink.value = getReferralLink();
}

function renderAssets() {
    const list = document.getElementById('assetsList');
    if (!list) return;
    const assets = CONFIG.ALL_ASSETS.filter(a => (userData.balances[a.symbol] || 0) > 0);
    if (assets.length === 0) { list.innerHTML = '<div class="empty-state">No assets yet</div>'; return; }
    
    list.innerHTML = assets.map(a => {
        const balance = userData.balances[a.symbol] || 0;
        const price = livePrices[a.symbol]?.price || 0;
        const value = a.symbol === 'USDT' ? balance : balance * price;
        const change = livePrices[a.symbol]?.change || 0;
        return `<div class="asset-item-legendary">
            <div class="asset-left"><img src="${CONFIG.CMC_ICONS[a.symbol]}" class="asset-icon-img">
                <div class="asset-info"><h4>${a.name}</h4><p>${a.symbol} <span class="asset-change ${change >= 0 ? 'positive' : 'negative'}">${change >= 0 ? '+' : ''}${change.toFixed(2)}%</span></p></div>
            </div>
            <div class="asset-right"><div class="asset-balance">${formatBalance(balance, a.symbol)}</div><div class="asset-value">$${formatNumber(value)}</div></div>
        </div>`;
    }).join('');
}

function updateAutoClickerUI() {
    const statusEl = document.getElementById('autoMinerStatus');
    const timeEl = document.getElementById('autoMinerTime');
    const autoClickerCard = document.getElementById('autoClickerCard');
    
    if (userData.autoClicker?.active) {
        const timeLeft = userData.autoClicker.expiry - Date.now();
        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (24 * 3600000));
            const hours = Math.floor((timeLeft % (24 * 3600000)) / 3600000);
            if (statusEl) statusEl.style.display = 'flex';
            if (timeEl) timeEl.textContent = `${days}d ${hours}h`;
            if (autoClickerCard) autoClickerCard.classList.add('active');
        } else {
            userData.autoClicker.active = false;
            saveUserToCache();
            if (statusEl) statusEl.style.display = 'none';
            if (autoClickerCard) autoClickerCard.classList.remove('active');
        }
    } else {
        if (statusEl) statusEl.style.display = 'none';
        if (autoClickerCard) autoClickerCard.classList.remove('active');
    }
}

// ====== 25. WIN POPUP ======
function showWinPopup(prize, type = 'normal') {
    const existing = document.querySelector('.win-popup');
    if (existing) existing.remove();
    
    const popup = document.createElement('div');
    popup.className = `win-popup ${type}`;
    
    let icon = '🎉';
    let title = 'YOU WON!';
    let amount = prize;
    
    if (type === 'big') {
        icon = '🌟🌟';
        title = 'BIG WIN!';
    } else if (type === 'jackpot') {
        icon = '🎰🎰🎰';
        title = 'JACKPOT!';
    } else if (type === 'mega') {
        icon = '👑👑👑';
        title = 'MEGA JACKPOT!';
    }
    
    popup.innerHTML = `
        <div class="win-icon">${icon}</div>
        <div class="win-title">${title}</div>
        <div class="win-amount">${amount}</div>
        <div class="win-confetti"></div>
    `;
    
    document.body.appendChild(popup);
    popup.style.zIndex = '10000';
    
    setTimeout(() => popup.classList.add('show'), 10);
    
    if (type === 'mega' || type === 'jackpot') {
        hapticFeedback('heavy');
    } else if (type === 'big') {
        hapticFeedback('medium');
    } else {
        hapticFeedback('light');
    }
    
    setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => popup.remove(), 300);
    }, 2500);
}

// ====== 26. MARKET FUNCTIONS ======
function renderMarket() {
    const showcase = document.getElementById('machinesShowcase');
    if (!showcase) return;
    
    showcase.innerHTML = MACHINES.map(m => {
        const meets = checkRequirements(m);
        const name = currentLanguage === 'ar' ? m.nameAr : m.name;
        const desc = currentLanguage === 'ar' ? m.descriptionAr : m.description;
        const cycle = currentLanguage === 'ar' ? m.cycleTextAr : m.cycleText;
        
        return `<div class="showcase-card-legendary ${!meets ? 'locked' : ''}">
            <div class="showcase-icon" style="color: ${m.color};"><i class="fas ${m.icon}"></i></div>
            <div class="showcase-content">
                <h3>${name}</h3><p>${desc}</p>
                <div class="showcase-specs">
                    <span class="spec"><i class="fas fa-microchip"></i> ${m.hashrate}</span>
                    <span class="spec"><i class="fas fa-bolt"></i> ${m.yield} TON/${cycle}</span>
                </div>
                ${!meets ? `<div class="requirements-warning"><i class="fas fa-lock"></i> Requirements not met</div>` : ''}
                <div class="showcase-plans">
                    ${m.plans.map((p, idx) => 
                        `<div class="plan-card-mini ${p.price === 0 ? 'free' : ''}" onclick="selectPlan('${m.id}', ${idx})">
                            <div class="duration">${p.durationText || p.duration + ' days'}</div>
                            <div class="price">${p.price === 0 ? 'FREE' : p.price + ' TON'}</div>
                            ${p.price > 0 ? `<div class="return">+${p.returnAmount} TON</div>` : ''}
                        </div>`
                    ).join('')}
                </div>
            </div>
        </div>`;
    }).join('');
}

function checkRequirements(m) {
    if (!m.requirements) return true;
    const req = m.requirements;
    if (req.minEarnings && userData.totalEarned < req.minEarnings) return false;
    if (req.referrals && (userData.referrals?.length || 0) < req.referrals) return false;
    if (req.streak && userData.streak < req.streak) return false;
    return true;
}

// ====== 27. PAYMENT SYSTEM ======
let currentPaymentMethod = 'balance', currentPayment = null;

function switchPaymentMethod(method) {
    currentPaymentMethod = method;
    const optBal = document.getElementById('paymentOptionBalance');
    const optWal = document.getElementById('paymentOptionWallet');
    const confirmBtn = document.getElementById('confirmPaymentBtn');
    
    if (optBal) {
        if (method === 'balance') {
            optBal.classList.add('active');
            optWal?.classList.remove('active');
        } else {
            optBal.classList.remove('active');
            optWal?.classList.add('active');
        }
    }
    
    if (confirmBtn) {
        confirmBtn.innerHTML = method === 'balance' ? 
            `<i class="fas fa-wallet"></i> Pay with Balance` : 
            `<i class="fas fa-external-link-alt"></i> Pay with TON Wallet`;
    }
    updateWalletUI();
}

function selectPlan(machineId, planIndex) {
    console.log("🛒 selectPlan called:", machineId, planIndex);
    const machine = MACHINES.find(m => m.id === machineId);
    if (!machine) {
        console.error("Machine not found:", machineId);
        return;
    }
    const plan = machine.plans[planIndex];
    if (!checkRequirements(machine)) { 
        showToast('You do not meet the requirements', 'error'); 
        return; 
    }
    if (plan.price === 0) {
        activateMachine(machineId, planIndex);
    } else {
        openPaymentModal(machine, planIndex);
    }
}

function openPaymentModal(machine, planIndex) {
    const plan = machine.plans[planIndex];
    const machineIcon = document.getElementById('paymentMachineIcon');
    const machineName = document.getElementById('paymentMachineName');
    const duration = document.getElementById('paymentDuration');
    const price = document.getElementById('paymentPrice');
    const returnEl = document.getElementById('paymentReturn');
    const total = document.getElementById('paymentTotal');
    
    if (machineIcon) machineIcon.innerHTML = `<i class="fas ${machine.icon}" style="color: ${machine.color};"></i>`;
    if (machineName) machineName.textContent = machine.name;
    if (duration) duration.textContent = plan.durationText || plan.duration + ' days';
    if (price) price.textContent = plan.price + ' TON';
    if (returnEl) returnEl.textContent = `${plan.returnAmount} TON (${plan.returnPercent}%)`;
    if (total) total.textContent = plan.total + ' TON';
    
    currentPayment = { machine, planIndex, plan };
    currentPaymentMethod = 'balance';
    switchPaymentMethod('balance');
    
    const modal = document.getElementById('paymentModal');
    if (modal) modal.classList.add('show');
    updateWalletUI();
}

function activateMachine(machineId, planIndex) {
    const machine = MACHINES.find(m => m.id === machineId);
    const plan = machine.plans[planIndex];
    userData.activeMachine = machineId;
    userData.activePlan = plan;
    userData.machineExpiry = plan.price === 0 ? Infinity : Date.now() + plan.duration * 24 * 60 * 60 * 1000;
    userData.lastClaim = Date.now();
    if (machineId !== 'm1') userData.upgrades++;
    saveUserToCache();
    showToast(`${machine.name} activated!`, 'success');
    hapticFeedback('success');
    updateUI();
    if (db) saveToFirebase();
}

function rentWithBalance(machineId, planIndex) {
    const machine = MACHINES.find(m => m.id === machineId);
    const plan = machine.plans[planIndex];
    if (userData.balances.TON < plan.price) { 
        showToast(`Insufficient balance! Need ${plan.price} TON`, 'error'); 
        return false; 
    }
    userData.balances.TON -= plan.price;
    userData.balance = userData.balances.TON;
    activateMachine(machineId, planIndex);
    addTransaction('rental', plan.price, { machine: machine.name, plan: plan.durationText || plan.duration + ' days', currency: 'TON' });
    showToast(`✅ ${machine.name} rented!`, 'success');
    saveUserToCache(); 
    updateUI(); 
    return true;
}

async function processPayment() {
    if (!currentPayment) return;
    const { machine, planIndex, plan } = currentPayment;
    if (currentPaymentMethod === 'balance') { 
        if (rentWithBalance(machine.id, planIndex)) closeModal('paymentModal'); 
    } else await confirmWalletPayment();
}

async function confirmWalletPayment() {
    if (!currentPayment || !tonWallet) { showToast('Connect wallet first', 'error'); return; }
    const { machine, planIndex, plan } = currentPayment;
    try {
        const tx = { 
            validUntil: Date.now() + 600000, 
            messages: [{ address: CONFIG.TON.WALLET, amount: (plan.price * 1e9).toString() }] 
        };
        showToast('Opening wallet...', 'info');
        await tonConnectUI.sendTransaction(tx);
        showToast('Payment sent! Waiting for confirmation...', 'info');
        setTimeout(() => {
            activateMachine(machine.id, planIndex);
            closeModal('paymentModal');
            addTransaction('rental', plan.price, { 
                machine: machine.name, 
                plan: plan.durationText || plan.duration + ' days', 
                method: 'wallet', 
                currency: 'TON' 
            });
        }, 3000);
    } catch (e) { showToast('Payment failed', 'error'); }
}

// ====== 28. SWAP SYSTEM ======
let swapMode = 'from', swapFromCurrency = 'TON', swapToCurrency = 'USDT';

function showSwapModal() {
    console.log("🔄 showSwapModal called");
    const fromCurrency = document.getElementById('swapFromCurrency');
    const toCurrency = document.getElementById('swapToCurrency');
    const fromIcon = document.getElementById('swapFromIcon');
    const toIcon = document.getElementById('swapToIcon');
    
    if (fromCurrency) fromCurrency.textContent = swapFromCurrency;
    if (toCurrency) toCurrency.textContent = swapToCurrency;
    if (fromIcon) fromIcon.src = CONFIG.CMC_ICONS[swapFromCurrency];
    if (toIcon) toIcon.src = CONFIG.CMC_ICONS[swapToCurrency];
    
    updateSwapBalances();
    calculateSwap();
    
    const modal = document.getElementById('swapModal');
    if (modal) modal.classList.add('show');
}

function updateSwapBalances() {
    const fromBal = document.getElementById('swapFromBalance');
    const toBal = document.getElementById('swapToBalance');
    if (fromBal) fromBal.textContent = `Balance: ${formatBalance(userData.balances[swapFromCurrency] || 0, swapFromCurrency)}`;
    if (toBal) toBal.textContent = `Balance: ${formatBalance(userData.balances[swapToCurrency] || 0, swapToCurrency)}`;
}

function showCurrencySelector(type) {
    swapMode = type;
    const list = document.getElementById('currencyList');
    if (!list) return;
    list.innerHTML = CONFIG.SWAP_CURRENCIES.map(a => 
        `<div class="currency-list-item" onclick="selectCurrency('${a.symbol}')">
            <img src="${CONFIG.CMC_ICONS[a.symbol]}" alt="${a.symbol}">
            <div class="currency-info"><h4>${a.name}</h4><p>${a.symbol}</p></div>
        </div>`
    ).join('');
    const modal = document.getElementById('currencySelectorModal');
    if (modal) modal.classList.add('show');
}

function selectCurrency(symbol) {
    if (swapMode === 'from') { 
        swapFromCurrency = symbol; 
        const fromCurrency = document.getElementById('swapFromCurrency');
        const fromIcon = document.getElementById('swapFromIcon');
        if (fromCurrency) fromCurrency.textContent = symbol; 
        if (fromIcon) fromIcon.src = CONFIG.CMC_ICONS[symbol]; 
    } else { 
        swapToCurrency = symbol; 
        const toCurrency = document.getElementById('swapToCurrency');
        const toIcon = document.getElementById('swapToIcon');
        if (toCurrency) toCurrency.textContent = symbol; 
        if (toIcon) toIcon.src = CONFIG.CMC_ICONS[symbol]; 
    }
    closeModal('currencySelectorModal');
    updateSwapBalances();
    calculateSwap();
}

function filterCurrencies() {
    const term = document.getElementById('currencySearch')?.value.toLowerCase() || '';
    document.querySelectorAll('.currency-list-item').forEach(i => {
        i.style.display = i.textContent.toLowerCase().includes(term) ? 'flex' : 'none';
    });
}

function flipSwap() {
    [swapFromCurrency, swapToCurrency] = [swapToCurrency, swapFromCurrency];
    const fromCurrency = document.getElementById('swapFromCurrency');
    const toCurrency = document.getElementById('swapToCurrency');
    const fromIcon = document.getElementById('swapFromIcon');
    const toIcon = document.getElementById('swapToIcon');
    
    if (fromCurrency) fromCurrency.textContent = swapFromCurrency;
    if (toCurrency) toCurrency.textContent = swapToCurrency;
    if (fromIcon) fromIcon.src = CONFIG.CMC_ICONS[swapFromCurrency];
    if (toIcon) toIcon.src = CONFIG.CMC_ICONS[swapToCurrency];
    
    updateSwapBalances();
    calculateSwap();
    animateElement('.swap-switch i', 'pop');
}

function calculateSwap() {
    const fromInput = document.getElementById('swapFromAmount');
    const toEl = document.getElementById('swapToAmount');
    const rateEl = document.getElementById('swapRate');
    
    const from = parseFloat(fromInput?.value) || 0;
    
    const fromPrice = swapFromCurrency === 'USDT' ? 1 : (livePrices[swapFromCurrency]?.price || 0);
    const toPrice = swapToCurrency === 'USDT' ? 1 : (livePrices[swapToCurrency]?.price || 0);
    
    if (fromPrice > 0 && toPrice > 0 && toEl) {
        const rate = fromPrice / toPrice;
        toEl.value = (from * rate).toFixed(6);
        if (rateEl) rateEl.textContent = `1 ${swapFromCurrency} = ${rate.toFixed(6)} ${swapToCurrency}`;
    } else if (toEl) {
        toEl.value = '0';
        if (rateEl) rateEl.textContent = 'Rate unavailable';
    }
}

function confirmSwap() {
    const fromInput = document.getElementById('swapFromAmount');
    const from = parseFloat(fromInput?.value);
    const fromBal = userData.balances[swapFromCurrency] || 0;
    const toEl = document.getElementById('swapToAmount');
    const to = parseFloat(toEl?.value);
    
    if (!from || from <= 0) { showToast(t('error.enterAmount'), 'error'); return; }
    if (from > fromBal) { showToast(`Insufficient ${swapFromCurrency} balance`, 'error'); return; }
    
    userData.balances[swapFromCurrency] -= from;
    userData.balances[swapToCurrency] += to;
    if (swapFromCurrency === 'TON') userData.balance = userData.balances.TON;
    
    addTransaction('swap', from, { 
        fromCurrency: swapFromCurrency, 
        toCurrency: swapToCurrency, 
        toAmount: to, 
        rate: to / from 
    });
    
    saveUserToCache();
    showToast(`✅ Swapped ${formatBalance(from, swapFromCurrency)} ${swapFromCurrency} to ${formatBalance(to, swapToCurrency)} ${swapToCurrency}`, 'success');
    closeModal('swapModal');
    updateUI();
    renderAssets();
}

// ====== 29. DEPOSIT FUNCTIONS ======
let selectedDepositCurrency = 'TON';

function showDepositModal() {
    console.log("💰 showDepositModal called");
    const select = document.getElementById('depositCurrencySelect');
    if (select) {
        select.innerHTML = CONFIG.ALL_ASSETS.map(a => 
            `<option value="${a.symbol}" ${a.symbol === selectedDepositCurrency ? 'selected' : ''}>${a.name} (${a.symbol})</option>`
        ).join('');
    }
    updateDepositInfo();
    const modal = document.getElementById('depositModal');
    if (modal) modal.classList.add('show');
    updateWalletUI();
}

function updateDepositInfo() {
    const select = document.getElementById('depositCurrencySelect');
    const cur = select?.value || selectedDepositCurrency;
    selectedDepositCurrency = cur;
    
    const addressEl = document.getElementById('depositAddress');
    const iconEl = document.getElementById('depositIcon');
    const minEl = document.getElementById('depositMinAmount');
    const hintEl = document.getElementById('depositNetworkHint');
    
    if (addressEl) addressEl.textContent = CONFIG.DEPOSIT_ADDRESSES[cur] || 'Address not configured';
    if (iconEl) iconEl.src = CONFIG.CMC_ICONS[cur];
    if (minEl) minEl.textContent = `${CONFIG.DEPOSIT_MINIMUMS[cur] || 1} ${cur}`;
    
    const net = CONFIG.NETWORK_TYPES[cur] || 'bsc';
    let hint = '';
    if (net === 'bsc' || net === 'erc20') hint = 'BSC/ERC20 - starts with 0x (42 chars)';
    else if (net === 'solana') hint = 'Solana - 32-44 characters';
    else if (net === 'bitcoin') hint = 'Bitcoin - starts with 1, 3, or bc1';
    else if (net === 'ton') hint = 'TON - starts with UQ or EQ';
    if (hintEl) hintEl.textContent = hint;
    
    const confirmBtn = document.getElementById('confirmDepositBtn');
    if (confirmBtn) confirmBtn.disabled = true;
}

function validateDepositInput() {
    const cur = selectedDepositCurrency;
    const amountEl = document.getElementById('depositAmount');
    const hashEl = document.getElementById('depositTxHash');
    const amt = parseFloat(amountEl?.value);
    const hash = hashEl?.value.trim();
    const hint = document.getElementById('depositHashHint');
    const btn = document.getElementById('confirmDepositBtn');
    
    if (!amt || amt <= 0 || !hash) { 
        if (hint) { hint.textContent = 'Enter amount and hash'; hint.className = 'validation-hint invalid'; } 
        if (btn) btn.disabled = true; 
        return; 
    }
    
    const min = CONFIG.DEPOSIT_MINIMUMS[cur] || 1;
    if (amt < min) { 
        if (hint) { hint.textContent = `Minimum is ${min} ${cur}`; hint.className = 'validation-hint invalid'; } 
        if (btn) btn.disabled = true; 
        return; 
    }
    
    if (!validateTransactionHash(hash, cur)) { 
        if (hint) { hint.textContent = `Invalid ${cur} hash`; hint.className = 'validation-hint invalid'; } 
        if (btn) btn.disabled = true; 
        return; 
    }
    
    if (userData.usedHashes?.includes(hash.toLowerCase())) { 
        if (hint) { hint.textContent = 'Hash already used'; hint.className = 'validation-hint invalid'; } 
        if (btn) btn.disabled = true; 
        return; 
    }
    
    if (hint) { hint.textContent = '✓ Valid'; hint.className = 'validation-hint valid'; }
    if (btn) btn.disabled = false;
}

function copyDepositAddress() {
    const addressEl = document.getElementById('depositAddress');
    if (addressEl) {
        navigator.clipboard.writeText(addressEl.textContent);
        showToast('Address copied', 'success');
    }
}

async function submitDeposit() {
    const cur = selectedDepositCurrency;
    const amountEl = document.getElementById('depositAmount');
    const hashEl = document.getElementById('depositTxHash');
    const amt = parseFloat(amountEl?.value);
    const hash = hashEl?.value.trim();
    
    const deposit = { 
        id: 'dep_' + Date.now() + '_' + randomId(), 
        userId, 
        username: userName, 
        currency: cur, 
        amount: amt, 
        txHash: hash, 
        status: 'pending', 
        timestamp: new Date().toISOString()
    };
    
    if (!userData.pendingDeposits) userData.pendingDeposits = [];
    userData.pendingDeposits.push(deposit);
    if (!userData.usedHashes) userData.usedHashes = [];
    userData.usedHashes.push(hash.toLowerCase());
    saveUserToCache();
    
    if (db) {
        try {
            const docRef = await db.collection(CONFIG.COLLECTIONS.DEPOSITS).add({ 
                ...deposit, 
                timestamp: firebase.firestore.FieldValue.serverTimestamp() 
            });
            deposit.firebaseId = docRef.id;
            
            startOnDemandListener(CONFIG.COLLECTIONS.DEPOSITS, docRef.id, (data) => {
                if (data.status === 'approved') {
                    userData.balances[cur] = (userData.balances[cur] || 0) + amt;
                    if (cur === 'TON') userData.balance = userData.balances.TON;
                    userData.totalDeposited += amt;
                    userData.pendingDeposits = userData.pendingDeposits.filter(d => d.id !== deposit.id);
                    if (!userData.completedDeposits) userData.completedDeposits = [];
                    userData.completedDeposits.push({ ...deposit, status: 'approved' });
                    saveUserToCache();
                    showToast(t('notif.depositApproved', { amount: amt, currency: cur }), 'success');
                    updateUI();
                    addLocalNotification(t('notif.depositApproved', { amount: amt, currency: cur }), 'success');
                } else if (data.status === 'rejected') {
                    userData.pendingDeposits = userData.pendingDeposits.filter(d => d.id !== deposit.id);
                    saveUserToCache();
                    showToast(t('notif.depositRejected', { reason: data.reason || 'Unknown' }), 'error');
                    addLocalNotification(t('notif.depositRejected', { reason: data.reason || 'Unknown' }), 'error');
                }
            }, CONFIG.CACHE.LISTENER_TTL);
            
            await addNotification(CONFIG.TON.ADMIN_ID, `💰 New deposit request: ${amt} ${cur} from ${userName}`, 'info');
            
        } catch (e) {
            console.error("Firebase error:", e);
        }
    }
    
    closeModal('depositModal');
    showToast(t('notif.depositSubmitted'), 'success');
    if (amountEl) amountEl.value = '';
    if (hashEl) hashEl.value = '';
    
    addTransaction('deposit', amt, { currency: cur, txHash: hash, status: 'pending' });
}

// ====== 30. WITHDRAW FUNCTIONS ======
let selectedWithdrawNetwork = 'BEP20';

function showWithdrawModal() {
    console.log("💸 showWithdrawModal called");
    const select = document.getElementById('withdrawNetworkSelect');
    if (select) {
        select.innerHTML = CONFIG.WITHDRAW_NETWORKS.USDT.map(net => 
            `<option value="${net.value}" ${net.value === selectedWithdrawNetwork ? 'selected' : ''}>${net.name}</option>`
        ).join('');
    }
    updateWithdrawInfo();
    const modal = document.getElementById('withdrawModal');
    if (modal) modal.classList.add('show');
}

function updateWithdrawInfo() {
    const select = document.getElementById('withdrawNetworkSelect');
    const netValue = select?.value || selectedWithdrawNetwork;
    selectedWithdrawNetwork = netValue;
    
    const network = CONFIG.WITHDRAW_NETWORKS.USDT.find(n => n.value === netValue);
    const fee = network ? network.fee : 0.0005;
    const feeCurrency = network ? network.feeCurrency : 'BNB';
    
    const bal = userData.balances.USDT || 0;
    const balanceEl = document.getElementById('withdrawBalance');
    const iconEl = document.getElementById('withdrawIcon');
    const feeEl = document.getElementById('withdrawFeeInfo');
    const feeBalanceEl = document.getElementById('withdrawFeeCurrencyBalance');
    
    if (balanceEl) balanceEl.textContent = `${formatBalance(bal, 'USDT')} USDT`;
    if (iconEl) iconEl.src = CONFIG.CMC_ICONS.USDT;
    if (feeEl) feeEl.innerHTML = t('withdraw.fee', { fee, currency: feeCurrency });
    
    const feeCurrencyBalance = userData.balances[feeCurrency] || 0;
    if (feeBalanceEl) {
        feeBalanceEl.textContent = `Your ${feeCurrency} balance: ${formatBalance(feeCurrencyBalance, feeCurrency)} ${feeCurrency}`;
    }
    
    validateWithdrawInput();
}

function validateWithdrawInput() {
    const amountEl = document.getElementById('withdrawAmount');
    const addressEl = document.getElementById('withdrawAddress');
    const amt = parseFloat(amountEl?.value);
    const addr = addressEl?.value.trim();
    const netValue = selectedWithdrawNetwork;
    const network = CONFIG.WITHDRAW_NETWORKS.USDT.find(n => n.value === netValue);
    const fee = network ? network.fee : 0.0005;
    const feeCurrency = network ? network.feeCurrency : 'BNB';
    
    const hint = document.getElementById('withdrawAddressHint');
    const btn = document.getElementById('submitWithdraw');
    
    if (!amt || amt <= 0 || !addr) { 
        if (hint) { hint.textContent = 'Enter amount and address'; hint.className = 'validation-hint invalid'; } 
        if (btn) btn.disabled = true; 
        return; 
    }
    
    const bal = userData.balances.USDT || 0;
    if (amt > bal) { 
        if (hint) { hint.textContent = 'Insufficient USDT balance'; hint.className = 'validation-hint invalid'; } 
        if (btn) btn.disabled = true; 
        return; 
    }
    
    const feeCurrencyBalance = userData.balances[feeCurrency] || 0;
    if (feeCurrencyBalance < fee) {
        if (hint) { hint.textContent = `Insufficient ${feeCurrency} for fee. Need ${fee} ${feeCurrency}`; hint.className = 'validation-hint invalid'; } 
        if (btn) btn.disabled = true; 
        return;
    }
    
    if (!addr.startsWith('0x') || addr.length !== 42) {
        if (hint) { hint.textContent = `Invalid address format. Must start with 0x and be 42 characters`; hint.className = 'validation-hint invalid'; } 
        if (btn) btn.disabled = true; 
        return;
    }
    
    if (hint) { hint.textContent = '✓ Valid'; hint.className = 'validation-hint valid'; }
    if (btn) btn.disabled = false;
}

function updateWithdrawAmount() {
    const amountEl = document.getElementById('withdrawAmount');
    const amt = parseFloat(amountEl?.value) || 0;
    const netValue = selectedWithdrawNetwork;
    const network = CONFIG.WITHDRAW_NETWORKS.USDT.find(n => n.value === netValue);
    const fee = network ? network.fee : 0.0005;
    
    const receiveEl = document.getElementById('withdrawReceiveAmount');
    if (receiveEl) {
        receiveEl.textContent = `${formatBalance(amt - fee, 'USDT')} USDT`;
    }
    validateWithdrawInput();
}

async function submitWithdraw() {
    const amountEl = document.getElementById('withdrawAmount');
    const addressEl = document.getElementById('withdrawAddress');
    const amt = parseFloat(amountEl?.value);
    const addr = addressEl?.value.trim();
    const netValue = selectedWithdrawNetwork;
    const network = CONFIG.WITHDRAW_NETWORKS.USDT.find(n => n.value === netValue);
    const fee = network ? network.fee : 0.0005;
    const feeCurrency = network ? network.feeCurrency : 'BNB';
    
    if (amt > (userData.balances.USDT || 0)) { 
        showToast('Insufficient USDT balance', 'error'); 
        return; 
    }
    
    if ((userData.balances[feeCurrency] || 0) < fee) {
        showToast(`Insufficient ${feeCurrency} for fee`, 'error'); 
        return;
    }
    
    if (!addr.startsWith('0x') || addr.length !== 42) {
        showToast('Invalid address format', 'error'); 
        return;
    }
    
    userData.balances.USDT -= amt;
    userData.balances[feeCurrency] -= fee;
    userData.totalWithdrawn += amt;
    
    const withdraw = { 
        id: 'wd_' + Date.now() + '_' + randomId(), 
        userId, 
        username: userName, 
        currency: 'USDT', 
        amount: amt, 
        address: addr,
        network: netValue,
        fee: fee,
        feeCurrency: feeCurrency,
        status: 'pending', 
        timestamp: new Date().toISOString()
    };
    
    if (!userData.pendingWithdrawals) userData.pendingWithdrawals = [];
    userData.pendingWithdrawals.push(withdraw);
    saveUserToCache();
    
    if (db) {
        try {
            const docRef = await db.collection(CONFIG.COLLECTIONS.WITHDRAWALS).add({ 
                ...withdraw, 
                timestamp: firebase.firestore.FieldValue.serverTimestamp() 
            });
            withdraw.firebaseId = docRef.id;
            
            startOnDemandListener(CONFIG.COLLECTIONS.WITHDRAWALS, docRef.id, (data) => {
                if (data.status === 'approved') {
                    userData.pendingWithdrawals = userData.pendingWithdrawals.filter(w => w.id !== withdraw.id);
                    if (!userData.completedWithdrawals) userData.completedWithdrawals = [];
                    userData.completedWithdrawals.push({ ...withdraw, status: 'approved' });
                    saveUserToCache();
                    showToast(t('notif.withdrawApproved', { amount: amt, currency: 'USDT' }), 'success');
                    addLocalNotification(t('notif.withdrawApproved', { amount: amt, currency: 'USDT' }), 'success');
                } else if (data.status === 'rejected') {
                    userData.balances.USDT += amt;
                    userData.balances[feeCurrency] += fee;
                    userData.totalWithdrawn -= amt;
                    userData.pendingWithdrawals = userData.pendingWithdrawals.filter(w => w.id !== withdraw.id);
                    saveUserToCache();
                    showToast(t('notif.withdrawRejected', { reason: data.reason || 'Unknown' }), 'error');
                    addLocalNotification(t('notif.withdrawRejected', { reason: data.reason || 'Unknown' }), 'error');
                    updateUI();
                }
            }, CONFIG.CACHE.LISTENER_TTL);
            
            await addNotification(CONFIG.TON.ADMIN_ID, `💸 New withdrawal request: ${amt} USDT from ${userName} (${netValue})`, 'info');
            
        } catch (e) {
            console.error("Firebase error:", e);
        }
    }
    
    closeModal('withdrawModal');
    showToast(t('notif.withdrawSubmitted'), 'success');
    updateUI();
    if (amountEl) amountEl.value = '';
    if (addressEl) addressEl.value = '';
    
    addTransaction('withdraw', amt, { currency: 'USDT', address: addr, network: netValue, fee, feeCurrency, status: 'pending' });
}

// ====== 31. HISTORY FUNCTIONS ======
let currentHistoryFilter = 'all';

function showHistory() {
    console.log("📜 showHistory called");
    const modal = document.getElementById('historyModal');
    if (modal) {
        modal.classList.add('show');
        renderHistory('all');
        checkPendingTransactions();
    }
}

function renderHistory(filter = 'all') {
    currentHistoryFilter = filter;
    const list = document.getElementById('historyList');
    if (!list) return;
    
    let txs = userData.transactions || [];
    if (filter !== 'all') txs = txs.filter(tx => tx.type === filter);
    
    if (txs.length === 0) { 
        list.innerHTML = '<div class="empty-state"><i class="fa-regular fa-clock"></i><p>No transactions yet</p></div>'; 
        return; 
    }
    
    list.innerHTML = txs.map(tx => {
        const d = new Date(tx.timestamp);
        let icon = 'fa-bolt', typeClass = 'mining', typeText = 'Mining';
        
        if (tx.type === 'deposit') { icon = 'fa-arrow-down'; typeClass = 'deposit'; typeText = 'Deposit'; }
        else if (tx.type === 'withdraw') { icon = 'fa-arrow-up'; typeClass = 'withdraw'; typeText = 'Withdrawal'; }
        else if (tx.type === 'rental') { icon = 'fa-microchip'; typeClass = 'rental'; typeText = 'Rental'; }
        else if (tx.type === 'swap') { icon = 'fa-exchange-alt'; typeClass = 'swap'; typeText = 'Swap'; }
        else if (tx.type === 'referral_bonus') { icon = 'fa-users'; typeClass = 'referral'; typeText = 'Referral'; }
        else if (tx.type === 'autoclicker') { icon = 'fa-robot'; typeClass = 'autoclicker'; typeText = 'Auto Miner'; }
        else if (tx.type === 'wheel') { icon = 'fa-wheelchair'; typeClass = 'wheel'; typeText = 'Wheel'; }
        else if (tx.type === 'slots') { icon = 'fa-sliders-h'; typeClass = 'slots'; typeText = 'Slots'; }
        
        let statusHtml = '';
        if (tx.status && tx.status !== 'completed') {
            let statusClass = tx.status === 'pending' ? 'pending' : 'rejected';
            statusHtml = `<span class="history-status ${statusClass}">${tx.status}</span>`;
        }
        
        let detailsHtml = '';
        if (tx.network) detailsHtml += `<div style="font-size: 10px;">Network: ${tx.network}</div>`;
        if (tx.fromCurrency) detailsHtml += `<div style="font-size: 10px;">${tx.fromCurrency} → ${tx.toCurrency}</div>`;
        if (tx.machine) detailsHtml += `<div style="font-size: 10px;">${tx.machine}</div>`;
        if (tx.reason) detailsHtml += `<div style="font-size: 10px; color: var(--ton-red);">Reason: ${tx.reason}</div>`;
        if (tx.fee) detailsHtml += `<div style="font-size: 10px;">Fee: ${tx.fee} ${tx.feeCurrency}</div>`;
        
        return `<div class="history-item">
            <div class="history-item-header">
                <div class="history-type ${typeClass}"><i class="fas ${icon}"></i><span>${typeText}</span></div>
                ${statusHtml}
                <span class="history-date">${d.toLocaleDateString()} ${d.toLocaleTimeString()}</span>
            </div>
            <div class="history-details">
                <span class="history-amount">${tx.type === 'withdraw' ? '-' : '+'}${formatBalance(tx.amount, tx.currency || 'TON')} ${tx.currency || 'TON'}</span>
            </div>
            ${detailsHtml}
        </div>`;
    }).join('');
}

function filterHistory(filter) {
    document.querySelectorAll('.history-filter').forEach(t => t.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    renderHistory(filter);
}

async function checkPendingTransactions() {
    if (!db || !userData) return;
    
    const now = Date.now();
    if (now - lastHistoryCheckTime < CONFIG.CACHE.HISTORY_TTL) {
        console.log("📦 History cache valid, skipping check");
        return;
    }
    lastHistoryCheckTime = now;
    
    console.log("🔍 Checking pending transactions...");
    
    for (const d of userData.pendingDeposits?.filter(d => d.firebaseId) || []) {
        try {
            const doc = await db.collection(CONFIG.COLLECTIONS.DEPOSITS).doc(d.firebaseId).get();
            if (doc.exists && doc.data().status !== 'pending') {
                const data = doc.data();
                userData.pendingDeposits = userData.pendingDeposits.filter(x => x.id !== d.id);
                if (data.status === 'approved') {
                    if (!userData.completedDeposits) userData.completedDeposits = [];
                    userData.completedDeposits.push({ ...d, status: 'approved' });
                    userData.balances[d.currency] = (userData.balances[d.currency] || 0) + d.amount;
                    if (d.currency === 'TON') userData.balance = userData.balances.TON;
                    showToast(t('notif.depositApproved', { amount: d.amount, currency: d.currency }), 'success');
                }
            }
        } catch (e) {}
    }
    
    for (const w of userData.pendingWithdrawals?.filter(w => w.firebaseId) || []) {
        try {
            const doc = await db.collection(CONFIG.COLLECTIONS.WITHDRAWALS).doc(w.firebaseId).get();
            if (doc.exists && doc.data().status !== 'pending') {
                const data = doc.data();
                userData.pendingWithdrawals = userData.pendingWithdrawals.filter(x => x.id !== w.id);
                if (data.status === 'approved') {
                    if (!userData.completedWithdrawals) userData.completedWithdrawals = [];
                    userData.completedWithdrawals.push({ ...w, status: 'approved' });
                    showToast(t('notif.withdrawApproved', { amount: w.amount, currency: w.currency }), 'success');
                } else if (data.status === 'rejected') {
                    userData.balances[w.currency] += w.amount;
                    if (w.fee && w.feeCurrency) {
                        userData.balances[w.feeCurrency] += w.fee;
                    }
                    userData.totalWithdrawn -= w.amount;
                    showToast(t('notif.withdrawRejected', { reason: data.reason || 'Unknown' }), 'error');
                }
            }
        } catch (e) {}
    }
    
    saveUserToCache();
    if (currentHistoryFilter) renderHistory(currentHistoryFilter);
    updateUI();
}

function refreshHistory() { 
    lastHistoryCheckTime = 0; 
    checkPendingTransactions().then(() => renderHistory(currentHistoryFilter)); 
}

// ====== 32. LEADERBOARD ======
let leaderboardCache = { data: null, timestamp: 0 };

async function updateLeaderboard() {
    const el = document.getElementById('leaderboard');
    if (!el) return;
    
    const now = Date.now();
    if (leaderboardCache.data && now - leaderboardCache.timestamp < CONFIG.CACHE.LEADERBOARD_TTL) { 
        renderLeaderboard(leaderboardCache.data); 
        return; 
    }
    
    if (!db) {
        const mock = { 
            top: [
                { rank: 1, name: 'CryptoKing', earnings: 125.50 },
                { rank: 2, name: 'TonWhale', earnings: 98.25 },
                { rank: 3, name: 'MinerPro', earnings: 67.80 },
                { rank: 4, name: 'FastMiner', earnings: 54.32 },
                { rank: 5, name: 'WhaleHunter', earnings: 43.21 }
            ], 
            userRank: 12 
        };
        leaderboardCache = { data: mock, timestamp: now };
        renderLeaderboard(mock);
        return;
    }
    
    try {
        const snap = await db.collection(CONFIG.COLLECTIONS.USERS).orderBy('totalEarned', 'desc').limit(10).get();
        const top = [];
        snap.forEach((doc, i) => top.push({ 
            rank: i + 1, 
            name: doc.data().username || 'Miner', 
            earnings: doc.data().totalEarned || 0 
        }));
        const userRank = top.findIndex(u => u.name === userName) + 1;
        leaderboardCache = { data: { top, userRank: userRank > 0 ? userRank : 24 }, timestamp: now };
        renderLeaderboard(leaderboardCache.data);
    } catch (e) {}
}

function renderLeaderboard(data) {
    const el = document.getElementById('leaderboard');
    if (!el) return;
    
    let html = '';
    data.top.forEach((u, i) => {
        let medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${u.rank}`;
        html += `<div class="leaderboard-item ${i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : ''}">
            <span class="rank">${medal}</span><span class="name">${u.name}</span><span class="earnings">${u.earnings.toFixed(2)} TON</span>
        </div>`;
    });
    const userRankNumber = data.userRank && !isNaN(data.userRank) ? data.userRank : '—';
    html += `<div class="leaderboard-item you"><span class="rank">${userRankNumber}</span><span class="name">You</span><span class="earnings">${userData.totalEarned.toFixed(2)} TON</span></div>`;
    el.innerHTML = html;
}

// ====== 33. REFERRAL MILESTONES (تصميم Grid احترافي) ======
function renderReferralMilestones() {
    const container = document.getElementById('referralMilestonesContainer');
    if (!container) return;
    
    if (!userData.referralMilestonesClaimed) userData.referralMilestonesClaimed = [];
    
    let html = `<div class="milestones-header">
        <h3><i class="fas fa-trophy"></i> ${t('milestone.title')}</h3>
        <p>Complete referrals to earn USDT rewards</p>
    </div>`;
    html += '<div class="milestones-grid">';
    
    REFERRAL_MILESTONES.forEach(m => {
        const progress = Math.min((userData.referrals?.length || 0) / m.referrals * 100, 100);
        const isCompleted = (userData.referrals?.length || 0) >= m.referrals;
        const isClaimed = userData.referralMilestonesClaimed?.includes(m.referrals);
        
        let buttonHtml = '';
        if (isClaimed) {
            buttonHtml = `<button class="milestone-claimed" disabled><i class="fas fa-check"></i> ${t('milestone.claimed')}</button>`;
        } else if (isCompleted) {
            buttonHtml = `<button class="milestone-claim" onclick="claimMilestone(${m.referrals}, ${m.reward}, '${m.unit}')"><i class="fas fa-gift"></i> ${t('milestone.claim')}</button>`;
        } else {
            buttonHtml = `<button class="milestone-locked" disabled><i class="fas fa-lock"></i> ${t('milestone.locked')}</button>`;
        }
        
        html += `<div class="milestone-card ${isCompleted ? 'completed' : ''} ${isClaimed ? 'claimed' : ''}">
            <div class="milestone-icon">🏆</div>
            <div class="milestone-info">
                <div class="milestone-target">${m.referrals} Referrals</div>
                <div class="milestone-reward">🎁 ${m.reward} ${m.unit}</div>
                <div class="milestone-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <span class="progress-text">${userData.referrals?.length || 0}/${m.referrals}</span>
                </div>
                ${buttonHtml}
            </div>
        </div>`;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

async function claimMilestone(referrals, reward, unit) {
    if (userData.referralMilestonesClaimed?.includes(referrals)) {
        showToastPro('Reward already claimed!', 'warning');
        return;
    }
    
    if ((userData.referrals?.length || 0) < referrals) {
        showToastPro(`You need ${referrals} referrals to claim this reward!`, 'warning');
        return;
    }
    
    if (unit === 'USDT') {
        userData.balances.USDT += reward;
    } else if (unit === 'TON') {
        userData.balances.TON += reward;
        userData.balance = userData.balances.TON;
    }
    
    if (!userData.referralMilestonesClaimed) userData.referralMilestonesClaimed = [];
    userData.referralMilestonesClaimed.push(referrals);
    
    addTransaction('milestone_reward', reward, { currency: unit, milestone: `${referrals} referrals` });
    saveUserToCache();
    renderReferralMilestones();
    updateUI();
    
    // تأثيرات المطالبة
    createConfetti();
    createGoldExplosion();
    createScreenFlash();
    hapticFeedback('success');
    showToastPro(`🎉 You earned ${reward} ${unit}! 🎉`, 'success');
}

function renderReferralTree() {
    const tree = document.getElementById('referralTree');
    if (!tree) return;
    if (!userData.referrals?.length) { 
        tree.innerHTML = '<div class="tree-node">No referrals yet</div>'; 
        return; 
    }
    tree.innerHTML = userData.referrals.slice(0, 10).map(r => 
        `<div class="tree-node"><i class="fas fa-user"></i><span>${r.slice(0, 8)}...</span></div>`
    ).join('');
}

function copyReferralLink() {
    navigator.clipboard.writeText(getReferralLink());
    showToast('Referral link copied', 'success');
}

// ====== 34. CHART ======
function updateChart() {
    const chart = document.getElementById('chartBars');
    if (!chart) return;
    
    const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    const today = new Date();
    const earnings = [];
    
    for (let i = 6; i >= 0; i--) {
        const day = new Date(today);
        day.setDate(day.getDate() - i);
        const dayStr = day.toDateString();
        const amt = (userData.transactions || [])
            .filter(tx => tx.type === 'mining' && new Date(tx.timestamp).toDateString() === dayStr)
            .reduce((s, tx) => s + tx.amount, 0);
        earnings.push(amt);
    }
    
    const max = Math.max(...earnings, 0.1);
    chart.innerHTML = days.map((d, i) => 
        `<div class="chart-bar" style="height: ${earnings[i] / max * 100}%;" data-value="${earnings[i].toFixed(2)} TON" data-day="${d}"></div>`
    ).join('');
}

// ====== 35. UPDATE WHEEL UI ======
function updateWheelUI() {
    const freeSpinEl = document.getElementById('wheelFreeSpin');
    const jackpotCounterEl = document.getElementById('wheelJackpotCounter');
    const bigWinCounterEl = document.getElementById('wheelBigWinCounter');
    const wheelSpinsEl = document.getElementById('wheelGameSpins');
    const heatDisplay = document.getElementById('wheelHeatDisplay');
    const heatRingFill = document.getElementById('heatRingFill');
    
    if (wheelSpinsEl) {
        wheelSpinsEl.textContent = (userData.wheel.purchasedSpins || 0) + (userData.wheel.freeSpins || 0);
    }
    
    if (jackpotCounterEl) {
        const left = CONFIG.ECONOMY.WHEEL_GUARANTEED_BIG_EVERY - (userData.wheel.spinsSinceLastBig || 0);
        jackpotCounterEl.textContent = `${left}`;
    }
    
    if (bigWinCounterEl) {
        const left = CONFIG.ECONOMY.WHEEL_GUARANTEED_MEDIUM_EVERY - (userData.wheel.spinsSinceLastMedium || 0);
        bigWinCounterEl.textContent = `${left}`;
    }
    
    if (heatDisplay) {
        const heat = Math.min(100, (userData.wheel.heatLevel || 0));
        heatDisplay.textContent = `${Math.floor(heat)}%`;
    }
    
    if (heatRingFill) {
        const heat = Math.min(100, (userData.wheel.heatLevel || 0));
        heatRingFill.style.transform = `rotate(${heat * 3.6}deg)`;
        let color = '#22c55e';
        if (heat > 70) color = '#ef4444';
        else if (heat > 40) color = '#fbbf24';
        heatRingFill.style.background = `conic-gradient(${color} 0deg ${heat * 3.6}deg, rgba(255,255,255,0.1) ${heat * 3.6}deg 360deg)`;
    }
    
    if (freeSpinEl) {
        const now = Date.now();
        const next = userData.wheel.lastFreeSpin + CONFIG.ECONOMY.WHEEL_FREE_SPIN_INTERVAL;
        if (now < next) {
            const left = next - now;
            const h = Math.floor(left / 3600000);
            const m = Math.floor((left % 3600000) / 60000);
            freeSpinEl.innerHTML = `<i class="fas fa-clock"></i> ${h}h ${m}m`;
            freeSpinEl.disabled = true;
        } else {
            freeSpinEl.innerHTML = `<i class="fas fa-gift"></i> FREE`;
            freeSpinEl.disabled = false;
        }
    }
}

function updateSlotsUI() {
    const freeSpinEl = document.getElementById('slotsFreeSpin');
    const slotsSpinsEl = document.getElementById('slotsGameSpins');
    const streakCounter = document.getElementById('slotsStreakCounter');
    const freeSpinCounter = document.getElementById('slotsFreeSpinCounter');
    const winAmount = document.getElementById('slotsWinAmount');
    
    if (slotsSpinsEl) {
        slotsSpinsEl.textContent = (userData.slots.purchasedSpins || 0) + (userData.slots.freeSpins || 0);
    }
    
    if (streakCounter) {
        streakCounter.textContent = userData.slots.spinsWithoutWin || 0;
    }
    
    if (freeSpinCounter) {
        const left = CONFIG.ECONOMY.SLOTS_FREE_SPIN_EVERY - ((userData.slots.spinsWithoutWin || 0) % CONFIG.ECONOMY.SLOTS_FREE_SPIN_EVERY);
        freeSpinCounter.textContent = left;
    }
    
    if (winAmount) {
        winAmount.textContent = '0.00';
    }
    
    if (freeSpinEl) {
        const now = Date.now();
        const next = userData.slots.lastFreeSpin + CONFIG.ECONOMY.SLOTS_FREE_SPIN_INTERVAL;
        if (now < next) {
            const left = next - now;
            const h = Math.floor(left / 3600000);
            const m = Math.floor((left % 3600000) / 60000);
            freeSpinEl.innerHTML = `<i class="fas fa-clock"></i> ${h}h ${m}m`;
            freeSpinEl.disabled = true;
        } else {
            freeSpinEl.innerHTML = `<i class="fas fa-gift"></i> FREE`;
            freeSpinEl.disabled = false;
        }
    }
}

function updatePurchasedSpinsDisplay() {
    const wheelSpins = document.getElementById('wheelGameSpins');
    const slotsSpins = document.getElementById('slotsGameSpins');
    
    if (wheelSpins) {
        wheelSpins.textContent = (userData.wheel.purchasedSpins || 0) + (userData.wheel.freeSpins || 0);
    }
    if (slotsSpins) {
        slotsSpins.textContent = (userData.slots.purchasedSpins || 0) + (userData.slots.freeSpins || 0);
    }
}

// ====== 36. WHEEL PACKS ======
async function buyWheelPack(pack) {
    let spins, price, bonus;
    switch(pack) {
        case 'p5': spins = 5; price = CONFIG.ECONOMY.WHEEL_PACK_5.price; bonus = 0; break;
        case 'p10': spins = 10; price = CONFIG.ECONOMY.WHEEL_PACK_10.price; bonus = 1; break;
        case 'p50': spins = 50; price = CONFIG.ECONOMY.WHEEL_PACK_50.price; bonus = 5; break;
        case 'p100': spins = 100; price = CONFIG.ECONOMY.WHEEL_PACK_100.price; bonus = 10; break;
        default: return;
    }
    
    const totalSpins = spins + bonus;
    
    if (!confirm(t('pack.confirm', { spins: totalSpins, price }))) {
        return;
    }
    
    if (!tonConnectUI || !tonWallet) {
        showToast('Please connect your TON wallet first', 'error');
        return;
    }
    
    try {
        showToastPro('Opening wallet...', 'info');
        
        const tx = {
            validUntil: Date.now() + 600000,
            messages: [{
                address: CONFIG.TON.WALLET,
                amount: (price * 1e9).toString()
            }]
        };
        
        await tonConnectUI.sendTransaction(tx);
        
        showToastPro('Payment sent! Waiting for confirmation...', 'info');
        
        setTimeout(() => {
            if (!userData.wheel.purchasedSpins) userData.wheel.purchasedSpins = 0;
            userData.wheel.purchasedSpins += totalSpins;
            
            addTransaction('wheel_pack', price, { 
                currency: 'TON', 
                details: `Bought ${pack} pack: ${spins} spins + ${bonus} bonus` 
            });
            
            saveUserToCache();
            updatePurchasedSpinsDisplay();
            updateUI();
            showToastPro(t('pack.success', { spins: totalSpins }), 'success');
        }, 3000);
        
    } catch (e) {
        console.error("Payment error:", e);
        showToastPro(t('error.payment'), 'error');
    }
}

async function buySlotsPack(pack) {
    let spins, price, bonus;
    switch(pack) {
        case 'p5': spins = 5; price = CONFIG.ECONOMY.SLOTS_PACK_5.price; bonus = 0; break;
        case 'p10': spins = 10; price = CONFIG.ECONOMY.SLOTS_PACK_10.price; bonus = 1; break;
        case 'p50': spins = 50; price = CONFIG.ECONOMY.SLOTS_PACK_50.price; bonus = 5; break;
        case 'p100': spins = 100; price = CONFIG.ECONOMY.SLOTS_PACK_100.price; bonus = 10; break;
        default: return;
    }
    
    const totalSpins = spins + bonus;
    
    if (!confirm(t('pack.confirm', { spins: totalSpins, price }))) {
        return;
    }
    
    if (!tonConnectUI || !tonWallet) {
        showToast('Please connect your TON wallet first', 'error');
        return;
    }
    
    try {
        showToastPro('Opening wallet...', 'info');
        
        const tx = {
            validUntil: Date.now() + 600000,
            messages: [{
                address: CONFIG.TON.WALLET,
                amount: (price * 1e9).toString()
            }]
        };
        
        await tonConnectUI.sendTransaction(tx);
        
        showToastPro('Payment sent! Waiting for confirmation...', 'info');
        
        setTimeout(() => {
            if (!userData.slots.purchasedSpins) userData.slots.purchasedSpins = 0;
            userData.slots.purchasedSpins += totalSpins;
            
            addTransaction('slots_pack', price, { 
                currency: 'TON', 
                details: `Bought ${pack} pack: ${spins} spins + ${bonus} bonus` 
            });
            
            saveUserToCache();
            updatePurchasedSpinsDisplay();
            updateUI();
            showToastPro(t('pack.success', { spins: totalSpins }), 'success');
        }, 3000);
        
    } catch (e) {
        console.error("Payment error:", e);
        showToastPro(t('error.payment'), 'error');
    }
}

// ====== 37. BONUS PACKS (الزر العائم) ======
async function buyBonusPack(gameType, spins, price, bonus) {
    const totalSpins = spins + bonus;
    
    if (!confirm(`✨ Buy ${totalSpins} spins for ${price} TON? ✨\n(${spins} + ${bonus} FREE!)`)) return;
    
    if (!tonConnectUI || !tonWallet) {
        showToastPro('Please connect your TON wallet first', 'error');
        return;
    }
    
    try {
        showToastPro('Opening wallet...', 'info');
        
        const tx = {
            validUntil: Date.now() + 600000,
            messages: [{
                address: CONFIG.TON.WALLET,
                amount: (price * 1e9).toString()
            }]
        };
        
        await tonConnectUI.sendTransaction(tx);
        
        showToastPro('Payment sent! Waiting for confirmation...', 'info');
        
        setTimeout(() => {
            if (gameType === 'wheel') {
                if (!userData.wheel.purchasedSpins) userData.wheel.purchasedSpins = 0;
                userData.wheel.purchasedSpins += totalSpins;
            } else {
                if (!userData.slots.purchasedSpins) userData.slots.purchasedSpins = 0;
                userData.slots.purchasedSpins += totalSpins;
            }
            
            addTransaction('bonus_pack', price, { 
                currency: 'TON', 
                details: `Bonus pack: ${spins} + ${bonus} spins (Total: ${totalSpins})` 
            });
            
            saveUserToCache();
            updatePurchasedSpinsDisplay();
            updateUI();
            
            showToastPro(`🎉 Purchased ${totalSpins} spins! 🎉`, 'success');
            closeModal('bonusPacksModal');
        }, 3000);
        
    } catch (e) {
        console.error("Payment error:", e);
        showToastPro('Payment failed', 'error');
    }
}

function showBonusPacksModal() {
    const modal = document.getElementById('bonusPacksModal');
    if (modal) modal.classList.add('show');
}

// ====== 38. PROGRESSIVE JACKPOT & FAKE WINNERS ======
function updateProgressiveJackpotDisplay() {
    const jackpotElements = document.querySelectorAll('.progressive-jackpot-amount');
    jackpotElements.forEach(el => {
        el.textContent = userData.progressiveJackpot.toFixed(2);
    });
}

function addToProgressiveJackpot(amount) {
    userData.progressiveJackpot += CONFIG.ECONOMY.PROGRESSIVE_JACKPOT_INCREMENT;
    updateProgressiveJackpotDisplay();
    saveUserToCache();
}

function awardProgressiveJackpot() {
    const amount = userData.progressiveJackpot;
    userData.balances.TON += amount;
    userData.balance = userData.balances.TON;
    userData.totalEarned += amount;
    userData.casinoStats.totalWon += amount;
    if (amount > (userData.casinoStats.biggestWin || 0)) userData.casinoStats.biggestWin = amount;
    
    addTransaction('progressive_jackpot', amount, { currency: 'TON' });
    showToastPro(`👑 PROGRESSIVE JACKPOT! You won ${amount.toFixed(2)} TON!`, 'success');
    createGoldExplosion();
    createScreenFlash();
    createScreenShake();
    hapticFeedback('heavy');
    VegasAudio.jackpotExtended();
    
    userData.progressiveJackpot = CONFIG.ECONOMY.PROGRESSIVE_JACKPOT_START;
    updateProgressiveJackpotDisplay();
    saveUserToCache();
}

function updateFakeWinnerDisplay() {
    const winnerContainer = document.getElementById('fakeWinnerDisplay');
    if (!winnerContainer) return;
    
    const now = Date.now();
    const lastUpdate = userData.lastFakeWinnerUpdate || now;
    
    // تحديث كل 5 دقائق (300000 مللي ثانية)
    if (now - lastUpdate >= 300000) {
        userData.fakeWinnerIndex = (userData.fakeWinnerIndex + 1) % FAKE_WINNERS.length;
        userData.lastFakeWinnerUpdate = now;
        saveUserToCache();
    }
    
    const winner = FAKE_WINNERS[userData.fakeWinnerIndex || 0];
    if (winner) {
        winnerContainer.innerHTML = `
            <div class="fake-winner">
                <div class="winner-icon">${winner.icon}</div>
                <div class="winner-info">
                    <span class="winner-name">${winner.name}</span>
                    <span class="winner-amount">${winner.amount} TON</span>
                    <span class="winner-time">${winner.time}</span>
                </div>
            </div>
            <div class="winner-dots">
                ${FAKE_WINNERS.map((_, i) => `<span class="dot ${i === userData.fakeWinnerIndex ? 'active' : ''}"></span>`).join('')}
            </div>
            <div class="next-update">Next update: ${formatTimeRemaining(300000 - (now - lastUpdate))}</div>
        `;
    }
}

function formatTimeRemaining(ms) {
    if (ms <= 0) return '0:00';
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// ====== 39. AUTO SPIN ======
let autoSpinInterval = null;
let currentAutoSpinGame = null;

function stopAutoSpin() {
    if (autoSpinInterval) {
        clearInterval(autoSpinInterval);
        autoSpinInterval = null;
        currentAutoSpinGame = null;
        const autoSpinToggle = document.getElementById('autoSpinToggle');
        if (autoSpinToggle) autoSpinToggle.checked = false;
        showToastPro('Auto Spin stopped', 'info');
    }
}

function toggleAutoSpin(gameType, isTurbo = false) {
    if (autoSpinInterval && currentAutoSpinGame === gameType) {
        stopAutoSpin();
    } else {
        if (autoSpinInterval) stopAutoSpin();
        currentAutoSpinGame = gameType;
        autoSpinInterval = setInterval(() => {
            if (gameType === 'wheel') {
                if ((userData.wheel.purchasedSpins + userData.wheel.freeSpins) <= 0 && userData.balances.TON < CONFIG.ECONOMY.WHEEL_SPIN_PRICE) {
                    stopAutoSpin();
                    showToastPro('Auto Spin stopped: No spins left', 'warning');
                    return;
                }
                spinWheelVegas(false);
            } else if (gameType === 'slots') {
                if ((userData.slots.purchasedSpins + userData.slots.freeSpins) <= 0 && userData.balances.TON < (isTurbo ? CONFIG.ECONOMY.SLOTS_TURBO_PRICE : CONFIG.ECONOMY.SLOTS_SPIN_PRICE)) {
                    stopAutoSpin();
                    showToastPro('Auto Spin stopped: No spins left', 'warning');
                    return;
                }
                spinSlotsGame(false, isTurbo);
            }
        }, CONFIG.ECONOMY.AUTO_SPIN_DELAY);
        showToastPro('Auto Spin started', 'success');
    }
}

// ====== 40. WHEEL GAME 3D (نصوص مقوسة من المركز للحافة) ======
let wheelGame = null;

class WheelGame3D {
    constructor(canvasId, prizes) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            console.warn("Canvas not found, retrying...");
            setTimeout(() => this.constructor(canvasId, prizes), 100);
            return;
        }
        this.ctx = this.canvas.getContext('2d');
        this.prizes = prizes;
        this.segmentAngle = (Math.PI * 2) / this.prizes.length;
        this.rotation = 0;
        this.isSpinning = false;
        this.spinStartTime = 0;
        this.spinDuration = 3500;
        this.targetRotation = 0;
        this.animationId = null;
        this.selectedPrize = null;
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.draw();
        
        this.addIcyRing();
    }
    
    addIcyRing() {
        const container = this.canvas.parentElement;
        const existingRing = container.querySelector('.wheel-icy-ring');
        if (existingRing) existingRing.remove();
        
        const ring = document.createElement('div');
        ring.className = 'wheel-icy-ring';
        container.appendChild(ring);
        
        const sparkles = document.createElement('div');
        sparkles.className = 'icy-sparkles';
        ring.appendChild(sparkles);
        
        const glow = document.createElement('div');
        glow.className = 'icy-glow';
        ring.appendChild(glow);
    }
    
    resize() {
        const container = this.canvas.parentElement;
        const size = Math.min(container?.clientWidth || 400, 400);
        this.canvas.width = size;
        this.canvas.height = size;
        this.centerX = size / 2;
        this.centerY = size / 2;
        this.radius = size / 2 - 15;
        this.draw();
    }
    
    draw() {
        const ctx = this.ctx;
        const cx = this.centerX;
        const cy = this.centerY;
        const r = this.radius;
        
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // رسم القطاعات
        for (let i = 0; i < this.prizes.length; i++) {
            const prize = this.prizes[i];
            const startAngle = i * this.segmentAngle + this.rotation;
            const endAngle = (i + 1) * this.segmentAngle + this.rotation;
            
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.arc(cx, cy, r, startAngle, endAngle);
            ctx.closePath();
            
            // تدرج 3D
            const grad = ctx.createLinearGradient(
                cx + Math.cos(startAngle) * r * 0.3,
                cy + Math.sin(startAngle) * r * 0.3,
                cx + Math.cos(endAngle) * r * 0.7,
                cy + Math.sin(endAngle) * r * 0.7
            );
            grad.addColorStop(0, prize.gradient?.[0] || prize.color);
            grad.addColorStop(1, prize.gradient?.[1] || prize.color);
            ctx.fillStyle = grad;
            ctx.fill();
            
            // حدود ذهبية بارزة
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.arc(cx, cy, r, startAngle, endAngle);
            ctx.strokeStyle = 'rgba(255,215,0,0.7)';
            ctx.lineWidth = 2.5;
            ctx.stroke();
            
            // رسم النص المقوس (من المركز إلى الحافة)
            const midAngle = startAngle + this.segmentAngle / 2;
            this.drawCurvedText(ctx, prize, cx, cy, r, midAngle);
        }
        
        // المركز المعدني
        ctx.beginPath();
        ctx.arc(cx, cy, r * 0.13, 0, 2 * Math.PI);
        const centerGrad = ctx.createRadialGradient(cx - 5, cy - 5, 3, cx, cy, r * 0.13);
        centerGrad.addColorStop(0, '#ffdd99');
        centerGrad.addColorStop(1, '#ffaa44');
        ctx.fillStyle = centerGrad;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx, cy, r * 0.09, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffcc66';
        ctx.fill();
        
        ctx.shadowBlur = 0;
    }
    
    drawCurvedText(ctx, prize, cx, cy, r, angle) {
        const topText = prize.topText || prize.label;
        const bottomText = prize.bottomText || '';
        
        // النص العلوي (الرقم/الرمز)
        const topRadius = r * 0.75;
        const topX = cx + Math.cos(angle) * topRadius;
        const topY = cy + Math.sin(angle) * topRadius;
        
        ctx.save();
        ctx.translate(topX, topY);
        ctx.rotate(angle + Math.PI / 2);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        
        let fontSize = r * 0.09;
        let iconSize = r * 0.12;
        
        if (prize.icon && prize.icon !== '💰') {
            ctx.font = `bold ${iconSize}px "Segoe UI", "Outfit"`;
            ctx.fillStyle = '#ffffff';
            ctx.shadowBlur = 8;
            ctx.shadowColor = 'rgba(0,0,0,0.7)';
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            ctx.fillText(prize.icon, 0, 0);
        } else {
            ctx.font = `bold ${fontSize}px "Outfit", "Segoe UI"`;
            
            // لون النص حسب قيمة الجائزة
            if (prize.amount >= 100) ctx.fillStyle = '#ff6666';
            else if (prize.amount >= 25) ctx.fillStyle = '#ffaa44';
            else if (prize.amount >= 5) ctx.fillStyle = '#ffdd88';
            else ctx.fillStyle = '#ffffff';
            
            ctx.shadowBlur = 6;
            ctx.shadowColor = 'rgba(0,0,0,0.5)';
            ctx.fillText(topText, 0, 0);
        }
        ctx.restore();
        
        // النص السفلي (الوصف)
        if (bottomText) {
            const bottomRadius = r * 0.5;
            const bottomX = cx + Math.cos(angle) * bottomRadius;
            const bottomY = cy + Math.sin(angle) * bottomRadius;
            
            ctx.save();
            ctx.translate(bottomX, bottomY);
            ctx.rotate(angle + Math.PI / 2);
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = `bold ${r * 0.06}px "Outfit"`;
            ctx.fillStyle = '#dddddd';
            ctx.shadowBlur = 4;
            ctx.shadowColor = 'rgba(0,0,0,0.5)';
            ctx.fillText(bottomText, 0, 0);
            ctx.restore();
        }
    }
    
    selectPrize() {
        const totalWeight = this.prizes.reduce((s, p) => s + (p.weight || 1), 0);
        let rand = Math.random() * totalWeight;
        for (const prize of this.prizes) {
            rand -= (prize.weight || 1);
            if (rand <= 0) return prize;
        }
        return this.prizes[0];
    }
    
    spin(callback, isFree = false) {
        if (this.isSpinning) return;
        
        let prize = null;
        const spinsSinceLastMedium = userData.wheel.spinsSinceLastMedium || 0;
        const spinsSinceLastBig = userData.wheel.spinsSinceLastBig || 0;
        
        // نظام الضمان (محفوظ)
        if (spinsSinceLastBig >= CONFIG.ECONOMY.WHEEL_GUARANTEED_BIG_EVERY) {
            const bigPrizes = this.prizes.filter(p => p.effect === 'jackpot' || p.effect === 'mega' || (p.amount >= 25));
            if (bigPrizes.length) {
                prize = bigPrizes[Math.floor(Math.random() * bigPrizes.length)];
                userData.wheel.spinsSinceLastBig = 0;
                userData.wheel.heatLevel = 0;
            }
        } else if (spinsSinceLastMedium >= CONFIG.ECONOMY.WHEEL_GUARANTEED_MEDIUM_EVERY) {
            const mediumPrizes = this.prizes.filter(p => p.effect === 'big' || p.effect === 'nice' || (p.amount >= 5 && p.amount < 25));
            if (mediumPrizes.length) {
                prize = mediumPrizes[Math.floor(Math.random() * mediumPrizes.length)];
                userData.wheel.spinsSinceLastMedium = 0;
                userData.wheel.heatLevel = Math.max(0, userData.wheel.heatLevel - 30);
            }
        } else {
            prize = this.selectPrize();
            userData.wheel.spinsSinceLastMedium = (userData.wheel.spinsSinceLastMedium || 0) + 1;
            userData.wheel.spinsSinceLastBig = (userData.wheel.spinsSinceLastBig || 0) + 1;
            
            if (prize.amount < 2) {
                userData.wheel.heatLevel = Math.min(100, (userData.wheel.heatLevel || 0) + CONFIG.ECONOMY.HEAT_INCREMENT_ON_LOSS);
            } else if (prize.amount < 10) {
                userData.wheel.heatLevel = Math.max(0, (userData.wheel.heatLevel || 0) - CONFIG.ECONOMY.HEAT_DECREMENT_ON_SMALL_WIN);
            } else {
                userData.wheel.heatLevel = Math.max(0, (userData.wheel.heatLevel || 0) - CONFIG.ECONOMY.HEAT_RESET_ON_BIG_WIN);
            }
        }
        
        if (!prize) prize = this.selectPrize();
        
        const prizeIndex = this.prizes.indexOf(prize);
        const segmentMidAngle = prizeIndex * this.segmentAngle + this.segmentAngle / 2;
        const currentAngle = this.rotation % (2 * Math.PI);
        let delta = (segmentMidAngle - currentAngle + 2 * Math.PI) % (2 * Math.PI);
        const extraRotations = 6 + Math.floor(Math.random() * 3);
        this.targetRotation = this.rotation + extraRotations * 2 * Math.PI + delta;
        
        this.isSpinning = true;
        this.spinStartTime = performance.now();
        this.selectedPrize = prize;
        this.callback = callback;
        
        VegasAudio.whoosh();
        createIceParticles();
        
        // طقطقة متقدمة حسب السرعة
        const totalTicks = 36;
        let currentTick = 0;
        
        const scheduleTick = () => {
            if (!this.isSpinning || currentTick >= totalTicks) return;
            const elapsed = performance.now() - this.spinStartTime;
            const t = Math.min(1, elapsed / this.spinDuration);
            let speedFactor;
            if (t < 0.3) speedFactor = 0.4 + (t / 0.3) * 1.2;
            else if (t < 0.7) speedFactor = 1.6;
            else speedFactor = 1.6 - ((t - 0.7) / 0.3) * 1.2;
            const pitch = 0.7 + t * 1.0;
            const volume = 0.08 + (t * 0.1);
            VegasAudio.tick(pitch, volume);
            currentTick++;
            const nextDelay = 55 / Math.max(0.4, speedFactor);
            setTimeout(scheduleTick, nextDelay);
        };
        scheduleTick();
        
        const animate = (now) => {
            const elapsed = now - this.spinStartTime;
            let t = Math.min(1, elapsed / this.spinDuration);
            let easeOut;
            if (t < 0.2) {
                easeOut = 2.5 * t * t;
            } else if (t < 0.6) {
                easeOut = 0.2 + (t - 0.2) * 1.25;
            } else {
                const t2 = (t - 0.6) / 0.4;
                easeOut = 0.7 + 0.3 * (1 - Math.pow(1 - t2, 2));
            }
            
            let currentRot = this.rotation + (this.targetRotation - this.rotation) * easeOut;
            
            if (t > 0.85) {
                const wobble = Math.sin((t - 0.85) * Math.PI * 15) * (1 - t) * 0.05;
                currentRot += wobble;
            }
            
            this.rotation = currentRot;
            this.draw();
            
            const speedFill = document.getElementById('wheelSpeedFill');
            if (speedFill) {
                const speed = (1 - easeOut) * 100;
                speedFill.style.width = `${speed}%`;
            }
            
            if (t < 1) {
                this.animationId = requestAnimationFrame(animate);
            } else {
                this.rotation = this.targetRotation % (2 * Math.PI);
                this.draw();
                this.isSpinning = false;
                cancelAnimationFrame(this.animationId);
                VegasAudio.clunk();
                if (this.callback) this.callback(this.selectedPrize);
                if (speedFill) speedFill.style.width = '0%';
            }
        };
        
        this.animationId = requestAnimationFrame(animate);
    }
}

function initWheelCanvas() {
    if (wheelGame) return;
    const canvas = document.getElementById('wheelCanvas');
    if (!canvas) {
        setTimeout(initWheelCanvas, 200);
        return;
    }
    wheelGame = new WheelGame3D('wheelCanvas', WHEEL_PRIZES);
    console.log("✅ Wheel 3D with Icy Glow initialized");
}

// ====== 41. SLOTS GAME (مع إصلاح مشكلة اختفاء الرموز) ======
let slotsGame = null;

class SlotsGame3D {
    constructor(reelIds, symbolsData) {
        this.reels = reelIds.map(id => document.getElementById(id));
        this.symbolsData = symbolsData;
        this.symbols = symbolsData.map(s => s.symbol);
        this.values = symbolsData.map(s => ({ value: s.value, type: s.type, color: s.color, effect: s.effect }));
        this.reelPositions = [0, 0, 0];
        this.isSpinning = false;
        this.spinStartTime = 0;
        this.durations = [1800, 2200, 2600];
        this.targetPositions = [0, 0, 0];
        this.animationId = null;
        
        if (this.reels.some(r => !r)) {
            console.warn("Slots reels not found, retrying...");
            setTimeout(() => this.constructor(reelIds, symbolsData), 200);
            return;
        }
        this.buildReels();
    }
    
    buildReels() {
        this.reels.forEach((reel, idx) => {
            let html = '';
            for (let copy = 0; copy < 3; copy++) {
                this.symbols.forEach(symbol => {
                    const data = this.symbolsData.find(s => s.symbol === symbol);
                    html += `<div class="slot-symbol-3d" style="color: ${data?.color || '#fff'};">${symbol}</div>`;
                });
            }
            reel.innerHTML = html;
            reel.style.transform = 'translateY(0px)';
        });
    }
    
    selectRandomSymbol() {
        const totalWeight = this.symbolsData.reduce((s, sym) => s + sym.weight, 0);
        let random = Math.random() * totalWeight;
        for (let i = 0; i < this.symbolsData.length; i++) {
            random -= this.symbolsData[i].weight;
            if (random <= 0) return i;
        }
        return 0;
    }
    
    spin(callback, isTurbo = false) {
        if (this.isSpinning) return;
        
        const durationMultiplier = isTurbo ? 0.65 : 1;
        const durations = this.durations.map(d => d * durationMultiplier);
        
        this.results = [this.selectRandomSymbol(), this.selectRandomSymbol(), this.selectRandomSymbol()];
        
        for (let i = 0; i < 3; i++) {
            const targetIndex = this.results[i];
            const symbolHeight = 100;
            const totalSymbols = this.symbols.length;
            const extraSpins = 15 + Math.floor(Math.random() * 10);
            const targetY = -(targetIndex * symbolHeight) - (extraSpins * totalSymbols * symbolHeight);
            this.targetPositions[i] = targetY;
        }
        
        this.isSpinning = true;
        this.spinStartTime = performance.now();
        this.callback = callback;
        
        this.reels.forEach(reel => {
            reel.classList.add('vegas-reel-spinning');
        });
        
        VegasAudio.whoosh();
        
        const animate = (now) => {
            const elapsed = now - this.spinStartTime;
            let allStopped = true;
            
            for (let i = 0; i < 3; i++) {
                const duration = durations[i];
                let t = Math.min(1, elapsed / duration);
                
                if (t < 1) {
                    allStopped = false;
                    let easing;
                    if (i === 0) easing = 1 - Math.pow(1 - t, 3);
                    else if (i === 1) easing = 1 - Math.pow(1 - t, 2.5);
                    else easing = 1 - Math.pow(1 - t, 2);
                    
                    const currentY = -(easing * Math.abs(this.targetPositions[i]));
                    this.reels[i].style.transform = `translateY(${currentY}px)`;
                    this.reelPositions[i] = Math.abs(Math.floor(currentY / 100)) % this.symbols.length;
                } else {
                    this.reels[i].style.transform = `translateY(${this.targetPositions[i]}px)`;
                    this.reelPositions[i] = this.results[i];
                }
            }
            
            if (!allStopped) {
                this.animationId = requestAnimationFrame(animate);
            } else {
                this.isSpinning = false;
                cancelAnimationFrame(this.animationId);
                this.reels.forEach(reel => {
                    reel.classList.remove('vegas-reel-spinning');
                });
                VegasAudio.click();
                
                const winLine = document.getElementById('slotsWinLine');
                if (winLine) {
                    winLine.classList.add('active');
                    setTimeout(() => winLine.classList.remove('active'), 1000);
                }
                
                // إعادة بناء البكرات لعرض النتيجة بشكل صحيح
                this.showResults();
                
                if (this.callback) {
                    const result = this.getResult();
                    this.callback(result);
                }
            }
        };
        
        this.animationId = requestAnimationFrame(animate);
    }
    
    showResults() {
        // إعادة بناء البكرات لعرض الرموز النهائية
        for (let i = 0; i < 3; i++) {
            const reel = this.reels[i];
            const resultIndex = this.results[i];
            const resultSymbol = this.symbols[resultIndex];
            
            // بناء البكرة مع الرموز
            let html = '';
            for (let copy = 0; copy < 3; copy++) {
                for (let j = 0; j < this.symbols.length; j++) {
                    const symbol = this.symbols[j];
                    const data = this.symbolsData.find(s => s.symbol === symbol);
                    const isWinner = (j === resultIndex);
                    html += `<div class="slot-symbol-3d ${isWinner ? 'winner-symbol' : ''}" style="color: ${data?.color || '#fff'};">${symbol}</div>`;
                }
            }
            reel.innerHTML = html;
            reel.style.transform = `translateY(-${(resultIndex + this.symbols.length) * 100}px)`;
        }
    }
    
    getResult() {
        const symbols = this.results.map(idx => this.symbols[idx]);
        const values = this.results.map(idx => this.values[idx]);
        
        if (symbols[0] === symbols[1] && symbols[1] === symbols[2]) {
            const prize = values[0];
            let effect = 'normal';
            if (prize.value >= 25) effect = 'jackpot';
            else if (prize.value >= 5) effect = 'big';
            else if (prize.value >= 1) effect = 'nice';
            
            if (effect === 'jackpot') {
                userData.slots.heatLevel = 0;
            }
            
            return { win: true, amount: prize.value * 3, currency: prize.type, effect: effect, isJackpot: prize.value >= 25 };
        }
        
        if (symbols[0] === symbols[1] || symbols[1] === symbols[2] || symbols[0] === symbols[2]) {
            const matchSymbol = symbols[0] === symbols[1] ? symbols[0] : symbols[1];
            const prize = this.symbolsData.find(s => s.symbol === matchSymbol);
            if (prize && prize.value > 0) {
                let effect = 'normal';
                const halfValue = prize.value * 1.5;
                if (halfValue >= 12.5) effect = 'big';
                else if (halfValue >= 2.5) effect = 'nice';
                
                if (effect === 'big') {
                    userData.slots.heatLevel = Math.max(0, (userData.slots.heatLevel || 0) - 30);
                } else {
                    userData.slots.heatLevel = Math.max(0, (userData.slots.heatLevel || 0) - 10);
                }
                
                return { win: true, amount: halfValue, currency: prize.type, effect: effect, isJackpot: false };
            }
        }
        
        userData.slots.heatLevel = Math.min(100, (userData.slots.heatLevel || 0) + CONFIG.ECONOMY.HEAT_INCREMENT_ON_LOSS);
        
        return { win: false, amount: 0, currency: 'TON', effect: 'normal', isJackpot: false };
    }
}

function initSlotsCanvas() {
    if (slotsGame) return;
    const reels = ['reel1', 'reel2', 'reel3'];
    const allExist = reels.every(id => document.getElementById(id));
    if (!allExist) {
        setTimeout(initSlotsCanvas, 200);
        return;
    }
    slotsGame = new SlotsGame3D(reels, SLOTS_SYMBOLS_DATA);
    console.log("✅ Slots 3D initialized");
}

// ====== 42. SPIN FUNCTIONS ======
function spinWheelVegas(isFree) {
    if (!wheelGame) initWheelCanvas();
    if (wheelGame.isSpinning) return;
    
    VegasAudio.click();
    
    if (isFree) {
        const now = Date.now();
        const nextFree = userData.wheel.lastFreeSpin + CONFIG.ECONOMY.WHEEL_FREE_SPIN_INTERVAL;
        if (now < nextFree) {
            const left = nextFree - now;
            showToastPro(`⏰ Wait ${Math.floor(left/3600000)}h`, 'warning');
            return;
        }
        userData.wheel.lastFreeSpin = now;
    } else {
        if (userData.wheel.purchasedSpins > 0) {
            userData.wheel.purchasedSpins--;
            addToProgressiveJackpot(CONFIG.ECONOMY.WHEEL_SPIN_PRICE);
        } else if (userData.wheel.freeSpins > 0) {
            userData.wheel.freeSpins--;
            addToProgressiveJackpot(CONFIG.ECONOMY.WHEEL_SPIN_PRICE);
        } else if (userData.balances.TON >= CONFIG.ECONOMY.WHEEL_SPIN_PRICE) {
            userData.balances.TON -= CONFIG.ECONOMY.WHEEL_SPIN_PRICE;
            userData.balance = userData.balances.TON;
            addToProgressiveJackpot(CONFIG.ECONOMY.WHEEL_SPIN_PRICE);
        } else {
            showToastPro(`❌ Need ${CONFIG.ECONOMY.WHEEL_SPIN_PRICE} TON`, 'error');
            return;
        }
    }
    
    saveUserToCache();
    
    wheelGame.spin((prize) => {
        awardWheelPrize(prize);
        userData.wheel.totalSpins++;
        updateWheelUI();
        updateHeatMeter('wheel');
        updateGuaranteedCounters();
        updateUI();
        checkChallengeProgress('wheel_spin');
        if (prize.amount >= 5) checkChallengeProgress('wheel_win', prize.amount);
        if (prize.amount >= 25) checkChallengeProgress('big_win', prize.amount);
        saveUserToCache();
    }, isFree);
}

function awardWheelPrize(prize) {
    if (prize.effect === 'luck') {
        userData.balances.TON += prize.amount;
        userData.balance = userData.balances.TON;
        showToastPro(`🍀 ${prize.amount} TON bonus!`, 'success');
        VegasAudio.coin();
    } else if (prize.effect === 'freespin') {
        userData.wheel.freeSpins = (userData.wheel.freeSpins || 0) + 1;
        showToastPro('🆓 FREE SPIN STORED!', 'success');
        VegasAudio.tick(1, 0.2);
    } else if (prize.effect === 'multiplier') {
        userData.slots.multiplier = 2;
        showToastPro('⚡ NEXT WIN ×2!', 'success');
        VegasAudio.tick(1.2, 0.25);
    } else if (prize.effect === 'jackpot' || prize.effect === 'mega') {
        const currency = prize.type;
        userData.balances[currency] += prize.amount;
        if (currency === 'TON') userData.balance = userData.balances.TON;
        userData.totalEarned += prize.amount;
        userData.casinoStats.totalWon += prize.amount;
        if (prize.amount > (userData.casinoStats.biggestWin || 0)) userData.casinoStats.biggestWin = prize.amount;
        
        addTransaction('wheel', prize.amount, { currency, jackpot: true });
        
        let winType = prize.effect === 'mega' ? 'mega' : 'jackpot';
        showGameWinMessage(prize.amount, currency, winType);
        JackpotTheater.play(prize.amount, currency, winType);
        createGoldExplosion();
        createScreenFlash();
        createScreenShake();
        createIcyBurst();
        
        userData.wheel.heatLevel = 0;
        userData.wheel.spinsSinceLastBig = 0;
        userData.wheel.spinsSinceLastMedium = 0;
    } else {
        const currency = prize.type;
        userData.balances[currency] += prize.amount;
        if (currency === 'TON') userData.balance = userData.balances.TON;
        userData.totalEarned += prize.amount;
        userData.casinoStats.totalWon += prize.amount;
        if (prize.amount > (userData.casinoStats.biggestWin || 0)) userData.casinoStats.biggestWin = prize.amount;
        
        addTransaction('wheel', prize.amount, { currency });
        
        let winType = 'normal';
        if (prize.amount >= 25) winType = 'jackpot';
        else if (prize.amount >= 10) winType = 'big';
        else if (prize.amount >= 5) winType = 'nice';
        
        showGameWinMessage(prize.amount, currency, winType);
        
        if (prize.amount >= 25) {
            JackpotTheater.play(prize.amount, currency, 'big');
            createGoldExplosion();
            createScreenFlash();
        } else if (prize.amount >= 10) {
            VegasAudio.win();
            createConfetti();
        } else if (prize.amount >= 5) {
            VegasAudio.win();
        } else if (prize.amount > 0) {
            VegasAudio.coin();
        }
    }
    
    hapticFeedback(prize.amount >= 10 ? 'medium' : 'light');
    saveUserToCache();
    updateUI();
    updateWheelUI();
}

function spinSlotsGame(isFree, isTurbo) {
    if (!slotsGame) initSlotsCanvas();
    if (slotsGame.isSpinning) return;
    
    VegasAudio.click();
    
    const price = isTurbo ? CONFIG.ECONOMY.SLOTS_TURBO_PRICE : CONFIG.ECONOMY.SLOTS_SPIN_PRICE;
    
    if (isFree) {
        const now = Date.now();
        const nextFree = userData.slots.lastFreeSpin + CONFIG.ECONOMY.SLOTS_FREE_SPIN_INTERVAL;
        if (now < nextFree) {
            const left = nextFree - now;
            showToastPro(`⏰ Wait ${Math.floor(left/3600000)}h`, 'warning');
            return;
        }
        userData.slots.lastFreeSpin = now;
    } else {
        const noWinStreak = userData.slots.spinsWithoutWin || 0;
        if (noWinStreak >= CONFIG.ECONOMY.SLOTS_FREE_SPIN_EVERY - 1) {
            userData.slots.spinsWithoutWin = 0;
            showToastPro('🎰 FREE SPIN! (10 spins without win)', 'success');
        } else if (userData.slots.purchasedSpins > 0) {
            userData.slots.purchasedSpins--;
            userData.slots.spinsWithoutWin = (userData.slots.spinsWithoutWin || 0) + 1;
            addToProgressiveJackpot(price);
        } else if (userData.slots.freeSpins > 0) {
            userData.slots.freeSpins--;
            userData.slots.spinsWithoutWin = (userData.slots.spinsWithoutWin || 0) + 1;
            addToProgressiveJackpot(price);
        } else if (userData.balances.TON >= price) {
            userData.balances.TON -= price;
            userData.balance = userData.balances.TON;
            userData.slots.spinsWithoutWin = (userData.slots.spinsWithoutWin || 0) + 1;
            addToProgressiveJackpot(price);
        } else {
            showToastPro(`❌ Need ${price} TON`, 'error');
            return;
        }
    }
    
    saveUserToCache();
    
    slotsGame.spin((result) => {
        if (result.win) {
            const multiplier = userData.slots.multiplier || 1;
            const finalAmount = result.amount * multiplier;
            
            userData.balances[result.currency] += finalAmount;
            if (result.currency === 'TON') userData.balance = userData.balances.TON;
            userData.totalEarned += finalAmount;
            userData.casinoStats.totalWon += finalAmount;
            if (finalAmount > (userData.casinoStats.biggestWin || 0)) userData.casinoStats.biggestWin = finalAmount;
            
            userData.slots.spinsWithoutWin = 0;
            userData.slots.multiplier = 1;
            
            addTransaction('slots', finalAmount, { currency: result.currency });
            
            const winAmountEl = document.getElementById('slotsWinAmount');
            if (winAmountEl) winAmountEl.textContent = `${finalAmount} ${result.currency}`;
            
            let winType = result.effect;
            if (result.isJackpot) winType = 'jackpot';
            
            showGameWinMessage(finalAmount, result.currency, winType);
            
            if (result.isJackpot) {
                JackpotTheater.play(finalAmount, result.currency, 'jackpot');
                createGoldExplosion();
                createScreenFlash();
                createScreenShake();
            } else if (result.effect === 'big') {
                JackpotTheater.play(finalAmount, result.currency, 'big');
                createGoldExplosion();
            } else if (result.effect === 'nice') {
                VegasAudio.win();
                createConfetti();
            } else if (finalAmount > 0) {
                VegasAudio.coin();
            }
            
            showToastPro(`🎰 You won ${finalAmount} ${result.currency}!`, 'success');
            checkChallengeProgress('slots_win', finalAmount);
            if (finalAmount >= 25) checkChallengeProgress('big_win', finalAmount);
        } else {
            showToastPro('🍀 Try again!', 'info');
            VegasAudio.tick(0.7, 0.08);
            
            userData.slots.spinsWithoutWin = (userData.slots.spinsWithoutWin || 0) + 1;
            
            const left = CONFIG.ECONOMY.SLOTS_FREE_SPIN_EVERY - (userData.slots.spinsWithoutWin % CONFIG.ECONOMY.SLOTS_FREE_SPIN_EVERY);
            if (left === 1) {
                showToastPro('🎰 Next spin is FREE!', 'warning');
            }
        }
        
        userData.slots.totalSpins++;
        updateSlotsUI();
        updateHeatMeter('slots');
        updateUI();
        checkChallengeProgress('slots_spin');
        saveUserToCache();
    }, isTurbo);
}

function showGameWinMessage(amount, currency, type) {
    const existing = document.querySelector('.game-win-message');
    if (existing) existing.remove();
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `game-win-message ${type}`;
    let text = '';
    let icon = '';
    let bgColor = '#000000aa';
    let borderColor = '#ffd966';
    
    if (type === 'mega') {
        icon = '👑👑👑';
        text = `MEGA JACKPOT! ${amount} ${currency}`;
        bgColor = '#ff44cccc';
        borderColor = '#ffff00';
    } else if (type === 'jackpot') {
        icon = '🎰🎰🎰';
        text = `JACKPOT! ${amount} ${currency}`;
        bgColor = '#ff4444cc';
        borderColor = '#ffaa00';
    } else if (type === 'big') {
        icon = '🔥🔥';
        text = `BIG WIN! ${amount} ${currency}`;
        bgColor = '#ff8800cc';
        borderColor = '#ffdd00';
    } else if (type === 'nice') {
        icon = '🔥';
        text = `NICE WIN! ${amount} ${currency}`;
        bgColor = '#ffaa33cc';
        borderColor = '#ffcc66';
    } else {
        icon = '🎉';
        text = `YOU WON! ${amount} ${currency}`;
        bgColor = '#00aaffcc';
        borderColor = '#88ff88';
    }
    
    messageDiv.innerHTML = `<span class="win-icon">${icon}</span><span class="win-text">${text}</span>`;
    messageDiv.style.position = 'absolute';
    messageDiv.style.top = '70px';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translateX(-50%)';
    messageDiv.style.zIndex = '200';
    messageDiv.style.backgroundColor = bgColor;
    messageDiv.style.color = '#fff';
    messageDiv.style.padding = '10px 24px';
    messageDiv.style.borderRadius = '50px';
    messageDiv.style.border = `2px solid ${borderColor}`;
    messageDiv.style.boxShadow = '0 0 30px rgba(0,0,0,0.5)';
    messageDiv.style.fontWeight = 'bold';
    messageDiv.style.fontSize = '1.2rem';
    messageDiv.style.whiteSpace = 'nowrap';
    messageDiv.style.backdropFilter = 'blur(8px)';
    messageDiv.style.display = 'flex';
    messageDiv.style.alignItems = 'center';
    messageDiv.style.gap = '12px';
    messageDiv.style.animation = 'slideDownFadeOut 3s ease forwards';
    document.body.appendChild(messageDiv);
    
    setTimeout(() => messageDiv.remove(), 3000);
}

// ====== 43. JACKPOT THEATER ======
const JackpotTheater = {
    isPlaying: false,
    
    play(amount, currency = 'TON', type = 'jackpot') {
        if (this.isPlaying) return;
        this.isPlaying = true;
        
        const container = document.querySelector('.wheel-game-container, .slots-game-container') || document.body;
        
        document.body.classList.add('screen-shake-heavy');
        setTimeout(() => document.body.classList.remove('screen-shake-heavy'), 600);
        
        const burst = document.createElement('div');
        burst.className = 'win-burst';
        document.body.appendChild(burst);
        setTimeout(() => burst.remove(), 800);
        
        setTimeout(() => {
            this.createLightBurst(container);
            if (type === 'mega') VegasAudio.jackpot();
            else if (type === 'jackpot') VegasAudio.jackpot();
            else VegasAudio.win();
        }, 100);
        
        setTimeout(() => {
            this.showJackpotText(container, amount, currency, type);
            VegasAudio.crowdCheer();
        }, 400);
        
        setTimeout(() => {
            this.createGoldParticles(container);
        }, 800);
        
        setTimeout(() => {
            this.isPlaying = false;
        }, 3500);
    },
    
    createLightBurst(container) {
        const burst = document.createElement('div');
        burst.className = 'vegas-burst';
        for (let i = 0; i < 16; i++) {
            const ray = document.createElement('div');
            ray.className = 'burst-ray';
            ray.style.transform = `translate(-50%, -100%) rotate(${i * 22.5}deg)`;
            burst.appendChild(ray);
        }
        container.appendChild(burst);
        setTimeout(() => burst.remove(), 900);
    },
    
    showJackpotText(container, amount, currency, type) {
        const text = document.createElement('div');
        text.className = `vegas-jackpot-text ${type}`;
        if (type === 'mega') {
            text.innerHTML = `👑 MEGA JACKPOT! ${amount} ${currency} 👑`;
        } else if (type === 'jackpot') {
            text.innerHTML = `🎰 JACKPOT! ${amount} ${currency} 🎰`;
        } else {
            text.innerHTML = `🔥 BIG WIN! ${amount} ${currency} 🔥`;
        }
        text.style.position = 'absolute';
        text.style.top = '70px';
        text.style.left = '50%';
        text.style.transform = 'translateX(-50%)';
        text.style.zIndex = '200';
        text.style.fontSize = '1.5rem';
        text.style.padding = '8px 16px';
        text.style.background = 'rgba(0,0,0,0.8)';
        text.style.borderRadius = '30px';
        text.style.border = '2px solid gold';
        text.style.boxShadow = '0 0 20px gold';
        text.style.whiteSpace = 'nowrap';
        document.body.appendChild(text);
        document.body.classList.add('vegas-shake');
        setTimeout(() => document.body.classList.remove('vegas-shake'), 500);
        setTimeout(() => text.remove(), 3200);
    },
    
    createGoldParticles(container) {
        for (let i = 0; i < 50; i++) {
            const p = document.createElement('div');
            p.className = 'vegas-particle';
            p.style.left = '50%';
            p.style.top = '50%';
            const angle = (i * 7.2) * Math.PI / 180;
            const distance = 150 + Math.random() * 100;
            p.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
            p.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
            p.style.animationDelay = `${Math.random() * 0.5}s`;
            container.appendChild(p);
            setTimeout(() => p.remove(), 1800);
        }
    }
};

// ====== 44. VEGAS AUDIO ENGINE ======
const VegasAudio = {
    ctx: null,
    isInitialized: false,
    
    init() {
        if (this.isInitialized) return;
        try {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            this.isInitialized = true;
            console.log("🎵 Vegas Audio initialized");
        } catch(e) { console.warn("Audio not supported"); }
    },
    
    click() {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.08);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(now + 0.1);
    },
    
    whoosh() {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.4);
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(400, now);
        filter.frequency.exponentialRampToValueAtTime(2000, now + 0.4);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(now + 0.4);
    },
    
    tick(pitch = 1, volume = 0.12) {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1200 * pitch, now);
        gain.gain.setValueAtTime(volume, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.04);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(now + 0.04);
    },
    
    clunk() {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.2);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(now + 0.2);
    },
    
    coin() {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1800, now);
        osc.frequency.exponentialRampToValueAtTime(2200, now + 0.1);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(now + 0.3);
    },
    
    win() {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        for (let i = 0; i < 6; i++) {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(600 + i * 120, now + i * 0.12);
            gain.gain.setValueAtTime(0.2, now + i * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.12 + 0.25);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + i * 0.12);
            osc.stop(now + i * 0.12 + 0.25);
        }
    },
    
    jackpot() {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        for (let i = 0; i < 12; i++) {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(200 + i * 70, now + i * 0.1);
            gain.gain.setValueAtTime(0.25, now + i * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.35);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + i * 0.1);
            osc.stop(now + i * 0.1 + 0.35);
        }
        setTimeout(() => this.crowdCheer(), 400);
    },
    
    jackpotExtended() {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        for (let i = 0; i < 12; i++) {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(200 + i * 50, now + i * 0.15);
            gain.gain.setValueAtTime(0.3, now + i * 0.15);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.15 + 0.5);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + i * 0.15);
            osc.stop(now + i * 0.15 + 0.5);
        }
        setTimeout(() => this.crowdCheer(), 600);
    },
    
    crowdCheer() {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const bufferSize = this.ctx.sampleRate * 2;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1200, now);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.linearRampToValueAtTime(0, now + 2);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start();
    },
    
    purchase() {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        for (let i = 0; i < 4; i++) {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800 + i * 150, now + i * 0.08);
            gain.gain.setValueAtTime(0.2, now + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.08 + 0.2);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + i * 0.08);
            osc.stop(now + i * 0.08 + 0.2);
        }
    }
};

// ====== 45. HEAT METER & GUARANTEED COUNTERS ======
function updateHeatMeter(game) {
    const heatLevel = game === 'wheel' ? (userData.wheel.heatLevel || 0) : (userData.slots.heatLevel || 0);
    const heatFill = document.getElementById(`${game}HeatFill`);
    const heatPercent = document.getElementById(`${game}HeatPercent`);
    
    if (heatFill) {
        heatFill.style.width = `${Math.min(100, heatLevel)}%`;
        let color = '#22c55e';
        if (heatLevel > 70) color = '#ef4444';
        else if (heatLevel > 40) color = '#fbbf24';
        heatFill.style.background = `linear-gradient(90deg, ${color}, #ffaa44)`;
    }
    if (heatPercent) {
        heatPercent.textContent = `${Math.floor(heatLevel)}%`;
    }
}

function updateGuaranteedCounters() {
    const bigCounter = document.getElementById('wheelBigWinCounter');
    const jackpotCounter = document.getElementById('wheelJackpotCounter');
    
    if (bigCounter) {
        const left = CONFIG.ECONOMY.WHEEL_GUARANTEED_MEDIUM_EVERY - (userData.wheel.spinsSinceLastMedium || 0);
        bigCounter.textContent = left;
    }
    if (jackpotCounter) {
        const left = CONFIG.ECONOMY.WHEEL_GUARANTEED_BIG_EVERY - (userData.wheel.spinsSinceLastBig || 0);
        jackpotCounter.textContent = left;
    }
}

// ====== 46. DAILY CHALLENGES ======
function initDailyChallenges() {
    const today = new Date().toDateString();
    if (!userData.dailyChallenges) {
        userData.dailyChallenges = {
            date: today,
            completed: [],
            claimed: [],
            streak: 0
        };
    } else if (userData.dailyChallenges.date !== today) {
        const yesterday = userData.dailyChallenges.date;
        if (new Date(yesterday).toDateString() === new Date(Date.now() - 86400000).toDateString()) {
            userData.dailyChallenges.streak++;
        } else {
            userData.dailyChallenges.streak = 1;
        }
        userData.dailyChallenges.date = today;
        userData.dailyChallenges.completed = [];
        userData.dailyChallenges.claimed = [];
        saveUserToCache();
    }
}

function renderDailyChallenges() {
    const container = document.getElementById('challengesGrid');
    if (!container) return;
    
    initDailyChallenges();
    
    let html = '';
    DAILY_CHALLENGES.forEach(challenge => {
        const isCompleted = userData.dailyChallenges.completed?.includes(challenge.id);
        const isClaimed = userData.dailyChallenges.claimed?.includes(challenge.id);
        let progress = 0;
        
        if (challenge.type === 'wheel') {
            if (challenge.id === 'wheel_spins') progress = Math.min(100, ((userData.wheel.totalSpins || 0) / challenge.target) * 100);
            else if (challenge.id === 'wheel_win') progress = userData.wheel.biggestWin >= 5 ? 100 : 0;
        } else if (challenge.type === 'slots') {
            if (challenge.id === 'slots_spins') progress = Math.min(100, ((userData.slots.totalSpins || 0) / challenge.target) * 100);
            else if (challenge.id === 'slots_win') progress = userData.slots.biggestWin >= 10 ? 100 : 0;
        } else if (challenge.id === 'any_big_win') {
            progress = (userData.casinoStats?.biggestWin || 0) >= 25 ? 100 : 0;
        }
        
        const isReady = progress >= 100 && !isClaimed;
        
        html += `<div class="challenge-card ${isCompleted ? 'completed' : ''} ${isReady ? 'ready' : ''}">
            <div class="challenge-icon">${challenge.icon}</div>
            <div class="challenge-info">
                <div class="challenge-name">${challenge.name}</div>
                <div class="challenge-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <span class="progress-text">${Math.floor(progress)}%</span>
                </div>
                <div class="challenge-reward">Reward: ${challenge.reward} ${challenge.unit}</div>
            </div>
            ${isReady ? `<button class="claim-challenge-btn" onclick="claimChallenge('${challenge.id}', ${challenge.reward}, '${challenge.unit}')">Claim</button>` : 
              isClaimed ? '<span class="claimed-badge">✓ Claimed</span>' : ''}
        </div>`;
    });
    
    html += `<div class="streak-bonus-card">
        <div class="streak-icon">🔥</div>
        <div class="streak-info">
            <div class="streak-title">Daily Streak</div>
            <div class="streak-value">${userData.dailyChallenges?.streak || 0} days</div>
            <div class="streak-reward">Next bonus at 7 days: 10 TON</div>
        </div>
    </div>`;
    
    container.innerHTML = html;
}

async function claimChallenge(challengeId, reward, unit) {
    if (userData.dailyChallenges.claimed?.includes(challengeId)) {
        showToast('Challenge already claimed', 'warning');
        return;
    }
    
    if (!userData.dailyChallenges.completed?.includes(challengeId)) {
        showToast('Challenge not completed yet', 'warning');
        return;
    }
    
    if (unit === 'TON') {
        userData.balances.TON += reward;
        userData.balance = userData.balances.TON;
    } else if (unit === 'USDT') {
        userData.balances.USDT += reward;
    }
    
    if (!userData.dailyChallenges.claimed) userData.dailyChallenges.claimed = [];
    userData.dailyChallenges.claimed.push(challengeId);
    
    addTransaction('challenge_reward', reward, { currency: unit, challenge: challengeId });
    saveUserToCache();
    updateUI();
    renderDailyChallenges();
    showToastPro(`🎉 ${t('challenge.completed')} +${reward} ${unit}!`, 'success');
}

function checkChallengeProgress(type, amount = 0) {
    if (!userData.dailyChallenges) return;
    
    let updated = false;
    
    if (type === 'wheel_spin') {
        if (!userData.dailyChallenges.completed.includes('wheel_spins') && 
            (userData.wheel.totalSpins || 0) >= DAILY_CHALLENGES.find(c => c.id === 'wheel_spins').target) {
            userData.dailyChallenges.completed.push('wheel_spins');
            updated = true;
        }
    } else if (type === 'slots_spin') {
        if (!userData.dailyChallenges.completed.includes('slots_spins') && 
            (userData.slots.totalSpins || 0) >= DAILY_CHALLENGES.find(c => c.id === 'slots_spins').target) {
            userData.dailyChallenges.completed.push('slots_spins');
            updated = true;
        }
    } else if (type === 'wheel_win' && amount >= 5) {
        if (!userData.dailyChallenges.completed.includes('wheel_win')) {
            userData.dailyChallenges.completed.push('wheel_win');
            updated = true;
        }
    } else if (type === 'slots_win' && amount >= 10) {
        if (!userData.dailyChallenges.completed.includes('slots_win')) {
            userData.dailyChallenges.completed.push('slots_win');
            updated = true;
        }
    } else if (type === 'big_win' && amount >= 25) {
        if (!userData.dailyChallenges.completed.includes('any_big_win')) {
            userData.dailyChallenges.completed.push('any_big_win');
            updated = true;
        }
    }
    
    if (updated) {
        saveUserToCache();
        renderDailyChallenges();
        showToastPro('✨ Challenge completed! Claim your reward!', 'success');
    }
}

// ====== 47. SAVE TO FIREBASE ======
async function saveToFirebase() {
    if (!db) return;
    try {
        await db.collection(CONFIG.COLLECTIONS.USERS).doc(userId).set({
            balances: userData.balances,
            totalEarned: userData.totalEarned,
            totalWithdrawn: userData.totalWithdrawn,
            totalDeposited: userData.totalDeposited,
            activeMachine: userData.activeMachine,
            activePlan: userData.activePlan,
            machineExpiry: userData.machineExpiry,
            lastClaim: userData.lastClaim,
            claims: userData.claims,
            streak: userData.streak,
            longestStreak: userData.longestStreak,
            lastClaimDate: userData.lastClaimDate,
            upgrades: userData.upgrades,
            referrals: userData.referrals,
            referralEarnings: userData.referralEarnings,
            referralCount: userData.referralCount,
            referralMilestonesClaimed: userData.referralMilestonesClaimed,
            autoClicker: userData.autoClicker,
            wheel: userData.wheel,
            slots: userData.slots,
            dailyLogin: userData.dailyLogin,
            dailyChallenges: userData.dailyChallenges,
            casinoStats: userData.casinoStats,
            progressiveJackpot: userData.progressiveJackpot,
            fakeWinnerIndex: userData.fakeWinnerIndex,
            lastFakeWinnerUpdate: userData.lastFakeWinnerUpdate,
            lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        console.log("💾 Data saved to Firebase");
    } catch (e) {
        console.error("Firebase save error:", e);
    }
}

// ====== 48. MODAL FUNCTIONS ======
function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('show');
    
    if (id === 'paymentModal') currentPayment = null;
    if (id === 'swapModal') {
        const fromInput = document.getElementById('swapFromAmount');
        if (fromInput) fromInput.value = '1';
    }
    if (id === 'depositModal') { 
        const amountEl = document.getElementById('depositAmount');
        const hashEl = document.getElementById('depositTxHash');
        if (amountEl) amountEl.value = ''; 
        if (hashEl) hashEl.value = ''; 
    }
    if (id === 'withdrawModal') { 
        const amountEl = document.getElementById('withdrawAmount');
        const addressEl = document.getElementById('withdrawAddress');
        if (amountEl) amountEl.value = ''; 
        if (addressEl) addressEl.value = ''; 
    }
}

function hideAllModals() {
    ['paymentModal','depositModal','withdrawModal','historyModal','notificationsModal','adminModal','swapModal','currencySelectorModal','rejectModal','bonusPacksModal'].forEach(id => {
        const m = document.getElementById(id);
        if (m) m.classList.remove('show');
    });
}

// ====== 49. FILTER MARKET ======
function filterMarket(filter) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    document.querySelectorAll('.showcase-card-legendary').forEach(c => {
        const name = c.querySelector('h3')?.textContent || '';
        const m = MACHINES.find(m => m.name === name || m.nameAr === name);
        c.style.display = filter === 'all' || m?.filter === filter ? 'flex' : 'none';
    });
}

// ====== 50. ADMIN FUNCTIONS ======
let currentAdminTab = 'withdrawals';

function showAdminPanel() {
    if (!isAdmin) { showToast('Access denied', 'error'); return; }
    const modal = document.getElementById('adminModal');
    if (modal) modal.classList.add('show');
    loadAdminCounts();
}

function switchAdminTab(tab) {
    currentAdminTab = tab;
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    const content = document.getElementById('adminContent');
    if (content) {
        content.innerHTML = `
            <div class="admin-refresh-message">
                <i class="fas fa-hand-pointer"></i>
                <p>${t('admin.clickRefresh')}</p>
                <button class="admin-refresh-btn" onclick="refreshAdminPanel()">
                    <i class="fas fa-rotate-right"></i> <span>${t('admin.refresh')}</span>
                </button>
            </div>
        `;
    }
}

async function loadAdminCounts() {
    if (!db) return;
    try {
        let withdrawalsSnap;
        try {
            withdrawalsSnap = await db.collection(CONFIG.COLLECTIONS.WITHDRAWALS).where('status', '==', 'pending').get();
        } catch (e) {
            withdrawalsSnap = { size: 0 };
        }
        
        let depositsSnap;
        try {
            depositsSnap = await db.collection(CONFIG.COLLECTIONS.DEPOSITS).where('status', '==', 'pending').get();
        } catch (e) {
            depositsSnap = { size: 0 };
        }
        
        const withdrawCount = document.getElementById('pendingWithdrawalsCount');
        const depositCount = document.getElementById('pendingDepositsCount');
        if (withdrawCount) withdrawCount.textContent = withdrawalsSnap.size;
        if (depositCount) depositCount.textContent = depositsSnap.size;
    } catch (e) {
        console.error("Error loading counts:", e);
    }
}

async function refreshAdminPanel() {
    if (!isAdmin || !db) return;
    
    const btn = event?.currentTarget;
    const icon = btn?.querySelector('i');
    if (icon) icon.classList.add('fa-spin');
    
    const content = document.getElementById('adminContent');
    if (content) content.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i> Loading...</div>';
    
    try {
        const col = currentAdminTab === 'withdrawals' ? CONFIG.COLLECTIONS.WITHDRAWALS : CONFIG.COLLECTIONS.DEPOSITS;
        
        let snap;
        try {
            snap = await db.collection(col).where('status', '==', 'pending').orderBy('timestamp', 'desc').get();
        } catch (e) {
            if (content) content.innerHTML = `<div class="empty-state">${t('admin.noPending')}</div>`;
            if (icon) setTimeout(() => icon.classList.remove('fa-spin'), 500);
            return;
        }
        
        if (snap.empty) { 
            if (content) content.innerHTML = `<div class="empty-state">${t('admin.noPending')}</div>`; 
            if (icon) setTimeout(() => icon.classList.remove('fa-spin'), 500);
            return; 
        }
        
        let html = '';
        snap.forEach(doc => {
            const data = doc.data();
            const d = new Date(data.timestamp?.toDate?.() || data.timestamp);
            
            if (currentAdminTab === 'withdrawals') {
                html += `<div class="admin-transaction-card">
                    <div class="admin-tx-header">
                        <div class="admin-tx-type withdraw"><i class="fas fa-arrow-up"></i><span>WITHDRAWAL</span></div>
                        <span class="admin-tx-status pending">PENDING</span>
                    </div>
                    <div class="admin-tx-details">
                        <div class="admin-tx-row"><span class="admin-tx-label">User:</span><span class="admin-tx-value">${data.username || data.userId?.slice(0,8)}</span></div>
                        <div class="admin-tx-row"><span class="admin-tx-label">Amount:</span><span class="admin-tx-value">${data.amount} ${data.currency}</span></div>
                        <div class="admin-tx-row"><span class="admin-tx-label">Network:</span><span class="admin-tx-value">${data.network || 'BEP20'}</span></div>
                        <div class="admin-tx-row"><span class="admin-tx-label">Address:</span>
                            <div class="admin-address-container"><code>${formatAddress(data.address)}</code>
                                <button class="admin-copy-btn" onclick="copyToClipboard('${data.address}')"><i class="fas fa-copy"></i></button>
                            </div>
                        </div>
                        ${data.fee ? `<div class="admin-tx-row"><span class="admin-tx-label">Fee:</span><span class="admin-tx-value">${data.fee} ${data.feeCurrency}</span></div>` : ''}
                        <div class="admin-tx-row"><span class="admin-tx-label">Time:</span><span class="admin-tx-value">${d.toLocaleDateString()} ${d.toLocaleTimeString()}</span></div>
                    </div>
                    <div class="admin-tx-actions">
                        <button class="admin-approve-btn" onclick="approveRequest('${doc.id}', 'withdraw', ${data.amount}, '${data.userId}', '${data.currency}', ${data.fee || 0}, '${data.feeCurrency || data.currency}')"><i class="fas fa-check"></i> ${t('admin.approve')}</button>
                        <button class="admin-reject-btn" onclick="openRejectModal('${doc.id}', 'withdraw', '${data.userId}', '${data.currency}', ${data.amount})"><i class="fas fa-times"></i> ${t('admin.reject')}</button>
                    </div>
                </div>`;
            } else {
                html += `<div class="admin-transaction-card">
                    <div class="admin-tx-header">
                        <div class="admin-tx-type deposit"><i class="fas fa-arrow-down"></i><span>DEPOSIT</span></div>
                        <span class="admin-tx-status pending">PENDING</span>
                    </div>
                    <div class="admin-tx-details">
                        <div class="admin-tx-row"><span class="admin-tx-label">User:</span><span class="admin-tx-value">${data.username || data.userId?.slice(0,8)}</span></div>
                        <div class="admin-tx-row"><span class="admin-tx-label">Amount:</span><span class="admin-tx-value">${data.amount} ${data.currency}</span></div>
                        <div class="admin-tx-row"><span class="admin-tx-label">TXID:</span>
                            <div class="admin-address-container"><code>${data.txHash?.slice(0,16)}...</code>
                                <button class="admin-copy-btn" onclick="copyToClipboard('${data.txHash}')"><i class="fas fa-copy"></i></button>
                            </div>
                        </div>
                        <div class="admin-tx-row"><span class="admin-tx-label">Time:</span><span class="admin-tx-value">${d.toLocaleDateString()} ${d.toLocaleTimeString()}</span></div>
                    </div>
                    <div class="admin-tx-actions">
                        <button class="admin-approve-btn" onclick="approveRequest('${doc.id}', 'deposit', ${data.amount}, '${data.userId}', '${data.currency}')"><i class="fas fa-check"></i> ${t('admin.approve')}</button>
                        <button class="admin-reject-btn" onclick="openRejectModal('${doc.id}', 'deposit', '${data.userId}', '${data.currency}', ${data.amount})"><i class="fas fa-times"></i> ${t('admin.reject')}</button>
                    </div>
                </div>`;
            }
        });
        if (content) content.innerHTML = html;
    } catch (e) { 
        console.error("Error refreshing admin:", e);
        if (content) content.innerHTML = `<div class="empty-state">${t('admin.error')}</div>`; 
    }
    
    if (icon) setTimeout(() => icon.classList.remove('fa-spin'), 500);
}

function openRejectModal(id, type, targetUserId, currency, amount) {
    currentRejectId = id;
    currentRejectType = type;
    currentRejectData = { targetUserId, currency, amount };
    const modal = document.getElementById('rejectModal');
    if (modal) modal.classList.add('show');
}

async function submitRejection() {
    const reasonEl = document.getElementById('rejectReason');
    const reason = reasonEl?.value.trim();
    if (!reason) {
        showToast('Please enter a reason', 'error');
        return;
    }
    
    if (!isAdmin || !db) return;
    
    try {
        const col = currentRejectType === 'deposit' ? CONFIG.COLLECTIONS.DEPOSITS : CONFIG.COLLECTIONS.WITHDRAWALS;
        await db.collection(col).doc(currentRejectId).update({ 
            status: 'rejected', 
            reason, 
            rejectedAt: firebase.firestore.FieldValue.serverTimestamp(),
            rejectedBy: userId
        });
        
        if (currentRejectType === 'withdraw') {
            await db.collection(CONFIG.COLLECTIONS.USERS).doc(currentRejectData.targetUserId).update({
                [`balances.${currentRejectData.currency}`]: firebase.firestore.FieldValue.increment(currentRejectData.amount)
            });
        }
        
        showToast('Request rejected', 'success');
        
        await addNotification(currentRejectData.targetUserId, 
            `❌ Your ${currentRejectType} of ${currentRejectData.amount} ${currentRejectData.currency} was rejected. Reason: ${reason}`, 
            'error');
        
        closeModal('rejectModal');
        if (reasonEl) reasonEl.value = '';
        refreshAdminPanel();
        
    } catch (e) { 
        console.error("Error rejecting:", e);
        showToast('Error rejecting', 'error'); 
    }
}

async function approveRequest(id, type, amount, targetUserId, currency, fee = 0, feeCurrency = currency) {
    if (!isAdmin || !db) return;
    try {
        const col = type === 'deposit' ? CONFIG.COLLECTIONS.DEPOSITS : CONFIG.COLLECTIONS.WITHDRAWALS;
        await db.collection(col).doc(id).update({ 
            status: 'approved', 
            approvedAt: firebase.firestore.FieldValue.serverTimestamp(),
            approvedBy: userId
        });
        
        if (type === 'deposit') {
            await db.collection(CONFIG.COLLECTIONS.USERS).doc(targetUserId).update({ 
                [`balances.${currency}`]: firebase.firestore.FieldValue.increment(amount),
                totalDeposited: firebase.firestore.FieldValue.increment(amount)
            });
        }
        
        showToast('Request approved', 'success');
        
        await addNotification(targetUserId, 
            `✅ Your ${type} of ${amount} ${currency} has been approved!`, 
            'success');
        
        refreshAdminPanel();
        
    } catch (e) { 
        console.error("Error approving:", e);
        showToast('Error approving', 'error'); 
    }
}

function copyToClipboard(text) { 
    navigator.clipboard.writeText(text); 
    showToast('Copied!', 'success'); 
}

// ====== 51. CLOSE JACKPOT POPUP ======
function closeJackpotPopup() {
    const popup = document.getElementById('jackpotPopup');
    if (popup) {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 300);
    }
}

// ====== 52. PRICES ======
let livePrices = {};

async function loadPrices(force = false) {
    const now = Date.now();
    const cached = localStorage.getItem(CACHE_KEYS.PRICES);
    
    if (!force && cached && (now - lastPricesLoadTime) < CONFIG.CACHE.PRICES_TTL) {
        const { prices, timestamp } = JSON.parse(cached);
        livePrices = prices;
        lastPricesLoadTime = timestamp;
        updatePrices();
        return;
    }
    
    try {
        const ids = Object.values(CONFIG.CRYPTO_IDS).join(',');
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`);
        const data = await response.json();
        
        for (const [symbol, id] of Object.entries(CONFIG.CRYPTO_IDS)) {
            if (data[id]) {
                livePrices[symbol] = { price: data[id].usd, change: data[id].usd_24h_change || 0 };
            }
        }
        
        lastPricesLoadTime = now;
        localStorage.setItem(CACHE_KEYS.PRICES, JSON.stringify({ prices: livePrices, timestamp: now }));
        updatePrices();
    } catch (error) {
        console.error("Price fetch error:", error);
    }
}

function updatePrices() {
    renderAssets();
    updateBalance();
}

function refreshPrices() {
    animateElement('.refresh-btn', 'pop');
    loadPrices(true);
}

// ====== 53. REFERRAL SYSTEM ======
function generateReferralCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return userId.slice(-4) + Array.from({length:6}, () => chars[Math.floor(Math.random()*chars.length)]).join('');
}

function getReferralLink() {
    const code = userData.referralCode || userId;
    return `${CONFIG.APP.BASE_URL}?${CONFIG.APP.REFERRAL_PARAM}=${code}`;
}

function hasReferralCode() {
    const urlParams = new URLSearchParams(window.location.search);
    return !!(urlParams.get(CONFIG.APP.REFERRAL_PARAM) || tg?.initDataUnsafe?.start_param);
}

async function processReferral() {
    const processed = localStorage.getItem(CACHE_KEYS.REFERRAL_PROCESSED);
    if (processed) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    let referralCode = urlParams.get(CONFIG.APP.REFERRAL_PARAM) || tg?.initDataUnsafe?.start_param;
    
    if (!referralCode || referralCode === userData.referralCode || userData.referredBy) return;
    
    localStorage.setItem(CACHE_KEYS.REFERRAL_PROCESSED, referralCode);
    
    if (!db) {
        userData.referredBy = referralCode;
        userData.balances.TON += CONFIG.ECONOMY.REFERRAL_BONUS;
        userData.balance = userData.balances.TON;
        userData.totalEarned += CONFIG.ECONOMY.REFERRAL_BONUS;
        userData.referralEarnings += CONFIG.ECONOMY.REFERRAL_BONUS;
        saveUserToCache();
        showToast(t('notif.welcomeBonus'), 'success');
        return;
    }
    
    try {
        const referrerQuery = await db.collection(CONFIG.COLLECTIONS.USERS).where('referralCode', '==', referralCode).limit(1).get();
        if (!referrerQuery.empty) {
            const referrerDoc = referrerQuery.docs[0];
            const referrerId = referrerDoc.id;
            const referrerData = referrerDoc.data();
            
            if (referrerId === userId) return;
            if (referrerData.referrals?.includes(userId)) return;
            
            await db.collection(CONFIG.COLLECTIONS.USERS).doc(referrerId).update({
                referrals: [...(referrerData.referrals || []), userId],
                referralCount: (referrerData.referralCount || 0) + 1,
                'balances.TON': firebase.firestore.FieldValue.increment(CONFIG.ECONOMY.REFERRAL_BONUS),
                referralEarnings: firebase.firestore.FieldValue.increment(CONFIG.ECONOMY.REFERRAL_BONUS)
            });
            
            userData.referredBy = referralCode;
            userData.balances.TON += CONFIG.ECONOMY.REFERRAL_BONUS;
            userData.balance = userData.balances.TON;
            userData.totalEarned += CONFIG.ECONOMY.REFERRAL_BONUS;
            userData.referralEarnings += CONFIG.ECONOMY.REFERRAL_BONUS;
            
            await db.collection(CONFIG.COLLECTIONS.USERS).doc(userId).update({
                referredBy: referralCode,
                'balances.TON': userData.balances.TON
            });
            
            saveUserToCache();
            showToast(t('notif.welcomeBonus'), 'success');
            await addNotification(referrerId, t('notif.referralBonus'), 'success');
        }
    } catch (e) {
        localStorage.removeItem(CACHE_KEYS.REFERRAL_PROCESSED);
    }
}

async function checkReferralMilestones() {
    if (!userData.referralMilestonesClaimed) userData.referralMilestonesClaimed = [];
    
    for (const milestone of REFERRAL_MILESTONES) {
        if (userData.referralMilestonesClaimed.includes(milestone.referrals)) continue;
        if (userData.referralCount >= milestone.referrals) {
            userData.balances.USDT += milestone.reward;
            userData.referralMilestonesClaimed.push(milestone.referrals);
            
            addTransaction('referral_bonus', milestone.reward, { 
                currency: 'USDT', 
                details: `${milestone.referrals} referrals milestone` 
            });
            
            addLocalNotification(`🏆 You reached ${milestone.referrals} referrals! Earned ${milestone.reward} USDT!`, 'success');
            
            if (db) {
                await db.collection(CONFIG.COLLECTIONS.USERS).doc(userId).update({
                    'balances.USDT': userData.balances.USDT,
                    referralMilestonesClaimed: userData.referralMilestonesClaimed
                }).catch(console.error);
            }
        }
    }
    saveUserToCache();
}

// ====== 54. DAILY LOGIN BONUS ======
function checkDailyLogin() {
    const today = new Date().toDateString();
    if (!userData.dailyLogin) userData.dailyLogin = { lastLogin: null, streak: 0 };
    if (userData.dailyLogin.lastLogin !== today) {
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        if (userData.dailyLogin.lastLogin === yesterday) {
            userData.dailyLogin.streak++;
        } else {
            userData.dailyLogin.streak = 1;
        }
        userData.dailyLogin.lastLogin = today;
        
        const bonusIndex = Math.min(userData.dailyLogin.streak - 1, CONFIG.ECONOMY.DAILY_LOGIN_BONUS.length - 1);
        const bonus = CONFIG.ECONOMY.DAILY_LOGIN_BONUS[bonusIndex] || 0.1;
        
        userData.balances.TON += bonus;
        userData.balance = userData.balances.TON;
        userData.totalEarned += bonus;
        
        addTransaction('daily_bonus', bonus, { currency: 'TON', day: userData.dailyLogin.streak });
        showToast(`🔥 Day ${userData.dailyLogin.streak} bonus: +${bonus} TON!`, 'success');
        saveUserToCache();
    }
}

// ====== 55. NOTIFICATION SYSTEM ======
let unreadCount = 0;

function addLocalNotification(message, type = 'info') {
    const notification = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
        message, type, read: false, timestamp: new Date().toISOString()
    };
    
    if (!userData.notifications) userData.notifications = [];
    userData.notifications.unshift(notification);
    
    if (userData.notifications.length > 50) userData.notifications = userData.notifications.slice(0, 50);
    
    saveLocalNotifications(userData.notifications);
    updateNotificationBadge();
    showFloatingToast(message, type);
    return notification;
}

async function addNotification(targetUserId, message, type = 'info') {
    if (targetUserId === userId) addLocalNotification(message, type);
    
    if (db && targetUserId !== userId) {
        try {
            await db.collection(CONFIG.COLLECTIONS.USERS).doc(targetUserId).update({
                notifications: firebase.firestore.FieldValue.arrayUnion({
                    id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
                    message, type, read: false, timestamp: new Date().toISOString()
                })
            });
        } catch (e) {}
    }
}

function updateNotificationBadge() {
    const badge = document.getElementById('notificationBadge');
    if (badge && userData.notifications) {
        unreadCount = userData.notifications.filter(n => !n.read).length;
        badge.textContent = unreadCount;
        badge.style.display = unreadCount > 0 ? 'flex' : 'none';
    }
}

function markNotificationRead(id) {
    const n = userData.notifications?.find(n => n.id === id);
    if (n && !n.read) {
        n.read = true;
        saveLocalNotifications(userData.notifications);
        updateNotificationBadge();
        renderNotifications();
    }
}

function clearReadNotifications() {
    if (!userData.notifications?.length) {
        showToast('No notifications', 'info');
        return;
    }
    
    const readCount = userData.notifications.filter(n => n.read).length;
    const unreadCount = userData.notifications.filter(n => !n.read).length;
    
    if (readCount === 0) {
        showToast('No read notifications', 'info');
        return;
    }
    
    if (confirm(`Clear ${readCount} read notification(s)? ${unreadCount} unread will remain.`)) {
        userData.notifications = userData.notifications.filter(n => !n.read);
        saveLocalNotifications(userData.notifications);
        updateNotificationBadge();
        renderNotifications();
        showToast(`Cleared ${readCount} notifications`, 'success');
    }
}

function clearAllNotifications() {
    if (!userData.notifications?.length) {
        showToast('No notifications', 'info');
        return;
    }
    
    const unreadCount = userData.notifications.filter(n => !n.read).length;
    
    if (unreadCount > 0) {
        if (!confirm(`Warning: You have ${unreadCount} unread notifications. Delete all?`)) return;
    } else {
        if (!confirm('Delete all notifications?')) return;
    }
    
    userData.notifications = [];
    saveLocalNotifications([]);
    updateNotificationBadge();
    renderNotifications();
    showToast('All notifications cleared', 'success');
}

function renderNotifications() {
    const list = document.getElementById('notificationsList');
    if (!list) return;
    
    if (!userData.notifications?.length) {
        list.innerHTML = `<div class="empty-state"><i class="fa-regular fa-bell-slash"></i><p>No notifications</p></div>`;
        return;
    }
    
    list.innerHTML = userData.notifications.map(n => {
        const d = new Date(n.timestamp);
        const unreadClass = n.read ? '' : 'unread';
        let icon = n.type === 'success' ? 'fa-circle-check' : 'fa-circle-info';
        
        return `<div class="notification-item ${unreadClass}" onclick="markNotificationRead('${n.id}')">
            <div class="notification-header">
                <span class="notification-title"><i class="fa-regular ${icon}"></i> Notification</span>
                <span class="notification-time">${d.toLocaleDateString()} ${d.toLocaleTimeString()}</span>
            </div>
            <div class="notification-message">${n.message}</div>
        </div>`;
    }).join('');
}

function showNotifications() {
    const modal = document.getElementById('notificationsModal');
    if (modal) {
        modal.classList.add('show');
        renderNotifications();
    }
}

// ====== 56. FLOATING NOTIFICATIONS ======
let floatingTimeouts = [];

function showFloatingToast(message, type = 'info') {
    const toast = document.getElementById('floatingNotification');
    if (!toast) return;
    toast.textContent = message;
    toast.className = 'floating-notification';
    toast.classList.add(type, 'show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function startFloatingNotifications() {
    const messages = [
        "🔥 User just won 50 TON on Wheel!",
        "🎰 Someone hit JACKPOT on Slots!",
        "⚡ Turbo v3 rented",
        "💰 Withdrawal of 5 TON approved",
        "🎡 Someone won 100 TON on Lucky Wheel!",
        "🤖 Auto Miner bought",
        "💎 25 TON win on Slots!",
        "👑 MEGA JACKPOT triggered!"
    ];
    
    function showNext() {
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        showFloatingToast(randomMsg, 'info');
        floatingTimeouts.push(setTimeout(showNext, 8000 + Math.random() * 7000));
    }
    setTimeout(showNext, 3000);
}

function stopFloatingNotifications() {
    floatingTimeouts.forEach(clearTimeout);
    floatingTimeouts = [];
}

// ====== 57. WELCOME STICKER ======
const WELCOME_STICKERS = ['🤝','🫣','🥰','🥳','💲','💰','💸','💵','🤪','😱','😎','🤑','💯','💖','✨','🌟','⭐','🔥','⚡','💎','🎁','🎈','🎉','👑','🚀','💫'];
let lastStickerTime = 0;
const STICKER_COOLDOWN = 12 * 60 * 1000;

function showRandomSticker() {
    const now = Date.now();
    if (now - lastStickerTime < STICKER_COOLDOWN) return;
    
    const stickerEl = document.getElementById('welcomeSticker');
    if (!stickerEl) return;
    
    stickerEl.textContent = WELCOME_STICKERS[Math.floor(Math.random() * WELCOME_STICKERS.length)];
    stickerEl.classList.remove('sticker-pop', 'sticker-shake');
    void stickerEl.offsetWidth;
    stickerEl.classList.add('sticker-pop');
    
    setTimeout(() => stickerEl.classList.add('sticker-shake'), 200);
    setTimeout(() => {
        stickerEl.classList.remove('sticker-pop', 'sticker-shake');
        setTimeout(() => stickerEl.textContent = '', 300);
    }, 3000);
    
    lastStickerTime = now;
}

// ====== 58. LOAD USER DATA ======
async function loadUserData(force = false) {
    try {
        console.log("📂 Loading user data for:", userId);
        
        const localData = localStorage.getItem(CACHE_KEYS.USER);
        if (localData) {
            try {
                const parsed = JSON.parse(localData);
                Object.assign(userData, parsed);
                userData.balance = userData.balances.TON;
                console.log("📦 Using localStorage data immediately");
                updateUI();
            } catch (e) {}
        }
        
        if (!userData.referralCode) {
            userData.referralCode = generateReferralCode();
        }
        
        if (db && !force) {
            try {
                const doc = await db.collection(CONFIG.COLLECTIONS.USERS).doc(userId).get();
                
                if (doc.exists) {
                    const fbData = doc.data();
                    Object.assign(userData, fbData);
                    userData.balance = userData.balances.TON;
                    
                    const localTxs = loadLocalTransactions();
                    const fbTxs = fbData.transactions || [];
                    const txMap = new Map();
                    [...localTxs, ...fbTxs].forEach(tx => {
                        const key = tx.firebaseId || `${tx.timestamp}_${tx.type}`;
                        txMap.set(key, tx);
                    });
                    userData.transactions = Array.from(txMap.values());
                    saveLocalTransactions(userData.transactions);
                    
                    const localNotes = loadLocalNotifications();
                    const fbNotes = fbData.notifications || [];
                    const noteMap = new Map();
                    [...localNotes, ...fbNotes].forEach(n => noteMap.set(n.id, n));
                    userData.notifications = Array.from(noteMap.values());
                    saveLocalNotifications(userData.notifications);
                    
                    saveUserToCache();
                    lastUserLoadTime = Date.now();
                    updateUI();
                    console.log("✅ Updated from Firebase");
                } else {
                    if (!localData) {
                        userData.referralCode = generateReferralCode();
                        userData.createdAt = Date.now();
                        await db.collection(CONFIG.COLLECTIONS.USERS).doc(userId).set({
                            ...userData,
                            createdAt: firebase.firestore.FieldValue.serverTimestamp()
                        });
                        saveUserToCache();
                    }
                }
            } catch (e) {
                console.error('Firebase error, using cached data only:', e);
            }
        }
        
        if (hasReferralCode() && !userData.referredBy) await processReferral();
        
        initDailyChallenges();
        renderDailyChallenges();
        updateNotificationBadge();
        checkAdminAndAddCrown();
        checkDailyLogin();
        checkAutoClickerRewardsOnStart();
        
        updateUserDisplay();
        
    } catch (error) {
        console.error("❌ Error loading user data:", error);
    }
}

function updateUserDisplay() {
    const usernameEl = document.getElementById('username');
    const userIdEl = document.getElementById('userId');
    
    if (usernameEl) {
        usernameEl.textContent = tg?.initDataUnsafe?.user?.first_name || 
                                userFirstName || 
                                'Crypto Miner';
    }
    
    if (userIdEl) {
        userIdEl.textContent = `ID: ${userId}`;
    }
}

// ====== 59. OPEN FUNCTIONS ======
function openProfileFromAnywhere() {
    if (currentPage === 'wheelGame' || currentPage === 'slotsGame') exitGame();
    setTimeout(() => showPage('profile'), 300);
}
function openWithdrawModal() { if (currentPage !== 'profile') openProfileFromAnywhere(); setTimeout(() => showWithdrawModal(), 400); }
function openDepositModal() { if (currentPage !== 'profile') openProfileFromAnywhere(); setTimeout(() => showDepositModal(), 400); }
function openSwapModal() { if (currentPage !== 'profile') openProfileFromAnywhere(); setTimeout(() => showSwapModal(), 400); }
function openHistoryModal() { if (currentPage !== 'profile') openProfileFromAnywhere(); setTimeout(() => showHistory(), 400); }

// ====== 60. INITIALIZATION ======
document.addEventListener('DOMContentLoaded', async () => {
    hideAllModals();
    if (currentLanguage === 'ar') { document.body.classList.add('rtl'); document.documentElement.dir = 'rtl'; }
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });
    await loadUserData();
    await loadPrices();
    await initTonConnect();
    startMining();
    updateUI();
    renderMarket();
    updateChart();
    renderReferralMilestones();
    setupScrollListener();
    setInterval(() => {
        if (!userData.autoClicker?.active) {
            const btn = document.getElementById('autoClickerCard');
            if (btn) { btn.classList.add('show'); setTimeout(() => btn.classList.remove('show'), 10000); }
        }
    }, 300000);
    setTimeout(() => { const loading = document.getElementById('loading'); if (loading) { loading.style.opacity = '0'; setTimeout(() => loading.style.display = 'none', 500); } }, 2000);
    startFloatingNotifications();
    setTimeout(showRandomSticker, 1000);
    updateUserDisplay();
    document.addEventListener('click', () => VegasAudio.init(), { once: true });
    console.log("✅ TON MINING CASINO - ULTIMATE LEGENDARY EDITION v27.0");
    console.log("✅ All systems ready! 🚀");
});

function setupScrollListener() {
    const btn = document.getElementById('scrollTopBtn');
    const container = document.querySelector('.main-content');
    container?.addEventListener('scroll', () => { btn?.classList.toggle('show', container.scrollTop > 300); });
}

setInterval(() => { if (userData) saveUserToCache(); }, 60000);
setInterval(() => { if (userData && db) saveToFirebase(); }, 300000);
window.addEventListener('beforeunload', () => { stopMining(); stopFloatingNotifications(); stopAllListeners(); saveUserToCache(); });
document.addEventListener('visibilitychange', () => {
    if (document.hidden) { stopMining(); stopFloatingNotifications(); }
    else { startMining(); if (currentPage === 'mining') startFloatingNotifications(); }
});

// ====== 61. EXPORT FUNCTIONS ======
window.showPage = showPage;
window.showMarket = ()=>showPage('market');
window.showWallet = showWallet;
window.showHistory = showHistory;
window.showNotifications = showNotifications;
window.showDepositModal = showDepositModal;
window.showWithdrawModal = showWithdrawModal;
window.showSwapModal = showSwapModal;
window.buyAutoClicker = buyAutoClicker;
window.showAdminPanel = showAdminPanel;
window.closeModal = closeModal;
window.closeJackpotPopup = closeJackpotPopup;
window.toggleLanguage = toggleLanguage;
window.copyReferralLink = copyReferralLink;
window.copyDepositAddress = copyDepositAddress;
window.connectWallet = connectWallet;
window.disconnectWallet = disconnectWallet;
window.switchPaymentMethod = switchPaymentMethod;
window.processPayment = processPayment;
window.selectPlan = selectPlan;
window.showCurrencySelector = showCurrencySelector;
window.selectCurrency = selectCurrency;
window.filterCurrencies = filterCurrencies;
window.flipSwap = flipSwap;
window.calculateSwap = calculateSwap;
window.confirmSwap = confirmSwap;
window.updateDepositInfo = updateDepositInfo;
window.validateDepositInput = validateDepositInput;
window.submitDeposit = submitDeposit;
window.updateWithdrawInfo = updateWithdrawInfo;
window.updateWithdrawAmount = updateWithdrawAmount;
window.validateWithdrawInput = validateWithdrawInput;
window.submitWithdraw = submitWithdraw;
window.filterMarket = filterMarket;
window.filterHistory = filterHistory;
window.refreshHistory = refreshHistory;
window.scrollToTop = scrollToTop;
window.markNotificationRead = markNotificationRead;
window.clearReadNotifications = clearReadNotifications;
window.clearAllNotifications = clearAllNotifications;
window.switchAdminTab = switchAdminTab;
window.refreshAdminPanel = refreshAdminPanel;
window.approveRequest = approveRequest;
window.openRejectModal = openRejectModal;
window.submitRejection = submitRejection;
window.copyToClipboard = copyToClipboard;
window.handleAvatarClick = handleAvatarClick;
window.refreshPrices = refreshPrices;
window.restoreFromBackup = restoreFromBackup;
window.claim = claim;
window.buyWheelPack = buyWheelPack;
window.buySlotsPack = buySlotsPack;
window.openWheelGame = openWheelGame;
window.openSlotsGame = openSlotsGame;
window.exitGame = exitGame;
window.spinWheelVegas = spinWheelVegas;
window.spinSlotsGame = spinSlotsGame;
window.showToastPro = showToastPro;
window.openProfileFromAnywhere = openProfileFromAnywhere;
window.openWithdrawModal = openWithdrawModal;
window.openDepositModal = openDepositModal;
window.openSwapModal = openSwapModal;
window.openHistoryModal = openHistoryModal;
window.claimChallenge = claimChallenge;
window.toggleAutoSpin = toggleAutoSpin;
window.showBonusPacksModal = showBonusPacksModal;
window.buyBonusPack = buyBonusPack;
window.claimMilestone = claimMilestone;
