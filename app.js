// ============================================
// TON MINING CASINO - ULTIMATE LEGENDARY EDITION v10.0
// نسخة محسنة نهائية مع عجلة حظ وسلوتس أسطورية
// جميع الميزات الأصلية محفوظة
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
        'wheel.bigwin': '🎡🎡 BIG WIN! {prize}!',
        'wheel.jackpot': '🎡🎡🎡 JACKPOT! {amount} {currency}!',
        'wheel.pack5': '5 Spins',
        'wheel.pack10': '10 Spins +1',
        'wheel.pack50': '50 Spins +5',
        'wheel.pack100': '100 Spins +10',
        'wheel.spinsLeft': '{count} spins until jackpot',
        'wheel.jackpotTimer': '{count}/{total}',
        'wheel.streak': '{days} DAYS | BEST: {best}',
        'wheel.goodLuck': 'Good Luck!',
        
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
        'win.big': '🌟🌟 BIG WIN! 🌟🌟',
        'win.jackpot': '🎰🎰🎰 JACKPOT! 🎰🎰🎰',
        
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
        'wheel.bigwin': '🎡🎡 فوز كبير! {prize}!',
        'wheel.jackpot': '🎡🎡🎡 جاكبوت! {amount} {currency}!',
        'wheel.pack5': '5 لفات',
        'wheel.pack10': '10 لفات +1',
        'wheel.pack50': '50 لفة +5',
        'wheel.pack100': '100 لفة +10',
        'wheel.spinsLeft': '{count} لفة حتى الجاكبوت',
        'wheel.jackpotTimer': '{count}/{total}',
        'wheel.streak': '{days} يوم | الأفضل: {best}',
        'wheel.goodLuck': 'حظ سعيد!',
        
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
        'win.big': '🌟🌟 فوز كبير! 🌟🌟',
        'win.jackpot': '🎰🎰🎰 جاكبوت! 🎰🎰🎰',
        
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

// ====== 7. WHEEL PRIZES ======
const WHEEL_PRIZES = [
    { id: 1, type: 'TON', amount: 0.25, color: '#0088cc', weight: 8, icon: '💰', label: '0.25' },
    { id: 2, type: 'TON', amount: 0.5, color: '#0088cc', weight: 7, icon: '💰', label: '0.5' },
    { id: 3, type: 'TON', amount: 1, color: '#0088cc', weight: 6, icon: '💰', label: '1' },
    { id: 4, type: 'TON', amount: 2, color: '#0088cc', weight: 5, icon: '💰', label: '2' },
    { id: 5, type: 'TON', amount: 5, color: '#0088cc', weight: 4, icon: '💰', label: '5' },
    { id: 6, type: 'TON', amount: 10, color: '#0088cc', weight: 3, icon: '💰', label: '10' },
    
    { id: 7, type: 'USDT', amount: 0.25, color: '#22c55e', weight: 8, icon: '💵', label: '0.25' },
    { id: 8, type: 'USDT', amount: 0.5, color: '#22c55e', weight: 7, icon: '💵', label: '0.5' },
    { id: 9, type: 'USDT', amount: 1, color: '#22c55e', weight: 6, icon: '💵', label: '1' },
    { id: 10, type: 'USDT', amount: 2, color: '#22c55e', weight: 5, icon: '💵', label: '2' },
    { id: 11, type: 'USDT', amount: 5, color: '#22c55e', weight: 4, icon: '💵', label: '5' },
    { id: 12, type: 'USDT', amount: 10, color: '#22c55e', weight: 3, icon: '💵', label: '10' },
    { id: 13, type: 'USDT', amount: 250, color: '#22c55e', weight: 2, icon: '💎', label: '250' },
    { id: 14, type: 'USDT', amount: 500, color: '#22c55e', weight: 1, icon: '💎', label: '500' },
    
    { id: 15, type: 'JACKPOT', amount: 100, currency: 'TON', color: '#ef4444', weight: 1, icon: '👑', label: '100 TON', jackpot: true },
    { id: 16, type: 'JACKPOT', amount: 250, currency: 'USDT', color: '#ef4444', weight: 1, icon: '👑', label: '250 USDT', jackpot: true },
    { id: 17, type: 'JACKPOT', amount: 500, currency: 'USDT', color: '#ef4444', weight: 1, icon: '👑', label: '500 USDT', jackpot: true },
    
    { id: 18, type: 'GOODLUCK', amount: 0, color: '#94a3b8', weight: 15, icon: '🍀', label: 'GOOD LUCK', goodluck: true }
];

