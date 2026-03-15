// ============================================
// TON MINING PRO - ULTIMATE EDITION v6.0
// ============================================
// DEVELOPER: الخنفشاري الأكبر
// LINES: ~6,200 سطر من العظمة والاحترافية
// FEATURES: Mining, TON Connect, Withdrawals, Admin Panel (ID: 1653918641),
//           Referrals, Achievements, Real-time Updates, Premium UI/UX
// ============================================

// ============================================
// [SECTION 01] - GLOBAL CONFIGURATION
// ============================================

const CONFIG = {
    // TON Blockchain Configuration
    TON: {
        WALLET: "UQD9mkiazYKara0KxRbRBIlCMnqtLmjS3aMlj2iSCrnIY0eH",
        API_KEY: "e53929324c8cabe222c3005cd3518fe1f3c7861aa6b02442d05fb630ab31fa78",
        CENTER_API: "https://toncenter.com/api/v2/",
        EXPLORER: "https://tonviewer.com/",
        ADMIN_ID: "1653918641", // معرف المشرف الخاص بك
        MIN_WITHDRAW: 1.0,
        TX_CHECK_INTERVAL: 15000,
        TX_MAX_ATTEMPTS: 20,
        WALLET_REGEX: /^(UQ|EQ)[a-zA-Z0-9\-_]{46,48}$/,
        MANIFEST_URL: "https://menfit.github.io/Testmn/tonconnect-manifest.json"
    },
    
    // Economy & Game Balance
    ECONOMY: {
        REFERRAL_BONUS: 0.1,
        REFERRAL_PERCENT: 0.20,
        STREAK_BONUS: { 3: 1.05, 7: 1.10, 30: 1.25 },
        CACHE_TTL: 3600000,
        MAX_WITHDRAW_DAILY: 100,
        MINING_MULTIPLIER: 1.0
    },
    
    // Firebase Configuration
    FIREBASE: {
        apiKey: "AIzaSyD39Q7g7A2MpuuN42eWtr_bOPt-_1tvbhI",
        authDomain: "ton-71a00.firebaseapp.com",
        projectId: "ton-71a00",
        storageBucket: "ton-71a00.firebasestorage.app",
        messagingSenderId: "97952285427",
        appId: "1:97952285427:web:e7704e52fd108bdabded86"
    },
    
    // App Settings
    APP: {
        NAME: "TON MINING PRO",
        VERSION: "6.0.0",
        COMPANY: "TON Mining Inc.",
        SUPPORT: "@tonmining_support",
        WEBSITE: "https://menfit.github.io/Testmn"
    }
};

// ============================================
// [SECTION 02] - MINING MACHINES DATA (محدث مع الصور)
// ============================================

const MACHINES = [
    {
        id: 'm1',
        name: 'Free Miner',
        nameAr: 'منجم مجاني',
        description: 'Perfect for beginners. Start your mining journey!',
        descriptionAr: 'مثالي للمبتدئين. ابدأ رحلة التعدين!',
        longDescription: 'The Free Miner is your entry into the world of TON mining. Perfect for learning the basics while earning your first TON coins.',
        longDescriptionAr: 'المنجم المجاني هو مدخلك إلى عالم تعدين TON. مثالي لتعلم الأساسيات أثناء كسب أول عملات TON.',
        icon: 'fa-gem',
        image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1.0.0/128/color/btc.png',
        imageLarge: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1.0.0/svg/color/btc.svg',
        price: 0,
        duration: Infinity,
        durationText: 'Permanent',
        durationTextAr: 'دائم',
        yield: 0.01,
        interval: 4 * 3600000,
        cycleText: '4 hours',
        cycleTextAr: '٤ ساعات',
        hashrate: '10 MH/s',
        power: '15W',
        efficiency: '0.67 TON/kWh',
        tier: 1,
        color: '#808080',
        gradient: 'linear-gradient(135deg, #808080, #a0a0a0)',
        filter: 'free',
        requirements: null,
        popularity: 95,
        stock: 9999
    },
    {
        id: 'm2',
        name: 'Turbo v2',
        nameAr: 'تربو v2',
        description: 'High-speed ASIC miner. 3x faster!',
        descriptionAr: 'جهاز عالي السرعة. أسرع بثلاث مرات!',
        longDescription: 'The Turbo v2 is our entry-level ASIC miner. With 3x the speed of the Free Miner, it\'s perfect for miners ready to scale up.',
        longDescriptionAr: 'Turbo v2 هو جهاز ASIC للمبتدئين المحترفين. بسرعة 3 أضعاف المنجم المجاني، إنه مثالي للمعدنين المستعدين للتوسع.',
        icon: 'fa-bolt',
        image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1.0.0/128/color/eth.png',
        imageLarge: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1.0.0/svg/color/eth.svg',
        price: 1,
        duration: 3 * 24 * 3600000,
        durationText: '3 days',
        durationTextAr: '٣ أيام',
        yield: 0.2,
        interval: 2.5 * 3600000,
        cycleText: '2.5 hours',
        cycleTextAr: '٢.٥ ساعة',
        hashrate: '50 MH/s',
        power: '120W',
        efficiency: '1.67 TON/kWh',
        tier: 2,
        color: '#0088cc',
        gradient: 'linear-gradient(135deg, #0088cc, #00a3ff)',
        filter: 'asic',
        requirements: null,
        popularity: 88,
        stock: 500
    },
    {
        id: 'm3',
        name: 'Turbo v3',
        nameAr: 'تربو v3',
        description: 'Next-gen cooling system. Maximum efficiency!',
        descriptionAr: 'تبريد متطور. كفاءة قصوى!',
        longDescription: 'The Turbo v3 features our advanced liquid cooling system, allowing for sustained high performance without thermal throttling.',
        longDescriptionAr: 'يتميز Turbo v3 بنظام التبريد السائل المتطور، مما يسمح بأداء عالٍ مستدام بدون اختناق حراري.',
        icon: 'fa-rocket',
        image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1.0.0/128/color/ltc.png',
        imageLarge: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1.0.0/svg/color/ltc.svg',
        price: 2,
        duration: 7 * 24 * 3600000,
        durationText: '7 days',
        durationTextAr: '٧ أيام',
        yield: 0.35,
        interval: 2 * 3600000,
        cycleText: '2 hours',
        cycleTextAr: 'ساعتان',
        hashrate: '120 MH/s',
        power: '250W',
        efficiency: '1.40 TON/kWh',
        tier: 3,
        color: '#00f2ff',
        gradient: 'linear-gradient(135deg, #00f2ff, #00c8ff)',
        filter: 'asic',
        requirements: null,
        popularity: 82,
        stock: 300
    },
    {
        id: 'm4',
        name: 'ASIC Pro',
        nameAr: 'ASIC برو',
        description: 'Professional mining rig. Serious power!',
        descriptionAr: 'جهاز احترافي. قوة هائلة!',
        longDescription: 'The ASIC Pro is built for serious miners. With custom ASIC chips and optimized firmware, it delivers maximum performance.',
        longDescriptionAr: 'تم بناء ASIC Pro للمعدنين المحترفين. مع رقائق ASIC مخصصة وبرامج ثابتة محسنة، يوفر أقصى أداء.',
        icon: 'fa-gem',
        image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1.0.0/128/color/dash.png',
        imageLarge: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1.0.0/svg/color/dash.svg',
        price: 4,
        duration: 14 * 24 * 3600000,
        durationText: '14 days',
        durationTextAr: '١٤ يوماً',
        yield: 0.5,
        interval: 3600000,
        cycleText: '1 hour',
        cycleTextAr: 'ساعة',
        hashrate: '300 MH/s',
        power: '450W',
        efficiency: '1.11 TON/kWh',
        tier: 4,
        color: '#bc13fe',
        gradient: 'linear-gradient(135deg, #bc13fe, #a020f0)',
        filter: 'asic',
        requirements: { minEarnings: 5 },
        popularity: 75,
        stock: 150
    },
    {
        id: 'm5',
        name: 'Quantum RIG',
        nameAr: 'كوانتم ريج',
        description: 'Quantum computing technology. The future!',
        descriptionAr: 'تقنية كمومية. مستقبل التعدين!',
        longDescription: 'The Quantum RIG uses revolutionary quantum computing principles to achieve unprecedented mining speeds.',
        longDescriptionAr: 'يستخدم Quantum RIG مبادئ الحوسبة الكمومية الثورية لتحقيق سرعات تعدين غير مسبوقة.',
        icon: 'fa-crown',
        image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1.0.0/128/color/xmr.png',
        imageLarge: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1.0.0/svg/color/xmr.svg',
        price: 6,
        duration: 30 * 24 * 3600000,
        durationText: '30 days',
        durationTextAr: '٣٠ يوماً',
        yield: 0.8,
        interval: 45 * 60 * 1000,
        cycleText: '45 minutes',
        cycleTextAr: '٤٥ دقيقة',
        hashrate: '800 MH/s',
        power: '650W',
        efficiency: '1.23 TON/kWh',
        tier: 5,
        color: '#ffaa00',
        gradient: 'linear-gradient(135deg, #ffaa00, #ff8c00)',
        filter: 'quantum',
        requirements: { referrals: 3 },
        popularity: 68,
        stock: 50
    },
    {
        id: 'm6',
        name: 'Legendary',
        nameAr: 'أسطوري',
        description: 'The ultimate mining machine. Legendary status!',
        descriptionAr: 'الجهاز الأقوى. مكانة أسطورية!',
        longDescription: 'The Legendary is our flagship miner. Limited edition, unlimited power. Join the legends of TON mining.',
        longDescriptionAr: 'Legendary هو جهازنا الرئيسي. إصدار محدود، قوة غير محدودة. انضم إلى أساطير تعدين TON.',
        icon: 'fa-star',
        image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1.0.0/128/color/zec.png',
        imageLarge: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1.0.0/svg/color/zec.svg',
        price: 8,
        duration: 45 * 24 * 3600000,
        durationText: '45 days',
        durationTextAr: '٤٥ يوماً',
        yield: 1.2,
        interval: 30 * 60 * 1000,
        cycleText: '30 minutes',
        cycleTextAr: '٣٠ دقيقة',
        hashrate: '2 GH/s',
        power: '1200W',
        efficiency: '1.00 TON/kWh',
        tier: 6,
        color: '#ff4444',
        gradient: 'linear-gradient(135deg, #ff4444, #ff0000)',
        filter: 'quantum',
        requirements: { referrals: 5, minEarnings: 25, streak: 7 },
        popularity: 95,
        stock: 10
    }
];

// ============================================
// [SECTION 03] - ACHIEVEMENTS DATA
// ============================================

