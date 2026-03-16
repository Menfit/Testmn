// ============================================
// TON MINING PRO - LEGENDARY VERSION v18.0
// ULTIMATE ZERO WASTE ARCHITECTURE
// WITH ALL FEATURES: MINING, LUCKY WHEEL, AUTO-CLICKER, REFERRAL, MULTI-CURRENCY
// ============================================

// ====== 1. TELEGRAM WEBAPP INITIALIZATION ======
const tg = window.Telegram?.WebApp;
if (tg) {
    tg.ready();
    tg.expand();
    tg.enableClosingConfirmation?.();
    tg.setHeaderColor('#0a0b0f');
    tg.setBackgroundColor('#0a0b0f');
    console.log("✅ Telegram WebApp initialized");
}

// ====== 2. GLOBAL CONFIGURATION ======
const CONFIG = {
    TON: {
        WALLET: "UQAq2CLybaIP93EGFlGL2n8A9DkGk5RPL2lYWJpoJlp8foJh",
        API_KEY: "e53929324c8cabe222c3005cd3518fe1f3c7861aa6b02442d05fb630ab31fa78",
        CENTER_API: "https://toncenter.com/api/v2/",
        EXPLORER: "https://tonviewer.com/",
        ADMIN_ID: "1653918641",
        ADMIN_PASSWORD: "Admin97€",
        MIN_WITHDRAW: 1.0,
        MIN_DEPOSIT: 1.0,
        TX_CHECK_INTERVAL: 15000,
        TX_MAX_ATTEMPTS: 20,
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
        TON: 1.0,
        USDT: 10,
        BNB: 0.015,
        ETH: 0.005,
        BTC: 0.0005,
        SOL: 0.12
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
        USDT: 'bsc',
        BNB: 'bsc',
        ETH: 'erc20',
        BTC: 'bitcoin',
        SOL: 'solana',
        TON: 'ton'
    },
    
    CACHE: {
        USER_TTL: 300000,
        PRICES_TTL: 10800000,
        HISTORY_TTL: 600000,
        MINING_TTL: 60000,
        LISTENER_TTL: 30000,
        LEADERBOARD_TTL: 3600000
    },
    
    ECONOMY: {
        REFERRAL_BONUS: 0.005,
        REFERRAL_PERCENT: 0.20,
        AUTO_CLICKER_PRICE: 0.5,
        AUTO_CLICKER_DURATION: 24 * 60 * 60 * 1000,
        WHEEL_SPIN_PRICE: 0.25,
        WHEEL_FREE_SPIN_INTERVAL: 24 * 60 * 60 * 1000,
        WHEEL_JACKPOT_EVERY: 12,
        STREAK_BONUS: { 3: 1.05, 7: 1.10, 30: 1.25 },
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
        TON: "the-open-network",
        USDT: "tether",
        BNB: "binancecoin",
        BTC: "bitcoin",
        ETH: "ethereum",
        SOL: "solana"
    },
    
    ALL_ASSETS: [
        { symbol: 'TON', name: 'Toncoin' },
        { symbol: 'USDT', name: 'Tether' },
        { symbol: 'BNB', name: 'BNB' },
        { symbol: 'BTC', name: 'Bitcoin' },
        { symbol: 'ETH', name: 'Ethereum' },
        { symbol: 'SOL', name: 'Solana' }
    ]
};

// ====== 3. TRANSLATION SYSTEM ======
const translations = {
    en: {
        'app.name': 'TON Mining Pro',
        'welcome.title': 'Welcome back,',
        'nav.mining': 'Mining',
        'nav.market': 'Market',
        'nav.stats': 'Stats',
        'nav.profile': 'Profile',
        'actions.send': 'Send',
        'actions.receive': 'Receive',
        'actions.swap': 'Swap',
        'actions.claim': 'CLAIM',
        'actions.manage': 'Manage',
        'actions.seeAll': 'See All',
        'actions.viewAll': 'View All',
        'actions.copy': 'Copy',
        'actions.confirm': 'Confirm',
        'actions.refresh': 'Refresh',
        'actions.buy': 'Buy',
        'mining.currentCycle': 'Current Mining Cycle',
        'mining.nextReward': 'Next Reward',
        'mining.activeRigs': 'Active Mining Rigs',
        'mining.plansReturns': 'Mining Plans & Returns',
        'mining.recentActivity': 'Recent Activity',
        'mining.streak': 'Day Streak',
        'mining.best': 'Best',
        'market.title': 'Mining Hardware',
        'market.subtitle': 'Choose your mining rig and start earning',
        'filters.all': 'All',
        'filters.free': 'Free',
        'filters.basic': 'Basic',
        'filters.pro': 'Pro',
        'filters.quantum': 'Quantum',
        'stats.title': 'Mining Statistics',
        'stats.subtitle': 'Your mining performance and achievements',
        'stats.miningDays': 'Mining Days',
        'stats.bestStreak': 'Best Streak',
        'stats.totalReferrals': 'Total Referrals',
        'stats.achievements': 'Achievements',
        'stats.earningsHistory': 'Earnings History',
        'stats.leaderboard': 'Mining Leaderboard',
        'profile.title': 'My Profile',
        'wallet.totalBalance': 'Total Balance',
        'wallet.myAssets': 'My Assets',
        'wallet.connected': 'Connected:',
        'wallet.disconnected': 'Wallet disconnected',
        'wallet.notConnected': 'Wallet not connected',
        'swap.title': 'Swap Assets',
        'swap.from': 'From',
        'swap.to': 'To',
        'swap.rate': 'Rate',
        'swap.confirm': 'Confirm Swap',
        'payment.title': 'Complete Rental',
        'payment.selectMethod': 'Select Payment Method:',
        'payment.balance': 'Pay with Balance',
        'payment.wallet': 'Pay with TON Wallet',
        'payment.available': 'Available:',
        'payment.connectWallet': 'Connect TON wallet to pay',
        'payment.confirmBalance': 'Pay with Balance',
        'payment.confirmWallet': 'Pay with TON Wallet',
        'payment.duration': 'Duration:',
        'payment.price': 'Price:',
        'payment.return': 'Return:',
        'payment.youReceive': 'You will receive:',
        'deposit.title': 'Receive Funds',
        'deposit.selectCurrency': 'Select Currency',
        'deposit.amount': 'Amount',
        'deposit.transactionId': 'Transaction ID',
        'deposit.sendTo': 'Send to this address:',
        'deposit.confirmation': '✓ Blockchain confirmation 1-5 minutes',
        'deposit.submit': 'Submit Request',
        'deposit.minimum': 'Minimum: {amount} {currency}',
        'withdraw.title': 'Send Funds',
        'withdraw.selectCurrency': 'Select Currency',
        'withdraw.amount': 'Amount',
        'withdraw.address': 'Wallet Address',
        'withdraw.youReceive': 'You will receive:',
        'withdraw.networkFee': 'Network fee:',
        'withdraw.submit': 'Send Request',
        'withdraw.feeNote': '{note}',
        'referral.title': 'Referral Program',
        'referral.totalReferrals': 'Total Referrals',
        'referral.earned': 'Earned (USDT)',
        'referral.yourLink': 'Your Referral Link',
        'referral.bonusNote': 'Get 0.005 TON + 20% of their mining!',
        'referral.milestones': 'Referral Milestones',
        'referral.yourNetwork': 'Your Network',
        'referral.friends': 'Friends',
        'referral.referrals': 'Referrals',
        'referral.reward': 'Reward',
        'referral.progress': 'Progress',
        'wheel.title': 'Lucky Wheel',
        'wheel.spin': 'SPIN',
        'wheel.free': 'FREE',
        'wheel.price': '0.25 TON',
        'wheel.freeDaily': 'Free daily spin',
        'wheel.jackpot': 'JACKPOT!',
        'wheel.spinsLeft': '{count} spins until jackpot',
        'wheel.won': 'You won {prize}!',
        'wheel.insufficient': 'Insufficient balance. Need 0.25 TON',
        'wheel.wait': 'Next free spin in {time}',
        'autoclicker.title': 'Auto Miner',
        'autoclicker.description': 'Mine automatically for 24 hours',
        'autoclicker.price': '0.5 TON',
        'autoclicker.buy': 'Buy Auto Miner',
        'autoclicker.active': 'Active: {time} left',
        'autoclicker.bought': 'Auto Miner activated for 24h!',
        'settings.title': 'Settings',
        'settings.notifications': 'Notifications',
        'settings.darkMode': 'Dark Mode',
        'settings.language': 'Language',
        'settings.support': 'Support',
        'table.machine': 'Machine',
        'table.3days': '3 Days',
        'table.7days': '7 Days',
        'table.15days': '15 Days',
        'history.title': 'Transaction History',
        'history.all': 'All',
        'history.deposits': 'Deposits',
        'history.withdrawals': 'Withdrawals',
        'history.mining': 'Mining',
        'history.rentals': 'Rentals',
        'history.swaps': 'Swaps',
        'history.wheel': 'Wheel',
        'notifications.title': 'Notifications',
        'notifications.no_notifications': 'No notifications',
        'currency.select': 'Select Currency',
        'admin.clickRefresh': 'Click refresh button to load requests',
        'admin.refresh': 'Refresh',
        'admin.password': 'Enter Admin Password',
        'admin.wrongPassword': 'Wrong password',
        'messages.loading': 'Loading...',
        'messages.success': 'Success',
        'messages.error': 'Error',
        'messages.warning': 'Warning',
        'messages.info': 'Info',
        'notif.welcomeBonus': '🎉 Welcome! You got 0.005 TON bonus!',
        'notif.referralBonus': '🎉 Someone joined with your link! You got 0.005 TON!',
        'notif.referralMiningBonus': '⚡ Your referral just mined! You got 20% ({amount} TON)',
        'notif.depositApproved': '✅ Your {amount} {currency} deposit has been approved!',
        'notif.depositRejected': '❌ Your deposit was rejected. Reason: {reason}',
        'notif.withdrawApproved': '✅ Your {amount} {currency} withdrawal has been approved!',
        'notif.withdrawRejected': '❌ Your withdrawal was rejected. Reason: {reason}',
        'notif.swapCompleted': '✅ Swapped {fromAmount} {fromCurrency} to {toAmount} {toCurrency}',
        'notif.wheelWin': '🎡 You won {prize}!',
        'notif.wheelJackpot': '🎡🎡🎡 JACKPOT! You won {prize}!',
        'notif.autoClickerBought': '🤖 Auto Miner activated for 24 hours!',
        'error.minDeposit': 'Minimum deposit is {min} {currency}',
        'error.minWithdraw': 'Minimum withdrawal is {min} {currency}',
        'error.invalidHash': 'Invalid transaction hash format',
        'error.hashUsed': 'This transaction hash has already been used',
        'error.insufficientBalance': 'Insufficient {currency} balance',
        'error.insufficientFeeBalance': 'Insufficient {feeCurrency} for fee. Need {fee} {feeCurrency}',
        'error.invalidAddress': 'Invalid {currency} address',
        'error.enterAmount': 'Please enter a valid amount',
        'error.insufficientToken': 'Insufficient {token} balance',
    },
    
    ar: {
        'app.name': 'TON للتعدين',
        'welcome.title': 'أهلاً بعودتك،',
        'nav.mining': 'التعدين',
        'nav.market': 'المتجر',
        'nav.stats': 'الإحصائيات',
        'nav.profile': 'الملف الشخصي',
        'actions.send': 'إرسال',
        'actions.receive': 'استقبال',
        'actions.swap': 'تبديل',
        'actions.claim': 'استلام',
        'actions.manage': 'إدارة',
        'actions.seeAll': 'عرض الكل',
        'actions.viewAll': 'مشاهدة الكل',
        'actions.copy': 'نسخ',
        'actions.confirm': 'تأكيد',
        'actions.refresh': 'تحديث',
        'actions.buy': 'شراء',
        'mining.currentCycle': 'دورة التعدين الحالية',
        'mining.nextReward': 'المكافأة القادمة',
        'mining.activeRigs': 'أجهزة التعدين النشطة',
        'mining.plansReturns': 'خطط وعوائد التعدين',
        'mining.recentActivity': 'النشاط الأخير',
        'mining.streak': 'يوم متتالي',
        'mining.best': 'الأفضل',
        'market.title': 'أجهزة التعدين',
        'market.subtitle': 'اختر جهاز التعدين وابدأ الربح',
        'filters.all': 'الكل',
        'filters.free': 'مجاني',
        'filters.basic': 'أساسي',
        'filters.pro': 'محترف',
        'filters.quantum': 'كمومي',
        'stats.title': 'إحصائيات التعدين',
        'stats.subtitle': 'أداء التعدين والإنجازات',
        'stats.miningDays': 'أيام التعدين',
        'stats.bestStreak': 'أفضل سلسلة',
        'stats.totalReferrals': 'إجمالي الإحالات',
        'stats.achievements': 'الإنجازات',
        'stats.earningsHistory': 'تاريخ الأرباح',
        'stats.leaderboard': 'قائمة المتصدرين',
        'profile.title': 'ملفي الشخصي',
        'wallet.totalBalance': 'الرصيد الإجمالي',
        'wallet.myAssets': 'أصولي',
        'wallet.connected': 'متصل:',
        'wallet.disconnected': 'المحفظة غير متصلة',
        'wallet.notConnected': 'المحفظة غير متصلة',
        'swap.title': 'تبديل العملات',
        'swap.from': 'من',
        'swap.to': 'إلى',
        'swap.rate': 'سعر الصرف',
        'swap.confirm': 'تأكيد التبديل',
        'payment.title': 'إتمام التأجير',
        'payment.selectMethod': 'اختر طريقة الدفع:',
        'payment.balance': 'الدفع من الرصيد',
        'payment.wallet': 'الدفع بمحفظة TON',
        'payment.available': 'الرصيد المتاح:',
        'payment.connectWallet': 'قم بتوصيل محفظة TON للدفع',
        'payment.confirmBalance': 'الدفع من الرصيد',
        'payment.confirmWallet': 'الدفع بمحفظة TON',
        'payment.duration': 'المدة:',
        'payment.price': 'السعر:',
        'payment.return': 'العائد:',
        'payment.youReceive': 'سوف تستلم:',
        'deposit.title': 'استقبال الأموال',
        'deposit.selectCurrency': 'اختر العملة',
        'deposit.amount': 'المبلغ',
        'deposit.transactionId': 'رقم المعاملة',
        'deposit.sendTo': 'أرسل إلى هذا العنوان:',
        'deposit.confirmation': '✓ تأكيد البلوكشين 1-5 دقائق',
        'deposit.submit': 'تقديم الطلب',
        'deposit.minimum': 'الحد الأدنى: {amount} {currency}',
        'withdraw.title': 'إرسال الأموال',
        'withdraw.selectCurrency': 'اختر العملة',
        'withdraw.amount': 'المبلغ',
        'withdraw.address': 'عنوان المحفظة',
        'withdraw.youReceive': 'سوف تستلم:',
        'withdraw.networkFee': 'رسوم الشبكة:',
        'withdraw.submit': 'طلب الإرسال',
        'withdraw.feeNote': '{note}',
        'referral.title': 'برنامج الإحالة',
        'referral.totalReferrals': 'إجمالي الإحالات',
        'referral.earned': 'المكتسب (USDT)',
        'referral.yourLink': 'رابط الإحالة الخاص بك',
        'referral.bonusNote': 'احصل على 0.005 TON + 20% من تعدينهم!',
        'referral.milestones': 'مراحل الإحالة',
        'referral.yourNetwork': 'شبكتك',
        'referral.friends': 'الأصدقاء',
        'referral.referrals': 'إحالات',
        'referral.reward': 'المكافأة',
        'referral.progress': 'التقدم',
        'wheel.title': 'عجلة الحظ',
        'wheel.spin': 'دوران',
        'wheel.free': 'مجاني',
        'wheel.price': '0.25 TON',
        'wheel.freeDaily': 'دوران مجاني يومي',
        'wheel.jackpot': 'جاكبوت!',
        'wheel.spinsLeft': '{count} لفات حتى الجاكبوت',
        'wheel.won': 'فزت بـ {prize}!',
        'wheel.insufficient': 'رصيد غير كاف. تحتاج 0.25 TON',
        'wheel.wait': 'الدوران المجاني بعد {time}',
        'autoclicker.title': 'منجم آلي',
        'autoclicker.description': 'تعدين تلقائي لمدة 24 ساعة',
        'autoclicker.price': '0.5 TON',
        'autoclicker.buy': 'شراء منجم آلي',
        'autoclicker.active': 'نشط: {time} متبقي',
        'autoclicker.bought': 'تم تفعيل المنجم الآلي لمدة 24 ساعة!',
        'settings.title': 'الإعدادات',
        'settings.notifications': 'الإشعارات',
        'settings.darkMode': 'الوضع الليلي',
        'settings.language': 'اللغة',
        'settings.support': 'الدعم الفني',
        'table.machine': 'الجهاز',
        'table.3days': '٣ أيام',
        'table.7days': '٧ أيام',
        'table.15days': '١٥ يوماً',
        'history.title': 'سجل المعاملات',
        'history.all': 'الكل',
        'history.deposits': 'إيداعات',
        'history.withdrawals': 'سحوبات',
        'history.mining': 'تعدين',
        'history.rentals': 'تأجير',
        'history.swaps': 'تبديل',
        'history.wheel': 'عجلة الحظ',
        'notifications.title': 'الإشعارات',
        'notifications.no_notifications': 'لا توجد إشعارات',
        'currency.select': 'اختر العملة',
        'admin.clickRefresh': 'اضغط زر التحديث لعرض الطلبات',
        'admin.refresh': 'تحديث',
        'admin.password': 'أدخل كلمة سر المشرف',
        'admin.wrongPassword': 'كلمة سر خاطئة',
        'messages.loading': 'جاري التحميل...',
        'messages.success': 'نجاح',
        'messages.error': 'خطأ',
        'messages.warning': 'تحذير',
        'messages.info': 'معلومات',
        'notif.welcomeBonus': '🎉 مرحباً! حصلت على 0.005 TON كمكافأة!',
        'notif.referralBonus': '🎉 شخص ما انضم عبر رابطك! حصلت على 0.005 TON!',
        'notif.referralMiningBonus': '⚡ صديقك تعدن للتو! حصلت على 20% ({amount} TON)',
        'notif.depositApproved': '✅ تمت الموافقة على إيداعك {amount} {currency}!',
        'notif.depositRejected': '❌ تم رفض إيداعك. السبب: {reason}',
        'notif.withdrawApproved': '✅ تمت الموافقة على سحبك {amount} {currency}!',
        'notif.withdrawRejected': '❌ تم رفض سحبك. السبب: {reason}',
        'notif.swapCompleted': '✅ تم تبديل {fromAmount} {fromCurrency} إلى {toAmount} {toCurrency}',
        'notif.wheelWin': '🎡 فزت بـ {prize}!',
        'notif.wheelJackpot': '🎡🎡🎡 جاكبوت! فزت بـ {prize}!',
        'notif.autoClickerBought': '🤖 تم تفعيل المنجم الآلي لمدة 24 ساعة!',
        'error.minDeposit': 'الحد الأدنى للإيداع هو {min} {currency}',
        'error.minWithdraw': 'الحد الأدنى للسحب هو {min} {currency}',
        'error.invalidHash': 'تنسيق هاش معاملة غير صالح',
        'error.hashUsed': 'هذا الهاش مستخدم بالفعل',
        'error.insufficientBalance': 'رصيد {currency} غير كافٍ',
        'error.insufficientFeeBalance': 'رصيد {feeCurrency} غير كافٍ للرسوم. تحتاج {fee} {feeCurrency}',
        'error.invalidAddress': 'عنوان {currency} غير صالح',
        'error.enterAmount': 'الرجاء إدخال مبلغ صحيح',
        'error.insufficientToken': 'رصيد {token} غير كافٍ',
    }
};