// ====== 8. SLOTS SYMBOLS ======
const SLOTS_SYMBOLS_DATA = [
    { symbol: '🍒', weight: 30, value: 0.25, type: 'USDT', color: '#ff4444' },
    { symbol: '🍋', weight: 25, value: 0.25, type: 'USDT', color: '#ffdd00' },
    { symbol: '🍇', weight: 20, value: 0.5, type: 'USDT', color: '#aa44ff' },
    { symbol: '💎', weight: 15, value: 1.0, type: 'USDT', color: '#00f2ff' },
    { symbol: '💰', weight: 8, value: 2.0, type: 'TON', color: '#ffaa00' },
    { symbol: '⭐', weight: 5, value: 5.0, type: 'TON', color: '#ffff00' },
    { symbol: '👑', weight: 3, value: 10.0, type: 'TON', color: '#ffdd00' },
    { symbol: '7️⃣', weight: 2, value: 25.0, type: 'TON', color: '#ff4444' },
    { symbol: '🎰', weight: 0.5, value: 100, type: 'TON', color: '#ff00ff', jackpot: true }
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
    WHEEL: `wheel_${userId}`,
    SLOTS: `slots_${userId}`,
    AUTO_CLICKER: `autoclicker_${userId}`,
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
        spinsToday: 0, 
        lastFreeSpin: 0, 
        totalSpins: 0, 
        jackpotCounter: 0, 
        jackpotWon: 0, 
        lastWin: null, 
        spinHistory: [],
        purchasedSpins: 0,
        autoSpin: false,
        autoSpinCount: 0,
        packs: { p5: 0, p10: 0, p50: 0, p100: 0 }
    },
    
    slots: { 
        spinsToday: 0, 
        lastFreeSpin: 0, 
        totalSpins: 0, 
        lastWin: null, 
        spinHistory: [],
        purchasedSpins: 0,
        autoSpin: false,
        autoSpinCount: 0,
        packs: { p5: 0, p10: 0, p50: 0, p100: 0 }
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
    document.getElementById(page + 'Page').classList.add('active');
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    document.querySelector(`[data-page="${page}"]`).classList.add('active');
    currentPage = page;
    
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

function showWheelGamePage() {
    showPage('wheelGame');
    initWheelVegas();
    updateWheelVegasUI();
}

function showSlotsGamePage() {
    showPage('slotsGame');
    initSlotsVegas();
    updateSlotsVegasUI();
}

function exitGame() {
    showPage('casino');
}

function showWallet() {
    showPage('profile');
}

// ====== 17. UTILITIES ======
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

function hapticFeedback(type = 'light') {
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
        await addNotification(referrerId, t('notif.referralMiningBonus', { amount: bonus.toFixed(4) }), 'success');
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
    const paymentStatus = document.getElementById('paymentWalletStatus');
    const modalUserBalance = document.getElementById('modalUserBalance');
    
    if (modalUserBalance) modalUserBalance.textContent = formatBalance(userData.balances.TON || 0, 'TON') + ' TON';
    
    if (tonWallet) {
        if (statusEl) statusEl.innerHTML = `<div class="status-indicator online"></div><span>Connected</span>`;
        if (paymentStatus) paymentStatus.innerHTML = `<div class="status online"><i class="fas fa-circle"></i><span>Connected</span></div>`;
        if (infoEl) infoEl.style.display = 'flex';
        if (addressEl) addressEl.textContent = formatAddress(tonWallet.account.address);
        if (modalInfo) modalInfo.style.display = 'flex';
        if (modalAddress) modalAddress.textContent = formatAddress(tonWallet.account.address);
        if (payBtn) payBtn.disabled = false;
        if (depositBtn) depositBtn.disabled = false;
    } else {
        if (statusEl) statusEl.innerHTML = `<div class="status-indicator offline"></div><span>Disconnected</span>`;
        if (paymentStatus) paymentStatus.innerHTML = `<div class="status offline"><i class="fas fa-circle"></i><span>Not connected</span></div>`;
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
    const hashRate = document.getElementById('hashRate');
    const streakCount = document.getElementById('streakCount');
    const totalEarned = document.getElementById('totalEarned');
    const bestStreak = document.getElementById('bestStreak');
    const miningDays = document.getElementById('miningDays');
    const yourEarnings = document.getElementById('yourEarnings');
    const totalReferralsStats = document.getElementById('totalReferralsStats');
    const machine = getActiveMachine();
    
    if (hashRate) hashRate.textContent = machine.hashrate.split(' ')[0];
    if (streakCount) streakCount.textContent = userData.streak;
    if (totalEarned) totalEarned.textContent = formatTON(userData.totalEarned);
    if (bestStreak) bestStreak.textContent = userData.longestStreak;
    if (miningDays) miningDays.textContent = Math.floor(userData.claims / 6) || 1;
    if (totalReferralsStats) totalReferralsStats.textContent = userData.referrals?.length || 0;
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
        else if (tx.type === 'daily_bonus') { icon = 'fa-calendar-check'; title = 'Daily Bonus'; }
        
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

// ====== 22. WIN POPUP ======
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
    
    if (type === 'jackpot') {
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
    document.getElementById('paymentDuration').textContent = plan.durationText || plan.duration + ' days';
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
    hapticFeedback('success');
    updateUI();
    if (db) saveToFirebase();
}

function rentWithBalance(machineId, planIndex) {
    const machine = MACHINES.find(m => m.id === machineId);
    const plan = machine.plans[planIndex];
    if (userData.balances.TON < plan.price) { 
        showToast(t('error.insufficientBalance', { currency: 'TON' }), 'error'); 
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
    if (fromBal) fromBal.textContent = `Balance: ${formatBalance(userData.balances[swapFromCurrency] || 0, swapFromCurrency)}`;
    if (toBal) toBal.textContent = `Balance: ${formatBalance(userData.balances[swapToCurrency] || 0, swapToCurrency)}`;
}

function showCurrencySelector(type) {
    swapMode = type;
    const list = document.getElementById('currencyList');
    list.innerHTML = CONFIG.SWAP_CURRENCIES.map(a => 
        `<div class="currency-list-item" onclick="selectCurrency('${a.symbol}')">
            <img src="${CONFIG.CMC_ICONS[a.symbol]}" alt="${a.symbol}">
            <div class="currency-info"><h4>${a.name}</h4><p>${a.symbol}</p></div>
        </div>`
    ).join('');
    document.getElementById('currencySelectorModal').classList.add('show');
}

function selectCurrency(symbol) {
    if (swapMode === 'from') { 
        swapFromCurrency = symbol; 
        document.getElementById('swapFromCurrency').textContent = symbol; 
        document.getElementById('swapFromIcon').src = CONFIG.CMC_ICONS[symbol]; 
    } else { 
        swapToCurrency = symbol; 
        document.getElementById('swapToCurrency').textContent = symbol; 
        document.getElementById('swapToIcon').src = CONFIG.CMC_ICONS[symbol]; 
    }
    closeModal('currencySelectorModal');
    updateSwapBalances();
    calculateSwap();
}

function filterCurrencies() {
    const term = document.getElementById('currencySearch').value.toLowerCase();
    document.querySelectorAll('.currency-list-item').forEach(i => {
        i.style.display = i.textContent.toLowerCase().includes(term) ? 'flex' : 'none';
    });
}

function flipSwap() {
    [swapFromCurrency, swapToCurrency] = [swapToCurrency, swapFromCurrency];
    document.getElementById('swapFromCurrency').textContent = swapFromCurrency;
    document.getElementById('swapToCurrency').textContent = swapToCurrency;
    document.getElementById('swapFromIcon').src = CONFIG.CMC_ICONS[swapFromCurrency];
    document.getElementById('swapToIcon').src = CONFIG.CMC_ICONS[swapToCurrency];
    updateSwapBalances();
    calculateSwap();
    animateElement('.swap-switch i', 'pop');
}

function calculateSwap() {
    const from = parseFloat(document.getElementById('swapFromAmount').value) || 0;
    const toEl = document.getElementById('swapToAmount');
    const rateEl = document.getElementById('swapRate');
    
    const fromPrice = swapFromCurrency === 'USDT' ? 1 : (livePrices[swapFromCurrency]?.price || 0);
    const toPrice = swapToCurrency === 'USDT' ? 1 : (livePrices[swapToCurrency]?.price || 0);
    
    if (fromPrice > 0 && toPrice > 0) {
        const rate = fromPrice / toPrice;
        toEl.value = (from * rate).toFixed(6);
        rateEl.textContent = `1 ${swapFromCurrency} = ${rate.toFixed(6)} ${swapToCurrency}`;
    } else {
        toEl.value = '0';
        rateEl.textContent = 'Rate unavailable';
    }
}

function confirmSwap() {
    const from = parseFloat(document.getElementById('swapFromAmount').value);
    const fromBal = userData.balances[swapFromCurrency] || 0;
    
    if (!from || from <= 0) { showToast(t('error.enterAmount'), 'error'); return; }
    if (from > fromBal) { showToast(t('error.insufficientBalance', { currency: swapFromCurrency }), 'error'); return; }
    
    const to = parseFloat(document.getElementById('swapToAmount').value);
    
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
    const select = document.getElementById('depositCurrencySelect');
    select.innerHTML = CONFIG.ALL_ASSETS.map(a => 
        `<option value="${a.symbol}" ${a.symbol === selectedDepositCurrency ? 'selected' : ''}>${a.name} (${a.symbol})</option>`
    ).join('');
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
    
    if (!amt || amt <= 0 || !hash) { 
        if (hint) { hint.textContent = 'Enter amount and hash'; hint.className = 'validation-hint invalid'; } 
        btn.disabled = true; 
        return; 
    }
    
    const min = CONFIG.DEPOSIT_MINIMUMS[cur] || 1;
    if (amt < min) { 
        hint.textContent = `Minimum is ${min} ${cur}`; 
        hint.className = 'validation-hint invalid'; 
        btn.disabled = true; 
        return; 
    }
    
    if (!validateTransactionHash(hash, cur)) { 
        hint.textContent = `Invalid ${cur} hash`; 
        hint.className = 'validation-hint invalid'; 
        btn.disabled = true; 
        return; 
    }
    
    if (userData.usedHashes?.includes(hash.toLowerCase())) { 
        hint.textContent = 'Hash already used'; 
        hint.className = 'validation-hint invalid'; 
        btn.disabled = true; 
        return; 
    }
    
    hint.textContent = '✓ Valid'; 
    hint.className = 'validation-hint valid';
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
            
            const allTxs = loadLocalTransactions();
            const txIndex = allTxs.findIndex(t => t.id === deposit.id);
            if (txIndex !== -1) {
                allTxs[txIndex].firebaseId = docRef.id;
                saveLocalTransactions(allTxs);
            }
            
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
    document.getElementById('depositAmount').value = '';
    document.getElementById('depositTxHash').value = '';
    
    addTransaction('deposit', amt, { currency: cur, txHash: hash, status: 'pending' });
}

// ====== 27. WITHDRAW FUNCTIONS ======
let selectedWithdrawNetwork = 'BEP20';

function showWithdrawModal() {
    const select = document.getElementById('withdrawNetworkSelect');
    if (select) {
        select.innerHTML = CONFIG.WITHDRAW_NETWORKS.USDT.map(net => 
            `<option value="${net.value}" ${net.value === selectedWithdrawNetwork ? 'selected' : ''}>${net.name}</option>`
        ).join('');
    }
    updateWithdrawInfo();
    document.getElementById('withdrawModal').classList.add('show');
}

function updateWithdrawInfo() {
    const netValue = document.getElementById('withdrawNetworkSelect')?.value || selectedWithdrawNetwork;
    selectedWithdrawNetwork = netValue;
    
    const network = CONFIG.WITHDRAW_NETWORKS.USDT.find(n => n.value === netValue);
    const fee = network ? network.fee : 0.0005;
    const feeCurrency = network ? network.feeCurrency : 'BNB';
    
    const bal = userData.balances.USDT || 0;
    document.getElementById('withdrawBalance').textContent = `${formatBalance(bal, 'USDT')} USDT`;
    document.getElementById('withdrawIcon').src = CONFIG.CMC_ICONS.USDT;
    
    const feeEl = document.getElementById('withdrawFeeInfo');
    if (feeEl) feeEl.innerHTML = t('withdraw.fee', { fee, currency: feeCurrency });
    
    const feeCurrencyBalance = userData.balances[feeCurrency] || 0;
    const feeBalanceEl = document.getElementById('withdrawFeeCurrencyBalance');
    if (feeBalanceEl) {
        feeBalanceEl.textContent = `Your ${feeCurrency} balance: ${formatBalance(feeCurrencyBalance, feeCurrency)} ${feeCurrency}`;
    }
    
    validateWithdrawInput();
}

function validateWithdrawInput() {
    const amt = parseFloat(document.getElementById('withdrawAmount').value);
    const addr = document.getElementById('withdrawAddress').value.trim();
    const netValue = selectedWithdrawNetwork;
    const network = CONFIG.WITHDRAW_NETWORKS.USDT.find(n => n.value === netValue);
    const fee = network ? network.fee : 0.0005;
    const feeCurrency = network ? network.feeCurrency : 'BNB';
    
    const hint = document.getElementById('withdrawAddressHint');
    const btn = document.getElementById('submitWithdraw');
    
    if (!amt || amt <= 0 || !addr) { 
        if (hint) { hint.textContent = 'Enter amount and address'; hint.className = 'validation-hint invalid'; } 
        btn.disabled = true; 
        return; 
    }
    
    const bal = userData.balances.USDT || 0;
    if (amt > bal) { 
        hint.textContent = 'Insufficient USDT balance'; 
        hint.className = 'validation-hint invalid'; 
        btn.disabled = true; 
        return; 
    }
    
    const feeCurrencyBalance = userData.balances[feeCurrency] || 0;
    if (feeCurrencyBalance < fee) {
        hint.textContent = `Insufficient ${feeCurrency} for fee. Need ${fee} ${feeCurrency}`; 
        hint.className = 'validation-hint invalid'; 
        btn.disabled = true; 
        return;
    }
    
    if (!addr.startsWith('0x') || addr.length !== 42) {
        hint.textContent = `Invalid address format. Must start with 0x and be 42 characters`; 
        hint.className = 'validation-hint invalid'; 
        btn.disabled = true; 
        return;
    }
    
    hint.textContent = '✓ Valid'; 
    hint.className = 'validation-hint valid';
    btn.disabled = false;
}

function updateWithdrawAmount() {
    const amt = parseFloat(document.getElementById('withdrawAmount').value) || 0;
    const netValue = document.getElementById('withdrawNetworkSelect')?.value || selectedWithdrawNetwork;
    const network = CONFIG.WITHDRAW_NETWORKS.USDT.find(n => n.value === netValue);
    const fee = network ? network.fee : 0.0005;
    
    const receiveEl = document.getElementById('withdrawReceiveAmount');
    if (receiveEl) {
        receiveEl.textContent = `${formatBalance(amt - fee, 'USDT')} USDT`;
    }
    validateWithdrawInput();
}

async function submitWithdraw() {
    const amt = parseFloat(document.getElementById('withdrawAmount').value);
    const addr = document.getElementById('withdrawAddress').value.trim();
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
    document.getElementById('withdrawAmount').value = '';
    document.getElementById('withdrawAddress').value = '';
    
    addTransaction('withdraw', amt, { currency: 'USDT', address: addr, network: netValue, fee, feeCurrency, status: 'pending' });
}

// ====== 28. HISTORY FUNCTIONS ======
let currentHistoryFilter = 'all';

function showHistory() {
    document.getElementById('historyModal').classList.add('show');
    renderHistory('all');
    checkPendingTransactions();
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
        else if (tx.type === 'daily_bonus') { icon = 'fa-calendar-check'; typeClass = 'bonus'; typeText = 'Daily Bonus'; }
        else if (tx.type === 'wheel_pack') { icon = 'fa-ticket'; typeClass = 'pack'; typeText = 'Wheel Pack'; }
        else if (tx.type === 'slots_pack') { icon = 'fa-ticket'; typeClass = 'pack'; typeText = 'Slots Pack'; }
        
        let statusHtml = '';
        if (tx.status && tx.status !== 'completed') {
            let statusClass = tx.status === 'pending' ? 'pending' : 'rejected';
            statusHtml = `<span class="history-status ${statusClass}">${tx.status}</span>`;
        }
        
        let detailsHtml = '';
        if (tx.network) detailsHtml += `<div style="font-size: 10px;">Network: ${tx.network}</div>`;
        if (tx.fromCurrency) detailsHtml += `<div style="font-size: 10px;">${tx.fromCurrency} → ${tx.toCurrency}</div>`;
        if (tx.machine) detailsHtml += `<div style="font-size: 10px;">${tx.machine}</div>`;
        if (tx.details) detailsHtml += `<div style="font-size: 10px;">${tx.details}</div>`;
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
    event.target.classList.add('active');
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
                    
                    const allTxs = loadLocalTransactions();
                    const txIndex = allTxs.findIndex(t => t.id === d.id);
                    if (txIndex !== -1) {
                        allTxs[txIndex].status = 'approved';
                        saveLocalTransactions(allTxs);
                    }
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
                    
                    const allTxs = loadLocalTransactions();
                    const txIndex = allTxs.findIndex(t => t.id === w.id);
                    if (txIndex !== -1) {
                        allTxs[txIndex].status = 'approved';
                        saveLocalTransactions(allTxs);
                    }
                    
                } else if (data.status === 'rejected') {
                    userData.balances[w.currency] += w.amount;
                    if (w.fee && w.feeCurrency) {
                        userData.balances[w.feeCurrency] += w.fee;
                    }
                    userData.totalWithdrawn -= w.amount;
                    
                    showToast(t('notif.withdrawRejected', { reason: data.reason || 'Unknown' }), 'error');
                    
                    const allTxs = loadLocalTransactions();
                    const txIndex = allTxs.findIndex(t => t.id === w.id);
                    if (txIndex !== -1) {
                        allTxs[txIndex].status = 'rejected';
                        allTxs[txIndex].reason = data.reason;
                        saveLocalTransactions(allTxs);
                    }
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
                { rank: 3, name: 'MinerPro', earnings: 5670 },
                { rank: 4, name: 'ASICMaster', earnings: 3890 },
                { rank: 5, name: 'QuantumMiner', earnings: 2450 }
            ], 
            userRank: Math.floor(Math.random() * 20) + 10 
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
    const spinsLeftEl = document.getElementById('wheelSpinsLeft');
    const freeSpinEl = document.getElementById('wheelFreeSpin');
    const jackpotCounterEl = document.getElementById('wheelJackpotCounter');
    const streakDisplay = document.getElementById('wheelStreakDisplay');
    const purchasedSpinsEl = document.getElementById('wheelModalPurchasedSpins');
    
    if (spinsLeftEl) {
        const left = CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY - (userData.wheel.jackpotCounter % CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY);
        spinsLeftEl.textContent = t('wheel.spinsLeft', { count: left });
    }
    
    if (jackpotCounterEl) {
        jackpotCounterEl.textContent = t('wheel.jackpotTimer', { 
            count: userData.wheel.jackpotCounter % CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY,
            total: CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY
        });
    }
    
    if (streakDisplay) {
        streakDisplay.textContent = t('wheel.streak', { 
            days: userData.streak, 
            best: userData.longestStreak 
        });
    }
    
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
    
    if (purchasedSpinsEl) {
        const spinCount = purchasedSpinsEl.querySelector('.spin-count');
        if (spinCount) spinCount.textContent = userData.wheel.purchasedSpins || 0;
    }
    
    const autoSpinCheckbox = document.getElementById('wheelModalAutoSpin');
    if (autoSpinCheckbox) {
        autoSpinCheckbox.checked = userData.wheel.autoSpin || false;
    }
    
    const wheelPurchasedSpins = document.getElementById('wheelPurchasedSpins');
    if (wheelPurchasedSpins) {
        wheelPurchasedSpins.innerHTML = `Your spins: <span class="spin-count">${userData.wheel.purchasedSpins || 0}</span>`;
    }
}

// ====== 33. UPDATE SLOTS UI ======
function updateSlotsUI() {
    const freeSpinEl = document.getElementById('slotsFreeSpin');
    const purchasedSpinsEl = document.getElementById('slotsModalPurchasedSpins');
    
    if (freeSpinEl) {
        const now = Date.now();
        const next = userData.slots.lastFreeSpin + CONFIG.ECONOMY.SLOTS_FREE_SPIN_INTERVAL;
        if (now < next) {
            const left = next - now;
            const h = Math.floor(left / 3600000);
            const m = Math.floor((left % 3600000) / 60000);
            freeSpinEl.innerHTML = `<i class="fas fa-clock"></i> ${h}h ${m}m`;
            freeSpinEl.classList.add('disabled');
        } else {
            freeSpinEl.innerHTML = `<i class="fas fa-gift"></i> FREE`;
            freeSpinEl.classList.remove('disabled');
        }
    }
    
    if (purchasedSpinsEl) {
        const spinCount = purchasedSpinsEl.querySelector('.spin-count');
        if (spinCount) spinCount.textContent = userData.slots.purchasedSpins || 0;
    }
    
    const autoSpinCheckbox = document.getElementById('slotsModalAutoSpin');
    if (autoSpinCheckbox) {
        autoSpinCheckbox.checked = userData.slots.autoSpin || false;
    }
    
    const slotsPurchasedSpins = document.getElementById('slotsPurchasedSpins');
    if (slotsPurchasedSpins) {
        slotsPurchasedSpins.innerHTML = `Your spins: <span class="spin-count">${userData.slots.purchasedSpins || 0}</span>`;
    }
}

// ====== 34. UPDATE PURCHASED SPINS ======
function updatePurchasedSpinsDisplay() {
    const wheelSpins = document.getElementById('wheelPurchasedSpins');
    const wheelModalSpins = document.getElementById('wheelModalPurchasedSpins');
    const slotsSpins = document.getElementById('slotsPurchasedSpins');
    const slotsModalSpins = document.getElementById('slotsModalPurchasedSpins');
    
    if (wheelSpins) {
        wheelSpins.innerHTML = `Your spins: <span class="spin-count">${userData.wheel.purchasedSpins || 0}</span>`;
    }
    if (wheelModalSpins) {
        const spinCount = wheelModalSpins.querySelector('.spin-count');
        if (spinCount) spinCount.textContent = userData.wheel.purchasedSpins || 0;
    }
    if (slotsSpins) {
        slotsSpins.innerHTML = `Your spins: <span class="spin-count">${userData.slots.purchasedSpins || 0}</span>`;
    }
    if (slotsModalSpins) {
        const spinCount = slotsModalSpins.querySelector('.spin-count');
        if (spinCount) spinCount.textContent = userData.slots.purchasedSpins || 0;
    }
}

// ====== 35. WHEEL PACKS ======
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
        showToast('Opening wallet...', 'info');
        
        const tx = {
            validUntil: Date.now() + 600000,
            messages: [{
                address: CONFIG.TON.WALLET,
                amount: (price * 1e9).toString()
            }]
        };
        
        const result = await tonConnectUI.sendTransaction(tx);
        
        showToast('Payment sent! Waiting for confirmation...', 'info');
        
        setTimeout(() => {
            if (!userData.wheel.purchasedSpins) userData.wheel.purchasedSpins = 0;
            userData.wheel.purchasedSpins += totalSpins;
            
            addTransaction('wheel_pack', price, { 
                currency: 'TON', 
                details: `Bought ${pack} pack: ${spins} spins + ${bonus} bonus` 
            });
            
            saveUserToCache();
            showToast(t('pack.success', { spins: totalSpins }), 'success');
            updatePurchasedSpinsDisplay();
            updateUI();
        }, 3000);
        
    } catch (e) {
        console.error("Payment error:", e);
        showToast(t('error.payment'), 'error');
    }
}

// ====== 36. SLOTS PACKS ======
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
        showToast('Opening wallet...', 'info');
        
        const tx = {
            validUntil: Date.now() + 600000,
            messages: [{
                address: CONFIG.TON.WALLET,
                amount: (price * 1e9).toString()
            }]
        };
        
        const result = await tonConnectUI.sendTransaction(tx);
        
        showToast('Payment sent! Waiting for confirmation...', 'info');
        
        setTimeout(() => {
            if (!userData.slots.purchasedSpins) userData.slots.purchasedSpins = 0;
            userData.slots.purchasedSpins += totalSpins;
            
            addTransaction('slots_pack', price, { 
                currency: 'TON', 
                details: `Bought ${pack} pack: ${spins} spins + ${bonus} bonus` 
            });
            
            saveUserToCache();
            showToast(t('pack.success', { spins: totalSpins }), 'success');
            updatePurchasedSpinsDisplay();
            updateUI();
        }, 3000);
        
    } catch (e) {
        console.error("Payment error:", e);
        showToast(t('error.payment'), 'error');
    }
}