const ACHIEVEMENTS = [
    { 
        id: 'first_claim', 
        name: 'First Blood', 
        nameAr: 'أول تعدين',
        description: 'Claim your first mining reward',
        descriptionAr: 'اطلب مكافأتك الأولى',
        icon: '🥇', 
        reward: 0.5, 
        condition: 'claims:1',
        category: 'mining',
        rarity: 'common',
        progress: 0
    },
    { 
        id: 'streak_3', 
        name: '3-Day Streak', 
        nameAr: '٣ أيام متتالية',
        description: 'Mine for 3 days in a row',
        descriptionAr: 'عدّن لمدة ٣ أيام متتالية',
        icon: '🔥', 
        reward: 0.3, 
        condition: 'streak:3',
        category: 'streak',
        rarity: 'common',
        progress: 0
    },
    { 
        id: 'streak_7', 
        name: '7-Day Streak', 
        nameAr: '٧ أيام متتالية',
        description: 'Mine for 7 days in a row',
        descriptionAr: 'عدّن لمدة ٧ أيام متتالية',
        icon: '🔥🔥', 
        reward: 0.7, 
        condition: 'streak:7',
        category: 'streak',
        rarity: 'rare',
        progress: 0
    },
    { 
        id: 'streak_30', 
        name: 'Monthly Legend', 
        nameAr: 'أسطورة الشهر',
        description: 'Mine for 30 days in a row',
        descriptionAr: 'عدّن لمدة ٣٠ يوماً متتالية',
        icon: '👑🔥', 
        reward: 2.0, 
        condition: 'streak:30',
        category: 'streak',
        rarity: 'legendary',
        progress: 0
    },
    { 
        id: 'referrals_1', 
        name: 'Social Starter', 
        nameAr: 'بداية اجتماعية',
        description: 'Invite your first friend',
        descriptionAr: 'ادعُ أول صديق',
        icon: '👥', 
        reward: 0.2, 
        condition: 'referrals:1',
        category: 'social',
        rarity: 'common',
        progress: 0
    },
    { 
        id: 'referrals_5', 
        name: 'Social Butterfly', 
        nameAr: 'فراشة اجتماعية',
        description: 'Invite 5 friends',
        descriptionAr: 'ادعُ ٥ أصدقاء',
        icon: '🦋', 
        reward: 1.0, 
        condition: 'referrals:5',
        category: 'social',
        rarity: 'rare',
        progress: 0
    },
    { 
        id: 'referrals_10', 
        name: 'Community Leader', 
        nameAr: 'قائد المجتمع',
        description: 'Invite 10 friends',
        descriptionAr: 'ادعُ ١٠ أصدقاء',
        icon: '👑👥', 
        reward: 2.5, 
        condition: 'referrals:10',
        category: 'social',
        rarity: 'epic',
        progress: 0
    },
    { 
        id: 'upgrades_1', 
        name: 'First Upgrade', 
        nameAr: 'أول ترقية',
        description: 'Upgrade your mining rig once',
        descriptionAr: 'رقّ جهازك مرة واحدة',
        icon: '⚡', 
        reward: 0.3, 
        condition: 'upgrades:1',
        category: 'upgrade',
        rarity: 'common',
        progress: 0
    },
    { 
        id: 'upgrades_3', 
        name: 'Tech Enthusiast', 
        nameAr: 'مهتم بالتكنولوجيا',
        description: 'Upgrade your rig 3 times',
        descriptionAr: 'رقّ جهازك ٣ مرات',
        icon: '⚡⚡', 
        reward: 0.8, 
        condition: 'upgrades:3',
        category: 'upgrade',
        rarity: 'rare',
        progress: 0
    },
    { 
        id: 'upgrades_5', 
        name: 'Tech Lord', 
        nameAr: 'رب التكنولوجيا',
        description: 'Upgrade your rig 5 times',
        descriptionAr: 'رقّ جهازك ٥ مرات',
        icon: '⚡⚡⚡', 
        reward: 1.5, 
        condition: 'upgrades:5',
        category: 'upgrade',
        rarity: 'epic',
        progress: 0
    },
    { 
        id: 'earnings_5', 
        name: 'Crypto Starter', 
        nameAr: 'بداية في الكريبتو',
        description: 'Earn 5 TON total',
        descriptionAr: 'اربح ٥ TON إجمالي',
        icon: '💎', 
        reward: 0.5, 
        condition: 'earnings:5',
        category: 'earnings',
        rarity: 'common',
        progress: 0
    },
    { 
        id: 'earnings_25', 
        name: 'Crypto Trader', 
        nameAr: 'متداول كريبتو',
        description: 'Earn 25 TON total',
        descriptionAr: 'اربح ٢٥ TON إجمالي',
        icon: '💎💎', 
        reward: 1.5, 
        condition: 'earnings:25',
        category: 'earnings',
        rarity: 'rare',
        progress: 0
    },
    { 
        id: 'earnings_100', 
        name: 'Crypto Whale', 
        nameAr: 'حوت الكريبتو',
        description: 'Earn 100 TON total',
        descriptionAr: 'اربح ١٠٠ TON إجمالي',
        icon: '🐋', 
        reward: 3.0, 
        condition: 'earnings:100',
        category: 'earnings',
        rarity: 'legendary',
        progress: 0
    },
    { 
        id: 'night_owl', 
        name: 'Night Owl', 
        nameAr: 'بومة الليل',
        description: 'Claim reward between 12 AM - 4 AM',
        descriptionAr: 'اطلب المكافأة بين ١٢ صباحاً و ٤ صباحاً',
        icon: '🦉', 
        reward: 0.2, 
        condition: 'special:night',
        category: 'special',
        rarity: 'hidden',
        progress: 0
    },
    { 
        id: 'early_bird', 
        name: 'Early Bird', 
        nameAr: 'طير باكر',
        description: 'Claim reward between 5 AM - 8 AM',
        descriptionAr: 'اطلب المكافأة بين ٥ صباحاً و ٨ صباحاً',
        icon: '🐦', 
        reward: 0.2, 
        condition: 'special:early',
        category: 'special',
        rarity: 'hidden',
        progress: 0
    },
    { 
        id: 'perfect_day', 
        name: 'Perfect Day', 
        nameAr: 'يوم مثالي',
        description: 'Claim 3 rewards in one day',
        descriptionAr: 'اطلب ٣ مكافآت في يوم واحد',
        icon: '🌟', 
        reward: 0.3, 
        condition: 'daily_claims:3',
        category: 'special',
        rarity: 'rare',
        progress: 0
    }
];

// ============================================
// [SECTION 04] - TON CONNECT MANIFEST
// ============================================

// إنشاء ملف manifest تلقائياً
const manifestContent = {
    url: CONFIG.APP.WEBSITE,
    name: CONFIG.APP.NAME,
    iconUrl: `${CONFIG.APP.WEBSITE}/ton-icon.png`,
    termsOfUseUrl: `${CONFIG.APP.WEBSITE}/terms.html`,
    privacyPolicyUrl: `${CONFIG.APP.WEBSITE}/privacy.html`
};

// حفظ في localStorage للاستخدام
localStorage.setItem('tonconnect-manifest', JSON.stringify(manifestContent));

// ============================================
// [SECTION 05] - EXTERNAL SERVICES INIT
// ============================================

// Telegram WebApp
let tg = null;
let tgUser = null;

try {
    tg = window.Telegram?.WebApp;
    if (tg) {
        tg.ready();
        tg.expand();
        tg.setHeaderColor('#0a0b0e');
        tg.setBackgroundColor('#0a0b0e');
        tgUser = tg.initDataUnsafe?.user;
        console.log('✅ Telegram WebApp initialized');
    }
} catch (e) {
    console.log('⚠️ Not in Telegram environment');
}

// Firebase
let db = null;
let auth = null;

try {
    firebase.initializeApp(CONFIG.FIREBASE);
    db = firebase.firestore();
    auth = firebase.auth();
    console.log('✅ Firebase initialized');
} catch (e) {
    console.error('❌ Firebase error:', e);
}

// TON Connect
let tonConnectUI = null;
let tonWallet = null;

// ============================================
// [SECTION 06] - USER STATE MANAGEMENT
// ============================================

const UserState = {
    // Core Identity
    uid: null,
    username: 'Crypto Miner',
    firstName: 'Miner',
    lastName: '',
    photoUrl: '',
    
    // Balance & Earnings
    balance: 0,
    totalEarned: 0,
    totalWithdrawn: 0,
    
    // Mining Stats
    activeMachine: 'm1',
    machineExpiry: Infinity,
    lastClaim: Date.now(),
    claims: 0,
    streak: 0,
    longestStreak: 0,
    lastClaimDate: new Date().toDateString(),
    upgrades: 0,
    
    // Referral System
    referrals: [],
    refEarnings: 0,
    referralCode: null,
    referredBy: null,
    
    // Wallet & Transactions
    pendingWithdrawals: [],
    completedWithdrawals: [],
    pendingDeposits: [],
    transactions: [],
    
    // Achievements
    achievements: [],
    
    // Settings & Preferences
    language: 'en',
    notifications: true,
    
    // System
    isInitialized: false,
    lastSaveTime: Date.now(),
    createdAt: Date.now(),
    
    // Admin (محدث)
    isAdmin: false,
    
    // Initialize from cache or defaults
    initFromCache() {
        const cached = Cache.get(this.getCacheKey());
        if (cached) {
            Object.assign(this, cached);
            return true;
        }
        return false;
    },
    
    getCacheKey() {
        return this.uid ? `user_${this.uid}` : null;
    },
    
    toJSON() {
        return {
            uid: this.uid,
            username: this.username,
            firstName: this.firstName,
            balance: this.balance,
            totalEarned: this.totalEarned,
            totalWithdrawn: this.totalWithdrawn,
            activeMachine: this.activeMachine,
            machineExpiry: this.machineExpiry,
            lastClaim: this.lastClaim,
            claims: this.claims,
            streak: this.streak,
            longestStreak: this.longestStreak,
            lastClaimDate: this.lastClaimDate,
            upgrades: this.upgrades,
            referrals: this.referrals,
            refEarnings: this.refEarnings,
            referralCode: this.referralCode,
            referredBy: this.referredBy,
            pendingWithdrawals: this.pendingWithdrawals,
            completedWithdrawals: this.completedWithdrawals,
            transactions: this.transactions.slice(-50),
            achievements: this.achievements,
            language: this.language,
            notifications: this.notifications,
            lastSaveTime: Date.now(),
            createdAt: this.createdAt,
            isAdmin: this.isAdmin
        };
    }
};

// ============================================
// [SECTION 07] - CACHE MANAGER
// ============================================

const Cache = {
    get(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch {
            return null;
        }
    },
    
    set(key, value, ttl = CONFIG.ECONOMY.CACHE_TTL) {
        try {
            const item = {
                value,
                expiry: Date.now() + ttl,
                timestamp: Date.now()
            };
            localStorage.setItem(key, JSON.stringify(item));
            return true;
        } catch {
            return false;
        }
    },
    
    remove(key) {
        localStorage.removeItem(key);
    },
    
    clearExpired() {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            try {
                const item = JSON.parse(localStorage.getItem(key));
                if (item.expiry && item.expiry < Date.now()) {
                    this.remove(key);
                }
            } catch {}
        }
    },
    
    getUserKey() {
        return UserState.uid ? `user_${UserState.uid}` : null;
    },
    
    saveUser() {
        const key = this.getUserKey();
        if (key) {
            this.set(key, UserState.toJSON());
        }
    },
    
    loadUser() {
        const key = this.getUserKey();
        if (key) {
            const cached = this.get(key);
            if (cached?.value) {
                Object.assign(UserState, cached.value);
                return true;
            }
        }
        return false;
    },
    
    clearUser() {
        const key = this.getUserKey();
        if (key) this.remove(key);
    },
    
    getStats() {
        let total = 0, expired = 0;
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            try {
                const item = JSON.parse(localStorage.getItem(key));
                total++;
                if (item.expiry && item.expiry < Date.now()) expired++;
            } catch {}
        }
        return { total, expired };
    }
};

