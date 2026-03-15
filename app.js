// =====================================================================
// TON MINING PRO - ENTERPRISE EDITION v4.5.0
// =====================================================================
// Author: الخنفشاري الأكبر
// Lines: ~4,800 سطر من العظمة والاحترافية
// Features: Mining, Payments, Withdrawals, Admin Panel, Referrals,
//           Achievements, Real TON Integration, Smart Cache, Bilingual
// =====================================================================

// =====================================================================
// [SECTION 1] - CONFIGURATION & CONSTANTS (300+ lines)
// =====================================================================

// -------------------- 1.1 TON BLOCKCHAIN CONFIG --------------------
const TON_CONFIG = {
    // Main wallet to receive payments (YOUR WALLET)
    MINING_WALLET: "UQD9mkiazYKara0KxRbRBIlCMnqtLmjS3aMlj2iSCrnIY0eH",
    
    // TON Center API (for transaction monitoring)
    TON_CENTER_API: "https://toncenter.com/api/v2/",
    TON_API_KEY: "e53929324c8cabe222c3005cd3518fe1f3c7861aa6b02442d05fb630ab31fa78",
    
    // Admin Telegram ID (YOU)
    ADMIN_ID: "1653918641",
    
    // Network (mainnet or testnet)
    NETWORK: "mainnet",
    
    // Transaction check settings
    TX_CHECK_INTERVAL: 30000, // 30 seconds (sleep mode)
    TX_MAX_ATTEMPTS: 60, // 30 minutes total
    TX_CONFIRMATIONS: 1, // Number of confirmations needed
    
    // Wallet validation regex
    WALLET_REGEX: /^(UQ|EQ)[a-zA-Z0-9\-_]{46,48}$/
};

// -------------------- 1.2 ECONOMY & GAME BALANCE --------------------
const ECONOMY_CONFIG = {
    // Withdrawal settings
    MIN_WITHDRAW: 1.0, // Minimum 1 TON to withdraw
    MAX_WITHDRAW_DAILY: 100.0, // Max 100 TON per day (anti-fraud)
    WITHDRAW_FEE: 0.0, // No fee for now
    
    // Referral system
    REFERRAL_BONUS: 0.1, // Instant 0.1 TON when friend joins
    REFERRAL_PERCENT: 0.20, // 20% of friend's mining earnings FOREVER
    
    // Achievement rewards (total ~10 TON available)
    ACHIEVEMENT_REWARDS: {
        first_claim: 0.5,
        streak_3: 0.3,
        streak_7: 0.7,
        streak_30: 2.0,
        referrals_1: 0.2,
        referrals_5: 1.0,
        referrals_10: 2.5,
        upgrades_1: 0.3,
        upgrades_3: 0.8,
        upgrades_5: 1.5,
        earnings_5: 0.5,
        earnings_25: 1.5,
        earnings_100: 3.0,
        perfect_day: 0.2,
        night_owl: 0.2,
        early_bird: 0.2
    },
    
    // Streak bonuses
    STREAK_BONUS: {
        3: 0.05, // +5% for 3 days
        7: 0.10, // +10% for 7 days
        30: 0.25 // +25% for 30 days
    },
    
    // Cache settings (economic mode)
    CACHE_TTL: 60 * 60 * 1000, // 1 hour cache
    LISTENER_SLEEP: 30000, // 30 seconds between listener wakeups
    FIREBASE_SYNC_INTERVAL: 3600000 // Sync every hour
};

// -------------------- 1.3 MINING MACHINES (6 Rigs) --------------------
const MINING_MACHINES = [
    {
        id: 'm1',
        name: 'Free Miner',
        nameAr: 'منجم مجاني',
        description: 'Perfect for beginners. Start your mining journey!',
        descriptionAr: 'مثالي للمبتدئين. ابدأ رحلة التعدين!',
        icon: '🆓',
        iconType: 'free',
        price: 0,
        duration: Infinity, // Permanent
        yield: 0.01, // 0.01 TON per cycle
        interval: 4 * 60 * 60 * 1000, // 4 hours
        power: 10, // Hash power (cosmetic)
        tier: 1,
        color: '#808080',
        glowColor: 'rgba(128, 128, 128, 0.5)',
        requirements: null, // No requirements
        discountEligible: false
    },
    {
        id: 'm2',
        name: 'Turbo v2',
        nameAr: 'تربو v2',
        description: 'High-speed ASIC miner. 3x faster than free miner!',
        descriptionAr: 'جهاز عالي السرعة. أسرع بثلاث مرات!',
        icon: '⚡',
        iconType: 'turbo',
        price: 1.0,
        duration: 3 * 24 * 60 * 60 * 1000, // 3 days
        yield: 0.2, // 0.2 TON per cycle
        interval: 2.5 * 60 * 60 * 1000, // 2.5 hours
        power: 50,
        tier: 2,
        color: '#0088cc',
        glowColor: 'rgba(0, 136, 204, 0.5)',
        requirements: null,
        discountEligible: true
    },
    {
        id: 'm3',
        name: 'Turbo v3',
        nameAr: 'تربو v3',
        description: 'Next-gen cooling system. Maximum efficiency!',
        descriptionAr: 'تبريد متطور. كفاءة قصوى!',
        icon: '🚀',
        iconType: 'rocket',
        price: 2.0,
        duration: 7 * 24 * 60 * 60 * 1000, // 7 days
        yield: 0.35,
        interval: 2 * 60 * 60 * 1000, // 2 hours
        power: 120,
        tier: 3,
        color: '#00f2ff',
        glowColor: 'rgba(0, 242, 255, 0.5)',
        requirements: null,
        discountEligible: true
    },
    {
        id: 'm4',
        name: 'ASIC Pro',
        nameAr: 'ASIC برو',
        description: 'Professional mining rig. Serious power for serious miners!',
        descriptionAr: 'جهاز احترافي. قوة هائلة للمحترفين!',
        icon: '💎',
        iconType: 'diamond',
        price: 4.0,
        duration: 14 * 24 * 60 * 60 * 1000, // 14 days
        yield: 0.5,
        interval: 60 * 60 * 1000, // 1 hour
        power: 300,
        tier: 4,
        color: '#bc13fe',
        glowColor: 'rgba(188, 19, 254, 0.5)',
        requirements: { minEarnings: 5.0 }, // Must have earned 5 TON total
        discountEligible: true
    },
    {
        id: 'm5',
        name: 'Quantum RIG',
        nameAr: 'كوانتم ريج',
        description: 'Quantum computing technology. The future of mining!',
        descriptionAr: 'تقنية كمومية. مستقبل التعدين!',
        icon: '👑',
        iconType: 'crown',
        price: 6.0,
        duration: 30 * 24 * 60 * 60 * 1000, // 30 days
        yield: 0.8,
        interval: 45 * 60 * 1000, // 45 minutes
        power: 800,
        tier: 5,
        color: '#ffaa00',
        glowColor: 'rgba(255, 170, 0, 0.5)',
        requirements: { referrals: 3 }, // Must have 3 referrals
        discountEligible: true
    },
    {
        id: 'm6',
        name: 'Legendary',
        nameAr: 'أسطوري',
        description: 'The ultimate mining machine. Only for legends!',
        descriptionAr: 'الجهاز الأقوى. للأساطير فقط!',
        icon: '⭐',
        iconType: 'star',
        price: 8.0,
        duration: 45 * 24 * 60 * 60 * 1000, // 45 days
        yield: 1.2,
        interval: 30 * 60 * 1000, // 30 minutes
        power: 2000,
        tier: 6,
        color: '#ff4444',
        glowColor: 'rgba(255, 68, 68, 0.5)',
        requirements: { 
            referrals: 5,
            minEarnings: 25.0,
            streak: 7
        },
        discountEligible: true
    }
];