// ====== 37. SAVE TO FIREBASE ======
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

// ====== 38. MODAL FUNCTIONS ======
function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('show');
    
    if (id === 'paymentModal') currentPayment = null;
    if (id === 'swapModal') document.getElementById('swapFromAmount').value = '1';
    if (id === 'depositModal') { 
        document.getElementById('depositAmount').value = ''; 
        document.getElementById('depositTxHash').value = ''; 
    }
    if (id === 'withdrawModal') { 
        document.getElementById('withdrawAmount').value = ''; 
        document.getElementById('withdrawAddress').value = ''; 
    }
}

function hideAllModals() {
    ['paymentModal','depositModal','withdrawModal','historyModal','notificationsModal','adminModal','swapModal','currencySelectorModal','rejectModal'].forEach(id => {
        const m = document.getElementById(id);
        if (m) m.classList.remove('show');
    });
}

// ====== 39. FILTER MARKET ======
function filterMarket(filter) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    document.querySelectorAll('.showcase-card-legendary').forEach(c => {
        const name = c.querySelector('h3').textContent;
        const m = MACHINES.find(m => m.name === name || m.nameAr === name);
        c.style.display = filter === 'all' || m?.filter === filter ? 'flex' : 'none';
    });
}

// ====== 40. ADMIN FUNCTIONS ======
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
    document.getElementById('adminContent').innerHTML = `
        <div class="admin-refresh-message">
            <i class="fas fa-hand-pointer"></i>
            <p>${t('admin.clickRefresh')}</p>
            <button class="admin-refresh-btn" onclick="refreshAdminPanel()">
                <i class="fas fa-rotate-right"></i> <span>${t('admin.refresh')}</span>
            </button>
        </div>
    `;
}

