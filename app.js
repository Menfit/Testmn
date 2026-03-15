// ============================================
// TON MINING PRO - COMPLETE SYSTEM v3.0
// ============================================
// ALL FEATURES: Mining, Rentals, TON Connect, Withdrawals,
// Admin Panel, Referrals, Achievements, Real-time Updates
// ============================================

// ============================================
// 1. GLOBAL CONFIGURATION
// ============================================
const CONFIG = {
    // TON Blockchain
    TON: {
        WALLET: "UQD9mkiazYKara0KxRbRBIlCMnqtLmjS3aMlj2iSCrnIY0eH",
        API_KEY: "e53929324c8cabe222c3005cd3518fe1f3c7861aa6b02442d05fb630ab31fa78",
        CENTER_API: "https://toncenter.com/api/v2/",
        ADMIN_ID: "1653918641",
        MIN_WITHDRAW: 1.0,
        TX_CHECK_INTERVAL: 15000,
        TX_MAX_ATTEMPTS: 20,
        WALLET_REGEX: /^(UQ|EQ)[a-zA-Z0-9\-_]{46,48}$/
    },
    
    // Economy
    ECONOMY: {
        REFERRAL_BONUS: 0.1,
        REFERRAL_PERCENT: 0.20,
        STREAK_BONUS: { 3: 1.05, 7: 1.10, 30: 1.25 },
        CACHE_TTL: 3600000
    },
    
    // Firebase
    FIREBASE: {
        apiKey: "AIzaSyD39Q7g7A2MpuuN42eWtr_bOPt-_1tvbhI",
        authDomain: "ton-71a00.firebaseapp.com",
        projectId: "ton-71a00",
        storageBucket: "ton-71a00.firebasestorage.app",
        messagingSenderId: "97952285427",
        appId: "1:97952285427:web:e7704e52fd108bdabded86"
    }
};

// ============================================
// 2. MINING MACHINES DATA
// ============================================
const MACHINES = [
    {
        id: 'm1',
        name: 'Free Miner',
        nameAr: 'منجم مجاني',
        description: 'Perfect for beginners. Start your mining journey!',
        descriptionAr: 'مثالي للمبتدئين. ابدأ رحلة التعدين!',
        icon: 'fa-gem',
        image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1.0.0/128/color/btc.png',
        price: 0,
        duration: Infinity,
        yield: 0.01,
        interval: 4 * 3600000,
        hashrate: '10 MH/s',
        power: '15W',
        tier: 1,
        color: '#808080',
        filter: 'free'
    },
    {
        id: 'm2',
        name: 'Turbo v2',
        nameAr: 'تربو v2',
        description: 'High-speed ASIC miner. 3x faster!',
        descriptionAr: 'جهاز عالي السرعة. أسرع بثلاث مرات!',
        icon: 'fa-bolt',
        image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1.0.0/128/color/eth.png',
        price: 1,
        duration: 3 * 24 * 3600000,
        yield: 0.2,
        interval: 2.5 * 3600000,
        hashrate: '50 MH/s',
        power: '120W',
        tier: 2,
        color: '#0088cc',
        filter: 'asic'
    },
    {
        id: 'm3',
        name: 'Turbo v3',
        nameAr: 'تربو v3',
        description: 'Next-gen cooling system. Maximum efficiency!',
        descriptionAr: 'تبريد متطور. كفاءة قصوى!',
        icon: 'fa-rocket',
        image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1.0.0/128/color/ltc.png',
        price: 2,
        duration: 7 * 24 * 3600000,
        yield: 0.35,
        interval: 2 * 3600000,
        hashrate: '120 MH/s',
        power: '250W',
        tier: 3,
        color: '#00f2ff',
        filter: 'asic'
    },
    {
        id: 'm4',
        name: 'ASIC Pro',
        nameAr: 'ASIC برو',
        description: 'Professional mining rig. Serious power!',
        descriptionAr: 'جهاز احترافي. قوة هائلة!',
        icon: 'fa-gem',
        image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1.0.0/128/color/dash.png',
        price: 4,
        duration: 14 * 24 * 3600000,
        yield: 0.5,
        interval: 3600000,
        hashrate: '300 MH/s',
        power: '450W',
        tier: 4,
        color: '#bc13fe',
        filter: 'asic'
    },
    {
        id: 'm5',
        name: 'Quantum RIG',
        nameAr: 'كوانتم ريج',
        description: 'Quantum computing technology. The future!',
        descriptionAr: 'تقنية كمومية. مستقبل التعدين!',
        icon: 'fa-crown',
        image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1.0.0/128/color/xmr.png',
        price: 6,
        duration: 30 * 24 * 3600000,
        yield: 0.8,
        interval: 45 * 60 * 1000,
        hashrate: '800 MH/s',
        power: '650W',
        tier: 5,
        color: '#ffaa00',
        filter: 'quantum'
    },
    {
        id: 'm6',
        name: 'Legendary',
        nameAr: 'أسطوري',
        description: 'The ultimate mining machine. Legendary status!',
        descriptionAr: 'الجهاز الأقوى. مكانة أسطورية!',
        icon: 'fa-star',
        image: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1.0.0/128/color/zec.png',
        price: 8,
        duration: 45 * 24 * 3600000,
        yield: 1.2,
        interval: 30 * 60 * 1000,
        hashrate: '2 GH/s',
        power: '1200W',
        tier: 6,
        color: '#ff4444',
        filter: 'quantum'
    }
];