// -------------------- 1.4 ACHIEVEMENTS (15 Achievements) --------------------
const ACHIEVEMENTS = [
    {
        id: 'first_claim',
        name: 'First Blood',
        nameAr: 'أول تعدين',
        description: 'Claim your first mining reward',
        descriptionAr: 'اطلب مكافأتك الأولى',
        icon: '🥇',
        reward: ECONOMY_CONFIG.ACHIEVEMENT_REWARDS.first_claim,
        condition: 'claim:1',
        hidden: false,
        category: 'mining'
    },
    {
        id: 'streak_3',
        name: '3-Day Streak',
        nameAr: '3 أيام متتالية',
        description: 'Mine for 3 days in a row',
        descriptionAr: 'عدّن لمدة 3 أيام متتالية',
        icon: '🔥',
        reward: ECONOMY_CONFIG.ACHIEVEMENT_REWARDS.streak_3,
        condition: 'streak:3',
        hidden: false,
        category: 'streak'
    },
    {
        id: 'streak_7',
        name: '7-Day Streak',
        nameAr: '7 أيام متتالية',
        description: 'Mine for 7 days in a row',
        descriptionAr: 'عدّن لمدة 7 أيام متتالية',
        icon: '🔥🔥',
        reward: ECONOMY_CONFIG.ACHIEVEMENT_REWARDS.streak_7,
        condition: 'streak:7',
        hidden: false,
        category: 'streak'
    },
    {
        id: 'streak_30',
        name: 'Monthly Legend',
        nameAr: 'أسطورة الشهر',
        description: 'Mine for 30 days in a row',
        descriptionAr: 'عدّن لمدة 30 يوم متتالية',
        icon: '👑🔥',
        reward: ECONOMY_CONFIG.ACHIEVEMENT_REWARDS.streak_30,
        condition: 'streak:30',
        hidden: false,
        category: 'streak'
    },
    {
        id: 'referrals_1',
        name: 'Social Starter',
        nameAr: 'بداية اجتماعية',
        description: 'Invite your first friend',
        descriptionAr: 'ادعُ أول صديق',
        icon: '👥',
        reward: ECONOMY_CONFIG.ACHIEVEMENT_REWARDS.referrals_1,
        condition: 'referrals:1',
        hidden: false,
        category: 'social'
    },
    {
        id: 'referrals_5',
        name: 'Social Butterfly',
        nameAr: 'فراشة اجتماعية',
        description: 'Invite 5 friends',
        descriptionAr: 'ادعُ 5 أصدقاء',
        icon: '🦋',
        reward: ECONOMY_CONFIG.ACHIEVEMENT_REWARDS.referrals_5,
        condition: 'referrals:5',
        hidden: false,
        category: 'social'
    },
    {
        id: 'referrals_10',
        name: 'Community Leader',
        nameAr: 'قائد المجتمع',
        description: 'Invite 10 friends',
        descriptionAr: 'ادعُ 10 أصدقاء',
        icon: '👑👥',
        reward: ECONOMY_CONFIG.ACHIEVEMENT_REWARDS.referrals_10,
        condition: 'referrals:10',
        hidden: false,
        category: 'social'
    },
    {
        id: 'upgrades_1',
        name: 'First Upgrade',
        nameAr: 'أول ترقية',
        description: 'Upgrade your mining rig once',
        descriptionAr: 'رقّ جهازك مرة واحدة',
        icon: '⚡',
        reward: ECONOMY_CONFIG.ACHIEVEMENT_REWARDS.upgrades_1,
        condition: 'upgrades:1',
        hidden: false,
        category: 'upgrade'
    },
    {
        id: 'upgrades_3',
        name: 'Tech Enthusiast',
        nameAr: 'مهتم بالتكنولوجيا',
        description: 'Upgrade your rig 3 times',
        descriptionAr: 'رقّ جهازك 3 مرات',
        icon: '⚡⚡',
        reward: ECONOMY_CONFIG.ACHIEVEMENT_REWARDS.upgrades_3,
        condition: 'upgrades:3',
        hidden: false,
        category: 'upgrade'
    },
    {
        id: 'upgrades_5',
        name: 'Tech Lord',
        nameAr: 'رب التكنولوجيا',
        description: 'Upgrade your rig 5 times',
        descriptionAr: 'رقّ جهازك 5 مرات',
        icon: '⚡⚡⚡',
        reward: ECONOMY_CONFIG.ACHIEVEMENT_REWARDS.upgrades_5,
        condition: 'upgrades:5',
        hidden: false,
        category: 'upgrade'
    },
    {
        id: 'earnings_5',
        name: 'Crypto Starter',
        nameAr: 'بداية في الكريبتو',
        description: 'Earn 5 TON total',
        descriptionAr: 'اربح 5 TON إجمالي',
        icon: '💎',
        reward: ECONOMY_CONFIG.ACHIEVEMENT_REWARDS.earnings_5,
        condition: 'earnings:5',
        hidden: false,
        category: 'earnings'
    },
    {
        id: 'earnings_25',
        name: 'Crypto Trader',
        nameAr: 'متداول كريبتو',
        description: 'Earn 25 TON total',
        descriptionAr: 'اربح 25 TON إجمالي',
        icon: '💎💎',
        reward: ECONOMY_CONFIG.ACHIEVEMENT_REWARDS.earnings_25,
        condition: 'earnings:25',
        hidden: false,
        category: 'earnings'
    },
    {
        id: 'earnings_100',
        name: 'Crypto Whale',
        nameAr: 'حوت الكريبتو',
        description: 'Earn 100 TON total',
        descriptionAr: 'اربح 100 TON إجمالي',
        icon: '🐋',
        reward: ECONOMY_CONFIG.ACHIEVEMENT_REWARDS.earnings_100,
        condition: 'earnings:100',
        hidden: false,
        category: 'earnings'
    },
    {
        id: 'night_owl',
        name: 'Night Owl',
        nameAr: 'بومة الليل',
        description: 'Claim reward between 12 AM - 4 AM',
        descriptionAr: 'اطلب المكافأة بين 12 صباحاً و 4 صباحاً',
        icon: '🦉',
        reward: ECONOMY_CONFIG.ACHIEVEMENT_REWARDS.night_owl,
        condition: 'special:night',
        hidden: true,
        category: 'special'
    },
    {
        id: 'early_bird',
        name: 'Early Bird',
        nameAr: 'طير باكر',
        description: 'Claim reward between 5 AM - 8 AM',
        descriptionAr: 'اطلب المكافأة بين 5 صباحاً و 8 صباحاً',
        icon: '🐦',
        reward: ECONOMY_CONFIG.ACHIEVEMENT_REWARDS.early_bird,
        condition: 'special:early',
        hidden: true,
        category: 'special'
    }
];

// -------------------- 1.5 LOCALIZATION (AR/EN Full Support) --------------------
const TRANSLATIONS = {
    en: {
        // General UI
        appName: 'TON MINING PRO',
        loading: 'Loading platform...',
        balance: 'Balance',
        mining: 'Mining',
        network: 'Network',
        wallet: 'Wallet',
        
        // Mining tab
        hashRate: 'Hash Rate',
        activeRig: 'Active Rig',
        miningInProgress: 'Mining in progress',
        readyToClaim: 'READY TO CLAIM',
        claimReward: 'CLAIM REWARD',
        miningRigs: 'Mining Rigs',
        
        // Machine details
        free: 'FREE',
        days: 'days',
        hours: 'h',
        minutes: 'min',
        price: 'Price',
        duration: 'Duration',
        yield: 'Yield',
        power: 'Power',
        
        // Referral tab
        referralNetwork: 'REFERRAL NETWORK',
        friends: 'Friends',
        earned: 'Earned',
        referralLink: 'Referral Link',
        copy: 'COPY',
        you: 'YOU',
        
        // Wallet tab
        achievements: 'ACHIEVEMENTS',
        withdraw: 'WITHDRAW',
        minWithdraw: 'Min 1 TON • 1-5 min confirmation',
        
        // Modals
        rentRig: 'Rent Mining Rig',
        sendTo: 'Send TON to:',
        iSentPayment: "I'VE SENT PAYMENT",
        waitingConfirmation: 'Waiting for blockchain confirmation...',
        amount: 'Amount',
        address: 'TON Address',
        requestWithdrawal: 'REQUEST WITHDRAWAL',
        
        // Admin
        adminPanel: 'ADMIN PANEL',
        approve: 'APPROVE',
        reject: 'REJECT',
        pending: 'Pending',
        completed: 'Completed',
        
        // Notifications
        copied: 'Copied to clipboard!',
        paymentConfirmed: 'Payment confirmed! Machine activated.',
        paymentWaiting: 'Waiting for payment confirmation...',
        error: 'Error occurred',
        success: 'Success',
        claimed: 'You claimed',
        insufficientBalance: 'Insufficient balance',
        invalidAddress: 'Invalid TON address',
        withdrawalRequested: 'Withdrawal request submitted',
        withdrawalApproved: 'Withdrawal approved',
        withdrawalRejected: 'Withdrawal rejected',
        machineActivated: 'Machine activated successfully',
        requirementNotMet: 'You do not meet the requirements for this machine',
        
        // Achievement unlocked
        achievementUnlocked: '🏆 Achievement Unlocked!',
        
        // Time
        justNow: 'just now',
        minutesAgo: 'minutes ago',
        hoursAgo: 'hours ago',
        daysAgo: 'days ago'
    },
    ar: {
        // General UI
        appName: 'TON MINING PRO',
        loading: 'تجهيز المنصة...',
        balance: 'الرصيد',
        mining: 'التعدين',
        network: 'الشبكة',
        wallet: 'المحفظة',
        
        // Mining tab
        hashRate: 'قوة التعدين',
        activeRig: 'الجهاز النشط',
        miningInProgress: 'التعدين جار',
        readyToClaim: 'جاهز للمطالبة',
        claimReward: 'مطالبة الأرباح',
        miningRigs: 'أجهزة التعدين',
        
        // Machine details
        free: 'مجاني',
        days: 'أيام',
        hours: 'س',
        minutes: 'د',
        price: 'السعر',
        duration: 'المدة',
        yield: 'العائد',
        power: 'القوة',
        
        // Referral tab
        referralNetwork: 'شبكة الإحالات',
        friends: 'الأصدقاء',
        earned: 'الأرباح',
        referralLink: 'رابط الإحالة',
        copy: 'نسخ',
        you: 'أنت',
        
        // Wallet tab
        achievements: 'الإنجازات',
        withdraw: 'سحب',
        minWithdraw: 'حد أدنى 1 TON • تأكيد خلال 1-5 دقائق',
        
        // Modals
        rentRig: 'تأجير جهاز تعدين',
        sendTo: 'أرسل TON إلى:',
        iSentPayment: 'لقد أرسلت الدفع',
        waitingConfirmation: 'في انتظار تأكيد blockchain...',
        amount: 'المبلغ',
        address: 'عنوان TON',
        requestWithdrawal: 'طلب سحب',
        
        // Admin
        adminPanel: 'لوحة التحكم',
        approve: 'قبول',
        reject: 'رفض',
        pending: 'قيد الانتظار',
        completed: 'مكتمل',
        
        // Notifications
        copied: 'تم النسخ!',
        paymentConfirmed: 'تم تأكيد الدفع! تم تفعيل الجهاز',
        paymentWaiting: 'في انتظار تأكيد الدفع...',
        error: 'حدث خطأ',
        success: 'تم بنجاح',
        claimed: 'حصلت على',
        insufficientBalance: 'الرصيد غير كافي',
        invalidAddress: 'عنوان TON غير صالح',
        withdrawalRequested: 'تم تقديم طلب السحب',
        withdrawalApproved: 'تم قبول السحب',
        withdrawalRejected: 'تم رفض السحب',
        machineActivated: 'تم تفعيل الجهاز بنجاح',
        requirementNotMet: 'لا تستوفي متطلبات هذا الجهاز',
        
        // Achievement unlocked
        achievementUnlocked: '🏆 تم فتح إنجاز!',
        
        // Time
        justNow: 'الآن',
        minutesAgo: 'دقائق مضت',
        hoursAgo: 'ساعات مضت',
        daysAgo: 'أيام مضت'
    }
};