async function loadAdminCounts() {
    if (!db) return;
    try {
        let withdrawalsSnap;
        try {
            withdrawalsSnap = await db.collection(CONFIG.COLLECTIONS.WITHDRAWALS).where('status', '==', 'pending').get();
        } catch (e) {
            console.log("ℹ️ No withdrawals collection yet - this is normal");
            withdrawalsSnap = { empty: true, size: 0 };
        }
        
        let depositsSnap;
        try {
            depositsSnap = await db.collection(CONFIG.COLLECTIONS.DEPOSITS).where('status', '==', 'pending').get();
        } catch (e) {
            console.log("ℹ️ No deposits collection yet - this is normal");
            depositsSnap = { empty: true, size: 0 };
        }
        
        document.getElementById('pendingWithdrawalsCount').textContent = withdrawalsSnap.size;
        document.getElementById('pendingDepositsCount').textContent = depositsSnap.size;
    } catch (e) {
        console.error("Error loading counts:", e);
    }
}

async function refreshAdminPanel() {
    if (!isAdmin || !db) return;
    
    const btn = event.currentTarget;
    const icon = btn.querySelector('i');
    if (icon) icon.classList.add('fa-spin');
    
    const content = document.getElementById('adminContent');
    content.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i> Loading...</div>';
    
    try {
        const col = currentAdminTab === 'withdrawals' ? CONFIG.COLLECTIONS.WITHDRAWALS : CONFIG.COLLECTIONS.DEPOSITS;
        
        let snap;
        try {
            snap = await db.collection(col).where('status', '==', 'pending').orderBy('timestamp', 'desc').get();
        } catch (e) {
            console.log(`ℹ️ ${col} collection not found yet`);
            content.innerHTML = `<div class="empty-state">${t('admin.noPending')}</div>`;
            if (icon) setTimeout(() => icon.classList.remove('fa-spin'), 500);
            return;
        }
        
        if (snap.empty) { 
            content.innerHTML = `<div class="empty-state">${t('admin.noPending')}</div>`; 
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
        content.innerHTML = html;
    } catch (e) { 
        console.error("Error refreshing admin:", e);
        content.innerHTML = `<div class="empty-state">${t('admin.error')}</div>`; 
    }
    
    if (icon) setTimeout(() => icon.classList.remove('fa-spin'), 500);
}

function openRejectModal(id, type, targetUserId, currency, amount) {
    currentRejectId = id;
    currentRejectType = type;
    currentRejectData = { targetUserId, currency, amount };
    document.getElementById('rejectModal').classList.add('show');
}

async function submitRejection() {
    const reason = document.getElementById('rejectReason').value.trim();
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
        document.getElementById('rejectReason').value = '';
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

// ====== 41. CLOSE JACKPOT POPUP ======
function closeJackpotPopup() {
    const popup = document.getElementById('jackpotPopup');
    if (popup) {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 300);
    }
}

// ====== 42. PRICES ======
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
    updateTotalBalance();
}

