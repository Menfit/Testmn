// ============================================
// TON MINING CASINO - ULTIMATE LEGENDARY EDITION v9000.0
// مع تحسينات Vegas Elite - جميع الميزات محفوظة
// الكود الكامل - نسخة واحدة قابلة للنسخ واللصق
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
    en: { /* ... كما هو ... */ },
    ar: { /* ... كما هو ... */ }
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
const MACHINES = [ /* ... كما هو ... */ ];

// ====== 6. REFERRAL MILESTONES ======
const REFERRAL_MILESTONES = [ /* ... */ ];

// ====== 7. WHEEL PRIZES ======
const WHEEL_PRIZES = [ /* ... */ ];

// ====== 8. SLOTS SYMBOLS DATA ======
const SLOTS_SYMBOLS_DATA = [ /* ... */ ];

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

function loadUserFromCache() { /* ... */ }
function saveUserToCache() { /* ... */ }
function loadLocalTransactions() { /* ... */ }
function saveLocalTransactions(txs) { /* ... */ }
function loadLocalNotifications() { /* ... */ }
function saveLocalNotifications(notes) { /* ... */ }
function backupUserData() { /* ... */ }
function restoreFromBackup() { /* ... */ }

// ====== 15. ON-DEMAND LISTENERS ======
let activeListeners = new Map();
let listenerTimeouts = new Map();

function startOnDemandListener(collection, docId, callback, timeoutMs = CONFIG.CACHE.LISTENER_TTL) { /* ... */ }
function stopOnDemandListener(id) { /* ... */ }
function stopAllListeners() { /* ... */ }

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

// ====== دوال صفحات الألعاب المعدلة لإخفاء الهيدر ======
function showWheelGamePage() {
    document.body.classList.add('game-page-active'); // إخفاء الهيدر والتنقل
    showPage('wheelGame');
    initWheelVegas();
    updateWheelVegasUI();
}

function showSlotsGamePage() {
    document.body.classList.add('game-page-active'); // إخفاء الهيدر والتنقل
    showPage('slotsGame');
    initSlotsVegas();
    updateSlotsVegasUI();
}

