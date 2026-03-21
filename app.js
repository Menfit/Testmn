// ============================================
// TON MINING CASINO - ULTIMATE LEGENDARY EDITION v17.0
// جميع الميزات محفوظة + تحسينات كازينو أسطورية
// جاهز للنسخ واللصق
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
        WHEEL_JACKPOT_EVERY: 15,
        WHEEL_BIG_WIN_EVERY: 15,
        SLOTS_SPIN_PRICE: 0.15,
        SLOTS_TURBO_PRICE: 0.30,
        SLOTS_FREE_SPIN_INTERVAL: 12 * 60 * 60 * 1000,
        SLOTS_WIN_RATE: 0.70,
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

// ====== 3. TRANSLATIONS ======
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
        'withdraw.fee': 'Network fee: {fee} {currency}'
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
        'withdraw.fee': 'رسوم الشبكة: {fee} {currency}'
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

// ====== 6. REFERRAL MILESTONES ======
const REFERRAL_MILESTONES = [
    { referrals: 3, reward: 1, unit: 'USDT' },
    { referrals: 10, reward: 5, unit: 'USDT' },
    { referrals: 50, reward: 50, unit: 'USDT' },
    { referrals: 100, reward: 150, unit: 'USDT' },
    { referrals: 250, reward: 300, unit: 'USDT' },
    { referrals: 500, reward: 550, unit: 'USDT' },
    { referrals: 1000, reward: 1200, unit: 'USDT' }
];

// ====== 7. WHEEL PRIZES (ألوان داكنة متناسقة) ======
const WHEEL_PRIZES = [
    { type: 'TON', amount: 0.25, color: '#1e3a5f', weight: 8, icon: '💰', label: '0.25 TON', category: 'ton' },
    { type: 'TON', amount: 0.5, color: '#1e4a6f', weight: 8, icon: '💰', label: '0.5 TON', category: 'ton' },
    { type: 'TON', amount: 1, color: '#1e5a7f', weight: 7, icon: '💰', label: '1 TON', category: 'ton' },
    { type: 'TON', amount: 2, color: '#1e6a8f', weight: 6, icon: '💰', label: '2 TON', category: 'ton' },
    { type: 'USDT', amount: 0.25, color: '#1f5f3f', weight: 8, icon: '💵', label: '0.25 USDT', category: 'usdt' },
    { type: 'USDT', amount: 0.5, color: '#1f6f4f', weight: 8, icon: '💵', label: '0.5 USDT', category: 'usdt' },
    { type: 'USDT', amount: 1, color: '#1f7f5f', weight: 7, icon: '💵', label: '1 USDT', category: 'usdt' },
    { type: 'USDT', amount: 2, color: '#1f8f6f', weight: 6, icon: '💵', label: '2 USDT', category: 'usdt' },
    { type: 'TON', amount: 5, color: '#bf7f2f', weight: 4, icon: '🔥', label: '5 TON', category: 'bigwin' },
    { type: 'TON', amount: 10, color: '#cf8f3f', weight: 3, icon: '🔥', label: '10 TON', category: 'bigwin' },
    { type: 'USDT', amount: 5, color: '#bf7f2f', weight: 4, icon: '🔥', label: '5 USDT', category: 'bigwin' },
    { type: 'USDT', amount: 10, color: '#cf8f3f', weight: 3, icon: '🔥', label: '10 USDT', category: 'bigwin' },
    { type: 'TON', amount: 25, color: '#bf6f1f', weight: 2, icon: '⭐', label: '25 TON', category: 'nicewin' },
    { type: 'USDT', amount: 25, color: '#cf7f2f', weight: 2, icon: '⭐', label: '25 USDT', category: 'nicewin' },
    { type: 'TON', amount: 50, color: '#bf3f1f', weight: 1, icon: '👑', label: '50 TON', category: 'jackpot' },
    { type: 'USDT', amount: 50, color: '#cf4f2f', weight: 1, icon: '👑', label: '50 USDT', category: 'jackpot' },
    { type: 'GOODLUCK', amount: 0, color: '#4a5568', weight: 10, icon: '🍀', label: 'GOOD LUCK', goodluck: true, category: 'goodluck' },
    { type: 'FREESPIN', amount: 0, color: '#8b6fcf', weight: 8, icon: '🆓', label: 'FREE SPIN', freespin: true, category: 'freespin' },
    { type: 'JACKPOT', amount: 100, currency: 'TON', color: '#bf2f1f', weight: 1, icon: '👑', label: '100 TON', jackpot: true, category: 'jackpot' },
    { type: 'JACKPOT', amount: 200, currency: 'USDT', color: '#cf3f2f', weight: 1, icon: '👑', label: '200 USDT', jackpot: true, category: 'jackpot' },
    { type: 'MEGA', amount: 500, currency: 'TON', color: '#df4f1f', weight: 0.5, icon: '💎', label: '500 TON', mega: true, category: 'mega' }
];

// ====== 8. SLOTS SYMBOLS ======
const SLOTS_SYMBOLS_DATA = [
    { symbol: '🍒', weight: 30, value: 0.25, type: 'USDT', color: '#ff4444' },
    { symbol: '🍋', weight: 25, value: 0.25, type: 'USDT', color: '#ffdd00' },
    { symbol: '🍇', weight: 20, value: 0.5, type: 'USDT', color: '#aa44ff' },
    { symbol: '💎', weight: 15, value: 1.0, type: 'USDT', color: '#00f2ff' },
    { symbol: '💰', weight: 10, value: 2.0, type: 'TON', color: '#ffaa00' },
    { symbol: '⭐', weight: 8, value: 5.0, type: 'TON', color: '#ffff00' },
    { symbol: '👑', weight: 5, value: 10.0, type: 'TON', color: '#ffdd00' },
    { symbol: '7️⃣', weight: 3, value: 25.0, type: 'TON', color: '#ff4444' },
    { symbol: '🎰', weight: 1, value: 100, type: 'TON', color: '#ff00ff', jackpot: true }
];