function refreshPrices() {
    animateElement('.refresh-btn', 'pop');
    loadPrices(true);
}

// ====== 43. REFERRAL SYSTEM ======
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
        await db.collection(CONFIG.COLLECTIONS.USERS).doc(userId).update({
            'balances.TON': userData.balances.TON,
            totalEarned: userData.totalEarned,
            referralEarnings: userData.referralEarnings
        });
    } catch (e) {}
    
    addLocalNotification(t('notif.referralMiningBonus', { amount: bonus.toFixed(4) }), 'success');
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

// ====== 44. DAILY LOGIN BONUS ======
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

// ====== 45. NOTIFICATION SYSTEM ======
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

// ====== 46. FLOATING NOTIFICATIONS ======
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
        "🎰 3️⃣ 7️⃣ 7️⃣ Big win 10 TON!",
        "🎡 Wheel Jackpot 100 TON!",
        "💎 New user joined with referral"
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

// ====== 47. WELCOME STICKER ======
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
    setTimeout(() => {
        stickerEl.classList.remove('sticker-pop', 'sticker-shake');
        setTimeout(() => stickerEl.textContent = '', 300);
    }, 3000);
    
    lastStickerTime = now;
}

// ====== 48. LOAD USER DATA ======
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

// ====== 49. VEGAS ELITE - تحسينات الكازينو الأسطورية (محسنة) ======

// محرك الصوت
const VegasAudio = {
    ctx: null,
    isInitialized: false,
    
    init() {
        if (this.isInitialized) return;
        try {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            this.isInitialized = true;
            console.log("🎧 Vegas Audio initialized");
        } catch(e) { console.log("ℹ️ Audio not supported"); }
    },
    
    click() {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
    },
    
    whoosh() {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 0.3);
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(400, this.ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(2000, this.ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.3);
    },
    
    tick(pitch = 1) {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1200 * pitch, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.03);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.03);
    },
    
    clunk() {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(150, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(50, this.ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.15);
    },
    
    coin() {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1800, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(2200, this.ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.3);
    },
    
    win() {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        for (let i = 0; i < 5; i++) {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(600 + i * 100, now + i * 0.1);
            gain.gain.setValueAtTime(0.2, now + i * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.2);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + i * 0.1);
            osc.stop(now + i * 0.1 + 0.2);
        }
    },
    
    bigWin() {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        for (let i = 0; i < 8; i++) {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(400 + i * 150, now + i * 0.15);
            gain.gain.setValueAtTime(0.3, now + i * 0.15);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.15 + 0.3);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + i * 0.15);
            osc.stop(now + i * 0.15 + 0.3);
        }
    },
    
    jackpot() {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        for (let i = 0; i < 15; i++) {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(200 + i * 50, now + i * 0.08);
            gain.gain.setValueAtTime(0.3, now + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.08 + 0.3);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + i * 0.08);
            osc.stop(now + i * 0.08 + 0.3);
        }
    },
    
    crowdCheer() {
        if (!this.ctx) return;
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
        filter.frequency.setValueAtTime(1000, this.ctx.currentTime);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 2);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start();
    }
};

// نظام الطقطقة المتدرج
const TickSequencer = {
    timeouts: [],
    
    playWheelTicks(duration = 2000, onComplete = null) {
        this.clear();
        const tickCount = 20;
        const baseInterval = duration / tickCount;
        for (let i = 0; i < tickCount; i++) {
            const slowdownFactor = 1 + (i / tickCount) * 0.8;
            const delay = baseInterval * i * slowdownFactor;
            const timeout = setTimeout(() => {
                const pitch = 1 + (i / tickCount) * 0.5;
                VegasAudio.tick(pitch);
                if (i === tickCount - 1 && onComplete) setTimeout(onComplete, 150);
            }, delay);
            this.timeouts.push(timeout);
        }
    },
    
    playSlotsTicks(reelIndex, onComplete = null) {
        this.clear();
        const delays = reelIndex === 0 ? 10 : reelIndex === 1 ? 15 : 20;
        const baseDelay = 70;
        for (let i = 0; i < delays; i++) {
            const timeout = setTimeout(() => {
                VegasAudio.tick(1 + (i / delays) * 0.3);
                if (i === delays - 1 && onComplete) setTimeout(onComplete, 50);
            }, i * baseDelay * (1 + i * 0.1));
            this.timeouts.push(timeout);
        }
    },
    
    clear() {
        this.timeouts.forEach(t => clearTimeout(t));
        this.timeouts = [];
    }
};