// ====== 4. LANGUAGE MANAGEMENT ======
let currentLanguage = localStorage.getItem('preferred_language') || 'en';

function t(key, params = {}) {
    const keys = key.split('.');
    let text = translations[currentLanguage];
    
    for (const k of keys) {
        if (text && text[k] !== undefined) {
            text = text[k];
        } else {
            text = translations.en;
            for (const ek of keys) {
                if (text && text[ek] !== undefined) {
                    text = text[ek];
                } else {
                    text = key;
                    break;
                }
            }
            break;
        }
    }
    
    if (typeof text !== 'string') text = key;
    
    Object.keys(params).forEach(param => {
        text = text.replace(`{${param}}`, params[param]);
    });
    
    return text;
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    localStorage.setItem('preferred_language', currentLanguage);
    
    const flagEl = document.getElementById('currentLanguageFlag');
    const settingsLang = document.getElementById('settingsLanguage');
    
    if (flagEl) flagEl.textContent = currentLanguage === 'en' ? '🇬🇧' : '🇸🇦';
    if (settingsLang) settingsLang.textContent = currentLanguage === 'en' ? 'English' : 'العربية';
    
    if (currentLanguage === 'ar') {
        document.body.classList.add('rtl');
        document.documentElement.dir = 'rtl';
    } else {
        document.body.classList.remove('rtl');
        document.documentElement.dir = 'ltr';
    }
    
    updateAllTexts();
    showToast(t('messages.success'), 'success');
}

function updateAllTexts() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
}

// ====== 5. MINING MACHINES ======
const MACHINES = [
    {
        id: 'm1',
        name: 'Free Miner',
        nameAr: 'منجم مجاني',
        description: 'Start mining for free! Perfect for beginners.',
        descriptionAr: 'ابدأ التعدين مجاناً! مثالي للمبتدئين.',
        icon: 'fa-gem',
        color: '#808080',
        filter: 'free',
        yield: 0.01,
        interval: 4 * 3600000,
        cycleText: '4 hours',
        cycleTextAr: '٤ ساعات',
        hashrate: '10 MH/s',
        requirements: null,
        plans: [
            { duration: 3, durationText: '3 days', durationTextAr: '٣ أيام', price: 0, returnPercent: 0, returnAmount: 0, total: 0 },
            { duration: 7, durationText: '7 days', durationTextAr: '٧ أيام', price: 0, returnPercent: 0, returnAmount: 0, total: 0 },
            { duration: 15, durationText: '15 days', durationTextAr: '١٥ يوماً', price: 0, returnPercent: 0, returnAmount: 0, total: 0 }
        ]
    },
    {
        id: 'm2',
        name: 'Turbo v2',
        nameAr: 'تربو v2',
        description: 'High-speed ASIC miner. 3x faster!',
        descriptionAr: 'جهاز عالي السرعة. أسرع بثلاث مرات!',
        icon: 'fa-bolt',
        color: '#0088cc',
        filter: 'basic',
        yield: 0.2,
        interval: 2.5 * 3600000,
        cycleText: '2.5 hours',
        cycleTextAr: '٢.٥ ساعة',
        hashrate: '50 MH/s',
        requirements: null,
        plans: [
            { duration: 3, durationText: '3 days', durationTextAr: '٣ أيام', price: 5.0, returnPercent: 40, returnAmount: 2.0, total: 7.0 },
            { duration: 7, durationText: '7 days', durationTextAr: '٧ أيام', price: 10.0, returnPercent: 80, returnAmount: 8.0, total: 18.0 },
            { duration: 15, durationText: '15 days', durationTextAr: '١٥ يوماً', price: 15.0, returnPercent: 170, returnAmount: 25.5, total: 40.5 }
        ]
    },
    {
        id: 'm3',
        name: 'Turbo v3',
        nameAr: 'تربو v3',
        description: 'Next-gen cooling system. Maximum efficiency!',
        descriptionAr: 'تبريد متطور. كفاءة قصوى!',
        icon: 'fa-rocket',
        color: '#00f2ff',
        filter: 'pro',
        yield: 0.35,
        interval: 2 * 3600000,
        cycleText: '2 hours',
        cycleTextAr: 'ساعتان',
        hashrate: '120 MH/s',
        requirements: null,
        plans: [
            { duration: 3, durationText: '3 days', durationTextAr: '٣ أيام', price: 7.5, returnPercent: 40, returnAmount: 3.0, total: 10.5 },
            { duration: 7, durationText: '7 days', durationTextAr: '٧ أيام', price: 15.0, returnPercent: 80, returnAmount: 12.0, total: 27.0 },
            { duration: 15, durationText: '15 days', durationTextAr: '١٥ يوماً', price: 22.5, returnPercent: 170, returnAmount: 38.25, total: 60.75 }
        ]
    },
    {
        id: 'm4',
        name: 'ASIC Pro',
        nameAr: 'ASIC برو',
        description: 'Professional mining rig. Serious power!',
        descriptionAr: 'جهاز احترافي. قوة هائلة!',
        icon: 'fa-gem',
        color: '#bc13fe',
        filter: 'pro',
        yield: 0.5,
        interval: 3600000,
        cycleText: '1 hour',
        cycleTextAr: 'ساعة',
        hashrate: '300 MH/s',
        requirements: { minEarnings: 5 },
        plans: [
            { duration: 3, durationText: '3 days', durationTextAr: '٣ أيام', price: 10.0, returnPercent: 40, returnAmount: 4.0, total: 14.0 },
            { duration: 7, durationText: '7 days', durationTextAr: '٧ أيام', price: 20.0, returnPercent: 80, returnAmount: 16.0, total: 36.0 },
            { duration: 15, durationText: '15 days', durationTextAr: '١٥ يوماً', price: 30.0, returnPercent: 170, returnAmount: 51.0, total: 81.0 }
        ]
    },
    {
        id: 'm5',
        name: 'Quantum RIG',
        nameAr: 'كوانتم ريج',
        description: 'Quantum computing technology. The future!',
        descriptionAr: 'تقنية كمومية. مستقبل التعدين!',
        icon: 'fa-crown',
        color: '#ffaa00',
        filter: 'quantum',
        yield: 0.8,
        interval: 45 * 60 * 1000,
        cycleText: '45 minutes',
        cycleTextAr: '٤٥ دقيقة',
        hashrate: '800 MH/s',
        requirements: { referrals: 3 },
        plans: [
            { duration: 3, durationText: '3 days', durationTextAr: '٣ أيام', price: 50, returnPercent: 80, returnAmount: 40, total: 90 },
            { duration: 7, durationText: '7 days', durationTextAr: '٧ أيام', price: 75, returnPercent: 120, returnAmount: 90, total: 165 },
            { duration: 15, durationText: '15 days', durationTextAr: '١٥ يوماً', price: 100, returnPercent: 200, returnAmount: 200, total: 300 }
        ]
    },
    {
        id: 'm6',
        name: 'Legendary',
        nameAr: 'أسطوري',
        description: 'The ultimate mining machine. Legendary status!',
        descriptionAr: 'الجهاز الأقوى. مكانة أسطورية!',
        icon: 'fa-star',
        color: '#ff4444',
        filter: 'quantum',
        yield: 1.2,
        interval: 30 * 60 * 1000,
        cycleText: '30 minutes',
        cycleTextAr: '٣٠ دقيقة',
        hashrate: '2 GH/s',
        requirements: { referrals: 5, minEarnings: 25, streak: 7 },
        plans: [
            { duration: 3, durationText: '3 days', durationTextAr: '٣ أيام', price: 75, returnPercent: 80, returnAmount: 60, total: 135 },
            { duration: 7, durationText: '7 days', durationTextAr: '٧ أيام', price: 112.5, returnPercent: 120, returnAmount: 135, total: 247.5 },
            { duration: 15, durationText: '15 days', durationTextAr: '١٥ يوماً', price: 150, returnPercent: 200, returnAmount: 300, total: 450 }
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
    { id: 'earnings_100', name: 'Crypto Whale', nameAr: 'حوت الكريبتو', icon: '🐋', reward: 3.0, condition: 'earnings:100' },
    { id: 'night_owl', name: 'Night Owl', nameAr: 'بومة الليل', icon: '🦉', reward: 0.2, condition: 'special:night' },
    { id: 'early_bird', name: 'Early Bird', nameAr: 'طير باكر', icon: '🐦', reward: 0.2, condition: 'special:early' }
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

// ====== 8. LUCKY WHEEL PRIZES ======
const WHEEL_PRIZES = [
    { type: 'TON', amount: 0.1, weight: 15 },
    { type: 'TON', amount: 0.2, weight: 12 },
    { type: 'TON', amount: 0.5, weight: 10 },
    { type: 'TON', amount: 1, weight: 8 },
    { type: 'TON', amount: 2, weight: 6 },
    { type: 'TON', amount: 5, weight: 5 },
    { type: 'TON', amount: 10, weight: 4 },
    { type: 'TON', amount: 25, weight: 3 },
    { type: 'TON', amount: 50, weight: 2 },
    { type: 'TON', amount: 100, weight: 1 },
    { type: 'USDT', amount: 0.25, weight: 12 },
    { type: 'USDT', amount: 0.5, weight: 10 },
    { type: 'USDT', amount: 1, weight: 8 },
    { type: 'USDT', amount: 2, weight: 6 },
    { type: 'USDT', amount: 5, weight: 5 },
    { type: 'USDT', amount: 10, weight: 4 },
    { type: 'USDT', amount: 25, weight: 3 },
    { type: 'USDT', amount: 50, weight: 2 },
    { type: 'USDT', amount: 100, weight: 1 },
    { type: 'USDT', amount: 250, weight: 1 },
    { type: 'USDT', amount: 500, weight: 1 },
    { type: 'SOL', amount: 1, weight: 3 },
    { type: 'BTC', amount: 0.0001, weight: 2 },
    { type: 'ETH', amount: 0.001, weight: 2 },
    { type: 'SPIN', amount: 1, weight: 5 },
    { type: 'NOTHING', amount: 0, weight: 10 },
    
    { type: 'TON', amount: 50, weight: 40, jackpot: true },
    { type: 'USDT', amount: 100, weight: 30, jackpot: true },
    { type: 'SOL', amount: 5, weight: 20, jackpot: true },
    { type: 'BTC', amount: 0.005, weight: 10, jackpot: true }
];

// ====== 9. FIREBASE INITIALIZATION ======
let firebaseApp, db;

try {
    if (typeof firebase !== 'undefined') {
        firebaseApp = firebase.initializeApp(CONFIG.FIREBASE);
        db = firebase.firestore();
        db.enablePersistence({ synchronizeTabs: true })
            .catch(err => console.warn('Firestore persistence error:', err));
        console.log("🔥 Firebase initialized successfully");
    }
} catch (error) {
    console.error("Firebase initialization error:", error);
}

// ====== 10. TON CONNECT INITIALIZATION ======
let tonConnectUI = null;
let tonWallet = null;

async function initTonConnect() {
    if (typeof TON_CONNECT_UI === 'undefined') {
        console.warn('TON Connect UI not available');
        return false;
    }
    
    try {
        tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
            manifestUrl: CONFIG.TON.MANIFEST_URL,
            buttonRootId: 'tonConnectButton',
            language: currentLanguage === 'ar' ? 'ar' : 'en'
        });
        
        tonConnectUI.onStatusChange(handleWalletChange);
        console.log('✅ TON Connect initialized');
        setTimeout(updateWalletUI, 1000);
        return true;
    } catch (e) {
        console.error('TON Connect error:', e);
        return false;
    }
}

function handleWalletChange(wallet) {
    tonWallet = wallet;
    updateWalletUI();
    
    if (wallet) {
        const addr = wallet.account.address;
        showToast(`Wallet connected: ${formatAddress(addr)}`, 'success');
        userData.tonWallet = addr;
        saveUserToCache();
        getWalletBalance();
    } else {
        userData.tonWallet = null;
        saveUserToCache();
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
    
    if (modalUserBalance) {
        modalUserBalance.textContent = formatBalance(userData.balances.TON || 0, 'TON') + ' TON';
    }
    
    if (tonWallet) {
        if (statusEl) {
            statusEl.innerHTML = `
                <div class="status-indicator online"></div>
                <span>${t('wallet.connected')}</span>
            `;
        }
        if (paymentStatus) {
            paymentStatus.innerHTML = `
                <div class="status online">
                    <i class="fas fa-circle"></i>
                    <span>${t('wallet.connected')}</span>
                </div>
            `;
        }
        if (infoEl) infoEl.style.display = 'flex';
        if (addressEl) addressEl.textContent = formatAddress(tonWallet.account.address);
        if (modalInfo) modalInfo.style.display = 'flex';
        if (modalAddress) modalAddress.textContent = formatAddress(tonWallet.account.address);
        if (payBtn) {
            if (currentPaymentMethod === 'balance') {
                payBtn.innerHTML = `<i class="fas fa-wallet"></i> ${t('payment.confirmBalance')}`;
                payBtn.disabled = false;
            } else {
                payBtn.innerHTML = `<i class="fas fa-external-link-alt"></i> ${t('payment.confirmWallet')}`;
                payBtn.disabled = false;
            }
        }
        if (depositBtn) depositBtn.disabled = false;
    } else {
        if (statusEl) {
            statusEl.innerHTML = `
                <div class="status-indicator offline"></div>
                <span>${t('wallet.disconnected')}</span>
            `;
        }
        if (paymentStatus) {
            paymentStatus.innerHTML = `
                <div class="status offline">
                    <i class="fas fa-circle"></i>
                    <span>${t('wallet.notConnected')}</span>
                </div>
            `;
        }
        if (infoEl) infoEl.style.display = 'none';
        if (modalInfo) modalInfo.style.display = 'none';
        if (payBtn) {
            if (currentPaymentMethod === 'wallet') {
                payBtn.disabled = true;
            } else {
                payBtn.disabled = false;
            }
        }
        if (depositBtn) depositBtn.disabled = true;
    }
}

async function getWalletBalance() {
    if (!tonWallet) return null;
    
    try {
        const res = await fetch(
            `${CONFIG.TON.CENTER_API}getAddressBalance?address=${tonWallet.account.address}&api_key=${CONFIG.TON.API_KEY}`
        );
        const data = await res.json();
        if (data.ok) {
            const balance = data.result / 1e9;
            const balanceEl = document.getElementById('connectedWalletBalance');
            if (balanceEl) balanceEl.textContent = balance.toFixed(2) + ' TON';
            return balance;
        }
    } catch (e) {
        console.error('Balance fetch error:', e);
    }
    return null;
}

async function connectWallet() {
    if (!tonConnectUI) {
        const success = await initTonConnect();
        if (!success) {
            showToast('Failed to initialize TON Connect', 'error');
            return;
        }
    }
    
    try {
        await tonConnectUI.openModal();
    } catch (e) {
        console.error('Connection error:', e);
        showToast('Failed to connect wallet', 'error');
    }
}

async function disconnectWallet() {
    if (tonConnectUI) {
        await tonConnectUI.disconnect();
        showToast('Wallet disconnected', 'info');
    }
}

// ====== 11. USER IDENTIFICATION ======
const userId = tg?.initDataUnsafe?.user?.id?.toString() || 
               localStorage.getItem('ton_user_id') || 
               'user_' + Math.random().toString(36).substr(2, 9);

const userName = tg?.initDataUnsafe?.user?.first_name || 'Crypto Miner';
const userFirstName = tg?.initDataUnsafe?.user?.first_name || 'Miner';
const userLastName = tg?.initDataUnsafe?.user?.last_name || '';
const userUsername = tg?.initDataUnsafe?.user?.username || '';
const userPhoto = tg?.initDataUnsafe?.user?.photo_url || '';

localStorage.setItem('ton_user_id', userId);

// ====== 12. ADMIN SYSTEM ======
let isAdmin = userId === CONFIG.TON.ADMIN_ID;
let adminClickCount = 0;
let lastAdminClick = 0;

function checkAdminAndShowSetting() {
    if (isAdmin) {
        const adminSetting = document.getElementById('adminSettingItem');
        if (adminSetting) adminSetting.style.display = 'flex';
    }
}

function handleAvatarClick() {
    const now = Date.now();
    if (now - lastAdminClick > 2000) {
        adminClickCount = 0;
    }
    
    adminClickCount++;
    lastAdminClick = now;
    
    if (adminClickCount >= 5) {
        adminClickCount = 0;
        showAdminPasswordModal();
    }
}

function showAdminPasswordModal() {
    const password = prompt(t('admin.password'));
    if (password === CONFIG.TON.ADMIN_PASSWORD) {
        isAdmin = true;
        showAdminPanel();
    } else if (password !== null) {
        showToast(t('admin.wrongPassword'), 'error');
    }
}

// ====== 13. CACHE KEYS ======
const CACHE_KEYS = {
    USER: `user_${userId}`,
    TRANSACTIONS: `transactions_${userId}`,
    PRICES: 'live_prices',
    MINING: `mining_${userId}`,
    NOTIFICATIONS: `notifications_${userId}`,
    REFERRAL_PROCESSED: `referral_processed_${userId}`,
    LEADERBOARD: 'leaderboard_cache',
    WHEEL: `wheel_${userId}`,
    AUTO_CLICKER: `autoclicker_${userId}`
};

// ====== 14. USER STATE ======
let userData = {
    uid: userId,
    username: userName,
    firstName: userFirstName,
    lastName: userLastName,
    telegramUsername: userUsername,
    photoUrl: userPhoto,
    
    balances: {
        TON: 0,
        USDT: 0,
        BNB: 0,
        BTC: 0,
        ETH: 0,
        SOL: 0
    },
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
    
    autoClicker: {
        active: false,
        expiry: 0,
        lastAutoClaim: 0
    },
    
    wheel: {
        spinsToday: 0,
        lastFreeSpin: 0,
        totalSpins: 0,
        jackpotCounter: 0,
        jackpotWon: 0
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
    achievements: [],
    
    language: currentLanguage,
    notifications: true,
    
    createdAt: Date.now(),
    tonWallet: null,
    usedHashes: []
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
                console.log('✅ User loaded from cache');
                return true;
            }
        }
    } catch (e) {
        console.error('Cache load error:', e);
    }
    return false;
}

