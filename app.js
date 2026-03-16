// ============================================
// TON MINING CASINO - ULTIMATE EDITION v40.0
// ============================================

// ====== 1. TELEGRAM WEBAPP ======
const tg = window.Telegram?.WebApp;
if (tg) {
    tg.ready();
    tg.expand();
    tg.enableClosingConfirmation?.();
    tg.setHeaderColor('#0a0b0f');
    tg.setBackgroundColor('#0a0b0f');
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
    
    WITHDRAW_FEES: {
        USDT: { fee: 0.00016, feeCurrency: 'BNB', note: 'USDT withdrawal requires 0.00016 BNB fee' },
        BNB: { fee: 0.0005, feeCurrency: 'BNB', note: 'BNB withdrawal requires 0.0005 BNB fee' },
        ETH: { fee: 0.001, feeCurrency: 'ETH', note: 'ETH withdrawal fee' },
        BTC: { fee: 0.0001, feeCurrency: 'BTC', note: 'BTC withdrawal fee' },
        SOL: { fee: 0.00001, feeCurrency: 'SOL', note: 'SOL withdrawal fee' },
        TON: { fee: 0.05, feeCurrency: 'TON', note: 'TON withdrawal fee' }
    },
    
    NETWORK_TYPES: {
        USDT: 'bsc', BNB: 'bsc', ETH: 'erc20', BTC: 'bitcoin', SOL: 'solana', TON: 'ton'
    },
    
    CACHE: {
        USER_TTL: 300000, PRICES_TTL: 10800000, HISTORY_TTL: 600000,
        MINING_TTL: 60000, LISTENER_TTL: 30000, LEADERBOARD_TTL: 3600000,
        WHEEL_TTL: 86400000, SLOTS_TTL: 86400000
    },
    
    ECONOMY: {
        REFERRAL_BONUS: 0.005,
        REFERRAL_PERCENT: 0.20,
        AUTO_CLICKER_PRICE: 0.5,
        AUTO_CLICKER_DURATION: 15 * 24 * 60 * 60 * 1000,
        WHEEL_SPIN_PRICE: 0.25,
        WHEEL_FREE_SPIN_INTERVAL: 24 * 60 * 60 * 1000,
        WHEEL_JACKPOT_EVERY: 12,
        SLOTS_SPIN_PRICE: 0.15,
        SLOTS_TURBO_PRICE: 0.30,
        SLOTS_FREE_SPIN_INTERVAL: 12 * 60 * 60 * 1000,
        STREAK_BONUS: { 3: 1.05, 7: 1.10, 30: 1.25 },
        DAILY_LOGIN_BONUS: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.10],
        MAX_WITHDRAW_DAILY: 100,
        MAX_DEPOSIT_DAILY: 1000
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
    
    ALL_ASSETS: [
        { symbol: 'TON', name: 'Toncoin' }, { symbol: 'USDT', name: 'Tether' },
        { symbol: 'BNB', name: 'BNB' }, { symbol: 'BTC', name: 'Bitcoin' },
        { symbol: 'ETH', name: 'Ethereum' }, { symbol: 'SOL', name: 'Solana' }
    ]
};

// ====== 3. TRANSLATIONS ======
const translations = {
    en: {
        'app.name': 'TON Mining Casino',
        'nav.mining': 'Mining', 'nav.market': 'Market', 'nav.casino': 'Casino', 'nav.profile': 'Profile',
        'send': 'Send', 'receive': 'Receive', 'swap': 'Swap', 'history': 'History', 'claim': 'CLAIM',
        'copy': 'Copy', 'confirm': 'Confirm', 'refresh': 'Refresh',
        'mining.currentCycle': 'Current Mining Cycle',
        'mining.nextReward': 'Next Reward',
        'mining.activeRigs': 'Active Mining Rigs',
        'mining.hashrate': 'Hashrate',
        'mining.earned': 'Earned',
        'market.title': 'Mining Hardware',
        'filters.all': 'All', 'filters.basic': 'Basic', 'filters.pro': 'Pro', 'filters.quantum': 'Quantum', 'filters.hot': 'Hot Deals',
        'casino.title': 'Casino Games',
        'casino.wheel': 'Lucky Wheel',
        'casino.slots': 'Slot Machine',
        'casino.play': 'Play Now',
        'casino.free': 'Free',
        'casino.price': 'Price',
        'casino.turbo': 'Turbo Spin',
        'profile.title': 'My Profile',
        'wallet.totalBalance': 'Total Balance',
        'wallet.myAssets': 'My Assets',
        'wallet.connected': 'Connected:',
        'wallet.disconnected': 'Wallet disconnected',
        'swap.title': 'Swap Assets',
        'swap.from': 'From', 'swap.to': 'To', 'swap.rate': 'Rate', 'swap.confirm': 'Confirm Swap',
        'payment.title': 'Complete Rental',
        'payment.selectMethod': 'Select Payment Method:',
        'payment.balance': 'Pay with Balance',
        'payment.wallet': 'Pay with TON Wallet',
        'payment.available': 'Available:',
        'deposit.title': 'Receive Funds',
        'deposit.selectCurrency': 'Select Currency',
        'deposit.amount': 'Amount',
        'deposit.transactionId': 'Transaction ID',
        'deposit.sendTo': 'Send to this address:',
        'deposit.submit': 'Submit Request',
        'withdraw.title': 'Send Funds',
        'withdraw.selectCurrency': 'Select Currency',
        'withdraw.amount': 'Amount',
        'withdraw.address': 'Wallet Address',
        'withdraw.youReceive': 'You will receive:',
        'withdraw.submit': 'Send Request',
        'referral.title': 'Referral Program',
        'referral.yourLink': 'Your Referral Link',
        'referral.bonusNote': 'Get 0.005 TON + 20% of their mining!',
        'referral.milestones': 'Referral Milestones',
        'wheel.title': 'Lucky Wheel',
        'wheel.spin': 'SPIN',
        'wheel.free': 'FREE',
        'wheel.price': '0.25 TON',
        'wheel.freeDaily': 'Free daily spin',
        'wheel.jackpot': 'JACKPOT!',
        'wheel.won': 'You won {prize}!',
        'slots.title': 'Slot Machine',
        'slots.spin': 'SPIN',
        'slots.turbo': 'TURBO',
        'slots.free': 'FREE',
        'slots.price': '0.15 TON',
        'slots.turboPrice': '0.30 TON',
        'slots.won': 'You won {prize}!',
        'autoclicker.title': 'Auto Miner',
        'autoclicker.price': '0.5 TON',
        'autoclicker.buy': 'Buy Auto Miner',
        'autoclicker.active': 'Active: {days}d {hours}h left',
        'table.machine': 'Machine',
        'table.3days': '3 Days',
        'table.7days': '7 Days',
        'table.15days': '15 Days',
        'history.title': 'Transaction History',
        'history.all': 'All',
        'notifications.title': 'Notifications',
        'messages.success': 'Success',
        'messages.error': 'Error',
        'notif.welcomeBonus': '🎉 Welcome! You got 0.005 TON bonus!',
        'notif.referralBonus': '🎉 Someone joined with your link! You got 0.005 TON!',
        'notif.wheelWin': '🎡 You won {prize}!',
        'notif.wheelJackpot': '🎡🎡🎡 JACKPOT! You won {prize}!',
        'notif.slotsWin': '🎰 You won {prize}!',
        'notif.slotsJackpot': '🎰🎰🎰 JACKPOT! You won {prize}!',
        'notif.autoClickerBought': '🤖 Auto Miner activated for 15 days!',
        'error.insufficientBalance': 'Insufficient {currency} balance',
        'error.invalidAddress': 'Invalid {currency} address',
        'error.paymentFailed': 'Payment failed'
    },
    ar: {
        'app.name': 'كازينو تعدين TON',
        'nav.mining': 'التعدين', 'nav.market': 'المتجر', 'nav.casino': 'الكازينو', 'nav.profile': 'الملف',
        'send': 'إرسال', 'receive': 'استقبال', 'swap': 'تبديل', 'history': 'السجل', 'claim': 'استلام',
        'copy': 'نسخ', 'confirm': 'تأكيد', 'refresh': 'تحديث',
        'mining.currentCycle': 'دورة التعدين الحالية',
        'mining.nextReward': 'المكافأة القادمة',
        'mining.activeRigs': 'الأجهزة النشطة',
        'mining.hashrate': 'السرعة',
        'mining.earned': 'الأرباح',
        'market.title': 'أجهزة التعدين',
        'filters.all': 'الكل', 'filters.basic': 'أساسي', 'filters.pro': 'محترف', 'filters.quantum': 'كمومي', 'filters.hot': 'عروض ساخنة',
        'casino.title': 'ألعاب الكازينو',
        'casino.wheel': 'عجلة الحظ',
        'casino.slots': 'آلة السلوت',
        'casino.play': 'العب الآن',
        'casino.free': 'مجاني',
        'casino.price': 'السعر',
        'casino.turbo': 'سبين سريع',
        'profile.title': 'ملفي الشخصي',
        'wallet.totalBalance': 'الرصيد الإجمالي',
        'wallet.myAssets': 'أصولي',
        'wallet.connected': 'متصل:',
        'wallet.disconnected': 'المحفظة غير متصلة',
        'swap.title': 'تبديل العملات',
        'swap.from': 'من', 'swap.to': 'إلى', 'swap.rate': 'السعر', 'swap.confirm': 'تأكيد',
        'payment.title': 'إتمام التأجير',
        'payment.selectMethod': 'اختر طريقة الدفع:',
        'payment.balance': 'الدفع من الرصيد',
        'payment.wallet': 'الدفع بالمحفظة',
        'payment.available': 'المتاح:',
        'deposit.title': 'استقبال الأموال',
        'deposit.selectCurrency': 'اختر العملة',
        'deposit.amount': 'المبلغ',
        'deposit.transactionId': 'رقم المعاملة',
        'deposit.sendTo': 'أرسل إلى هذا العنوان:',
        'deposit.submit': 'تقديم الطلب',
        'withdraw.title': 'إرسال الأموال',
        'withdraw.selectCurrency': 'اختر العملة',
        'withdraw.amount': 'المبلغ',
        'withdraw.address': 'عنوان المحفظة',
        'withdraw.youReceive': 'سوف تستلم:',
        'withdraw.submit': 'طلب الإرسال',
        'referral.title': 'برنامج الإحالة',
        'referral.yourLink': 'رابط الإحالة',
        'referral.bonusNote': 'احصل على 0.005 TON + 20% من تعدينهم!',
        'referral.milestones': 'مراحل الإحالة',
        'wheel.title': 'عجلة الحظ',
        'wheel.spin': 'دوران',
        'wheel.free': 'مجاني',
        'wheel.price': '0.25 TON',
        'wheel.freeDaily': 'دوران مجاني يومي',
        'wheel.jackpot': 'جاكبوت!',
        'wheel.won': 'فزت بـ {prize}!',
        'slots.title': 'آلة السلوت',
        'slots.spin': 'لفة',
        'slots.turbo': 'سرعة',
        'slots.free': 'مجاني',
        'slots.price': '0.15 TON',
        'slots.turboPrice': '0.30 TON',
        'slots.won': 'فزت بـ {prize}!',
        'autoclicker.title': 'منجم آلي',
        'autoclicker.price': '0.5 TON',
        'autoclicker.buy': 'شراء منجم آلي',
        'autoclicker.active': 'نشط: {days} يوم {hours} ساعة',
        'table.machine': 'الجهاز',
        'table.3days': '٣ أيام',
        'table.7days': '٧ أيام',
        'table.15days': '١٥ يوماً',
        'history.title': 'سجل المعاملات',
        'history.all': 'الكل',
        'notifications.title': 'الإشعارات',
        'messages.success': 'نجاح',
        'messages.error': 'خطأ',
        'notif.welcomeBonus': '🎉 مرحباً! حصلت على 0.005 TON!',
        'notif.referralBonus': '🎉 شخص انضم عبر رابطك! حصلت على 0.005 TON!',
        'notif.wheelWin': '🎡 فزت بـ {prize}!',
        'notif.wheelJackpot': '🎡🎡🎡 جاكبوت! فزت بـ {prize}!',
        'notif.slotsWin': '🎰 فزت بـ {prize}!',
        'notif.slotsJackpot': '🎰🎰🎰 جاكبوت! فزت بـ {prize}!',
        'notif.autoClickerBought': '🤖 تم تفعيل المنجم الآلي!',
        'error.insufficientBalance': 'رصيد {currency} غير كافٍ',
        'error.invalidAddress': 'عنوان {currency} غير صالح',
        'error.paymentFailed': 'فشل الدفع'
    }
};

// ====== 4. LANGUAGE MANAGEMENT ======
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