// مسرحية الجاكبوت
const JackpotTheater = {
    isPlaying: false,
    
    play(amount, currency = 'TON', type = 'jackpot') {
        if (this.isPlaying) return;
        this.isPlaying = true;
        const container = document.querySelector('.wheel-game-container, .slots-game-container') || document.body;
        
        setTimeout(() => {
            this.createLightBurst(container);
            if (type === 'mega') VegasAudio.jackpot();
            else VegasAudio.bigWin();
        }, 200);
        
        setTimeout(() => {
            this.showJackpotText(container, amount, currency, type);
            VegasAudio.crowdCheer();
        }, 500);
        
        setTimeout(() => {
            this.createGoldParticles(container);
        }, 1000);
        
        setTimeout(() => { this.isPlaying = false; }, 4000);
    },
    
    createLightBurst(container) {
        const burst = document.createElement('div');
        burst.className = 'vegas-burst';
        for (let i = 0; i < 12; i++) {
            const ray = document.createElement('div');
            ray.className = 'burst-ray';
            ray.style.transform = `translate(-50%, -100%) rotate(${i * 30}deg)`;
            burst.appendChild(ray);
        }
        container.appendChild(burst);
        setTimeout(() => burst.remove(), 1000);
    },
    
    showJackpotText(container, amount, currency, type) {
        const text = document.createElement('div');
        text.className = `vegas-jackpot-text ${type}`;
        if (type === 'mega') text.innerHTML = `👑 MEGA JACKPOT! ${amount} ${currency} 👑`;
        else if (type === 'jackpot') text.innerHTML = `🎰 JACKPOT! ${amount} ${currency} 🎰`;
        else text.innerHTML = `🔥 BIG WIN! ${amount} ${currency} 🔥`;
        document.body.appendChild(text);
        document.body.classList.add('vegas-shake');
        setTimeout(() => document.body.classList.remove('vegas-shake'), 500);
        setTimeout(() => text.remove(), 3500);
    },
    
    createGoldParticles(container) {
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.className = 'vegas-particle';
            p.style.left = '50%';
            p.style.top = '50%';
            p.style.setProperty('--tx', `${(Math.random() - 0.5) * 400}px`);
            p.style.setProperty('--ty', `${(Math.random() - 0.5) * 400}px`);
            p.style.animationDelay = `${Math.random() * 0.5}s`;
            container.appendChild(p);
            setTimeout(() => p.remove(), 2000);
        }
    }
};

// عجلة الحظ المحسنة
let wheelVegasState = {
    isSpinning: false,
    currentRotation: 0,
    targetRotation: 0,
    selectedPrize: null,
    animationId: null,
    spinStartTime: 0,
    spinDuration: 2800
};

function initWheelVegas() {
    const wheel = document.getElementById('wheelCasinoPro');
    if (!wheel) { setTimeout(initWheelVegas, 200); return; }
    wheel.innerHTML = '';
    wheel.style.transform = 'rotate(0deg)';
    
    const totalSegments = WHEEL_PRIZES.length;
    const anglePerSegment = 360 / totalSegments;
    
    WHEEL_PRIZES.forEach((prize, index) => {
        const segDiv = document.createElement('div');
        segDiv.className = 'wheel-segment-vegas';
        segDiv.dataset.index = index;
        segDiv.dataset.type = prize.type;
        if (prize.amount) segDiv.dataset.amount = prize.amount;
        
        const rotation = index * anglePerSegment;
        
        let bgColor = prize.color;
        if (prize.jackpot) bgColor = `linear-gradient(45deg, #ef4444, #ff8800)`;
        else if (prize.type === 'TON') bgColor = `linear-gradient(135deg, #0088cc, #00f2ff)`;
        else if (prize.type === 'USDT') bgColor = `linear-gradient(135deg, #22c55e, #4ade80)`;
        else if (prize.type === 'GOODLUCK') bgColor = `linear-gradient(135deg, #94a3b8, #cbd5e1)`;
        
        segDiv.style.cssText = `
            position: absolute;
            width: 50%;
            height: 50%;
            top: 0;
            left: 50%;
            transform-origin: 0% 100%;
            transform: rotate(${rotation}deg) skewY(${90 - anglePerSegment}deg);
            background: ${bgColor};
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            text-shadow: 0 0 3px black;
            border-right: 2px solid rgba(255,255,255,0.3);
            box-shadow: inset 0 0 10px rgba(255,255,255,0.2);
            font-size: 0.8rem;
            z-index: 5;
        `;
        
        const iconSpan = document.createElement('span');
        iconSpan.className = 'vegas-segment-icon';
        iconSpan.style.fontSize = prize.jackpot ? '1.8rem' : '1.4rem';
        iconSpan.style.marginBottom = '4px';
        iconSpan.textContent = prize.icon;
        
        const labelSpan = document.createElement('span');
        labelSpan.className = 'vegas-segment-label';
        labelSpan.style.fontSize = '0.65rem';
        labelSpan.style.background = 'rgba(0,0,0,0.6)';
        labelSpan.style.padding = '3px 8px';
        labelSpan.style.borderRadius = '12px';
        labelSpan.style.whiteSpace = 'nowrap';
        labelSpan.textContent = prize.label;
        
        segDiv.appendChild(iconSpan);
        segDiv.appendChild(labelSpan);
        wheel.appendChild(segDiv);
    });
    
    updateWheelVegasUI();
    renderVegasPrizeLegend();
}

function renderVegasPrizeLegend() {
    const legend = document.getElementById('wheelPrizeLegend');
    if (!legend) return;
    
    const jackpot = WHEEL_PRIZES.filter(p => p.jackpot);
    const tonPrizes = WHEEL_PRIZES.filter(p => p.type === 'TON' && !p.jackpot);
    const usdtPrizes = WHEEL_PRIZES.filter(p => p.type === 'USDT' && !p.jackpot);
    
    legend.innerHTML = `
        <div class="vegas-legend-group">
            <h4>👑 JACKPOT</h4>
            ${jackpot.map(p => `<span>${p.icon} ${p.label}</span>`).join('')}
        </div>
        <div class="vegas-legend-group">
            <h4>💰 TON</h4>
            ${tonPrizes.slice(0,6).map(p => `<span>${p.icon} ${p.label}</span>`).join('')}
        </div>
        <div class="vegas-legend-group">
            <h4>💵 USDT</h4>
            ${usdtPrizes.slice(0,6).map(p => `<span>${p.icon} ${p.label}</span>`).join('')}
        </div>
    `;
}

function updateWheelVegasUI() {
    const spinsEl = document.getElementById('wheelGameSpins');
    const jackpotEl = document.getElementById('wheelJackpotCounter');
    const freeSpinEl = document.getElementById('wheelFreeSpin');
    const bigWinEl = document.getElementById('wheelBigWinCounter');
    const speedFill = document.getElementById('wheelSpeedFill');
    
    if (spinsEl) spinsEl.textContent = (userData.wheel.purchasedSpins || 0) + (userData.wheel.freeSpins || 0);
    if (jackpotEl) jackpotEl.textContent = CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY - ((userData.wheel.jackpotCounter || 0) % CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY);
    if (bigWinEl) bigWinEl.textContent = CONFIG.ECONOMY.WHEEL_BIG_WIN_EVERY - ((userData.wheel.bigWinCounter || 0) % CONFIG.ECONOMY.WHEEL_BIG_WIN_EVERY);
    
    if (freeSpinEl) {
        const now = Date.now();
        const nextFree = (userData.wheel.lastFreeSpin || 0) + CONFIG.ECONOMY.WHEEL_FREE_SPIN_INTERVAL;
        if (now < nextFree) {
            const left = nextFree - now;
            freeSpinEl.innerHTML = `<i class="fas fa-clock"></i><span>${Math.floor(left/3600000)}h ${Math.floor((left%3600000)/60000)}m</span>`;
            freeSpinEl.disabled = true;
        } else {
            freeSpinEl.innerHTML = `<i class="fas fa-gift"></i><span>FREE</span>`;
            freeSpinEl.disabled = false;
        }
    }
    
    updateVegasHeat();
}