// ====== 9. FIREBASE ======
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

// ====== 10. USER ID ======
const userId = tg?.initDataUnsafe?.user?.id?.toString() || 
               localStorage.getItem('ton_user_id') || 
               'user_' + Math.random().toString(36).substr(2, 9);
const userName = tg?.initDataUnsafe?.user?.first_name || 'Crypto Miner';
const userFirstName = tg?.initDataUnsafe?.user?.first_name || 'Miner';
const userLastName = tg?.initDataUnsafe?.user?.last_name || '';
const userUsername = tg?.initDataUnsafe?.user?.username || '';
const userPhoto = tg?.initDataUnsafe?.user?.photo_url || '';

localStorage.setItem('ton_user_id', userId);

// ====== 11. ADMIN ======
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

// ====== 12. CACHE KEYS ======
const CACHE_KEYS = {
    USER: `user_${userId}`,
    TRANSACTIONS: `transactions_${userId}`,
    PRICES: 'live_prices',
    NOTIFICATIONS: `notifications_${userId}`,
    REFERRAL_PROCESSED: `referral_processed_${userId}`,
    LEADERBOARD: 'leaderboard_cache',
    BACKUPS: 'user_backups'
};

// ====== 13. USER STATE ======
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
    autoClicker: { active: false, expiry: 0, lastAutoClaim: 0 },
    
    wheel: { 
        lastFreeSpin: 0, 
        totalSpins: 0, 
        jackpotCounter: 0,
        bigWinCounter: 0,
        purchasedSpins: 0,
        freeSpins: 0,
        autoSpin: false
    },
    
    slots: { 
        lastFreeSpin: 0, 
        totalSpins: 0, 
        purchasedSpins: 0,
        freeSpins: 0,
        multiplier: 1,
        autoSpin: false
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
    
    dailyLogin: { lastLogin: null, streak: 0 }
};

userData.balance = userData.balances.TON;

// ====== 14. CACHE MANAGEMENT ======
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
        localStorage.setItem(CACHE_KEYS.USER, JSON.stringify({ ...userData, _timestamp: Date.now() }));
        backupUserData();
    } catch (e) {}
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

// ====== 15. ON-DEMAND LISTENERS ======
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

// ====== 16. GAME PAGE NAVIGATION ======
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
    }
    showRandomSticker();
}

function openWheelGame() {
    console.log("🎡 Opening Wheel Game");
    const header = document.getElementById('mainHeader');
    if (header) header.style.display = 'none';
    showPage('wheelGame');
    setTimeout(() => {
        initWheelCanvas();
        updateWheelUI();
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
    }, 100);
}

function exitGame() {
    console.log("🔙 Exiting game");
    const header = document.getElementById('mainHeader');
    if (header) header.style.display = 'flex';
    showPage('casino');
}

function showWallet() {
    showPage('profile');
}

// ====== 17. UTILITIES ======
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

// ====== 18. MINING MANAGER ======
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

function createParticles() {
    const container = document.querySelector('.energy-particles');
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

// ====== 19. AUTO CLICKER ======
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
        lastAutoClaim: Date.now() 
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

// ====== 20. TON CONNECT ======
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

// ====== 21. UI UPDATE ======
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
    
    if (headerBalance) headerBalance.textContent = formatTON(userData.balances.TON);
    if (profileBalance) profileBalance.textContent = formatTON(userData.balances.TON) + ' TON';
    
    const totalUsd = calculateTotalUsd();
    if (profileUsd) profileUsd.textContent = '≈ $' + totalUsd.toFixed(2);
    if (modalUserBalance) modalUserBalance.textContent = formatTON(userData.balances.TON) + ' TON';
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
        return `        <tr><td><i class="fas ${m.icon}" style="color: ${m.color};"></i> ${name}</td>${
            m.plans.map(p => p.price === 0 ? '<td>FREE</td>' : `<td>${p.price} TON<br><small>+${p.returnAmount} TON</small></td>`).join('')
        }</tr>`;
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
    const turbineBtn = document.getElementById('autoClickerTurbine');
    
    if (userData.autoClicker?.active) {
        const timeLeft = userData.autoClicker.expiry - Date.now();
        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (24 * 3600000));
            const hours = Math.floor((timeLeft % (24 * 3600000)) / 3600000);
            if (statusEl) statusEl.style.display = 'flex';
            if (timeEl) timeEl.textContent = `${days}d ${hours}h`;
            if (turbineBtn) turbineBtn.classList.add('active');
        } else {
            userData.autoClicker.active = false;
            saveUserToCache();
            if (statusEl) statusEl.style.display = 'none';
            if (turbineBtn) turbineBtn.classList.remove('active');
        }
    } else {
        if (statusEl) statusEl.style.display = 'none';
        if (turbineBtn) turbineBtn.classList.remove('active');
    }
}

// ====== 22. WIN POPUP (تم استبدالها برسالة علوية، لكن نحتفظ بالدالة للتوافق) ======
function showWinPopup(prize, type = 'normal') {
    // لم تعد مستخدمة – يتم عرض الرسائل العلوية فقط
}