// ====== 5. MACHINES DATA ======
const MACHINES = [
    {
        id: 'm1', name: 'Free Miner', nameAr: 'منجم مجاني',
        description: 'Start mining for free!', descriptionAr: 'ابدأ التعدين مجاناً!',
        icon: 'fa-gem', color: '#808080', filter: 'free',
        yield: 0.01, interval: 4 * 3600000, cycleText: '4 hours', cycleTextAr: '٤ ساعات',
        hashrate: '10 MH/s', requirements: null,
        plans: [
            { duration: 3, price: 0, returnPercent: 0, returnAmount: 0, total: 0 },
            { duration: 7, price: 0, returnPercent: 0, returnAmount: 0, total: 0 },
            { duration: 15, price: 0, returnPercent: 0, returnAmount: 0, total: 0 }
        ]
    },
    {
        id: 'm2', name: 'Turbo v2', nameAr: 'تربو v2',
        description: 'High-speed ASIC miner. 3x faster!', descriptionAr: 'جهاز عالي السرعة. أسرع بثلاث مرات!',
        icon: 'fa-bolt', color: '#0088cc', filter: 'basic',
        yield: 0.2, interval: 2.5 * 3600000, cycleText: '2.5 hours', cycleTextAr: '٢.٥ ساعة',
        hashrate: '50 MH/s', requirements: null,
        plans: [
            { duration: 3, price: 5.0, returnPercent: 40, returnAmount: 2.0, total: 7.0 },
            { duration: 7, price: 10.0, returnPercent: 80, returnAmount: 8.0, total: 18.0 },
            { duration: 15, price: 15.0, returnPercent: 170, returnAmount: 25.5, total: 40.5 }
        ]
    },
    {
        id: 'm3', name: 'Turbo v3', nameAr: 'تربو v3',
        description: 'Next-gen cooling system. Maximum efficiency!', descriptionAr: 'تبريد متطور. كفاءة قصوى!',
        icon: 'fa-rocket', color: '#00f2ff', filter: 'pro',
        yield: 0.35, interval: 2 * 3600000, cycleText: '2 hours', cycleTextAr: 'ساعتان',
        hashrate: '120 MH/s', requirements: null,
        plans: [
            { duration: 3, price: 7.5, returnPercent: 40, returnAmount: 3.0, total: 10.5 },
            { duration: 7, price: 15.0, returnPercent: 80, returnAmount: 12.0, total: 27.0 },
            { duration: 15, price: 22.5, returnPercent: 170, returnAmount: 38.25, total: 60.75 }
        ]
    },
    {
        id: 'm4', name: 'ASIC Pro', nameAr: 'ASIC برو',
        description: 'Professional mining rig. Serious power!', descriptionAr: 'جهاز احترافي. قوة هائلة!',
        icon: 'fa-gem', color: '#bc13fe', filter: 'pro',
        yield: 0.5, interval: 3600000, cycleText: '1 hour', cycleTextAr: 'ساعة',
        hashrate: '300 MH/s', requirements: { minEarnings: 5 },
        plans: [
            { duration: 3, price: 10.0, returnPercent: 40, returnAmount: 4.0, total: 14.0 },
            { duration: 7, price: 20.0, returnPercent: 80, returnAmount: 16.0, total: 36.0 },
            { duration: 15, price: 30.0, returnPercent: 170, returnAmount: 51.0, total: 81.0 }
        ]
    },
    {
        id: 'm5', name: 'Quantum RIG', nameAr: 'كوانتم ريج',
        description: 'Quantum computing technology. The future!', descriptionAr: 'تقنية كمومية. مستقبل التعدين!',
        icon: 'fa-crown', color: '#ffaa00', filter: 'quantum',
        yield: 0.8, interval: 45 * 60 * 1000, cycleText: '45 minutes', cycleTextAr: '٤٥ دقيقة',
        hashrate: '800 MH/s', requirements: { referrals: 3 },
        plans: [
            { duration: 3, price: 50, returnPercent: 80, returnAmount: 40, total: 90 },
            { duration: 7, price: 75, returnPercent: 120, returnAmount: 90, total: 165 },
            { duration: 15, price: 100, returnPercent: 200, returnAmount: 200, total: 300 }
        ]
    },
    {
        id: 'm6', name: 'Legendary', nameAr: 'أسطوري',
        description: 'The ultimate mining machine. Legendary status!', descriptionAr: 'الجهاز الأقوى. مكانة أسطورية!',
        icon: 'fa-star', color: '#ff4444', filter: 'quantum',
        yield: 1.2, interval: 30 * 60 * 1000, cycleText: '30 minutes', cycleTextAr: '٣٠ دقيقة',
        hashrate: '2 GH/s', requirements: { referrals: 5, minEarnings: 25, streak: 7 },
        plans: [
            { duration: 3, price: 75, returnPercent: 80, returnAmount: 60, total: 135 },
            { duration: 7, price: 112.5, returnPercent: 120, returnAmount: 135, total: 247.5 },
            { duration: 15, price: 150, returnPercent: 200, returnAmount: 300, total: 450 }
        ]
    }
];

// ====== 6. ACHIEVEMENTS ======
const ACHIEVEMENTS = [
    { id: 'first_claim', name: 'First Blood', nameAr: 'أول تعدين', icon: '🥇', reward: 0.5, condition: 'claims:1' },
    { id: 'streak_3', name: '3-Day Streak', nameAr: '٣ أيام متتالية', icon: '🔥', reward: 0.3, condition: 'streak:3' },
    { id: 'streak_7', name: '7-Day Streak', nameAr: '٧ أيام متتالية', icon: '🔥🔥', reward: 0.7, condition: 'streak:7' },
    { id: 'streak_30', name: 'Monthly Legend', nameAr: 'أسطورة الشهر', icon: '👑🔥', reward: 2.0, condition: 'streak:30' },
    { id: 'referrals_1', name: 'Social Starter', nameAr: 'بداية اجتماعية', icon: '👥', reward: 0.2, condition: 'referrals:1' },
    { id: 'referrals_5', name: 'Social Butterfly', nameAr: 'فراشة اجتماعية', icon: '🦋', reward: 1.0, condition: 'referrals:5' },
    { id: 'referrals_10', name: 'Community Leader', nameAr: 'قائد المجتمع', icon: '👑👥', reward: 2.5, condition: 'referrals:10' },
    { id: 'upgrades_1', name: 'First Upgrade', nameAr: 'أول ترقية', icon: '⚡', reward: 0.3, condition: 'upgrades:1' },
    { id: 'upgrades_3', name: 'Tech Enthusiast', nameAr: 'مهتم بالتكنولوجيا', icon: '⚡⚡', reward: 0.8, condition: 'upgrades:3' },
    { id: 'upgrades_5', name: 'Tech Lord', nameAr: 'رب التكنولوجيا', icon: '⚡⚡⚡', reward: 1.5, condition: 'upgrades:5' },
    { id: 'earnings_5', name: 'Crypto Starter', nameAr: 'بداية في الكريبتو', icon: '💎', reward: 0.5, condition: 'earnings:5' },
    { id: 'earnings_25', name: 'Crypto Trader', nameAr: 'متداول كريبتو', icon: '💎💎', reward: 1.5, condition: 'earnings:25' },
    { id: 'earnings_100', name: 'Crypto Whale', nameAr: 'حوت الكريبتو', icon: '🐋', reward: 3.0, condition: 'earnings:100' }
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

// ====== 8. WHEEL PRIZES ======
const WHEEL_PRIZES = [
    { id: 1, type: 'TON', amount: 0.25, color: '#0088cc', weight: 10, icon: '💰' },
    { id: 2, type: 'TON', amount: 0.5, color: '#0088cc', weight: 9, icon: '💰' },
    { id: 3, type: 'TON', amount: 1, color: '#0088cc', weight: 8, icon: '💰' },
    { id: 4, type: 'TON', amount: 2, color: '#0088cc', weight: 7, icon: '💰' },
    { id: 5, type: 'TON', amount: 5, color: '#0088cc', weight: 6, icon: '💰' },
    { id: 6, type: 'TON', amount: 10, color: '#0088cc', weight: 5, icon: '💰' },
    { id: 7, type: 'TON', amount: 25, color: '#0088cc', weight: 4, icon: '💰' },
    { id: 8, type: 'TON', amount: 50, color: '#0088cc', weight: 3, icon: '💰' },
    { id: 9, type: 'TON', amount: 100, color: '#0088cc', weight: 2, icon: '💰' },
    { id: 10, type: 'USDT', amount: 0.25, color: '#22c55e', weight: 10, icon: '💵' },
    { id: 11, type: 'USDT', amount: 0.5, color: '#22c55e', weight: 9, icon: '💵' },
    { id: 12, type: 'USDT', amount: 1, color: '#22c55e', weight: 8, icon: '💵' },
    { id: 13, type: 'USDT', amount: 2, color: '#22c55e', weight: 7, icon: '💵' },
    { id: 14, type: 'USDT', amount: 5, color: '#22c55e', weight: 6, icon: '💵' },
    { id: 15, type: 'USDT', amount: 10, color: '#22c55e', weight: 5, icon: '💵' },
    { id: 16, type: 'USDT', amount: 25, color: '#22c55e', weight: 4, icon: '💵' },
    { id: 17, type: 'USDT', amount: 50, color: '#22c55e', weight: 3, icon: '💵' },
    { id: 18, type: 'USDT', amount: 100, color: '#22c55e', weight: 2, icon: '💵' },
    { id: 19, type: 'USDT', amount: 250, color: '#22c55e', weight: 2, icon: '💵' },
    { id: 20, type: 'USDT', amount: 500, color: '#22c55e', weight: 1, icon: '💵' },
    { id: 21, type: 'SPIN', amount: 1, color: '#ff44cc', weight: 5, icon: '🔄' },
    { id: 22, type: 'NOTHING', amount: 0, color: '#94a3b8', weight: 60, icon: '😢' },
    { id: 23, type: 'AUTO', amount: 1, color: '#00f2ff', weight: 2, icon: '🤖' },
    { id: 24, type: 'JACKPOT', amount: 100, color: '#ff4444', weight: 1, icon: '👑', jackpot: true }
];

// ====== 9. SLOTS PRIZES ======
const SLOTS_PRIZES = [
    { combination: ['🍒', '🍒', '🍒'], amount: 0.1, type: 'TON', icon: '🍒' },
    { combination: ['🍒', '🍒', '🍒'], amount: 0.1, type: 'USDT', icon: '🍒' },
    { combination: ['💎', '💎', '💎'], amount: 0.25, type: 'TON', icon: '💎' },
    { combination: ['💎', '💎', '💎'], amount: 0.25, type: 'USDT', icon: '💎' },
    { combination: ['💰', '💰', '💰'], amount: 0.5, type: 'TON', icon: '💰' },
    { combination: ['💰', '💰', '💰'], amount: 0.5, type: 'USDT', icon: '💰' },
    { combination: ['⭐', '⭐', '⭐'], amount: 1, type: 'TON', icon: '⭐' },
    { combination: ['⭐', '⭐', '⭐'], amount: 1, type: 'USDT', icon: '⭐' },
    { combination: ['👑', '👑', '👑'], amount: 2, type: 'TON', icon: '👑' },
    { combination: ['👑', '👑', '👑'], amount: 2, type: 'USDT', icon: '👑' },
    { combination: ['7️⃣', '7️⃣', '7️⃣'], amount: 5, type: 'TON', icon: '7️⃣' },
    { combination: ['7️⃣', '7️⃣', '7️⃣'], amount: 5, type: 'USDT', icon: '7️⃣' },
    { combination: ['🎰', '🎰', '🎰'], amount: 10, type: 'TON', icon: '🎰', jackpot: true },
    { combination: ['🎰', '🎰', '🎰'], amount: 10, type: 'USDT', icon: '🎰', jackpot: true }
];

const SLOTS_SYMBOLS = ['🍒', '💎', '💰', '⭐', '👑', '7️⃣', '🎰'];

// ====== 10. FIREBASE ======
let firebaseApp, db;
try {
    if (typeof firebase !== 'undefined') {
        firebaseApp = firebase.initializeApp(CONFIG.FIREBASE);
        db = firebase.firestore();
        db.enablePersistence({ synchronizeTabs: true }).catch(console.warn);
    }
} catch (error) {
    console.error("Firebase error:", error);
}

// ====== 11. USER ID ======
const userId = tg?.initDataUnsafe?.user?.id?.toString() || 
               localStorage.getItem('ton_user_id') || 
               'user_' + Math.random().toString(36).substr(2, 9);
const userName = tg?.initDataUnsafe?.user?.first_name || 'Crypto Miner';
const userFirstName = tg?.initDataUnsafe?.user?.first_name || 'Miner';
const userUsername = tg?.initDataUnsafe?.user?.username || '';

localStorage.setItem('ton_user_id', userId);

// ====== 12. ADMIN ======
let isAdmin = userId === CONFIG.TON.ADMIN_ID;
let adminClickCount = 0, lastAdminClick = 0;

function checkAdminAndShowSetting() {
    if (isAdmin) {
        const adminSetting = document.getElementById('adminSettingItem');
        if (adminSetting) adminSetting.style.display = 'flex';
    }
}

function handleAvatarClick() {
    const now = Date.now();
    if (now - lastAdminClick > 2000) adminClickCount = 0;
    adminClickCount++;
    lastAdminClick = now;
    if (adminClickCount >= 5) {
        const pwd = prompt(t('admin.password'));
        if (pwd === CONFIG.TON.ADMIN_PASSWORD) {
            isAdmin = true;
            showAdminPanel();
        } else if (pwd) showToast(t('admin.wrongPassword'), 'error');
    }
}

// ====== 13. CACHE KEYS ======
const CACHE_KEYS = {
    USER: `user_${userId}`,
    TRANSACTIONS: `transactions_${userId}`,
    PRICES: 'live_prices',
    NOTIFICATIONS: `notifications_${userId}`,
    REFERRAL_PROCESSED: `referral_processed_${userId}`,
    LEADERBOARD: 'leaderboard_cache',
    WHEEL: `wheel_${userId}`,
    SLOTS: `slots_${userId}`,
    AUTO_CLICKER: `autoclicker_${userId}`
};

// ====== 14. USER STATE ======
let userData = {
    uid: userId,
    username: userName,
    firstName: userFirstName,
    telegramUsername: userUsername,
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
    autoClicker: { active: false, expiry: 0, lastAutoClaim: 0 },
    wheel: { spinsToday: 0, lastFreeSpin: 0, totalSpins: 0, jackpotCounter: 0, jackpotWon: 0, lastWin: null, spinHistory: [] },
    slots: { spinsToday: 0, lastFreeSpin: 0, totalSpins: 0, lastWin: null, spinHistory: [] },
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
    achievements: [],
    language: currentLanguage,
    notifications: true,
    createdAt: Date.now(),
    tonWallet: null,
    usedHashes: [],
    dailyLogin: { lastLogin: null, streak: 0 }
};

userData.balance = userData.balances.TON;

// ====== 15. CACHE MANAGEMENT ======
function loadUserFromCache() {
    try {
        const cached = localStorage.getItem(CACHE_KEYS.USER);
        if (cached) {
            const data = JSON.parse(cached);
            if (Date.now() - data._timestamp < CONFIG.CACHE.USER_TTL) {
                Object.assign(userData, data);
                userData.balance = userData.balances.TON;
                return true;
            }
        }
    } catch (e) {}
    return false;
}

function saveUserToCache() {
    try {
        localStorage.setItem(CACHE_KEYS.USER, JSON.stringify({ ...userData, _timestamp: Date.now() }));
    } catch (e) {}
}

function loadLocalTransactions() {
    try { return JSON.parse(localStorage.getItem(CACHE_KEYS.TRANSACTIONS)) || []; } catch { return []; }
}
function saveLocalTransactions(txs) {
    try { localStorage.setItem(CACHE_KEYS.TRANSACTIONS, JSON.stringify(txs)); } catch {}
}
function loadLocalNotifications() {
    try { return JSON.parse(localStorage.getItem(CACHE_KEYS.NOTIFICATIONS)) || []; } catch { return []; }
}
function saveLocalNotifications(notes) {
    try { localStorage.setItem(CACHE_KEYS.NOTIFICATIONS, JSON.stringify(notes)); } catch {}
}

// ====== 16. ON-DEMAND LISTENERS ======
let activeListeners = new Map(), listenerTimeouts = new Map();

function startOnDemandListener(collection, docId, callback, timeoutMs = 30000) {
    const id = `${collection}_${docId}`;
    if (activeListeners.has(id)) activeListeners.get(id)();
    if (listenerTimeouts.has(id)) clearTimeout(listenerTimeouts.get(id));
    const unsubscribe = db.collection(collection).doc(docId).onSnapshot(doc => {
        if (doc.exists) {
            callback(doc.data());
            if (doc.data().status === 'approved' || doc.data().status === 'rejected') stopOnDemandListener(id);
        }
    }, console.error);
    activeListeners.set(id, unsubscribe);
    listenerTimeouts.set(id, setTimeout(() => stopOnDemandListener(id), timeoutMs));
}

function stopOnDemandListener(id) {
    if (activeListeners.has(id)) { activeListeners.get(id)(); activeListeners.delete(id); }
    if (listenerTimeouts.has(id)) { clearTimeout(listenerTimeouts.get(id)); listenerTimeouts.delete(id); }
}

function stopAllListeners() {
    activeListeners.forEach(u => u()); activeListeners.clear();
    listenerTimeouts.forEach(t => clearTimeout(t)); listenerTimeouts.clear();
}

// ====== 17. LOAD USER DATA ======
async function loadUserData(force = false) {
    if (!force && loadUserFromCache()) { updateUI(); return; }
    if (db) {
        try {
            const doc = await db.collection('users').doc(userId).get();
            if (doc.exists) {
                Object.assign(userData, doc.data());
                userData.balance = userData.balances.TON;
            } else {
                userData.referralCode = generateReferralCode();
                await db.collection('users').doc(userId).set({ ...userData, createdAt: new Date() });
            }
        } catch (e) {}
    } else {
        userData.transactions = loadLocalTransactions();
        if (!userData.referralCode) userData.referralCode = generateReferralCode();
    }
    if (hasReferralCode() && !userData.referredBy) await processReferral();
    updateUI();
    checkAdminAndShowSetting();
    checkDailyLogin();
}
// ====== 18. REFERRAL SYSTEM ======
function generateReferralCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return userId.slice(-4) + Array.from({length:6}, () => chars[Math.floor(Math.random()*chars.length)]).join('');
}