// ============================================
// 3. ACHIEVEMENTS DATA
// ============================================
const ACHIEVEMENTS = [
    { id: 'first_claim', name: 'First Blood', icon: '🥇', reward: 0.5, condition: 'claims:1' },
    { id: 'streak_3', name: '3-Day Streak', icon: '🔥', reward: 0.3, condition: 'streak:3' },
    { id: 'streak_7', name: '7-Day Streak', icon: '🔥🔥', reward: 0.7, condition: 'streak:7' },
    { id: 'streak_30', name: 'Monthly Legend', icon: '👑🔥', reward: 2.0, condition: 'streak:30' },
    { id: 'referrals_1', name: 'Social Starter', icon: '👥', reward: 0.2, condition: 'referrals:1' },
    { id: 'referrals_5', name: 'Social Butterfly', icon: '🦋', reward: 1.0, condition: 'referrals:5' },
    { id: 'referrals_10', name: 'Community Leader', icon: '👑👥', reward: 2.5, condition: 'referrals:10' },
    { id: 'upgrades_1', name: 'First Upgrade', icon: '⚡', reward: 0.3, condition: 'upgrades:1' },
    { id: 'upgrades_3', name: 'Tech Enthusiast', icon: '⚡⚡', reward: 0.8, condition: 'upgrades:3' },
    { id: 'upgrades_5', name: 'Tech Lord', icon: '⚡⚡⚡', reward: 1.5, condition: 'upgrades:5' },
    { id: 'earnings_5', name: 'Crypto Starter', icon: '💎', reward: 0.5, condition: 'earnings:5' },
    { id: 'earnings_25', name: 'Crypto Trader', icon: '💎💎', reward: 1.5, condition: 'earnings:25' },
    { id: 'earnings_100', name: 'Crypto Whale', icon: '🐋', reward: 3.0, condition: 'earnings:100' }
];

// ============================================
// 4. INITIALIZE EXTERNAL SERVICES
// ============================================

// Telegram WebApp
let tg = null;
try {
    tg = window.Telegram?.WebApp;
    if (tg) {
        tg.ready();
        tg.expand();
        tg.setHeaderColor('#0a0b0e');
        tg.setBackgroundColor('#0a0b0e');
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
// 5. USER DATA STATE
// ============================================
const UserState = {
    // Core data
    uid: null,
    username: 'Crypto Miner',
    firstName: 'Miner',
    balance: 0,
    totalEarned: 0,
    
    // Mining data
    activeMachine: 'm1',
    machineExpiry: Infinity,
    lastClaim: Date.now(),
    claims: 0,
    streak: 0,
    lastClaimDate: new Date().toDateString(),
    upgrades: 0,
    
    // Referral data
    referrals: [],
    refEarnings: 0,
    referralCode: null,
    referredBy: null,
    
    // Wallet data
    pendingWithdrawals: [],
    withdrawalHistory: [],
    achievements: [],
    
    // System
    isInitialized: false,
    lastSaveTime: Date.now(),
    
    // Admin
    isAdmin: false
};

// ============================================
// 6. CACHE MANAGER
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
    
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch {
            return false;
        }
    },
    
    remove(key) {
        localStorage.removeItem(key);
    },
    
    getUserKey() {
        return UserState.uid ? `user_${UserState.uid}` : null;
    },
    
    saveUser() {
        const key = this.getUserKey();
        if (key) {
            this.set(key, {
                ...UserState,
                lastSaveTime: Date.now()
            });
        }
    },
    
    loadUser() {
        const key = this.getUserKey();
        if (key) {
            const cached = this.get(key);
            if (cached) {
                Object.assign(UserState, cached);
                return true;
            }
        }
        return false;
    }
};