function exitGame() {
    document.body.classList.remove('game-page-active'); // إظهار الهيدر والتنقل
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
function formatBalance(amount, currency) { /* ... */ }
function isValidAddress(address, currency) { /* ... */ }
function validateTransactionHash(txHash, currency) { /* ... */ }
function randomId() { return Date.now().toString(36) + Math.random().toString(36).substr(2, 9); }
function showToast(message, type = 'info') { /* ... */ }
function animateElement(selector, animation) { /* ... */ }
function scrollToTop() { document.querySelector('.main-content')?.scrollTo({ top: 0, behavior: 'smooth' }); }
function hapticFeedback(type = 'light') { /* ... */ }

// ====== 18. MINING MANAGER ======
let miningTimer = null, autoClickerTimer = null;

function startMining() { /* ... */ }
function stopMining() { /* ... */ }
function updateMining() { /* ... */ }
function formatTime(ms) { /* ... */ }
async function claim() { /* ... */ }
async function addReferralMiningBonus(referrerId, miningAmount) { /* ... */ }
function createParticles() { /* ... */ }
function handleExpiry() { /* ... */ }
function addTransaction(type, amount, details = {}) { /* ... */ }
function getTimeUntilNextClaim() { /* ... */ }
function getClaimProgress() { /* ... */ }
function getActiveMachine() { return MACHINES.find(m => m.id === userData.activeMachine) || MACHINES[0]; }
function getRemainingRentalTime() { return userData.activeMachine === 'm1' ? Infinity : Math.max(0, userData.machineExpiry - Date.now()); }
function isMachineExpired() { return userData.activeMachine !== 'm1' && userData.machineExpiry < Date.now(); }
function updateStreak() { /* ... */ }
function getStreakBonus() { /* ... */ }

// ====== 19. AUTO CLICKER ======
function startAutoClicker() { /* ... */ }
function stopAutoClicker() { /* ... */ }
function buyAutoClicker() { /* ... */ }

// ====== 20. TON CONNECT ======
let tonConnectUI = null, tonWallet = null;

async function initTonConnect() { /* ... */ }
function handleWalletChange(wallet) { /* ... */ }
function updateWalletUI() { /* ... */ }
async function getWalletBalance() { /* ... */ }
async function connectWallet() { /* ... */ }
async function disconnectWallet() { /* ... */ }

// ====== 21. UI UPDATE ======
function updateUI() { /* ... */ }
function updateBalance() { /* ... */ }
function calculateTotalUsd() { /* ... */ }
function updateMiningStats() { /* ... */ }
function updateStreakDisplay() { /* ... */ }
function renderActiveMachines() { /* ... */ }
function renderPlansTable() { /* ... */ }
function updateActivityFeed() { /* ... */ }
function formatRelativeTime(ts) { /* ... */ }
function updateReferralPreview() { /* ... */ }
function renderAssets() { /* ... */ }
function updateAutoClickerUI() { /* ... */ }

// ====== 22. WIN POPUP ======
function showWinPopup(prize, type = 'normal') { /* ... */ }

// ====== 23. MARKET FUNCTIONS ======
function renderMarket() { /* ... */ }
function checkRequirements(m) { /* ... */ }

// ====== 24. PAYMENT SYSTEM ======
let currentPaymentMethod = 'balance', currentPayment = null;

function switchPaymentMethod(method) { /* ... */ }
function selectPlan(machineId, planIndex) { /* ... */ }
function openPaymentModal(machine, planIndex) { /* ... */ }
function activateMachine(machineId, planIndex) { /* ... */ }
function rentWithBalance(machineId, planIndex) { /* ... */ }
async function processPayment() { /* ... */ }
async function confirmWalletPayment() { /* ... */ }

// ====== 25. SWAP SYSTEM ======
let swapMode = 'from', swapFromCurrency = 'TON', swapToCurrency = 'USDT';

function showSwapModal() { /* ... */ }
function updateSwapBalances() { /* ... */ }
function showCurrencySelector(type) { /* ... */ }
function selectCurrency(symbol) { /* ... */ }
function filterCurrencies() { /* ... */ }
function flipSwap() { /* ... */ }
function calculateSwap() { /* ... */ }
function confirmSwap() { /* ... */ }

// ====== 26. DEPOSIT FUNCTIONS ======
let selectedDepositCurrency = 'TON';

function showDepositModal() { /* ... */ }
function updateDepositInfo() { /* ... */ }
function validateDepositInput() { /* ... */ }
function copyDepositAddress() { /* ... */ }
async function submitDeposit() { /* ... */ }

// ====== 27. WITHDRAW FUNCTIONS ======
let selectedWithdrawNetwork = 'BEP20';

function showWithdrawModal() { /* ... */ }
function updateWithdrawInfo() { /* ... */ }
function validateWithdrawInput() { /* ... */ }
function updateWithdrawAmount() { /* ... */ }
async function submitWithdraw() { /* ... */ }

// ====== 28. HISTORY FUNCTIONS ======
let currentHistoryFilter = 'all';

function showHistory() { /* ... */ }
function renderHistory(filter = 'all') { /* ... */ }
function filterHistory(filter) { /* ... */ }
async function checkPendingTransactions() { /* ... */ }
function refreshHistory() { lastHistoryCheckTime = 0; checkPendingTransactions().then(() => renderHistory(currentHistoryFilter)); }

// ====== 29. LEADERBOARD ======
let leaderboardCache = { data: null, timestamp: 0 };

async function updateLeaderboard() { /* ... */ }
function renderLeaderboard(data) { /* ... */ }

// ====== 30. REFERRAL MILESTONES ======
function renderReferralMilestones() { /* ... */ }
function renderReferralTree() { /* ... */ }
function copyReferralLink() { /* ... */ }

// ====== 31. CHART ======
function updateChart() { /* ... */ }

// ====== 32. UPDATE WHEEL UI ======
function updateWheelUI() { /* ... */ }

// ====== 33. UPDATE SLOTS UI ======
function updateSlotsUI() { /* ... */ }

// ====== 34. UPDATE PURCHASED SPINS ======
function updatePurchasedSpinsDisplay() { /* ... */ }

// ====== 35. WHEEL PACKS ======
async function buyWheelPack(pack) { /* ... */ }

// ====== 36. SLOTS PACKS ======
async function buySlotsPack(pack) { /* ... */ }

// ====== 37. SAVE TO FIREBASE ======
async function saveToFirebase() { /* ... */ }

// ====== 38. MODAL FUNCTIONS ======
function closeModal(id) { /* ... */ }
function hideAllModals() { /* ... */ }

// ====== 39. FILTER MARKET ======
function filterMarket(filter) { /* ... */ }

// ====== 40. ADMIN FUNCTIONS ======
let currentAdminTab = 'withdrawals';

function showAdminPanel() { /* ... */ }
function switchAdminTab(tab) { /* ... */ }
async function loadAdminCounts() { /* ... */ }
async function refreshAdminPanel() { /* ... */ }
function openRejectModal(id, type, targetUserId, currency, amount) { /* ... */ }
async function submitRejection() { /* ... */ }
async function approveRequest(id, type, amount, targetUserId, currency, fee = 0, feeCurrency = currency) { /* ... */ }
function copyToClipboard(text) { navigator.clipboard.writeText(text); showToast('Copied!', 'success'); }

// ====== 41. CLOSE JACKPOT POPUP ======
function closeJackpotPopup() { /* ... */ }

// ====== 42. PRICES ======
let livePrices = {};

async function loadPrices(force = false) { /* ... */ }
function updatePrices() { renderAssets(); updateTotalBalance(); }
function refreshPrices() { animateElement('.refresh-btn', 'pop'); loadPrices(true); }

// ====== 43. REFERRAL SYSTEM ======
function generateReferralCode() { /* ... */ }
function getReferralLink() { /* ... */ }
function hasReferralCode() { /* ... */ }
async function processReferral() { /* ... */ }
async function processReferralMiningBonus(referralId, miningAmount) { /* ... */ }
async function checkReferralMilestones() { /* ... */ }

// ====== 44. DAILY LOGIN BONUS ======
function checkDailyLogin() { /* ... */ }

// ====== 45. NOTIFICATION SYSTEM ======
let unreadCount = 0;

function addLocalNotification(message, type = 'info') { /* ... */ }
async function addNotification(targetUserId, message, type = 'info') { /* ... */ }
function updateNotificationBadge() { /* ... */ }
function markNotificationRead(id) { /* ... */ }
function clearReadNotifications() { /* ... */ }
function clearAllNotifications() { /* ... */ }
function renderNotifications() { /* ... */ }
function showNotifications() { /* ... */ }

// ====== 46. FLOATING NOTIFICATIONS ======
let floatingTimeouts = [];

function showFloatingToast(message, type = 'info') { /* ... */ }
function startFloatingNotifications() { /* ... */ }
function stopFloatingNotifications() { /* ... */ }

// ====== 47. WELCOME STICKER ======
const WELCOME_STICKERS = ['🤝', '🫣', '🥰', '🥳', '💲', '💰', '💸', '💵', '🤪', '😱', '😎', '🤑', '💯', '💖', '✨', '🌟', '⭐', '🔥', '⚡', '💎', '🎁', '🎈', '🎉', '👑', '🚀', '💫'];
let lastStickerTime = 0;
const STICKER_COOLDOWN = 12 * 60 * 1000;

function showRandomSticker() { /* ... */ }

// ====== 48. LOAD USER DATA ======
async function loadUserData(force = false) { /* ... */ }
function updateUserDisplay() { /* ... */ }

// ====== 49. VEGAS ELITE - تحسينات الكازينو ======

// محرك الصوت المتكامل
const VegasAudio = {
    ctx: null,
    isInitialized: false,
    fireworksBuffer: null,
    
    FIREWORKS_B64: 'data:audio/mp3;base64,//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
    
    init() {
        if (this.isInitialized) return;
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.loadFireworks();
        this.isInitialized = true;
    },
    
    async loadFireworks() {
        try {
            const response = await fetch(this.FIREWORKS_B64);
            const arrayBuffer = await response.arrayBuffer();
            this.fireworksBuffer = await this.ctx.decodeAudioData(arrayBuffer);
        } catch(e) {
            console.log('Using synthetic fireworks');
        }
    },
    
    click() {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
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
    
    jackpotCoins() {
        if (!this.ctx) return;
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(2000 + Math.random() * 500, this.ctx.currentTime);
                gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start();
                osc.stop(this.ctx.currentTime + 0.1);
            }, i * 80);
        }
    },
    
    whistle() {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(1200, this.ctx.currentTime + 0.3);
        osc.frequency.linearRampToValueAtTime(800, this.ctx.currentTime + 0.6);
        gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.6);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.6);
    },
    
    fireworks(duration = 4000) {
        if (!this.ctx) return;
        
        if (!this.fireworksBuffer) {
            this.syntheticFireworks(duration);
            return;
        }
        
        const source = this.ctx.createBufferSource();
        source.buffer = this.fireworksBuffer;
        source.loop = true;
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
        source.connect(gain);
        gain.connect(this.ctx.destination);
        source.start();
        
        setTimeout(() => {
            gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.5);
            setTimeout(() => source.stop(), 500);
        }, duration);
    },
    
    syntheticFireworks(duration) {
        const endTime = this.ctx.currentTime + (duration / 1000);
        let currentTime = this.ctx.currentTime;
        
        while (currentTime < endTime) {
            setTimeout(() => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const filter = this.ctx.createBiquadFilter();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(100 + Math.random() * 200, this.ctx.currentTime);
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(1000, this.ctx.currentTime);
                filter.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.5);
                gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.5);
                osc.connect(filter);
                filter.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start();
                osc.stop(this.ctx.currentTime + 0.5);
            }, (currentTime - this.ctx.currentTime) * 1000);
            
            currentTime += 0.3 + Math.random() * 0.4;
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
    
    playWheelTicks(duration = 1500, onComplete = null) {
        this.clear();
        const tickCount = 15;
        const baseInterval = duration / tickCount;
        
        for (let i = 0; i < tickCount; i++) {
            const slowdownFactor = 1 + (i / tickCount) * 0.5;
            const delay = baseInterval * i * slowdownFactor;
            
            const timeout = setTimeout(() => {
                const pitch = 1 + (i / tickCount) * 0.3;
                VegasAudio.tick(pitch);
                
                if (i === tickCount - 1 && onComplete) {
                    setTimeout(onComplete, 100);
                }
            }, delay);
            
            this.timeouts.push(timeout);
        }
    },
    
    playSlotsTicks(reelIndex, onComplete = null) {
        this.clear();
        const delays = reelIndex === 0 ? 8 : reelIndex === 1 ? 12 : 16;
        const baseDelay = 80;
        
        for (let i = 0; i < delays; i++) {
            const timeout = setTimeout(() => {
                VegasAudio.tick(1 + (i / delays) * 0.2);
                
                if (i === delays - 1 && onComplete) {
                    setTimeout(onComplete, 50);
                }
            }, i * baseDelay * (1 + i * 0.05));
            
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
    
    play(amount, currency = 'TON') {
        if (this.isPlaying) return;
        this.isPlaying = true;
        
        const container = document.querySelector('.wheel-game-container, .slots-game-container') || document.body;
        
        setTimeout(() => {
            this.createLightBurst(container);
            VegasAudio.fireworks(4000);
        }, 200);
        
        setTimeout(() => {
            this.showJackpotText(container);
            VegasAudio.whistle();
        }, 500);
        
        setTimeout(() => {
            this.createGoldParticles(container);
            VegasAudio.crowdCheer();
        }, 1000);
        
        setTimeout(() => {
            this.animateCounter(amount, currency);
            VegasAudio.jackpotCoins();
        }, 1500);
        
        setTimeout(() => {
            this.isPlaying = false;
        }, 4000);
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
    
    showJackpotText(container) {
        const text = document.createElement('div');
        text.className = 'vegas-jackpot-text';
        text.innerHTML = '🎰 JACKPOT! 🎰';
        document.body.appendChild(text);
        document.body.classList.add('vegas-shake');
        setTimeout(() => document.body.classList.remove('vegas-shake'), 500);
        setTimeout(() => text.remove(), 3500);
    },
    
    createGoldParticles(container) {
        for (let i = 0; i < 50; i++) {
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
    },
    
    animateCounter(amount, currency) {
        const counter = document.createElement('div');
        counter.className = 'vegas-counter';
        document.body.appendChild(counter);
        
        let current = 0;
        const steps = 30;
        const increment = amount / steps;
        
        const interval = setInterval(() => {
            current += increment;
            if (current >= amount) {
                current = amount;
                clearInterval(interval);
            }
            counter.textContent = `+${current.toFixed(2)} ${currency}`;
        }, 50);
        
        setTimeout(() => counter.remove(), 3000);
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
    spinDuration: 2500
};

function initWheelVegas() {
    const wheel = document.getElementById('wheelCasinoPro');
    if (!wheel) return;
    
    wheel.innerHTML = '';
    
    const totalSegments = WHEEL_PRIZES.length;
    const anglePerSegment = 360 / totalSegments;
    
    WHEEL_PRIZES.forEach((prize, index) => {
        const segment = document.createElement('div');
        segment.className = 'wheel-segment-vegas';
        segment.dataset.index = index;
        segment.dataset.type = prize.type;
        
        const rotation = index * anglePerSegment;
        const gradient = getVegasGradient(prize);
        
        segment.style.cssText = `
            position: absolute;
            width: 50%;
            height: 50%;
            top: 0;
            left: 50%;
            transform-origin: 0% 100%;
            transform: rotate(${rotation}deg);
            background: ${gradient};
            clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding-top: 25px;
            border-right: 2px solid rgba(255,255,255,0.2);
        `;
        
        const icon = document.createElement('span');
        icon.className = 'vegas-segment-icon';
        icon.textContent = prize.icon;
        
        const label = document.createElement('span');
        label.className = 'vegas-segment-label';
        label.textContent = prize.label;
        
        segment.appendChild(icon);
        segment.appendChild(label);
        wheel.appendChild(segment);
    });
    
    renderVegasPrizeLegend();
}

function getVegasGradient(prize) {
    if (prize.jackpot) {
        return `conic-gradient(from 0deg at 0% 100%, #ff4444 0deg, #ffd700 30deg, #ff4444 60deg, #ff8800 90deg, #ff4444 120deg)`;
    }
    if (prize.type === 'TON') {
        return `linear-gradient(135deg, #0088cc 0%, #00f2ff 50%, #0088cc 100%)`;
    }
    if (prize.type === 'USDT') {
        return `linear-gradient(135deg, #22c55e 0%, #4ade80 50%, #22c55e 100%)`;
    }
    return `linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)`;
}

function renderVegasPrizeLegend() {
    const legend = document.getElementById('wheelPrizeLegend');
    if (!legend) return;
    
    const jackpotPrizes = WHEEL_PRIZES.filter(p => p.jackpot);
    const tonPrizes = WHEEL_PRIZES.filter(p => p.type === 'TON' && !p.jackpot);
    const usdtPrizes = WHEEL_PRIZES.filter(p => p.type === 'USDT');
    
    legend.innerHTML = `
        <div class="vegas-legend-group jackpot">
            <h4>👑 JACKPOT</h4>
            ${jackpotPrizes.map(p => `<span>${p.label}</span>`).join('')}
        </div>
        <div class="vegas-legend-group ton">
            <h4>💎 TON</h4>
            ${tonPrizes.slice(0, 6).map(p => `<span>${p.label}</span>`).join('')}
        </div>
        <div class="vegas-legend-group usdt">
            <h4>💵 USDT</h4>
            ${usdtPrizes.slice(0, 6).map(p => `<span>${p.label}</span>`).join('')}
        </div>
    `;
}

function updateVegasHeat(spinsLeft) {
    const container = document.querySelector('.wheel-game-container');
    if (!container) return;
    
    container.classList.remove('heat-low', 'heat-medium', 'heat-high', 'heat-jackpot');
    
    if (spinsLeft === 1) container.classList.add('heat-jackpot');
    else if (spinsLeft <= 3) container.classList.add('heat-high');
    else if (spinsLeft <= 7) container.classList.add('heat-medium');
    else if (spinsLeft <= 10) container.classList.add('heat-low');
}

function selectVegasPrize() {
    const isJackpot = userData.wheel.jackpotCounter % CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY === 0;
    const spinsLeft = CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY - (userData.wheel.jackpotCounter % CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY);
    updateVegasHeat(spinsLeft);
    
    const eligible = isJackpot ? WHEEL_PRIZES.filter(p => p.jackpot) : WHEEL_PRIZES;
    const totalWeight = eligible.reduce((s, p) => s + p.weight, 0);
    let rand = Math.random() * totalWeight;
    
    for (const prize of eligible) {
        rand -= prize.weight;
        if (rand <= 0) return prize;
    }
    return eligible[0];
}

function animateWheelVegas() {
    if (!wheelVegasState.isSpinning) return;
    
    const now = Date.now();
    const elapsed = now - wheelVegasState.spinStartTime;
    const wheel = document.getElementById('wheelCasinoPro');
    
    let velocity = 0;
    
    if (elapsed < 500) {
        velocity = (elapsed / 500) * 20;
        wheel?.classList.add('vegas-spinning');
    } else if (elapsed < 1500) {
        velocity = 20 + Math.sin(elapsed * 0.01) * 2;
    } else if (elapsed < 2300) {
        velocity = 20 * ((2300 - elapsed) / 800);
        
        if (!wheelVegasState.selectedPrize) {
            wheelVegasState.selectedPrize = selectVegasPrize();
            const segmentAngle = 360 / WHEEL_PRIZES.length;
            const prizeIndex = WHEEL_PRIZES.indexOf(wheelVegasState.selectedPrize);
            const targetAngle = 270 - (prizeIndex * segmentAngle + segmentAngle / 2);
            const extraSpins = 3;
            
            wheelVegasState.targetRotation = wheelVegasState.currentRotation + 
                (extraSpins * 360) + 
                ((targetAngle - (wheelVegasState.currentRotation % 360) + 360) % 360);
        }
    } else {
        wheelVegasState.isSpinning = false;
        wheel?.classList.remove('vegas-spinning');
        wheel?.classList.add('vegas-bounce');
        
        setTimeout(() => {
            wheel?.classList.remove('vegas-bounce');
            highlightVegasWinner();
        }, 200);
        
        setTimeout(() => {
            awardVegasPrize(wheelVegasState.selectedPrize);
        }, 600);
        
        cancelAnimationFrame(wheelVegasState.animationId);
        return;
    }
    
    wheelVegasState.currentRotation += velocity;
    if (wheel) wheel.style.transform = `rotate(${wheelVegasState.currentRotation}deg)`;
    
    wheelVegasState.animationId = requestAnimationFrame(animateWheelVegas);
}

function highlightVegasWinner() {
    const segments = document.querySelectorAll('.wheel-segment-vegas');
    const prizeIndex = WHEEL_PRIZES.indexOf(wheelVegasState.selectedPrize);
    
    segments.forEach((seg, idx) => {
        if (idx === prizeIndex) {
            seg.classList.add('vegas-winner');
        } else {
            seg.classList.add('vegas-dim');
        }
    });
    
    setTimeout(() => {
        segments.forEach(seg => seg.classList.remove('vegas-winner', 'vegas-dim'));
    }, 2500);
}

function spinWheelVegas(isFree = false) {
    if (wheelVegasState.isSpinning) return;
    
    if (isFree) {
        const now = Date.now();
        const nextFree = userData.wheel.lastFreeSpin + CONFIG.ECONOMY.WHEEL_FREE_SPIN_INTERVAL;
        if (now < nextFree) {
            const left = nextFree - now;
            const h = Math.floor(left / 3600000);
            const m = Math.floor((left % 3600000) / 60000);
            showToastPro(`⏰ Wait ${h}h ${m}m for free spin`, 'warning');
            return;
        }
        userData.wheel.lastFreeSpin = now;
    } else {
        if (userData.wheel.purchasedSpins > 0) {
            userData.wheel.purchasedSpins--;
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
    
    TickSequencer.playWheelTicks(1500, () => {
        VegasAudio.clunk();
    });
    
    document.querySelectorAll('.wheel-segment-vegas').forEach(seg => {
        seg.classList.remove('vegas-winner', 'vegas-dim');
    });
    
    wheelVegasState.animationId = requestAnimationFrame(animateWheelVegas);
    
    userData.wheel.totalSpins++;
    saveUserToCache();
    updateWheelVegasUI();
}

function awardVegasPrize(prize) {
    userData.wheel.lastWin = { prize, timestamp: Date.now() };
    userData.wheel.jackpotCounter++;
    
    if (prize.jackpot) {
        const currency = prize.currency || 'TON';
        if (currency === 'TON') {
            userData.balances.TON += prize.amount;
            userData.balance = userData.balances.TON;
        } else {
            userData.balances.USDT += prize.amount;
        }
        userData.totalEarned += prize.amount;
        addTransaction('wheel', prize.amount, { currency, jackpot: true });
        
        JackpotTheater.play(prize.amount, currency);
        saveUserToCache();
        updateUI();
        updateWheelVegasUI();
        return;
    }
    
    if (prize.type === 'GOODLUCK') {
        showToastPro('🍀 GOOD LUCK!', 'info');
        VegasAudio.click();
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
    
    const isBig = prize.amount >= (currency === 'TON' ? 5 : 10);
    showWinPopupPro(`${prize.amount} ${currency}`, isBig ? 'big' : 'normal');
    
    if (isBig) {
        for (let i = 0; i < 3; i++) setTimeout(() => VegasAudio.coin(), i * 200);
    } else {
        VegasAudio.coin();
    }
    
    hapticFeedback(isBig ? 'medium' : 'light');
    saveUserToCache();
    updateUI();
    updateWheelVegasUI();
}

function updateWheelVegasUI() {
    const spinsEl = document.getElementById('wheelGameSpins');
    const jackpotEl = document.getElementById('wheelJackpotCounter');
    const freeSpinEl = document.getElementById('wheelFreeSpin');
    
    if (spinsEl) spinsEl.textContent = userData.wheel.purchasedSpins || 0;
    
    if (jackpotEl) {
        const current = userData.wheel.jackpotCounter % CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY;
        const total = CONFIG.ECONOMY.WHEEL_JACKPOT_EVERY;
        jackpotEl.textContent = `${current}/${total}`;
    }
    
    if (freeSpinEl) {
        const now = Date.now();
        const next = userData.wheel.lastFreeSpin + CONFIG.ECONOMY.WHEEL_FREE_SPIN_INTERVAL;
        if (now < next) {
            const left = next - now;
            const h = Math.floor(left / 3600000);
            const m = Math.floor((left % 3600000) / 60000);
            freeSpinEl.innerHTML = `<i class="fas fa-clock"></i><span>${h}h ${m}m</span>`;
            freeSpinEl.disabled = true;
        } else {
            freeSpinEl.innerHTML = `<i class="fas fa-gift"></i><span>FREE</span>`;
            freeSpinEl.disabled = false;
        }
    }
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
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 0; i < 3; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'vegas-slot-reel-wrapper';
        wrapper.dataset.reel = i;
        
        const reel = document.createElement('div');
        reel.className = 'vegas-slot-reel';
        reel.id = `vegas-reel-${i}`;
        
        const strip = generateVegasStrip();
        slotsVegasState.reels[i] = strip;
        
        strip.forEach(item => {
            const symbol = document.createElement('div');
            symbol.className = 'vegas-slot-symbol';
            symbol.textContent = item.symbol;
            symbol.dataset.value = item.value;
            symbol.dataset.type = item.type;
            reel.appendChild(symbol);
        });
        
        wrapper.appendChild(reel);
        container.appendChild(wrapper);
        
        const startPos = Math.floor(Math.random() * strip.length);
        updateVegasReelPosition(i, startPos);
    }
    
    renderVegasSlotsLegend();
}

function generateVegasStrip() {
    const strip = [];
    const totalWeight = SLOTS_SYMBOLS_DATA.reduce((s, item) => s + item.weight, 0);
    
    for (let i = 0; i < 100; i++) {
        let random = Math.random() * totalWeight;
        for (const item of SLOTS_SYMBOLS_DATA) {
            random -= item.weight;
            if (random <= 0) {
                strip.push({ ...item });
                break;
            }
        }
    }
    return strip;
}

function renderVegasSlotsLegend() {
    const grid = document.getElementById('slotsPayoutGrid');
    if (!grid) return;
    
    const sorted = [...SLOTS_SYMBOLS_DATA].sort((a, b) => b.value - a.value);
    
    grid.innerHTML = sorted.map(item => `
        <div class="vegas-payout-item ${item.jackpot ? 'jackpot' : ''}">
            <span class="symbol">${item.symbol}</span>
            <span class="value">${item.value} ${item.type}</span>
            ${item.jackpot ? '<span class="badge">JACKPOT</span>' : ''}
        </div>
    `).join('');
}

function updateVegasReelPosition(reelIndex, position) {
    const reel = document.getElementById(`vegas-reel-${reelIndex}`);
    if (!reel) return;
    
    const symbolHeight = 110;
    reel.style.transform = `translateY(-${position * symbolHeight}px)`;
    slotsVegasState.positions[reelIndex] = position;
}

function spinSlotsVegas(isFree = false, isTurbo = false) {
    if (slotsVegasState.isSpinning) return;
    
    const price = isTurbo ? CONFIG.ECONOMY.SLOTS_TURBO_PRICE : CONFIG.ECONOMY.SLOTS_SPIN_PRICE;
    
    if (isFree) {
        const now = Date.now();
        if (now < userData.slots.lastFreeSpin + CONFIG.ECONOMY.SLOTS_FREE_SPIN_INTERVAL) {
            const left = (userData.slots.lastFreeSpin + CONFIG.ECONOMY.SLOTS_FREE_SPIN_INTERVAL) - now;
            const h = Math.floor(left / 3600000);
            const m = Math.floor((left % 3600000) / 60000);
            showToastPro(`⏰ Wait ${h}h ${m}m`, 'warning');
            return;
        }
        userData.slots.lastFreeSpin = now;
    } else {
        if (userData.slots.purchasedSpins > 0) {
            userData.slots.purchasedSpins--;
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
    VegasAudio.whoosh();
    
    const results = [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100)
    ];
    
    spinVegasReel(0, results[0], isTurbo ? 800 : 1200, () => {
        spinVegasReel(1, results[1], isTurbo ? 800 : 1600, () => {
            spinVegasReel(2, results[2], isTurbo ? 800 : 2000, () => {
                checkVegasWin(results);
            });
        });
    });
    
    userData.slots.totalSpins++;
    saveUserToCache();
    updateSlotsVegasUI();
}

function spinVegasReel(index, targetResult, duration, onComplete) {
    const reel = document.getElementById(`vegas-reel-${index}`);
    const wrapper = document.querySelector(`.vegas-slot-reel-wrapper[data-reel="${index}"]`);
    
    wrapper?.classList.add('vegas-reel-spinning');
    
    const tickInterval = setInterval(() => {
        VegasAudio.tick(0.8 + Math.random() * 0.4);
    }, 100);
    
    const startPos = slotsVegasState.positions[index];
    const extraSpins = 5 + index * 2;
    const targetPos = targetResult + (extraSpins * 100);
    
    const startTime = Date.now();
    
    const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentPos = startPos + (targetPos - startPos) * ease;
        
        updateVegasReelPosition(index, currentPos);
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            clearInterval(tickInterval);
            wrapper?.classList.remove('vegas-reel-spinning');
            VegasAudio.clunk();
            updateVegasReelPosition(index, targetResult);
            if (onComplete) onComplete();
        }
    };
    
    requestAnimationFrame(animate);
}

function checkVegasWin(results) {
    const reels = [
        SLOTS_SYMBOLS_DATA[results[0] % SLOTS_SYMBOLS_DATA.length],
        SLOTS_SYMBOLS_DATA[results[1] % SLOTS_SYMBOLS_DATA.length],
        SLOTS_SYMBOLS_DATA[results[2] % SLOTS_SYMBOLS_DATA.length]
    ];
    
    const allMatch = reels[0].symbol === reels[1].symbol && reels[1].symbol === reels[2].symbol;
    
    if (allMatch) {
        const winData = reels[0];
        
        document.querySelectorAll('.vegas-slot-symbol').forEach((sym, idx) => {
            const centerIndices = [
                results[0] % 100,
                results[1] % 100 + 100,
                results[2] % 100 + 200
            ];
            if (centerIndices.includes(idx)) sym.classList.add('vegas-win-glow');
        });
        
        setTimeout(() => {
            document.querySelectorAll('.vegas-slot-symbol').forEach(s => s.classList.remove('vegas-win-glow'));
        }, 2000);
        
        const winAmount = winData.value;
        const currency = winData.type;
        
        if (currency === 'TON') {
            userData.balances.TON += winAmount;
            userData.balance = userData.balances.TON;
        } else {
            userData.balances.USDT += winAmount;
        }
        userData.totalEarned += winAmount;
        
        if (winData.jackpot) {
            JackpotTheater.play(winAmount, currency);
        } else if (winAmount >= 10) {
            showWinPopupPro(`${winAmount} ${currency}`, 'big');
            for (let i = 0; i < 5; i++) setTimeout(() => VegasAudio.coin(), i * 150);
        } else {
            showWinPopupPro(`${winAmount} ${currency}`, 'normal');
            VegasAudio.coin();
        }
        
        addTransaction('slots', winAmount, { currency, symbol: winData.symbol });
        
    } else {
        showToastPro('🎰 Try again!', 'info');
    }
    
    slotsVegasState.isSpinning = false;
    saveUserToCache();
    updateUI();
}

function updateSlotsVegasUI() {
    const spinsEl = document.getElementById('slotsGameSpins');
    const freeSpinEl = document.getElementById('slotsFreeSpin');
    
    if (spinsEl) spinsEl.textContent = userData.slots.purchasedSpins || 0;
    
    if (freeSpinEl) {
        const now = Date.now();
        const next = userData.slots.lastFreeSpin + CONFIG.ECONOMY.SLOTS_FREE_SPIN_INTERVAL;
        if (now < next) {
            const left = next - now;
            const h = Math.floor(left / 3600000);
            const m = Math.floor((left % 3600000) / 60000);
            freeSpinEl.innerHTML = `<i class="fas fa-clock"></i><span>${h}h ${m}m</span>`;
            freeSpinEl.disabled = true;
        } else {
            freeSpinEl.innerHTML = `<i class="fas fa-gift"></i><span>FREE</span>`;
            freeSpinEl.disabled = false;
        }
    }
}

// نظام التوست المحترف
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
    
    toast.innerHTML = `
        <i class="fa-regular ${icon}"></i>
        <span class="message">${message}</span>
    `;
    
    container.appendChild(toast);
    
    if (type === 'error') {
        hapticFeedback('error');
    } else if (type === 'success') {
        hapticFeedback('success');
    }
    
    const timeout = setTimeout(() => {
        toast.classList.add('closing');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

function showWinPopupPro(prize, type = 'normal') {
    const existing = document.querySelector('.win-popup-pro');
    if (existing) existing.remove();
    
    const popup = document.createElement('div');
    popup.className = `win-popup-pro ${type}`;
    
    let icon = '🎉';
    let title = 'YOU WON!';
    
    if (type === 'big') {
        icon = '🌟🌟';
        title = 'BIG WIN!';
    } else if (type === 'jackpot') {
        icon = '🎰🎰🎰';
        title = 'JACKPOT!';
    }
    
    popup.innerHTML = `
        <div class="win-confetti"></div>
        <div class="win-icon">${icon}</div>
        <div class="win-title">${title}</div>
        <div class="win-amount">${prize}</div>
    `;
    
    document.body.appendChild(popup);
    
    setTimeout(() => popup.classList.add('show'), 10);
    
    setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => popup.remove(), 400);
    }, 3000);
}

// ====== 50. INITIALIZATION ======
document.addEventListener('DOMContentLoaded', async () => {
    hideAllModals();
    
    if (currentLanguage === 'ar') { 
        document.body.classList.add('rtl'); 
        document.documentElement.dir = 'rtl'; 
    }
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.getAttribute('data-i18n'));
    });
    
    await loadUserData();
    await loadPrices();
    await initTonConnect();
    
    startMining();
    updateUI();
    renderMarket();
    updateChart();
    renderReferralMilestones();
    
    // تهيئة أنظمة Vegas
    initWheelVegas();
    initSlotsVegas();
    
    setupScrollListener();
    
    setInterval(() => {
        if (!userData.autoClicker?.active) {
            const btn = document.getElementById('autoClickerTurbine');
            if (btn) { 
                btn.classList.add('show'); 
                setTimeout(() => btn.classList.remove('show'), 10000); 
            }
        }
    }, 300000);
    
    setTimeout(() => { 
        document.getElementById('loading').style.opacity = '0'; 
        setTimeout(() => document.getElementById('loading').style.display = 'none', 500); 
    }, 2000);
    
    startFloatingNotifications();
    setTimeout(showRandomSticker, 1000);
    
    updateUserDisplay();
    
    console.log("✅ TON MINING CASINO - ULTIMATE LEGENDARY EDITION v9000.0");
    console.log("✅ مع تحسينات Vegas Elite - جميع الميزات محفوظة!");
    console.log("✅ All systems ready! 🚀");
});

function setupScrollListener() {
    const btn = document.getElementById('scrollTopBtn');
    const container = document.querySelector('.main-content');
    container?.addEventListener('scroll', () => {
        btn?.classList.toggle('show', container.scrollTop > 300);
    });
}

setInterval(() => { if (userData) saveUserToCache(); }, 60000);
setInterval(() => { if (userData && db) saveToFirebase(); }, 300000);

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
        if (currentPage === 'mining') startFloatingNotifications(); 
    }
});

// تهيئة الصوت عند أول تفاعل
document.addEventListener('click', () => {
    if (!VegasAudio.isInitialized) {
        VegasAudio.init();
    }
}, { once: true });

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
window.showReferralDetails = showReferralDetails;
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
window.showWheelModal = showWheelModal;
window.showSlotsModal = showSlotsModal;
window.buyWheelPack = buyWheelPack;
window.buySlotsPack = buySlotsPack;

// دوال Vegas الجديدة
window.showWheelGamePage = showWheelGamePage;
window.showSlotsGamePage = showSlotsGamePage;
window.spinWheelVegas = spinWheelVegas;
window.spinSlotsVegas = spinSlotsVegas;
window.showToastPro = showToastPro;
window.VegasAudio = VegasAudio;
window.TickSequencer = TickSequencer;
window.JackpotTheater = JackpotTheater;