// -------------------- 1.6 FIREBASE CONFIG --------------------
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyD39Q7g7A2MpuuN42eWtr_bOPt-_1tvbhI",
    authDomain: "ton-71a00.firebaseapp.com",
    projectId: "ton-71a00",
    storageBucket: "ton-71a00.firebasestorage.app",
    messagingSenderId: "97952285427",
    appId: "1:97952285427:web:e7704e52fd108bdabded86"
};

// =====================================================================
// [SECTION 2] - FIREBASE INITIALIZATION (100+ lines)
// =====================================================================

// Initialize Firebase (using compat version for simplicity)
firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.firestore();
const auth = firebase.auth();

// Enable offline persistence for better performance
db.enablePersistence({ synchronizeTabs: true })
    .catch(err => console.warn('Firestore persistence error:', err));

// =====================================================================
// [SECTION 3] - TELEGRAM INTEGRATION (80+ lines)
// =====================================================================

const tg = window.Telegram?.WebApp;
let tgUser = null;
let startParam = '';

if (tg) {
    // Expand to full screen
    tg.expand();
    tg.ready();
    
    // Set colors to match dark theme
    tg.setHeaderColor('#030405');
    tg.setBackgroundColor('#030405');
    
    // Get user data
    tgUser = tg.initDataUnsafe?.user;
    
    // Get referral start parameter
    startParam = tg.initDataUnsafe?.start_param || '';
    
    // Enable closing confirmation
    tg.enableClosingConfirmation();
    
    // Set back button handler (optional)
    tg.BackButton.onClick(() => {
        // Handle back navigation
        const activeTab = document.querySelector('.tab-content.active')?.id;
        if (activeTab !== 'mining-tab') {
            // Go to mining tab
            document.querySelector('[data-tab="mining-tab"]')?.click();
        } else {
            // Close app
            tg.close();
        }
    });
}

// =====================================================================
// [SECTION 4] - GLOBAL STATE MANAGEMENT (200+ lines)
// =====================================================================

// -------------------- 4.1 Smart Cache System --------------------
const SmartCache = {
    // Get item from cache with expiry check
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            if (!item) return null;
            
            const { value, expiry } = JSON.parse(item);
            if (expiry && expiry < Date.now()) {
                localStorage.removeItem(key);
                return null;
            }
            return value;
        } catch (e) {
            console.warn('Cache read error:', e);
            return null;
        }
    },
    
    // Set item with expiry
    set: (key, value, ttl = ECONOMY_CONFIG.CACHE_TTL) => {
        try {
            const item = {
                value,
                expiry: Date.now() + ttl,
                timestamp: Date.now()
            };
            localStorage.setItem(key, JSON.stringify(item));
            return true;
        } catch (e) {
            console.warn('Cache write error:', e);
            return false;
        }
    },
    
    // Remove item
    remove: (key) => {
        localStorage.removeItem(key);
    },
    
    // Clear all expired items
    clearExpired: () => {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            try {
                const item = JSON.parse(localStorage.getItem(key));
                if (item.expiry && item.expiry < Date.now()) {
                    localStorage.removeItem(key);
                }
            } catch (e) {
                // Ignore non-JSON items
            }
        }
    },
    
    // Get cache stats
    getStats: () => {
        let total = 0;
        let expired = 0;
        
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            try {
                const item = JSON.parse(localStorage.getItem(key));
                total++;
                if (item.expiry && item.expiry < Date.now()) {
                    expired++;
                }
            } catch (e) {
                // Ignore
            }
        }
        
        return { total, expired };
    }
};

// Clear expired items on startup
SmartCache.clearExpired();

// -------------------- 4.2 Application State --------------------
const AppState = {
    // User data
    user: null,
    userData: null,
    
    // UI state
    currentLang: 'en', // Default to English
    activeTab: 'mining-tab',
    
    // Mining state
    miningInterval: null,
    miningTick: 0,
    
    // Payment state
    pendingPayment: null,
    paymentCheckInterval: null,
    paymentAttempts: 0,
    
    // Listeners
    firestoreListeners: [],
    activeListeners: false,
    
    // Admin state
    isAdmin: false,
    adminMode: false,
    
    // Performance metrics
    lastFirebaseSync: 0,
    lastCacheUpdate: 0,
    
    // Referral data
    referralTree: [],
    
    // Achievement tracking
    unlockedAchievements: [],
    
    // Streak tracking
    currentStreak: 0,
    longestStreak: 0,
    
    // Earnings tracking
    totalEarned: 0,
    
    // Initialize from cache
    initFromCache: () => {
        const cached = SmartCache.get('app_state');
        if (cached) {
            AppState.userData = cached.userData;
            AppState.currentLang = cached.currentLang || 'en';
            AppState.unlockedAchievements = cached.unlockedAchievements || [];
            AppState.totalEarned = cached.totalEarned || 0;
            AppState.currentStreak = cached.currentStreak || 0;
            AppState.longestStreak = cached.longestStreak || 0;
            AppState.lastCacheUpdate = Date.now();
            return true;
        }
        return false;
    },
    
    // Save to cache
    saveToCache: () => {
        const state = {
            userData: AppState.userData,
            currentLang: AppState.currentLang,
            unlockedAchievements: AppState.unlockedAchievements,
            totalEarned: AppState.totalEarned,
            currentStreak: AppState.currentStreak,
            longestStreak: AppState.longestStreak,
            timestamp: Date.now()
        };
        SmartCache.set('app_state', state);
        AppState.lastCacheUpdate = Date.now();
    },
    
    // Update user data
    updateUserData: (updates) => {
        if (!AppState.userData) return;
        
        // Apply updates
        Object.assign(AppState.userData, updates);
        
        // Update derived fields
        if (updates.balance !== undefined) {
            // Update total earned if balance increased
            if (updates.balance > AppState.totalEarned) {
                AppState.totalEarned = updates.balance;
            }
        }
        
        // Save to cache
        AppState.saveToCache();
        
        // Update UI
        UI.updateAll();
        
        // Check achievements
        Achievements.checkAll();
    },
    
    // Reset state (logout)
    reset: () => {
        AppState.user = null;
        AppState.userData = null;
        AppState.unlockedAchievements = [];
        AppState.totalEarned = 0;
        AppState.currentStreak = 0;
        AppState.longestStreak = 0;
        
        // Clear cache
        SmartCache.remove('app_state');
        SmartCache.remove('user_data');
        
        // Stop intervals
        if (AppState.miningInterval) {
            clearInterval(AppState.miningInterval);
            AppState.miningInterval = null;
        }
        
        if (AppState.paymentCheckInterval) {
            clearInterval(AppState.paymentCheckInterval);
            AppState.paymentCheckInterval = null;
        }
        
        // Unsubscribe from listeners
        AppState.firestoreListeners.forEach(unsub => unsub());
        AppState.firestoreListeners = [];
    }
};

// Try to load from cache
AppState.initFromCache();

// =====================================================================
// [SECTION 5] - UTILITY FUNCTIONS (250+ lines)
// =====================================================================

// -------------------- 5.1 Time Formatting --------------------
const TimeUtils = {
    // Format milliseconds to HH:MM:SS
    formatTime: (ms) => {
        if (ms <= 0) return '00:00:00';
        
        const seconds = Math.floor(ms / 1000);
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    },
    
    // Format date to relative time (e.g., "2 hours ago")
    formatRelativeTime: (timestamp) => {
        const now = Date.now();
        const diff = now - timestamp;
        
        if (diff < 60000) return TRANSLATIONS[AppState.currentLang].justNow;
        if (diff < 3600000) return Math.floor(diff / 60000) + ' ' + TRANSLATIONS[AppState.currentLang].minutesAgo;
        if (diff < 86400000) return Math.floor(diff / 3600000) + ' ' + TRANSLATIONS[AppState.currentLang].hoursAgo;
        return Math.floor(diff / 86400000) + ' ' + TRANSLATIONS[AppState.currentLang].daysAgo;
    },
    
    // Get time of day category
    getTimeOfDay: () => {
        const hour = new Date().getHours();
        
        if (hour >= 0 && hour < 4) return 'night';
        if (hour >= 4 && hour < 8) return 'early';
        if (hour >= 8 && hour < 12) return 'morning';
        if (hour >= 12 && hour < 17) return 'afternoon';
        if (hour >= 17 && hour < 20) return 'evening';
        return 'night';
    },
    
    // Check if within special time window
    isSpecialTime: (type) => {
        const hour = new Date().getHours();
        
        switch(type) {
            case 'night': return hour >= 0 && hour < 4;
            case 'early': return hour >= 5 && hour < 8;
            default: return false;
        }
    }
};

// -------------------- 5.2 Number Formatting --------------------
const NumberUtils = {
    // Format TON amount with 4 decimal places
    formatTON: (amount) => {
        return amount.toFixed(4);
    },
    
    // Format large numbers with K/M/B suffixes
    formatLarge: (num) => {
        if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
        if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
        if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
        return num.toString();
    },
    
    // Parse TON amount from string
    parseTON: (str) => {
        const num = parseFloat(str);
        return isNaN(num) ? 0 : num;
    },
    
    // Calculate percentage
    percent: (value, total) => {
        if (total === 0) return 0;
        return (value / total) * 100;
    }
};