// ============================================
// 7. UTILITY FUNCTIONS
// ============================================
const Utils = {
    // Time formatting
    formatTime(ms) {
        if (ms <= 0) return '00:00:00';
        const seconds = Math.floor(ms / 1000);
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    },
    
    formatRelativeTime(timestamp) {
        const diff = Date.now() - timestamp;
        if (diff < 60000) return 'just now';
        if (diff < 3600000) return `${Math.floor(diff / 60000)} min ago`;
        if (diff < 86400000) return `${Math.floor(diff / 3600000)} hours ago`;
        return `${Math.floor(diff / 86400000)} days ago`;
    },
    
    // Number formatting
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
    
    // Address formatting
    formatAddress(address) {
        if (!address || address.length < 10) return address;
        return address.slice(0, 6) + '...' + address.slice(-4);
    },
    
    isValidAddress(address) {
        return CONFIG.TON.WALLET_REGEX.test(address);
    },
    
    // Streak management
    updateStreak() {
        const today = new Date().toDateString();
        const lastDate = UserState.lastClaimDate;
        
        if (lastDate === today) return UserState.streak;
        
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        UserState.streak = (lastDate === yesterday) ? UserState.streak + 1 : 1;
        UserState.lastClaimDate = today;
        
        return UserState.streak;
    },
    
    getStreakBonus() {
        if (UserState.streak >= 30) return CONFIG.ECONOMY.STREAK_BONUS[30];
        if (UserState.streak >= 7) return CONFIG.ECONOMY.STREAK_BONUS[7];
        if (UserState.streak >= 3) return CONFIG.ECONOMY.STREAK_BONUS[3];
        return 1.0;
    },
    
    // Generate referral code
    generateReferralCode(uid) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const random = Array.from({ length: 6 }, () => 
            chars.charAt(Math.floor(Math.random() * chars.length))
        ).join('');
        return `${uid.slice(-4)}${random}`.toUpperCase();
    },
    
    // Get active machine
    getActiveMachine() {
        return MACHINES.find(m => m.id === UserState.activeMachine) || MACHINES[0];
    },
    
    // Check if machine is expired
    isMachineExpired() {
        if (UserState.activeMachine === 'm1') return false;
        return UserState.machineExpiry < Date.now();
    },
    
    // Calculate time until next claim
    getTimeUntilNextClaim() {
        const machine = this.getActiveMachine();
        const elapsed = Date.now() - UserState.lastClaim;
        return Math.max(0, machine.interval - elapsed);
    },
    
    // Calculate claim progress
    getClaimProgress() {
        const machine = this.getActiveMachine();
        const elapsed = Date.now() - UserState.lastClaim;
        return Math.min((elapsed / machine.interval) * 100, 100);
    },
    
    // Calculate TON to USD
    tonToUsd(ton) {
        return ton * 1.32;
    }
};

// ============================================
// 8. NOTIFICATION MANAGER
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
        
        setTimeout(() => {
            el.style.display = 'none';
        }, duration);
    },
    
    success(msg) { this.show(msg, 'success'); },
    error(msg) { this.show(msg, 'error'); },
    warning(msg) { this.show(msg, 'warning'); },
    info(msg) { this.show(msg, 'info'); }
};