// ====== 23. MARKET FUNCTIONS ======
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

// ====== 24. PAYMENT SYSTEM ======
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

// ====== 25. SWAP SYSTEM ======
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

// ====== 26. DEPOSIT FUNCTIONS ======
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

// ====== 27. WITHDRAW FUNCTIONS ======
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

// ====== 28. HISTORY FUNCTIONS ======
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

// ====== 29. LEADERBOARD ======
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
                { rank: 1, name: 'CryptoKing', earnings: 12450 },
                { rank: 2, name: 'TonWhale', earnings: 8230 },
                { rank: 3, name: 'MinerPro', earnings: 5670 }
            ], 
            userRank: 10 
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
        let medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : u.rank;
        html += `<div class="leaderboard-item ${i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : ''}">
            <span class="rank">${medal}</span><span class="name">${u.name}</span><span class="earnings">${formatTON(u.earnings)} TON</span>
        </div>`;
    });
    html += `<div class="leaderboard-item you"><span class="rank">${data.userRank}</span><span class="name">You</span><span class="earnings">${formatTON(userData.totalEarned)} TON</span></div>`;
    el.innerHTML = html;
}

// ====== 30. REFERRAL MILESTONES ======
function renderReferralMilestones() {
    const container = document.getElementById('referralMilestonesContainer');
    if (!container) return;
    
    let html = '<div class="referral-milestones-grid">';
    REFERRAL_MILESTONES.forEach(m => {
        const progress = Math.min((userData.referrals?.length || 0) / m.referrals * 100, 100);
        const claimed = userData.referralMilestonesClaimed?.includes(m.referrals);
        html += `<div class="milestone-card">
            <div class="milestone-header"><span class="milestone-count">${m.referrals} referrals</span><span class="milestone-reward">${m.reward} ${m.unit}</span></div>
            <div class="milestone-progress-bar"><div class="milestone-progress-fill" style="width: ${progress}%"></div></div>
            <div class="milestone-stats"><span>${userData.referrals?.length || 0}/${m.referrals}</span>${claimed ? '<span class="claimed-badge">✓ Claimed</span>' : ''}</div>
        </div>`;
    });
    html += '</div>';
    container.innerHTML = html;
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

// ====== 31. CHART ======
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

// ====== 32. UPDATE WHEEL UI ======
function updateWheelUI() {
    const freeSpinEl = document.getElementById('wheelFreeSpin');
    const jackpotCounterEl = document.getElementById('wheelJackpotCounter');
    const wheelSpinsEl = document.getElementById('wheelGameSpins');
    
    if (wheelSpinsEl) {
        wheelSpinsEl.textContent = (userData.wheel.purchasedSpins || 0) + (userData.wheel.freeSpins || 0);
    }
    
    if (jackpotCounterEl) {
        const left = CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY - (userData.wheel.jackpotCounter % CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY);
        jackpotCounterEl.textContent = `${left}`;
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
    
    if (slotsSpinsEl) {
        slotsSpinsEl.textContent = (userData.slots.purchasedSpins || 0) + (userData.slots.freeSpins || 0);
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

// ====== 33. WHEEL PACKS (شراء الباقات من محفظة تليجرام) ======
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
        if (typeof VegasAudio !== 'undefined') VegasAudio.purchase();
        
        setTimeout(() => {
            if (!userData.wheel.purchasedSpins) userData.wheel.purchasedSpins = 0;
            userData.wheel.purchasedSpins += totalSpins;
            
            addTransaction('wheel_pack', price, { 
                currency: 'TON', 
                details: `Bought ${pack} pack: ${spins} spins + ${bonus} bonus` 
            });
            
            saveUserToCache();
            showToastPro(t('pack.success', { spins: totalSpins }), 'success');
            updatePurchasedSpinsDisplay();
            updateUI();
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
        if (typeof VegasAudio !== 'undefined') VegasAudio.purchase();
        
        setTimeout(() => {
            if (!userData.slots.purchasedSpins) userData.slots.purchasedSpins = 0;
            userData.slots.purchasedSpins += totalSpins;
            
            addTransaction('slots_pack', price, { 
                currency: 'TON', 
                details: `Bought ${pack} pack: ${spins} spins + ${bonus} bonus` 
            });
            
            saveUserToCache();
            showToastPro(t('pack.success', { spins: totalSpins }), 'success');
            updatePurchasedSpinsDisplay();
            updateUI();
        }, 3000);
        
    } catch (e) {
        console.error("Payment error:", e);
        showToastPro(t('error.payment'), 'error');
    }
}

// ====== 34. SAVE TO FIREBASE ======
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
            lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
    } catch (e) {}
}

// ====== 35. MODAL FUNCTIONS ======
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
    ['paymentModal','depositModal','withdrawModal','historyModal','notificationsModal','adminModal','swapModal','currencySelectorModal','rejectModal'].forEach(id => {
        const m = document.getElementById(id);
        if (m) m.classList.remove('show');
    });
}

// ====== 36. FILTER MARKET ======
function filterMarket(filter) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    document.querySelectorAll('.showcase-card-legendary').forEach(c => {
        const name = c.querySelector('h3')?.textContent || '';
        const m = MACHINES.find(m => m.name === name || m.nameAr === name);
        c.style.display = filter === 'all' || m?.filter === filter ? 'flex' : 'none';
    });
}

// ====== 37. ADMIN FUNCTIONS ======
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