function saveUserToCache() {
    try {
        const dataToSave = {
            ...userData,
            _timestamp: Date.now()
        };
        localStorage.setItem(CACHE_KEYS.USER, JSON.stringify(dataToSave));
    } catch (e) {
        console.error('Cache save error:', e);
    }
}

function loadLocalTransactions() {
    try {
        const saved = localStorage.getItem(CACHE_KEYS.TRANSACTIONS);
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        console.error("Error loading transactions:", error);
        return [];
    }
}

function saveLocalTransactions(transactions) {
    try {
        localStorage.setItem(CACHE_KEYS.TRANSACTIONS, JSON.stringify(transactions));
    } catch (error) {
        console.error("Error saving transactions:", error);
    }
}

function loadLocalNotifications() {
    try {
        const saved = localStorage.getItem(CACHE_KEYS.NOTIFICATIONS);
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        console.error("Error loading notifications:", error);
        return [];
    }
}

function saveLocalNotifications(notifications) {
    try {
        localStorage.setItem(CACHE_KEYS.NOTIFICATIONS, JSON.stringify(notifications));
    } catch (error) {
        console.error("Error saving notifications:", error);
    }
}

// ====== 16. ON-DEMAND LISTENERS ======
let activeListeners = new Map();
let listenerTimeouts = new Map();

function startOnDemandListener(collection, docId, callback, timeoutMs = CONFIG.CACHE.LISTENER_TTL) {
    const listenerId = `${collection}_${docId}`;
    
    if (activeListeners.has(listenerId)) {
        activeListeners.get(listenerId)();
        activeListeners.delete(listenerId);
    }
    
    if (listenerTimeouts.has(listenerId)) {
        clearTimeout(listenerTimeouts.get(listenerId));
        listenerTimeouts.delete(listenerId);
    }
    
    console.log(`👂 Starting on-demand listener for ${listenerId} (${timeoutMs/1000}s)`);
    
    const unsubscribe = db.collection(collection).doc(docId).onSnapshot((doc) => {
        if (doc.exists) {
            const data = doc.data();
            callback(data);
            
            if (data.status === 'approved' || data.status === 'rejected') {
                console.log(`✅ Final status reached, stopping listener`);
                stopOnDemandListener(listenerId);
            }
        }
    }, (error) => {
        console.error(`❌ Listener error:`, error);
        stopOnDemandListener(listenerId);
    });
    
    activeListeners.set(listenerId, unsubscribe);
    
    const timeout = setTimeout(() => {
        console.log(`⏰ Listener timeout after ${timeoutMs/1000}s`);
        stopOnDemandListener(listenerId);
    }, timeoutMs);
    
    listenerTimeouts.set(listenerId, timeout);
}

function stopOnDemandListener(listenerId) {
    if (activeListeners.has(listenerId)) {
        activeListeners.get(listenerId)();
        activeListeners.delete(listenerId);
    }
    
    if (listenerTimeouts.has(listenerId)) {
        clearTimeout(listenerTimeouts.get(listenerId));
        listenerTimeouts.delete(listenerId);
    }
}

function stopAllListeners() {
    activeListeners.forEach((unsubscribe) => unsubscribe());
    activeListeners.clear();
    listenerTimeouts.forEach((timeout) => clearTimeout(timeout));
    listenerTimeouts.clear();
}

// ====== 17. LOAD USER DATA ======
let lastUserLoadTime = 0;
let lastHistoryCheckTime = 0;

async function loadUserData(force = false) {
    try {
        console.log("📂 Loading user data...");
        
        const now = Date.now();
        
        if (!force && loadUserFromCache()) {
            updateUI();
            return;
        }
        
        if (db) {
            try {
                const userDoc = await db.collection('users').doc(userId).get();
                
                if (userDoc.exists) {
                    const fbData = userDoc.data();
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
                    
                } else {
                    userData.referralCode = generateReferralCode();
                    userData.createdAt = new Date().toISOString();
                    
                    await db.collection('users').doc(userId).set({
                        ...userData,
                        createdAt: firebase.firestore.FieldValue.serverTimestamp()
                    });
                }
                
                lastUserLoadTime = now;
                saveUserToCache();
                
            } catch (e) {
                console.error('Firebase error:', e);
            }
        } else {
            userData.transactions = loadLocalTransactions();
            if (!userData.referralCode) {
                userData.referralCode = generateReferralCode();
            }
        }
        
        if (hasReferralCode() && !userData.referredBy) {
            await processReferral();
        }
        
        updateUI();
        checkAdminAndShowSetting();
        
    } catch (error) {
        console.error("❌ Error loading user data:", error);
    }
}

// ====== 18. REFERRAL SYSTEM ======
function generateReferralCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const random = Array.from({length:6}, () => chars[Math.floor(Math.random()*chars.length)]).join('');
    return `${userId.slice(-4)}${random}`.toUpperCase();
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
    
    const urlParams = new URLSearchParams(window.location.search);
    let referralCode = urlParams.get('startapp') || tg?.initDataUnsafe?.start_param;
    
    if (!referralCode || referralCode === userData.referralCode || userData.referredBy) return;
    
    console.log("🎯 Processing referral code:", referralCode);
    
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
        const referrerQuery = await db.collection('users')
            .where('referralCode', '==', referralCode)
            .limit(1)
            .get();
        
        if (!referrerQuery.empty) {
            const referrerDoc = referrerQuery.docs[0];
            const referrerId = referrerDoc.id;
            const referrerData = referrerDoc.data();
            
            if (referrerId === userId) return;
            
            if (referrerData.referrals && referrerData.referrals.includes(userId)) return;
            
            const updatedReferrals = [...(referrerData.referrals || []), userId];
            
            await db.collection('users').doc(referrerId).update({
                referrals: updatedReferrals,
                referralCount: (referrerData.referralCount || 0) + 1,
                'balances.TON': firebase.firestore.FieldValue.increment(CONFIG.ECONOMY.REFERRAL_BONUS),
                referralEarnings: firebase.firestore.FieldValue.increment(CONFIG.ECONOMY.REFERRAL_BONUS),
                [`referralMiningTrack.${userId}`]: 0
            });
            
            userData.referredBy = referralCode;
            userData.balances.TON += CONFIG.ECONOMY.REFERRAL_BONUS;
            userData.balance = userData.balances.TON;
            userData.totalEarned += CONFIG.ECONOMY.REFERRAL_BONUS;
            userData.referralEarnings += CONFIG.ECONOMY.REFERRAL_BONUS;
            
            await db.collection('users').doc(userId).update({
                referredBy: referralCode,
                'balances.TON': userData.balances.TON
            });
            
            saveUserToCache();
            
            showToast(t('notif.welcomeBonus'), 'success');
            await addNotification(referrerId, t('notif.referralBonus'), 'success');
            
        } else {
            console.log("❌ Invalid referral code");
            localStorage.removeItem(CACHE_KEYS.REFERRAL_PROCESSED);
        }
    } catch (e) {
        console.error('Referral error:', e);
        localStorage.removeItem(CACHE_KEYS.REFERRAL_PROCESSED);
    }
}

async function processReferralMiningBonus(referralId, miningAmount) {
    if (!db || !userData.referrals || !userData.referrals.includes(referralId)) return;
    
    const bonus = miningAmount * CONFIG.ECONOMY.REFERRAL_PERCENT;
    
    if (!userData.referralMiningTrack) userData.referralMiningTrack = {};
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
            referralEarnings: userData.referralEarnings,
            [`referralMiningTrack.${referralId}`]: userData.referralMiningTrack[referralId]
        });
    } catch (e) {
        console.error('Error updating referral mining bonus:', e);
    }
    
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
            
            addTransaction('referral_bonus', milestone.reward, {
                currency: 'USDT',
                details: `${milestone.referrals} referrals milestone`
            });
            
            addLocalNotification(`🏆 You reached ${milestone.referrals} referrals! Earned ${milestone.reward} USDT!`, 'success');
            
            if (db) {
                try {
                    await db.collection('users').doc(userId).update({
                        'balances.USDT': userData.balances.USDT,
                        referralMilestonesClaimed: userData.referralMilestonesClaimed
                    });
                } catch (e) {
                    console.error('Error updating milestone:', e);
                }
            }
        }
    }
    
    saveUserToCache();
    renderReferralMilestones();
}

// ====== 20. NOTIFICATION SYSTEM ======
let localNotifications = loadLocalNotifications();
let unreadCount = localNotifications.filter(n => !n.read).length;

function addLocalNotification(message, type = 'info') {
    const notification = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
        message: message,
        type: type,
        read: false,
        timestamp: new Date().toISOString()
    };
    
    localNotifications.unshift(notification);
    
    if (localNotifications.length > 50) {
        localNotifications = localNotifications.slice(0, 50);
    }
    
    saveLocalNotifications(localNotifications);
    updateNotificationBadge();
    showFloatingToast(message, type);
    
    return notification;
}