// ============================================
// 9. EFFECTS MANAGER
// ============================================
const Effects = {
    celebrate() {
        const container = document.getElementById('app');
        if (!container) return;
        
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const el = document.createElement('div');
                el.className = 'firework';
                el.style.left = Math.random() * 100 + '%';
                el.style.top = Math.random() * 100 + '%';
                el.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
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
    
    pulse(element) {
        if (!element) return;
        element.classList.add('pulse');
        setTimeout(() => element.classList.remove('pulse'), 1000);
    }
};

// ============================================
// 10. TON CONNECT MANAGER
// ============================================
const TonManager = {
    async init() {
        if (typeof TON_CONNECT_UI === 'undefined') {
            console.warn('TON Connect UI not available');
            return;
        }
        
        try {
            tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
                manifestUrl: 'https://ton-mining-pro.com/tonconnect-manifest.json',
                buttonRootId: 'ton-connect-button'
            });
            
            tonConnectUI.onStatusChange(this.onWalletChange.bind(this));
            console.log('✅ TON Connect initialized');
        } catch (e) {
            console.error('❌ TON Connect error:', e);
        }
    },
    
    onWalletChange(wallet) {
        tonWallet = wallet;
        
        if (wallet) {
            const address = wallet.account.address;
            Notify.success(`Wallet connected: ${Utils.formatAddress(address)}`);
            this.updateWalletUI();
        } else {
            this.updateWalletUI();
        }
    },
    
    updateWalletUI() {
        const statusEl = document.getElementById('wallet-connection-status');
        const infoEl = document.getElementById('connected-wallet-info');
        const btn = document.getElementById('confirm-payment-btn');
        
        if (tonWallet) {
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
            }
            
            if (btn) btn.disabled = false;
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
        }
    },
    
    async pay(amount, machineId) {
        if (!tonWallet) {
            Notify.error('Please connect your wallet first');
            return false;
        }
        
        try {
            const transaction = {
                validUntil: Date.now() + 600000,
                messages: [{
                    address: CONFIG.TON.WALLET,
                    amount: (amount * 1e9).toString()
                }]
            };
            
            const result = await tonConnectUI.sendTransaction(transaction);
            Notify.info('Transaction sent. Waiting for confirmation...');
            
            // Start monitoring
            PaymentManager.startMonitoring(result.boc, machineId);
            
            return true;
        } catch (e) {
            Notify.error('Payment failed: ' + e.message);
            return false;
        }
    }
};

// ============================================
// 11. MINING MANAGER
// ============================================
const MiningManager = {
    timer: null,
    
    start() {
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => this.update(), 1000);
        this.update();
    },
    
    update() {
        const machine = Utils.getActiveMachine();
        const progress = Utils.getClaimProgress();
        const timeLeft = Utils.getTimeUntilNextClaim();
        
        // Update UI
        const progressBar = document.getElementById('mining-progress');
        const timerEl = document.getElementById('mining-timer');
        const claimBtn = document.getElementById('claim-btn');
        const hashRateEl = document.getElementById('hash-rate');
        const activeMinerEl = document.getElementById('active-miner');
        
        if (progressBar) progressBar.style.width = progress + '%';
        
        if (progress >= 100) {
            if (timerEl) timerEl.textContent = 'READY';
            if (claimBtn) {
                claimBtn.disabled = false;
                claimBtn.classList.add('pulse');
            }
            
            if (progress >= 90) {
                Effects.shake(document.querySelector('.miner-3d'));
            }
        } else {
            if (timerEl) timerEl.textContent = Utils.formatTime(timeLeft);
            if (claimBtn) {
                claimBtn.disabled = true;
                claimBtn.classList.remove('pulse');
            }
        }
        
        if (hashRateEl) hashRateEl.textContent = machine.hashrate;
        if (activeMinerEl) activeMinerEl.textContent = machine.name;
        
        // Update next reward
        const nextRewardEl = document.getElementById('next-reward');
        if (nextRewardEl) {
            nextRewardEl.textContent = Utils.formatTON(machine.yield) + ' TON';
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
        
        // Update balance
        UserState.balance += reward;
        UserState.totalEarned += reward;
        UserState.lastClaim = Date.now();
        UserState.claims++;
        
        // Save
        await this.saveToFirebase();
        Cache.saveUser();
        
        // Update UI
        UI.updateAll();
        
        // Effects
        Notify.success(`Claimed ${Utils.formatTON(reward)} TON!`);
        Effects.celebrate();
        
        // Check achievements
        Achievements.check();
    },
    
    async activateMachine(machineId) {
        const machine = MACHINES.find(m => m.id === machineId);
        if (!machine) return false;
        
        UserState.activeMachine = machineId;
        if (machine.duration !== Infinity) {
            UserState.machineExpiry = Date.now() + machine.duration;
        }
        UserState.lastClaim = Date.now();
        
        if (machineId !== 'm1') {
            UserState.upgrades++;
        }
        
        await this.saveToFirebase();
        Cache.saveUser();
        
        UI.updateAll();
        Notify.success('Machine activated!');
        
        return true;
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
    }
};