// ====== 38. CLOSE JACKPOT POPUP ======
function closeJackpotPopup() {
    const popup = document.getElementById('jackpotPopup');
    if (popup) {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 300);
    }
}

// ====== 39. PRICES ======
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

// ====== 40. REFERRAL SYSTEM ======
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

// ====== 41. DAILY LOGIN BONUS ======
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

// ====== 42. NOTIFICATION SYSTEM ======
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

// ====== 43. FLOATING NOTIFICATIONS ======
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
        "🤖 Auto Miner bought"
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

// ====== 44. WELCOME STICKER ======
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

// ====== 45. LOAD USER DATA ======
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
        
        updateNotificationBadge();
        checkAdminAndAddCrown();
        checkDailyLogin();
        
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
        if (tg?.initDataUnsafe?.user?.username) {
            userIdEl.textContent = `@${tg.initDataUnsafe.user.username}`;
        } else {
            const shortId = userId.slice(0, 8);
            userIdEl.textContent = `ID: ${shortId}`;
        }
    }
}

// ====== 46. VEGAS ELITE - عجلة الحظ والسلوتس المحسنة (Canvas) ======

// ====== 46.1 VEGAS AUDIO ENGINE - محرك الصوت المتطور ======
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

// ====== 46.2 TICK SEQUENCER - نظام الطقطقة المتدرج (فيزياء الدوران الحقيقية) ======
const TickSequencer = {
    timeouts: [],
    isActive: false,
    
    // توليد طقطقات بناءً على منحنى السرعة: تسارع → سرعة ثابتة → تباطؤ
    playWheelTicks(duration = 2800, onComplete = null) {
        this.clear();
        this.isActive = true;
        
        // تقسيم الوقت إلى مراحل: 0-0.3 تسارع، 0.3-0.7 سرعة ثابتة، 0.7-1 تباطؤ
        const totalTicks = 36;
        const intervals = [];
        for (let i = 0; i < totalTicks; i++) {
            const t = i / totalTicks; // 0..1
            let speedFactor;
            if (t < 0.3) {
                // تسارع خطي
                speedFactor = 0.4 + (t / 0.3) * 1.2;
            } else if (t < 0.7) {
                // سرعة قصوى ثابتة
                speedFactor = 1.6;
            } else {
                // تباطؤ خطي
                speedFactor = 1.6 - ((t - 0.7) / 0.3) * 1.2;
            }
            // المسافة الزمنية بين النقرات تتناسب عكسياً مع سرعة الدوران
            const delay = 55 / Math.max(0.4, speedFactor);
            intervals.push(delay);
        }
        
        let cumulative = 0;
        const tickTimes = [];
        for (let i = 0; i < intervals.length; i++) {
            cumulative += intervals[i];
            tickTimes.push(cumulative);
        }
        
        for (let i = 0; i < tickTimes.length; i++) {
            const timeout = setTimeout(() => {
                if (!this.isActive) return;
                const t = tickTimes[i] / duration;
                const pitch = 0.7 + t * 1.0;
                const volume = 0.08 + (t * 0.1);
                VegasAudio.tick(pitch, volume);
                if (i === tickTimes.length - 1 && onComplete) {
                    setTimeout(onComplete, 50);
                }
            }, tickTimes[i]);
            this.timeouts.push(timeout);
        }
    },
    
    playSlotsTicks(reelIndex, duration = 800, onComplete = null) {
        this.clear();
        this.isActive = true;
        const tickCount = Math.floor(duration / 35);
        let currentTick = 0;
        
        const scheduleTick = () => {
            if (!this.isActive || currentTick >= tickCount) {
                if (onComplete) setTimeout(onComplete, 50);
                this.isActive = false;
                return;
            }
            const t = currentTick / tickCount;
            const pitch = 0.7 + (reelIndex * 0.2) + (t * 0.5);
            const volume = 0.1 - (t * 0.05);
            VegasAudio.tick(pitch, volume);
            currentTick++;
            const nextDelay = 25 + (currentTick * 2);
            const timeout = setTimeout(scheduleTick, nextDelay);
            this.timeouts.push(timeout);
        };
        scheduleTick();
    },
    
    clear() {
        this.isActive = false;
        this.timeouts.forEach(t => clearTimeout(t));
        this.timeouts = [];
    }
};

// ====== 46.3 JACKPOT THEATER - مسرحية الجاكبوت ======
const JackpotTheater = {
    isPlaying: false,
    
    play(amount, currency = 'TON', type = 'jackpot') {
        if (this.isPlaying) return;
        this.isPlaying = true;
        
        const container = document.querySelector('.wheel-game-container, .slots-game-container') || document.body;
        
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
        for (let i = 0; i < 40; i++) {
            const p = document.createElement('div');
            p.className = 'vegas-particle';
            p.style.left = '50%';
            p.style.top = '50%';
            const angle = (i * 9) * Math.PI / 180;
            const distance = 150 + Math.random() * 100;
            p.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
            p.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
            p.style.animationDelay = `${Math.random() * 0.5}s`;
            container.appendChild(p);
            setTimeout(() => p.remove(), 1800);
        }
    }
};