async function addNotification(targetUserId, message, type = 'info') {
    if (targetUserId === userId) {
        addLocalNotification(message, type);
    }
    
    if (db && targetUserId !== userId) {
        try {
            await db.collection('users').doc(targetUserId).update({
                notifications: firebase.firestore.FieldValue.arrayUnion({
                    id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
                    message,
                    type,
                    read: false,
                    timestamp: new Date().toISOString()
                })
            });
        } catch (e) {
            console.error('Error sending notification:', e);
        }
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

function markNotificationRead(notificationId) {
    const notification = localNotifications.find(n => n.id === notificationId);
    if (notification && !notification.read) {
        notification.read = true;
        saveLocalNotifications(localNotifications);
        updateNotificationBadge();
        renderNotifications();
    }
}

function clearReadNotifications() {
    const readCount = localNotifications.filter(n => n.read).length;
    const unreadCount = localNotifications.filter(n => !n.read).length;
    
    if (readCount === 0) {
        showToast('No read notifications', 'info');
        return;
    }
    
    if (confirm(`Clear ${readCount} read notification(s)? ${unreadCount} unread will remain.`)) {
        localNotifications = localNotifications.filter(n => !n.read);
        saveLocalNotifications(localNotifications);
        updateNotificationBadge();
        renderNotifications();
        showToast(`Cleared ${readCount} notifications`, 'success');
    }
}

function clearAllNotifications() {
    const unreadCount = localNotifications.filter(n => !n.read).length;
    
    if (unreadCount > 0) {
        if (!confirm(`Warning: You have ${unreadCount} unread notifications. Delete all?`)) {
            return;
        }
    } else {
        if (!confirm('Delete all notifications?')) return;
    }
    
    localNotifications = [];
    saveLocalNotifications(localNotifications);
    updateNotificationBadge();
    renderNotifications();
    showToast('All notifications cleared', 'success');
}

function renderNotifications() {
    const list = document.getElementById('notificationsList');
    if (!list) return;
    
    if (localNotifications.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <i class="fa-regular fa-bell-slash"></i>
                <p>${t('notifications.no_notifications')}</p>
            </div>
        `;
        return;
    }
    
    list.innerHTML = localNotifications.map(notif => {
        const date = new Date(notif.timestamp);
        const formattedDate = date.toLocaleDateString() + ' ' + 
                             date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const unreadClass = notif.read ? '' : 'unread';
        
        let icon = 'fa-bell';
        if (notif.type === 'success') icon = 'fa-circle-check';
        if (notif.type === 'error') icon = 'fa-circle-xmark';
        
        return `
            <div class="notification-item ${unreadClass}" onclick="markNotificationRead('${notif.id}')">
                <div class="notification-header">
                    <span class="notification-title">
                        <i class="fa-regular ${icon}"></i>
                        ${t('notifications.title')}
                    </span>
                    <span class="notification-time">${formattedDate}</span>
                </div>
                <div class="notification-message">${notif.message}</div>
            </div>
        `;
    }).join('');
}

function showNotifications() {
    const modal = document.getElementById('notificationsModal');
    if (modal) {
        modal.classList.add('show');
        renderNotifications();
    }
}

// ====== 21. FLOATING NOTIFICATIONS ======
let floatingTimeouts = [];

function showFloatingToast(message, type = 'info') {
    const toast = document.getElementById('floatingNotification');
    if (!toast) return;
    
    toast.textContent = message;
    toast.className = 'floating-notification';
    toast.classList.add(type);
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function startFloatingNotifications() {
    const messages = [
        "🔥 User just mined 0.35 TON",
        "💎 New user joined with referral",
        "⚡ Turbo v3 rented",
        "💰 Withdrawal of 5 TON approved",
        "🏆 Achievement unlocked: 7-Day Streak",
        "💫 Referral bonus claimed: 0.005 TON",
        "⛏️ Mining reward claimed",
        "💎 Legendary machine activated!",
        "🎡 Someone won 50 TON on Lucky Wheel!",
        "🤖 Auto Miner bought"
    ];
    
    function showNext() {
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        showFloatingToast(randomMsg, 'info');
        
        const nextDelay = 8000 + Math.random() * 7000;
        floatingTimeouts.push(setTimeout(showNext, nextDelay));
    }
    
    setTimeout(showNext, 3000);
}

function stopFloatingNotifications() {
    floatingTimeouts.forEach(timeout => clearTimeout(timeout));
    floatingTimeouts = [];
}

// ====== 22. WELCOME STICKER SYSTEM ======
const WELCOME_STICKERS = ['🤝', '🫣', '🥰', '🥳', '💲', '💰', '💸', '💵', '🤪', '😱', '😤', '😎', '🤑', '💯', '💖', '✨', '🌟', '⭐', '🔥', '⚡', '💎', '🔔', '🎁', '🎈', '🎉', '🎊', '👑', '🚀', '💫', '⭐'];

let lastStickerTime = 0;
const STICKER_COOLDOWN = 12 * 60 * 1000;

function showRandomSticker() {
    const now = Date.now();
    if (now - lastStickerTime < STICKER_COOLDOWN) return;
    
    const stickerEl = document.getElementById('welcomeSticker');
    if (!stickerEl) return;
    
    const randomSticker = WELCOME_STICKERS[Math.floor(Math.random() * WELCOME_STICKERS.length)];
    stickerEl.textContent = randomSticker;
    
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

// ====== 23. PRICES ======
let livePrices = {};
let lastPricesLoadTime = 0;

async function loadPrices(force = false) {
    const now = Date.now();
    const cached = localStorage.getItem(CACHE_KEYS.PRICES);
    
    if (!force && cached && (now - lastPricesLoadTime) < CONFIG.CACHE.PRICES_TTL) {
        const { prices, timestamp } = JSON.parse(cached);
        livePrices = prices;
        lastPricesLoadTime = timestamp;
        console.log("📦 Using cached prices");
        updatePrices();
        return;
    }
    
    try {
        const ids = Object.values(CONFIG.CRYPTO_IDS).join(',');
        const response = await fetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`
        );
        const data = await response.json();
        
        for (const [symbol, id] of Object.entries(CONFIG.CRYPTO_IDS)) {
            if (data[id]) {
                livePrices[symbol] = {
                    price: data[id].usd,
                    change: data[id].usd_24h_change || 0
                };
            }
        }
        
        lastPricesLoadTime = now;
        localStorage.setItem(CACHE_KEYS.PRICES, JSON.stringify({
            prices: livePrices,
            timestamp: now
        }));
        
        updatePrices();
        
    } catch (error) {
        console.error("Error fetching prices:", error);
    }
}

// ====== 24. UTILITIES ======
function formatAddress(addr) {
    if (!addr) return '';
    if (addr.length < 10) return addr;
    return addr.slice(0,6) + '...' + addr.slice(-4);
}

function formatTON(amount) {
    return amount.toFixed(4);
}

function formatNumber(num) {
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    if (num < 0.0001) return num.toFixed(8);
    if (num < 0.01) return num.toFixed(6);
    return num.toFixed(2);
}

function formatBalance(amount, currency) {
    if (currency === 'USDT' || currency === 'TON') {
        return amount.toFixed(2);
    } else if (currency === 'BNB' || currency === 'ETH' || currency === 'SOL') {
        return amount.toFixed(4);
    } else if (currency === 'BTC') {
        return amount.toFixed(6);
    } else {
        return amount.toFixed(4);
    }
}

function isValidAddress(address, currency) {
    const network = CONFIG.NETWORK_TYPES[currency] || 'bsc';
    
    if (network === 'bsc' || network === 'erc20') {
        return address.startsWith('0x') && address.length === 42;
    } else if (network === 'solana') {
        return address.length >= 32 && address.length <= 44 && !address.startsWith('0x');
    } else if (network === 'bitcoin') {
        return address.startsWith('1') || address.startsWith('3') || address.startsWith('bc1');
    } else if (network === 'ton') {
        return CONFIG.TON.WALLET_REGEX.test(address);
    }
    
    return address.length > 0;
}

function validateTransactionHash(txHash, currency) {
    const network = CONFIG.NETWORK_TYPES[currency] || 'bsc';
    
    if (network === 'bsc' || network === 'erc20') {
        return txHash.startsWith('0x') && txHash.length === 66;
    } else if (network === 'solana') {
        return txHash.length >= 64 && txHash.length <= 88 && !txHash.startsWith('0x');
    } else {
        return txHash.length > 10;
    }
}

function getTimeUntilNextClaim() {
    const machine = getActiveMachine();
    const elapsed = Date.now() - userData.lastClaim;
    return Math.max(0, machine.interval - elapsed);
}

function getClaimProgress() {
    const machine = getActiveMachine();
    const elapsed = Date.now() - userData.lastClaim;
    return Math.min((elapsed / machine.interval) * 100, 100);
}

function getActiveMachine() {
    return MACHINES.find(m => m.id === userData.activeMachine) || MACHINES[0];
}

function getRemainingRentalTime() {
    if (userData.activeMachine === 'm1') return Infinity;
    return Math.max(0, userData.machineExpiry - Date.now());
}

function isMachineExpired() {
    if (userData.activeMachine === 'm1') return false;
    return userData.machineExpiry < Date.now();
}

function updateStreak() {
    const today = new Date().toDateString();
    if (userData.lastClaimDate === today) return userData.streak;
    
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const newStreak = (userData.lastClaimDate === yesterday) ? userData.streak + 1 : 1;
    
    userData.streak = newStreak;
    userData.lastClaimDate = today;
    
    if (newStreak > userData.longestStreak) {
        userData.longestStreak = newStreak;
    }
    
    return newStreak;
}

function getStreakBonus() {
    if (userData.streak >= 30) return CONFIG.ECONOMY.STREAK_BONUS[30];
    if (userData.streak >= 7) return CONFIG.ECONOMY.STREAK_BONUS[7];
    if (userData.streak >= 3) return CONFIG.ECONOMY.STREAK_BONUS[3];
    return 1.0;
}

function randomId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    const toastIcon = toast.querySelector('i');
    
    toastMessage.textContent = message;
    
    if (type === 'success') toastIcon.className = 'fa-regular fa-circle-check';
    else if (type === 'error') toastIcon.className = 'fa-regular fa-circle-xmark';
    else if (type === 'warning') toastIcon.className = 'fa-regular fa-circle-exclamation';
    else toastIcon.className = 'fa-regular fa-circle-info';
    
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

function animateElement(selector, animation) {
    const el = document.querySelector(selector);
    if (el) {
        el.classList.add(animation);
        setTimeout(() => el.classList.remove(animation), 500);
    }
}

function scrollToTop() {
    document.querySelector('.main-content').scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ====== 25. MINING MANAGER ======
let miningTimer = null;
let autoClickerTimer = null;

function startMining() {
    if (miningTimer) clearInterval(miningTimer);
    miningTimer = setInterval(updateMining, 1000);
    updateMining();
    
    if (userData.autoClicker && userData.autoClicker.active) {
        startAutoClicker();
    }
}

function stopMining() {
    if (miningTimer) {
        clearInterval(miningTimer);
        miningTimer = null;
    }
    if (autoClickerTimer) {
        clearInterval(autoClickerTimer);
        autoClickerTimer = null;
    }
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
        if (timerEl) {
            timerEl.textContent = 'READY';
            timerEl.style.color = '#22c55e';
        }
        if (claimBtn) claimBtn.disabled = false;
    } else {
        if (timerEl) {
            timerEl.textContent = formatTime(timeLeft);
            timerEl.style.color = '#00f2ff';
        }
        if (claimBtn) claimBtn.disabled = true;
    }
    
    if (nextEl) nextEl.textContent = formatTON(machine.yield) + ' TON';
    
    if (isMachineExpired()) {
        handleExpiry();
    }
    
    if (userData.autoClicker && userData.autoClicker.active) {
        if (Date.now() > userData.autoClicker.expiry) {
            userData.autoClicker.active = false;
            saveUserToCache();
            stopAutoClicker();
            showToast('Auto Miner expired', 'info');
        }
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
    if (getTimeUntilNextClaim() > 0) {
        showToast('Not ready yet', 'error');
        return;
    }
    
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
                const referrerQuery = await db.collection('users')
                    .where('referralCode', '==', userData.referredBy)
                    .limit(1)
                    .get();
                
                if (!referrerQuery.empty) {
                    const referrerId = referrerQuery.docs[0].id;
                    await addReferralMiningBonus(referrerId, reward);
                }
            }
        } catch (e) {
            console.error('Error processing referral mining bonus:', e);
        }
    }
    
    showToast(`Claimed ${formatTON(reward)} TON!${bonus > 1 ? ` (${((bonus-1)*100).toFixed(0)}% bonus)` : ''}`, 'success');
    
    createParticles();
    
    updateUI();
    checkAchievements();
    saveToFirebase();
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
    } catch (e) {
        console.error('Error adding referral mining bonus:', e);
    }
}

function createParticles() {
    const container = document.querySelector('.miner-particles');
    if (!container) return;
    
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() + 's';
        container.appendChild(particle);
        
        setTimeout(() => particle.remove(), 2000);
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
    
    userData.transactions.unshift(tx);
    
    if (userData.transactions.length > 100) {
        userData.transactions = userData.transactions.slice(0, 100);
    }
    
    saveLocalTransactions(userData.transactions);
    updateActivityFeed();
}

// ====== 26. AUTO CLICKER SYSTEM ======
function startAutoClicker() {
    if (autoClickerTimer) clearInterval(autoClickerTimer);
    
    autoClickerTimer = setInterval(async () => {
        if (!userData.autoClicker || !userData.autoClicker.active) return;
        if (Date.now() > userData.autoClicker.expiry) {
            userData.autoClicker.active = false;
            saveUserToCache();
            stopAutoClicker();
            showToast('Auto Miner expired', 'info');
            return;
        }
        
        const timeUntilNext = getTimeUntilNextClaim();
        if (timeUntilNext <= 0) {
            await claim();
        }
    }, 1000);
}

function stopAutoClicker() {
    if (autoClickerTimer) {
        clearInterval(autoClickerTimer);
        autoClickerTimer = null;
    }
}

function buyAutoClicker() {
    if (userData.balances.TON < CONFIG.ECONOMY.AUTO_CLICKER_PRICE) {
        showToast(t('error.insufficientBalance', { currency: 'TON' }), 'error');
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
        details: 'Auto Miner purchase'
    });
    
    startAutoClicker();
    
    showToast(t('autoclicker.bought'), 'success');
    updateUI();
}

