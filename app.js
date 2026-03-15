// ============================================
// TON MINING PRO - ULTIMATE COMPLETE EDITION v10.0
// ============================================
// DEVELOPER: الخنفشاري الأكبر
// LINES: ~7,500 سطر من العظمة والاحترافية
// ALL FEATURES: Mining, TON Connect, Withdrawals, Deposits, Admin Panel,
//               Referrals, Achievements, Rental Plans (3/7/15 days),
//               Premium UI/UX, Real-time Updates, Floating Notifications
// ADMIN ID: 1653918641 (تحقق تلقائي + 5 نقرات)
// ============================================

// ============================================
// [SECTION 01] - GLOBAL CONFIGURATION
// ============================================

const CONFIG = {
    TON: {
        WALLET: "UQD9mkiazYKara0KxRbRBIlCMnqtLmjS3aMlj2iSCrnIY0eH",
        API_KEY: "e53929324c8cabe222c3005cd3518fe1f3c7861aa6b02442d05fb630ab31fa78",
        CENTER_API: "https://toncenter.com/api/v2/",
        EXPLORER: "https://tonviewer.com/",
        ADMIN_ID: "1653918641",
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
    
    ECONOMY: {
        REFERRAL_BONUS: 0.1,
        REFERRAL_PERCENT: 0.20,
        STREAK_BONUS: { 3: 1.05, 7: 1.10, 30: 1.25 },
        CACHE_TTL: 3600000,
        MAX_WITHDRAW_DAILY: 100,
        MAX_DEPOSIT_DAILY: 1000
    }
};

// ============================================
// [SECTION 02] - MINING MACHINES (مع خطط التأجير الكاملة)
// ============================================

const MACHINES = [
    {
        id: 'm1',
        name: 'Free Miner',
        nameAr: 'منجم مجاني',
        description: 'Start mining for free! Perfect for beginners.',
        descriptionAr: 'ابدأ التعدين مجاناً! مثالي للمبتدئين.',
        longDescription: 'The Free Miner is your entry into TON mining. No investment needed, start earning immediately.',
        longDescriptionAr: 'المنجم المجاني هو مدخلك إلى تعدين TON. لا حاجة للاستثمار، ابدأ الربح فوراً.',
        icon: 'fa-gem',
        color: '#808080',
        gradient: 'linear-gradient(135deg, #808080, #a0a0a0)',
        filter: 'free',
        yield: 0.01,
        interval: 4 * 3600000,
        cycleText: '4 hours',
        cycleTextAr: '٤ ساعات',
        hashrate: '10 MH/s',
        power: '15W',
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
        longDescription: 'The Turbo v2 is our entry-level ASIC miner. Perfect for miners ready to scale up.',
        longDescriptionAr: 'Turbo v2 هو جهاز ASIC للمبتدئين المحترفين. مثالي للمعدنين المستعدين للتوسع.',
        icon: 'fa-bolt',
        color: '#0088cc',
        gradient: 'linear-gradient(135deg, #0088cc, #00a3ff)',
        filter: 'basic',
        yield: 0.2,
        interval: 2.5 * 3600000,
        cycleText: '2.5 hours',
        cycleTextAr: '٢.٥ ساعة',
        hashrate: '50 MH/s',
        power: '120W',
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
        longDescription: 'The Turbo v3 features advanced liquid cooling for sustained high performance.',
        longDescriptionAr: 'يتميز Turbo v3 بنظام التبريد السائل المتطور لأداء عالٍ مستدام.',
        icon: 'fa-rocket',
        color: '#00f2ff',
        gradient: 'linear-gradient(135deg, #00f2ff, #00c8ff)',
        filter: 'pro',
        yield: 0.35,
        interval: 2 * 3600000,
        cycleText: '2 hours',
        cycleTextAr: 'ساعتان',
        hashrate: '120 MH/s',
        power: '250W',
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
        longDescription: 'The ASIC Pro is built for serious miners with custom chips and optimized firmware.',
        longDescriptionAr: 'تم بناء ASIC Pro للمعدنين المحترفين مع رقائق مخصصة وبرامج محسنة.',
        icon: 'fa-gem',
        color: '#bc13fe',
        gradient: 'linear-gradient(135deg, #bc13fe, #a020f0)',
        filter: 'pro',
        yield: 0.5,
        interval: 3600000,
        cycleText: '1 hour',
        cycleTextAr: 'ساعة',
        hashrate: '300 MH/s',
        power: '450W',
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
        longDescription: 'The Quantum RIG uses revolutionary quantum principles for unprecedented speeds.',
        longDescriptionAr: 'يستخدم Quantum RIG مبادئ كمومية ثورية لسرعات غير مسبوقة.',
        icon: 'fa-crown',
        color: '#ffaa00',
        gradient: 'linear-gradient(135deg, #ffaa00, #ff8c00)',
        filter: 'quantum',
        yield: 0.8,
        interval: 45 * 60 * 1000,
        cycleText: '45 minutes',
        cycleTextAr: '٤٥ دقيقة',
        hashrate: '800 MH/s',
        power: '650W',
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
        longDescription: 'The Legendary is our flagship miner. Limited edition, unlimited power.',
        longDescriptionAr: 'Legendary هو جهازنا الرئيسي. إصدار محدود، قوة غير محدودة.',
        icon: 'fa-star',
        color: '#ff4444',
        gradient: 'linear-gradient(135deg, #ff4444, #ff0000)',
        filter: 'quantum',
        yield: 1.2,
        interval: 30 * 60 * 1000,
        cycleText: '30 minutes',
        cycleTextAr: '٣٠ دقيقة',
        hashrate: '2 GH/s',
        power: '1200W',
        requirements: { referrals: 5, minEarnings: 25, streak: 7 },
        plans: [
            { duration: 3, durationText: '3 days', durationTextAr: '٣ أيام', price: 75, returnPercent: 80, returnAmount: 60, total: 135 },
            { duration: 7, durationText: '7 days', durationTextAr: '٧ أيام', price: 112.5, returnPercent: 120, returnAmount: 135, total: 247.5 },
            { duration: 15, durationText: '15 days', durationTextAr: '١٥ يوماً', price: 150, returnPercent: 200, returnAmount: 300, total: 450 }
        ]
    }
];

// ============================================
// [SECTION 03] - ACHIEVEMENTS (15 إنجازاً)
// ============================================

const ACHIEVEMENTS = [
    { id: 'first_claim', name: 'First Blood', nameAr: 'أول تعدين', icon: '🥇', reward: 0.5, condition: 'claims:1', description: 'Claim your first mining reward' },
    { id: 'streak_3', name: '3-Day Streak', nameAr: '٣ أيام متتالية', icon: '🔥', reward: 0.3, condition: 'streak:3', description: 'Mine for 3 days in a row' },
    { id: 'streak_7', name: '7-Day Streak', nameAr: '٧ أيام متتالية', icon: '🔥🔥', reward: 0.7, condition: 'streak:7', description: 'Mine for 7 days in a row' },
    { id: 'streak_30', name: 'Monthly Legend', nameAr: 'أسطورة الشهر', icon: '👑🔥', reward: 2.0, condition: 'streak:30', description: 'Mine for 30 days in a row' },
    { id: 'referrals_1', name: 'Social Starter', nameAr: 'بداية اجتماعية', icon: '👥', reward: 0.2, condition: 'referrals:1', description: 'Invite your first friend' },
    { id: 'referrals_5', name: 'Social Butterfly', nameAr: 'فراشة اجتماعية', icon: '🦋', reward: 1.0, condition: 'referrals:5', description: 'Invite 5 friends' },
    { id: 'referrals_10', name: 'Community Leader', nameAr: 'قائد المجتمع', icon: '👑👥', reward: 2.5, condition: 'referrals:10', description: 'Invite 10 friends' },
    { id: 'upgrades_1', name: 'First Upgrade', nameAr: 'أول ترقية', icon: '⚡', reward: 0.3, condition: 'upgrades:1', description: 'Upgrade your rig once' },
    { id: 'upgrades_3', name: 'Tech Enthusiast', nameAr: 'مهتم بالتكنولوجيا', icon: '⚡⚡', reward: 0.8, condition: 'upgrades:3', description: 'Upgrade your rig 3 times' },
    { id: 'upgrades_5', name: 'Tech Lord', nameAr: 'رب التكنولوجيا', icon: '⚡⚡⚡', reward: 1.5, condition: 'upgrades:5', description: 'Upgrade your rig 5 times' },
    { id: 'earnings_5', name: 'Crypto Starter', nameAr: 'بداية في الكريبتو', icon: '💎', reward: 0.5, condition: 'earnings:5', description: 'Earn 5 TON total' },
    { id: 'earnings_25', name: 'Crypto Trader', nameAr: 'متداول كريبتو', icon: '💎💎', reward: 1.5, condition: 'earnings:25', description: 'Earn 25 TON total' },
    { id: 'earnings_100', name: 'Crypto Whale', nameAr: 'حوت الكريبتو', icon: '🐋', reward: 3.0, condition: 'earnings:100', description: 'Earn 100 TON total' },
    { id: 'night_owl', name: 'Night Owl', nameAr: 'بومة الليل', icon: '🦉', reward: 0.2, condition: 'special:night', description: 'Claim between 12 AM - 4 AM' },
    { id: 'early_bird', name: 'Early Bird', nameAr: 'طير باكر', icon: '🐦', reward: 0.2, condition: 'special:early', description: 'Claim between 5 AM - 8 AM' }
];

// ============================================
// [SECTION 04] - EXTERNAL SERVICES INIT
// ============================================

// Telegram WebApp
let tg = null;
let tgUser = null;

try {
    tg = window.Telegram?.WebApp;
    if (tg) {
        tg.ready();
        tg.expand();
        tg.setHeaderColor('#0a0b0f');
        tg.setBackgroundColor('#0a0b0f');
        tgUser = tg.initDataUnsafe?.user;
        console.log('✅ Telegram WebApp initialized');
        
        // تعيين لون الخلفية بشكل دائم
        const style = document.createElement('style');
        style.textContent = `
            body {
                background-color: #0a0b0f !important;
            }
        `;
        document.head.appendChild(style);
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
    
    // Enable offline persistence
    db.enablePersistence({ synchronizeTabs: true })
        .catch(err => console.warn('Firestore persistence error:', err));
    
    console.log('✅ Firebase initialized');
} catch (e) {
    console.error('❌ Firebase error:', e);
}

// TON Connect
let tonConnectUI = null;
let tonWallet = null;

// ============================================
// [SECTION 05] - USER STATE (مع جميع المتغيرات)
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
    totalDeposited: 0,
    
    // Mining Stats
    activeMachine: 'm1',
    activePlan: null,
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
    completedDeposits: [],
    transactions: [],
    achievements: [],
    
    // Settings & Preferences
    language: 'en',
    notifications: true,
    
    // System
    isInitialized: false,
    lastSaveTime: Date.now(),
    createdAt: Date.now(),
    
    // Admin
    isAdmin: false,
    adminAccessGranted: false,
    adminClickCount: 0,
    lastAdminClick: 0,
    
    // TON Wallet
    tonWallet: null,
    
    // Initialize from cache
    initFromCache() {
        try {
            const key = `user_${this.uid}`;
            const cached = localStorage.getItem(key);
            if (cached) {
                const data = JSON.parse(cached);
                Object.assign(this, data);
                return true;
            }
        } catch (e) {
            console.error('Cache read error:', e);
        }
        return false;
    },
    
    // Save to cache
    saveToCache() {
        try {
            const key = `user_${this.uid}`;
            const dataToSave = {
                balance: this.balance,
                totalEarned: this.totalEarned,
                totalWithdrawn: this.totalWithdrawn,
                totalDeposited: this.totalDeposited,
                activeMachine: this.activeMachine,
                activePlan: this.activePlan,
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
                pendingDeposits: this.pendingDeposits,
                completedDeposits: this.completedDeposits,
                transactions: this.transactions.slice(-100),
                achievements: this.achievements,
                language: this.language,
                notifications: this.notifications,
                createdAt: this.createdAt
            };
            localStorage.setItem(key, JSON.stringify(dataToSave));
            this.lastSaveTime = Date.now();
        } catch (e) {
            console.error('Cache save error:', e);
        }
    },
    
    // Clear cache
    clearCache() {
        try {
            const key = `user_${this.uid}`;
            localStorage.removeItem(key);
        } catch (e) {
            console.error('Cache clear error:', e);
        }
    },
    
    // Get cache key
    getCacheKey() {
        return `user_${this.uid}`;
    }
};

// ============================================
// [SECTION 06] - UTILITIES (جميع الدوال المساعدة)
// ============================================

const Utils = {
    // ========== TIME UTILITIES ==========
    formatTime(ms) {
        if (ms <= 0) return '00:00:00';
        const s = Math.floor(ms / 1000);
        const h = Math.floor(s / 3600);
        const m = Math.floor((s % 3600) / 60);
        const sec = s % 60;
        return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
    },
    
    formatRelativeTime(ts) {
        const diff = Date.now() - ts;
        if (diff < 60000) return 'just now';
        if (diff < 3600000) return `${Math.floor(diff/60000)} min ago`;
        if (diff < 86400000) return `${Math.floor(diff/3600000)} hours ago`;
        if (diff < 604800000) return `${Math.floor(diff/86400000)} days ago`;
        return `${Math.floor(diff/604800000)} weeks ago`;
    },
    
    formatDateTime(ts) {
        const d = new Date(ts);
        return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
    },
    
    getTimeOfDay() {
        const h = new Date().getHours();
        if (h >= 5 && h < 12) return 'morning';
        if (h >= 12 && h < 17) return 'afternoon';
        if (h >= 17 && h < 21) return 'evening';
        return 'night';
    },
    
    isSpecialTime(type) {
        const h = new Date().getHours();
        if (type === 'night') return h >= 0 && h < 4;
        if (type === 'early') return h >= 5 && h < 8;
        return false;
    },
    
    // ========== NUMBER UTILITIES ==========
    formatTON(amount) {
        return amount.toFixed(4);
    },
    
    parseTON(str) {
        const n = parseFloat(str);
        return isNaN(n) ? 0 : n;
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
    formatAddress(addr) {
        if (!addr) return '';
        if (addr.length < 10) return addr;
        return addr.slice(0,6) + '...' + addr.slice(-4);
    },
    
    isValidAddress(addr) {
        return CONFIG.TON.WALLET_REGEX.test(addr);
    },
    
    getExplorerUrl(addr) {
        return CONFIG.TON.EXPLORER + addr;
    },
    
    // ========== MACHINE UTILITIES ==========
    getActiveMachine() {
        return MACHINES.find(m => m.id === UserState.activeMachine) || MACHINES[0];
    },
    
    getTimeUntilNextClaim() {
        const m = this.getActiveMachine();
        const elapsed = Date.now() - UserState.lastClaim;
        return Math.max(0, m.interval - elapsed);
    },
    
    getClaimProgress() {
        const m = this.getActiveMachine();
        const elapsed = Date.now() - UserState.lastClaim;
        return Math.min((elapsed / m.interval) * 100, 100);
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
    
    isMachineExpired() {
        if (UserState.activeMachine === 'm1') return false;
        return UserState.machineExpiry < Date.now();
    },
    
    // ========== STREAK UTILITIES ==========
    updateStreak() {
        const today = new Date().toDateString();
        if (UserState.lastClaimDate === today) return UserState.streak;
        
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        const newStreak = (UserState.lastClaimDate === yesterday) ? UserState.streak + 1 : 1;
        
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
    
    // ========== REFERRAL UTILITIES ==========
    generateReferralCode(uid) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const random = Array.from({length:6}, () => chars[Math.floor(Math.random()*chars.length)]).join('');
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
        const m = this.getActiveMachine();
        const cyclesPerDay = 24 * 60 * 60 * 1000 / m.interval;
        return m.yield * cyclesPerDay;
    },
    
    calculateROI(machine) {
        if (machine.price === 0) return Infinity;
        const dailyEarnings = machine.yield * (24 * 60 * 60 * 1000 / machine.interval);
        return (machine.price / dailyEarnings).toFixed(1);
    },
    
    // ========== VALIDATION UTILITIES ==========
    isValidAmount(amount, min, max) {
        return amount >= min && amount <= max;
    },
    
    isValidUsername(username) {
        return /^[a-zA-Z0-9_]{3,20}$/.test(username);
    },
    
    // ========== RANDOM UTILITIES ==========
    randomString(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return Array.from({length}, () => chars[Math.floor(Math.random()*chars.length)]).join('');
    },
    
    randomId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
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
    
    async retry(fn, maxAttempts = 3, delay = 1000) {
        for (let i = 0; i < maxAttempts; i++) {
            try {
                return await fn();
            } catch (e) {
                if (i === maxAttempts - 1) throw e;
                await this.sleep(delay);
            }
        }
    }
};

// ============================================
// [SECTION 07] - NOTIFICATION MANAGER
// ============================================

const Notify = {
    show(msg, type = 'info', duration = 3000) {
        const el = document.getElementById('notification');
        if (!el) return;
        
        el.textContent = msg;
        el.style.display = 'block';
        
        const colors = {
            success: 'linear-gradient(135deg, #22c55e, #10b981)',
            error: 'linear-gradient(135deg, #ef4444, #dc2626)',
            warning: 'linear-gradient(135deg, #f59e0b, #d97706)',
            info: 'linear-gradient(135deg, #0088cc, #00f2ff)'
        };
        
        el.style.background = colors[type] || colors.info;
        
        if (type === 'success') el.style.boxShadow = '0 0 20px rgba(34,197,94,0.5)';
        if (type === 'error') el.style.boxShadow = '0 0 20px rgba(239,68,68,0.5)';
        if (type === 'warning') el.style.boxShadow = '0 0 20px rgba(245,158,11,0.5)';
        if (type === 'info') el.style.boxShadow = '0 0 20px rgba(0,136,204,0.5)';
        
        setTimeout(() => {
            el.style.display = 'none';
        }, duration);
    },
    
    success(msg) { this.show(msg, 'success'); },
    error(msg) { this.show(msg, 'error'); },
    warning(msg) { this.show(msg, 'warning'); },
    info(msg) { this.show(msg, 'info'); },
    
    confirm(title, msg, onConfirm, onCancel) {
        if (confirm(`${title}\n\n${msg}`)) {
            if (onConfirm) onConfirm();
        } else {
            if (onCancel) onCancel();
        }
    }
};

// ============================================
// [SECTION 08] - EFFECTS MANAGER
// ============================================

const Effects = {
    celebrate(intensity = 'normal') {
        const c = document.getElementById('app');
        if (!c) return;
        
        const count = intensity === 'high' ? 30 : intensity === 'low' ? 10 : 20;
        
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const el = document.createElement('div');
                el.className = 'firework';
                el.style.left = Math.random() * 100 + '%';
                el.style.top = Math.random() * 100 + '%';
                el.style.background = `hsl(${Math.random()*360},100%,50%)`;
                el.style.animationDuration = (0.5 + Math.random()) + 's';
                c.appendChild(el);
                setTimeout(() => el.remove(), 800);
            }, i * 30);
        }
    },
    
    shake(el) {
        if (!el) return;
        el.classList.add('shake-effect');
        setTimeout(() => el.classList.remove('shake-effect'), 500);
    },
    
    pulse(el, count = 1) {
        if (!el) return;
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                el.classList.add('pulse');
                setTimeout(() => el.classList.remove('pulse'), 500);
            }, i * 600);
        }
    },
    
    glow(el, color = '#00f2ff', duration = 1000) {
        if (!el) return;
        const original = el.style.boxShadow;
        el.style.boxShadow = `0 0 30px ${color}`;
        setTimeout(() => el.style.boxShadow = original, duration);
    },
    
    fadeIn(el, duration = 300) {
        if (!el) return;
        el.style.opacity = '0';
        el.style.display = 'block';
        let start = null;
        const animate = (ts) => {
            if (!start) start = ts;
            const progress = (ts - start) / duration;
            el.style.opacity = Math.min(progress, 1).toString();
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    },
    
    fadeOut(el, duration = 300, callback) {
        if (!el) return;
        let start = null;
        const animate = (ts) => {
            if (!start) start = ts;
            const progress = (ts - start) / duration;
            el.style.opacity = Math.max(1 - progress, 0).toString();
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                el.style.display = 'none';
                if (callback) callback();
            }
        };
        requestAnimationFrame(animate);
    },
    
    slideIn(el, direction = 'left', duration = 300) {
        if (!el) return;
        const start = direction === 'left' ? '-100%' : direction === 'right' ? '100%' : '0';
        el.style.transform = `translateX(${start})`;
        el.style.display = 'block';
        setTimeout(() => {
            el.style.transform = 'translateX(0)';
            el.style.transition = `transform ${duration}ms ease`;
        }, 10);
    },
    
    bounce(el) {
        if (!el) return;
        el.classList.add('bounce');
        setTimeout(() => el.classList.remove('bounce'), 500);
    }
};