// ====== 46.4 WHEEL GAME - عجلة الحظ المحسنة (نص شعاعي من القلب للحافة، خلفية سوداء، توهج نيون) ======
class WheelGame {
    constructor(canvasId, segments) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            console.warn("Canvas not found, retrying...");
            setTimeout(() => this.constructor(canvasId, segments), 100);
            return;
        }
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
        this.radius = this.width / 2 - 12;
        
        this.segments = segments;
        this.segmentAngle = (2 * Math.PI) / this.segments.length;
        
        this.rotation = 0;
        this.isSpinning = false;
        this.spinStartTime = 0;
        this.spinDuration = 2800;
        this.targetRotation = 0;
        this.animationId = null;
        this.selectedPrize = null;
        
        this.draw();
    }
    
    draw() {
        const ctx = this.ctx;
        const centerX = this.centerX;
        const centerY = this.centerY;
        const radius = this.radius;
        
        ctx.clearRect(0, 0, this.width, this.height);
        
        // خلفية سوداء داكنة مع توهج نيون
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius + 6, 0, 2 * Math.PI);
        ctx.fillStyle = '#000000';
        ctx.fill();
        
        // حلقة خارجية متوهجة
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius + 4, 0, 2 * Math.PI);
        ctx.strokeStyle = '#00f2ff';
        ctx.lineWidth = 2;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#00f2ff';
        ctx.stroke();
        
        for (let i = 0; i < this.segments.length; i++) {
            const seg = this.segments[i];
            const startAngle = i * this.segmentAngle + this.rotation;
            const endAngle = (i + 1) * this.segmentAngle + this.rotation;
            
            // رسم القطاع
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.closePath();
            
            // تدرج داكن مع لون القطاع
            const grad = ctx.createLinearGradient(
                centerX + Math.cos(startAngle) * 15,
                centerY + Math.sin(startAngle) * 15,
                centerX + Math.cos(endAngle) * 15,
                centerY + Math.sin(endAngle) * 15
            );
            grad.addColorStop(0, seg.color);
            grad.addColorStop(1, this.adjustColor(seg.color, -30));
            ctx.fillStyle = grad;
            ctx.fill();
            
            // حدود بين القطاعات متوهجة
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.lineTo(centerX, centerY);
            ctx.strokeStyle = 'rgba(0,242,255,0.6)';
            ctx.lineWidth = 1.5;
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#00f2ff';
            ctx.stroke();
            
            const midAngle = startAngle + this.segmentAngle / 2;
            
            // رسم الأيقونة (ستيكر) في منتصف القطاع (على نصف القطر 40% من المركز)
            const iconRadius = radius * 0.4;
            const iconX = centerX + Math.cos(midAngle) * iconRadius;
            const iconY = centerY + Math.sin(midAngle) * iconRadius;
            ctx.save();
            ctx.translate(iconX, iconY);
            ctx.rotate(midAngle);
            ctx.font = `bold ${Math.floor(radius * 0.12)}px "Segoe UI", "Outfit"`;
            ctx.fillStyle = '#ffffff';
            ctx.shadowBlur = 12;
            ctx.shadowColor = 'rgba(0,242,255,0.8)';
            ctx.fillText(seg.icon, -12, 8);
            ctx.restore();
            
            // رسم النص على طول نصف القطر من 60% إلى 85% (شعاعي) مع تأثير ستيكر
            const textRadius = radius * 0.72;
            const textX = centerX + Math.cos(midAngle) * textRadius;
            const textY = centerY + Math.sin(midAngle) * textRadius;
            ctx.save();
            ctx.translate(textX, textY);
            // ضبط دوران النص ليكون موازياً للشعاع
            let angle = midAngle;
            if (angle > Math.PI / 2 && angle < 3 * Math.PI / 2) {
                angle += Math.PI;
            }
            ctx.rotate(angle);
            ctx.font = `bold ${Math.floor(radius * 0.09)}px "Outfit", "Segoe UI"`;
            ctx.fillStyle = '#fff';
            ctx.shadowBlur = 12;
            ctx.shadowColor = '#00f2ff';
            ctx.fillText(seg.label, -20, 6);
            ctx.restore();
        }
        
        // المركز الداخلي المتألق
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#ffaa00';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.18, 0, 2 * Math.PI);
        const centerGrad = ctx.createRadialGradient(centerX - 5, centerY - 5, 5, centerX, centerY, radius * 0.2);
        centerGrad.addColorStop(0, '#ffdd88');
        centerGrad.addColorStop(1, '#ffaa33');
        ctx.fillStyle = centerGrad;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.12, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffcc66';
        ctx.fill();
        
        ctx.shadowBlur = 0;
    }
    
    adjustColor(hex, percent) {
        return hex;
    }
    
    spin(callback) {
        if (this.isSpinning) return;
        
        // اختيار الجائزة بناءً على الأوزان
        this.selectedPrize = this.selectPrize();
        const prizeIndex = this.segments.indexOf(this.selectedPrize);
        
        // حساب الزاوية المستهدفة لتتوقف العجلة عند منتصف هذا القطاع
        const segmentMidAngle = prizeIndex * this.segmentAngle + this.segmentAngle / 2;
        const currentAngle = this.rotation % (2 * Math.PI);
        let delta = (segmentMidAngle - currentAngle + 2 * Math.PI) % (2 * Math.PI);
        const extraRotations = 6;
        this.targetRotation = this.rotation + extraRotations * 2 * Math.PI + delta;
        
        this.isSpinning = true;
        this.spinStartTime = performance.now();
        this.callback = callback;
        
        // تشغيل الطقطقة المتزامنة مع الحركة
        TickSequencer.playWheelTicks(this.spinDuration, () => {
            VegasAudio.clunk();
        });
        VegasAudio.whoosh();
        
        const animate = (now) => {
            const elapsed = now - this.spinStartTime;
            let t = Math.min(1, elapsed / this.spinDuration);
            // منحنى الحركة: تسارع ثم سرعة ثابتة ثم تباطؤ
            let easeOut;
            if (t < 0.3) {
                // تسارع
                const t2 = t / 0.3;
                easeOut = 0.5 * t2 * t2;
            } else if (t < 0.7) {
                // سرعة ثابتة
                const t2 = (t - 0.3) / 0.4;
                easeOut = 0.5 + 0.5 * t2;
            } else {
                // تباطؤ
                const t2 = (t - 0.7) / 0.3;
                easeOut = 1 - (1 - t2) * (1 - t2);
            }
            const currentRot = this.rotation + (this.targetRotation - this.rotation) * easeOut;
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
                if (this.callback) this.callback(this.selectedPrize);
                if (speedFill) speedFill.style.width = '0%';
            }
        };
        
        this.animationId = requestAnimationFrame(animate);
    }
    
    selectPrize() {
        const totalWeight = this.segments.reduce((s, p) => s + (p.weight || 1), 0);
        let rand = Math.random() * totalWeight;
        for (const prize of this.segments) {
            rand -= (prize.weight || 1);
            if (rand <= 0) return prize;
        }
        return this.segments[0];
    }
}