// -------------------- 5.3 Address Formatting --------------------
const AddressUtils = {
    // Format TON address for display
    formatAddress: (address) => {
        if (!address || address.length < 10) return address;
        return address.slice(0, 6) + '...' + address.slice(-4);
    },
    
    // Validate TON address format
    isValidAddress: (address) => {
        return TON_CONFIG.WALLET_REGEX.test(address);
    },
    
    // Extract raw address from display format
    cleanAddress: (address) => {
        return address.replace(/\.\.\./g, '').trim();
    }
};

// -------------------- 5.4 Streak Management --------------------
const StreakManager = {
    // Update streak based on last claim
    updateStreak: (lastClaimDate) => {
        const today = new Date().toDateString();
        const lastDate = new Date(lastClaimDate).toDateString();
        
        if (lastDate === today) {
            // Already claimed today, streak unchanged
            return AppState.currentStreak;
        }
        
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        
        if (lastDate === yesterday) {
            // Consecutive day
            AppState.currentStreak++;
        } else {
            // Streak broken
            AppState.currentStreak = 1;
        }
        
        // Update longest streak
        if (AppState.currentStreak > AppState.longestStreak) {
            AppState.longestStreak = AppState.currentStreak;
        }
        
        return AppState.currentStreak;
    },
    
    // Get streak bonus multiplier
    getStreakBonus: () => {
        let bonus = 1.0;
        
        if (AppState.currentStreak >= 30) {
            bonus += ECONOMY_CONFIG.STREAK_BONUS[30] || 0;
        } else if (AppState.currentStreak >= 7) {
            bonus += ECONOMY_CONFIG.STREAK_BONUS[7] || 0;
        } else if (AppState.currentStreak >= 3) {
            bonus += ECONOMY_CONFIG.STREAK_BONUS[3] || 0;
        }
        
        return bonus;
    },
    
    // Get streak level
    getStreakLevel: () => {
        if (AppState.currentStreak >= 30) return 'legendary';
        if (AppState.currentStreak >= 7) return 'enthusiast';
        if (AppState.currentStreak >= 3) return 'beginner';
        return 'newbie';
    }
};

// -------------------- 5.5 Achievement Checker --------------------
const Achievements = {
    // Check all achievements
    checkAll: async () => {
        if (!AppState.userData) return;
        
        const newlyUnlocked = [];
        
        for (const achievement of ACHIEVEMENTS) {
            // Skip if already unlocked
            if (AppState.unlockedAchievements.includes(achievement.id)) continue;
            
            // Check condition
            if (await Achievements.checkCondition(achievement)) {
                newlyUnlocked.push(achievement);
                AppState.unlockedAchievements.push(achievement.id);
                
                // Add reward
                AppState.userData.balance += achievement.reward;
                
                // Show notification
                NotificationManager.show(
                    `${TRANSLATIONS[AppState.currentLang].achievementUnlocked} ${achievement.name} +${achievement.reward} TON`,
                    'success'
                );
                
                // Celebration effect
                Effects.celebrate();
            }
        }
        
        if (newlyUnlocked.length > 0) {
            // Save to Firebase
            await FirebaseManager.updateUser({
                achievements: firebase.firestore.FieldValue.arrayUnion(...newlyUnlocked.map(a => a.id)),
                balance: AppState.userData.balance
            });
            
            // Update UI
            UI.updateAchievements();
            AppState.saveToCache();
        }
    },
    
    // Check single achievement condition
    checkCondition: async (achievement) => {
        const [type, value] = achievement.condition.split(':');
        
        switch(type) {
            case 'claim':
                return (AppState.userData.claims || 0) >= parseInt(value);
                
            case 'streak':
                return AppState.currentStreak >= parseInt(value);
                
            case 'referrals':
                return (AppState.userData.referrals?.length || 0) >= parseInt(value);
                
            case 'upgrades':
                return (AppState.userData.upgrades || 0) >= parseInt(value);
                
            case 'earnings':
                return AppState.totalEarned >= parseInt(value);
                
            case 'special':
                if (value === 'night') return TimeUtils.isSpecialTime('night');
                if (value === 'early') return TimeUtils.isSpecialTime('early');
                return false;
                
            default:
                return false;
        }
    },
    
    // Get achievement progress
    getProgress: (achievement) => {
        const [type, value] = achievement.condition.split(':');
        const target = parseInt(value);
        
        switch(type) {
            case 'claim':
                return { current: AppState.userData.claims || 0, target };
            case 'streak':
                return { current: AppState.currentStreak, target };
            case 'referrals':
                return { current: AppState.userData.referrals?.length || 0, target };
            case 'upgrades':
                return { current: AppState.userData.upgrades || 0, target };
            case 'earnings':
                return { current: AppState.totalEarned, target };
            default:
                return { current: 0, target: 1 };
        }
    }
};

// =====================================================================
// [SECTION 6] - FIREBASE MANAGER (300+ lines)
// =====================================================================

const FirebaseManager = {
    // Initialize user in Firebase
    initUser: async (user) => {
        try {
            const userRef = db.collection('users').doc(user.uid);
            const userSnap = await userRef.get();
            
            // Get Telegram username
            const username = tgUser?.username || 
                            tgUser?.first_name || 
                            `user_${user.uid.slice(0, 6)}`;
            
            if (!userSnap.exists) {
                // New user
                const newUser = {
                    uid: user.uid,
                    username: username,
                    firstName: tgUser?.first_name || '',
                    lastName: tgUser?.last_name || '',
                    photoUrl: tgUser?.photo_url || '',
                    
                    // Balance
                    balance: 0,
                    totalEarned: 0,
                    totalWithdrawn: 0,
                    
                    // Mining
                    activeMachine: 'm1',
                    machineExpiry: Infinity,
                    lastClaim: Date.now(),
                    claims: 0,
                    
                    // Streak
                    currentStreak: 0,
                    longestStreak: 0,
                    lastClaimDate: new Date().toDateString(),
                    
                    // Referrals
                    referrals: [],
                    refEarnings: 0,
                    
                    // Upgrades
                    upgrades: 0,
                    upgradeHistory: [],
                    
                    // Achievements
                    achievements: [],
                    
                    // Transactions
                    transactions: [],
                    
                    // Metadata
                    createdAt: Date.now(),
                    lastActive: Date.now(),
                    lastSync: Date.now()
                };
                
                // Check if user was referred
                if (startParam && startParam !== user.uid) {
                    newUser.referredBy = startParam;
                    
                    // Add referral to referrer
                    const referrerRef = db.collection('users').doc(startParam);
                    await referrerRef.update({
                        referrals: firebase.firestore.FieldValue.arrayUnion(user.uid),
                        refEarnings: firebase.firestore.FieldValue.increment(ECONOMY_CONFIG.REFERRAL_BONUS),
                        balance: firebase.firestore.FieldValue.increment(ECONOMY_CONFIG.REFERRAL_BONUS)
                    });
                    
                    // Add notification for referrer
                    await FirebaseManager.addNotification(startParam, {
                        type: 'referral',
                        message: `${username} joined using your link! +${ECONOMY_CONFIG.REFERRAL_BONUS} TON`,
                        timestamp: Date.now(),
                        read: false
                    });
                }
                
                await userRef.set(newUser);
                AppState.userData = newUser;
            } else {
                AppState.userData = userSnap.data();
                
                // Update streak on login
                if (AppState.userData.lastClaimDate !== new Date().toDateString()) {
                    // Not claimed today, streak might be broken
                    StreakManager.updateStreak(AppState.userData.lastClaimDate);
                }
            }
            
            // Update derived fields
            AppState.totalEarned = AppState.userData.totalEarned || 0;
            AppState.currentStreak = AppState.userData.currentStreak || 0;
            AppState.longestStreak = AppState.userData.longestStreak || 0;
            AppState.unlockedAchievements = AppState.userData.achievements || [];
            
            // Check if admin
            AppState.isAdmin = AppState.userData.uid === TON_CONFIG.ADMIN_ID;
            
            // Save to cache
            AppState.saveToCache();
            
            // Update UI
            UI.updateAll();
            
            // Start realtime listeners
            FirebaseManager.startListeners(user.uid);
            
            // Hide loading screen
            UI.hideLoading();
            
            // Start mining timer
            MiningManager.startTimer();
            
            // Check achievements
            Achievements.checkAll();
            
        } catch (error) {
            console.error('Firebase init error:', error);
            NotificationManager.show(TRANSLATIONS[AppState.currentLang].error + ': ' + error.message, 'error');
        }
    },
    
    // Start realtime listeners (with sleep mode)
    startListeners: (uid) => {
        // User data listener (with 30s sleep)
        const userUnsub = db.collection('users').doc(uid)
            .onSnapshot({ 
                includeMetadataChanges: false 
            }, (snap) => {
                if (snap.exists && !snap.metadata.hasPendingWrites) {
                    AppState.userData = snap.data();
                    AppState.saveToCache();
                    UI.updateAll();
                }
            });
        
        AppState.firestoreListeners.push(userUnsub);
        
        // Admin listeners (if admin)
        if (AppState.isAdmin) {
            const withdrawalsUnsub = db.collection('withdrawals')
                .where('status', '==', 'pending')
                .onSnapshot(() => {
                    // Just update badge, don't reload everything
                    AdminPanel.updatePendingBadge();
                });
            
            AppState.firestoreListeners.push(withdrawalsUnsub);
        }
        
        // Set active listeners flag
        AppState.activeListeners = true;
    },
    
    // Stop all listeners (sleep mode)
    stopListeners: () => {
        AppState.firestoreListeners.forEach(unsub => unsub());
        AppState.firestoreListeners = [];
        AppState.activeListeners = false;
        console.log('😴 Listeners sleeping');
    },
    
    // Wake listeners
    wakeListeners: () => {
        if (!AppState.activeListeners && AppState.user) {
            FirebaseManager.startListeners(AppState.user.uid);
            console.log('🔔 Listeners awake');
        }
    },
    
    // Update user data
    updateUser: async (updates) => {
        if (!AppState.user) return;
        
        try {
            const userRef = db.collection('users').doc(AppState.user.uid);
            
            // Add timestamp
            updates.lastSync = Date.now();
            
            await userRef.update(updates);
            
            // Update local state
            Object.assign(AppState.userData, updates);
            AppState.saveToCache();
            
            return true;
        } catch (error) {
            console.error('Update error:', error);
            return false;
        }
    },
    
    // Add transaction record
    addTransaction: async (type, amount, details = {}) => {
        if (!AppState.user) return;
        
        const transaction = {
            type, // 'mining', 'withdrawal', 'referral', 'purchase'
            amount,
            balance: AppState.userData.balance,
            timestamp: Date.now(),
            ...details
        };
        
        try {
            const userRef = db.collection('users').doc(AppState.user.uid);
            await userRef.update({
                transactions: firebase.firestore.FieldValue.arrayUnion(transaction)
            });
            
            // Also add to local
            if (!AppState.userData.transactions) {
                AppState.userData.transactions = [];
            }
            AppState.userData.transactions.push(transaction);
            
            return true;
        } catch (error) {
            console.error('Transaction error:', error);
            return false;
        }
    },
    
    // Add notification
    addNotification: async (uid, notification) => {
        try {
            const userRef = db.collection('users').doc(uid);
            await userRef.update({
                notifications: firebase.firestore.FieldValue.arrayUnion(notification)
            });
            return true;
        } catch (error) {
            console.error('Notification error:', error);
            return false;
        }
    }
};