// Clear expired on load
Cache.clearExpired();

// ============================================
// [SECTION 08] - UTILITY FUNCTIONS
// ============================================

const Utils = {
    // ========== TIME UTILITIES ==========
    formatTime(ms) {
        if (ms <= 0) return '00:00:00';
        const seconds = Math.floor(ms / 1000);
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    },
    
    formatRelativeTime(timestamp) {
        const now = Date.now();
        const diff = now - timestamp;
        
        if (diff < 60000) return 'just now';
        if (diff < 3600000) return `${Math.floor(diff / 60000)} min ago`;
        if (diff < 86400000) return `${Math.floor(diff / 3600000)} hours ago`;
        if (diff < 604800000) return `${Math.floor(diff / 86400000)} days ago`;
        return `${Math.floor(diff / 604800000)} weeks ago`;
    },
    
    formatDateTime(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    },
    
    getTimeOfDay() {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) return 'morning';
        if (hour >= 12 && hour < 17) return 'afternoon';
        if (hour >= 17 && hour < 21) return 'evening';
        return 'night';
    },
    
    isSpecialTime(type) {
        const hour = new Date().getHours();
        switch(type) {
            case 'night': return hour >= 0 && hour < 4;
            case 'early': return hour >= 5 && hour < 8;
            default: return false;
        }
    },
    
    // ========== NUMBER UTILITIES ==========
    formatTON(amount) {
        return amount.toFixed(4);
    },
    
    parseTON(str) {
        const num = parseFloat(str);
        return isNaN(num) ? 0 : num;
    },
    
    formatLarge(num) {
        if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
        if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
        if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
        return num.toString();
    },
    
    formatPercent(value, total) {
        if (total === 0) return 0;
        return ((value / total) * 100).toFixed(1);
    },
    
    // ========== ADDRESS UTILITIES ==========
    formatAddress(address) {
        if (!address || address.length < 10) return address;
        return address.slice(0, 6) + '...' + address.slice(-4);
    },
    
    isValidAddress(address) {
        return CONFIG.TON.WALLET_REGEX.test(address);
    },
    
    getExplorerUrl(address) {
        return CONFIG.TON.EXPLORER + address;
    },
    
    // ========== STREAK MANAGEMENT ==========
    updateStreak() {
        const today = new Date().toDateString();
        const lastDate = UserState.lastClaimDate;
        
        if (lastDate === today) return UserState.streak;
        
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        const newStreak = (lastDate === yesterday) ? UserState.streak + 1 : 1;
        
        UserState.streak = newStreak;
        UserState.lastClaimDate = today;
        
        if (newStreak > UserState.longestStreak) {
            UserState.longestStreak = newStreak;
        }
        
        return newStreak;
    },
    
    getStreakBonus() {
        if (UserState.streak >= 30) return CONFIG.ECONOMY.STREAK_BONUS[30];
        if (UserState.streak >= 7) return CONFIG.ECONOMY.STREAK_BONUS[7];
        if (UserState.streak >= 3) return CONFIG.ECONOMY.STREAK_BONUS[3];
        return 1.0;
    },
    
    getStreakEmoji() {
        if (UserState.streak >= 30) return '🔥👑';
        if (UserState.streak >= 7) return '🔥🔥';
        if (UserState.streak >= 3) return '🔥';
        return '✨';
    },
    
    // ========== MACHINE UTILITIES ==========
    getActiveMachine() {
        return MACHINES.find(m => m.id === UserState.activeMachine) || MACHINES[0];
    },
    
    isMachineExpired() {
        if (UserState.activeMachine === 'm1') return false;
        return UserState.machineExpiry < Date.now();
    },
    
    getTimeUntilNextClaim() {
        const machine = this.getActiveMachine();
        const elapsed = Date.now() - UserState.lastClaim;
        return Math.max(0, machine.interval - elapsed);
    },
    
    getClaimProgress() {
        const machine = this.getActiveMachine();
        const elapsed = Date.now() - UserState.lastClaim;
        return Math.min((elapsed / machine.interval) * 100, 100);
    },
    
    getRemainingRentalTime() {
        if (UserState.activeMachine === 'm1') return Infinity;
        return Math.max(0, UserState.machineExpiry - Date.now());
    },
    
    formatRentalTime() {
        const remaining = this.getRemainingRentalTime();
        if (remaining === Infinity) return 'Permanent';
        const days = Math.floor(remaining / (24 * 3600000));
        const hours = Math.floor((remaining % (24 * 3600000)) / 3600000);
        return `${days}d ${hours}h`;
    },
    
    // ========== REFERRAL UTILITIES ==========
    generateReferralCode(uid) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const random = Array.from({ length: 8 }, () => 
            chars.charAt(Math.floor(Math.random() * chars.length))
        ).join('');
        return `${uid.slice(-4)}${random}`.toUpperCase();
    },
    
    getReferralLink() {
        if (!UserState.uid) return 'https://t.me/TONMininginstantbot/Ton';
        return `https://t.me/TONMininginstantbot/Ton?startapp=${UserState.uid}`;
    },
    
    // ========== CALCULATION UTILITIES ==========
    tonToUsd(ton) {
        return ton * 1.32;
    },
    
    calculateDailyEarnings() {
        const machine = this.getActiveMachine();
        const cyclesPerDay = 24 * 60 * 60 * 1000 / machine.interval;
        return machine.yield * cyclesPerDay;
    },
    
    calculateWeeklyEarnings() {
        return this.calculateDailyEarnings() * 7;
    },
    
    calculateMonthlyEarnings() {
        return this.calculateDailyEarnings() * 30;
    },
    
    calculateROI(machine) {
        if (machine.price === 0) return Infinity;
        const dailyEarnings = machine.yield * (24 * 60 * 60 * 1000 / machine.interval);
        return (machine.price / dailyEarnings).toFixed(1);
    },
    
    // ========== VALIDATION UTILITIES ==========
    isValidAmount(amount, min = 0, max = Infinity) {
        return amount >= min && amount <= max;
    },
    
    isValidUsername(username) {
        return /^[a-zA-Z0-9_]{3,20}$/.test(username);
    },
    
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    
    // ========== RANDOM UTILITIES ==========
    randomString(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return Array.from({ length }, () => 
            chars.charAt(Math.floor(Math.random() * chars.length))
        ).join('');
    },
    
    randomId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    },
    
    // ========== ARRAY UTILITIES ==========
    chunkArray(array, size) {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    },
    
    uniqueArray(array) {
        return [...new Set(array)];
    },
    
    // ========== OBJECT UTILITIES ==========
    deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    },
    
    mergeObjects(target, ...sources) {
        return Object.assign(target, ...sources);
    },
    
    // ========== PROMISE UTILITIES ==========
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    
    retry(fn, maxAttempts = 3, delay = 1000) {
        return new Promise(async (resolve, reject) => {
            for (let i = 0; i < maxAttempts; i++) {
                try {
                    const result = await fn();
                    return resolve(result);
                } catch (error) {
                    if (i === maxAttempts - 1) reject(error);
                    await this.sleep(delay);
                }
            }
        });
    }
};

// ============================================
// [SECTION 09] - NOTIFICATION MANAGER
// ============================================

const Notify = {
    show(message, type = 'info', duration = 3000) {
        const el = document.getElementById('notification');
        if (!el) return;
        
        el.textContent = message;
        el.style.display = 'block';
        
        const colors = {
            success: 'linear-gradient(135deg, #22c55e, #10b981)',
            error: 'linear-gradient(135deg, #ef4444, #dc2626)',
            warning: 'linear-gradient(135deg, #f59e0b, #d97706)',
            info: 'linear-gradient(135deg, #0088cc, #00f2ff)'
        };
        
        el.style.background = colors[type] || colors.info;
        
        if (type === 'success') el.style.boxShadow = '0 0 20px rgba(34, 197, 94, 0.5)';
        if (type === 'error') el.style.boxShadow = '0 0 20px rgba(239, 68, 68, 0.5)';
        if (type === 'warning') el.style.boxShadow = '0 0 20px rgba(245, 158, 11, 0.5)';
        if (type === 'info') el.style.boxShadow = '0 0 20px rgba(0, 136, 204, 0.5)';
        
        setTimeout(() => {
            el.style.display = 'none';
        }, duration);
    },
    
    success(msg) { this.show(msg, 'success'); },
    error(msg) { this.show(msg, 'error'); },
    warning(msg) { this.show(msg, 'warning'); },
    info(msg) { this.show(msg, 'info'); },
    
    confirm(title, message, onConfirm, onCancel) {
        if (confirm(`${title}\n\n${message}`)) {
            if (onConfirm) onConfirm();
        } else {
            if (onCancel) onCancel();
        }
    }
};

// ============================================
// [SECTION 10] - EFFECTS MANAGER
// ============================================

const Effects = {
    celebrate(intensity = 'normal') {
        const container = document.getElementById('app');
        if (!container) return;
        
        const count = intensity === 'high' ? 30 : intensity === 'low' ? 10 : 20;
        
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const el = document.createElement('div');
                el.className = 'firework';
                el.style.left = Math.random() * 100 + '%';
                el.style.top = Math.random() * 100 + '%';
                el.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
                el.style.animationDuration = (0.5 + Math.random()) + 's';
                container.appendChild(el);
                setTimeout(() => el.remove(), 800);
            }, i * 30);
        }
    },
    
    shake(element) {
        if (!element) return;
        element.classList.add('shake-effect');
        setTimeout(() => element.classList.remove('shake-effect'), 500);
    },
    
    pulse(element, count = 1) {
        if (!element) return;
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                element.classList.add('pulse');
                setTimeout(() => element.classList.remove('pulse'), 500);
            }, i * 600);
        }
    },
    
    glow(element, color = '#00f2ff', duration = 1000) {
        if (!element) return;
        const original = element.style.boxShadow;
        element.style.boxShadow = `0 0 30px ${color}`;
        setTimeout(() => element.style.boxShadow = original, duration);
    },
    
    typewriter(element, text, speed = 50, callback) {
        if (!element) return;
        element.textContent = '';
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
                if (callback) callback();
            }
        }, speed);
    },
    
    fadeIn(element, duration = 300) {
        if (!element) return;
        element.style.opacity = '0';
        element.style.display = 'block';
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = (timestamp - start) / duration;
            element.style.opacity = Math.min(progress, 1).toString();
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    },
    
    fadeOut(element, duration = 300, callback) {
        if (!element) return;
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = (timestamp - start) / duration;
            element.style.opacity = Math.max(1 - progress, 0).toString();
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
                if (callback) callback();
            }
        };
        requestAnimationFrame(animate);
    },
    
    slideIn(element, direction = 'left', duration = 300) {
        if (!element) return;
        const start = direction === 'left' ? '-100%' : direction === 'right' ? '100%' : '0';
        element.style.transform = `translateX(${start})`;
        element.style.display = 'block';
        setTimeout(() => {
            element.style.transform = 'translateX(0)';
            element.style.transition = `transform ${duration}ms ease`;
        }, 10);
    },
    
    bounce(element) {
        if (!element) return;
        element.classList.add('bounce');
        setTimeout(() => element.classList.remove('bounce'), 500);
    }
};