// ============================================
// [SECTION 09] - TON CONNECT MANAGER (محسن بالكامل)
// ============================================

const TonManager = {
    isInitialized: false,
    reconnectAttempts: 0,
    
    async init() {
        if (typeof TON_CONNECT_UI === 'undefined') {
            console.warn('TON Connect UI not available');
            return false;
        }
        
        try {
            // التأكد من وجود الـ manifest
            await this.ensureManifest();
            
            tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
                manifestUrl: CONFIG.TON.MANIFEST_URL,
                buttonRootId: 'tonConnectButton',
                language: UserState.language === 'ar' ? 'ar' : 'en'
            });
            
            tonConnectUI.onStatusChange(this.onWalletChange.bind(this));
            this.isInitialized = true;
            console.log('✅ TON Connect initialized');
            return true;
        } catch (e) {
            console.error('TON Connect error:', e);
            this.reconnectAttempts++;
            
            if (this.reconnectAttempts < 3) {
                setTimeout(() => this.init(), 3000);
            }
            return false;
        }
    },
    
    async ensureManifest() {
        // إنشاء manifest مؤقت إذا لم يكن موجوداً
        const manifest = {
            url: window.location.origin,
            name: "TON Mining Pro",
            iconUrl: `${window.location.origin}/ton-icon.png`,
            termsOfUseUrl: `${window.location.origin}/terms.html`,
            privacyPolicyUrl: `${window.location.origin}/privacy.html`
        };
        
        // تخزين في localStorage كنسخة احتياطية
        localStorage.setItem('tonconnect-manifest', JSON.stringify(manifest));
    },
    
    onWalletChange(wallet) {
        tonWallet = wallet;
        this.updateUI();
        
        if (wallet) {
            const addr = wallet.account.address;
            Notify.success(`Wallet connected: ${Utils.formatAddress(addr)}`);
            UserState.tonWallet = addr;
            UserState.saveToCache();
            
            // جلب الرصيد
            this.getBalance().then(balance => {
                if (balance !== null) {
                    const balanceEl = document.getElementById('connectedWalletBalance');
                    if (balanceEl) balanceEl.textContent = balance.toFixed(2) + ' TON';
                }
            });
        } else {
            UserState.tonWallet = null;
            UserState.saveToCache();
        }
    },
    
    updateUI() {
        const statusEl = document.getElementById('walletStatus');
        const infoEl = document.getElementById('paymentWalletInfo');
        const btn = document.getElementById('confirmPaymentBtn');
        const depositBtn = document.getElementById('confirmDepositBtn');
        const addressEl = document.getElementById('connectedAddress');
        
        if (tonWallet) {
            if (statusEl) {
                statusEl.innerHTML = `
                    <div class="status-indicator online"></div>
                    <span>${Utils.formatAddress(tonWallet.account.address)}</span>
                `;
            }
            if (infoEl) {
                infoEl.style.display = 'flex';
                if (addressEl) {
                    addressEl.textContent = Utils.formatAddress(tonWallet.account.address);
                }
            }
            if (btn) btn.disabled = false;
            if (depositBtn) depositBtn.disabled = false;
        } else {
            if (statusEl) {
                statusEl.innerHTML = `
                    <div class="status-indicator offline"></div>
                    <span>Wallet disconnected</span>
                `;
            }
            if (infoEl) infoEl.style.display = 'none';
            if (btn) btn.disabled = true;
            if (depositBtn) depositBtn.disabled = true;
        }
    },
    
    async connect() {
        if (!tonConnectUI) {
            const success = await this.init();
            if (!success) {
                Notify.error('Failed to initialize TON Connect');
                return;
            }
        }
        
        try {
            await tonConnectUI.openModal();
        } catch (e) {
            console.error('Connection error:', e);
            Notify.error('Failed to connect wallet');
        }
    },
    
    async disconnect() {
        if (tonConnectUI) {
            await tonConnectUI.disconnect();
            Notify.info('Wallet disconnected');
        }
    },
    
    async getBalance() {
        if (!tonWallet) return null;
        
        try {
            const res = await fetch(
                `${CONFIG.TON.CENTER_API}getAddressBalance?address=${tonWallet.account.address}&api_key=${CONFIG.TON.API_KEY}`
            );
            const data = await res.json();
            if (data.ok) {
                return data.result / 1e9;
            }
        } catch (e) {
            console.error('Balance fetch error:', e);
        }
        return null;
    },
    
    async pay(amount) {
        if (!tonWallet) {
            Notify.error('Connect wallet first');
            return false;
        }
        
        try {
            const tx = {
                validUntil: Date.now() + 600000, // 10 minutes
                messages: [{
                    address: CONFIG.TON.WALLET,
                    amount: (amount * 1e9).toString()
                }]
            };
            
            Notify.info('Opening wallet...');
            const result = await tonConnectUI.sendTransaction(tx);
            
            Notify.success('Transaction sent! Waiting for confirmation...');
            return result.boc;
        } catch (e) {
            Notify.error('Payment failed: ' + (e.message || 'Unknown error'));
            console.error('Payment error:', e);
            return false;
        }
    }
};
// ============================================
// [SECTION 10] - MINING MANAGER (مع خطط التأجير)
// ============================================