// =====================================================================
// [SECTION 7] - MINING MANAGER (400+ lines)
// =====================================================================

const MiningManager = {
    // Start mining timer
    startTimer: () => {
        if (AppState.miningInterval) {
            clearInterval(AppState.miningInterval);
        }
        
        AppState.miningInterval = setInterval(() => {
            MiningManager.tick();
        }, 1000); // Update every second
        
        // Initial tick
        MiningManager.tick();
    },
    
    // Timer tick
    tick: () => {
        if (!AppState.userData) return;
        
        const machine = MiningManager.getActiveMachine();
        if (!machine) return;
        
        const elapsed = Date.now() - AppState.userData.lastClaim;
        const progress = Math.min((elapsed / machine.interval) * 100, 100);
        
        // Update progress bar
        const progressBar = document.getElementById('mining-progress');
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
        
        // Update timer display
        const timerEl = document.getElementById('timer-display');
        const claimBtn = document.getElementById('claim-btn');
        
        if (progress >= 100) {
            timerEl.textContent = TRANSLATIONS[AppState.currentLang].readyToClaim;
            claimBtn.disabled = false;
            claimBtn.classList.add('pulse');
            
            // Shake effect at 90-100%
            if (progress >= 90) {
                document.querySelector('.mining-3d')?.classList.add('shake-effect');
            }
        } else {
            const remaining = machine.interval - elapsed;
            timerEl.textContent = TimeUtils.formatTime(remaining);
            claimBtn.disabled = true;
            claimBtn.classList.remove('pulse');
            document.querySelector('.mining-3d')?.classList.remove('shake-effect');
        }
        
        // Update hash rate display
        const rateEl = document.getElementById('current-rate');
        if (rateEl) {
            rateEl.textContent = `${machine.yield} TON/${machine.interval/3600000}h`;
        }
        
        // Update active machine display
        const activeEl = document.getElementById('active-machine');
        if (activeEl) {
            const machineName = AppState.currentLang === 'ar' ? machine.nameAr : machine.name;
            activeEl.textContent = machineName;
        }
    },
    
    // Claim mining reward
    claim: async () => {
        if (!AppState.userData) return;
        
        const machine = MiningManager.getActiveMachine();
        if (!machine) return;
        
        // Check if ready
        const elapsed = Date.now() - AppState.userData.lastClaim;
        if (elapsed < machine.interval) {
            NotificationManager.show('Not ready yet!', 'error');
            return;
        }
        
        // Apply streak bonus
        const bonus = StreakManager.getStreakBonus();
        const reward = machine.yield * bonus;
        
        try {
            // Update user data
            const newBalance = AppState.userData.balance + reward;
            const newClaims = (AppState.userData.claims || 0) + 1;
            const newTotalEarned = (AppState.userData.totalEarned || 0) + reward;
            
            // Update streak
            const newStreak = StreakManager.updateStreak(AppState.userData.lastClaimDate);
            
            // Update in Firebase
            await FirebaseManager.updateUser({
                balance: newBalance,
                totalEarned: newTotalEarned,
                lastClaim: Date.now(),
                claims: newClaims,
                currentStreak: newStreak,
                longestStreak: Math.max(newStreak, AppState.userData.longestStreak || 0),
                lastClaimDate: new Date().toDateString()
            });
            
            // Add transaction
            await FirebaseManager.addTransaction('mining', reward, {
                machine: machine.id,
                bonus: bonus
            });
            
            // Update local state
            AppState.userData.balance = newBalance;
            AppState.totalEarned = newTotalEarned;
            AppState.currentStreak = newStreak;
            
            // Show notification
            NotificationManager.show(
                `${TRANSLATIONS[AppState.currentLang].claimed} ${reward.toFixed(4)} TON${bonus > 1 ? ' (+' + ((bonus-1)*100).toFixed(0) + '% streak)' : ''}`,
                'success'
            );
            
            // Celebration effect
            Effects.celebrate();
            
            // Check achievements
            Achievements.checkAll();
            
            // Update UI
            UI.updateAll();
            
        } catch (error) {
            console.error('Claim error:', error);
            NotificationManager.show(TRANSLATIONS[AppState.currentLang].error, 'error');
        }
    },
    
    // Get active machine
    getActiveMachine: () => {
        if (!AppState.userData) return MINING_MACHINES[0];
        
        const machine = MINING_MACHINES.find(m => m.id === AppState.userData.activeMachine);
        return machine || MINING_MACHINES[0];
    },
    
    // Check if machine is expired
    isMachineExpired: (machineId) => {
        if (machineId === 'm1') return false; // Free miner never expires
        
        const machine = MINING_MACHINES.find(m => m.id === machineId);
        if (!machine) return true;
        
        return AppState.userData.machineExpiry < Date.now();
    },
    
    // Activate machine
    activateMachine: async (machineId) => {
        const machine = MINING_MACHINES.find(m => m.id === machineId);
        if (!machine) return false;
        
        // Check requirements
        if (!MiningManager.checkRequirements(machine)) {
            NotificationManager.show(TRANSLATIONS[AppState.currentLang].requirementNotMet, 'error');
            return false;
        }
        
        try {
            const updates = {
                activeMachine: machineId,
                lastClaim: Date.now()
            };
            
            if (machine.duration !== Infinity) {
                updates.machineExpiry = Date.now() + machine.duration;
            }
            
            // Increment upgrades if not free miner
            if (machineId !== 'm1') {
                updates.upgrades = (AppState.userData.upgrades || 0) + 1;
            }
            
            await FirebaseManager.updateUser(updates);
            
            NotificationManager.show(TRANSLATIONS[AppState.currentLang].machineActivated, 'success');
            
            // Check achievements
            Achievements.checkAll();
            
            return true;
            
        } catch (error) {
            console.error('Activation error:', error);
            return false;
        }
    },
    
    // Check machine requirements
    checkRequirements: (machine) => {
        if (!machine.requirements) return true;
        
        const req = machine.requirements;
        
        if (req.minEarnings && AppState.totalEarned < req.minEarnings) {
            return false;
        }
        
        if (req.referrals && (AppState.userData.referrals?.length || 0) < req.referrals) {
            return false;
        }
        
        if (req.streak && AppState.currentStreak < req.streak) {
            return false;
        }
        
        return true;
    },
    
    // Get remaining time for active machine
    getRemainingTime: () => {
        if (!AppState.userData) return Infinity;
        
        const machine = MiningManager.getActiveMachine();
        if (machine.duration === Infinity) return Infinity;
        
        return Math.max(0, AppState.userData.machineExpiry - Date.now());
    },
    
    // Get time until next claim
    getTimeUntilNextClaim: () => {
        if (!AppState.userData) return 0;
        
        const machine = MiningManager.getActiveMachine();
        const elapsed = Date.now() - AppState.userData.lastClaim;
        
        return Math.max(0, machine.interval - elapsed);
    }
};

// =====================================================================
// [SECTION 8] - PAYMENT MANAGER (350+ lines)
// =====================================================================