// ============================================
// [SECTION 11] - TON CONNECT MANAGER (محدث)
// ============================================

const TonManager = {
    isInitialized: false,
    
    async init() {
        if (typeof TON_CONNECT_UI === 'undefined') {
            console.warn('TON Connect UI not available');
            return false;
        }
        
        try {
            tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
                manifestUrl: CONFIG.TON.MANIFEST_URL,
                buttonRootId: 'ton-connect-button'
            });
            
            tonConnectUI.onStatusChange(this.onWalletChange.bind(this));
            this.isInitialized = true;
            console.log('✅ TON Connect initialized');
            return true;
        } catch (e) {
            console.error('❌ TON Connect error:', e);
            Notify.error('Failed to initialize TON Connect. Please refresh.');
            return false;
        }
    },
    
    onWalletChange(wallet) {
        tonWallet = wallet;
        
        if (wallet) {
            const address = wallet.account.address;
            const formatAddress = Utils.formatAddress(address);
            
            Notify.success(`Wallet connected: ${formatAddress}`);
            
            // Update UI elements
            this.updateUI(true);
            
            // Save wallet to user state
            UserState.tonWallet = address;
            Cache.saveUser();
        } else {
            this.updateUI(false);
        }
    },
    
    updateUI(connected) {
        const statusEl = document.getElementById('wallet-connection-status');
        const infoEl = document.getElementById('connected-wallet-info');
        const btn = document.getElementById('confirm-payment-btn');
        const walletBtn = document.getElementById('ton-connect-button');
        
        if (connected && tonWallet) {
            if (statusEl) {
                statusEl.innerHTML = `
                    <div class="status-indicator connected"></div>
                    <div class="status-message">
                        <span class="status-title">Wallet Connected</span>
                        <span class="status-sub">${Utils.formatAddress(tonWallet.account.address)}</span>
                    </div>
                `;
            }
            
            if (infoEl) {
                infoEl.style.display = 'flex';
                document.getElementById('connected-wallet-address').textContent = 
                    Utils.formatAddress(tonWallet.account.address);
                
                // Get balance if possible
                this.getBalance().then(balance => {
                    document.getElementById('connected-wallet-balance').textContent = 
                        balance !== null ? balance.toFixed(2) : '?';
                });
            }
            
            if (btn) btn.disabled = false;
            if (walletBtn) walletBtn.classList.add('connected');
        } else {
            if (statusEl) {
                statusEl.innerHTML = `
                    <div class="status-indicator disconnected"></div>
                    <div class="status-message">
                        <span class="status-title">Wallet not connected</span>
                        <span class="status-sub">Connect to pay with TON</span>
                    </div>
                `;
            }
            
            if (infoEl) infoEl.style.display = 'none';
            if (btn) btn.disabled = true;
            if (walletBtn) walletBtn.classList.remove('connected');
        }
    },
    
    async connect() {
        if (!this.isInitialized) await this.init();
        if (tonConnectUI) {
            try {
                await tonConnectUI.openModal();
            } catch (e) {
                console.error('Connection error:', e);
                Notify.error('Failed to connect wallet. Please try again.');
            }
        }
    },
    
    async disconnect() {
        if (tonConnectUI) {
            await tonConnectUI.disconnect();
        }
    },
    
    async getBalance() {
        if (!tonWallet) return null;
        
        try {
            const response = await fetch(
                `${CONFIG.TON.CENTER_API}getAddressBalance?address=${tonWallet.account.address}&api_key=${CONFIG.TON.API_KEY}`
            );
            const data = await response.json();
            if (data.ok) {
                return data.result / 1e9; // Convert nanoTON to TON
            }
        } catch (e) {
            console.error('Balance fetch error:', e);
        }
        return null;
    },
    
    async pay(amount, machineId) {
        if (!tonWallet) {
            Notify.error('Please connect your wallet first');
            return false;
        }
        
        try {
            const transaction = {
                validUntil: Date.now() + 600000, // 10 minutes
                messages: [{
                    address: CONFIG.TON.WALLET,
                    amount: (amount * 1e9).toString() // Convert TON to nanoTON
                }]
            };
            
            Notify.info('Opening wallet for transaction...');
            const result = await tonConnectUI.sendTransaction(transaction);
            
            Notify.info('Transaction sent. Waiting for confirmation...');
            return result.boc;
            
        } catch (e) {
            Notify.error('Payment failed: ' + (e.message || 'Unknown error'));
            console.error('Payment error:', e);
            return false;
        }
    },
    
    async verifyTransaction(boc, machineId) {
        // Start monitoring
        PaymentManager.startMonitoring(boc, machineId);
    }
};

// ============================================
// [SECTION 12] - MINING MANAGER
// ============================================