// ============================================
// 12. PAYMENT MANAGER
// ============================================
const PaymentManager = {
    currentMachine: null,
    checkInterval: null,
    
    openModal(machine) {
        this.currentMachine = machine;
        
        // Set machine info
        document.getElementById('payment-machine-image').src = machine.image;
        document.getElementById('payment-machine-name').textContent = machine.name;
        document.getElementById('payment-machine-yield').textContent = machine.yield + ' TON';
        
        const days = Math.floor(machine.duration / (24 * 3600000));
        document.getElementById('payment-machine-duration').textContent = 
            machine.duration === Infinity ? 'Permanent' : days + ' days';
        
        document.getElementById('payment-price').textContent = machine.price + ' TON';
        document.getElementById('payment-total').textContent = machine.price + ' TON';
        
        // Show modal
        document.getElementById('payment-modal').style.display = 'flex';
        
        // Update wallet UI
        TonManager.updateWalletUI();
    },
    
    closeModal() {
        document.getElementById('payment-modal').style.display = 'none';
        this.stopMonitoring();
        this.currentMachine = null;
    },
    
    async confirmPayment() {
        if (!this.currentMachine) return;
        
        const success = await TonManager.pay(this.currentMachine.price, this.currentMachine.id);
        if (success) {
            this.closeModal();
        }
    },
    
    startMonitoring(txHash, machineId) {
        let attempts = 0;
        
        this.checkInterval = setInterval(async () => {
            attempts++;
            
            try {
                const response = await fetch(
                    `${CONFIG.TON.CENTER_API}getTransactions?address=${CONFIG.TON.WALLET}&limit=10&api_key=${CONFIG.TON.API_KEY}`
                );
                const data = await response.json();
                
                if (data.ok && data.result) {
                    for (const tx of data.result) {
                        if (tx.transaction_id?.hash === txHash) {
                            clearInterval(this.checkInterval);
                            await MiningManager.activateMachine(machineId);
                            Notify.success('Payment confirmed! Machine activated.');
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
                Notify.error('Payment confirmation timeout');
            }
        }, CONFIG.TON.TX_CHECK_INTERVAL);
    },
    
    stopMonitoring() {
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
            this.checkInterval = null;
        }
    }
};

// ============================================
// 13. WITHDRAWAL MANAGER
// ============================================
const WithdrawManager = {
    openModal() {
        document.getElementById('withdraw-available').textContent = 
            Utils.formatTON(UserState.balance) + ' TON';
        document.getElementById('withdraw-modal').style.display = 'flex';
    },
    
    closeModal() {
        document.getElementById('withdraw-modal').style.display = 'none';
    },
    
    async request() {
        const amount = Utils.parseTON(document.getElementById('withdraw-amount').value);
        const address = document.getElementById('withdraw-address').value.trim();
        
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
        
        const request = {
            id: 'wd_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
            userId: UserState.uid,
            username: UserState.username,
            amount,
            address,
            status: 'pending',
            timestamp: Date.now()
        };
        
        UserState.pendingWithdrawals.push(request);
        UserState.balance -= amount;
        
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
                    pendingWithdrawals: UserState.pendingWithdrawals
                });
            } catch (e) {
                console.error('Firebase error:', e);
            }
        }
        
        this.closeModal();
        Notify.success(`Withdrawal request submitted for ${amount} TON`);
        UI.updateAll();
    }
};

// ============================================
// 14. REFERRAL MANAGER
// ============================================
const ReferralManager = {
    getLink() {
        if (!UserState.uid) return 'https://t.me/TONMininginstantbot/Ton';
        return `https://t.me/TONMininginstantbot/Ton?startapp=${UserState.uid}`;
    },
    
    copyLink() {
        const link = this.getLink();
        navigator.clipboard.writeText(link);
        Notify.success('Referral link copied!');
    },
    
    async processReferral(code) {
        if (!code || code === UserState.referralCode || UserState.referredBy) return;
        
        try {
            if (db) {
                const snapshot = await db.collection('users')
                    .where('referralCode', '==', code)
                    .get();
                
                if (!snapshot.empty) {
                    const referrer = snapshot.docs[0];
                    
                    if (referrer.id === UserState.uid) return;
                    
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
                    
                    Notify.success(`Referral bonus: +${CONFIG.ECONOMY.REFERRAL_BONUS} TON`);
                }
            }
        } catch (e) {
            console.error('Referral error:', e);
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
            const node = document.createElement('div');
            node.className = 'tree-node';
            node.innerHTML = `<i class="fas fa-user"></i> ${refId.slice(0, 8)}...`;
            container.appendChild(node);
        }
    }
};