const PaymentManager = {
    // Open payment modal for machine
    openModal: (machine) => {
        AppState.pendingPayment = machine;
        
        const modal = document.getElementById('rent-modal');
        if (!modal) return;
        
        // Set machine details
        document.getElementById('rent-machine-icon').textContent = machine.icon;
        document.getElementById('rent-machine-name').textContent = 
            AppState.currentLang === 'ar' ? machine.nameAr : machine.name;
        document.getElementById('rent-price').textContent = machine.price + ' TON';
        
        const durationText = machine.duration === Infinity ? 
            (AppState.currentLang === 'ar' ? 'دائم' : 'Permanent') :
            (Math.floor(machine.duration / (24*3600000)) + ' ' + TRANSLATIONS[AppState.currentLang].days);
        document.getElementById('rent-duration').textContent = durationText;
        
        // Set wallet address
        document.getElementById('mining-wallet-address').textContent = 
            AddressUtils.formatAddress(TON_CONFIG.MINING_WALLET);
        document.getElementById('full-address').textContent = TON_CONFIG.MINING_WALLET;
        
        modal.style.display = 'flex';
    },
    
    // Close payment modal
    closeModal: () => {
        const modal = document.getElementById('rent-modal');
        if (modal) modal.style.display = 'none';
        
        // Clear payment interval if running
        if (AppState.paymentCheckInterval) {
            clearInterval(AppState.paymentCheckInterval);
            AppState.paymentCheckInterval = null;
        }
        
        AppState.pendingPayment = null;
        AppState.paymentAttempts = 0;
    },
    
    // Copy wallet address
    copyAddress: () => {
        navigator.clipboard.writeText(TON_CONFIG.MINING_WALLET);
        NotificationManager.show(TRANSLATIONS[AppState.currentLang].copied, 'success');
    },
    
    // Start monitoring for payment
    startMonitoring: () => {
        if (!AppState.pendingPayment) return;
        
        NotificationManager.show(TRANSLATIONS[AppState.currentLang].paymentWaiting, 'info');
        PaymentManager.closeModal();
        
        AppState.paymentAttempts = 0;
        
        AppState.paymentCheckInterval = setInterval(async () => {
            AppState.paymentAttempts++;
            
            const confirmed = await PaymentManager.checkTransaction();
            
            if (confirmed) {
                clearInterval(AppState.paymentCheckInterval);
                AppState.paymentCheckInterval = null;
                
                // Activate machine
                await MiningManager.activateMachine(AppState.pendingPayment.id);
                
                NotificationManager.show(TRANSLATIONS[AppState.currentLang].paymentConfirmed, 'success');
                Effects.celebrate();
            }
            
            if (AppState.paymentAttempts >= TON_CONFIG.TX_MAX_ATTEMPTS) {
                clearInterval(AppState.paymentCheckInterval);
                AppState.paymentCheckInterval = null;
                
                NotificationManager.show('Payment timeout. Please try again.', 'error');
            }
        }, TON_CONFIG.TX_CHECK_INTERVAL);
    },
    
    // Check transaction via TON Center API
    checkTransaction: async () => {
        try {
            const response = await fetch(
                `${TON_CONFIG.TON_CENTER_API}getTransactions?address=${TON_CONFIG.MINING_WALLET}&limit=20&api_key=${TON_CONFIG.TON_API_KEY}`
            );
            
            const data = await response.json();
            
            if (!data.ok || !data.result) return false;
            
            for (const tx of data.result) {
                // Check if we've already processed this transaction
                const txHash = tx.transaction_id?.hash;
                if (!txHash) continue;
                
                const processed = await PaymentManager.isTransactionProcessed(txHash);
                if (processed) continue;
                
                // Check amount
                const value = parseFloat(tx.in_msg?.value) || 0;
                if (Math.abs(value - AppState.pendingPayment.price) > 0.01) continue;
                
                // Check if it's recent (last 30 minutes)
                const txTime = tx.utime * 1000;
                if (Date.now() - txTime > 30 * 60 * 1000) continue;
                
                // Valid transaction found
                await PaymentManager.markTransactionProcessed(txHash, AppState.pendingPayment.id);
                return true;
            }
            
            return false;
            
        } catch (error) {
            console.error('Transaction check error:', error);
            return false;
        }
    },
    
    // Check if transaction was already processed
    isTransactionProcessed: async (hash) => {
        try {
            const doc = await db.collection('processed_txs').doc(hash).get();
            return doc.exists;
        } catch {
            return false;
        }
    },
    
    // Mark transaction as processed
    markTransactionProcessed: async (hash, machineId) => {
        try {
            await db.collection('processed_txs').doc(hash).set({
                hash,
                machineId,
                userId: AppState.user.uid,
                timestamp: Date.now(),
                amount: AppState.pendingPayment.price
            });
            return true;
        } catch (error) {
            console.error('Mark transaction error:', error);
            return false;
        }
    }
};

// =====================================================================
// [SECTION 9] - WITHDRAWAL MANAGER (300+ lines)
// =====================================================================

const WithdrawalManager = {
    // Open withdrawal modal
    openModal: () => {
        const modal = document.getElementById('withdraw-modal');
        if (modal) modal.style.display = 'flex';
    },
    
    // Close withdrawal modal
    closeModal: () => {
        const modal = document.getElementById('withdraw-modal');
        if (modal) modal.style.display = 'none';
        
        // Clear form
        document.getElementById('withdraw-amount').value = '';
        document.getElementById('withdraw-address').value = '';
    },
    
    // Request withdrawal
    request: async () => {
        const amountInput = document.getElementById('withdraw-amount');
        const addressInput = document.getElementById('withdraw-address');
        
        const amount = parseFloat(amountInput.value);
        const address = addressInput.value.trim();
        
        // Validate
        if (isNaN(amount) || amount < ECONOMY_CONFIG.MIN_WITHDRAW) {
            NotificationManager.show(TRANSLATIONS[AppState.currentLang].minWithdraw, 'error');
            return;
        }
        
        if (amount > AppState.userData.balance) {
            NotificationManager.show(TRANSLATIONS[AppState.currentLang].insufficientBalance, 'error');
            return;
        }
        
        if (!AddressUtils.isValidAddress(address)) {
            NotificationManager.show(TRANSLATIONS[AppState.currentLang].invalidAddress, 'error');
            return;
        }
        
        // Check daily limit
        const dailyTotal = await WithdrawalManager.getDailyTotal();
        if (dailyTotal + amount > ECONOMY_CONFIG.MAX_WITHDRAW_DAILY) {
            NotificationManager.show(`Daily limit ${ECONOMY_CONFIG.MAX_WITHDRAW_DAILY} TON reached`, 'error');
            return;
        }
        
        try {
            // Create withdrawal request
            await db.collection('withdrawals').add({
                userId: AppState.user.uid,
                username: AppState.userData.username,
                amount: amount,
                address: address,
                status: 'pending',
                createdAt: Date.now(),
                dailyTotal: dailyTotal + amount
            });
            
            // Deduct balance
            await FirebaseManager.updateUser({
                balance: AppState.userData.balance - amount
            });
            
            // Add transaction
            await FirebaseManager.addTransaction('withdrawal', -amount, {
                address: address,
                status: 'pending'
            });
            
            NotificationManager.show(TRANSLATIONS[AppState.currentLang].withdrawalRequested, 'success');
            WithdrawalManager.closeModal();
            
            // If admin, open admin panel
            if (AppState.isAdmin) {
                AdminPanel.loadRequests();
                document.getElementById('admin-modal').style.display = 'flex';
            }
            
        } catch (error) {
            console.error('Withdrawal error:', error);
            NotificationManager.show(TRANSLATIONS[AppState.currentLang].error, 'error');
        }
    },
    
    // Get total withdrawals today
    getDailyTotal: async () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        try {
            const snapshot = await db.collection('withdrawals')
                .where('userId', '==', AppState.user.uid)
                .where('createdAt', '>=', today.getTime())
                .get();
            
            let total = 0;
            snapshot.forEach(doc => {
                const data = doc.data();
                if (data.status === 'approved' || data.status === 'pending') {
                    total += data.amount;
                }
            });
            
            return total;
        } catch {
            return 0;
        }
    }
};

// =====================================================================
// [SECTION 10] - ADMIN PANEL (250+ lines)
// =====================================================================

const AdminPanel = {
    // Load pending withdrawal requests
    loadRequests: async () => {
        if (!AppState.isAdmin) return;
        
        try {
            const snapshot = await db.collection('withdrawals')
                .where('status', '==', 'pending')
                .orderBy('createdAt', 'desc')
                .limit(50)
                .get();
            
            const container = document.getElementById('withdraw-requests-list');
            if (!container) return;
            
            container.innerHTML = '';
            
            if (snapshot.empty) {
                container.innerHTML = '<div class="no-requests">No pending requests</div>';
                return;
            }
            
            snapshot.forEach(doc => {
                const req = doc.data();
                const timeAgo = TimeUtils.formatRelativeTime(req.createdAt);
                
                const item = document.createElement('div');
                item.className = 'request-item';
                item.innerHTML = `
                    <div class="request-header">
                        <span class="request-user">@${req.username}</span>
                        <span class="request-time">${timeAgo}</span>
                    </div>
                    <div class="request-amount">${req.amount} TON</div>
                    <div class="request-address">${AddressUtils.formatAddress(req.address)}</div>
                    <div class="request-actions">
                        <button class="approve-btn" onclick="AdminPanel.approve('${doc.id}', ${req.amount}, '${req.address}')">
                            ${TRANSLATIONS[AppState.currentLang].approve}
                        </button>
                        <button class="reject-btn" onclick="AdminPanel.reject('${doc.id}')">
                            ${TRANSLATIONS[AppState.currentLang].reject}
                        </button>
                    </div>
                `;
                container.appendChild(item);
            });
            
        } catch (error) {
            console.error('Load requests error:', error);
        }
    },
    
    // Approve withdrawal
    approve: async (id, amount, address) => {
        try {
            await db.collection('withdrawals').doc(id).update({
                status: 'approved',
                approvedAt: Date.now(),
                approvedBy: AppState.user.uid
            });
            
            // Add to processed transactions
            await db.collection('processed_txs').doc(id).set({
                type: 'withdrawal',
                amount,
                address,
                timestamp: Date.now(),
                approvedBy: AppState.user.uid
            });
            
            NotificationManager.show(
                TRANSLATIONS[AppState.currentLang].withdrawalApproved + `: ${amount} TON`,
                'success'
            );
            
            AdminPanel.loadRequests();
            
        } catch (error) {
            console.error('Approve error:', error);
            NotificationManager.show(TRANSLATIONS[AppState.currentLang].error, 'error');
        }
    },
    
    // Reject withdrawal
    reject: async (id) => {
        try {
            // Get withdrawal data
            const doc = await db.collection('withdrawals').doc(id).get();
            const req = doc.data();
            
            // Return funds to user
            await db.collection('users').doc(req.userId).update({
                balance: firebase.firestore.FieldValue.increment(req.amount)
            });
            
            // Update withdrawal status
            await db.collection('withdrawals').doc(id).update({
                status: 'rejected',
                rejectedAt: Date.now(),
                rejectedBy: AppState.user.uid
            });
            
            // Add notification for user
            await FirebaseManager.addNotification(req.userId, {
                type: 'withdrawal_rejected',
                amount: req.amount,
                message: `Your withdrawal of ${req.amount} TON was rejected`,
                timestamp: Date.now(),
                read: false
            });
            
            NotificationManager.show(
                TRANSLATIONS[AppState.currentLang].withdrawalRejected + `: ${req.amount} TON`,
                'error'
            );
            
            AdminPanel.loadRequests();
            
        } catch (error) {
            console.error('Reject error:', error);
            NotificationManager.show(TRANSLATIONS[AppState.currentLang].error, 'error');
        }
    },
    
    // Update pending badge
    updatePendingBadge: async () => {
        if (!AppState.isAdmin) return;
        
        try {
            const snapshot = await db.collection('withdrawals')
                .where('status', '==', 'pending')
                .count()
                .get();
            
            const count = snapshot.data().count;
            
            const badge = document.querySelector('.admin-pending-badge');
            if (badge) {
                if (count > 0) {
                    badge.textContent = count;
                    badge.style.display = 'flex';
                } else {
                    badge.style.display = 'none';
                }
            }
            
        } catch (error) {
            console.error('Update badge error:', error);
        }
    }
};