// ====== 27. ACHIEVEMENTS MANAGER ======
function checkAchievements() {
    const newlyUnlocked = [];
    
    ACHIEVEMENTS.forEach(ach => {
        if (userData.achievements.includes(ach.id)) return;
        
        let completed = false;
        const [type, target] = ach.condition.split(':');
        const val = parseInt(target);
        
        switch(type) {
            case 'claims':
                completed = userData.claims >= val;
                break;
            case 'streak':
                completed = userData.streak >= val;
                break;
            case 'referrals':
                completed = (userData.referrals?.length || 0) >= val;
                break;
            case 'upgrades':
                completed = (userData.upgrades || 0) >= val;
                break;
            case 'earnings':
                completed = userData.totalEarned >= val;
                break;
            case 'special':
                const hour = new Date().getHours();
                if (val === 'night') completed = hour >= 0 && hour < 4;
                if (val === 'early') completed = hour >= 5 && hour < 8;
                break;
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
    
    if (newlyUnlocked.length > 0) {
        saveUserToCache();
        renderAchievements();
    }
}

// ====== 28. RENDER FUNCTIONS ======
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
    
    for (const [currency, amount] of Object.entries(userData.balances)) {
        const price = livePrices[currency]?.price || 0;
        total += amount * price;
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
    const achievementsCount = document.getElementById('achievementsCount');
    const totalReferralsStats = document.getElementById('totalReferralsStats');
    
    const machine = getActiveMachine();
    
    if (hashRate) hashRate.textContent = machine.hashrate.split(' ')[0];
    if (streakCount) streakCount.textContent = userData.streak;
    if (totalEarned) totalEarned.textContent = formatTON(userData.totalEarned);
    if (bestStreak) bestStreak.textContent = userData.longestStreak;
    
    const miningDaysValue = Math.floor(userData.claims / 6) || 1;
    if (miningDays) miningDays.textContent = miningDaysValue;
    
    if (totalReferralsStats) totalReferralsStats.textContent = userData.referrals?.length || 0;
    
    if (achievementsCount) {
        const unlockedCount = userData.achievements?.length || 0;
        achievementsCount.textContent = `${unlockedCount}/${ACHIEVEMENTS.length}`;
    }
    
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
        
        return `
            <div class="active-machine-card ${isActive ? 'active' : ''}" onclick="showMarket()">
                <div class="machine-header">
                    <i class="fas ${m.icon}" style="color: ${m.color};"></i>
                    <h4>${currentLanguage === 'ar' ? m.nameAr : m.name}</h4>
                </div>
                <div class="machine-progress">
                    <div class="machine-progress-bar">
                        <div class="machine-progress-fill" style="width: ${progress}%;"></div>
                    </div>
                    <div class="machine-time">
                        <span>${isActive ? 'Next' : 'Inactive'}</span>
                        <span class="value">${isActive ? timeLeft : '--:--'}</span>
                    </div>
                </div>
                <div class="machine-footer">
                    <span class="machine-yield">${m.yield} TON/cycle</span>
                    ${isActive ? '<span class="machine-status"><i class="fas fa-check-circle"></i> Active</span>' : ''}
                </div>
            </div>
        `;
    }).join('');
}

function renderPlansTable() {
    const tbody = document.getElementById('plansTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = MACHINES.map(m => {
        const rowClass = m.filter === 'free' ? 'free-row' : (m.filter === 'quantum' ? 'quantum-row' : '');
        const name = currentLanguage === 'ar' ? m.nameAr : m.name;
        
        return `
            <tr class="${rowClass}">
                <td><i class="fas ${m.icon}" style="color: ${m.color};"></i> ${name}</td>
                ${m.plans.map(p => {
                    if (p.price === 0) return `<td>FREE</td>`;
                    return `<td>${p.price} TON<br><small class="return-text">+${p.returnAmount} TON</small></td>`;
                }).join('')}
            </tr>
        `;
    }).join('');
}