// ====== 46.5 SLOTS GAME - آلة السلوتس المحسنة (إصلاح شامل) ======
class SlotsGame {
    constructor(canvasIds, symbolsData) {
        this.canvases = canvasIds.map(id => document.getElementById(id));
        this.ctxs = this.canvases.map(c => c?.getContext('2d'));
        this.symbolsData = symbolsData;
        this.symbols = symbolsData.map(s => s.symbol);
        this.values = symbolsData.map(s => ({ value: s.value, type: s.type, color: s.color }));
        
        this.reelPositions = [0, 0, 0];
        this.isSpinning = false;
        this.spinStartTime = 0;
        this.durations = [1100, 1300, 1500];
        this.targetPositions = [0, 0, 0];
        this.currentReel = 0;
        this.animationId = null;
        
        // تأكد من وجود الكانفاسات
        if (this.canvases.some(c => !c)) {
            console.warn("Slots canvases not found, retrying in 200ms");
            setTimeout(() => this.constructor(canvasIds, symbolsData), 200);
            return;
        }
        this.draw();
    }
    
    draw() {
        const symbolHeight = 110;
        for (let r = 0; r < this.canvases.length; r++) {
            const ctx = this.ctxs[r];
            const canvas = this.canvases[r];
            if (!ctx || !canvas) continue;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const pos = this.reelPositions[r];
            for (let i = -1; i <= 1; i++) {
                const idx = (pos + i + this.symbols.length) % this.symbols.length;
                const y = canvas.height / 2 + i * symbolHeight;
                const symbol = this.symbols[idx];
                const color = this.values[idx]?.color || '#ffffff';
                ctx.font = `bold 52px "Segoe UI", "Outfit"`;
                ctx.fillStyle = color;
                ctx.shadowBlur = 10;
                ctx.shadowColor = color;
                ctx.fillText(symbol, canvas.width / 2 - 30, y + 20);
            }
        }
        ctx.shadowBlur = 0;
    }
    
    spin(callback, turbo = false) {
        if (this.isSpinning) {
            console.warn("Spin already in progress");
            return;
        }
        
        const durationMultiplier = turbo ? 0.55 : 1;
        this.durations = this.durations.map(d => d * durationMultiplier);
        
        // توليد مواقع عشوائية للهدف
        for (let i = 0; i < 3; i++) {
            this.targetPositions[i] = (this.reelPositions[i] + Math.floor(Math.random() * 25) + 12) % this.symbols.length;
        }
        
        this.isSpinning = true;
        this.spinStartTime = performance.now();
        this.callback = callback;
        this.currentReel = 0;
        
        VegasAudio.whoosh();
        
        const startReelTick = (reelIndex) => {
            TickSequencer.playSlotsTicks(reelIndex, this.durations[reelIndex] * 0.7, () => {
                if (reelIndex === 2 && this.callback) {
                    const result = this.getResult();
                    setTimeout(() => {
                        if (this.callback) this.callback(result);
                    }, 100);
                }
            });
        };
        
        const animate = (now) => {
            const elapsed = now - this.spinStartTime;
            let allStopped = true;
            
            for (let i = 0; i < 3; i++) {
                const duration = this.durations[i];
                let t = Math.min(1, elapsed / duration);
                
                if (t < 1) {
                    allStopped = false;
                    const step = Math.floor(t * 35) % 25;
                    this.reelPositions[i] = (this.targetPositions[i] + step) % this.symbols.length;
                    
                    // تشغيل صوت الطقطقة عند بدء توقف كل بكرة (مرة واحدة)
                    if (Math.floor(t * 10) === 0 && i === this.currentReel && t < 0.3) {
                        startReelTick(i);
                        this.currentReel++;
                    }
                } else {
                    this.reelPositions[i] = this.targetPositions[i];
                }
            }
            
            this.draw();
            
            if (!allStopped) {
                this.animationId = requestAnimationFrame(animate);
            } else {
                this.isSpinning = false;
                cancelAnimationFrame(this.animationId);
                if (this.callback) {
                    const result = this.getResult();
                    this.callback(result);
                }
            }
        };
        
        this.animationId = requestAnimationFrame(animate);
    }
    