function getReferralLink() {
    return `https://t.me/TONMiningbot/app?startapp=${userData.referralCode || userId}`;
}

function hasReferralCode() {
    const urlParams = new URLSearchParams(window.location.search);
    return !!(urlParams.get('startapp') || tg?.initDataUnsafe?.start_param);
}

async function processReferral() {
    const processed = localStorage.getItem(CACHE_KEYS.REFERRAL_PROCESSED);
    if (processed) return;
    const referralCode = new URLSearchParams(window.location.search).get('startapp') || tg?.initDataUnsafe?.start_param;
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
        const referrerQuery = await db.collection('users').where('referralCode', '==', referralCode).limit(1).get();
        if (!referrerQuery.empty) {
            const referrerDoc = referrerQuery.docs[0];
            const referrerId = referrerDoc.id;
            const referrerData = referrerDoc.data();
            if (referrerId === userId) return;
            if (referrerData.referrals?.includes(userId)) return;
            await db.collection('users').doc(referrerId).update({
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
            await db.collection('users').doc(userId).update({ referredBy: referralCode, 'balances.TON': userData.balances.TON });
            saveUserToCache();
            showToast(t('notif.welcomeBonus'), 'success');
            await addNotification(referrerId, t('notif.referralBonus'), 'success');
        } else localStorage.removeItem(CACHE_KEYS.REFERRAL_PROCESSED);
    } catch (e) { localStorage.removeItem(CACHE_KEYS.REFERRAL_PROCESSED); }
}

async function processReferralMiningBonus(referralId, miningAmount) {
    if (!db || !userData.referrals?.includes(referralId)) return;
    const bonus = miningAmount * CONFIG.ECONOMY.REFERRAL_PERCENT;
    userData.referralMiningTrack = userData.referralMiningTrack || {};
    userData.referralMiningTrack[referralId] = (userData.referralMiningTrack[referralId] || 0) + miningAmount;
    userData.balances.TON += bonus;
    userData.balance = userData.balances.TON;
    userData.totalEarned += bonus;
    userData.referralEarnings += bonus;
    saveUserToCache();
    try {
        await db.collection('users').doc(userId).update({
            'balances.TON': userData.balances.TON,
            totalEarned: userData.totalEarned,
            referralEarnings: userData.referralEarnings
        });
    } catch (e) {}
    addLocalNotification(t('notif.referralMiningBonus', { amount: bonus.toFixed(4) }), 'success');
}

// ====== 19. REFERRAL MILESTONES CHECK ======
async function checkReferralMilestones() {
    if (!userData.referralMilestonesClaimed) userData.referralMilestonesClaimed = [];
    for (const milestone of REFERRAL_MILESTONES) {
        if (userData.referralMilestonesClaimed.includes(milestone.referrals)) continue;
        if (userData.referralCount >= milestone.referrals) {
            userData.balances.USDT += milestone.reward;
            userData.referralMilestonesClaimed.push(milestone.referrals);
            addTransaction('referral_bonus', milestone.reward, { currency: 'USDT', details: `${milestone.referrals} referrals milestone` });
            addLocalNotification(`🏆 You reached ${milestone.referrals} referrals! Earned ${milestone.reward} USDT!`, 'success');
            if (db) await db.collection('users').doc(userId).update({
                'balances.USDT': userData.balances.USDT,
                referralMilestonesClaimed: userData.referralMilestonesClaimed
            }).catch(console.error);
        }
    }
    saveUserToCache();
}

// ====== 20. DAILY LOGIN BONUS ======
function checkDailyLogin() {
    const today = new Date().toDateString();
    if (!userData.dailyLogin) userData.dailyLogin = { lastLogin: null, streak: 0 };
    if (userData.dailyLogin.lastLogin !== today) {
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        if (userData.dailyLogin.lastLogin === yesterday) {
            userData.dailyLogin.streak++;
        } else userData.dailyLogin.streak = 1;
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

// ====== 21. NOTIFICATION SYSTEM ======
let localNotifications = loadLocalNotifications();
let unreadCount = localNotifications.filter(n => !n.read).length;

function addLocalNotification(message, type = 'info') {
    const notification = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
        message, type, read: false, timestamp: new Date().toISOString()
    };
    localNotifications.unshift(notification);
    if (localNotifications.length > 50) localNotifications = localNotifications.slice(0, 50);
    saveLocalNotifications(localNotifications);
    updateNotificationBadge();
    showFloatingToast(message, type);
    return notification;
}

async function addNotification(targetUserId, message, type = 'info') {
    if (targetUserId === userId) addLocalNotification(message, type);
    if (db && targetUserId !== userId) {
        try {
            await db.collection('users').doc(targetUserId).update({
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
    if (badge) {
        unreadCount = localNotifications.filter(n => !n.read).length;
        badge.textContent = unreadCount;
        badge.style.display = unreadCount > 0 ? 'flex' : 'none';
    }
}

function markNotificationRead(id) {
    const n = localNotifications.find(n => n.id === id);
    if (n && !n.read) { n.read = true; saveLocalNotifications(localNotifications); updateNotificationBadge(); renderNotifications(); }
}

function clearReadNotifications() {
    if (!confirm(`Clear ${localNotifications.filter(n => n.read).length} read notifications?`)) return;
    localNotifications = localNotifications.filter(n => !n.read);
    saveLocalNotifications(localNotifications);
    updateNotificationBadge();
    renderNotifications();
}

function clearAllNotifications() {
    if (!confirm('Delete all notifications?')) return;
    localNotifications = [];
    saveLocalNotifications(localNotifications);
    updateNotificationBadge();
    renderNotifications();
}

function renderNotifications() {
    const list = document.getElementById('notificationsList');
    if (!list) return;
    if (localNotifications.length === 0) {
        list.innerHTML = `<div class="empty-state"><i class="fa-regular fa-bell-slash"></i><p>${t('notifications.no_notifications')}</p></div>`;
        return;
    }
    list.innerHTML = localNotifications.map(n => {
        const d = new Date(n.timestamp);
        return `<div class="notification-item ${n.read ? '' : 'unread'}" onclick="markNotificationRead('${n.id}')">
            <div class="notification-header"><span class="notification-title"><i class="fa-regular ${n.type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i> ${t('notifications.title')}</span>
            <span class="notification-time">${d.toLocaleDateString()} ${d.toLocaleTimeString()}</span></div>
            <div class="notification-message">${n.message}</div>
        </div>`;
    }).join('');
}

function showNotifications() {
    const modal = document.getElementById('notificationsModal');
    if (modal) { modal.classList.add('show'); renderNotifications(); }
}

// ====== 22. FLOATING NOTIFICATIONS ======
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
        "🏆 Achievement unlocked: 7-Day Streak",
        "🎡 Someone won 100 TON on Lucky Wheel!",
        "🤖 Auto Miner bought"
    ];
    function showNext() {
        showFloatingToast(messages[Math.floor(Math.random() * messages.length)], 'info');
        floatingTimeouts.push(setTimeout(showNext, 8000 + Math.random() * 7000));
    }
    setTimeout(showNext, 3000);
}

function stopFloatingNotifications() {
    floatingTimeouts.forEach(clearTimeout);
    floatingTimeouts = [];
}

// ====== 23. WELCOME STICKER ======
const WELCOME_STICKERS = ['🤝', '🫣', '🥰', '🥳', '💲', '💰', '💸', '💵', '🤪', '😱', '😎', '🤑', '💯', '💖', '✨', '🌟', '⭐', '🔥', '⚡', '💎', '🎁', '🎈', '🎉', '👑', '🚀', '💫'];
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
    setTimeout(() => { stickerEl.classList.remove('sticker-pop', 'sticker-shake'); setTimeout(() => stickerEl.textContent = '', 300); }, 3000);
    lastStickerTime = now;
}

// ====== 24. PRICES ======
let livePrices = {}, lastPricesLoadTime = 0;
async function loadPrices(force = false) {
    const now = Date.now();
    const cached = localStorage.getItem(CACHE_KEYS.PRICES);
    if (!force && cached && (now - lastPricesLoadTime) < CONFIG.CACHE.PRICES_TTL) {
        const { prices, timestamp } = JSON.parse(cached);
        livePrices = prices; lastPricesLoadTime = timestamp; updatePrices(); return;
    }
    try {
        const ids = Object.values(CONFIG.CRYPTO_IDS).join(',');
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`);
        const data = await response.json();
        for (const [symbol, id] of Object.entries(CONFIG.CRYPTO_IDS)) {
            if (data[id]) livePrices[symbol] = { price: data[id].usd, change: data[id].usd_24h_change || 0 };
        }
        lastPricesLoadTime = now;
        localStorage.setItem(CACHE_KEYS.PRICES, JSON.stringify({ prices: livePrices, timestamp: now }));
        updatePrices();
    } catch (error) { console.error("Price fetch error:", error); }
}

// ====== 25. UTILITIES ======
function formatAddress(addr) { return addr?.length > 10 ? addr.slice(0,6) + '...' + addr.slice(-4) : addr || ''; }
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
function getTimeUntilNextClaim() {
    const machine = getActiveMachine();
    return Math.max(0, machine.interval - (Date.now() - userData.lastClaim));
}
function getClaimProgress() {
    const machine = getActiveMachine();
    return Math.min((Date.now() - userData.lastClaim) / machine.interval * 100, 100);
}
function getActiveMachine() { return MACHINES.find(m => m.id === userData.activeMachine) || MACHINES[0]; }
function getRemainingRentalTime() { return userData.activeMachine === 'm1' ? Infinity : Math.max(0, userData.machineExpiry - Date.now()); }
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

function randomId() { return Date.now().toString(36) + Math.random().toString(36).substr(2, 9); }

function showToast(message, type = 'info') {
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

function animateElement(selector, animation) {
    const el = document.querySelector(selector);
    if (el) { el.classList.add(animation); setTimeout(() => el.classList.remove(animation), 500); }
}
function scrollToTop() { document.querySelector('.main-content')?.scrollTo({ top: 0, behavior: 'smooth' }); }

// ====== 26. MINING MANAGER ======
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
                const referrerQuery = await db.collection('users').where('referralCode', '==', userData.referredBy).limit(1).get();
                if (!referrerQuery.empty) await addReferralMiningBonus(referrerQuery.docs[0].id, reward);
            }
        } catch (e) {}
    }
    showToast(`Claimed ${formatTON(reward)} TON!${bonus > 1 ? ` (${((bonus-1)*100).toFixed(0)}% bonus)` : ''}`, 'success');
    createParticles();
    updateUI();
    checkAchievements();
    if (db) saveToFirebase();
}

async function addReferralMiningBonus(referrerId, miningAmount) {
    if (!db) return;
    const bonus = miningAmount * CONFIG.ECONOMY.REFERRAL_PERCENT;
    try {
        await db.collection('users').doc(referrerId).update({
            'balances.TON': firebase.firestore.FieldValue.increment(bonus),
            totalEarned: firebase.firestore.FieldValue.increment(bonus),
            referralEarnings: firebase.firestore.FieldValue.increment(bonus)
        });
        await addNotification(referrerId, t('notif.referralMiningBonus', { amount: bonus.toFixed(4) }), 'success');
    } catch (e) {}
}

function createParticles() {
    const container = document.querySelector('.miner-particles');
    if (!container) return;
    for (let i = 0; i < 10; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() + 's';
        container.appendChild(p);
        setTimeout(() => p.remove(), 2000);
    }
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
    const tx = { id: randomId(), type, amount, currency: details.currency || 'TON', balance: userData.balance, timestamp: Date.now(), ...details };
    userData.transactions.unshift(tx);
    if (userData.transactions.length > 100) userData.transactions = userData.transactions.slice(0, 100);
    saveLocalTransactions(userData.transactions);
    updateActivityFeed();
}

// ====== 27. AUTO CLICKER SYSTEM ======
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
        showToast(t('error.insufficientBalance', { currency: 'TON' }), 'error');
        return;
    }
    userData.balances.TON -= CONFIG.ECONOMY.AUTO_CLICKER_PRICE;
    userData.balance = userData.balances.TON;
    userData.autoClicker = { active: true, expiry: Date.now() + CONFIG.ECONOMY.AUTO_CLICKER_DURATION, lastAutoClaim: Date.now() };
    saveUserToCache();
    addTransaction('autoclicker', CONFIG.ECONOMY.AUTO_CLICKER_PRICE, { currency: 'TON', details: 'Auto Miner purchase (15 days)' });
    startAutoClicker();
    showToast(t('autoclicker.bought'), 'success');
    updateUI();
}

// ====== 28. ACHIEVEMENTS MANAGER ======
function checkAchievements() {
    const newlyUnlocked = [];
    ACHIEVEMENTS.forEach(ach => {
        if (userData.achievements.includes(ach.id)) return;
        let completed = false;
        const [type, target] = ach.condition.split(':');
        const val = parseInt(target);
        switch(type) {
            case 'claims': completed = userData.claims >= val; break;
            case 'streak': completed = userData.streak >= val; break;
            case 'referrals': completed = (userData.referrals?.length || 0) >= val; break;
            case 'upgrades': completed = (userData.upgrades || 0) >= val; break;
            case 'earnings': completed = userData.totalEarned >= val; break;
        }
        if (completed) {
            newlyUnlocked.push(ach);
            userData.achievements.push(ach.id);
            userData.balances.TON += ach.reward;
            userData.balance = userData.balances.TON;
            userData.totalEarned += ach.reward;
            showToast(`🏆 ${currentLanguage === 'ar' ? ach.nameAr : ach.name} +${ach.reward} TON`, 'success');
            createParticles();
        }
    });
    if (newlyUnlocked.length > 0) { saveUserToCache(); renderAchievements(); }
}

// ====== 29. TON CONNECT ======
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
    } else userData.tonWallet = null;
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
    const paymentStatus = document.getElementById('paymentWalletStatus');
    const modalUserBalance = document.getElementById('modalUserBalance');
    if (modalUserBalance) modalUserBalance.textContent = formatBalance(userData.balances.TON || 0, 'TON') + ' TON';
    if (tonWallet) {
        if (statusEl) statusEl.innerHTML = `<div class="status-indicator online"></div><span>${t('wallet.connected')}</span>`;
        if (paymentStatus) paymentStatus.innerHTML = `<div class="status online"><i class="fas fa-circle"></i><span>${t('wallet.connected')}</span></div>`;
        if (infoEl) infoEl.style.display = 'flex';
        if (addressEl) addressEl.textContent = formatAddress(tonWallet.account.address);
        if (modalInfo) modalInfo.style.display = 'flex';
        if (modalAddress) modalAddress.textContent = formatAddress(tonWallet.account.address);
        if (payBtn) payBtn.disabled = false;
        if (depositBtn) depositBtn.disabled = false;
    } else {
        if (statusEl) statusEl.innerHTML = `<div class="status-indicator offline"></div><span>${t('wallet.disconnected')}</span>`;
        if (paymentStatus) paymentStatus.innerHTML = `<div class="status offline"><i class="fas fa-circle"></i><span>${t('wallet.notConnected')}</span></div>`;
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

// ====== 30. UI UPDATE FUNCTIONS ======
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
    updateWheelUI();
    updateSlotsUI();
}

function updateBalance() {
    const headerBalance = document.getElementById('headerBalance');
    const profileBalance = document.getElementById('profileBalance');
    const profileUsd = document.getElementById('profileUsd');
    const modalUserBalance = document.getElementById('modalUserBalance');
    if (headerBalance) headerBalance.textContent = formatTON(userData.balances.TON);
    if (profileBalance) profileBalance.textContent = formatTON(userData.balances.TON) + ' TON';
    const totalUsd = calculateTotalUsd();
    if (profileUsd) profileUsd.textContent = '≈ $' + totalUsd.toFixed(2);
    if (modalUserBalance) modalUserBalance.textContent = formatTON(userData.balances.TON) + ' TON';
}

function calculateTotalUsd() {
    let total = 0;
    for (const [cur, amt] of Object.entries(userData.balances)) total += amt * (livePrices[cur]?.price || 0);
    return total;
}

function updateMiningStats() {
    const hashRate = document.getElementById('hashRate');
    const streakCount = document.getElementById('streakCount');
    const totalEarned = document.getElementById('totalEarned');
    const bestStreak = document.getElementById('bestStreak');
    const miningDays = document.getElementById('miningDays');
    const yourEarnings = document.getElementById('yourEarnings');
    const achievementsCount = document.getElementById('achievementsCount');
    const totalReferralsStats = document.getElementById('totalReferralsStats');
    const machine = getActiveMachine();
    if (hashRate) hashRate.textContent = machine.hashrate.split(' ')[0];
    if (streakCount) streakCount.textContent = userData.streak;
    if (totalEarned) totalEarned.textContent = formatTON(userData.totalEarned);
    if (bestStreak) bestStreak.textContent = userData.longestStreak;
    if (miningDays) miningDays.textContent = Math.floor(userData.claims / 6) || 1;
    if (totalReferralsStats) totalReferralsStats.textContent = userData.referrals?.length || 0;
    if (achievementsCount) achievementsCount.textContent = `${userData.achievements?.length || 0}/${ACHIEVEMENTS.length}`;
    if (yourEarnings) yourEarnings.textContent = formatTON(userData.totalEarned) + ' TON';
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
        return `<tr><td><i class="fas ${m.icon}" style="color: ${m.color};"></i> ${name}</td>${
            m.plans.map(p => p.price === 0 ? '<td>FREE</td>' : `<td>${p.price} TON<br><small class="return-text">+${p.returnAmount} TON</small></td>`).join('')
        }</tr>`;
    }).join('');
}

function updateActivityFeed() {
    const feed = document.getElementById('activityFeed');
    if (!feed) return;
    const recent = userData.transactions.slice(0, 5);
    if (recent.length === 0) { feed.innerHTML = '<div class="empty-state">No activity yet</div>'; return; }
    feed.innerHTML = recent.map(tx => {
        const date = new Date(tx.timestamp);
        const timeAgo = formatRelativeTime(tx.timestamp);
        let icon = 'fa-bolt', title = 'Mining Reward';
        if (tx.type === 'deposit') { icon = 'fa-arrow-down'; title = 'Deposit'; }
        else if (tx.type === 'withdraw') { icon = 'fa-arrow-up'; title = 'Withdrawal'; }
        else if (tx.type === 'rental') { icon = 'fa-microchip'; title = 'Machine Rental'; }
        else if (tx.type === 'swap') { icon = 'fa-exchange-alt'; title = 'Swap'; }
        else if (tx.type === 'referral_bonus') { icon = 'fa-users'; title = 'Referral Bonus'; }
        else if (tx.type === 'autoclicker') { icon = 'fa-robot'; title = 'Auto Miner'; }
        else if (tx.type === 'wheel') { icon = 'fa-wheelchair'; title = 'Lucky Wheel'; }
        else if (tx.type === 'slots') { icon = 'fa-sliders-h'; title = 'Slot Machine'; }
        else if (tx.type === 'daily_bonus') { icon = 'fa-calendar-check'; title = 'Daily Bonus'; }
        const currency = tx.currency || 'TON';
        return `<div class="activity-item"><div class="activity-icon"><i class="fas ${icon}"></i></div>
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
    const usernameEl = document.getElementById('username');
    const userIdEl = document.getElementById('userId');
    if (refCount) refCount.textContent = userData.referrals?.length || 0;
    if (refEarnings) refEarnings.textContent = formatTON(userData.referralEarnings || 0);
    if (refLink) refLink.value = getReferralLink();
    if (usernameEl) usernameEl.textContent = userData.firstName || userData.username;
    if (userIdEl) userIdEl.textContent = userData.telegramUsername ? `@${userData.telegramUsername}` : `ID: ${userData.uid.slice(-8)}`;
}

function renderAchievements() {
    const grid = document.getElementById('achievementsGrid');
    if (!grid) return;
    grid.innerHTML = ACHIEVEMENTS.slice(0, 8).map(ach => {
        const unlocked = userData.achievements.includes(ach.id);
        return `<div class="achievement-item-legendary ${unlocked ? 'unlocked' : ''}">
            <span class="achievement-icon-legendary">${ach.icon}</span>
            <span class="achievement-name-legendary">${currentLanguage === 'ar' ? ach.nameAr : ach.name}</span>
            <span class="achievement-reward-legendary">${ach.reward} TON</span>
        </div>`;
    }).join('');
}

function renderAssets() {
    const list = document.getElementById('assetsList');
    if (!list) return;
    const assets = CONFIG.ALL_ASSETS.filter(a => (userData.balances[a.symbol] || 0) > 0);
    if (assets.length === 0) { list.innerHTML = '<div class="empty-state">No assets yet</div>'; return; }
    list.innerHTML = assets.map(a => {
        const balance = userData.balances[a.symbol] || 0;
        const price = livePrices[a.symbol]?.price || 0;
        const value = balance * price;
        const change = livePrices[a.symbol]?.change || 0;
        return `<div class="asset-item-legendary"><div class="asset-left"><img src="${CONFIG.CMC_ICONS[a.symbol]}" class="asset-icon-img"><div class="asset-info"><h4>${a.name}</h4><p>${a.symbol} <span class="asset-change ${change >= 0 ? 'positive' : 'negative'}">${change >= 0 ? '+' : ''}${change.toFixed(2)}%</span></p></div></div>
            <div class="asset-right"><div class="asset-balance">${formatBalance(balance, a.symbol)} ${a.symbol}</div><div class="asset-value">$${formatNumber(value)}</div></div></div>`;
    }).join('');
}

function updateAutoClickerUI() {
    const statusEl = document.getElementById('autoMinerStatus');
    const timeEl = document.getElementById('autoMinerTime');
    if (userData.autoClicker?.active) {
        const timeLeft = userData.autoClicker.expiry - Date.now();
        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (24 * 3600000));
            const hours = Math.floor((timeLeft % (24 * 3600000)) / 3600000);
            if (statusEl) statusEl.style.display = 'flex';
            if (timeEl) timeEl.textContent = `${days}d ${hours}h`;
        } else {
            userData.autoClicker.active = false;
            saveUserToCache();
            if (statusEl) statusEl.style.display = 'none';
        }
    } else if (statusEl) statusEl.style.display = 'none';
}

// ====== 31. WHEEL SYSTEM ======
function showWheelModal() {
    const modal = document.getElementById('wheelModal');
    if (modal) { updateWheelUI(); renderWheelSegments(); modal.classList.add('show'); }
}

function renderWheelSegments() {
    const wheel = document.getElementById('wheel');
    if (!wheel) return;
    wheel.innerHTML = '';
    const totalSegments = 16;
    const angleStep = 360 / totalSegments;
    const allPrizes = WHEEL_PRIZES.filter(p => p.type !== 'JACKPOT');
    const jackpot = WHEEL_PRIZES.find(p => p.type === 'JACKPOT');
    const selected = [jackpot];
    const others = [...allPrizes];
    while (selected.length < totalSegments && others.length > 0) {
        const idx = Math.floor(Math.random() * others.length);
        selected.push(others[idx]);
        others.splice(idx, 1);
    }
    selected.sort(() => Math.random() - 0.5);
    selected.forEach((p, i) => {
        const seg = document.createElement('div');
        seg.className = 'wheel-segment';
        seg.style.transform = `rotate(${i * angleStep}deg)`;
        seg.style.background = p.color;
        seg.innerHTML = `<span class="wheel-icon">${p.icon || '🎰'}</span>
            <span class="wheel-value">${p.type === 'NOTHING' ? '😢' : p.type === 'SPIN' ? '🔄' : p.type === 'AUTO' ? '🤖' : p.type === 'JACKPOT' ? '👑' : p.amount}</span>
            <span class="wheel-type">${p.type}</span>`;
        wheel.appendChild(seg);
    });
    for (let i = 0; i < totalSegments; i++) {
        const line = document.createElement('div');
        line.className = 'wheel-divider';
        line.style.transform = `rotate(${i * angleStep}deg)`;
        wheel.appendChild(line);
    }
}

function updateWheelUI() {
    const spinsLeftEl = document.getElementById('wheelSpinsLeft');
    const freeSpinEl = document.getElementById('wheelFreeSpin');
    const jackpotCounterEl = document.getElementById('wheelJackpotCounter');
    if (spinsLeftEl) {
        const left = CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY - (userData.wheel.jackpotCounter % CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY);
        spinsLeftEl.textContent = t('wheel.spinsLeft', { count: left });
    }
    if (jackpotCounterEl) jackpotCounterEl.textContent = `${userData.wheel.jackpotCounter % CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY}/${CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY}`;
    if (freeSpinEl) {
        const now = Date.now();
        const next = userData.wheel.lastFreeSpin + CONFIG.ECONOMY.WHEEL_FREE_SPIN_INTERVAL;
        if (now < next) {
            const left = next - now;
            const h = Math.floor(left / 3600000);
            const m = Math.floor((left % 3600000) / 60000);
            freeSpinEl.innerHTML = `<i class="fas fa-clock"></i> ${h}h ${m}m`;
            freeSpinEl.classList.add('disabled');
        } else {
            freeSpinEl.innerHTML = `<i class="fas fa-gift"></i> ${t('wheel.free')}`;
            freeSpinEl.classList.remove('disabled');
        }
    }
}

function playWheelSound(type) {
    if (tg) {
        if (type === 'win') tg.HapticFeedback?.notificationOccurred('success');
        else if (type === 'spin') tg.HapticFeedback?.impactOccurred('light');
        else if (type === 'jackpot') { tg.HapticFeedback?.notificationOccurred('success'); tg.HapticFeedback?.impactOccurred('heavy'); }
    }
}

async function spinWheel(isFree = false) {
    if (!isFree && userData.balances.TON < CONFIG.ECONOMY.WHEEL_SPIN_PRICE) {
        showToast(t('wheel.insufficient'), 'error'); return;
    }
    if (isFree) {
        const now = Date.now();
        if (now < userData.wheel.lastFreeSpin + CONFIG.ECONOMY.WHEEL_FREE_SPIN_INTERVAL) {
            const left = (userData.wheel.lastFreeSpin + CONFIG.ECONOMY.WHEEL_FREE_SPIN_INTERVAL) - now;
            const h = Math.floor(left / 3600000);
            const m = Math.floor((left % 3600000) / 60000);
            showToast(t('wheel.wait', { time: `${h}h ${m}m` }), 'warning');
            return;
        }
        userData.wheel.lastFreeSpin = now;
    } else {
        if (tg?.pay) {
            try {
                const res = await tg.pay(CONFIG.ECONOMY.WHEEL_SPIN_PRICE.toString());
                if (!res.success) { showToast(t('error.paymentFailed'), 'error'); return; }
            } catch (e) { showToast(t('error.paymentFailed'), 'error'); return; }
        } else {
            userData.balances.TON -= CONFIG.ECONOMY.WHEEL_SPIN_PRICE;
            userData.balance = userData.balances.TON;
        }
    }
    userData.wheel.totalSpins++;
    userData.wheel.jackpotCounter++;
    userData.wheel.spinHistory.push({ timestamp: Date.now(), isFree });
    const wheel = document.getElementById('wheel');
    if (wheel) {
        const spins = 5 + Math.floor(Math.random() * 5);
        wheel.style.transition = 'transform 3s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
        wheel.style.transform = `rotate(${spins * 360 + Math.random() * 360}deg)`;
        playWheelSound('spin');
        setTimeout(() => wheel.style.transition = '', 3000);
    }
    setTimeout(() => { const prize = getRandomWheelPrize(); awardWheelPrize(prize); }, 3000);
    saveUserToCache(); updateWheelUI(); updateUI();
}

function getRandomWheelPrize() {
    const isJackpot = userData.wheel.jackpotCounter % CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY === 0;
    let eligible = isJackpot ? WHEEL_PRIZES.filter(p => p.jackpot || p.amount >= 50) : WHEEL_PRIZES.filter(p => !p.jackpot);
    const total = eligible.reduce((s, p) => s + p.weight, 0);
    let rand = Math.random() * total;
    for (const p of eligible) { if (rand < p.weight) return p; rand -= p.weight; }
    return eligible[0];
}

function awardWheelPrize(prize) {
    userData.wheel.lastWin = { prize, timestamp: Date.now() };
    if (prize.type === 'TON') { userData.balances.TON += prize.amount; userData.balance = userData.balances.TON; userData.totalEarned += prize.amount; addTransaction('wheel', prize.amount, { currency: 'TON' }); }
    else if (prize.type === 'USDT') { userData.balances.USDT += prize.amount; addTransaction('wheel', prize.amount, { currency: 'USDT' }); }
    else if (prize.type === 'SPIN') { setTimeout(() => spinWheel(false), 1000); }
    else if (prize.type === 'AUTO') { userData.autoClicker = { active: true, expiry: Date.now() + CONFIG.ECONOMY.AUTO_CLICKER_DURATION, lastAutoClaim: Date.now() }; startAutoClicker(); }
    else if (prize.type === 'JACKPOT') { userData.balances.TON += prize.amount; userData.balance = userData.balances.TON; userData.totalEarned += prize.amount; addTransaction('wheel', prize.amount, { currency: 'TON' }); playWheelSound('jackpot'); createParticles(); }
    if (prize.type !== 'NOTHING') {
        if (prize.jackpot) showToast(`🎡🎡🎡 ${t('wheel.jackpot')} ${prize.amount} TON!`, 'success');
        else showToast(t('wheel.won', { prize: prize.type === 'TON' ? `${prize.amount} TON` : prize.type === 'USDT' ? `${prize.amount} USDT` : prize.type }), 'success');
    } else showToast(t('wheel.goodLuck'), 'info');
    saveUserToCache(); updateUI();
}

// ====== 32. SLOTS SYSTEM (NEW) ======
function showSlotsModal() {
    const modal = document.getElementById('slotsModal');
    if (modal) { updateSlotsUI(); renderSlots(); modal.classList.add('show'); }
}

function renderSlots() {
    const reels = document.querySelectorAll('.slot-reel');
    if (!reels.length) return;
    reels.forEach(reel => {
        reel.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const symbol = SLOTS_SYMBOLS[Math.floor(Math.random() * SLOTS_SYMBOLS.length)];
            const div = document.createElement('div');
            div.className = 'slot-symbol';
            div.textContent = symbol;
            reel.appendChild(div);
        }
    });
}

function updateSlotsUI() {
    const freeSpinEl = document.getElementById('slotsFreeSpin');
    if (!freeSpinEl) return;
    const now = Date.now();
    const next = userData.slots.lastFreeSpin + CONFIG.ECONOMY.SLOTS_FREE_SPIN_INTERVAL;
    if (now < next) {
        const left = next - now;
        const h = Math.floor(left / 3600000);
        const m = Math.floor((left % 3600000) / 60000);
        freeSpinEl.innerHTML = `<i class="fas fa-clock"></i> ${h}h ${m}m`;
        freeSpinEl.classList.add('disabled');
    } else {
        freeSpinEl.innerHTML = `<i class="fas fa-gift"></i> ${t('slots.free')}`;
        freeSpinEl.classList.remove('disabled');
    }
}

async function spinSlots(isFree = false, isTurbo = false) {
    const price = isTurbo ? CONFIG.ECONOMY.SLOTS_TURBO_PRICE : CONFIG.ECONOMY.SLOTS_SPIN_PRICE;
    if (!isFree && userData.balances.TON < price) {
        showToast(isTurbo ? t('slots.insufficientTurbo') : t('slots.insufficient'), 'error');
        return;
    }
    if (isFree) {
        const now = Date.now();
        if (now < userData.slots.lastFreeSpin + CONFIG.ECONOMY.SLOTS_FREE_SPIN_INTERVAL) {
            const left = (userData.slots.lastFreeSpin + CONFIG.ECONOMY.SLOTS_FREE_SPIN_INTERVAL) - now;
            const h = Math.floor(left / 3600000);
            const m = Math.floor((left % 3600000) / 60000);
            showToast(t('slots.wait', { time: `${h}h ${m}m` }), 'warning');
            return;
        }
        userData.slots.lastFreeSpin = now;
    } else {
        if (tg?.pay) {
            try {
                const res = await tg.pay(price.toString());
                if (!res.success) { showToast(t('error.paymentFailed'), 'error'); return; }
            } catch (e) { showToast(t('error.paymentFailed'), 'error'); return; }
        } else {
            userData.balances.TON -= price;
            userData.balance = userData.balances.TON;
        }
    }
    userData.slots.totalSpins++;
    userData.slots.spinHistory.push({ timestamp: Date.now(), isFree, isTurbo });
    const duration = isTurbo ? 1000 : 2000;
    await animateSlots(duration);
    const prize = getRandomSlotsPrize();
    awardSlotsPrize(prize);
    saveUserToCache(); updateSlotsUI(); updateUI();
}

async function animateSlots(duration) {
    const reels = document.querySelectorAll('.slot-reel');
    const start = Date.now();
    return new Promise(resolve => {
        function animate() {
            const now = Date.now();
            const progress = Math.min((now - start) / duration, 1);
            reels.forEach((reel, idx) => {
                const speed = 50 + idx * 10;
                const offset = Math.floor(progress * speed) % SLOTS_SYMBOLS.length;
                reel.style.transform = `translateY(-${offset * 60}px)`;
            });
            if (progress < 1) requestAnimationFrame(animate);
            else {
                reels.forEach(reel => reel.style.transform = 'translateY(0)');
                resolve();
            }
        }
        requestAnimationFrame(animate);
    });
}

function getRandomSlotsPrize() {
    const rand = Math.random();
    if (rand < 0.001) return SLOTS_PRIZES.find(p => p.jackpot); // 0.1% jackpot
    if (rand < 0.05) return SLOTS_PRIZES.filter(p => p.amount >= 5)[Math.floor(Math.random() * 3)]; // 5% big win
    if (rand < 0.25) return SLOTS_PRIZES.filter(p => p.amount >= 1 && p.amount < 5)[Math.floor(Math.random() * 4)]; // 20% medium win
    return SLOTS_PRIZES.filter(p => p.amount < 1)[Math.floor(Math.random() * 6)]; // 74.9% small win
}

function awardSlotsPrize(prize) {
    userData.slots.lastWin = { prize, timestamp: Date.now() };
    if (prize.type === 'TON') { userData.balances.TON += prize.amount; userData.balance = userData.balances.TON; userData.totalEarned += prize.amount; addTransaction('slots', prize.amount, { currency: 'TON' }); }
    else { userData.balances.USDT += prize.amount; addTransaction('slots', prize.amount, { currency: 'USDT' }); }
    if (prize.jackpot) { showToast(`🎰🎰🎰 ${t('slots.jackpot')} ${prize.amount} ${prize.type}!`, 'success'); createParticles(); }
    else showToast(t('slots.won', { prize: `${prize.amount} ${prize.type}` }), 'success');
    saveUserToCache();
}

// ====== 33. MARKET FUNCTIONS ======
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
            <div class="showcase-content"><h3>${name}</h3><p>${desc}</p>
            <div class="showcase-specs"><span class="spec"><i class="fas fa-microchip"></i> ${m.hashrate}</span>
            <span class="spec"><i class="fas fa-bolt"></i> ${m.yield} TON/${cycle}</span></div>
            ${!meets ? `<div class="requirements-warning"><i class="fas fa-lock"></i> Requirements not met</div>` : ''}
            <div class="showcase-plans">${m.plans.map((p, idx) => 
                `<div class="plan-card-mini ${p.price === 0 ? 'free' : ''}" onclick="selectPlan('${m.id}', ${idx})">
                    <div class="duration">${p.duration} ${currentLanguage === 'ar' ? 'أيام' : 'days'}</div>
                    <div class="price">${p.price === 0 ? 'FREE' : p.price + ' TON'}</div>
                    ${p.price > 0 ? `<div class="return">+${p.returnAmount} TON</div>` : ''}
                </div>`).join('')}</div></div></div>`;
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

// ====== 34. PAYMENT SYSTEM ======
let currentPaymentMethod = 'balance', currentPayment = null;

function switchPaymentMethod(method) {
    currentPaymentMethod = method;
    const optBal = document.getElementById('paymentOptionBalance');
    const optWal = document.getElementById('paymentOptionWallet');
    const confirmBtn = document.getElementById('confirmPaymentBtn');
    if (optBal) {
        if (method === 'balance') { optBal.classList.add('active'); optWal?.classList.remove('active'); }
        else { optBal.classList.remove('active'); optWal?.classList.add('active'); }
    }
    if (confirmBtn) confirmBtn.innerHTML = method === 'balance' ? 
        `<i class="fas fa-wallet"></i> ${t('payment.confirmBalance')}` : 
        `<i class="fas fa-external-link-alt"></i> ${t('payment.confirmWallet')}`;
    updateWalletUI();
}

function selectPlan(machineId, planIndex) {
    const machine = MACHINES.find(m => m.id === machineId);
    if (!machine) return;
    const plan = machine.plans[planIndex];
    if (!checkRequirements(machine)) { showToast('You do not meet the requirements', 'error'); return; }
    if (plan.price === 0) activateMachine(machineId, planIndex);
    else openPaymentModal(machine, planIndex);
}

function openPaymentModal(machine, planIndex) {
    const plan = machine.plans[planIndex];
    document.getElementById('paymentMachineIcon').innerHTML = `<i class="fas ${machine.icon}" style="color: ${machine.color};"></i>`;
    document.getElementById('paymentMachineName').textContent = machine.name;
    document.getElementById('paymentDuration').textContent = plan.duration + ' days';
    document.getElementById('paymentPrice').textContent = plan.price + ' TON';
    document.getElementById('paymentReturn').textContent = `${plan.returnAmount} TON (${plan.returnPercent}%)`;
    document.getElementById('paymentTotal').textContent = plan.total + ' TON';
    currentPayment = { machine, planIndex, plan };
    currentPaymentMethod = 'balance';
    switchPaymentMethod('balance');
    document.getElementById('paymentModal').classList.add('show');
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
    updateUI();
    checkAchievements();
    if (db) saveToFirebase();
}

function rentWithBalance(machineId, planIndex) {
    const machine = MACHINES.find(m => m.id === machineId);
    const plan = machine.plans[planIndex];
    if (userData.balances.TON < plan.price) { showToast(t('error.insufficientBalance', { currency: 'TON' }), 'error'); return false; }
    userData.balances.TON -= plan.price;
    userData.balance = userData.balances.TON;
    activateMachine(machineId, planIndex);
    addTransaction('rental', plan.price, { machine: machine.name, plan: plan.duration + ' days', currency: 'TON' });
    showToast(`✅ ${machine.name} rented!`, 'success');
    saveUserToCache(); updateUI(); return true;
}

async function processPayment() {
    if (!currentPayment) return;
    const { machine, planIndex, plan } = currentPayment;
    if (currentPaymentMethod === 'balance') { if (rentWithBalance(machine.id, planIndex)) closeModal('paymentModal'); }
    else await confirmWalletPayment();
}

async function confirmWalletPayment() {
    if (!currentPayment || !tonWallet) { showToast('Connect wallet first', 'error'); return; }
    const { machine, planIndex, plan } = currentPayment;
    try {
        const tx = { validUntil: Date.now() + 600000, messages: [{ address: CONFIG.TON.WALLET, amount: (plan.price * 1e9).toString() }] };
        showToast('Opening wallet...', 'info');
        await tonConnectUI.sendTransaction(tx);
        showToast('Payment sent! Waiting for confirmation...', 'info');
        setTimeout(() => {
            activateMachine(machine.id, planIndex);
            closeModal('paymentModal');
            addTransaction('rental', plan.price, { machine: machine.name, plan: plan.duration + ' days', method: 'wallet', currency: 'TON' });
        }, 3000);
    } catch (e) { showToast('Payment failed', 'error'); }
}

// ====== 35. SWAP SYSTEM ======
let swapMode = 'from', swapFromCurrency = 'TON', swapToCurrency = 'USDT';

function showSwapModal() {
    document.getElementById('swapFromCurrency').textContent = swapFromCurrency;
    document.getElementById('swapToCurrency').textContent = swapToCurrency;
    document.getElementById('swapFromIcon').src = CONFIG.CMC_ICONS[swapFromCurrency];
    document.getElementById('swapToIcon').src = CONFIG.CMC_ICONS[swapToCurrency];
    updateSwapBalances();
    calculateSwap();
    document.getElementById('swapModal').classList.add('show');
}

function updateSwapBalances() {
    const fromBal = document.getElementById('swapFromBalance');
    const toBal = document.getElementById('swapToBalance');
    if (fromBal) fromBal.textContent = `Balance: ${formatBalance(userData.balances[swapFromCurrency] || 0, swapFromCurrency)} ${swapFromCurrency}`;
    if (toBal) toBal.textContent = `Balance: ${formatBalance(userData.balances[swapToCurrency] || 0, swapToCurrency)} ${swapToCurrency}`;
}

function showCurrencySelector(type) {
    swapMode = type;
    const list = document.getElementById('currencyList');
    list.innerHTML = CONFIG.ALL_ASSETS.map(a => 
        `<div class="currency-list-item" onclick="selectCurrency('${a.symbol}')">
            <img src="${CONFIG.CMC_ICONS[a.symbol]}" alt="${a.symbol}">
            <div class="currency-info"><h4>${a.name}</h4><p>${a.symbol}</p></div>
        </div>`
    ).join('');
    document.getElementById('currencySelectorModal').classList.add('show');
}

function selectCurrency(symbol) {
    if (swapMode === 'from') { swapFromCurrency = symbol; document.getElementById('swapFromCurrency').textContent = symbol; document.getElementById('swapFromIcon').src = CONFIG.CMC_ICONS[symbol]; }
    else { swapToCurrency = symbol; document.getElementById('swapToCurrency').textContent = symbol; document.getElementById('swapToIcon').src = CONFIG.CMC_ICONS[symbol]; }
    closeModal('currencySelectorModal');
    updateSwapBalances();
    calculateSwap();
}

function filterCurrencies() {
    const term = document.getElementById('currencySearch').value.toLowerCase();
    document.querySelectorAll('.currency-list-item').forEach(i => i.style.display = i.textContent.toLowerCase().includes(term) ? 'flex' : 'none');
}

function flipSwap() {
    [swapFromCurrency, swapToCurrency] = [swapToCurrency, swapFromCurrency];
    document.getElementById('swapFromCurrency').textContent = swapFromCurrency;
    document.getElementById('swapToCurrency').textContent = swapToCurrency;
    document.getElementById('swapFromIcon').src = CONFIG.CMC_ICONS[swapFromCurrency];
    document.getElementById('swapToIcon').src = CONFIG.CMC_ICONS[swapToCurrency];
    updateSwapBalances();
    calculateSwap();
    animateElement('.swap-arrow i', 'pop');
}

function calculateSwap() {
    const from = parseFloat(document.getElementById('swapFromAmount').value) || 0;
    const toEl = document.getElementById('swapToAmount');
    const rateEl = document.getElementById('swapRate');
    const fromPrice = livePrices[swapFromCurrency]?.price || 1;
    const toPrice = livePrices[swapToCurrency]?.price || 1;
    const rate = fromPrice / toPrice;
    toEl.value = (from * rate).toFixed(6);
    rateEl.textContent = `1 ${swapFromCurrency} = ${rate.toFixed(6)} ${swapToCurrency}`;
}

function confirmSwap() {
    const from = parseFloat(document.getElementById('swapFromAmount').value);
    const fromBal = userData.balances[swapFromCurrency] || 0;
    if (!from || from <= 0) { showToast(t('error.enterAmount'), 'error'); return; }
    if (from > fromBal) { showToast(t('error.insufficientToken', { token: swapFromCurrency }), 'error'); return; }
    const to = parseFloat(document.getElementById('swapToAmount').value);
    userData.balances[swapFromCurrency] -= from;
    userData.balances[swapToCurrency] += to;
    if (swapFromCurrency === 'TON') userData.balance = userData.balances.TON;
    addTransaction('swap', from, { fromCurrency: swapFromCurrency, toCurrency: swapToCurrency, toAmount: to, rate: to / from });
    saveUserToCache();
    showToast(`✅ Swapped ${formatBalance(from, swapFromCurrency)} ${swapFromCurrency} to ${formatBalance(to, swapToCurrency)} ${swapToCurrency}`, 'success');
    closeModal('swapModal');
    updateUI();
    renderAssets();
}

// ====== 36. DEPOSIT FUNCTIONS ======
let selectedDepositCurrency = 'TON';

function showDepositModal() {
    const select = document.getElementById('depositCurrencySelect');
    select.innerHTML = CONFIG.ALL_ASSETS.map(a => `<option value="${a.symbol}" ${a.symbol === selectedDepositCurrency ? 'selected' : ''}>${a.name} (${a.symbol})</option>`).join('');
    updateDepositInfo();
    document.getElementById('depositModal').classList.add('show');
    updateWalletUI();
}

function updateDepositInfo() {
    const cur = document.getElementById('depositCurrencySelect')?.value || selectedDepositCurrency;
    selectedDepositCurrency = cur;
    document.getElementById('depositAddress').textContent = CONFIG.DEPOSIT_ADDRESSES[cur] || 'Address not configured';
    document.getElementById('depositIcon').src = CONFIG.CMC_ICONS[cur];
    document.getElementById('depositMinAmount').textContent = `${CONFIG.DEPOSIT_MINIMUMS[cur] || 1} ${cur}`;
    const net = CONFIG.NETWORK_TYPES[cur] || 'bsc';
    let hint = '';
    if (net === 'bsc' || net === 'erc20') hint = 'BSC/ERC20 - starts with 0x (42 chars)';
    else if (net === 'solana') hint = 'Solana - 32-44 characters';
    else if (net === 'bitcoin') hint = 'Bitcoin - starts with 1, 3, or bc1';
    else if (net === 'ton') hint = 'TON - starts with UQ or EQ';
    document.getElementById('depositNetworkHint').textContent = hint;
    document.getElementById('confirmDepositBtn').disabled = true;
}

function validateDepositInput() {
    const cur = selectedDepositCurrency;
    const amt = parseFloat(document.getElementById('depositAmount').value);
    const hash = document.getElementById('depositTxHash').value.trim();
    const hint = document.getElementById('depositHashHint');
    const btn = document.getElementById('confirmDepositBtn');
    if (!amt || amt <= 0 || !hash) { if (hint) { hint.textContent = 'Enter amount and hash'; hint.className = 'validation-hint invalid'; } btn.disabled = true; return; }
    const min = CONFIG.DEPOSIT_MINIMUMS[cur] || 1;
    if (amt < min) { hint.textContent = `Minimum is ${min} ${cur}`; hint.className = 'validation-hint invalid'; btn.disabled = true; return; }
    if (!validateTransactionHash(hash, cur)) { hint.textContent = `Invalid ${cur} hash`; hint.className = 'validation-hint invalid'; btn.disabled = true; return; }
    if (userData.usedHashes?.includes(hash.toLowerCase())) { hint.textContent = 'Hash already used'; hint.className = 'validation-hint invalid'; btn.disabled = true; return; }
    hint.textContent = '✓ Valid'; hint.className = 'validation-hint valid';
    btn.disabled = false;
}

function copyDepositAddress() {
    navigator.clipboard.writeText(document.getElementById('depositAddress').textContent);
    showToast('Address copied', 'success');
}

async function submitDeposit() {
    const cur = selectedDepositCurrency;
    const amt = parseFloat(document.getElementById('depositAmount').value);
    const hash = document.getElementById('depositTxHash').value.trim();
    const deposit = { id: 'dep_' + Date.now() + '_' + randomId(), userId, username: userName, currency: cur, amount: amt, txHash: hash, status: 'pending', timestamp: Date.now() };
    userData.pendingDeposits.push(deposit);
    if (!userData.usedHashes) userData.usedHashes = [];
    userData.usedHashes.push(hash.toLowerCase());
    saveUserToCache();
    if (db) {
        try {
            const docRef = await db.collection('deposits').add({ ...deposit, timestamp: firebase.firestore.FieldValue.serverTimestamp() });
            deposit.firebaseId = docRef.id;
            startOnDemandListener('deposits', docRef.id, data => {
                if (data.status === 'approved') {
                    userData.balances[cur] = (userData.balances[cur] || 0) + amt;
                    if (cur === 'TON') userData.balance = userData.balances.TON;
                    userData.totalDeposited += amt;
                    userData.pendingDeposits = userData.pendingDeposits.filter(d => d.id !== deposit.id);
                    userData.completedDeposits.push({ ...deposit, status: 'approved' });
                    saveUserToCache();
                    showToast(t('notif.depositApproved', { amount: amt, currency: cur }), 'success');
                    updateUI();
                } else if (data.status === 'rejected') {
                    userData.pendingDeposits = userData.pendingDeposits.filter(d => d.id !== deposit.id);
                    saveUserToCache();
                    showToast(t('notif.depositRejected', { reason: data.reason || 'Unknown' }), 'error');
                }
            });
            await addNotification(CONFIG.TON.ADMIN_ID, `💰 New deposit: ${amt} ${cur}`, 'info');
        } catch (e) {}
    }
    closeModal('depositModal');
    showToast(`Deposit request submitted`, 'success');
    document.getElementById('depositAmount').value = '';
    document.getElementById('depositTxHash').value = '';
}

// ====== 37. WITHDRAW FUNCTIONS ======
let selectedWithdrawCurrency = 'TON';

function showWithdrawModal() {
    const select = document.getElementById('withdrawCurrencySelect');
    select.innerHTML = CONFIG.ALL_ASSETS.map(a => `<option value="${a.symbol}" ${a.symbol === selectedWithdrawCurrency ? 'selected' : ''}>${a.name} (${a.symbol})</option>`).join('');
    updateWithdrawInfo();
    document.getElementById('withdrawModal').classList.add('show');
}

function updateWithdrawInfo() {
    const cur = document.getElementById('withdrawCurrencySelect')?.value || selectedWithdrawCurrency;
    selectedWithdrawCurrency = cur;
    const bal = userData.balances[cur] || 0;
    document.getElementById('withdrawBalance').textContent = `${formatBalance(bal, cur)} ${cur}`;
    document.getElementById('withdrawIcon').src = CONFIG.CMC_ICONS[cur];
    const fee = CONFIG.WITHDRAW_FEES[cur];
    const feeEl = document.getElementById('withdrawFeeInfo');
    if (fee) feeEl.innerHTML = `${fee.note}<br>Fee: ${fee.fee} ${fee.feeCurrency}`;
    else feeEl.innerHTML = 'Network fee: 0';
    validateWithdrawInput();
}

function validateWithdrawInput() {
    const cur = selectedWithdrawCurrency;
    const amt = parseFloat(document.getElementById('withdrawAmount').value);
    const addr = document.getElementById('withdrawAddress').value.trim();
    const hint = document.getElementById('withdrawAddressHint');
    const btn = document.getElementById('submitWithdraw');
    if (!amt || amt <= 0 || !addr) { if (hint) { hint.textContent = 'Enter amount and address'; hint.className = 'validation-hint invalid'; } btn.disabled = true; return; }
    const bal = userData.balances[cur] || 0;
    if (amt > bal) { hint.textContent = `Insufficient ${cur}`; hint.className = 'validation-hint invalid'; btn.disabled = true; return; }
    if (!isValidAddress(addr, cur)) { hint.textContent = `Invalid ${cur} address`; hint.className = 'validation-hint invalid'; btn.disabled = true; return; }
    const fee = CONFIG.WITHDRAW_FEES[cur];
    if (fee && fee.feeCurrency !== cur) {
        const feeBal = userData.balances[fee.feeCurrency] || 0;
        if (feeBal < fee.fee) { hint.textContent = `Insufficient ${fee.feeCurrency} for fee`; hint.className = 'validation-hint invalid'; btn.disabled = true; return; }
    }
    hint.textContent = '✓ Valid'; hint.className = 'validation-hint valid';
    btn.disabled = false;
}

function updateWithdrawAmount() {
    const amt = parseFloat(document.getElementById('withdrawAmount').value) || 0;
    const cur = selectedWithdrawCurrency;
    const fee = CONFIG.WITHDRAW_FEES[cur];
    const receiveEl = document.getElementById('withdrawReceiveAmount');
    if (receiveEl) {
        if (fee && fee.feeCurrency === cur) receiveEl.textContent = `${formatBalance(amt - fee.fee, cur)} ${cur}`;
        else receiveEl.textContent = `${formatBalance(amt, cur)} ${cur}`;
    }
    validateWithdrawInput();
}

async function submitWithdraw() {
    const cur = selectedWithdrawCurrency;
    const amt = parseFloat(document.getElementById('withdrawAmount').value);
    const addr = document.getElementById('withdrawAddress').value.trim();
    if (amt > (userData.balances[cur] || 0)) { showToast(t('error.insufficientBalance', { currency: cur }), 'error'); return; }
    if (!isValidAddress(addr, cur)) { showToast(t('error.invalidAddress', { currency: cur }), 'error'); return; }
    const fee = CONFIG.WITHDRAW_FEES[cur];
    const withdraw = { id: 'wd_' + Date.now() + '_' + randomId(), userId, username: userName, currency: cur, amount: amt, address: addr, fee: fee?.fee || 0, feeCurrency: fee?.feeCurrency || cur, status: 'pending', timestamp: Date.now() };
    userData.pendingWithdrawals.push(withdraw);
    userData.balances[cur] -= amt;
    if (fee && fee.feeCurrency !== cur) userData.balances[fee.feeCurrency] -= fee.fee;
    if (cur === 'TON') userData.balance = userData.balances.TON;
    userData.totalWithdrawn += amt;
    saveUserToCache();
    if (db) {
        try {
            const docRef = await db.collection('withdrawals').add({ ...withdraw, timestamp: firebase.firestore.FieldValue.serverTimestamp() });
            withdraw.firebaseId = docRef.id;
            startOnDemandListener('withdrawals', docRef.id, data => {
                if (data.status === 'approved') {
                    userData.pendingWithdrawals = userData.pendingWithdrawals.filter(w => w.id !== withdraw.id);
                    userData.completedWithdrawals.push({ ...withdraw, status: 'approved' });
                    saveUserToCache();
                    showToast(t('notif.withdrawApproved', { amount: amt, currency: cur }), 'success');
                } else if (data.status === 'rejected') {
                    userData.balances[cur] += amt;
                    if (fee && fee.feeCurrency !== cur) userData.balances[fee.feeCurrency] += fee.fee;
                    if (cur === 'TON') userData.balance = userData.balances.TON;
                    userData.totalWithdrawn -= amt;
                    userData.pendingWithdrawals = userData.pendingWithdrawals.filter(w => w.id !== withdraw.id);
                    saveUserToCache();
                    showToast(t('notif.withdrawRejected', { reason: data.reason || 'Unknown' }), 'error');
                    updateUI();
                }
            });
            await addNotification(CONFIG.TON.ADMIN_ID, `💸 New withdrawal: ${amt} ${cur}`, 'info');
        } catch (e) {}
    }
    closeModal('withdrawModal');
    showToast(`Withdrawal request submitted`, 'success');
    updateUI();
    document.getElementById('withdrawAmount').value = '';
    document.getElementById('withdrawAddress').value = '';
}

// ====== 38. HISTORY FUNCTIONS ======
let currentHistoryFilter = 'all';

function showHistory() {
    document.getElementById('historyModal').classList.add('show');
    renderHistory('all');
}

function renderHistory(filter = 'all') {
    currentHistoryFilter = filter;
    const list = document.getElementById('historyList');
    if (!list) return;
    let txs = userData.transactions || [];
    if (filter !== 'all') txs = txs.filter(tx => tx.type === filter);
    if (txs.length === 0) { list.innerHTML = '<div class="empty-state"><i class="fa-regular fa-clock"></i><p>No transactions yet</p></div>'; return; }
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
        else if (tx.type === 'daily_bonus') { icon = 'fa-calendar-check'; typeClass = 'bonus'; typeText = 'Daily Bonus'; }
        return `<div class="history-item"><div class="history-item-header"><div class="history-type ${typeClass}"><i class="fas ${icon}"></i><span>${typeText}</span></div><span class="history-date">${d.toLocaleDateString()} ${d.toLocaleTimeString()}</span></div>
            <div class="history-details"><span class="history-amount">${tx.type === 'withdraw' ? '-' : '+'}${formatBalance(tx.amount, tx.currency || 'TON')} ${tx.currency || 'TON'}</span></div>
            ${tx.fromCurrency ? `<div style="font-size: 11px;">${tx.fromCurrency} → ${tx.toCurrency}</div>` : ''}
            ${tx.machine ? `<div style="font-size: 11px;">${tx.machine}</div>` : ''}</div>`;
    }).join('');
}

function filterHistory(filter) {
    document.querySelectorAll('.history-filter').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    renderHistory(filter);
}

async function checkPendingTransactions() {
    if (!db) return;
    for (const d of userData.pendingDeposits?.filter(d => d.firebaseId) || []) {
        try {
            const doc = await db.collection('deposits').doc(d.firebaseId).get();
            if (doc.exists && doc.data().status !== 'pending') {
                userData.pendingDeposits = userData.pendingDeposits.filter(x => x.id !== d.id);
                if (doc.data().status === 'approved') userData.completedDeposits.push({ ...d, status: 'approved' });
            }
        } catch (e) {}
    }
    for (const w of userData.pendingWithdrawals?.filter(w => w.firebaseId) || []) {
        try {
            const doc = await db.collection('withdrawals').doc(w.firebaseId).get();
            if (doc.exists && doc.data().status !== 'pending') {
                userData.pendingWithdrawals = userData.pendingWithdrawals.filter(x => x.id !== w.id);
                if (doc.data().status === 'approved') userData.completedWithdrawals.push({ ...w, status: 'approved' });
            }
        } catch (e) {}
    }
}

function refreshHistory() { checkPendingTransactions().then(() => renderHistory(currentHistoryFilter)); }

// ====== 39. LEADERBOARD ======
let leaderboardCache = { data: null, timestamp: 0 };

async function updateLeaderboard() {
    const el = document.getElementById('leaderboard');
    if (!el) return;
    const now = Date.now();
    if (leaderboardCache.data && now - leaderboardCache.timestamp < CONFIG.CACHE.LEADERBOARD_TTL) { renderLeaderboard(leaderboardCache.data); return; }
    if (!db) {
        const mock = { top: [
            { rank: 1, name: 'CryptoKing', earnings: 12450 },
            { rank: 2, name: 'TonWhale', earnings: 8230 },
            { rank: 3, name: 'MinerPro', earnings: 5670 },
            { rank: 4, name: 'ASICMaster', earnings: 3890 },
            { rank: 5, name: 'QuantumMiner', earnings: 2450 }
        ], userRank: Math.floor(Math.random() * 20) + 10 };
        leaderboardCache = { data: mock, timestamp: now };
        renderLeaderboard(mock);
        return;
    }
    try {
        const snap = await db.collection('users').orderBy('totalEarned', 'desc').limit(10).get();
        const top = [];
        snap.forEach((doc, i) => top.push({ rank: i + 1, name: doc.data().username || 'Miner', earnings: doc.data().totalEarned || 0 }));
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
        let medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : u.rank;
        html += `<div class="leaderboard-item ${i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : ''}">
            <span class="rank">${medal}</span><span class="name">${u.name}</span><span class="earnings">${formatTON(u.earnings)} TON</span>
        </div>`;
    });
    html += `<div class="leaderboard-item you"><span class="rank">${data.userRank}</span><span class="name">You</span><span class="earnings">${formatTON(userData.totalEarned)} TON</span></div>`;
    el.innerHTML = html;
}

// ====== 40. REFERRAL DETAILS ======
function showReferralDetails() { showPage('profile'); }
function renderReferralMilestones() {
    const container = document.getElementById('referralMilestonesContainer');
    if (!container) return;
    let html = '<div class="referral-milestones-grid">';
    REFERRAL_MILESTONES.forEach(m => {
        const progress = Math.min((userData.referrals?.length || 0) / m.referrals * 100, 100);
        const claimed = userData.referralMilestonesClaimed?.includes(m.referrals);
        html += `<div class="milestone-card"><div class="milestone-header"><span class="milestone-count">${m.referrals} referrals</span><span class="milestone-reward">${m.reward} ${m.unit}</span></div>
            <div class="milestone-progress-bar"><div class="milestone-progress-fill" style="width: ${progress}%"></div></div>
            <div class="milestone-stats"><span>${userData.referrals?.length || 0}/${m.referrals}</span>${claimed ? '<span class="claimed-badge">✓ Claimed</span>' : ''}</div></div>`;
    });
    html += '</div>';
    container.innerHTML = html;
    const link = document.getElementById('statsReferralLink');
    if (link) link.value = getReferralLink();
}

function renderReferralTree() {
    const tree = document.getElementById('referralTree');
    if (!tree) return;
    if (!userData.referrals?.length) { tree.innerHTML = '<div class="tree-node">No referrals yet</div>'; return; }
    tree.innerHTML = userData.referrals.slice(0, 10).map(r => `<div class="tree-node"><i class="fas fa-user"></i><span>${r.slice(0, 8)}...</span></div>`).join('');
}

function copyReferralLink() {
    navigator.clipboard.writeText(getReferralLink());
    showToast('Referral link copied', 'success');
}

// ====== 41. PAGE NAVIGATION ======
let currentPage = 'mining';
function showPage(page) {
    currentPage = page;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(page + 'Page').classList.add('active');
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    document.querySelector(`[data-page="${page}"]`).classList.add('active');
    if (page === 'market') renderMarket();
    if (page === 'profile') { renderAchievements(); updateLeaderboard(); renderReferralMilestones(); renderReferralTree(); updateChart(); }
    if (page === 'casino') { updateWheelUI(); updateSlotsUI(); }
    showRandomSticker();
}

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
        const amt = userData.transactions.filter(tx => tx.type === 'mining' && new Date(tx.timestamp).toDateString() === dayStr).reduce((s, tx) => s + tx.amount, 0);
        earnings.push(amt);
    }
    const max = Math.max(...earnings, 0.1);
    chart.innerHTML = days.map((d, i) => `<div class="chart-bar" style="height: ${earnings[i] / max * 100}%;" data-value="${earnings[i].toFixed(2)} TON" data-day="${d}"></div>`).join('');
}

// ====== 42. SAVE TO FIREBASE ======
async function saveToFirebase() {
    if (!db) return;
    try {
        await db.collection('users').doc(userId).set({
            balances: userData.balances, totalEarned: userData.totalEarned, totalWithdrawn: userData.totalWithdrawn,
            totalDeposited: userData.totalDeposited, activeMachine: userData.activeMachine, activePlan: userData.activePlan,
            machineExpiry: userData.machineExpiry, lastClaim: userData.lastClaim, claims: userData.claims,
            streak: userData.streak, longestStreak: userData.longestStreak, lastClaimDate: userData.lastClaimDate,
            upgrades: userData.upgrades, referrals: userData.referrals, referralEarnings: userData.referralEarnings,
            referralCount: userData.referralCount, referralMilestonesClaimed: userData.referralMilestonesClaimed,
            autoClicker: userData.autoClicker, wheel: userData.wheel, slots: userData.slots,
            achievements: userData.achievements, dailyLogin: userData.dailyLogin,
            lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
    } catch (e) {}
}

// ====== 43. MODAL FUNCTIONS ======
function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('show');
    if (id === 'paymentModal') currentPayment = null;
    if (id === 'swapModal') document.getElementById('swapFromAmount').value = '1';
    if (id === 'depositModal') { document.getElementById('depositAmount').value = ''; document.getElementById('depositTxHash').value = ''; }
    if (id === 'withdrawModal') { document.getElementById('withdrawAmount').value = ''; document.getElementById('withdrawAddress').value = ''; }
    if (id === 'wheelModal') { const w = document.getElementById('wheel'); if (w) { w.style.transition = ''; w.style.transform = 'rotate(0deg)'; } }
    if (id === 'slotsModal') { renderSlots(); }
}

function hideAllModals() {
    ['paymentModal','depositModal','withdrawModal','historyModal','notificationsModal','adminModal','swapModal','currencySelectorModal','wheelModal','slotsModal'].forEach(id => {
        const m = document.getElementById(id);
        if (m) m.classList.remove('show');
    });
}

// ====== 44. FILTER MARKET ======
function filterMarket(filter) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    document.querySelectorAll('.showcase-card-legendary').forEach(c => {
        const name = c.querySelector('h3').textContent;
        const m = MACHINES.find(m => m.name === name || m.nameAr === name);
        c.style.display = filter === 'all' || m?.filter === filter ? 'flex' : 'none';
    });
}

// ====== 45. ADMIN FUNCTIONS ======
let currentAdminTab = 'withdrawals';
function showAdminPanel() {
    if (!isAdmin) { showToast('Access denied', 'error'); return; }
    document.getElementById('adminModal').classList.add('show');
    loadAdminCounts();
}
function switchAdminTab(tab) {
    currentAdminTab = tab;
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('adminContent').innerHTML = `<div class="admin-refresh-message"><i class="fas fa-hand-pointer"></i><p>${t('admin.clickRefresh')}</p><button class="admin-refresh-btn" onclick="refreshAdminPanel()"><i class="fas fa-rotate-right"></i><span>${t('admin.refresh')}</span></button></div>`;
}
async function loadAdminCounts() {
    if (!db) return;
    try {
        const [d, w] = await Promise.all([
            db.collection('deposits').where('status', '==', 'pending').get(),
            db.collection('withdrawals').where('status', '==', 'pending').get()
        ]);
        document.getElementById('pendingDepositsCount').textContent = d.size;
        document.getElementById('pendingWithdrawalsCount').textContent = w.size;
    } catch (e) {}
}
async function refreshAdminPanel() {
    if (!isAdmin || !db) return;
    const icon = event.currentTarget.querySelector('i');
    icon.classList.add('fa-spin');
    const content = document.getElementById('adminContent');
    content.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i> Loading...</div>';
    try {
        const col = currentAdminTab === 'withdrawals' ? 'withdrawals' : 'deposits';
        const snap = await db.collection(col).where('status', '==', 'pending').get();
        if (snap.empty) { content.innerHTML = '<div class="empty-state">No pending requests</div>'; return; }
        let html = '';
        snap.forEach(doc => {
            const data = doc.data();
            const d = new Date(data.timestamp?.toDate?.() || data.timestamp);
            if (currentAdminTab === 'withdrawals') {
                html += `<div class="admin-transaction-card"><div class="admin-tx-header"><div class="admin-tx-type withdraw"><i class="fas fa-arrow-up"></i><span>WITHDRAWAL</span></div><span class="admin-tx-status pending">PENDING</span></div>
                    <div class="admin-tx-details"><div class="admin-tx-row"><span class="admin-tx-label">User:</span><span class="admin-tx-value">${data.username || data.userId.slice(0,8)}</span></div>
                    <div class="admin-tx-row"><span class="admin-tx-label">Amount:</span><span class="admin-tx-value">${data.amount} ${data.currency}</span></div>
                    <div class="admin-tx-row"><span class="admin-tx-label">Address:</span><div class="admin-address-container"><code>${formatAddress(data.address)}</code><button class="admin-copy-btn" onclick="copyToClipboard('${data.address}')"><i class="fas fa-copy"></i></button></div></div>
                    ${data.fee ? `<div class="admin-tx-row"><span class="admin-tx-label">Fee:</span><span class="admin-tx-value">${data.fee} ${data.feeCurrency}</span></div>` : ''}
                    <div class="admin-tx-row"><span class="admin-tx-label">Time:</span><span class="admin-tx-value">${d.toLocaleDateString()} ${d.toLocaleTimeString()}</span></div></div>
                    <div class="admin-tx-actions"><button class="admin-approve-btn" onclick="approveRequest('${doc.id}', 'withdraw', ${data.amount}, '${data.userId}', '${data.currency}', ${data.fee || 0}, '${data.feeCurrency || data.currency}')"><i class="fas fa-check"></i> Approve</button>
                    <button class="admin-reject-btn" onclick="rejectRequest('${doc.id}', 'withdraw', ${data.amount}, '${data.userId}', '${data.currency}')"><i class="fas fa-times"></i> Reject</button></div></div>`;
            } else {
                html += `<div class="admin-transaction-card"><div class="admin-tx-header"><div class="admin-tx-type deposit"><i class="fas fa-arrow-down"></i><span>DEPOSIT</span></div><span class="admin-tx-status pending">PENDING</span></div>
                    <div class="admin-tx-details"><div class="admin-tx-row"><span class="admin-tx-label">User:</span><span class="admin-tx-value">${data.username || data.userId.slice(0,8)}</span></div>
                    <div class="admin-tx-row"><span class="admin-tx-label">Amount:</span><span class="admin-tx-value">${data.amount} ${data.currency}</span></div>
                    <div class="admin-tx-row"><span class="admin-tx-label">TXID:</span><div class="admin-address-container"><code>${data.txHash?.slice(0,16)}...</code><button class="admin-copy-btn" onclick="copyToClipboard('${data.txHash}')"><i class="fas fa-copy"></i></button></div></div>
                    <div class="admin-tx-row"><span class="admin-tx-label">Time:</span><span class="admin-tx-value">${d.toLocaleDateString()} ${d.toLocaleTimeString()}</span></div></div>
                    <div class="admin-tx-actions"><button class="admin-approve-btn" onclick="approveRequest('${doc.id}', 'deposit', ${data.amount}, '${data.userId}', '${data.currency}')"><i class="fas fa-check"></i> Approve</button>
                    <button class="admin-reject-btn" onclick="rejectRequest('${doc.id}', 'deposit', ${data.amount}, '${data.userId}', '${data.currency}')"><i class="fas fa-times"></i> Reject</button></div></div>`;
            }
        });
        content.innerHTML = html;
    } catch (e) { content.innerHTML = '<div class="empty-state">Error loading requests</div>'; }
    setTimeout(() => icon.classList.remove('fa-spin'), 500);
}
async function approveRequest(id, type, amount, targetUserId, currency, fee = 0, feeCurrency = currency) {
    if (!isAdmin || !db) return;
    try {
        const col = type === 'deposit' ? 'deposits' : 'withdrawals';
        await db.collection(col).doc(id).update({ status: 'approved', approvedAt: firebase.firestore.FieldValue.serverTimestamp() });
        if (type === 'deposit') await db.collection('users').doc(targetUserId).update({ [`balances.${currency}`]: firebase.firestore.FieldValue.increment(amount), totalDeposited: firebase.firestore.FieldValue.increment(amount) });
        showToast('Request approved', 'success');
        refreshAdminPanel();
    } catch (e) { showToast('Error approving', 'error'); }
}
async function rejectRequest(id, type, amount, targetUserId, currency) {
    if (!isAdmin || !db) return;
    const reason = prompt('Enter rejection reason:');
    if (!reason) return;
    try {
        const col = type === 'deposit' ? 'deposits' : 'withdrawals';
        await db.collection(col).doc(id).update({ status: 'rejected', reason, rejectedAt: firebase.firestore.FieldValue.serverTimestamp() });
        showToast('Request rejected', 'success');
        refreshAdminPanel();
    } catch (e) { showToast('Error rejecting', 'error'); }
}
function copyToClipboard(text) { navigator.clipboard.writeText(text); showToast('Copied!', 'success'); }

// ====== 46. INITIALIZATION ======
document.addEventListener('DOMContentLoaded', async () => {
    hideAllModals();
    if (currentLanguage === 'ar') { document.body.classList.add('rtl'); document.documentElement.dir = 'rtl'; }
    document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = t(el.getAttribute('data-i18n')));
    await loadUserData();
    await loadPrices();
    await initTonConnect();
    startMining();
    updateUI();
    renderMarket();
    updateChart();
    renderAchievements();
    renderReferralMilestones();
    renderWheelSegments();
    renderSlots();
    setupScrollListener();
    setInterval(() => {
        if (!userData.autoClicker?.active) {
            const btn = document.getElementById('autoClickerFloat');
            if (btn) { btn.classList.add('show'); setTimeout(() => btn.classList.remove('show'), 10000); }
        }
    }, 300000);
    setTimeout(() => { document.getElementById('loading').style.opacity = '0'; setTimeout(() => document.getElementById('loading').style.display = 'none', 500); }, 2000);
    startFloatingNotifications();
    setTimeout(showRandomSticker, 1000);
});

function setupScrollListener() {
    const btn = document.getElementById('scrollTopBtn');
    const container = document.querySelector('.main-content');
    container?.addEventListener('scroll', () => btn?.classList.toggle('show', container.scrollTop > 300));
}

setInterval(() => { if (userData) saveUserToCache(); }, 60000);
setInterval(() => { if (userData && db) saveToFirebase(); }, 300000);

window.addEventListener('beforeunload', () => { stopMining(); stopFloatingNotifications(); stopAllListeners(); saveUserToCache(); });
document.addEventListener('visibilitychange', () => {
    if (document.hidden) { stopMining(); stopFloatingNotifications(); }
    else { startMining(); if (currentPage === 'mining') startFloatingNotifications(); }
});

// ====== 47. EXPORT FUNCTIONS ======
window.showPage = showPage;
window.showMarket = ()=>showPage('market');
window.showWallet = ()=>showPage('profile');
window.showHistory = showHistory;
window.showNotifications = showNotifications;
window.showDepositModal = showDepositModal;
window.showWithdrawModal = showWithdrawModal;
window.showSwapModal = showSwapModal;
window.showWheelModal = showWheelModal;
window.showSlotsModal = showSlotsModal;
window.spinWheel = spinWheel;
window.spinSlots = spinSlots;
window.buyAutoClicker = buyAutoClicker;
window.showReferralDetails = showReferralDetails;
window.showAdminPanel = showAdminPanel;
window.closeModal = closeModal;
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
window.rejectRequest = rejectRequest;
window.copyToClipboard = copyToClipboard;
window.handleAvatarClick = handleAvatarClick;

console.log("✅ TON MINING CASINO - ULTIMATE EDITION v40.0 LOADED");
console.log("✅ Features: Mining, Wheel, Slots, Market, Profile, Referral, Daily Bonus, Auto Clicker");
console.log("✅ All systems ready! 🚀");