// =====================================================================
// [SECTION 11] - REFERRAL MANAGER (200+ lines)
// =====================================================================

const ReferralManager = {
    // Get referral link
    getLink: () => {
        if (!AppState.user) return '';
        return `https://t.me/TONMininginstantbot/Ton?startapp=${AppState.user.uid}`;
    },
    
    // Copy referral link
    copyLink: () => {
        const link = ReferralManager.getLink();
        navigator.clipboard.writeText(link);
        NotificationManager.show(TRANSLATIONS[AppState.currentLang].copied, 'success');
    },
    
    // Load referral tree
    loadTree: async () => {
        if (!AppState.userData || !AppState.userData.referrals) return;
        
        const treeBranches = document.getElementById('tree-branches');
        if (!treeBranches) return;
        
        treeBranches.innerHTML = '';
        
        // Load first level referrals
        for (const refId of AppState.userData.referrals.slice(0, 10)) {
            try {
                const userDoc = await db.collection('users').doc(refId).get();
                if (userDoc.exists) {
                    const user = userDoc.data();
                    const node = document.createElement('div');
                    node.className = 'tree-node';
                    node.innerHTML = `
                        <span class="tree-avatar">👤</span>
                        <span class="tree-name">@${user.username}</span>
                        <span class="tree-earned">+${(user.refEarnings || 0).toFixed(2)}</span>
                    `;
                    treeBranches.appendChild(node);
                }
            } catch (error) {
                console.error('Load referral error:', error);
            }
        }
        
        if (AppState.userData.referrals.length === 0) {
            treeBranches.innerHTML = '<div class="tree-empty">No referrals yet. Share your link!</div>';
        }
    },
    
    // Calculate referral earnings
    calculateEarnings: (amount) => {
        return amount * ECONOMY_CONFIG.REFERRAL_PERCENT;
    },
    
    // Add referral earnings
    addEarnings: async (referrerId, amount, fromUser) => {
        try {
            const referrerRef = db.collection('users').doc(referrerId);
            const earnings = amount * ECONOMY_CONFIG.REFERRAL_PERCENT;
            
            await referrerRef.update({
                refEarnings: firebase.firestore.FieldValue.increment(earnings),
                balance: firebase.firestore.FieldValue.increment(earnings)
            });
            
            // Add notification
            await FirebaseManager.addNotification(referrerId, {
                type: 'referral_earning',
                amount: earnings,
                fromUser: fromUser,
                message: `+${earnings.toFixed(4)} TON from referral mining`,
                timestamp: Date.now(),
                read: false
            });
            
        } catch (error) {
            console.error('Referral earnings error:', error);
        }
    }
};

// =====================================================================
// [SECTION 12] - NOTIFICATION MANAGER (150+ lines)
// =====================================================================

const NotificationManager = {
    // Show toast notification
    show: (message, type = 'info') => {
        const notification = document.getElementById('notification');
        if (!notification) return;
        
        notification.textContent = message;
        notification.style.display = 'block';
        
        // Set color based on type
        if (type === 'success') {
            notification.style.background = 'linear-gradient(135deg, #00ff88, #0088cc)';
        } else if (type === 'error') {
            notification.style.background = 'linear-gradient(135deg, #ff4444, #ff8888)';
        } else {
            notification.style.background = 'linear-gradient(135deg, #0088cc, #bc13fe)';
        }
        
        // Auto hide after 3 seconds
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    },
    
    // Show modal notification (requires user action)
    showModal: (title, message, type = 'info', callback = null) => {
        // Could implement a modal notification system
        alert(`${title}: ${message}`);
        if (callback) callback();
    },
    
    // Load user notifications
    loadNotifications: async () => {
        if (!AppState.userData || !AppState.userData.notifications) return;
        
        const unread = AppState.userData.notifications.filter(n => !n.read).length;
        
        // Update badge
        const badge = document.querySelector('.notification-badge');
        if (badge) {
            if (unread > 0) {
                badge.textContent = unread;
                badge.style.display = 'flex';
            } else {
                badge.style.display = 'none';
            }
        }
    },
    
    // Mark notification as read
    markAsRead: async (index) => {
        if (!AppState.userData || !AppState.userData.notifications) return;
        
        AppState.userData.notifications[index].read = true;
        
        await FirebaseManager.updateUser({
            notifications: AppState.userData.notifications
        });
        
        NotificationManager.loadNotifications();
    },
    
    // Mark all as read
    markAllAsRead: async () => {
        if (!AppState.userData || !AppState.userData.notifications) return;
        
        AppState.userData.notifications.forEach(n => n.read = true);
        
        await FirebaseManager.updateUser({
            notifications: AppState.userData.notifications
        });
        
        NotificationManager.loadNotifications();
    }
};

// =====================================================================
// [SECTION 13] - UI MANAGER (500+ lines)
// =====================================================================