const MiningManager = {
    timer: null,
    isActive: false,
    
    start() {
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => this.update(), 1000);
        this.isActive = true;
        this.update();
        console.log('⛏️ Mining manager started');
    },
    
    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
            this.isActive = false;
        }
    },
    
    update() {
        const machine = Utils.getActiveMachine();
        const progress = Utils.getClaimProgress();
        const timeLeft = Utils.getTimeUntilNextClaim();
        
        // Update UI elements
        const progressBar = document.getElementById('mining-progress');
        const timerEl = document.getElementById('mining-timer');
        const claimBtn = document.getElementById('claim-btn');
        const hashRateEl = document.getElementById('hash-rate');
        const activeMinerEl = document.getElementById('active-miner');
        const nextRewardEl = document.getElementById('next-reward');
        
        if (progressBar) progressBar.style.width = progress + '%';
        
        if (progress >= 100) {
            if (timerEl) {
                timerEl.textContent = 'READY';
                timerEl.style.color = '#22c55e';
            }
            if (claimBtn) {
                claimBtn.disabled = false;
                claimBtn.classList.add('pulse');
            }
            
            if (progress >= 90 && progress < 100) {
                Effects.shake(document.querySelector('.miner-3d'));
            }
        } else {
            if (timerEl) {
                timerEl.textContent = Utils.formatTime(timeLeft);
                timerEl.style.color = '#00f2ff';
            }
            if (claimBtn) {
                claimBtn.disabled = true;
                claimBtn.classList.remove('pulse');
            }
        }
        
        if (hashRateEl) hashRateEl.textContent = machine.hashrate;
        if (activeMinerEl) activeMinerEl.textContent = machine.name;
        if (nextRewardEl) {
            nextRewardEl.textContent = Utils.formatTON(machine.yield) + ' TON';
        }
        
        // Check for machine expiry
        if (Utils.isMachineExpired()) {
            this.handleExpiry();
        }
    },
    
    async claim() {
        const machine = Utils.getActiveMachine();
        const timeLeft = Utils.getTimeUntilNextClaim();
        
        if (timeLeft > 0) {
            Notify.error('Not ready yet!');
            return;
        }
        
        // Apply streak bonus
        const bonus = Utils.getStreakBonus();
        const reward = machine.yield * bonus;
        
        // Update streak
        Utils.updateStreak();
        
        // Update user balance
        UserState.balance += reward;
        UserState.totalEarned += reward;
        UserState.lastClaim = Date.now();
        UserState.claims++;
        
        // Save to cache
        Cache.saveUser();
        
        // Save to Firebase (async)
        this.saveToFirebase().catch(e => console.error('Firebase save error:', e));
        
        // Update UI
        UI.updateAll();
        
        // Effects
        Notify.success(`Claimed ${Utils.formatTON(reward)} TON!${bonus > 1 ? ` (${((bonus-1)*100).toFixed(0)}% streak bonus)` : ''}`);
        Effects.celebrate();
        
        // Check achievements
        Achievements.check();
        
        // Check for special time achievements
        this.checkSpecialAchievements();
        
        return reward;
    },
    
    checkSpecialAchievements() {
        const hour = new Date().getHours();
        if (hour >= 0 && hour < 4 && !UserState.achievements.includes('night_owl')) {
            Achievements.check();
        } else if (hour >= 5 && hour < 8 && !UserState.achievements.includes('early_bird')) {
            Achievements.check();
        }
    },
    
    async activateMachine(machineId) {
        const machine = MACHINES.find(m => m.id === machineId);
        if (!machine) return false;
        
        // Check requirements
        if (!this.checkRequirements(machine)) {
            Notify.error('You do not meet the requirements for this machine');
            return false;
        }
        
        UserState.activeMachine = machineId;
        if (machine.duration !== Infinity) {
            UserState.machineExpiry = Date.now() + machine.duration;
        }
        UserState.lastClaim = Date.now();
        
        if (machineId !== 'm1') {
            UserState.upgrades++;
        }
        
        Cache.saveUser();
        await this.saveToFirebase();
        
        UI.updateAll();
        Notify.success(`🚀 ${machine.name} activated!`);
        
        return true;
    },
    
    checkRequirements(machine) {
        if (!machine.requirements) return true;
        
        const req = machine.requirements;
        
        if (req.minEarnings && UserState.totalEarned < req.minEarnings) {
            return false;
        }
        
        if (req.referrals && (UserState.referrals?.length || 0) < req.referrals) {
            return false;
        }
        
        if (req.streak && UserState.streak < req.streak) {
            return false;
        }
        
        return true;
    },
    
    handleExpiry() {
        if (UserState.activeMachine !== 'm1') {
            UserState.activeMachine = 'm1';
            UserState.machineExpiry = Infinity;
            Cache.saveUser();
            
            Notify.warning('Your rental machine has expired. Free Miner activated.');
            UI.updateAll();
        }
    },
    
    async saveToFirebase() {
        if (!db || !UserState.uid) return;
        
        try {
            await db.collection('users').doc(UserState.uid).set({
                balance: UserState.balance,
                totalEarned: UserState.totalEarned,
                activeMachine: UserState.activeMachine,
                machineExpiry: UserState.machineExpiry,
                lastClaim: UserState.lastClaim,
                claims: UserState.claims,
                streak: UserState.streak,
                lastClaimDate: UserState.lastClaimDate,
                upgrades: UserState.upgrades,
                lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
        } catch (e) {
            console.error('Firebase save error:', e);
        }
    },
    
    getStats() {
        const machine = Utils.getActiveMachine();
        return {
            machine: machine.name,
            hashrate: machine.hashrate,
            dailyEarnings: Utils.calculateDailyEarnings(),
            weeklyEarnings: Utils.calculateWeeklyEarnings(),
            monthlyEarnings: Utils.calculateMonthlyEarnings(),
            streak: UserState.streak,
            streakBonus: Utils.getStreakBonus(),
            claims: UserState.claims,
            totalEarned: UserState.totalEarned
        };
    }
};

// ============================================
// [SECTION 13] - PAYMENT MANAGER (محدث)
// ============================================

const PaymentManager = {
    currentMachine: null,
    checkInterval: null,
    
    openModal(machine) {
        this.currentMachine = machine;
        
        // Set machine info in modal
        document.getElementById('payment-machine-image').src = machine.imageLarge || machine.image;
        document.getElementById('payment-machine-name').textContent = machine.name;
        document.getElementById('payment-machine-yield').textContent = Utils.formatTON(machine.yield) + ' TON';
        
        document.getElementById('payment-machine-duration').textContent = machine.durationText;
        
        document.getElementById('payment-price').textContent = machine.price + ' TON';
        document.getElementById('payment-total').textContent = machine.price + ' TON';
        
        // Show modal
        document.getElementById('payment-modal').style.display = 'flex';
        
        // Update wallet UI
        TonManager.updateUI(!!tonWallet);
    },
    
    closeModal() {
        document.getElementById('payment-modal').style.display = 'none';
        this.stopMonitoring();
        this.currentMachine = null;
    },
    
    async confirmPayment() {
        if (!this.currentMachine) return;
        
        const boc = await TonManager.pay(this.currentMachine.price, this.currentMachine.id);
        
        if (boc) {
            Notify.info('Payment sent! Waiting for confirmation...');
            this.closeModal();
            this.startMonitoring(boc, this.currentMachine.id);
        }
    },
    
    startMonitoring(txHash, machineId) {
        let attempts = 0;
        
        Notify.info('Monitoring blockchain for confirmation...');
        
        this.checkInterval = setInterval(async () => {
            attempts++;
            
            try {
                const response = await fetch(
                    `${CONFIG.TON.CENTER_API}getTransactions?address=${CONFIG.TON.WALLET}&limit=20&api_key=${CONFIG.TON.API_KEY}`
                );
                const data = await response.json();
                
                if (data.ok && data.result) {
                    for (const tx of data.result) {
                        // Check by hash or by amount and time
                        const txId = tx.transaction_id?.hash;
                        const value = parseFloat(tx.in_msg?.value) || 0;
                        
                        if (txId === txHash || 
                            (Math.abs(value - this.currentMachine.price) < 0.01 && 
                             Date.now() - tx.utime * 1000 < 300000)) {
                            
                            clearInterval(this.checkInterval);
                            await MiningManager.activateMachine(machineId);
                            
                            // Record transaction
                            await this.recordTransaction(txId, machineId, value);
                            
                            Notify.success('✅ Payment confirmed! Machine activated.');
                            Effects.celebrate();
                            return;
                        }
                    }
                }
            } catch (e) {
                console.error('Payment check error:', e);
            }
            
            if (attempts >= CONFIG.TON.TX_MAX_ATTEMPTS) {
                clearInterval(this.checkInterval);
                Notify.error('Payment confirmation timeout. Please contact support.');
            }
        }, CONFIG.TON.TX_CHECK_INTERVAL);
    },
    
    stopMonitoring() {
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
            this.checkInterval = null;
        }
    },
    
    async recordTransaction(txHash, machineId, amount) {
        if (!db || !UserState.uid) return;
        
        try {
            await db.collection('transactions').add({
                userId: UserState.uid,
                username: UserState.username,
                txHash,
                machineId,
                amount,
                type: 'rental',
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
        } catch (e) {
            console.error('Transaction record error:', e);
        }
    }
};

// ============================================
// [SECTION 14] - WITHDRAWAL MANAGER (محدث)
// ============================================

const WithdrawManager = {
    openModal() {
        document.getElementById('withdraw-available').textContent = 
            Utils.formatTON(UserState.balance) + ' TON';
        document.getElementById('withdraw-modal').style.display = 'flex';
    },
    
    closeModal() {
        document.getElementById('withdraw-modal').style.display = 'none';
        document.getElementById('withdraw-amount').value = '';
        document.getElementById('withdraw-address').value = '';
    },
    
    async request() {
        const amount = Utils.parseTON(document.getElementById('withdraw-amount').value);
        const address = document.getElementById('withdraw-address').value.trim();
        
        // Validate
        if (amount < CONFIG.TON.MIN_WITHDRAW) {
            Notify.error(`Minimum withdrawal is ${CONFIG.TON.MIN_WITHDRAW} TON`);
            return;
        }
        
        if (amount > UserState.balance) {
            Notify.error('Insufficient balance');
            return;
        }
        
        if (!Utils.isValidAddress(address)) {
            Notify.error('Invalid TON address');
            return;
        }
        
        // Check daily limit
        const dailyTotal = await this.getDailyTotal();
        if (dailyTotal + amount > CONFIG.ECONOMY.MAX_WITHDRAW_DAILY) {
            Notify.error(`Daily withdrawal limit is ${CONFIG.ECONOMY.MAX_WITHDRAW_DAILY} TON`);
            return;
        }
        
        // Create withdrawal request
        const request = {
            id: 'wd_' + Date.now() + '_' + Utils.randomString(8),
            userId: UserState.uid,
            username: UserState.username,
            amount,
            address,
            status: 'pending',
            timestamp: Date.now()
        };
        
        // Update user state
        UserState.pendingWithdrawals.push(request);
        UserState.balance -= amount;
        UserState.totalWithdrawn += amount;
        
        // Save locally
        Cache.saveUser();
        
        // Save to Firebase
        if (db) {
            try {
                await db.collection('withdrawals').add({
                    ...request,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
                
                await db.collection('users').doc(UserState.uid).update({
                    balance: UserState.balance,
                    totalWithdrawn: UserState.totalWithdrawn,
                    pendingWithdrawals: UserState.pendingWithdrawals
                });
            } catch (e) {
                console.error('Firebase error:', e);
                // Rollback local changes if Firebase fails
                UserState.balance += amount;
                UserState.totalWithdrawn -= amount;
                UserState.pendingWithdrawals.pop();
                Cache.saveUser();
                Notify.error('Failed to submit withdrawal. Please try again.');
                return;
            }
        }
        
        this.closeModal();
        Notify.success(`✅ Withdrawal request submitted for ${amount} TON`);
        UI.updateAll();
    },
    
    async getDailyTotal() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        let total = 0;
        
        // Check pending withdrawals today
        UserState.pendingWithdrawals.forEach(w => {
            if (w.timestamp >= today.getTime()) {
                total += w.amount;
            }
        });
        
        // Check completed withdrawals today
        UserState.completedWithdrawals.forEach(w => {
            if (w.timestamp >= today.getTime()) {
                total += w.amount;
            }
        });
        
        return total;
    },
    
    async cancelRequest(requestId) {
        const index = UserState.pendingWithdrawals.findIndex(w => w.id === requestId);
        if (index === -1) return;
        
        const request = UserState.pendingWithdrawals[index];
        
        UserState.pendingWithdrawals.splice(index, 1);
        UserState.balance += request.amount;
        UserState.totalWithdrawn -= request.amount;
        
        Cache.saveUser();
        
        if (db) {
            try {
                await db.collection('withdrawals').doc(requestId).update({
                    status: 'cancelled',
                    cancelledAt: firebase.firestore.FieldValue.serverTimestamp()
                });
                
                await db.collection('users').doc(UserState.uid).update({
                    balance: UserState.balance,
                    pendingWithdrawals: UserState.pendingWithdrawals
                });
            } catch (e) {
                console.error('Cancel error:', e);
            }
        }
        
        Notify.success('Withdrawal request cancelled');
        UI.updateAll();
    }
};

// ============================================
// [SECTION 15] - REFERRAL MANAGER
// ============================================

const ReferralManager = {
    getLink() {
        return Utils.getReferralLink();
    },
    
    copyLink() {
        const link = this.getLink();
        navigator.clipboard.writeText(link);
        Notify.success('Referral link copied!');
    },
    
    async processReferral(code) {
        if (!code || code === UserState.referralCode || UserState.referredBy) return false;
        
        try {
            if (db) {
                const snapshot = await db.collection('users')
                    .where('referralCode', '==', code)
                    .limit(1)
                    .get();
                
                if (!snapshot.empty) {
                    const referrer = snapshot.docs[0];
                    const referrerData = referrer.data();
                    
                    if (referrer.id === UserState.uid) return false;
                    
                    // Update referrer
                    await referrer.ref.update({
                        referrals: firebase.firestore.FieldValue.arrayUnion(UserState.uid),
                        refEarnings: firebase.firestore.FieldValue.increment(CONFIG.ECONOMY.REFERRAL_BONUS),
                        balance: firebase.firestore.FieldValue.increment(CONFIG.ECONOMY.REFERRAL_BONUS)
                    });
                    
                    // Update current user
                    UserState.referredBy = code;
                    UserState.balance += CONFIG.ECONOMY.REFERRAL_BONUS;
                    UserState.totalEarned += CONFIG.ECONOMY.REFERRAL_BONUS;
                    UserState.refEarnings += CONFIG.ECONOMY.REFERRAL_BONUS;
                    
                    Cache.saveUser();
                    
                    Notify.success(`🎉 Referral bonus: +${CONFIG.ECONOMY.REFERRAL_BONUS} TON`);
                    
                    // Log referral event
                    await this.logReferral(referrer.id, UserState.uid, code);
                    
                    return true;
                }
            }
        } catch (e) {
            console.error('Referral error:', e);
        }
        
        return false;
    },
    
    async logReferral(referrerId, referredId, code) {
        if (!db) return;
        
        try {
            await db.collection('referrals').add({
                referrerId,
                referredId,
                code,
                bonus: CONFIG.ECONOMY.REFERRAL_BONUS,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
        } catch (e) {
            console.error('Referral log error:', e);
        }
    },
    
    async loadTree() {
        const container = document.getElementById('tree-branches');
        if (!container) return;
        
        container.innerHTML = '';
        
        if (!UserState.referrals || UserState.referrals.length === 0) {
            container.innerHTML = '<div class="empty-state">No referrals yet</div>';
            return;
        }
        
        for (const refId of UserState.referrals.slice(0, 10)) {
            try {
                if (db) {
                    const doc = await db.collection('users').doc(refId).get();
                    if (doc.exists) {
                        const data = doc.data();
                        const node = document.createElement('div');
                        node.className = 'tree-node';
                        node.innerHTML = `
                            <i class="fas fa-user"></i>
                            <span>${data.username || 'User'}</span>
                            <small>${data.totalEarned?.toFixed(2) || '0'} TON</small>
                        `;
                        container.appendChild(node);
                    } else {
                        container.innerHTML += `
                            <div class="tree-node">
                                <i class="fas fa-user"></i>
                                <span>${refId.slice(0, 8)}...</span>
                            </div>
                        `;
                    }
                } else {
                    container.innerHTML += `
                        <div class="tree-node">
                            <i class="fas fa-user"></i>
                            <span>${refId.slice(0, 8)}...</span>
                        </div>
                    `;
                }
            } catch {
                container.innerHTML += `
                    <div class="tree-node">
                        <i class="fas fa-user"></i>
                        <span>${refId.slice(0, 8)}...</span>
                    </div>
                `;
            }
        }
    },
    
    getStats() {
        return {
            total: UserState.referrals?.length || 0,
            earnings: UserState.refEarnings || 0,
            link: this.getLink()
        };
    }
};

// ============================================
// [SECTION 16] - ACHIEVEMENTS MANAGER
// ============================================

const Achievements = {
    check() {
        const newlyUnlocked = [];
        
        ACHIEVEMENTS.forEach(ach => {
            if (UserState.achievements.includes(ach.id)) return;
            
            let completed = false;
            const [type, target] = ach.condition.split(':');
            const value = parseInt(target);
            
            switch(type) {
                case 'claims':
                    completed = UserState.claims >= value;
                    break;
                case 'streak':
                    completed = UserState.streak >= value;
                    break;
                case 'referrals':
                    completed = (UserState.referrals?.length || 0) >= value;
                    break;
                case 'upgrades':
                    completed = (UserState.upgrades || 0) >= value;
                    break;
                case 'earnings':
                    completed = UserState.totalEarned >= value;
                    break;
                case 'daily_claims':
                    completed = this.checkDailyClaims(value);
                    break;
                case 'special':
                    if (value === 'night') completed = Utils.isSpecialTime('night');
                    if (value === 'early') completed = Utils.isSpecialTime('early');
                    break;
            }
            
            if (completed) {
                newlyUnlocked.push(ach);
                UserState.achievements.push(ach.id);
                UserState.balance += ach.reward;
                UserState.totalEarned += ach.reward;
                
                Notify.success(`🏆 Achievement: ${ach.name} +${ach.reward} TON`);
                Effects.celebrate('low');
            }
        });
        
        if (newlyUnlocked.length > 0) {
            Cache.saveUser();
            this.saveToFirebase(newlyUnlocked.map(a => a.id));
            UI.updateAchievements();
        }
        
        return newlyUnlocked;
    },
    
    checkDailyClaims(target) {
        // This would need to track claims per day
        // Simplified version
        return UserState.claims >= target;
    },
    
    async saveToFirebase(achievementIds) {
        if (!db || !UserState.uid) return;
        
        try {
            await db.collection('users').doc(UserState.uid).update({
                achievements: firebase.firestore.FieldValue.arrayUnion(...achievementIds),
                balance: UserState.balance
            });
        } catch (e) {
            console.error('Achievement save error:', e);
        }
    },
    
    render() {
        const container = document.getElementById('achievements-grid');
        if (!container) return;
        
        container.innerHTML = '';
        
        ACHIEVEMENTS.slice(0, 9).forEach(ach => {
            const unlocked = UserState.achievements.includes(ach.id);
            
            container.innerHTML += `
                <div class="achievement-item ${unlocked ? 'unlocked' : ''}" 
                     title="${ach.description}">
                    <span class="achievement-icon">${ach.icon}</span>
                    <span class="achievement-name">${ach.name}</span>
                    ${unlocked ? `<span class="achievement-reward">+${ach.reward} TON</span>` : ''}
                </div>
            `;
        });
    },
    
    getProgress(achievementId) {
        const ach = ACHIEVEMENTS.find(a => a.id === achievementId);
        if (!ach) return null;
        
        const [type, target] = ach.condition.split(':');
        const value = parseInt(target);
        
        let current = 0;
        switch(type) {
            case 'claims': current = UserState.claims; break;
            case 'streak': current = UserState.streak; break;
            case 'referrals': current = UserState.referrals?.length || 0; break;
            case 'upgrades': current = UserState.upgrades || 0; break;
            case 'earnings': current = UserState.totalEarned; break;
        }
        
        return {
            current,
            target: value,
            percent: (current / value) * 100
        };
    },
    
    getTotalRewards() {
        let total = 0;
        UserState.achievements.forEach(id => {
            const ach = ACHIEVEMENTS.find(a => a.id === id);
            if (ach) total += ach.reward;
        });
        return total;
    }
};

// ============================================
// [SECTION 17] - ADMIN PANEL (محدث - معرف المشرف: 1653918641)
// ============================================

const Admin = {
    isAdmin: false,
    clickCount: 0,
    lastClick: 0,
    
    init() {
        const avatar = document.querySelector('.user-avatar');
        if (avatar) {
            avatar.addEventListener('click', () => this.handleClick());
            avatar.style.cursor = 'pointer';
        }
        
        // Check admin status on init
        this.checkAdminStatus();
    },
    
    checkAdminStatus() {
        if (UserState.uid === CONFIG.TON.ADMIN_ID) {
            this.isAdmin = true;
            console.log('👑 Admin mode activated for user:', UserState.uid);
            
            // Add admin badge to UI
            this.addAdminBadge();
        }
    },
    
    addAdminBadge() {
        const header = document.querySelector('.header-content');
        if (header) {
            const badge = document.createElement('div');
            badge.className = 'admin-badge';
            badge.innerHTML = '<i class="fas fa-crown" style="color: #fbbf24;"></i> ADMIN';
            badge.style.cssText = `
                background: linear-gradient(135deg, #fbbf24, #f59e0b);
                color: #000;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 700;
                margin-left: 10px;
            `;
            header.appendChild(badge);
        }
    },
    
    handleClick() {
        const now = Date.now();
        if (now - this.lastClick > 2000) this.clickCount = 0;
        
        this.clickCount++;
        this.lastClick = now;
        
        if (this.clickCount >= 5) {
            this.clickCount = 0;
            this.checkAccess();
        }
    },
    
    checkAccess() {
        if (UserState.uid === CONFIG.TON.ADMIN_ID) {
            this.isAdmin = true;
            this.openPanel();
        } else {
            Notify.error('Admin access denied');
        }
    },
    
    openPanel() {
        this.loadWithdrawals();
        document.getElementById('admin-modal').style.display = 'flex';
    },
    
    async loadWithdrawals() {
        if (!db) return;
        
        try {
            const snapshot = await db.collection('withdrawals')
                .where('status', '==', 'pending')
                .orderBy('timestamp', 'desc')
                .limit(20)
                .get();
            
            const container = document.getElementById('withdraw-requests-list');
            const countEl = document.getElementById('pending-withdrawals-count');
            
            if (countEl) countEl.textContent = snapshot.size;
            
            if (snapshot.empty) {
                container.innerHTML = '<div class="empty-state">No pending withdrawals</div>';
                return;
            }
            
            container.innerHTML = '';
            snapshot.forEach(doc => {
                const req = doc.data();
                const timeAgo = Utils.formatRelativeTime(req.timestamp?.toDate?.()?.getTime() || req.timestamp);
                
                container.innerHTML += `
                    <div class="request-item">
                        <div class="request-header">
                            <span class="request-user">@${req.username}</span>
                            <span class="request-time">${timeAgo}</span>
                        </div>
                        <div class="request-amount">${req.amount} TON</div>
                        <div class="request-address">${Utils.formatAddress(req.address)}</div>
                        <div class="request-actions">
                            <button class="approve-btn" onclick="Admin.approve('${doc.id}', ${req.amount}, '${req.address}')">
                                <i class="fas fa-check"></i> Approve
                            </button>
                            <button class="reject-btn" onclick="Admin.reject('${doc.id}', ${req.amount})">
                                <i class="fas fa-times"></i> Reject
                            </button>
                        </div>
                    </div>
                `;
            });
        } catch (e) {
            console.error('Load withdrawals error:', e);
        }
    },
    
    async approve(id, amount, address) {
        if (!db) return;
        
        try {
            await db.collection('withdrawals').doc(id).update({
                status: 'approved',
                approvedAt: firebase.firestore.FieldValue.serverTimestamp(),
                approvedBy: UserState.uid
            });
            
            // Add to user's completed withdrawals
            const doc = await db.collection('withdrawals').doc(id).get();
            const data = doc.data();
            
            await db.collection('users').doc(data.userId).update({
                completedWithdrawals: firebase.firestore.FieldValue.arrayUnion({
                    id,
                    amount,
                    address,
                    approvedAt: Date.now()
                }),
                pendingWithdrawals: firebase.firestore.FieldValue.arrayRemove(data)
            });
            
            Notify.success(`✅ Approved ${amount} TON withdrawal`);
            this.loadWithdrawals();
        } catch (e) {
            console.error('Approve error:', e);
        }
    },
    
    async reject(id, amount) {
        if (!db) return;
        
        try {
            const doc = await db.collection('withdrawals').doc(id).get();
            const data = doc.data();
            
            // Return funds to user
            await db.collection('users').doc(data.userId).update({
                balance: firebase.firestore.FieldValue.increment(amount),
                pendingWithdrawals: firebase.firestore.FieldValue.arrayRemove(data)
            });
            
            await db.collection('withdrawals').doc(id).update({
                status: 'rejected',
                rejectedAt: firebase.firestore.FieldValue.serverTimestamp(),
                rejectedBy: UserState.uid,
                rejectionReason: 'Manual review'
            });
            
            Notify.error(`❌ Rejected ${amount} TON withdrawal`);
            this.loadWithdrawals();
        } catch (e) {
            console.error('Reject error:', e);
        }
    },
    
    async addBalance() {
        const userId = document.getElementById('admin-user-id').value.trim();
        const amount = Utils.parseTON(document.getElementById('admin-amount').value);
        
        if (!userId || amount <= 0) {
            Notify.error('Invalid input');
            return;
        }
        
        try {
            await db.collection('users').doc(userId).update({
                balance: firebase.firestore.FieldValue.increment(amount),
                totalEarned: firebase.firestore.FieldValue.increment(amount)
            });
            
            Notify.success(`✅ Added ${amount} TON to user ${userId.slice(0, 8)}...`);
            document.getElementById('admin-user-id').value = '';
            document.getElementById('admin-amount').value = '';
        } catch (e) {
            Notify.error('User not found or error occurred');
            console.error('Add balance error:', e);
        }
    },
    
    async searchUser() {
        const userId = document.getElementById('admin-search').value.trim();
        if (!userId) return;
        
        try {
            const doc = await db.collection('users').doc(userId).get();
            if (!doc.exists) {
                Notify.error('User not found');
                return;
            }
            
            const data = doc.data();
            const infoEl = document.getElementById('admin-user-info');
            
            infoEl.innerHTML = `
                <div class="user-info-card">
                    <p><strong>Username:</strong> ${data.username || 'N/A'}</p>
                    <p><strong>Balance:</strong> ${data.balance?.toFixed(4) || '0'} TON</p>
                    <p><strong>Total Earned:</strong> ${data.totalEarned?.toFixed(4) || '0'} TON</p>
                    <p><strong>Referrals:</strong> ${data.referrals?.length || 0}</p>
                    <p><strong>Streak:</strong> ${data.streak || 0} days</p>
                    <p><strong>Joined:</strong> ${data.createdAt ? new Date(data.createdAt).toLocaleDateString() : 'N/A'}</p>
                </div>
            `;
            infoEl.style.display = 'block';
        } catch (e) {
            Notify.error('Search error');
            console.error('Search error:', e);
        }
    },
    
    async getStats() {
        if (!db) return null;
        
        try {
            const users = await db.collection('users').count().get();
            const withdrawals = await db.collection('withdrawals').where('status', '==', 'pending').count().get();
            const totalEarned = await db.collection('users').get();
            
            let total = 0;
            totalEarned.forEach(doc => {
                total += doc.data().totalEarned || 0;
            });
            
            return {
                totalUsers: users.data().count,
                pendingWithdrawals: withdrawals.data().count,
                totalEarned: total
            };
        } catch (e) {
            console.error('Stats error:', e);
            return null;
        }
    }
};

// ============================================
// [SECTION 18] - UI MANAGER (محدث)
// ============================================

const UI = {
    elements: {},
    
    init() {
        this.cacheElements();
        this.setupEventListeners();
        this.initLanguage();
    },
    
    cacheElements() {
        const ids = [
            'user-name', 'header-balance', 'wallet-balance', 'wallet-balance-usd',
            'mining-progress', 'mining-timer', 'claim-btn', 'current-rate',
            'active-miner', 'next-reward', 'hash-rate',
            'referral-count', 'referral-earnings', 'referral-link',
            'withdraw-available', 'achievements-grid', 'machines-grid',
            'machines-showcase', 'tree-branches', 'loading-progress-bar',
            'connected-wallet-address', 'connected-wallet-balance'
        ];
        
        ids.forEach(id => {
            this.elements[id] = document.getElementById(id);
        });
    },
    
    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const page = item.dataset.page;
                this.switchPage(page);
            });
        });
        
        // Market filters
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.filterMachines(e.target.dataset.filter);
            });
        });
        
        // Claim button
        if (this.elements['claim-btn']) {
            this.elements['claim-btn'].addEventListener('click', () => MiningManager.claim());
        }
        
        // Withdraw button
        document.getElementById('withdraw-btn')?.addEventListener('click', () => WithdrawManager.openModal());
        
        // Submit withdraw
        document.getElementById('submit-withdraw-btn')?.addEventListener('click', () => WithdrawManager.request());
        
        // Confirm payment
        document.getElementById('confirm-payment-btn')?.addEventListener('click', () => PaymentManager.confirmPayment());
        
        // Copy referral
        document.getElementById('copy-ref-link')?.addEventListener('click', () => ReferralManager.copyLink());
        
        // Language toggle
        document.getElementById('language-toggle')?.addEventListener('click', () => this.toggleLanguage());
        
        // Admin
        document.getElementById('admin-add-balance')?.addEventListener('click', () => Admin.addBalance());
        document.getElementById('admin-search-btn')?.addEventListener('click', () => Admin.searchUser());
        
        // Admin tabs
        document.querySelectorAll('.admin-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
                
                tab.classList.add('active');
                document.getElementById(`admin-${tab.dataset.adminTab}-tab`).classList.add('active');
            });
        });
        
        // Connect wallet button in modal
        const connectBtn = document.getElementById('connect-wallet-modal');
        if (connectBtn) {
            connectBtn.addEventListener('click', () => TonManager.connect());
        }
    },
    
    initLanguage() {
        const savedLang = localStorage.getItem('language') || 'en';
        if (savedLang === 'ar') {
            document.documentElement.dir = 'rtl';
            document.getElementById('language-toggle').innerHTML = '<i class="fas fa-globe"></i>';
        }
    },
    
    switchPage(pageId) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        
        document.getElementById(pageId).classList.add('active');
        document.querySelector(`[data-page="${pageId}"]`).classList.add('active');
        
        // Load page-specific data
        if (pageId === 'market-page') this.renderMarket();
        if (pageId === 'referral-page') ReferralManager.loadTree();
        if (pageId === 'wallet-page') TonManager.updateUI(!!tonWallet);
    },
    
    updateAll() {
        this.updateBalance();
        this.updateUserInfo();
        this.renderMachines();
        this.updateReferralStats();
        Achievements.render();
    },
    
    updateBalance() {
        if (this.elements['header-balance']) {
            this.elements['header-balance'].textContent = Utils.formatTON(UserState.balance);
        }
        
        if (this.elements['wallet-balance']) {
            this.elements['wallet-balance'].textContent = Utils.formatTON(UserState.balance) + ' TON';
        }
        
        if (this.elements['wallet-balance-usd']) {
            const usd = Utils.tonToUsd(UserState.balance);
            this.elements['wallet-balance-usd'].textContent = `≈ $${usd.toFixed(2)}`;
        }
    },
    
    updateUserInfo() {
        if (this.elements['user-name']) {
            this.elements['user-name'].textContent = UserState.username;
        }
    },
    
    updateReferralStats() {
        if (this.elements['referral-count']) {
            this.elements['referral-count'].textContent = UserState.referrals?.length || 0;
        }
        
        if (this.elements['referral-earnings']) {
            this.elements['referral-earnings'].textContent = Utils.formatTON(UserState.refEarnings || 0);
        }
        
        if (this.elements['referral-link']) {
            this.elements['referral-link'].value = ReferralManager.getLink();
        }
    },
    
    renderMachines() {
        const grid = this.elements['machines-grid'];
        if (!grid) return;
        
        grid.innerHTML = '';
        
        MACHINES.slice(0, 3).forEach(machine => {
            const isActive = UserState.activeMachine === machine.id;
            const isExpired = machine.id !== 'm1' && UserState.machineExpiry < Date.now();
            
            grid.innerHTML += `
                <div class="machine-card ${isActive ? 'active' : ''} ${isExpired ? 'expired' : ''}" 
                     onclick="UI.selectMachine('${machine.id}')">
                    <div class="machine-glow" style="background: radial-gradient(circle at 50% 0%, ${machine.color}20, transparent);"></div>
                    ${isActive ? '<div class="machine-badge">ACTIVE</div>' : ''}
                    <div class="machine-header">
                        <img src="${machine.image}" alt="${machine.name}" class="machine-icon-img">
                        <div class="machine-name">${machine.name}</div>
                    </div>
                    <div class="machine-price ${machine.price === 0 ? 'free' : ''}">
                        ${machine.price === 0 ? 'FREE' : machine.price + ' TON'}
                    </div>
                    <div class="machine-stats">
                        <span><i class="fas fa-bolt"></i> ${machine.yield} TON</span>
                        <span><i class="fas fa-clock"></i> ${machine.cycleText}</span>
                    </div>
                </div>
            `;
        });
    },
    
    renderMarket() {
        const showcase = this.elements['machines-showcase'];
        if (!showcase) return;
        
        showcase.innerHTML = '';
        
        MACHINES.forEach(machine => {
            const isActive = UserState.activeMachine === machine.id;
            const meetsReqs = MiningManager.checkRequirements(machine);
            
            showcase.innerHTML += `
                <div class="showcase-card ${!meetsReqs ? 'locked' : ''}">
                    <img src="${machine.imageLarge || machine.image}" alt="${machine.name}" class="showcase-image">
                    <div class="showcase-content">
                        <h3>${machine.name}</h3>
                        <p>${machine.description}</p>
                        <div class="showcase-specs">
                            <span class="spec"><i class="fas fa-microchip"></i> ${machine.hashrate}</span>
                            <span class="spec"><i class="fas fa-bolt"></i> ${machine.yield} TON/${machine.cycleText}</span>
                            <span class="spec"><i class="fas fa-clock"></i> ${machine.durationText}</span>
                        </div>
                        ${!meetsReqs ? `
                            <div class="requirements-warning">
                                <i class="fas fa-lock"></i>
                                Requirements not met
                            </div>
                        ` : ''}
                        <div class="showcase-footer">
                            <div class="showcase-price">
                                ${machine.price} TON
                                <small>≈ $${(machine.price * 1.32).toFixed(2)}</small>
                            </div>
                            <button class="rent-button" onclick="UI.selectMachine('${machine.id}')" 
                                    ${!meetsReqs ? 'disabled' : ''}>
                                <i class="fas fa-bolt"></i>
                                ${isActive ? 'ACTIVE' : 'Rent Now'}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
    },
    
    filterMachines(filter) {
        const cards = document.querySelectorAll('.showcase-card');
        cards.forEach(card => {
            const title = card.querySelector('h3')?.textContent;
            const machine = MACHINES.find(m => m.name === title);
            if (filter === 'all' || machine?.filter === filter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    },
    
    selectMachine(machineId) {
        const machine = MACHINES.find(m => m.id === machineId);
        if (!machine) return;
        
        if (machine.price === 0) {
            MiningManager.activateMachine(machineId);
        } else {
            PaymentManager.openModal(machine);
        }
    },
    
    toggleLanguage() {
        const html = document.documentElement;
        const btn = document.getElementById('language-toggle');
        
        if (html.dir === 'rtl') {
            html.dir = 'ltr';
            btn.innerHTML = '<i class="fas fa-globe"></i>';
            UserState.language = 'en';
        } else {
            html.dir = 'rtl';
            btn.innerHTML = '<i class="fas fa-globe"></i>';
            UserState.language = 'ar';
        }
        
        localStorage.setItem('language', UserState.language);
        Notify.success('Language changed');
        this.updateAll();
    },
    
    updateLoading(progress) {
        const bar = this.elements['loading-progress-bar'];
        if (bar) bar.style.width = progress + '%';
    },
    
    hideLoading() {
        const screen = document.querySelector('.loading-screen');
        if (screen) {
            screen.style.opacity = '0';
            setTimeout(() => {
                screen.style.display = 'none';
                document.getElementById('app').style.display = 'flex';
            }, 500);
        }
    },
    
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            
            // Stop any timers
            if (modalId === 'payment-modal') PaymentManager.stopMonitoring();
            
            // Clear form inputs
            const inputs = modal.querySelectorAll('input');
            inputs.forEach(input => input.value = '');
        }
    },
    
    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            
            // Update data if needed
            if (modalId === 'withdraw-modal' && WithdrawManager) {
                document.getElementById('withdraw-available').textContent = 
                    Utils.formatTON(UserState.balance) + ' TON';
            }
        }
    }
};

// ============================================
// [SECTION 19] - AUTHENTICATION MANAGER
// ============================================

const Auth = {
    async init() {
        UI.updateLoading(10);
        
        await this.initTelegram();
        UI.updateLoading(30);
        
        await this.initUser();
        UI.updateLoading(50);
        
        await this.loadFromFirebase();
        UI.updateLoading(70);
        
        await this.initTon();
        UI.updateLoading(85);
        
        this.finalize();
        UI.updateLoading(100);
    },
    
    initTelegram() {
        if (tgUser) {
            UserState.uid = tgUser.id.toString();
            UserState.username = tgUser.username ? `@${tgUser.username}` : tgUser.first_name;
            UserState.firstName = tgUser.first_name;
            UserState.lastName = tgUser.last_name || '';
            UserState.photoUrl = tgUser.photo_url || '';
            
            // Check for referral
            const startParam = tg?.initDataUnsafe?.start_param;
            if (startParam && startParam !== UserState.uid) {
                UserState.referredBy = startParam;
            }
        } else {
            // Fallback for testing
            UserState.uid = 'test_' + Date.now();
            UserState.username = 'TestUser';
        }
        
        // Generate referral code
        UserState.referralCode = Utils.generateReferralCode(UserState.uid);
    },
    
    initUser() {
        // Load from cache
        Cache.loadUser();
        
        // Check if admin
        UserState.isAdmin = UserState.uid === CONFIG.TON.ADMIN_ID;
    },
    
    async loadFromFirebase() {
        if (!db || !UserState.uid) return;
        
        try {
            const doc = await db.collection('users').doc(UserState.uid).get();
            
            if (doc.exists) {
                const data = doc.data();
                
                // Merge Firebase data with local state
                Object.assign(UserState, {
                    balance: data.balance ?? UserState.balance,
                    totalEarned: data.totalEarned ?? UserState.totalEarned,
                    referrals: data.referrals ?? UserState.referrals,
                    refEarnings: data.refEarnings ?? UserState.refEarnings,
                    activeMachine: data.activeMachine ?? UserState.activeMachine,
                    machineExpiry: data.machineExpiry ?? UserState.machineExpiry,
                    lastClaim: data.lastClaim ?? UserState.lastClaim,
                    claims: data.claims ?? UserState.claims,
                    streak: data.streak ?? UserState.streak,
                    longestStreak: data.longestStreak ?? UserState.longestStreak,
                    lastClaimDate: data.lastClaimDate ?? UserState.lastClaimDate,
                    upgrades: data.upgrades ?? UserState.upgrades,
                    achievements: data.achievements ?? UserState.achievements,
                    totalWithdrawn: data.totalWithdrawn ?? UserState.totalWithdrawn
                });
            } else {
                // Create new user in Firebase
                await db.collection('users').doc(UserState.uid).set({
                    uid: UserState.uid,
                    username: UserState.username,
                    firstName: UserState.firstName,
                    lastName: UserState.lastName,
                    photoUrl: UserState.photoUrl,
                    balance: 0,
                    totalEarned: 0,
                    totalWithdrawn: 0,
                    referrals: [],
                    refEarnings: 0,
                    referralCode: UserState.referralCode,
                    referredBy: UserState.referredBy,
                    activeMachine: 'm1',
                    machineExpiry: Infinity,
                    lastClaim: Date.now(),
                    claims: 0,
                    streak: 0,
                    longestStreak: 0,
                    lastClaimDate: new Date().toDateString(),
                    upgrades: 0,
                    achievements: [],
                    transactions: [],
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            }
        } catch (e) {
            console.error('Firebase load error:', e);
        }
        
        // Process referral if any
        if (UserState.referredBy && !UserState.referrals?.includes(UserState.referredBy)) {
            await ReferralManager.processReferral(UserState.referredBy);
        }
    },
    
    async initTon() {
        await TonManager.init();
    },
    
    finalize() {
        UserState.isInitialized = true;
        Cache.saveUser();
        
        // Start mining timer
        MiningManager.start();
        
        // Initialize admin system
        Admin.init();
        
        // Initialize UI
        UI.init();
        UI.updateAll();
        UI.renderMarket();
        
        // Hide loading
        setTimeout(() => UI.hideLoading(), 500);
        
        console.log('✅ App initialized successfully', {
            user: UserState.uid,
            balance: UserState.balance,
            machine: UserState.activeMachine,
            isAdmin: UserState.isAdmin
        });
        
        // Welcome message
        setTimeout(() => {
            Notify.success(`Welcome to TON Mining PRO, ${UserState.firstName}!`);
        }, 1000);
    },
    
    async syncWithFirebase() {
        if (!db || !UserState.uid) return;
        
        try {
            await db.collection('users').doc(UserState.uid).set({
                balance: UserState.balance,
                totalEarned: UserState.totalEarned,
                totalWithdrawn: UserState.totalWithdrawn,
                lastSync: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
        } catch (e) {
            console.error('Sync error:', e);
        }
    }
};

// ============================================
// [SECTION 20] - REAL-TIME UPDATES
// ============================================

const Realtime = {
    listeners: [],
    
    init() {
        if (!db || !UserState.uid) return;
        
        // Listen for user updates
        const userUnsub = db.collection('users').doc(UserState.uid)
            .onSnapshot((doc) => {
                if (doc.exists && !doc.metadata.hasPendingWrites) {
                    const data = doc.data();
                    
                    // Only update if newer
                    if (data.lastSync?.toDate?.()?.getTime() > UserState.lastSaveTime) {
                        Object.assign(UserState, {
                            balance: data.balance,
                            totalEarned: data.totalEarned,
                            totalWithdrawn: data.totalWithdrawn
                        });
                        UI.updateAll();
                    }
                }
            });
        
        this.listeners.push(userUnsub);
        
        // Listen for withdrawal updates
        const withdrawalUnsub = db.collection('withdrawals')
            .where('userId', '==', UserState.uid)
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === 'modified') {
                        const data = change.doc.data();
                        this.handleWithdrawalUpdate(data);
                    }
                });
            });
        
        this.listeners.push(withdrawalUnsub);
        
        console.log('👂 Real-time listeners initialized');
    },
    
    handleWithdrawalUpdate(data) {
        const index = UserState.pendingWithdrawals.findIndex(w => w.id === data.id);
        
        if (data.status === 'approved' && index !== -1) {
            UserState.pendingWithdrawals.splice(index, 1);
            UserState.completedWithdrawals.push(data);
            Notify.success(`✅ Withdrawal of ${data.amount} TON approved!`);
            UI.updateAll();
        }
        
        if (data.status === 'rejected' && index !== -1) {
            UserState.pendingWithdrawals.splice(index, 1);
            UserState.balance += data.amount;
            UserState.totalWithdrawn -= data.amount;
            Notify.error(`❌ Withdrawal of ${data.amount} TON rejected`);
            UI.updateAll();
        }
    },
    
    stop() {
        this.listeners.forEach(unsub => unsub());
        this.listeners = [];
        console.log('👋 Real-time listeners stopped');
    }
};

// ============================================
// [SECTION 21] - FLOATING NOTIFICATIONS
// ============================================

const FloatingNotifications = {
    messages: [
        "🔥 User just mined 0.35 TON",
        "💎 New user joined with referral",
        "⚡ Turbo v3 rented by @crypto_whale",
        "💰 Withdrawal of 5 TON approved",
        "🏆 Achievement unlocked: 7-Day Streak",
        "🚀 1000th user joined TON Mining!",
        "💫 Referral bonus claimed: 0.1 TON",
        "⛏️ Mining reward claimed: 0.2 TON",
        "🎉 500 withdrawals processed today",
        "💎 Legendary machine activated!"
    ],
    
    timer: null,
    isActive: false,
    
    start() {
        if (this.isActive) return;
        this.isActive = true;
        this.showNext();
    },
    
    stop() {
        this.isActive = false;
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    },
    
    showNext() {
        if (!this.isActive) return;
        
        const bar = document.getElementById('floating-notification');
        if (!bar) return;
        
        const randomMsg = this.messages[Math.floor(Math.random() * this.messages.length)];
        bar.innerHTML = `<span>${randomMsg}</span>`;
        bar.classList.add('show');
        
        this.timer = setTimeout(() => {
            bar.classList.remove('show');
            setTimeout(() => this.showNext(), 1000);
        }, 4000);
    }
};

// ============================================
// [SECTION 22] - GLOBAL EXPORTS (محدث - جميع الدوال مصدرة)
// ============================================

// Core Managers
window.Mining = MiningManager;
window.Payment = PaymentManager;
window.Withdraw = WithdrawManager;
window.Referral = ReferralManager;
window.Admin = Admin;
window.UI = UI;
window.Auth = Auth;
window.Ton = TonManager;
window.Achievements = Achievements;
window.Realtime = Realtime;
window.FloatingNotifications = FloatingNotifications;

// Utilities
window.Utils = Utils;
window.Notify = Notify;
window.Effects = Effects;
window.Cache = Cache;

// Modal Controls
window.closeModal = UI.closeModal.bind(UI);
window.openModal = UI.openModal.bind(UI);
window.openWithdrawModal = WithdrawManager.openModal.bind(WithdrawManager);
window.openPaymentModal = PaymentManager.openModal.bind(PaymentManager);
window.copyReferralLink = ReferralManager.copyLink.bind(ReferralManager);
window.connectWallet = TonManager.connect.bind(TonManager);
window.disconnectWallet = TonManager.disconnect.bind(TonManager);

// Machine Selection
window.selectMachine = UI.selectMachine.bind(UI);
window.rentMachine = (machineId) => {
    const machine = MACHINES.find(m => m.id === machineId);
    if (machine) PaymentManager.openModal(machine);
};

// Admin Functions (متاحة فقط للمشرف)
window.approveWithdrawal = Admin.approve.bind(Admin);
window.rejectWithdrawal = Admin.reject.bind(Admin);
window.loadWithdrawals = Admin.loadWithdrawals.bind(Admin);
window.addBalance = Admin.addBalance.bind(Admin);
window.searchUser = Admin.searchUser.bind(Admin);

// Mining Functions
window.claimReward = MiningManager.claim.bind(MiningManager);
window.activateMachine = MiningManager.activateMachine.bind(MiningManager);

// Language
window.toggleLanguage = UI.toggleLanguage.bind(UI);

// Page Navigation
window.switchPage = UI.switchPage.bind(UI);
window.goToMining = () => UI.switchPage('mining-page');
window.goToMarket = () => UI.switchPage('market-page');
window.goToWallet = () => UI.switchPage('wallet-page');
window.goToReferral = () => UI.switchPage('referral-page');

// Filter Functions
window.filterMachines = UI.filterMachines.bind(UI);

// Achievement Check
window.checkAchievements = Achievements.check.bind(Achievements);

// Debug Functions (للتطوير فقط)
window.getUserState = () => UserState;
window.getConfig = () => CONFIG;
window.resetCache = () => {
    Cache.remove(Cache.getUserKey());
    location.reload();
};
window.clearAllCache = () => {
    localStorage.clear();
    location.reload();
};
window.testNotification = () => {
    Notify.success('Test notification');
};

// ============================================
// [SECTION 23] - INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log(`🚀 ${CONFIG.APP.NAME} v${CONFIG.APP.VERSION} starting...`);
    console.log(`👑 Admin ID: ${CONFIG.TON.ADMIN_ID}`);
    Auth.init();
    
    // Start floating notifications on mining page
    setTimeout(() => {
        if (document.getElementById('mining-page')?.classList.contains('active')) {
            FloatingNotifications.start();
        }
    }, 2000);
});

// Auto-save every minute
setInterval(() => {
    if (UserState.isInitialized) {
        Cache.saveUser();
    }
}, 60000);

// Auto-sync with Firebase every 5 minutes
setInterval(() => {
    if (UserState.isInitialized && db) {
        Auth.syncWithFirebase();
    }
}, 300000);

// Handle page visibility
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        MiningManager.stop();
        FloatingNotifications.stop();
    } else {
        MiningManager.start();
        if (document.getElementById('mining-page')?.classList.contains('active')) {
            FloatingNotifications.start();
        }
    }
});

// Handle beforeunload
window.addEventListener('beforeunload', () => {
    if (UserState.isInitialized) {
        Cache.saveUser();
    }
    FloatingNotifications.stop();
});

// ============================================
// END OF FILE - TON MINING PRO v6.0
// TOTAL LINES: ~6,200
// ============================================

console.log('✅ All systems ready');
console.log('📋 Admin Telegram ID:', CONFIG.TON.ADMIN_ID);
console.log('📋 Available functions:', Object.keys(window).filter(k => 
    typeof window[k] === 'function' && !k.startsWith('_') && k.length < 30
).length);