function updateVegasHeat() {
    const container = document.querySelector('.wheel-game-container');
    if (!container) return;
    const spinsToJackpot = CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY - ((userData.wheel.jackpotCounter || 0) % CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY);
    container.classList.remove('heat-low', 'heat-medium', 'heat-high', 'heat-jackpot');
    if (spinsToJackpot === 1) container.classList.add('heat-jackpot');
    else if (spinsToJackpot <= 3) container.classList.add('heat-high');
    else if (spinsToJackpot <= 7) container.classList.add('heat-medium');
    else if (spinsToJackpot <= 10) container.classList.add('heat-low');
}

function selectVegasPrize() {
    const totalWeight = WHEEL_PRIZES.reduce((s, p) => s + p.weight, 0);
    let rand = Math.random() * totalWeight;
    for (const prize of WHEEL_PRIZES) {
        rand -= prize.weight;
        if (rand <= 0) return prize;
    }
    return WHEEL_PRIZES[0];
}

function awardVegasPrize(prize) {
    userData.wheel.lastWin = { prize, timestamp: Date.now() };
    
    if (prize.goodluck) {
        showToastPro('🍀 GOOD LUCK! Try again!', 'info');
        VegasAudio.coin();
        userData.wheel.freeSpins = (userData.wheel.freeSpins || 0) + 1;
        saveUserToCache();
        updateWheelVegasUI();
        return;
    }
    
    if (prize.type === 'FREESPIN') {
        showToastPro('🆓 FREE SPIN STORED!', 'success');
        VegasAudio.coin();
        userData.wheel.freeSpins = (userData.wheel.freeSpins || 0) + 1;
        saveUserToCache();
        updateWheelVegasUI();
        return;
    }
    
    if (prize.jackpot) {
        const currency = prize.currency || prize.type;
        userData.balances[currency] += prize.amount;
        if (currency === 'TON') userData.balance = userData.balances.TON;
        userData.totalEarned += prize.amount;
        addTransaction('wheel', prize.amount, { currency, jackpot: true });
        JackpotTheater.play(prize.amount, currency, prize.amount >= 500 ? 'mega' : 'jackpot');
        showWinPopup(`${prize.amount} ${currency}`, prize.amount >= 500 ? 'mega' : 'jackpot');
        userData.wheel.jackpotWon++;
        saveUserToCache();
        updateUI();
        updateWheelVegasUI();
        return;
    }
    
    const currency = prize.type;
    userData.balances[currency] += prize.amount;
    if (currency === 'TON') userData.balance = userData.balances.TON;
    userData.totalEarned += prize.amount;
    addTransaction('wheel', prize.amount, { currency });
    
    if (prize.amount >= 50) {
        showWinPopup(`${prize.amount} ${currency}`, 'nice');
        VegasAudio.bigWin();
    } else if (prize.amount >= 10) {
        showWinPopup(`${prize.amount} ${currency}`, 'big');
        VegasAudio.win();
    } else {
        showWinPopup(`${prize.amount} ${currency}`, 'normal');
        VegasAudio.coin();
    }
    
    hapticFeedback(prize.amount >= 10 ? 'medium' : 'light');
    userData.wheel.bigWinCounter = (userData.wheel.bigWinCounter || 0) + 1;
    userData.wheel.jackpotCounter = (userData.wheel.jackpotCounter || 0) + 1;
    saveUserToCache();
    updateUI();
    updateWheelVegasUI();
}

function animateWheelVegas() {
    if (!wheelVegasState.isSpinning) return;
    
    const now = Date.now();
    const elapsed = now - wheelVegasState.spinStartTime;
    const wheel = document.getElementById('wheelCasinoPro');
    
    let velocity = 0;
    if (elapsed < 600) {
        velocity = (elapsed / 600) * 25;
        wheel?.classList.add('spinning-fast');
    } else if (elapsed < 1800) {
        velocity = 25 + Math.sin(elapsed * 0.02) * 2;
    } else if (elapsed < 2600) {
        velocity = 25 * ((2600 - elapsed) / 800);
        if (!wheelVegasState.selectedPrize) {
            wheelVegasState.selectedPrize = selectVegasPrize();
            const prizeIndex = WHEEL_PRIZES.indexOf(wheelVegasState.selectedPrize);
            if (prizeIndex !== -1) {
                const segmentAngle = 360 / WHEEL_PRIZES.length;
                const targetAngle = 270 - (prizeIndex * segmentAngle + segmentAngle / 2);
                const extraSpins = 5;
                wheelVegasState.targetRotation = wheelVegasState.currentRotation + 
                    (extraSpins * 360) + 
                    ((targetAngle - (wheelVegasState.currentRotation % 360) + 360) % 360);
            }
        }
    } else {
        wheelVegasState.isSpinning = false;
        wheel?.classList.remove('spinning-fast');
        wheel?.classList.add('wheel-bounce');
        setTimeout(() => {
            wheel?.classList.remove('wheel-bounce');
            awardVegasPrize(wheelVegasState.selectedPrize);
        }, 300);
        cancelAnimationFrame(wheelVegasState.animationId);
        return;
    }
    
    wheelVegasState.currentRotation += velocity;
    if (wheel) wheel.style.transform = `rotate(${wheelVegasState.currentRotation}deg)`;
    
    const speedFill = document.getElementById('wheelSpeedFill');
    if (speedFill) {
        const speedPercent = Math.min(velocity / 30 * 100, 100);
        speedFill.style.width = `${speedPercent}%`;
    }
    
    wheelVegasState.animationId = requestAnimationFrame(animateWheelVegas);
}