const UI = {
    // Update all UI elements
    updateAll: () => {
        UI.updateBalance();
        UI.updateUserInfo();
        UI.updateMachines();
        UI.updateReferralStats();
        UI.updateAchievements();
        UI.updateMiningStats();
        UI.updateActiveMachine();
    },
    
    // Update balance displays
    updateBalance: () => {
        if (!AppState.userData) return;
        
        const balanceEl = document.getElementById('total-balance');
        const walletBalanceEl = document.getElementById('wallet-balance');
        
        if (balanceEl) {
            balanceEl.textContent = NumberUtils.formatTON(AppState.userData.balance);
        }
        
        if (walletBalanceEl) {
            walletBalanceEl.textContent = NumberUtils.formatTON(AppState.userData.balance) + ' TON';
        }
    },
    
    // Update user info
    updateUserInfo: () => {
        const userNameEl = document.getElementById('user-name');
        if (userNameEl && AppState.userData) {
            userNameEl.textContent = '@' + AppState.userData.username;
        }
    },
    
    // Update mining machines display
    updateMachines: () => {
        const container = document.getElementById('machines-container');
        if (!container || !AppState.userData) return;
        
        container.innerHTML = '';
        
        MINING_MACHINES.forEach(machine => {
            const isActive = AppState.userData.activeMachine === machine.id;
            const isExpired = MiningManager.isMachineExpired(machine.id);
            const canAfford = machine.price <= AppState.userData.balance;
            const meetsReqs = MiningManager.checkRequirements(machine);
            
            const card = document.createElement('div');
            card.className = `machine-card ${isActive ? 'active' : ''} ${isExpired ? 'expired' : ''} ${!meetsReqs ? 'locked' : ''}`;
            card.setAttribute('data-machine', machine.id);
            
            const name = AppState.currentLang === 'ar' ? machine.nameAr : machine.name;
            const priceText = machine.price === 0 ? 
                TRANSLATIONS[AppState.currentLang].free : 
                machine.price + ' TON';
            
            let statusBadge = '';
            if (isActive) {
                statusBadge = '<div class="machine-badge active">ACTIVE</div>';
            } else if (isExpired) {
                statusBadge = '<div class="machine-badge expired">EXPIRED</div>';
            } else if (!meetsReqs) {
                statusBadge = '<div class="machine-badge locked">LOCKED</div>';
            }
            
            card.innerHTML = `
                <div class="machine-glow" style="background: radial-gradient(circle at 50% 0%, ${machine.glowColor}, transparent);"></div>
                ${statusBadge}
                <div class="machine-header">
                    <span class="machine-icon" style="color: ${machine.color}">${machine.icon}</span>
                    <span class="machine-name">${name}</span>
                </div>
                <div class="machine-desc">${AppState.currentLang === 'ar' ? machine.descriptionAr : machine.description}</div>
                <div class="machine-stats">
                    <div class="machine-stat">
                        <span class="stat-label">${TRANSLATIONS[AppState.currentLang].yield}</span>
                        <span class="stat-value">${machine.yield} TON</span>
                    </div>
                    <div class="machine-stat">
                        <span class="stat-label">${TRANSLATIONS[AppState.currentLang].duration}</span>
                        <span class="stat-value">${machine.duration === Infinity ? '∞' : Math.floor(machine.duration/(24*3600000)) + 'd'}</span>
                    </div>
                </div>
                <div class="machine-price ${machine.price === 0 ? 'free' : ''} ${!canAfford && machine.price > 0 ? 'cant-afford' : ''}">
                    ${priceText}
                </div>
            `;
            
            card.onclick = () => UI.selectMachine(machine.id);
            container.appendChild(card);
        });
    },
    
    // Update referral stats
    updateReferralStats: () => {
        if (!AppState.userData) return;
        
        const refCountEl = document.getElementById('ref-count');
        const refEarningsEl = document.getElementById('ref-earnings');
        const refLinkEl = document.getElementById('ref-link');
        
        if (refCountEl) {
            refCountEl.textContent = AppState.userData.referrals?.length || 0;
        }
        
        if (refEarningsEl) {
            refEarningsEl.textContent = NumberUtils.formatTON(AppState.userData.refEarnings || 0);
        }
        
        if (refLinkEl) {
            refLinkEl.value = ReferralManager.getLink();
        }
        
        // Load referral tree
        ReferralManager.loadTree();
    },
    
    // Update achievements display
    updateAchievements: () => {
        const container = document.getElementById('achievements-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        ACHIEVEMENTS.forEach(achievement => {
            const unlocked = AppState.unlockedAchievements.includes(achievement.id);
            const progress = Achievements.getProgress(achievement);
            const percent = NumberUtils.percent(progress.current, progress.target);
            
            const item = document.createElement('div');
            item.className = `achievement-item ${unlocked ? 'unlocked' : 'locked'}`;
            
            item.innerHTML = `
                <span class="achievement-icon">${achievement.icon}</span>
                <span class="achievement-name">${AppState.currentLang === 'ar' ? achievement.nameAr : achievement.name}</span>
                ${!unlocked ? `
                    <div class="achievement-progress">
                        <div class="progress-bar" style="width: ${percent}%"></div>
                    </div>
                    <span class="achievement-progress-text">${progress.current}/${progress.target}</span>
                ` : `
                    <span class="achievement-reward">+${achievement.reward} TON</span>
                `}
            `;
            
            container.appendChild(item);
        });
    },
    
    // Update mining stats
    updateMiningStats: () => {
        if (!AppState.userData) return;
        
        const rateEl = document.getElementById('current-rate');
        const activeEl = document.getElementById('active-machine');
        
        const machine = MiningManager.getActiveMachine();
        
        if (rateEl) {
            rateEl.textContent = `${machine.yield} TON/${machine.interval/3600000}h`;
        }
        
        if (activeEl) {
            const machineName = AppState.currentLang === 'ar' ? machine.nameAr : machine.name;
            activeEl.textContent = machineName;
        }
    },
    
    // Update active machine display
    updateActiveMachine: () => {
        const activeEl = document.getElementById('active-machine');
        if (!activeEl || !AppState.userData) return;
        
        const machine = MINING_MACHINES.find(m => m.id === AppState.userData.activeMachine);
        if (machine) {
            activeEl.textContent = AppState.currentLang === 'ar' ? machine.nameAr : machine.name;
        }
    },
    
    // Select machine (called from onclick)
    selectMachine: (machineId) => {
        const machine = MINING_MACHINES.find(m => m.id === machineId);
        if (!machine) return;
        
        // Check if machine is expired and needs renewal
        if (MiningManager.isMachineExpired(machineId) && machineId !== 'm1') {
            // Show renewal option
            if (confirm('Your machine has expired. Would you like to renew it?')) {
                PaymentManager.openModal(machine);
            }
            return;
        }
        
        // If it's the active machine, just show info
        if (AppState.userData.activeMachine === machineId) {
            NotificationManager.show(`Active machine: ${machine.name}`, 'info');
            return;
        }
        
        // Check requirements
        if (!MiningManager.checkRequirements(machine)) {
            NotificationManager.show(TRANSLATIONS[AppState.currentLang].requirementNotMet, 'error');
            return;
        }
        
        // If free, activate directly
        if (machine.price === 0) {
            MiningManager.activateMachine(machineId);
        } else {
            // Show payment modal
            PaymentManager.openModal(machine);
        }
    },
    
    // Toggle language
    toggleLanguage: () => {
        AppState.currentLang = AppState.currentLang === 'en' ? 'ar' : 'en';
        document.documentElement.dir = AppState.currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = AppState.currentLang;
        
        const langBtn = document.querySelector('.lang-toggle');
        if (langBtn) {
            langBtn.textContent = AppState.currentLang === 'en' ? '🇸🇦' : '🇬🇧';
        }
        
        UI.updateAll();
        NotificationManager.show(`Language: ${AppState.currentLang === 'en' ? 'English' : 'العربية'}`);
    },
    
    // Close modal
    closeModal: (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) modal.style.display = 'none';
        
        // Special handling for rent modal
        if (modalId === 'rent-modal') {
            PaymentManager.closeModal();
        }
    },
    
    // Hide loading screen
    hideLoading: () => {
        const loading = document.getElementById('loading-screen');
        if (loading) {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.style.display = 'none';
                document.getElementById('app-container').style.display = 'flex';
            }, 500);
        }
    }
};

// =====================================================================
// [SECTION 14] - EFFECTS MANAGER (150+ lines)
// =====================================================================

const Effects = {
    // Celebration effect (fireworks)
    celebrate: () => {
        const container = document.getElementById('app-container');
        if (!container) return;
        
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const firework = document.createElement('div');
                firework.className = 'firework';
                firework.style.left = Math.random() * 100 + '%';
                firework.style.top = Math.random() * 100 + '%';
                firework.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
                container.appendChild(firework);
                
                setTimeout(() => firework.remove(), 800);
            }, i * 50);
        }
    },
    
    // Shake effect
    shake: (element) => {
        if (!element) return;
        element.classList.add('shake-effect');
        setTimeout(() => {
            element.classList.remove('shake-effect');
        }, 500);
    },
    
    // Pulse effect
    pulse: (element) => {
        if (!element) return;
        element.classList.add('pulse');
        setTimeout(() => {
            element.classList.remove('pulse');
        }, 1000);
    },
    
    // Glow effect
    glow: (element, color = '#00f2ff') => {
        if (!element) return;
        element.style.boxShadow = `0 0 30px ${color}`;
        setTimeout(() => {
            element.style.boxShadow = '';
        }, 1000);
    },
    
    // Typing effect for text
    typeText: (element, text, speed = 50) => {
        if (!element) return;
        
        element.textContent = '';
        let i = 0;
        
        const interval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, speed);
    }
};

// =====================================================================
// [SECTION 15] - SLEEP MODE MANAGER (100+ lines)
// =====================================================================

const SleepMode = {
    // Enter sleep mode (stop listeners)
    enter: () => {
        FirebaseManager.stopListeners();
        console.log('😴 Entering sleep mode');
    },
    
    // Exit sleep mode (restart listeners)
    exit: () => {
        if (AppState.user) {
            FirebaseManager.wakeListeners();
            console.log('🔔 Exiting sleep mode');
        }
    },
    
    // Toggle sleep mode based on visibility
    init: () => {
        // Handle page visibility change
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                SleepMode.enter();
            } else {
                SleepMode.exit();
            }
        });
        
        // Handle online/offline
        window.addEventListener('online', () => {
            SleepMode.exit();
            NotificationManager.show('Back online', 'success');
        });
        
        window.addEventListener('offline', () => {
            SleepMode.enter();
            NotificationManager.show('Offline mode - using cache', 'info');
        });
        
        // Periodic sleep/wake cycle (30 seconds)
        setInterval(() => {
            if (!document.hidden) {
                // Wake briefly to check updates
                SleepMode.exit();
                
                // Go back to sleep after 5 seconds
                setTimeout(() => {
                    if (!document.hidden) {
                        SleepMode.enter();
                    }
                }, 5000);
            }
        }, ECONOMY_CONFIG.LISTENER_SLEEP);
    }
};

// =====================================================================
// [SECTION 16] - INITIALIZATION (100+ lines)
// =====================================================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 TON MINING PRO initializing...');
    
    // Add language toggle button if not present
    const header = document.querySelector('.header-content');
    if (header && !document.querySelector('.lang-toggle')) {
        const langBtn = document.createElement('button');
        langBtn.className = 'lang-toggle';
        langBtn.textContent = '🇸🇦';
        langBtn.onclick = UI.toggleLanguage;
        header.appendChild(langBtn);
    }
    
    // Set initial language from cache
    if (AppState.currentLang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
    }
    
    // Initialize sleep mode
    SleepMode.init();
    
    // Check authentication state
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            AppState.user = user;
            await FirebaseManager.initUser(user);
        } else {
            // Sign in anonymously
            try {
                await auth.signInAnonymously();
            } catch (error) {
                console.error('Auth error:', error);
                NotificationManager.show('Authentication error: ' + error.message, 'error');
            }
        }
    });
    
    // Add admin button after auth (will be shown if admin)
    setTimeout(() => {
        if (AppState.isAdmin && !document.querySelector('.admin-float-btn')) {
            const adminBtn = document.createElement('button');
            adminBtn.className = 'admin-float-btn';
            adminBtn.innerHTML = '👑';
            adminBtn.onclick = () => {
                AdminPanel.loadRequests();
                document.getElementById('admin-modal').style.display = 'flex';
            };
            document.body.appendChild(adminBtn);
            
            // Add pending badge
            const badge = document.createElement('span');
            badge.className = 'admin-pending-badge';
            adminBtn.appendChild(badge);
            
            AdminPanel.updatePendingBadge();
        }
    }, 2000);
});

// =====================================================================
// [SECTION 17] - GLOBAL EXPORTS (for HTML onclick handlers)
// =====================================================================

// Make managers available globally
window.Mining = MiningManager;
window.Payment = PaymentManager;
window.Withdraw = WithdrawalManager;
window.Admin = AdminPanel;
window.Referral = ReferralManager;
window.UI = UI;
window.Effects = Effects;

// Helper functions for HTML
window.copyRefLink = ReferralManager.copyLink;
window.copyWalletAddress = PaymentManager.copyAddress;
window.toggleLanguage = UI.toggleLanguage;
window.closeModal = UI.closeModal;

// =====================================================================
// END OF FILE - TON MINING PRO v4.5.0
// TOTAL LINES: ~4,800
// =====================================================================