// ============================================
// 15. ACHIEVEMENTS MANAGER
// ============================================
const Achievements = {
    check() {
        const unlocked = [];
        
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
            }
            
            if (completed) {
                unlocked.push(ach);
                UserState.achievements.push(ach.id);
                UserState.balance += ach.reward;
                
                Notify.success(`🏆 Achievement: ${ach.name} +${ach.reward} TON`);
                Effects.celebrate();
            }
        });
        
        if (unlocked.length > 0) {
            Cache.saveUser();
            UI.updateAchievements();
        }
    },
    
    render() {
        const container = document.getElementById('achievements-grid');
        if (!container) return;
        
        container.innerHTML = '';
        
        ACHIEVEMENTS.slice(0, 6).forEach(ach => {
            const unlocked = UserState.achievements.includes(ach.id);
            
            container.innerHTML += `
                <div class="achievement-item ${unlocked ? 'unlocked' : ''}">
                    <span class="achievement-icon">${ach.icon}</span>
                    <span class="achievement-name">${ach.name}</span>
                </div>
            `;
        });
    }
};

// ============================================
// 16. ADMIN PANEL
// ============================================
const Admin = {
    isAdmin: false,
    clickCount: 0,
    lastClick: 0,
    
    init() {
        // Admin access via 5 clicks on avatar
        const avatar = document.querySelector('.user-avatar');
        if (avatar) {
            avatar.addEventListener('click', () => this.handleClick());
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
                container.innerHTML += `
                    <div class="request-item">
                        <div class="request-user">@${req.username}</div>
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
                approvedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            
            Notify.success(`Approved ${amount} TON`);
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
                balance: firebase.firestore.FieldValue.increment(amount)
            });
            
            await db.collection('withdrawals').doc(id).update({
                status: 'rejected',
                rejectedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            
            Notify.error('Withdrawal rejected');
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
            
            Notify.success(`Added ${amount} TON to user`);
            document.getElementById('admin-user-id').value = '';
            document.getElementById('admin-amount').value = '';
        } catch (e) {
            Notify.error('User not found');
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
                    <p><strong>Username:</strong> ${data.username}</p>
                    <p><strong>Balance:</strong> ${data.balance} TON</p>
                    <p><strong>Referrals:</strong> ${data.referrals?.length || 0}</p>
                    <p><strong>Joined:</strong> ${new Date(data.createdAt).toLocaleDateString()}</p>
                </div>
            `;
            infoEl.style.display = 'block';
        } catch (e) {
            Notify.error('Search error');
        }
    }
};