    getResult() {
        const symbols = this.targetPositions.map(idx => this.symbols[idx]);
        const values = this.targetPositions.map(idx => this.values[idx]);
        
        const allSame = symbols[0] === symbols[1] && symbols[1] === symbols[2];
        if (allSame) {
            const prize = values[0];
            return { win: true, amount: prize.value, currency: prize.type, isJackpot: prize.value >= 100 };
        }
        
        const matchCount = (symbols[0] === symbols[1] ? 1 : 0) + 
                          (symbols[1] === symbols[2] ? 1 : 0) + 
                          (symbols[0] === symbols[2] ? 1 : 0);
        if (matchCount >= 1) {
            const matchSymbol = symbols[0] === symbols[1] ? symbols[0] : symbols[1];
            const prize = this.symbolsData.find(s => s.symbol === matchSymbol);
            if (prize && prize.value > 0) {
                return { win: true, amount: prize.value / 2, currency: prize.type, isJackpot: false };
            }
        }
        return { win: false, amount: 0, currency: 'TON', isJackpot: false };
    }
}

// ====== 46.6 INITIALIZATION AND GLOBALS ======
let wheelGame = null;
let slotsGame = null;

function initWheelCanvas() {
    if (wheelGame) return;
    const canvas = document.getElementById('wheelCanvas');
    if (!canvas) {
        setTimeout(initWheelCanvas, 200);
        return;
    }
    wheelGame = new WheelGame('wheelCanvas', WHEEL_PRIZES);
}

function initSlotsCanvas() {
    if (slotsGame) return;
    const canvases = ['reel1Canvas', 'reel2Canvas', 'reel3Canvas'];
    const allExist = canvases.every(id => document.getElementById(id));
    if (!allExist) {
        setTimeout(initSlotsCanvas, 200);
        return;
    }
    slotsGame = new SlotsGame(canvases, SLOTS_SYMBOLS_DATA);
}

// ====== 46.7 SPIN FUNCTIONS ======
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
        } else if (userData.wheel.freeSpins > 0) {
            userData.wheel.freeSpins--;
        } else if (userData.balances.TON >= CONFIG.ECONOMY.WHEEL_SPIN_PRICE) {
            userData.balances.TON -= CONFIG.ECONOMY.WHEEL_SPIN_PRICE;
            userData.balance = userData.balances.TON;
        } else {
            showToastPro(`❌ Need ${CONFIG.ECONOMY.WHEEL_SPIN_PRICE} TON`, 'error');
            return;
        }
    }
    
    wheelGame.spin((prize) => {
        awardVegasPrize(prize);
        userData.wheel.totalSpins++;
        userData.wheel.jackpotCounter = (userData.wheel.jackpotCounter || 0) + 1;
        userData.wheel.bigWinCounter = (userData.wheel.bigWinCounter || 0) + 1;
        saveUserToCache();
        updateWheelUI();
        updateUI();
    });
}

function spinSlotsVegas(isFree, isTurbo) {
    if (!slotsGame) initSlotsCanvas();
    if (slotsGame.isSpinning) {
        console.log("Slots already spinning");
        return;
    }
    
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
        if (userData.slots.purchasedSpins > 0) {
            userData.slots.purchasedSpins--;
        } else if (userData.slots.freeSpins > 0) {
            userData.slots.freeSpins--;
        } else if (userData.balances.TON >= price) {
            userData.balances.TON -= price;
            userData.balance = userData.balances.TON;
        } else {
            showToastPro(`❌ Need ${price} TON`, 'error');
            return;
        }
    }
    
    slotsGame.spin((result) => {
        if (result.win) {
            userData.balances[result.currency] += result.amount;
            if (result.currency === 'TON') userData.balance = userData.balances.TON;
            userData.totalEarned += result.amount;
            addTransaction('slots', result.amount, { currency: result.currency });
            showToastPro(`🎰 You won ${result.amount} ${result.currency}!`, 'success');
            
            const winAmountEl = document.getElementById('slotsWinAmount');
            if (winAmountEl) winAmountEl.textContent = `${result.amount} ${result.currency}`;
            
            // إظهار رسالة الفوز في الجزء العلوي
            let winType = 'normal';
            if (result.isJackpot) winType = 'jackpot';
            else if (result.amount >= 25) winType = 'big';
            showGameWinMessage(result.amount, result.currency, winType);
            
            if (result.isJackpot) {
                JackpotTheater.play(result.amount, result.currency, 'jackpot');
            } else if (result.amount >= 25) {
                JackpotTheater.play(result.amount, result.currency, 'big');
            } else if (result.amount >= 10) {
                VegasAudio.win();
            } else if (result.amount > 0) {
                VegasAudio.coin();
            }
        } else {
            showToastPro('🍀 Try again!', 'info');
            VegasAudio.tick(0.7, 0.08);
        }
        userData.slots.totalSpins++;
        saveUserToCache();
        updateSlotsUI();
        updateUI();
    }, isTurbo);
}