function updateActivityFeed() {
    const feed = document.getElementById('activityFeed');
    if (!feed) return;
    
    const recent = userData.transactions.slice(0, 5);
    
    if (recent.length === 0) {
        feed.innerHTML = '<div class="empty-state">No activity yet</div>';
        return;
    }
    
    feed.innerHTML = recent.map(tx => {
        const date = new Date(tx.timestamp);
        const timeAgo = formatRelativeTime(tx.timestamp);
        
        let icon = 'fa-bolt';
        let title = 'Mining Reward';
        
        if (tx.type === 'deposit') {
            icon = 'fa-arrow-down';
            title = 'Deposit';
        } else if (tx.type === 'withdraw') {
            icon = 'fa-arrow-up';
            title = 'Withdrawal';
        } else if (tx.type === 'rental') {
            icon = 'fa-microchip';
            title = 'Machine Rental';
        } else if (tx.type === 'swap') {
            icon = 'fa-exchange-alt';
            title = 'Swap';
        } else if (tx.type === 'referral_bonus') {
            icon = 'fa-users';
            title = 'Referral Bonus';
        } else if (tx.type === 'autoclicker') {
            icon = 'fa-robot';
            title = 'Auto Miner';
        } else if (tx.type === 'wheel') {
            icon = 'fa-wheelchair';
            title = 'Lucky Wheel';
        }
        
        const currency = tx.currency || 'TON';
        const amountStr = tx.type === 'withdraw' ? '-' : '+';
        
        return `
            <div class="activity-item">
                <div class="activity-icon">
                    <i class="fas ${icon}"></i>
                </div>
                <div class="activity-content">
                    <div class="activity-title">${title}</div>
                    <div class="activity-time">${timeAgo}</div>
                </div>
                <div class="activity-amount">${amountStr}${formatBalance(tx.amount, currency)} ${currency}</div>
            </div>
        `;
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
    if (userIdEl) {
        const displayId = userData.telegramUsername ? `@${userData.telegramUsername}` : `ID: ${userData.uid.slice(-8)}`;
        userIdEl.textContent = displayId;
    }
}

function renderAchievements() {
    const grid = document.getElementById('achievementsGrid');
    if (!grid) return;
    
    grid.innerHTML = ACHIEVEMENTS.slice(0, 8).map(ach => {
        const unlocked = userData.achievements.includes(ach.id);
        const name = currentLanguage === 'ar' ? ach.nameAr : ach.name;
        
        return `
            <div class="achievement-item-legendary ${unlocked ? 'unlocked' : ''}">
                <span class="achievement-icon-legendary">${ach.icon}</span>
                <span class="achievement-name-legendary">${name}</span>
                <span class="achievement-reward-legendary">${ach.reward} TON</span>
            </div>
        `;
    }).join('');
}

function renderAssets() {
    const list = document.getElementById('assetsList');
    if (!list) return;
    
    const assets = CONFIG.ALL_ASSETS.filter(asset => (userData.balances[asset.symbol] || 0) > 0);
    
    if (assets.length === 0) {
        list.innerHTML = '<div class="empty-state">No assets yet</div>';
        return;
    }
    
    list.innerHTML = assets.map(asset => {
        const balance = userData.balances[asset.symbol] || 0;
        const price = livePrices[asset.symbol]?.price || 0;
        const value = balance * price;
        const change = livePrices[asset.symbol]?.change || 0;
        const changeClass = change >= 0 ? 'positive' : 'negative';
        const changeSymbol = change >= 0 ? '+' : '';
        
        return `
            <div class="asset-item-legendary">
                <div class="asset-left">
                    <img src="${CONFIG.CMC_ICONS[asset.symbol]}" class="asset-icon-img" alt="${asset.symbol}">
                    <div class="asset-info">
                        <h4>${asset.name}</h4>
                        <p>${asset.symbol} <span class="asset-change ${changeClass}">${changeSymbol}${change.toFixed(2)}%</span></p>
                    </div>
                </div>
                <div class="asset-right">
                    <div class="asset-balance">${formatBalance(balance, asset.symbol)} ${asset.symbol}</div>
                    <div class="asset-value">$${formatNumber(value)}</div>
                </div>
            </div>
        `;
    }).join('');
}

function updateAutoClickerUI() {
    const statusEl = document.getElementById('autoMinerStatus');
    const timeEl = document.getElementById('autoMinerTime');
    
    if (userData.autoClicker && userData.autoClicker.active) {
        const timeLeft = userData.autoClicker.expiry - Date.now();
        if (timeLeft > 0) {
            const hours = Math.floor(timeLeft / 3600000);
            const minutes = Math.floor((timeLeft % 3600000) / 60000);
            if (statusEl) statusEl.style.display = 'flex';
            if (timeEl) timeEl.textContent = `${hours}h ${minutes}m`;
        } else {
            userData.autoClicker.active = false;
            saveUserToCache();
            if (statusEl) statusEl.style.display = 'none';
        }
    } else {
        if (statusEl) statusEl.style.display = 'none';
    }
}

// ====== 29. LUCKY WHEEL SYSTEM ======
function showWheelModal() {
    const modal = document.getElementById('wheelModal');
    if (modal) {
        updateWheelUI();
        modal.classList.add('show');
    }
}

function updateWheelUI() {
    const spinsLeftEl = document.getElementById('wheelSpinsLeft');
    const freeSpinEl = document.getElementById('wheelFreeSpin');
    
    if (spinsLeftEl) {
        const spinsUntilJackpot = CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY - (userData.wheel.jackpotCounter % CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY);
        spinsLeftEl.textContent = t('wheel.spinsLeft', { count: spinsUntilJackpot });
    }
    
    if (freeSpinEl) {
        const now = Date.now();
        const nextFreeSpin = userData.wheel.lastFreeSpin + CONFIG.ECONOMY.WHEEL_FREE_SPIN_INTERVAL;
        if (now < nextFreeSpin) {
            const timeLeft = nextFreeSpin - now;
            const hours = Math.floor(timeLeft / 3600000);
            const minutes = Math.floor((timeLeft % 3600000) / 60000);
            freeSpinEl.innerHTML = `<i class="fas fa-clock"></i> ${hours}h ${minutes}m`;
            freeSpinEl.classList.add('disabled');
        } else {
            freeSpinEl.innerHTML = `<i class="fas fa-gift"></i> ${t('wheel.free')}`;
            freeSpinEl.classList.remove('disabled');
        }
    }
}

async function spinWheel(isFree = false) {
    if (!isFree && userData.balances.TON < CONFIG.ECONOMY.WHEEL_SPIN_PRICE) {
        showToast(t('wheel.insufficient'), 'error');
        return;
    }
    
    if (isFree) {
        const now = Date.now();
        if (now < userData.wheel.lastFreeSpin + CONFIG.ECONOMY.WHEEL_FREE_SPIN_INTERVAL) {
            showToast(t('wheel.wait', { time: '24h' }), 'warning');
            return;
        }
        userData.wheel.lastFreeSpin = now;
    } else {
        userData.balances.TON -= CONFIG.ECONOMY.WHEEL_SPIN_PRICE;
        userData.balance = userData.balances.TON;
    }
    
    userData.wheel.totalSpins++;
    userData.wheel.jackpotCounter++;
    
    let prize = null;
    const isJackpotSpin = userData.wheel.jackpotCounter % CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY === 0;
    
    if (isJackpotSpin) {
        const jackpotPrizes = WHEEL_PRIZES.filter(p => p.jackpot);
        const totalWeight = jackpotPrizes.reduce((sum, p) => sum + p.weight, 0);
        let random = Math.random() * totalWeight;
        
        for (const p of jackpotPrizes) {
            if (random < p.weight) {
                prize = p;
                break;
            }
            random -= p.weight;
        }
        
        userData.wheel.jackpotWon++;
    } else {
        const normalPrizes = WHEEL_PRIZES.filter(p => !p.jackpot);
        const totalWeight = normalPrizes.reduce((sum, p) => sum + p.weight, 0);
        let random = Math.random() * totalWeight;
        
        for (const p of normalPrizes) {
            if (random < p.weight) {
                prize = p;
                break;
            }
            random -= p.weight;
        }
    }
    
    if (prize.type === 'TON') {
        userData.balances.TON += prize.amount;
        userData.balance = userData.balances.TON;
        userData.totalEarned += prize.amount;
        addTransaction('wheel', prize.amount, { currency: 'TON' });
    } else if (prize.type === 'USDT') {
        userData.balances.USDT += prize.amount;
        addTransaction('wheel', prize.amount, { currency: 'USDT' });
    } else if (prize.type === 'SOL') {
        userData.balances.SOL += prize.amount;
        addTransaction('wheel', prize.amount, { currency: 'SOL' });
    } else if (prize.type === 'BTC') {
        userData.balances.BTC += prize.amount;
        addTransaction('wheel', prize.amount, { currency: 'BTC' });
    } else if (prize.type === 'ETH') {
        userData.balances.ETH += prize.amount;
        addTransaction('wheel', prize.amount, { currency: 'ETH' });
    } else if (prize.type === 'SPIN') {
        setTimeout(() => spinWheel(false), 500);
    }
    
    saveUserToCache();
    
    playWheelSound('spin');
    setTimeout(() => playWheelSound('win'), 1000);
    
    if (isJackpotSpin) {
        showToast(t('wheel.jackpot') + ' ' + t('wheel.won', { prize: `${prize.amount} ${prize.type}` }), 'success');
        createParticles();
    } else if (prize.type !== 'NOTHING' && prize.type !== 'SPIN') {
        showToast(t('wheel.won', { prize: `${prize.amount} ${prize.type}` }), 'success');
    }
    
    updateWheelUI();
    updateUI();
}

function playWheelSound(type) {
    console.log(`🔊 Playing ${type} sound`);
    if (tg && type === 'win') {
        tg.HapticFeedback?.notificationOccurred('success');
    }
}

// ====== 30. MARKET FUNCTIONS ======
function renderMarket() {
    const showcase = document.getElementById('machinesShowcase');
    if (!showcase) return;
    
    showcase.innerHTML = MACHINES.map(m => {
        const meetsReqs = checkRequirements(m);
        const isFree = m.plans[0].price === 0;
        const name = currentLanguage === 'ar' ? m.nameAr : m.name;
        const desc = currentLanguage === 'ar' ? m.descriptionAr : m.description;
        const cycleText = currentLanguage === 'ar' ? m.cycleTextAr : m.cycleText;
        
        return `
            <div class="showcase-card-legendary ${!meetsReqs ? 'locked' : ''}">
                <div class="showcase-icon" style="color: ${m.color};">
                    <i class="fas ${m.icon}"></i>
                </div>
                <div class="showcase-content">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="showcase-specs">
                        <span class="spec"><i class="fas fa-microchip"></i> ${m.hashrate}</span>
                        <span class="spec"><i class="fas fa-bolt"></i> ${m.yield} TON/${cycleText}</span>
                    </div>
                    ${!meetsReqs ? `
                        <div class="requirements-warning">
                            <i class="fas fa-lock"></i> Requirements not met
                        </div>
                    ` : ''}
                    <div class="showcase-plans">
                        ${m.plans.map((p, idx) => `
                            <div class="plan-card-mini ${p.price === 0 ? 'free' : ''}" onclick="selectPlan('${m.id}', ${idx})">
                                <div class="duration">${currentLanguage === 'ar' ? p.durationTextAr : p.durationText}</div>
                                <div class="price">${p.price === 0 ? 'FREE' : p.price + ' TON'}</div>
                                ${p.price > 0 ? `<div class="return">+${p.returnAmount} TON</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function checkRequirements(machine) {
    if (!machine.requirements) return true;
    
    const req = machine.requirements;
    
    if (req.minEarnings && userData.totalEarned < req.minEarnings) return false;
    if (req.referrals && (userData.referrals?.length || 0) < req.referrals) return false;
    if (req.streak && userData.streak < req.streak) return false;
    
    return true;
}

// ====== 31. DUAL PAYMENT SYSTEM ======
let currentPaymentMethod = 'balance';
let currentPayment = null;

function switchPaymentMethod(method) {
    currentPaymentMethod = method;
    
    const optionBalance = document.getElementById('paymentOptionBalance');
    const optionWallet = document.getElementById('paymentOptionWallet');
    const confirmBtn = document.getElementById('confirmPaymentBtn');
    
    if (optionBalance) {
        if (method === 'balance') {
            optionBalance.classList.add('active');
            if (optionWallet) optionWallet.classList.remove('active');
        } else {
            optionBalance.classList.remove('active');
            if (optionWallet) optionWallet.classList.add('active');
        }
    }
    
    if (confirmBtn) {
        if (method === 'balance') {
            confirmBtn.innerHTML = `<i class="fas fa-wallet"></i> ${t('payment.confirmBalance')}`;
        } else {
            confirmBtn.innerHTML = `<i class="fas fa-external-link-alt"></i> ${t('payment.confirmWallet')}`;
        }
    }
    
    updateWalletUI();
}

function selectPlan(machineId, planIndex) {
    const machine = MACHINES.find(m => m.id === machineId);
    if (!machine) return;
    
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
    
    const iconEl = document.getElementById('paymentMachineIcon');
    const nameEl = document.getElementById('paymentMachineName');
    const durationEl = document.getElementById('paymentDuration');
    const priceEl = document.getElementById('paymentPrice');
    const returnEl = document.getElementById('paymentReturn');
    const totalEl = document.getElementById('paymentTotal');
    
    if (iconEl) iconEl.innerHTML = `<i class="fas ${machine.icon}" style="color: ${machine.color};"></i>`;
    if (nameEl) nameEl.textContent = machine.name;
    if (durationEl) durationEl.textContent = plan.durationText;
    if (priceEl) priceEl.textContent = plan.price + ' TON';
    if (returnEl) returnEl.textContent = `${plan.returnAmount} TON (${plan.returnPercent}%)`;
    if (totalEl) totalEl.textContent = plan.total + ' TON';
    
    currentPayment = { machine, planIndex, plan };
    
    currentPaymentMethod = 'balance';
    switchPaymentMethod('balance');
    
    const modal = document.getElementById('paymentModal');
    modal.classList.add('show');
    updateWalletUI();
}

function activateMachine(machineId, planIndex) {
    const machine = MACHINES.find(m => m.id === machineId);
    const plan = machine.plans[planIndex];
    
    userData.activeMachine = machineId;
    userData.activePlan = plan;
    
    if (plan.price === 0) {
        userData.machineExpiry = Infinity;
    } else {
        const durationMs = plan.duration * 24 * 60 * 60 * 1000;
        userData.machineExpiry = Date.now() + durationMs;
    }
    
    userData.lastClaim = Date.now();
    
    if (machineId !== 'm1') userData.upgrades++;
    
    saveUserToCache();
    
    showToast(`${machine.name} activated!`, 'success');
    updateUI();
    checkAchievements();
    saveToFirebase();
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
    
    addTransaction('rental', plan.price, { 
        machine: machine.name,
        plan: plan.durationText,
        currency: 'TON'
    });
    
    showToast(`✅ ${machine.name} rented successfully!`, 'success');
    saveUserToCache();
    updateUI();
    
    return true;
}

async function processPayment() {
    if (!currentPayment) return;
    
    const { machine, planIndex, plan } = currentPayment;
    
    if (currentPaymentMethod === 'balance') {
        if (rentWithBalance(machine.id, planIndex)) {
            closeModal('paymentModal');
        }
    } else {
        await confirmWalletPayment();
    }
}

async function confirmWalletPayment() {
    if (!currentPayment) return;
    
    const { machine, planIndex, plan } = currentPayment;
    
    if (!tonWallet) {
        showToast('Connect wallet first', 'error');
        return;
    }
    
    try {
        const tx = {
            validUntil: Date.now() + 600000,
            messages: [{
                address: CONFIG.TON.WALLET,
                amount: (plan.price * 1e9).toString()
            }]
        };
        
        showToast('Opening wallet...', 'info');
        const result = await tonConnectUI.sendTransaction(tx);
        
        showToast('Payment sent! Waiting for confirmation...', 'info');
        
        setTimeout(() => {
            activateMachine(machine.id, planIndex);
            closeModal('paymentModal');
            addTransaction('rental', plan.price, { 
                machine: machine.name,
                plan: plan.durationText,
                method: 'wallet',
                currency: 'TON'
            });
        }, 3000);
        
    } catch (e) {
        showToast('Payment failed: ' + (e.message || 'Unknown error'), 'error');
        console.error('Payment error:', e);
    }
}

// ====== 32. SWAP SYSTEM ======
let swapMode = 'from';
let swapFromCurrency = 'TON';
let swapToCurrency = 'USDT';

function showSwapModal() {
    const modal = document.getElementById('swapModal');
    
    updateSwapBalances();
    
    document.getElementById('swapFromCurrency').textContent = swapFromCurrency;
    document.getElementById('swapToCurrency').textContent = swapToCurrency;
    document.getElementById('swapFromIcon').src = CONFIG.CMC_ICONS[swapFromCurrency] || CONFIG.CMC_ICONS.TON;
    document.getElementById('swapToIcon').src = CONFIG.CMC_ICONS[swapToCurrency] || CONFIG.CMC_ICONS.USDT;
    
    calculateSwap();
    
    modal.classList.add('show');
}

function updateSwapBalances() {
    const fromBalance = document.getElementById('swapFromBalance');
    const toBalance = document.getElementById('swapToBalance');
    
    if (fromBalance) {
        const balance = userData.balances[swapFromCurrency] || 0;
        fromBalance.textContent = `Balance: ${formatBalance(balance, swapFromCurrency)} ${swapFromCurrency}`;
    }
    
    if (toBalance) {
        const balance = userData.balances[swapToCurrency] || 0;
        toBalance.textContent = `Balance: ${formatBalance(balance, swapToCurrency)} ${swapToCurrency}`;
    }
}

function showCurrencySelector(type) {
    swapMode = type;
    const modal = document.getElementById('currencySelectorModal');
    const currencyList = document.getElementById('currencyList');
    
    currencyList.innerHTML = CONFIG.ALL_ASSETS.map(asset => `
        <div class="currency-list-item" onclick="selectCurrency('${asset.symbol}')">
            <img src="${CONFIG.CMC_ICONS[asset.symbol]}" alt="${asset.symbol}">
            <div class="currency-info">
                <h4>${asset.name}</h4>
                <p>${asset.symbol}</p>
            </div>
        </div>
    `).join('');
    
    modal.classList.add('show');
}

function selectCurrency(symbol) {
    if (swapMode === 'from') {
        swapFromCurrency = symbol;
        document.getElementById('swapFromCurrency').textContent = symbol;
        document.getElementById('swapFromIcon').src = CONFIG.CMC_ICONS[symbol] || CONFIG.CMC_ICONS.TON;
    } else {
        swapToCurrency = symbol;
        document.getElementById('swapToCurrency').textContent = symbol;
        document.getElementById('swapToIcon').src = CONFIG.CMC_ICONS[symbol] || CONFIG.CMC_ICONS.USDT;
    }
    
    closeModal('currencySelectorModal');
    updateSwapBalances();
    calculateSwap();
}

function filterCurrencies() {
    const searchTerm = document.getElementById('currencySearch').value.toLowerCase();
    const items = document.querySelectorAll('.currency-list-item');
    
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function flipSwap() {
    const temp = swapFromCurrency;
    swapFromCurrency = swapToCurrency;
    swapToCurrency = temp;
    
    document.getElementById('swapFromCurrency').textContent = swapFromCurrency;
    document.getElementById('swapToCurrency').textContent = swapToCurrency;
    document.getElementById('swapFromIcon').src = CONFIG.CMC_ICONS[swapFromCurrency] || CONFIG.CMC_ICONS.TON;
    document.getElementById('swapToIcon').src = CONFIG.CMC_ICONS[swapToCurrency] || CONFIG.CMC_ICONS.USDT;
    
    updateSwapBalances();
    calculateSwap();
    animateElement('.swap-arrow i', 'pop');
}

function calculateSwap() {
    const fromAmount = parseFloat(document.getElementById('swapFromAmount').value) || 0;
    const toAmountEl = document.getElementById('swapToAmount');
    const rateEl = document.getElementById('swapRate');
    
    const fromPrice = livePrices[swapFromCurrency]?.price || 1;
    const toPrice = livePrices[swapToCurrency]?.price || 1;
    
    const rate = fromPrice / toPrice;
    const toAmount = fromAmount * rate;
    
    toAmountEl.value = toAmount.toFixed(6);
    rateEl.textContent = `1 ${swapFromCurrency} = ${rate.toFixed(6)} ${swapToCurrency}`;
}

function confirmSwap() {
    const fromAmount = parseFloat(document.getElementById('swapFromAmount').value);
    const fromBalance = userData.balances[swapFromCurrency] || 0;
    
    if (!fromAmount || fromAmount <= 0) {
        showToast(t('error.enterAmount'), 'error');
        return;
    }
    
    if (fromAmount > fromBalance) {
        showToast(t('error.insufficientToken', { token: swapFromCurrency }), 'error');
        return;
    }
    
    const toAmount = parseFloat(document.getElementById('swapToAmount').value);
    
    userData.balances[swapFromCurrency] -= fromAmount;
    userData.balances[swapToCurrency] += toAmount;
    
    if (swapFromCurrency === 'TON') userData.balance = userData.balances.TON;
    
    addTransaction('swap', fromAmount, {
        fromCurrency: swapFromCurrency,
        toCurrency: swapToCurrency,
        toAmount: toAmount,
        rate: toAmount / fromAmount
    });
    
    saveUserToCache();
    
    showToast(t('notif.swapCompleted', {
        fromAmount: formatBalance(fromAmount, swapFromCurrency),
        fromCurrency: swapFromCurrency,
        toAmount: formatBalance(toAmount, swapToCurrency),
        toCurrency: swapToCurrency
    }), 'success');
    
    closeModal('swapModal');
    updateUI();
    renderAssets();
}

// ====== 33. DEPOSIT FUNCTIONS ======
let selectedDepositCurrency = 'TON';

function showDepositModal() {
    const modal = document.getElementById('depositModal');
    
    const currencySelect = document.getElementById('depositCurrencySelect');
    if (currencySelect) {
        currencySelect.innerHTML = CONFIG.ALL_ASSETS.map(asset => `
            <option value="${asset.symbol}" ${asset.symbol === selectedDepositCurrency ? 'selected' : ''}>
                ${asset.name} (${asset.symbol})
            </option>
        `).join('');
    }
    
    updateDepositInfo();
    modal.classList.add('show');
    updateWalletUI();
}

function updateDepositInfo() {
    const currency = document.getElementById('depositCurrencySelect')?.value || selectedDepositCurrency;
    selectedDepositCurrency = currency;
    
    const addressEl = document.getElementById('depositAddress');
    const iconEl = document.getElementById('depositIcon');
    const minAmountEl = document.getElementById('depositMinAmount');
    const networkHint = document.getElementById('depositNetworkHint');
    
    if (addressEl) addressEl.textContent = CONFIG.DEPOSIT_ADDRESSES[currency] || 'Address not configured';
    if (iconEl) iconEl.src = CONFIG.CMC_ICONS[currency] || CONFIG.CMC_ICONS.TON;
    
    const minAmount = CONFIG.DEPOSIT_MINIMUMS[currency] || 1;
    if (minAmountEl) minAmountEl.textContent = `${minAmount} ${currency}`;
    
    const network = CONFIG.NETWORK_TYPES[currency] || 'bsc';
    let networkText = '';
    
    if (network === 'bsc' || network === 'erc20') {
        networkText = 'BSC/ERC20 - starts with 0x (42 chars)';
    } else if (network === 'solana') {
        networkText = 'Solana - 32-44 characters';
    } else if (network === 'bitcoin') {
        networkText = 'Bitcoin - starts with 1, 3, or bc1';
    } else if (network === 'ton') {
        networkText = 'TON - starts with UQ or EQ';
    }
    
    if (networkHint) networkHint.textContent = networkText;
    
    const hashHint = document.getElementById('depositHashHint');
    if (hashHint) {
        hashHint.textContent = '';
        hashHint.className = 'validation-hint';
    }
    
    const submitBtn = document.getElementById('confirmDepositBtn');
    if (submitBtn) submitBtn.disabled = true;
}

function validateDepositInput() {
    const currency = selectedDepositCurrency;
    const amount = parseFloat(document.getElementById('depositAmount').value);
    const txHash = document.getElementById('depositTxHash').value.trim();
    const hashHint = document.getElementById('depositHashHint');
    const submitBtn = document.getElementById('confirmDepositBtn');
    
    if (!amount || amount <= 0 || !txHash) {
        if (hashHint) {
            hashHint.textContent = 'Please enter amount and transaction hash';
            hashHint.className = 'validation-hint invalid';
        }
        if (submitBtn) submitBtn.disabled = true;
        return;
    }
    
    const minAmount = CONFIG.DEPOSIT_MINIMUMS[currency] || 1;
    if (amount < minAmount) {
        if (hashHint) {
            hashHint.textContent = `Minimum amount is ${minAmount} ${currency}`;
            hashHint.className = 'validation-hint invalid';
        }
        if (submitBtn) submitBtn.disabled = true;
        return;
    }
    
    const isValidHash = validateTransactionHash(txHash, currency);
    
    if (!isValidHash) {
        if (hashHint) {
            hashHint.textContent = `Invalid ${currency} transaction hash format`;
            hashHint.className = 'validation-hint invalid';
        }
        if (submitBtn) submitBtn.disabled = true;
        return;
    }
    
    if (userData.usedHashes?.includes(txHash.toLowerCase())) {
        if (hashHint) {
            hashHint.textContent = 'This transaction hash has already been used';
            hashHint.className = 'validation-hint invalid';
        }
        if (submitBtn) submitBtn.disabled = true;
        return;
    }
    
    if (hashHint) {
        hashHint.textContent = '✓ Valid transaction hash';
        hashHint.className = 'validation-hint valid';
    }
    if (submitBtn) submitBtn.disabled = false;
}

function copyDepositAddress() {
    const address = document.getElementById('depositAddress').textContent;
    navigator.clipboard.writeText(address);
    showToast(t('success.addressCopied'), 'success');
    animateElement('.copy-btn-legendary', 'pop');
}

async function submitDeposit() {
    const currency = selectedDepositCurrency;
    const amount = parseFloat(document.getElementById('depositAmount').value);
    const txHash = document.getElementById('depositTxHash').value.trim();
    
    const minAmount = CONFIG.DEPOSIT_MINIMUMS[currency] || 1;
    if (amount < minAmount) {
        showToast(t('error.minDeposit', { min: minAmount, currency }), 'error');
        return;
    }
    
    if (!validateTransactionHash(txHash, currency)) {
        showToast(t('error.invalidHash'), 'error');
        return;
    }
    
    if (userData.usedHashes?.includes(txHash.toLowerCase())) {
        showToast(t('error.hashUsed'), 'error');
        return;
    }
    
    const deposit = {
        id: 'dep_' + Date.now() + '_' + randomId(),
        userId,
        username: userName,
        currency,
        amount,
        txHash,
        status: 'pending',
        timestamp: Date.now()
    };
    
    userData.pendingDeposits.push(deposit);
    
    if (!userData.usedHashes) userData.usedHashes = [];
    userData.usedHashes.push(txHash.toLowerCase());
    
    saveUserToCache();
    
    if (db) {
        try {
            const docRef = await db.collection('deposits').add({
                ...deposit,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            
            deposit.firebaseId = docRef.id;
            
            startOnDemandListener('deposits', docRef.id, (data) => {
                if (data.status === 'approved') {
                    userData.balances[currency] = (userData.balances[currency] || 0) + amount;
                    if (currency === 'TON') userData.balance = userData.balances.TON;
                    userData.totalDeposited += amount;
                    userData.pendingDeposits = userData.pendingDeposits.filter(d => d.id !== deposit.id);
                    userData.completedDeposits.push({ ...deposit, status: 'approved' });
                    saveUserToCache();
                    showToast(t('notif.depositApproved', { amount, currency }), 'success');
                    updateUI();
                } else if (data.status === 'rejected') {
                    userData.pendingDeposits = userData.pendingDeposits.filter(d => d.id !== deposit.id);
                    saveUserToCache();
                    showToast(t('notif.depositRejected', { reason: data.reason || 'Unknown' }), 'error');
                }
            });
            
            await addNotification(CONFIG.TON.ADMIN_ID, `💰 New deposit request: ${amount} ${currency} from ${userId}`, 'info');
            
        } catch (e) {
            console.error('Firebase error:', e);
        }
    }
    
    closeModal('depositModal');
    showToast(t('success.depositSubmitted', { amount, currency }), 'success');
    
    document.getElementById('depositAmount').value = '';
    document.getElementById('depositTxHash').value = '';
}

// ====== 34. WITHDRAW FUNCTIONS ======
let selectedWithdrawCurrency = 'TON';

function showWithdrawModal() {
    const modal = document.getElementById('withdrawModal');
    
    const currencySelect = document.getElementById('withdrawCurrencySelect');
    if (currencySelect) {
        currencySelect.innerHTML = CONFIG.ALL_ASSETS.map(asset => `
            <option value="${asset.symbol}" ${asset.symbol === selectedWithdrawCurrency ? 'selected' : ''}>
                ${asset.name} (${asset.symbol})
            </option>
        `).join('');
    }
    
    updateWithdrawInfo();
    modal.classList.add('show');
}

function updateWithdrawInfo() {
    const currency = document.getElementById('withdrawCurrencySelect')?.value || selectedWithdrawCurrency;
    selectedWithdrawCurrency = currency;
    
    const balance = userData.balances[currency] || 0;
    const balanceEl = document.getElementById('withdrawBalance');
    if (balanceEl) balanceEl.textContent = `${formatBalance(balance, currency)} ${currency}`;
    
    const iconEl = document.getElementById('withdrawIcon');
    if (iconEl) iconEl.src = CONFIG.CMC_ICONS[currency] || CONFIG.CMC_ICONS.TON;
    
    const feeInfo = CONFIG.WITHDRAW_FEES[currency];
    const feeEl = document.getElementById('withdrawFeeInfo');
    const receiveEl = document.getElementById('withdrawReceiveAmount');
    
    if (feeInfo) {
        if (feeEl) {
            feeEl.innerHTML = `${feeInfo.note}<br>Fee: ${feeInfo.fee} ${feeInfo.feeCurrency}`;
            feeEl.style.display = 'block';
        }
    } else {
        if (feeEl) {
            feeEl.innerHTML = 'Network fee: 0';
            feeEl.style.display = 'block';
        }
    }
    
    const amount = parseFloat(document.getElementById('withdrawAmount').value) || 0;
    if (receiveEl && amount > 0) {
        if (feeInfo) {
            const receive = amount - (feeInfo.feeCurrency === currency ? feeInfo.fee : 0);
            receiveEl.textContent = `${formatBalance(receive, currency)} ${currency}`;
        } else {
            receiveEl.textContent = `${formatBalance(amount, currency)} ${currency}`;
        }
    }
    
    const addressHint = document.getElementById('withdrawAddressHint');
    if (addressHint) {
        addressHint.textContent = '';
        addressHint.className = 'validation-hint';
    }
    
    validateWithdrawInput();
}

function validateWithdrawInput() {
    const currency = selectedWithdrawCurrency;
    const amount = parseFloat(document.getElementById('withdrawAmount').value);
    const address = document.getElementById('withdrawAddress').value.trim();
    const addressHint = document.getElementById('withdrawAddressHint');
    const submitBtn = document.getElementById('submitWithdraw');
    
    if (!amount || amount <= 0 || !address) {
        if (addressHint) {
            addressHint.textContent = 'Please enter amount and address';
            addressHint.className = 'validation-hint invalid';
        }
        if (submitBtn) submitBtn.disabled = true;
        return;
    }
    
    const balance = userData.balances[currency] || 0;
    if (amount > balance) {
        if (addressHint) {
            addressHint.textContent = `Insufficient ${currency} balance`;
            addressHint.className = 'validation-hint invalid';
        }
        if (submitBtn) submitBtn.disabled = true;
        return;
    }
    
    const isValidAddr = isValidAddress(address, currency);
    
    if (!isValidAddr) {
        if (addressHint) {
            addressHint.textContent = `Invalid ${currency} address format`;
            addressHint.className = 'validation-hint invalid';
        }
        if (submitBtn) submitBtn.disabled = true;
        return;
    }
    
    const feeInfo = CONFIG.WITHDRAW_FEES[currency];
    if (feeInfo && feeInfo.feeCurrency !== currency) {
        const feeBalance = userData.balances[feeInfo.feeCurrency] || 0;
        if (feeBalance < feeInfo.fee) {
            if (addressHint) {
                addressHint.textContent = `Insufficient ${feeInfo.feeCurrency} for fee. Need ${feeInfo.fee} ${feeInfo.feeCurrency}`;
                addressHint.className = 'validation-hint invalid';
            }
            if (submitBtn) submitBtn.disabled = true;
            return;
        }
    }
    
    if (addressHint) {
        addressHint.textContent = '✓ Valid address';
        addressHint.className = 'validation-hint valid';
    }
    if (submitBtn) submitBtn.disabled = false;
}

function updateWithdrawAmount() {
    const amount = parseFloat(document.getElementById('withdrawAmount').value) || 0;
    const currency = selectedWithdrawCurrency;
    const feeInfo = CONFIG.WITHDRAW_FEES[currency];
    const receiveEl = document.getElementById('withdrawReceiveAmount');
    
    if (receiveEl && amount > 0) {
        if (feeInfo && feeInfo.feeCurrency === currency) {
            const receive = amount - feeInfo.fee;
            receiveEl.textContent = `${formatBalance(receive, currency)} ${currency}`;
        } else {
            receiveEl.textContent = `${formatBalance(amount, currency)} ${currency}`;
        }
    }
    
    validateWithdrawInput();
}

async function submitWithdraw() {
    const currency = selectedWithdrawCurrency;
    const amount = parseFloat(document.getElementById('withdrawAmount').value);
    const address = document.getElementById('withdrawAddress').value.trim();
    
    const balance = userData.balances[currency] || 0;
    if (amount > balance) {
        showToast(t('error.insufficientBalance', { currency }), 'error');
        return;
    }
    
    if (!isValidAddress(address, currency)) {
        showToast(t('error.invalidAddress', { currency }), 'error');
        return;
    }
    
    const feeInfo = CONFIG.WITHDRAW_FEES[currency];
    let fee = 0;
    let feeCurrency = currency;
    
    if (feeInfo) {
        fee = feeInfo.fee;
        feeCurrency = feeInfo.feeCurrency;
        
        if (feeCurrency !== currency) {
            const feeBalance = userData.balances[feeCurrency] || 0;
            if (feeBalance < fee) {
                showToast(t('error.insufficientFeeBalance', { fee, feeCurrency }), 'error');
                return;
            }
        }
    }
    
    const withdraw = {
        id: 'wd_' + Date.now() + '_' + randomId(),
        userId,
        username: userName,
        currency,
        amount,
        address,
        fee,
        feeCurrency,
        status: 'pending',
        timestamp: Date.now()
    };
    
    userData.pendingWithdrawals.push(withdraw);
    userData.balances[currency] -= amount;
    if (feeCurrency !== currency) {
        userData.balances[feeCurrency] -= fee;
    }
    if (currency === 'TON') userData.balance = userData.balances.TON;
    userData.totalWithdrawn += amount;
    
    saveUserToCache();
    
    if (db) {
        try {
            const docRef = await db.collection('withdrawals').add({
                ...withdraw,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            
            withdraw.firebaseId = docRef.id;
            
            startOnDemandListener('withdrawals', docRef.id, (data) => {
                if (data.status === 'approved') {
                    userData.pendingWithdrawals = userData.pendingWithdrawals.filter(w => w.id !== withdraw.id);
                    userData.completedWithdrawals.push({ ...withdraw, status: 'approved' });
                    saveUserToCache();
                    showToast(t('notif.withdrawApproved', { amount, currency }), 'success');
                } else if (data.status === 'rejected') {
                    userData.balances[currency] += amount;
                    if (feeCurrency !== currency) {
                        userData.balances[feeCurrency] += fee;
                    }
                    if (currency === 'TON') userData.balance = userData.balances.TON;
                    userData.totalWithdrawn -= amount;
                    userData.pendingWithdrawals = userData.pendingWithdrawals.filter(w => w.id !== withdraw.id);
                    saveUserToCache();
                    showToast(t('notif.withdrawRejected', { reason: data.reason || 'Unknown' }), 'error');
                    updateUI();
                }
            });
            
            await addNotification(CONFIG.TON.ADMIN_ID, `💸 New withdrawal request: ${amount} ${currency} from ${userId}`, 'info');
            
        } catch (e) {
            console.error('Firebase error:', e);
        }
    }
    
    closeModal('withdrawModal');
    showToast(t('success.withdrawSubmitted', { amount, currency }), 'success');
    updateUI();
    
    document.getElementById('withdrawAmount').value = '';
    document.getElementById('withdrawAddress').value = '';
}

// ====== 35. HISTORY FUNCTIONS ======
let currentHistoryFilter = 'all';

function showHistory() {
    const modal = document.getElementById('historyModal');
    modal.classList.add('show');
    renderHistory('all');
    
    const now = Date.now();
    if (now - lastHistoryCheckTime > CONFIG.CACHE.HISTORY_TTL) {
        checkPendingTransactions();
        lastHistoryCheckTime = now;
    }
}

function renderHistory(filter = 'all') {
    const list = document.getElementById('historyList');
    if (!list) return;
    
    currentHistoryFilter = filter;
    
    let transactions = userData.transactions || [];
    
    if (filter !== 'all') {
        transactions = transactions.filter(tx => tx.type === filter);
    }
    
    if (transactions.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <i class="fa-regular fa-clock"></i>
                <p>No transactions yet</p>
            </div>
        `;
        return;
    }
    
    list.innerHTML = transactions.map(tx => {
        const date = new Date(tx.timestamp);
        const formattedDate = date.toLocaleDateString() + ' ' + 
                             date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        let icon = 'fa-bolt';
        let typeClass = 'mining';
        let typeText = 'Mining';
        
        if (tx.type === 'deposit') {
            icon = 'fa-arrow-down';
            typeClass = 'deposit';
            typeText = 'Deposit';
        } else if (tx.type === 'withdraw') {
            icon = 'fa-arrow-up';
            typeClass = 'withdraw';
            typeText = 'Withdrawal';
        } else if (tx.type === 'rental') {
            icon = 'fa-microchip';
            typeClass = 'rental';
            typeText = 'Rental';
        } else if (tx.type === 'swap') {
            icon = 'fa-exchange-alt';
            typeClass = 'swap';
            typeText = 'Swap';
        } else if (tx.type === 'referral_bonus') {
            icon = 'fa-users';
            typeClass = 'referral';
            typeText = 'Referral Bonus';
        } else if (tx.type === 'autoclicker') {
            icon = 'fa-robot';
            typeClass = 'autoclicker';
            typeText = 'Auto Miner';
        } else if (tx.type === 'wheel') {
            icon = 'fa-wheelchair';
            typeClass = 'wheel';
            typeText = 'Lucky Wheel';
        }
        
        const currency = tx.currency || 'TON';
        
        return `
            <div class="history-item">
                <div class="history-item-header">
                    <div class="history-type ${typeClass}">
                        <i class="fas ${icon}"></i>
                        <span>${typeText}</span>
                    </div>
                    <span class="history-date">${formattedDate}</span>
                </div>
                <div class="history-details">
                    <span class="history-amount">${tx.type === 'withdraw' ? '-' : '+'}${formatBalance(tx.amount, currency)} ${currency}</span>
                </div>
                ${tx.fromCurrency ? `<div style="font-size: 11px; color: var(--text-secondary);">${tx.fromCurrency} → ${tx.toCurrency}</div>` : ''}
                ${tx.machine ? `<div style="font-size: 11px; color: var(--text-secondary);">${tx.machine}</div>` : ''}
            </div>
        `;
    }).join('');
}

function filterHistory(filter) {
    document.querySelectorAll('.history-filter').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    renderHistory(filter);
}

async function checkPendingTransactions() {
    if (!db) return;
    
    const pendingDeposits = userData.pendingDeposits?.filter(d => d.firebaseId) || [];
    const pendingWithdrawals = userData.pendingWithdrawals?.filter(w => w.firebaseId) || [];
    
    for (const dep of pendingDeposits) {
        try {
            const doc = await db.collection('deposits').doc(dep.firebaseId).get();
            if (doc.exists) {
                const data = doc.data();
                if (data.status !== 'pending') {
                    userData.pendingDeposits = userData.pendingDeposits.filter(d => d.id !== dep.id);
                    if (data.status === 'approved') {
                        userData.completedDeposits.push({ ...dep, status: 'approved' });
                        showToast(`Deposit of ${dep.amount} ${dep.currency} approved!`, 'success');
                    }
                }
            }
        } catch (e) {
            console.error('Error checking deposit:', e);
        }
    }
}

function refreshHistory() {
    const btn = event.currentTarget.querySelector('i');
    btn.classList.add('fa-spin');
    checkPendingTransactions().finally(() => {
        setTimeout(() => btn.classList.remove('fa-spin'), 500);
    });
}

// ====== 36. REFERRAL DETAILS ======
function showReferralDetails() {
    const modal = document.getElementById('referralModal');
    
    document.getElementById('modalRefCount').textContent = userData.referrals?.length || 0;
    document.getElementById('modalRefEarnings').textContent = formatTON(userData.referralEarnings || 0);
    document.getElementById('modalReferralLink').value = getReferralLink();
    
    renderReferralMilestones();
    renderReferralTree();
    
    modal.classList.add('show');
}

function renderReferralMilestones() {
    const list = document.getElementById('milestonesList');
    if (!list) return;
    
    list.innerHTML = REFERRAL_MILESTONES.map(milestone => {
        const progress = Math.min((userData.referrals?.length || 0) / milestone.referrals * 100, 100);
        const claimed = userData.referralMilestonesClaimed?.includes(milestone.referrals);
        
        return `
            <div class="milestone-item">
                <div class="milestone-header">
                    <span class="milestone-referrals">
                        <i class="fas fa-users"></i>
                        ${milestone.referrals} Referrals
                    </span>
                    <span class="milestone-reward">${milestone.reward} ${milestone.unit}</span>
                </div>
                <div class="milestone-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <span class="progress-text">${userData.referrals?.length || 0}/${milestone.referrals}</span>
                </div>
                ${claimed ? '<p style="color: var(--success); text-align: center; margin-top: 10px;">✓ Claimed</p>' : ''}
            </div>
        `;
    }).join('');
}

function renderReferralTree() {
    const tree = document.getElementById('referralTree');
    if (!tree) return;
    
    if (!userData.referrals || userData.referrals.length === 0) {
        tree.innerHTML = '<div class="tree-node">No referrals yet</div>';
        return;
    }
    
    tree.innerHTML = userData.referrals.slice(0, 10).map(ref => `
        <div class="tree-node">
            <i class="fas fa-user"></i>
            <span>${ref.slice(0, 8)}...</span>
        </div>
    `).join('');
}

function copyReferralLink() {
    const link = getReferralLink();
    navigator.clipboard.writeText(link);
    showToast(t('success.referralCopied'), 'success');
    animateElement('.copy-btn-legendary', 'pop');
}

// ====== 37. LEADERBOARD ======
let leaderboardCache = {
    data: null,
    timestamp: 0
};

async function updateLeaderboard() {
    const leaderboardEl = document.getElementById('leaderboard');
    if (!leaderboardEl) return;
    
    const now = Date.now();
    
    if (leaderboardCache.data && (now - leaderboardCache.timestamp) < CONFIG.CACHE.LEADERBOARD_TTL) {
        renderLeaderboard(leaderboardCache.data);
        return;
    }
    
    if (!isAdmin) {
        const mockData = [
            { rank: 1, name: 'CryptoKing', earnings: 12450 },
            { rank: 2, name: 'TonWhale', earnings: 8230 },
            { rank: 3, name: 'MinerPro', earnings: 5670 },
            { rank: 4, name: 'QuantumMiner', earnings: 3890 },
            { rank: 5, name: 'ASICMaster', earnings: 2450 }
        ];
        
        const userRank = Math.floor(Math.random() * 20) + 10;
        
        leaderboardCache.data = { top: mockData, userRank };
        leaderboardCache.timestamp = now;
        
        renderLeaderboard(leaderboardCache.data);
        return;
    }
    
    if (db) {
        try {
            const snapshot = await db.collection('users')
                .orderBy('totalEarned', 'desc')
                .limit(10)
                .get();
            
            const topUsers = [];
            snapshot.forEach((doc, index) => {
                const data = doc.data();
                topUsers.push({
                    rank: index + 1,
                    name: data.username || 'Miner',
                    earnings: data.totalEarned || 0
                });
            });
            
            const userRank = topUsers.findIndex(u => u.name === userName) + 1;
            
            leaderboardCache.data = { top: topUsers, userRank: userRank > 0 ? userRank : 24 };
            leaderboardCache.timestamp = now;
            
            renderLeaderboard(leaderboardCache.data);
            
        } catch (e) {
            console.error('Error fetching leaderboard:', e);
        }
    }
}

function renderLeaderboard(data) {
    const leaderboardEl = document.getElementById('leaderboard');
    if (!leaderboardEl) return;
    
    let html = '';
    
    data.top.forEach((user, index) => {
        let medalClass = '';
        if (index === 0) medalClass = 'gold';
        else if (index === 1) medalClass = 'silver';
        else if (index === 2) medalClass = 'bronze';
        
        html += `
            <div class="leaderboard-item ${medalClass}">
                <span class="rank">${user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : user.rank === 3 ? '🥉' : user.rank}</span>
                <span class="name">${user.name}</span>
                <span class="earnings">${formatTON(user.earnings)} TON</span>
            </div>
        `;
    });
    
    html += `
        <div class="leaderboard-item you">
            <span class="rank">${data.userRank}</span>
            <span class="name" id="leaderboardYou">You</span>
            <span class="earnings" id="yourEarnings">${formatTON(userData.totalEarned)} TON</span>
        </div>
    `;
    
    leaderboardEl.innerHTML = html;
}

function updatePrices() {
    renderAssets();
}

// ====== 38. ADMIN FUNCTIONS ======
let currentAdminTab = 'withdrawals';

function showAdminPanel() {
    if (!isAdmin) {
        showToast('Access denied', 'error');
        return;
    }
    
    document.getElementById('adminModal').classList.add('show');
    loadAdminCounts();
}

function switchAdminTab(tab) {
    currentAdminTab = tab;
    
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    
    const content = document.getElementById('adminContent');
    content.innerHTML = `
        <div class="admin-refresh-message">
            <i class="fas fa-hand-pointer"></i>
            <p>${t('admin.clickRefresh')}</p>
            <button class="admin-refresh-btn" onclick="refreshAdminPanel()">
                <i class="fas fa-rotate-right"></i>
                <span>${t('admin.refresh')}</span>
            </button>
        </div>
    `;
}

async function loadAdminCounts() {
    if (!db) return;
    
    try {
        const [depositsSnap, withdrawalsSnap] = await Promise.all([
            db.collection('deposits').where('status', '==', 'pending').get(),
            db.collection('withdrawals').where('status', '==', 'pending').get()
        ]);
        
        document.getElementById('pendingDepositsCount').textContent = depositsSnap.size;
        document.getElementById('pendingWithdrawalsCount').textContent = withdrawalsSnap.size;
    } catch (e) {
        console.error('Error loading counts:', e);
    }
}

async function refreshAdminPanel() {
    if (!isAdmin || !db) return;
    
    const btn = event.currentTarget;
    const icon = btn.querySelector('i');
    icon.classList.add('fa-spin');
    
    try {
        let query;
        if (currentAdminTab === 'withdrawals') {
            query = db.collection('withdrawals').where('status', '==', 'pending');
        } else {
            query = db.collection('deposits').where('status', '==', 'pending');
        }
        
        const snapshot = await query.get();
        
        if (snapshot.empty) {
            document.getElementById('adminContent').innerHTML = '<div class="empty-state">No pending requests</div>';
            return;
        }
        
        let html = '';
        snapshot.forEach(doc => {
            const data = doc.data();
            html += renderAdminCard(doc.id, data);
        });
        
        document.getElementById('adminContent').innerHTML = html;
        
    } catch (e) {
        console.error('Error refreshing admin:', e);
        showToast('Error loading requests', 'error');
    } finally {
        setTimeout(() => icon.classList.remove('fa-spin'), 500);
    }
}

function renderAdminCard(id, data) {
    const date = new Date(data.timestamp?.toDate?.() || data.timestamp);
    const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    
    if (currentAdminTab === 'withdrawals') {
        return `
            <div class="admin-transaction-card">
                <div class="admin-tx-header">
                    <div class="admin-tx-type withdraw">
                        <i class="fas fa-arrow-up"></i>
                        <span>WITHDRAWAL</span>
                    </div>
                    <span class="admin-tx-status pending">PENDING</span>
                </div>
                <div class="admin-tx-details">
                    <div class="admin-tx-row">
                        <span class="admin-tx-label">User:</span>
                        <span class="admin-tx-value">${data.username || data.userId.slice(0, 8)}</span>
                    </div>
                    <div class="admin-tx-row">
                        <span class="admin-tx-label">Amount:</span>
                        <span class="admin-tx-value">${data.amount} ${data.currency}</span>
                    </div>
                    <div class="admin-tx-row">
                        <span class="admin-tx-label">Address:</span>
                        <div class="admin-address-container">
                            <code>${formatAddress(data.address)}</code>
                            <button class="admin-copy-btn" onclick="copyToClipboard('${data.address}')">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>
                    ${data.fee ? `
                    <div class="admin-tx-row">
                        <span class="admin-tx-label">Fee:</span>
                        <span class="admin-tx-value">${data.fee} ${data.feeCurrency}</span>
                    </div>` : ''}
                    <div class="admin-tx-row">
                        <span class="admin-tx-label">Time:</span>
                        <span class="admin-tx-value">${formattedDate}</span>
                    </div>
                </div>
                <div class="admin-tx-actions">
                    <button class="admin-approve-btn" onclick="approveRequest('${id}', 'withdraw', ${data.amount}, '${data.userId}', '${data.currency}', ${data.fee || 0}, '${data.feeCurrency || data.currency}')">
                        <i class="fas fa-check"></i> Approve
                    </button>
                    <button class="admin-reject-btn" onclick="rejectRequest('${id}', 'withdraw', ${data.amount}, '${data.userId}', '${data.currency}')">
                        <i class="fas fa-times"></i> Reject
                    </button>
                </div>
            </div>
        `;
    } else {
        return `
            <div class="admin-transaction-card">
                <div class="admin-tx-header">
                    <div class="admin-tx-type deposit">
                        <i class="fas fa-arrow-down"></i>
                        <span>DEPOSIT</span>
                    </div>
                    <span class="admin-tx-status pending">PENDING</span>
                </div>
                <div class="admin-tx-details">
                    <div class="admin-tx-row">
                        <span class="admin-tx-label">User:</span>
                        <span class="admin-tx-value">${data.username || data.userId.slice(0, 8)}</span>
                    </div>
                    <div class="admin-tx-row">
                        <span class="admin-tx-label">Amount:</span>
                        <span class="admin-tx-value">${data.amount} ${data.currency}</span>
                    </div>
                    <div class="admin-tx-row">
                        <span class="admin-tx-label">TXID:</span>
                        <div class="admin-address-container">
                            <code>${data.txHash?.slice(0, 16)}...</code>
                            <button class="admin-copy-btn" onclick="copyToClipboard('${data.txHash}')">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>
                    <div class="admin-tx-row">
                        <span class="admin-tx-label">Time:</span>
                        <span class="admin-tx-value">${formattedDate}</span>
                    </div>
                </div>
                <div class="admin-tx-actions">
                    <button class="admin-approve-btn" onclick="approveRequest('${id}', 'deposit', ${data.amount}, '${data.userId}', '${data.currency}')">
                        <i class="fas fa-check"></i> Approve
                    </button>
                    <button class="admin-reject-btn" onclick="rejectRequest('${id}', 'deposit', ${data.amount}, '${data.userId}', '${data.currency}')">
                        <i class="fas fa-times"></i> Reject
                    </button>
                </div>
            </div>
        `;
    }
}

async function approveRequest(id, type, amount, targetUserId, currency, fee = 0, feeCurrency = currency) {
    if (!isAdmin || !db) return;
    
    try {
        const collection = type === 'deposit' ? 'deposits' : 'withdrawals';
        await db.collection(collection).doc(id).update({
            status: 'approved',
            approvedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        if (type === 'deposit') {
            await db.collection('users').doc(targetUserId).update({
                [`balances.${currency}`]: firebase.firestore.FieldValue.increment(amount),
                totalDeposited: firebase.firestore.FieldValue.increment(amount)
            });
        }
        
        showToast('Request approved', 'success');
        refreshAdminPanel();
        
    } catch (e) {
        console.error('Error approving:', e);
        showToast('Error approving request', 'error');
    }
}

async function rejectRequest(id, type, amount, targetUserId, currency) {
    if (!isAdmin || !db) return;
    
    const reason = prompt('Enter rejection reason:');
    if (!reason) return;
    
    try {
        const collection = type === 'deposit' ? 'deposits' : 'withdrawals';
        await db.collection(collection).doc(id).update({
            status: 'rejected',
            reason,
            rejectedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        showToast('Request rejected', 'success');
        refreshAdminPanel();
        
    } catch (e) {
        console.error('Error rejecting:', e);
        showToast('Error rejecting request', 'error');
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    showToast('Copied to clipboard!', 'success');
}

// ====== 39. PAGE NAVIGATION ======
let currentPage = 'mining';

function showPage(page) {
    currentPage = page;
    
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    document.getElementById(page + 'Page').classList.add('active');
    
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`[data-page="${page}"]`).classList.add('active');
    
    if (page === 'market') renderMarket();
    if (page === 'stats') {
        renderAchievements();
        updateChart();
        updateLeaderboard();
    }
    if (page === 'profile') renderAssets();
    
    showRandomSticker();
}

function showMarket() {
    showPage('market');
}

function showWallet() {
    showPage('profile');
}

function updateChart() {
    const chart = document.getElementById('chartBars');
    if (!chart) return;
    
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const earnings = [];
    
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
        const day = new Date(today);
        day.setDate(day.getDate() - i);
        const dayStr = day.toDateString();
        
        const dayEarnings = userData.transactions
            .filter(tx => tx.type === 'mining' && 
                    new Date(tx.timestamp).toDateString() === dayStr)
            .reduce((sum, tx) => sum + tx.amount, 0);
        
        earnings.push(dayEarnings);
    }
    
    const max = Math.max(...earnings, 0.1);
    
    chart.innerHTML = days.map((day, i) => {
        const height = (earnings[i] / max) * 100;
        return `
            <div class="chart-bar" style="height: ${height}%;" data-value="${earnings[i].toFixed(2)} TON" data-day="${day}"></div>
        `;
    }).join('');
}

// ====== 40. SAVE TO FIREBASE ======
async function saveToFirebase() {
    if (!db) return;
    
    try {
        await db.collection('users').doc(userId).set({
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
            achievements: userData.achievements,
            lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
    } catch (e) {
        console.error('Firebase save error:', e);
    }
}

// ====== 41. MODAL FUNCTIONS ======
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        
        if (modalId === 'paymentModal') {
            currentPayment = null;
        }
        if (modalId === 'swapModal') {
            document.getElementById('swapFromAmount').value = '1';
        }
        if (modalId === 'depositModal') {
            document.getElementById('depositAmount').value = '';
            document.getElementById('depositTxHash').value = '';
        }
        if (modalId === 'withdrawModal') {
            document.getElementById('withdrawAmount').value = '';
            document.getElementById('withdrawAddress').value = '';
        }
    }
}

function hideAllModals() {
    const modals = [
        'paymentModal',
        'depositModal',
        'withdrawModal',
        'historyModal',
        'notificationsModal',
        'adminModal',
        'referralModal',
        'swapModal',
        'currencySelectorModal',
        'wheelModal'
    ];
    
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('show');
        }
    });
    
    console.log("✅ All modals hidden on startup");
}

// ====== 42. FILTER MARKET ======
function filterMarket(filter) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const cards = document.querySelectorAll('.showcase-card-legendary');
    cards.forEach(card => {
        if (filter === 'all') {
            card.style.display = 'flex';
        } else {
            const machineName = card.querySelector('h3').textContent;
            const machine = MACHINES.find(m => m.name === machineName || m.nameAr === machineName);
            if (machine?.filter === filter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// ====== 43. INITIALIZATION ======
document.addEventListener('DOMContentLoaded', async () => {
    console.log("🚀 TON MINING PRO v18.0 starting...");
    
    hideAllModals();
    
    if (currentLanguage === 'ar') {
        document.body.classList.add('rtl');
        document.documentElement.dir = 'rtl';
        document.getElementById('currentLanguageFlag').textContent = '🇸🇦';
        document.getElementById('settingsLanguage').textContent = 'العربية';
    } else {
        document.getElementById('currentLanguageFlag').textContent = '🇬🇧';
        document.getElementById('settingsLanguage').textContent = 'English';
    }
    
    updateAllTexts();
    
    await loadUserData();
    await loadPrices();
    await initTonConnect();
    
    startMining();
    
    updateUI();
    renderMarket();
    updateChart();
    renderAchievements();
    
    setupScrollListener();
    
    setInterval(() => {
        if (!userData.autoClicker || !userData.autoClicker.active) {
            const floatBtn = document.getElementById('autoClickerFloat');
            if (floatBtn) {
                floatBtn.classList.add('show');
                setTimeout(() => {
                    floatBtn.classList.remove('show');
                }, 10000);
            }
        }
    }, 300000);
    
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
        }, 500);
    }, 2000);
    
    startFloatingNotifications();
    
    setTimeout(() => showRandomSticker(), 1000);
    
    console.log("✅ App initialized with ZERO WASTE architecture");
    console.log("✅ 6 currencies supported");
    console.log("✅ Lucky Wheel with 25+ prizes");
    console.log("✅ Auto-Clicker system");
    console.log("✅ Referral system with USDT milestones");
});

function setupScrollListener() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    const container = document.querySelector('.main-content');
    
    container.addEventListener('scroll', () => {
        if (container.scrollTop > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
}

// ====== 44. PERIODIC SAVES ======
setInterval(() => {
    if (userData) {
        saveUserToCache();
    }
}, 60000);

setInterval(() => {
    if (userData && db) {
        saveToFirebase().catch(console.error);
    }
}, 300000);

// ====== 45. WINDOW EVENTS ======
window.addEventListener('beforeunload', () => {
    stopMining();
    stopFloatingNotifications();
    stopAllListeners();
    saveUserToCache();
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopMining();
        stopFloatingNotifications();
    } else {
        startMining();
        if (currentPage === 'mining') {
            startFloatingNotifications();
        }
    }
});

// ====== 46. EXPORT FUNCTIONS ======
window.showPage = showPage;
window.showMarket = showMarket;
window.showWallet = showWallet;
window.showHistory = showHistory;
window.showNotifications = showNotifications;
window.showDepositModal = showDepositModal;
window.showWithdrawModal = showWithdrawModal;
window.showSwapModal = showSwapModal;
window.showWheelModal = showWheelModal;
window.spinWheel = spinWheel;
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

console.log("✅ All systems ready. Legendary status achieved!");
console.log("✅ Supported currencies:", Object.keys(CONFIG.DEPOSIT_ADDRESSES).join(", "));
console.log("✅ Referral milestones: 3 → 1000 referrals");
console.log("✅ Lucky Wheel: 25+ prizes, jackpot every 12 spins");
console.log("✅ Auto-Clicker: 0.5 TON for 24h");