// ============================================
// 17. UI MANAGER
// ============================================
const UI = {
    init() {
        this.cacheElements();
        this.setupEventListeners();
    },
    
    elements: {},
    
    cacheElements() {
        const ids = [
            'user-name', 'header-balance', 'wallet-balance', 'wallet-balance-usd',
            'mining-progress', 'mining-timer', 'claim-btn', 'current-rate',
            'active-miner', 'next-reward', 'hash-rate',
            'referral-count', 'referral-earnings', 'referral-link',
            'withdraw-available', 'achievements-grid', 'machines-grid',
            'machines-showcase', 'tree-branches'
        ];
        
        ids.forEach(id => {
            this.elements[id] = document.getElementById(id);
        });
    },
    
    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
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
    },
    
    switchPage(pageId) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        
        document.getElementById(pageId).classList.add('active');
        document.querySelector(`[data-page="${pageId}"]`).classList.add('active');
        
        // Load page-specific data
        if (pageId === 'market-page') this.renderMarket();
        if (pageId === 'referral-page') ReferralManager.loadTree();
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
                    <div class="machine-glow" style="--color: ${machine.color}"></div>
                    ${isActive ? '<div class="machine-badge">ACTIVE</div>' : ''}
                    <div class="machine-header">
                        <div class="machine-icon" style="color: ${machine.color}">
                            <i class="fas ${machine.icon}"></i>
                        </div>
                        <div class="machine-name">${machine.name}</div>
                    </div>
                    <div class="machine-price ${machine.price === 0 ? 'free' : ''}">
                        ${machine.price === 0 ? 'FREE' : machine.price + ' TON'}
                    </div>
                    <div class="machine-stats">
                        <span><i class="fas fa-bolt"></i> ${machine.yield} TON</span>
                        <span><i class="fas fa-clock"></i> ${machine.interval/3600000}h</span>
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
            
            showcase.innerHTML += `
                <div class="showcase-card">
                    <img src="${machine.image}" alt="${machine.name}" class="showcase-image">
                    <div class="showcase-content">
                        <h3>${machine.name}</h3>
                        <p>${machine.description}</p>
                        <div class="showcase-specs">
                            <span class="spec"><i class="fas fa-microchip"></i> ${machine.hashrate}</span>
                            <span class="spec"><i class="fas fa-bolt"></i> ${machine.yield} TON</span>
                            <span class="spec"><i class="fas fa-clock"></i> ${machine.interval/3600000}h</span>
                        </div>
                        <div class="showcase-footer">
                            <div class="showcase-price">
                                ${machine.price} TON
                                <small>≈ $${(machine.price * 1.32).toFixed(2)}</small>
                            </div>
                            <button class="rent-button" onclick="UI.selectMachine('${machine.id}')">
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
            const machine = MACHINES.find(m => m.name === card.querySelector('h3').textContent);
            if (filter === 'all' || machine.filter === filter) {
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
        } else {
            html.dir = 'rtl';
            btn.innerHTML = '<i class="fas fa-globe"></i>';
        }
        
        Notify.success('Language changed');
    },
    
    updateLoading(progress) {
        const bar = document.getElementById('loading-progress-bar');
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
        document.getElementById(modalId).style.display = 'none';
        if (modalId === 'payment-modal') PaymentManager.stopMonitoring();
    }
};

// ============================================
// 18. USER AUTHENTICATION & INIT
// ============================================
const Auth = {
    async init() {
        UI.updateLoading(20);
        
        await this.initTelegram();
        UI.updateLoading(40);
        
        await this.initUser();
        UI.updateLoading(60);
        
        await this.loadFromFirebase();
        UI.updateLoading(80);
        
        await this.initTon();
        UI.updateLoading(90);
        
        this.finalize();
        UI.updateLoading(100);
    },
    
    initTelegram() {
        if (tg?.initDataUnsafe?.user) {
            const tgu = tg.initDataUnsafe.user;
            UserState.uid = tgu.id.toString();
            UserState.username = tgu.username ? `@${tgu.username}` : tgu.first_name;
            UserState.firstName = tgu.first_name;
            
            // Check referral
            const startParam = tg.initDataUnsafe.start_param;
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
    
    async initUser() {
        // Load from cache
        Cache.loadUser();
        
        // Check if admin
        UserState.isAdmin = UserState.uid === CONFIG.TON.ADMIN_ID;
        
        // Process referral if any
        if (UserState.referredBy) {
            await ReferralManager.processReferral(UserState.referredBy);
        }
    },
    
    async loadFromFirebase() {
        if (!db || !UserState.uid) return;
        
        try {
            const doc = await db.collection('users').doc(UserState.uid).get();
            
            if (doc.exists) {
                const data = doc.data();
                Object.assign(UserState, data);
            } else {
                // Create new user
                await db.collection('users').doc(UserState.uid).set({
                    uid: UserState.uid,
                    username: UserState.username,
                    balance: 0,
                    totalEarned: 0,
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
            console.error('Firebase load error:', e);
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
        
        // Update UI
        UI.init();
        UI.updateAll();
        UI.renderMarket();
        
        // Hide loading
        setTimeout(() => UI.hideLoading(), 500);
        
        console.log('✅ App initialized', UserState);
        
        // Welcome message
        setTimeout(() => {
            Notify.success(`Welcome back, ${UserState.username}!`);
        }, 1000);
    }
};

// ============================================
// 19. GLOBAL EXPORTS
// ============================================
window.UI = UI;
window.Mining = MiningManager;
window.Payment = PaymentManager;
window.Withdraw = WithdrawManager;
window.Referral = ReferralManager;
window.Admin = Admin;
window.closeModal = UI.closeModal.bind(UI);

// ============================================
// 20. START APPLICATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    Auth.init();
});

// Auto-save every minute
setInterval(() => {
    if (UserState.isInitialized) {
        Cache.saveUser();
    }
}, 60000);

// ============================================
// END OF FILE - TON MINING PRO v3.0
// TOTAL LINES: ~3,500
// ============================================