// ====== 46.8 AWARD PRIZE FUNCTION ======
function awardVegasPrize(prize) {
    if (prize.goodluck) {
        showToastPro('🍀 GOOD LUCK! Try again!', 'info');
        VegasAudio.coin();
        userData.wheel.freeSpins = (userData.wheel.freeSpins || 0) + 1;
        saveUserToCache();
        updateWheelUI();
        return;
    }
    if (prize.freespin) {
        showToastPro('🆓 FREE SPIN STORED!', 'success');
        VegasAudio.coin();
        userData.wheel.freeSpins = (userData.wheel.freeSpins || 0) + 1;
        saveUserToCache();
        updateWheelUI();
        return;
    }
    if (prize.jackpot || prize.mega) {
        const currency = prize.currency || prize.type;
        userData.balances[currency] += prize.amount;
        if (currency === 'TON') userData.balance = userData.balances.TON;
        userData.totalEarned += prize.amount;
        addTransaction('wheel', prize.amount, { currency, jackpot: true });
        JackpotTheater.play(prize.amount, currency, prize.mega ? 'mega' : 'jackpot');
        showGameWinMessage(prize.amount, currency, prize.mega ? 'mega' : 'jackpot');
        userData.wheel.jackpotWon = (userData.wheel.jackpotWon || 0) + 1;
        saveUserToCache();
        updateUI();
        updateWheelUI();
        return;
    }
    const currency = prize.type;
    userData.balances[currency] += prize.amount;
    if (currency === 'TON') userData.balance = userData.balances.TON;
    userData.totalEarned += prize.amount;
    addTransaction('wheel', prize.amount, { currency });
    
    let winType = 'normal';
    if (prize.amount >= 25) winType = 'jackpot';
    else if (prize.amount >= 10) winType = 'big';
    showGameWinMessage(prize.amount, currency, winType);
    
    if (prize.amount >= 25) {
        JackpotTheater.play(prize.amount, currency, 'big');
    } else if (prize.amount >= 10) {
        VegasAudio.win();
    } else if (prize.amount > 0) {
        VegasAudio.coin();
    }
    hapticFeedback(prize.amount >= 10 ? 'medium' : 'light');
    saveUserToCache();
    updateUI();
    updateWheelUI();
}

// ====== 46.9 عرض رسائل الفوز أعلى الصفحة (محسنة) ======
function showGameWinMessage(amount, currency, type) {
    const existing = document.querySelector('.game-win-message');
    if (existing) existing.remove();
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `game-win-message ${type}`;
    let text = '';
    let icon = '';
    let bgColor = '#000000aa';
    let borderColor = '#ffd966';
    if (type === 'jackpot') {
        icon = '🎰🎰🎰';
        text = `JACKPOT! ${amount} ${currency}`;
        bgColor = '#ff4444cc';
        borderColor = '#ffaa00';
    } else if (type === 'big') {
        icon = '🔥🔥';
        text = `BIG WIN! ${amount} ${currency}`;
        bgColor = '#ff8800cc';
        borderColor = '#ffdd00';
    } else if (type === 'mega') {
        icon = '👑👑👑';
        text = `MEGA JACKPOT! ${amount} ${currency}`;
        bgColor = '#ff44cccc';
        borderColor = '#ffff00';
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
    messageDiv.style.fontSize = '1.3rem';
    messageDiv.style.whiteSpace = 'nowrap';
    messageDiv.style.backdropFilter = 'blur(8px)';
    messageDiv.style.display = 'flex';
    messageDiv.style.alignItems = 'center';
    messageDiv.style.gap = '12px';
    messageDiv.style.animation = 'slideDownFadeOut 3s ease forwards';
    document.body.appendChild(messageDiv);
    
    if (!document.querySelector('#winMessageStyle')) {
        const style = document.createElement('style');
        style.id = 'winMessageStyle';
        style.textContent = `
            @keyframes slideDownFadeOut {
                0% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
                15% { opacity: 1; transform: translateX(-50%) translateY(0); }
                85% { opacity: 1; transform: translateX(-50%) translateY(0); }
                100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
            }
        `;
        document.head.appendChild(style);
    }
    setTimeout(() => messageDiv.remove(), 3000);
}

// ====== 46.10 TOAST PRO ======
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

// ====== 47. OPEN FUNCTIONS ======
function openProfileFromAnywhere() {
    if (currentPage === 'wheelGame' || currentPage === 'slotsGame') exitGame();
    setTimeout(() => showPage('profile'), 300);
}
function openWithdrawModal() { if (currentPage !== 'profile') openProfileFromAnywhere(); setTimeout(() => showWithdrawModal(), 400); }
function openDepositModal() { if (currentPage !== 'profile') openProfileFromAnywhere(); setTimeout(() => showDepositModal(), 400); }
function openSwapModal() { if (currentPage !== 'profile') openProfileFromAnywhere(); setTimeout(() => showSwapModal(), 400); }
function openHistoryModal() { if (currentPage !== 'profile') openProfileFromAnywhere(); setTimeout(() => showHistory(), 400); }

// ====== 48. INITIALIZATION ======
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
            const btn = document.getElementById('autoClickerTurbine');
            if (btn) { btn.classList.add('show'); setTimeout(() => btn.classList.remove('show'), 10000); }
        }
    }, 300000);
    setTimeout(() => { const loading = document.getElementById('loading'); if (loading) { loading.style.opacity = '0'; setTimeout(() => loading.style.display = 'none', 500); } }, 2000);
    startFloatingNotifications();
    setTimeout(showRandomSticker, 1000);
    updateUserDisplay();
    console.log("✅ TON MINING CASINO - ULTIMATE LEGENDARY EDITION v17.0");
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
document.addEventListener('click', () => { 
    if (typeof VegasAudio !== 'undefined' && !VegasAudio.isInitialized) VegasAudio.init(); 
}, { once: true });

// ====== 49. EXPORT FUNCTIONS ======
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
window.spinSlotsVegas = spinSlotsVegas;
window.showToastPro = showToastPro;
window.openProfileFromAnywhere = openProfileFromAnywhere;
window.openWithdrawModal = openWithdrawModal;
window.openDepositModal = openDepositModal;
window.openSwapModal = openSwapModal;
window.openHistoryModal = openHistoryModal;