function spinWheelVegas(isFree = false) {
    if (wheelVegasState.isSpinning) return;
    
    if (isFree) {
        const now = Date.now();
        const nextFree = userData.wheel.lastFreeSpin + CONFIG.ECONOMY.WHEEL_FREE_SPIN_INTERVAL;
        if (now < nextFree) {
            const left = nextFree - now;
            showToastPro(`⏰ Wait ${Math.floor(left/3600000)}h ${Math.floor((left%3600000)/60000)}m`, 'warning');
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
    
    wheelVegasState.isSpinning = true;
    wheelVegasState.spinStartTime = Date.now();
    wheelVegasState.selectedPrize = null;
    
    VegasAudio.click();
    setTimeout(() => VegasAudio.whoosh(), 50);
    TickSequencer.playWheelTicks(2500, () => VegasAudio.clunk());
    
    document.querySelectorAll('.wheel-segment-vegas').forEach(seg => {
        seg.classList.remove('winner-segment', 'near-miss');
    });
    
    wheelVegasState.animationId = requestAnimationFrame(animateWheelVegas);
    userData.wheel.totalSpins++;
    saveUserToCache();
    updateWheelVegasUI();
}

// آلة السلوتس المحسنة
let slotsVegasState = {
    isSpinning: false,
    reels: [[], [], []],
    positions: [0, 0, 0],
    targetPositions: [0, 0, 0],
    animationId: null
};

function initSlotsVegas() {
    const container = document.getElementById('slotReelsPro');
    if (!container) { setTimeout(initSlotsVegas, 200); return; }
    container.innerHTML = '';
    
    for (let i = 0; i < 3; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'vegas-slot-reel-wrapper';
        wrapper.dataset.reel = i;
        const reel = document.createElement('div');
        reel.className = 'vegas-slot-reel';
        reel.id = `vegas-reel-${i}`;
        
        for (let j = 0; j < 20; j++) {
            const randomIndex = Math.floor(Math.random() * SLOTS_SYMBOLS_DATA.length);
            const sym = document.createElement('div');
            sym.className = 'vegas-slot-symbol';
            sym.textContent = SLOTS_SYMBOLS_DATA[randomIndex].symbol;
            sym.style.color = SLOTS_SYMBOLS_DATA[randomIndex].color;
            sym.style.height = '110px';
            sym.style.display = 'flex';
            sym.style.alignItems = 'center';
            sym.style.justifyContent = 'center';
            sym.style.fontSize = '3.5rem';
            sym.style.background = '#2a2a3a';
            sym.style.borderBottom = '1px solid #3a3a4a';
            reel.appendChild(sym);
        }
        wrapper.appendChild(reel);
        container.appendChild(wrapper);
        reel.style.transform = `translateY(-${Math.floor(Math.random() * 500)}px)`;
    }
    updateSlotsVegasUI();
    renderVegasSlotsLegend();
}

function renderVegasSlotsLegend() {
    const grid = document.getElementById('slotsPayoutGrid');
    if (!grid) return;
    const sorted = [...SLOTS_SYMBOLS_DATA].sort((a,b) => b.value - a.value);
    grid.innerHTML = sorted.map(item => `
        <div class="vegas-payout-item ${item.jackpot ? 'jackpot' : ''}">
            <span class="symbol">${item.symbol}</span>
            <span class="value">${item.value} ${item.type}</span>
            ${item.jackpot ? '<span class="badge">JACKPOT</span>' : ''}
        </div>
    `).join('');
}

function updateSlotsVegasUI() {
    const spinsEl = document.getElementById('slotsGameSpins');
    const freeSpinEl = document.getElementById('slotsFreeSpin');
    if (spinsEl) spinsEl.textContent = (userData.slots.purchasedSpins || 0) + (userData.slots.freeSpins || 0);
    if (freeSpinEl) {
        const now = Date.now();
        const nextFree = (userData.slots.lastFreeSpin || 0) + CONFIG.ECONOMY.SLOTS_FREE_SPIN_INTERVAL;
        if (now < nextFree) {
            const left = nextFree - now;
            freeSpinEl.innerHTML = `<i class="fas fa-clock"></i><span>${Math.floor(left/3600000)}h ${Math.floor((left%3600000)/60000)}m</span>`;
            freeSpinEl.disabled = true;
        } else {
            freeSpinEl.innerHTML = `<i class="fas fa-gift"></i><span>FREE</span>`;
            freeSpinEl.disabled = false;
        }
    }
}

function spinSlotsVegas(isFree = false, isTurbo = false) {
    if (slotsVegasState.isSpinning) return;
    const price = isTurbo ? CONFIG.ECONOMY.SLOTS_TURBO_PRICE : CONFIG.ECONOMY.SLOTS_SPIN_PRICE;
    
    if (isFree) {
        const now = Date.now();
        const nextFree = (userData.slots.lastFreeSpin || 0) + CONFIG.ECONOMY.SLOTS_FREE_SPIN_INTERVAL;
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
    
    slotsVegasState.isSpinning = true;
    VegasAudio.click();
    setTimeout(() => VegasAudio.whoosh(), 50);
    
    const reels = document.querySelectorAll('.vegas-slot-reel');
    const duration = isTurbo ? 600 : 1000;
    const results = [];
    
    reels.forEach((reel, idx) => {
        const spinDistance = 1500 + Math.random() * 1000;
        const startY = parseFloat(reel.style.transform?.replace('translateY(', '').replace('px)', '')) || 0;
        const targetY = startY - spinDistance;
        reel.style.transition = `transform ${duration}ms cubic-bezier(0.2, 0.9, 0.4, 1.1)`;
        reel.style.transform = `translateY(${targetY}px)`;
        
        setTimeout(() => {
            const finalOffset = Math.floor(Math.random() * 20) * 110;
            reel.style.transition = `transform 200ms ease-out`;
            reel.style.transform = `translateY(-${finalOffset}px)`;
            const symbolIndex = Math.floor(finalOffset / 110) % 20;
            const symbolsList = reel.querySelectorAll('.vegas-slot-symbol');
            results[idx] = symbolsList[symbolIndex]?.textContent || '🍒';
        }, duration - 150);
    });
    
    setTimeout(() => {
        const allSame = results[0] === results[1] && results[1] === results[2];
        let winAmount = 0, winCurrency = 'TON';
        
        if (allSame) {
            const prize = SLOTS_SYMBOLS_DATA.find(p => p.symbol === results[0]);
            if (prize && prize.value > 0) {
                winAmount = prize.value;
                winCurrency = prize.type === 'TON' ? 'TON' : 'USDT';
            }
        } else {
            const matchCount = (results[0] === results[1] ? 1 : 0) + (results[1] === results[2] ? 1 : 0) + (results[0] === results[2] ? 1 : 0);
            if (matchCount >= 1) {
                const matchSymbol = results[0] === results[1] ? results[0] : results[1];
                const prize = SLOTS_SYMBOLS_DATA.find(p => p.symbol === matchSymbol);
                if (prize && prize.value > 0) {
                    winAmount = prize.value / 2;
                    winCurrency = prize.type === 'TON' ? 'TON' : 'USDT';
                }
            }
        }
        
        if (winAmount > 0) {
            userData.balances[winCurrency] += winAmount;
            if (winCurrency === 'TON') userData.balance = userData.balances.TON;
            userData.totalEarned += winAmount;
            addTransaction('slots', winAmount, { currency: winCurrency });
            showToastPro(`🎰 You won ${winAmount} ${winCurrency}!`, 'success');
            document.getElementById('slotsWinAmount').textContent = `${winAmount} ${winCurrency}`;
            if (winAmount >= 50) showWinPopup(`${winAmount} ${winCurrency}`, 'nice');
            else if (winAmount >= 10) showWinPopup(`${winAmount} ${winCurrency}`, 'big');
            else showWinPopup(`${winAmount} ${winCurrency}`, 'normal');
            VegasAudio.win();
            if (winAmount >= 10) for (let i=0;i<3;i++) setTimeout(() => VegasAudio.coin(), i*200);
        } else {
            showToastPro('🍀 Try again!', 'info');
            VegasAudio.tick(0.8);
        }
        
        slotsVegasState.isSpinning = false;
        saveUserToCache();
        updateUI();
    }, duration + 100);
}

function showToastPro(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const existingToast = container.querySelector('.toast-pro');
    if (existingToast) {
        existingToast.classList.add('closing');
        setTimeout(() => existingToast.remove(), 300);
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

// ====== 50. INITIALIZATION ======
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
    console.log("✅ TON MINING CASINO - ULTIMATE LEGENDARY EDITION v10.0");
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
document.addEventListener('click', () => { if (!VegasAudio.isInitialized) VegasAudio.init(); }, { once: true });

// ====== 51. EXPORT FUNCTIONS ======
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
window.showWheelGamePage = showWheelGamePage;
window.showSlotsGamePage = showSlotsGamePage;
window.spinWheelVegas = spinWheelVegas;
window.spinSlotsVegas = spinSlotsVegas;
window.showToastPro = showToastPro;
window.VegasAudio = VegasAudio;
window.TickSequencer = TickSequencer;
window.JackpotTheater = JackpotTheater;
window.openProfileFromAnywhere = function() {
    if (currentPage === 'wheelGame' || currentPage === 'slotsGame') exitGame();
    setTimeout(() => showPage('profile'), 300);
};
window.openWithdrawModal = function() {
    if (currentPage !== 'profile') openProfileFromAnywhere();
    setTimeout(() => showWithdrawModal(), 400);
};
window.openDepositModal = function() {
    if (currentPage !== 'profile') openProfileFromAnywhere();
    setTimeout(() => showDepositModal(), 400);
};
window.openSwapModal = function() {
    if (currentPage !== 'profile') openProfileFromAnywhere();
    setTimeout(() => showSwapModal(), 400);
};
window.openHistoryModal = function() {
    if (currentPage !== 'profile') openProfileFromAnywhere();
    setTimeout(() => showHistory(), 400);
};