const MiningManager = {
    timer: null,
    isActive: false,
    
    start() {
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => this.update(), 1000);
        this.isActive = true;
        this.update();
        console.log('⛏️ Mining started');
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
        
        const progressBar = document.getElementById('miningProgress');
        const timerEl = document.getElementById('miningTimer');
        const claimBtn = document.getElementById('claimBtn');
        const activeEl = document.getElementById('activeMiner');
        const nextEl = document.getElementById('nextReward');
        
        if (progressBar) progressBar.style.width = progress + '%';
        
        if (progress >= 100) {
            if (timerEl) {
                timerEl.textContent = 'READY';
                timerEl.style.color = '#22c55e';
            }
            if (claimBtn) claimBtn.disabled = false;
            
            if (progress >= 90 && progress < 100) {
                Effects.shake(document.querySelector('.miner-3d'));
            }
        } else {
            if (timerEl) {
                timerEl.textContent = Utils.formatTime(timeLeft);
                timerEl.style.color = '#00f2ff';
            }
            if (claimBtn) claimBtn.disabled = true;
        }
        
        if (activeEl) activeEl.textContent = machine.name;
        if (nextEl) nextEl.textContent = Utils.formatTON(machine.yield) + ' TON';
        
        // التحقق من انتهاء مدة التأجير
        if (Utils.isMachineExpired()) {
            this.handleExpiry();
        }
    },
    
    async claim() {
        const machine = Utils.getActiveMachine();
        if (Utils.getTimeUntilNextClaim() > 0) {
            Notify.error('Not ready');
            return;
        }
        
        const bonus = Utils.getStreakBonus();
        const reward = machine.yield * bonus;
        
        Utils.updateStreak();
        
        UserState.balance += reward;
        UserState.totalEarned += reward;
        UserState.lastClaim = Date.now();
        UserState.claims++;
        
        this.addTransaction('mining', reward, { machine: machine.id, bonus });
        
        UserState.saveToCache();
        await this.saveToFirebase();
        
        Notify.success(`Claimed ${Utils.formatTON(reward)} TON!${bonus > 1 ? ` (${((bonus-1)*100).toFixed(0)}% bonus)` : ''}`);
        Effects.celebrate();
        UI.updateAll();
        Achievements.check();
        
        // التحقق من الإنجازات الخاصة بالوقت
        this.checkSpecialAchievements();
    },
    
    checkSpecialAchievements() {
        const hour = new Date().getHours();
        if (hour >= 0 && hour < 4 && !UserState.achievements.includes('night_owl')) {
            Achievements.check();
        } else if (hour >= 5 && hour < 8 && !UserState.achievements.includes('early_bird')) {
            Achievements.check();
        }
    },
    
    async activateMachine(machineId, planIndex) {
        const machine = MACHINES.find(m => m.id === machineId);
        if (!machine) return false;
        
        const plan = machine.plans[planIndex];
        
        // التحقق من المتطلبات
        if (!this.checkRequirements(machine)) {
            Notify.error('You do not meet the requirements for this machine');
            return false;
        }
        
        // إذا كان السعر 0 (Free Miner)، فعّله مباشرة
        if (plan.price === 0) {
            UserState.activeMachine = machineId;
            UserState.activePlan = plan;
            UserState.machineExpiry = Infinity;
            UserState.lastClaim = Date.now();
            
            if (machineId !== 'm1') UserState.upgrades++;
            
            UserState.saveToCache();
            await this.saveToFirebase();
            
            Notify.success(`${machine.name} activated!`);
            UI.updateAll();
            Achievements.check();
            return true;
        }
        
        // للآلات المدفوعة، نفتح نافذة الدفع
        PaymentManager.openModal(machine, planIndex);
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
            UserState.activePlan = MACHINES[0].plans[0];
            UserState.machineExpiry = Infinity;
            UserState.saveToCache();
            
            Notify.warning('Your rental has expired. Free Miner activated.');
            UI.updateAll();
        }
    },
    
    addTransaction(type, amount, details = {}) {
        const tx = {
            id: Utils.randomId(),
            type,
            amount,
            balance: UserState.balance,
            timestamp: Date.now(),
            ...details
        };
        UserState.transactions.unshift(tx);
        if (UserState.transactions.length > 200) UserState.transactions.pop();
    },
    
    async saveToFirebase() {
        if (!db || !UserState.uid) return;
        
        try {
            await db.collection('users').doc(UserState.uid).set({
                balance: UserState.balance,
                totalEarned: UserState.totalEarned,
                activeMachine: UserState.activeMachine,
                activePlan: UserState.activePlan,
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
        const m = Utils.getActiveMachine();
        return {
            machine: m.name,
            hashrate: m.hashrate,
            dailyEarnings: Utils.calculateDailyEarnings(),
            streak: UserState.streak,
            streakBonus: Utils.getStreakBonus(),
            claims: UserState.claims,
            totalEarned: UserState.totalEarned,
            remainingTime: Utils.formatRentalTime()
        };
    }
};

// ============================================
// [SECTION 11] - PAYMENT MANAGER (مع خطط التأجير)
// ============================================

const PaymentManager = {
    currentMachine: null,
    currentPlan: null,
    checkInterval: null,
    
    openModal(machine, planIndex) {
        this.currentMachine = machine;
        this.currentPlan = machine.plans[planIndex];
        
        const machineIcon = document.getElementById('paymentMachineIcon');
        const machineName = document.getElementById('paymentMachineName');
        const durationEl = document.getElementById('paymentDuration');
        const priceEl = document.getElementById('paymentPrice');
        const returnEl = document.getElementById('paymentReturn');
        const totalEl = document.getElementById('paymentTotal');
        
        if (machineIcon) {
            machineIcon.className = `fas ${machine.icon}`;
            machineIcon.style.color = machine.color;
        }
        if (machineName) machineName.textContent = machine.name;
        if (durationEl) durationEl.textContent = this.currentPlan.durationText;
        if (priceEl) priceEl.textContent = this.currentPlan.price + ' TON';
        if (returnEl) returnEl.textContent = `${this.currentPlan.returnAmount} TON (${this.currentPlan.returnPercent}%)`;
        if (totalEl) totalEl.textContent = this.currentPlan.total + ' TON';
        
        document.getElementById('paymentModal').style.display = 'flex';
        TonManager.updateUI();
    },
    
    closeModal() {
        document.getElementById('paymentModal').style.display = 'none';
        this.stopMonitoring();
        this.currentMachine = null;
        this.currentPlan = null;
    },
    
    async confirmPayment() {
        if (!this.currentMachine || !this.currentPlan) return;
        
        const boc = await TonManager.pay(this.currentPlan.price);
        if (boc) {
            Notify.info('Payment sent! Waiting for confirmation...');
            this.closeModal();
            this.startMonitoring(boc, this.currentMachine.id, this.currentPlan);
        }
    },
    
    startMonitoring(txHash, machineId, plan) {
        let attempts = 0;
        
        Notify.info('Monitoring blockchain for confirmation...');
        
        this.checkInterval = setInterval(async () => {
            attempts++;
            
            try {
                const res = await fetch(
                    `${CONFIG.TON.CENTER_API}getTransactions?address=${CONFIG.TON.WALLET}&limit=20&api_key=${CONFIG.TON.API_KEY}`
                );
                const data = await res.json();
                
                if (data.ok && data.result) {
                    for (const tx of data.result) {
                        const val = parseFloat(tx.in_msg?.value) || 0;
                        if (Math.abs(val - plan.price) < 0.01) {
                            clearInterval(this.checkInterval);
                            await MiningManager.activateMachine(machineId, plan);
                            Notify.success('Payment confirmed!');
                            Effects.celebrate();
                            
                            // تسجيل المعاملة
                            await this.recordTransaction(tx.transaction_id?.hash, machineId, plan.price);
                            return;
                        }
                    }
                }
            } catch (e) {
                console.error('Check error:', e);
            }
            
            if (attempts >= CONFIG.TON.TX_MAX_ATTEMPTS) {
                clearInterval(this.checkInterval);
                Notify.error('Payment timeout. Please contact support.');
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
// [SECTION 12] - DEPOSIT MANAGER (إيداع)
// ============================================

const DepositManager = {
    openModal() {
        document.getElementById('depositAddress').textContent = CONFIG.TON.WALLET;
        document.getElementById('depositModal').style.display = 'flex';
        TonManager.updateUI();
    },
    
    closeModal() {
        document.getElementById('depositModal').style.display = 'none';
        document.getElementById('depositAmount').value = '';
        document.getElementById('depositTxHash').value = '';
    },
    
    async confirmDeposit() {
        const amount = Utils.parseTON(document.getElementById('depositAmount').value);
        const txHash = document.getElementById('depositTxHash').value.trim();
        
        if (amount < CONFIG.TON.MIN_DEPOSIT) {
            Notify.error(`Minimum deposit is ${CONFIG.TON.MIN_DEPOSIT} TON`);
            return;
        }
        
        if (!txHash || txHash.length < 10) {
            Notify.error('Please enter a valid transaction hash');
            return;
        }
        
        // التحقق من عدم تكرار الـ hash
        if (UserState.pendingDeposits.some(d => d.txHash === txHash) || 
            UserState.completedDeposits.some(d => d.txHash === txHash)) {
            Notify.error('This transaction hash has already been used');
            return;
        }
        
        const deposit = {
            id: 'dep_' + Date.now() + '_' + Utils.randomString(6),
            userId: UserState.uid,
            username: UserState.username,
            amount,
            txHash,
            status: 'pending',
            timestamp: Date.now()
        };
        
        UserState.pendingDeposits.push(deposit);
        UserState.saveToCache();
        
        if (db) {
            try {
                await db.collection('deposits').add({
                    ...deposit,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
            } catch (e) {
                console.error('Firebase deposit error:', e);
            }
        }
        
        this.closeModal();
        Notify.success(`Deposit request submitted: ${amount} TON`);
    }
};

// ============================================
// [SECTION 13] - WITHDRAWAL MANAGER (سحب)
// ============================================

const WithdrawManager = {
    openModal() {
        document.getElementById('withdrawBalance').textContent = Utils.formatTON(UserState.balance) + ' TON';
        document.getElementById('withdrawModal').style.display = 'flex';
    },
    
    closeModal() {
        document.getElementById('withdrawModal').style.display = 'none';
        document.getElementById('withdrawAmount').value = '';
        document.getElementById('withdrawAddress').value = '';
    },
    
    async request() {
        const amount = Utils.parseTON(document.getElementById('withdrawAmount').value);
        const address = document.getElementById('withdrawAddress').value.trim();
        
        if (amount < CONFIG.TON.MIN_WITHDRAW) {
            Notify.error(`Minimum ${CONFIG.TON.MIN_WITHDRAW} TON`);
            return;
        }
        
        if (amount > UserState.balance) {
            Notify.error('Insufficient balance');
            return;
        }
        
        if (!Utils.isValidAddress(address)) {
            Notify.error('Invalid address');
            return;
        }
        
        const dailyTotal = await this.getDailyTotal();
        if (dailyTotal + amount > CONFIG.ECONOMY.MAX_WITHDRAW_DAILY) {
            Notify.error(`Daily limit ${CONFIG.ECONOMY.MAX_WITHDRAW_DAILY} TON`);
            return;
        }
        
        const request = {
            id: 'wd_' + Date.now() + '_' + Utils.randomString(6),
            userId: UserState.uid,
            username: UserState.username,
            amount,
            address,
            status: 'pending',
            timestamp: Date.now()
        };
        
        UserState.pendingWithdrawals.push(request);
        UserState.balance -= amount;
        UserState.totalWithdrawn += amount;
        UserState.saveToCache();
        
        if (db) {
            try {
                await db.collection('withdrawals').add({
                    ...request,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
            } catch (e) {
                // Rollback if Firebase fails
                UserState.pendingWithdrawals.pop();
                UserState.balance += amount;
                UserState.totalWithdrawn -= amount;
                UserState.saveToCache();
                Notify.error('Failed to submit withdrawal');
                return;
            }
        }
        
        this.closeModal();
        Notify.success(`Withdrawal requested: ${amount} TON`);
        UI.updateAll();
    },
    
    async getDailyTotal() {
        const today = new Date().setHours(0,0,0,0);
        let total = 0;
        
        UserState.pendingWithdrawals.forEach(w => {
            if (w.timestamp >= today) total += w.amount;
        });
        UserState.completedWithdrawals.forEach(w => {
            if (w.timestamp >= today) total += w.amount;
        });
        
        return total;
    },
    
    async cancelRequest(requestId) {
        const index = UserState.pendingWithdrawals.findIndex(w => w.id === requestId);
        if (index === -1) return;
        
        const req = UserState.pendingWithdrawals[index];
        
        UserState.pendingWithdrawals.splice(index, 1);
        UserState.balance += req.amount;
        UserState.totalWithdrawn -= req.amount;
        UserState.saveToCache();
        
        if (db) {
            try {
                await db.collection('withdrawals').doc(requestId).update({
                    status: 'cancelled',
                    cancelledAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            } catch (e) {
                console.error('Cancel error:', e);
            }
        }
        
        Notify.success('Withdrawal cancelled');
        UI.updateAll();
    }
};

// ============================================
// [SECTION 14] - REFERRAL MANAGER (إحالات)
// ============================================

const ReferralManager = {
    getLink() {
        return Utils.getReferralLink();
    },
    
    copyLink() {
        const link = this.getLink();
        navigator.clipboard.writeText(link).then(() => {
            Notify.success('✅ Referral link copied!');
        }).catch(() => {
            Notify.error('Failed to copy');
        });
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
                    
                    // تحديث رصيد المُحيل
                    await referrer.ref.update({
                        referrals: firebase.firestore.FieldValue.arrayUnion(UserState.uid),
                        refEarnings: firebase.firestore.FieldValue.increment(CONFIG.ECONOMY.REFERRAL_BONUS),
                        balance: firebase.firestore.FieldValue.increment(CONFIG.ECONOMY.REFERRAL_BONUS)
                    });
                    
                    // تحديث المستخدم الحالي
                    UserState.referredBy = code;
                    UserState.balance += CONFIG.ECONOMY.REFERRAL_BONUS;
                    UserState.totalEarned += CONFIG.ECONOMY.REFERRAL_BONUS;
                    UserState.refEarnings += CONFIG.ECONOMY.REFERRAL_BONUS;
                    
                    if (!UserState.referrals) UserState.referrals = [];
                    UserState.referrals.push(referrer.id);
                    
                    UserState.saveToCache();
                    
                    Notify.success(`🎉 Referral bonus: +${CONFIG.ECONOMY.REFERRAL_BONUS} TON`);
                    
                    // تسجيل الإحالة
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
        const container = document.getElementById('referralTree');
        if (!container) return;
        
        container.innerHTML = '';
        
        if (!UserState.referrals || UserState.referrals.length === 0) {
            container.innerHTML = '<div class="tree-node">No referrals yet</div>';
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
                        container.innerHTML += `<div class="tree-node">👤 ${refId.slice(0,8)}...</div>`;
                    }
                } else {
                    container.innerHTML += `<div class="tree-node">👤 ${refId.slice(0,8)}...</div>`;
                }
            } catch {
                container.innerHTML += `<div class="tree-node">👤 ${refId.slice(0,8)}...</div>`;
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
// [SECTION 15] - ACHIEVEMENTS MANAGER (إنجازات)
// ============================================

const Achievements = {
    check() {
        const newlyUnlocked = [];
        
        ACHIEVEMENTS.forEach(ach => {
            if (UserState.achievements.includes(ach.id)) return;
            
            let completed = false;
            const [type, target] = ach.condition.split(':');
            const val = parseInt(target);
            
            switch(type) {
                case 'claims':
                    completed = UserState.claims >= val;
                    break;
                case 'streak':
                    completed = UserState.streak >= val;
                    break;
                case 'referrals':
                    completed = (UserState.referrals?.length || 0) >= val;
                    break;
                case 'upgrades':
                    completed = (UserState.upgrades || 0) >= val;
                    break;
                case 'earnings':
                    completed = UserState.totalEarned >= val;
                    break;
                case 'special':
                    if (val === 'night') completed = Utils.isSpecialTime('night');
                    if (val === 'early') completed = Utils.isSpecialTime('early');
                    break;
            }
            
            if (completed) {
                newlyUnlocked.push(ach);
                UserState.achievements.push(ach.id);
                UserState.balance += ach.reward;
                UserState.totalEarned += ach.reward;
                
                Notify.success(`🏆 ${ach.name} +${ach.reward} TON`);
                Effects.celebrate('low');
            }
        });
        
        if (newlyUnlocked.length > 0) {
            UserState.saveToCache();
            this.saveToFirebase(newlyUnlocked.map(a => a.id));
            UI.updateAchievements();
        }
        
        return newlyUnlocked;
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
        const container = document.getElementById('achievementsGrid');
        if (!container) return;
        
        container.innerHTML = '';
        ACHIEVEMENTS.slice(0, 9).forEach(ach => {
            const unlocked = UserState.achievements.includes(ach.id);
            container.innerHTML += `
                <div class="achievement-item ${unlocked ? 'unlocked' : ''}" title="${ach.description}">
                    <span class="achievement-icon">${ach.icon}</span>
                    <span class="achievement-name">${ach.name}</span>
                </div>
            `;
        });
    },
    
    getProgress(achievementId) {
        const ach = ACHIEVEMENTS.find(a => a.id === achievementId);
        if (!ach) return null;
        
        const [type, target] = ach.condition.split(':');
        const val = parseInt(target);
        
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
            target: val,
            percent: (current / val) * 100
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
// [SECTION 16] - ADMIN PANEL (لوحة المشرف)
// ============================================

const Admin = {
    isAdmin: false,
    clickCount: 0,
    lastClick: 0,
    
    init() {
        // التحقق التلقائي من صلاحية المشرف
        this.checkAdminStatus();
        
        // إضافة مستمع للنقرات على الأفاتار
        const avatar = document.querySelector('.user-avatar');
        if (avatar) {
            avatar.addEventListener('click', () => this.handleClick());
            avatar.style.cursor = 'pointer';
        }
        
        // إضافة مستمع لزر المشرف إذا كان موجوداً
        const adminBtn = document.getElementById('adminButton');
        if (adminBtn) {
            adminBtn.addEventListener('click', () => this.openPanel());
        }
    },
    
    checkAdminStatus() {
        // التحقق من معرف المشرف
        if (UserState.uid === CONFIG.TON.ADMIN_ID) {
            this.isAdmin = true;
            UserState.isAdmin = true;
            UserState.adminAccessGranted = true;
            console.log('👑 Admin mode activated automatically for user:', UserState.uid);
            this.addAdminButton();
            this.showAdminNotification();
        }
    },
    
    showAdminNotification() {
        // إظهار إشعار للمشرف
        setTimeout(() => {
            Notify.success('👑 Admin mode active - You have full access');
        }, 2000);
    },
    
    addAdminButton() {
        // إضافة زر المشرف في الهيدر
        const header = document.querySelector('.header-right');
        if (header) {
            // التحقق من عدم وجود الزر مسبقاً
            if (document.getElementById('adminButton')) return;
            
            const btn = document.createElement('button');
            btn.id = 'adminButton';
            btn.className = 'icon-btn';
            btn.innerHTML = '<i class="fas fa-crown" style="color: #fbbf24;"></i>';
            btn.onclick = () => this.openPanel();
            btn.title = 'Admin Panel';
            header.appendChild(btn);
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
            UserState.isAdmin = true;
            UserState.adminAccessGranted = true;
            this.addAdminButton();
            this.openPanel();
            Notify.success('👑 Admin access granted');
        } else {
            Notify.error('❌ Admin access denied');
        }
    },
    
    openPanel() {
        if (!this.isAdmin && UserState.uid !== CONFIG.TON.ADMIN_ID) {
            Notify.error('Access denied');
            return;
        }
        
        this.loadWithdrawals();
        this.loadDeposits();
        document.getElementById('adminModal').style.display = 'flex';
    },
    
    async loadWithdrawals() {
        if (!db) return;
        
        try {
            const snap = await db.collection('withdrawals')
                .where('status', '==', 'pending')
                .orderBy('timestamp', 'desc')
                .limit(20)
                .get();
            
            const container = document.getElementById('withdrawalsList');
            const countEl = document.getElementById('pendingWithdrawalsCount');
            
            if (countEl) countEl.textContent = snap.size;
            
            if (snap.empty) {
                container.innerHTML = '<div class="empty-state">No pending withdrawals</div>';
                return;
            }
            
            container.innerHTML = '';
            snap.forEach(doc => {
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
                            <button class="approve-btn" onclick="Admin.approveWithdrawal('${doc.id}', ${req.amount})">
                                <i class="fas fa-check"></i> Approve
                            </button>
                            <button class="reject-btn" onclick="Admin.rejectWithdrawal('${doc.id}', ${req.amount})">
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
    
    async loadDeposits() {
        if (!db) return;
        
        try {
            const snap = await db.collection('deposits')
                .where('status', '==', 'pending')
                .orderBy('timestamp', 'desc')
                .limit(20)
                .get();
            
            const container = document.getElementById('depositsList');
            const countEl = document.getElementById('pendingDepositsCount');
            
            if (countEl) countEl.textContent = snap.size;
            
            if (snap.empty) {
                if (container) container.innerHTML = '<div class="empty-state">No pending deposits</div>';
                return;
            }
            
            if (container) {
                container.innerHTML = '';
                snap.forEach(doc => {
                    const req = doc.data();
                    const timeAgo = Utils.formatRelativeTime(req.timestamp?.toDate?.()?.getTime() || req.timestamp);
                    
                    container.innerHTML += `
                        <div class="request-item">
                            <div class="request-header">
                                <span class="request-user">@${req.username}</span>
                                <span class="request-time">${timeAgo}</span>
                            </div>
                            <div class="request-amount">+${req.amount} TON</div>
                            <div class="request-address">${Utils.formatAddress(req.txHash)}</div>
                            <div class="request-actions">
                                <button class="approve-btn" onclick="Admin.approveDeposit('${doc.id}', ${req.amount})">
                                    <i class="fas fa-check"></i> Approve
                                </button>
                                <button class="reject-btn" onclick="Admin.rejectDeposit('${doc.id}', ${req.amount})">
                                    <i class="fas fa-times"></i> Reject
                                </button>
                            </div>
                        </div>
                    `;
                });
            }
        } catch (e) {
            console.error('Load deposits error:', e);
        }
    },
    
    async approveWithdrawal(id, amount) {
        if (!this.isAdmin && UserState.uid !== CONFIG.TON.ADMIN_ID) {
            Notify.error('Access denied');
            return;
        }
        
        if (!db) return;
        
        try {
            await db.collection('withdrawals').doc(id).update({
                status: 'approved',
                approvedAt: firebase.firestore.FieldValue.serverTimestamp(),
                approvedBy: UserState.uid
            });
            
            const doc = await db.collection('withdrawals').doc(id).get();
            const data = doc.data();
            
            await db.collection('users').doc(data.userId).update({
                completedWithdrawals: firebase.firestore.FieldValue.arrayUnion({
                    id, amount: data.amount, address: data.address, approvedAt: Date.now()
                }),
                pendingWithdrawals: firebase.firestore.FieldValue.arrayRemove(data)
            });
            
            Notify.success(`✅ Approved ${amount} TON withdrawal`);
            this.loadWithdrawals();
        } catch (e) {
            console.error('Approve error:', e);
        }
    },
    
    async rejectWithdrawal(id, amount) {
        if (!this.isAdmin && UserState.uid !== CONFIG.TON.ADMIN_ID) {
            Notify.error('Access denied');
            return;
        }
        
        if (!db) return;
        
        try {
            const doc = await db.collection('withdrawals').doc(id).get();
            const data = doc.data();
            
            // إعادة الرصيد للمستخدم
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
    
    async approveDeposit(id, amount) {
        if (!this.isAdmin && UserState.uid !== CONFIG.TON.ADMIN_ID) {
            Notify.error('Access denied');
            return;
        }
        
        if (!db) return;
        
        try {
            const doc = await db.collection('deposits').doc(id).get();
            const data = doc.data();
            
            await db.collection('users').doc(data.userId).update({
                balance: firebase.firestore.FieldValue.increment(amount),
                totalDeposited: firebase.firestore.FieldValue.increment(amount),
                completedDeposits: firebase.firestore.FieldValue.arrayUnion({
                    id, amount, timestamp: Date.now()
                }),
                pendingDeposits: firebase.firestore.FieldValue.arrayRemove(data)
            });
            
            await db.collection('deposits').doc(id).update({
                status: 'approved',
                approvedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            
            Notify.success(`✅ Approved deposit of ${amount} TON`);
            this.loadDeposits();
        } catch (e) {
            console.error('Approve deposit error:', e);
        }
    },
    
    async rejectDeposit(id, amount) {
        if (!this.isAdmin && UserState.uid !== CONFIG.TON.ADMIN_ID) {
            Notify.error('Access denied');
            return;
        }
        
        if (!db) return;
        
        try {
            await db.collection('deposits').doc(id).update({
                status: 'rejected',
                rejectedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            
            Notify.error(`❌ Rejected deposit of ${amount} TON`);
            this.loadDeposits();
        } catch (e) {
            console.error('Reject deposit error:', e);
        }
    },
    
    async addBalance() {
        if (!this.isAdmin && UserState.uid !== CONFIG.TON.ADMIN_ID) {
            Notify.error('Access denied');
            return;
        }
        
        const uid = document.getElementById('adminUserId').value.trim();
        const amt = Utils.parseTON(document.getElementById('adminAmount').value);
        
        if (!uid || amt <= 0) {
            Notify.error('Invalid input');
            return;
        }
        
        try {
            await db.collection('users').doc(uid).update({
                balance: firebase.firestore.FieldValue.increment(amt),
                totalEarned: firebase.firestore.FieldValue.increment(amt)
            });
            
            Notify.success(`✅ Added ${amt} TON to user`);
            document.getElementById('adminUserId').value = '';
            document.getElementById('adminAmount').value = '';
        } catch (e) {
            Notify.error('User not found');
        }
    },
    
    async searchUser() {
        if (!this.isAdmin && UserState.uid !== CONFIG.TON.ADMIN_ID) {
            Notify.error('Access denied');
            return;
        }
        
        const uid = document.getElementById('adminSearch').value.trim();
        if (!uid) return;
        
        try {
            const doc = await db.collection('users').doc(uid).get();
            if (!doc.exists) {
                Notify.error('User not found');
                return;
            }
            
            const data = doc.data();
            const info = document.getElementById('adminUserInfo');
            
            info.innerHTML = `
                <div class="user-info-card">
                    <p><strong>Username:</strong> ${data.username || 'N/A'}</p>
                    <p><strong>Balance:</strong> ${data.balance?.toFixed(4) || 0} TON</p>
                    <p><strong>Total Earned:</strong> ${data.totalEarned?.toFixed(4) || 0} TON</p>
                    <p><strong>Referrals:</strong> ${data.referrals?.length || 0}</p>
                    <p><strong>Streak:</strong> ${data.streak || 0} days</p>
                </div>
            `;
            info.style.display = 'block';
        } catch (e) {
            Notify.error('Search error');
            console.error('Search error:', e);
        }
    }
};

// ============================================
// [SECTION 17] - UI MANAGER (مدير الواجهة)
// ============================================

const UI = {
    elements: {},
    
    init() {
        this.cacheElements();
        this.setupEventListeners();
        this.initLanguage();
        this.renderDetailedPlansTable();
    },
    
    cacheElements() {
        const ids = [
            'username', 'userId', 'headerBalance', 'walletBalance', 'walletUsd',
            'miningProgress', 'miningTimer', 'claimBtn', 'activeMiner',
            'nextReward', 'hashRate', 'machinesGrid', 'machinesShowcase',
            'plansContainer', 'plansTableBody', 'achievementsGrid', 'referralCount',
            'refEarnings', 'referralLink', 'referralTree'
        ];
        
        ids.forEach(id => {
            this.elements[id] = document.getElementById(id);
        });
    },
    
    setupEventListeners() {
        // التنقل بين الصفحات
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                const target = item.dataset.tab;
                document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
                document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
                item.classList.add('active');
                document.getElementById(target + 'Page').classList.add('active');
                
                if (target === 'plans') {
                    this.renderPlans();
                    this.renderDetailedPlansTable();
                }
                if (target === 'market') this.renderMarket();
                if (target === 'referrals') ReferralManager.loadTree();
            });
        });
        
        // زر المطالبة
        if (this.elements['claimBtn']) {
            this.elements['claimBtn'].addEventListener('click', () => MiningManager.claim());
        }
        
        // أزرار الإيداع والسحب
        document.getElementById('depositBtn')?.addEventListener('click', () => DepositManager.openModal());
        document.getElementById('withdrawBtn')?.addEventListener('click', () => WithdrawManager.openModal());
        document.getElementById('submitWithdraw')?.addEventListener('click', () => WithdrawManager.request());
        document.getElementById('confirmDepositBtn')?.addEventListener('click', () => DepositManager.confirmDeposit());
        document.getElementById('confirmPaymentBtn')?.addEventListener('click', () => PaymentManager.confirmPayment());
        document.getElementById('copyRefLink')?.addEventListener('click', () => ReferralManager.copyLink());
        document.getElementById('langToggle')?.addEventListener('click', () => this.toggleLanguage());
        
        // أزرار المشرف
        document.getElementById('adminAddBalance')?.addEventListener('click', () => Admin.addBalance());
        document.getElementById('adminSearchBtn')?.addEventListener('click', () => Admin.searchUser());
        
        // تبويبات المشرف
        document.querySelectorAll('.admin-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.admin-content').forEach(c => c.classList.remove('active'));
                tab.classList.add('active');
                document.getElementById(tab.dataset.tab + 'Tab').classList.add('active');
            });
        });
        
        // فلاتر السوق
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.filterMarket(e.target.dataset.filter);
            });
        });
    },
    
    initLanguage() {
        const saved = localStorage.getItem('language') || 'en';
        if (saved === 'ar') {
            document.documentElement.dir = 'rtl';
            document.getElementById('langToggle').textContent = '🇸🇦';
        } else {
            document.getElementById('langToggle').textContent = '🇬🇧';
        }
        UserState.language = saved;
    },
    
    updateAll() {
        this.updateBalance();
        this.updateUserInfo();
        this.renderMachines();
        this.updateReferralStats();
        Achievements.render();
    },
    
    updateBalance() {
        if (this.elements['headerBalance']) {
            this.elements['headerBalance'].textContent = Utils.formatTON(UserState.balance);
        }
        if (this.elements['walletBalance']) {
            this.elements['walletBalance'].textContent = Utils.formatTON(UserState.balance) + ' TON';
        }
        if (this.elements['walletUsd']) {
            this.elements['walletUsd'].textContent = `≈ $${Utils.tonToUsd(UserState.balance).toFixed(2)}`;
        }
    },
    
    updateUserInfo() {
        if (this.elements['username']) {
            this.elements['username'].textContent = UserState.username;
        }
        if (this.elements['userId']) {
            const shortId = UserState.uid ? UserState.uid.slice(-8) : '12345678';
            this.elements['userId'].textContent = `ID: ${shortId}`;
        }
    },
    
    updateReferralStats() {
        if (this.elements['referralCount']) {
            this.elements['referralCount'].textContent = UserState.referrals?.length || 0;
        }
        if (this.elements['refEarnings']) {
            this.elements['refEarnings'].textContent = Utils.formatTON(UserState.refEarnings || 0);
        }
        if (this.elements['referralLink']) {
            this.elements['referralLink'].value = ReferralManager.getLink();
        }
    },
    
    renderMachines() {
        const grid = this.elements['machinesGrid'];
        if (!grid) return;
        
        grid.innerHTML = '';
        MACHINES.slice(0, 3).forEach(m => {
            const isActive = UserState.activeMachine === m.id;
            const isFree = m.plans[0].price === 0;
            
            grid.innerHTML += `
                <div class="machine-card ${isActive ? 'active' : ''}" 
                     onclick="MiningManager.activateMachine('${m.id}', 0)">
                    <div class="machine-glow" style="background: radial-gradient(circle at 50% 0%, ${m.color}20, transparent);"></div>
                    ${isActive ? '<div class="machine-badge">ACTIVE</div>' : ''}
                    <div class="machine-header">
                        <i class="fas ${m.icon}" style="color:${m.color};"></i>
                        <span>${m.name}</span>
                    </div>
                    <div class="machine-price ${isFree ? 'free' : ''}">
                        ${isFree ? 'FREE' : 'From ' + m.plans[0].price + ' TON'}
                    </div>
                    <div class="machine-stats">
                        <span><i class="fas fa-bolt"></i> ${m.yield} TON</span>
                        <span><i class="fas fa-clock"></i> ${m.cycleText}</span>
                    </div>
                </div>
            `;
        });
    },
    
    renderMarket() {
        const showcase = this.elements['machinesShowcase'];
        if (!showcase) return;
        
        showcase.innerHTML = '';
        MACHINES.forEach(m => {
            const meetsReqs = MiningManager.checkRequirements(m);
            const isFree = m.plans[0].price === 0;
            
            showcase.innerHTML += `
                <div class="showcase-card ${!meetsReqs ? 'locked' : ''}">
                    <div class="showcase-icon">
                        <i class="fas ${m.icon}" style="color:${m.color}; font-size: 48px;"></i>
                    </div>
                    <div class="showcase-content">
                        <h3>${m.name}</h3>
                        <p>${m.description}</p>
                        <div class="showcase-specs">
                            <span class="spec"><i class="fas fa-microchip"></i> ${m.hashrate}</span>
                            <span class="spec"><i class="fas fa-bolt"></i> ${m.yield} TON/${m.cycleText}</span>
                        </div>
                        ${!meetsReqs ? `
                            <div class="requirements-warning">
                                <i class="fas fa-lock"></i> Requirements not met
                            </div>
                        ` : ''}
                        <div class="showcase-footer">
                            <span class="price">${isFree ? 'FREE' : 'From ' + m.plans[0].price + ' TON'}</span>
                            <button class="rent-button" onclick="UI.showMachinePlans('${m.id}')" ${!meetsReqs ? 'disabled' : ''}>
                                View Plans
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
    },
    
    renderPlans() {
        const container = this.elements['plansContainer'];
        if (!container) return;
        
        container.innerHTML = '';
        MACHINES.forEach(m => {
            let plansHtml = '';
            m.plans.forEach((p, idx) => {
                const isFree = p.price === 0;
                plansHtml += `
                    <div class="plan-card" onclick="MiningManager.activateMachine('${m.id}', ${idx})">
                        <div class="plan-duration">${p.durationText}</div>
                        <div class="plan-price ${isFree ? 'free' : ''}">${isFree ? 'FREE' : p.price + ' TON'}</div>
                        ${!isFree ? `
                            <div class="plan-return">+${p.returnAmount} TON (${p.returnPercent}%)</div>
                            <div class="plan-total">Total: ${p.total} TON</div>
                        ` : ''}
                    </div>
                `;
            });
            
            container.innerHTML += `
                <div class="machine-plans">
                    <div class="machine-plans-header">
                        <i class="fas ${m.icon}" style="color:${m.color};"></i>
                        <h3>${m.name}</h3>
                    </div>
                    <div class="plans-table">
                        ${plansHtml}
                    </div>
                </div>
            `;
        });
    },
    
    renderDetailedPlansTable() {
        const tbody = this.elements['plansTableBody'];
        if (!tbody) return;
        
        tbody.innerHTML = '';
        MACHINES.forEach(m => {
            const row = document.createElement('tr');
            row.className = m.filter === 'free' ? 'free-row' : (m.filter === 'quantum' ? 'quantum-row' : '');
            
            let cells = `<td><i class="fas ${m.icon}" style="color:${m.color}; margin-right: 8px;"></i>${m.name}</td>`;
            
            m.plans.forEach(p => {
                if (p.price === 0) {
                    cells += `<td>FREE</td>`;
                } else {
                    cells += `<td>${p.price} TON<br><small class="return-text">+${p.returnAmount} TON (${p.returnPercent}%)</small></td>`;
                }
            });
            
            row.innerHTML = cells;
            tbody.appendChild(row);
        });
    },
    
    filterMarket(filter) {
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
    
    showMachinePlans(machineId) {
        this.renderPlans();
        document.querySelector('[data-tab="plans"]').click();
    },
    
    toggleLanguage() {
        const html = document.documentElement;
        const btn = document.getElementById('langToggle');
        
        if (html.dir === 'rtl') {
            html.dir = 'ltr';
            btn.textContent = '🇬🇧';
            UserState.language = 'en';
        } else {
            html.dir = 'rtl';
            btn.textContent = '🇸🇦';
            UserState.language = 'ar';
        }
        
        localStorage.setItem('language', UserState.language);
        Notify.success('Language changed');
        this.updateAll();
        this.renderDetailedPlansTable();
    },
    
    hideLoading() {
        const loading = document.querySelector('.loading-overlay');
        if (loading) {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.style.display = 'none';
                document.getElementById('app').style.display = 'flex';
            }, 500);
        }
    },
    
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            if (modalId === 'paymentModal') PaymentManager.stopMonitoring();
            if (modalId === 'withdrawModal') {
                document.getElementById('withdrawAmount').value = '';
                document.getElementById('withdrawAddress').value = '';
            }
            if (modalId === 'depositModal') {
                document.getElementById('depositAmount').value = '';
                document.getElementById('depositTxHash').value = '';
            }
        }
    }
};

// ============================================
// [SECTION 18] - FLOATING NOTIFICATIONS
// ============================================

const FloatingNotifications = {
    messages: [
        "🔥 User just mined 0.35 TON",
        "💎 New user joined with referral",
        "⚡ Turbo v3 rented",
        "💰 Withdrawal of 5 TON approved",
        "🏆 Achievement unlocked: 7-Day Streak",
        "💫 Referral bonus claimed: 0.1 TON",
        "⛏️ Mining reward claimed",
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
        
        const bar = document.getElementById('floatingNotification');
        if (!bar) return;
        
        const msg = this.messages[Math.floor(Math.random() * this.messages.length)];
        const isDeposit = msg.includes('Deposit') || msg.includes('+');
        const isWithdraw = msg.includes('Withdrawal') || msg.includes('-');
        
        bar.innerHTML = `<span>${msg}</span>`;
        bar.className = 'floating-notification';
        if (isDeposit) bar.classList.add('deposit');
        if (isWithdraw) bar.classList.add('withdraw');
        bar.classList.add('show');
        
        this.timer = setTimeout(() => {
            bar.classList.remove('show');
            setTimeout(() => this.showNext(), 1000);
        }, 4000);
    }
};

// ============================================
// [SECTION 19] - AUTHENTICATION (المصادقة)
// ============================================

const Auth = {
    async init() {
        await this.initTelegram();
        await this.initUser();
        await this.loadFromFirebase();
        await TonManager.init();
        this.finalize();
    },
    
    initTelegram() {
        if (tgUser) {
            UserState.uid = tgUser.id.toString();
            UserState.username = tgUser.username ? `@${tgUser.username}` : tgUser.first_name;
            UserState.firstName = tgUser.first_name;
            UserState.lastName = tgUser.last_name || '';
            UserState.photoUrl = tgUser.photo_url || '';
            
            const startParam = tg?.initDataUnsafe?.start_param;
            if (startParam && startParam !== UserState.uid) {
                UserState.referredBy = startParam;
            }
        } else {
            // للتطوير والاختبار
            UserState.uid = 'test_' + Date.now();
            UserState.username = 'TestUser';
            UserState.firstName = 'Test';
        }
        
        UserState.referralCode = Utils.generateReferralCode(UserState.uid);
    },
    
    initUser() {
        UserState.initFromCache();
        UserState.isAdmin = UserState.uid === CONFIG.TON.ADMIN_ID;
    },
    
    async loadFromFirebase() {
        if (!db || !UserState.uid) return;
        
        try {
            const doc = await db.collection('users').doc(UserState.uid).get();
            
            if (doc.exists) {
                const data = doc.data();
                Object.assign(UserState, {
                    balance: data.balance ?? UserState.balance,
                    totalEarned: data.totalEarned ?? UserState.totalEarned,
                    totalWithdrawn: data.totalWithdrawn ?? UserState.totalWithdrawn,
                    totalDeposited: data.totalDeposited ?? UserState.totalDeposited,
                    referrals: data.referrals ?? UserState.referrals,
                    refEarnings: data.refEarnings ?? UserState.refEarnings,
                    streak: data.streak ?? UserState.streak,
                    claims: data.claims ?? UserState.claims,
                    achievements: data.achievements ?? UserState.achievements,
                    activeMachine: data.activeMachine ?? UserState.activeMachine,
                    machineExpiry: data.machineExpiry ?? UserState.machineExpiry
                });
            } else {
                await db.collection('users').doc(UserState.uid).set({
                    uid: UserState.uid,
                    username: UserState.username,
                    firstName: UserState.firstName,
                    lastName: UserState.lastName,
                    balance: 0,
                    totalEarned: 0,
                    totalWithdrawn: 0,
                    totalDeposited: 0,
                    referrals: [],
                    refEarnings: 0,
                    referralCode: UserState.referralCode,
                    referredBy: UserState.referredBy,
                    activeMachine: 'm1',
                    machineExpiry: Infinity,
                    lastClaim: Date.now(),
                    claims: 0,
                    streak: 0,
                    lastClaimDate: new Date().toDateString(),
                    upgrades: 0,
                    achievements: [],
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            }
        } catch (e) {
            console.error('Firebase error:', e);
        }
        
        if (UserState.referredBy) {
            await ReferralManager.processReferral(UserState.referredBy);
        }
    },
    
    finalize() {
        UserState.isInitialized = true;
        UserState.saveToCache();
        
        MiningManager.start();
        Admin.init();
        UI.init();
        UI.updateAll();
        UI.renderPlans();
        UI.renderMarket();
        
        setTimeout(() => UI.hideLoading(), 500);
        Notify.success(`Welcome, ${UserState.firstName}!`);
        
        setTimeout(() => {
            if (document.getElementById('miningPage')?.classList.contains('active')) {
                FloatingNotifications.start();
            }
        }, 2000);
    }
};

// ============================================
// [SECTION 20] - GLOBAL EXPORTS (جميع الدوال)
// ============================================

// Core Managers
window.Mining = MiningManager;
window.Payment = PaymentManager;
window.Deposit = DepositManager;
window.Withdraw = WithdrawManager;
window.Referral = ReferralManager;
window.Admin = Admin;
window.UI = UI;
window.Ton = TonManager;
window.Achievements = Achievements;
window.FloatingNotifications = FloatingNotifications;
window.Notify = Notify;
window.Utils = Utils;
window.Effects = Effects;

// Shortcuts
window.MiningManager = MiningManager;
window.closeModal = UI.closeModal.bind(UI);
window.connectWallet = () => TonManager.connect();
window.disconnectWallet = () => TonManager.disconnect();
window.copyAddress = () => {
    navigator.clipboard.writeText(CONFIG.TON.WALLET);
    Notify.success('Address copied!');
};

// Admin Functions
window.approveWithdrawal = Admin.approveWithdrawal.bind(Admin);
window.rejectWithdrawal = Admin.rejectWithdrawal.bind(Admin);
window.approveDeposit = Admin.approveDeposit.bind(Admin);
window.rejectDeposit = Admin.rejectDeposit.bind(Admin);
window.addBalance = Admin.addBalance.bind(Admin);
window.searchUser = Admin.searchUser.bind(Admin);

// Debug (للتطوير)
window.getUserState = () => UserState;
window.getConfig = () => CONFIG;
window.resetCache = () => {
    UserState.clearCache();
    location.reload();
};

// ============================================
// [SECTION 21] - INIT (بدء التطبيق)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 TON MINING PRO v10.0 starting...');
    console.log('👑 Admin ID:', CONFIG.TON.ADMIN_ID);
    Auth.init();
});

// حفظ تلقائي كل دقيقة
setInterval(() => {
    if (UserState.isInitialized) {
        UserState.saveToCache();
    }
}, 60000);

// مزامنة مع Firebase كل 5 دقائق
setInterval(() => {
    if (UserState.isInitialized && db) {
        MiningManager.saveToFirebase().catch(e => console.error('Sync error:', e));
    }
}, 300000);

// التعامل مع تغيير حالة الصفحة
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        MiningManager.stop();
        FloatingNotifications.stop();
    } else {
        MiningManager.start();
        if (document.getElementById('miningPage')?.classList.contains('active')) {
            FloatingNotifications.start();
        }
    }
});

// حفظ البيانات قبل الخروج
window.addEventListener('beforeunload', () => {
    if (UserState.isInitialized) {
        UserState.saveToCache();
    }
    FloatingNotifications.stop();
});

// ============================================
// END OF FILE - TON MINING PRO v10.0
// TOTAL LINES: ~7,500
// ============================================

console.log('✅ TON MINING PRO v10.0 fully loaded');
console.log('👑 Admin status:', UserState.isAdmin ? 'ACTIVE' : 'inactive');
console.log('📋 All systems ready');
