// ============================================
// TON Mining PRO - COMPLETE VERSION 2.0
// Fully compatible with your HTML structure
// All features: Mining, Rentals, Withdrawals, Admin Panel, Referrals
// ============================================

// ============================================
// 1. TELEGRAM WEBAPP INITIALIZATION
// ============================================
let tg = null;
try {
    tg = window.Telegram.WebApp;
    if (tg) {
        tg.ready();
        tg.expand();
        tg.setHeaderColor('#030405');
        tg.setBackgroundColor('#030405');
        console.log("✅ Telegram WebApp initialized");
    }
} catch (e) {
    console.log("⚠️ Not in Telegram environment");
}

// ============================================
// 2. FIREBASE CONFIGURATION
// ============================================
const firebaseConfig = {
    apiKey: "AIzaSyD39Q7g7A2MpuuN42eWtr_bOPt-_1tvbhI",
    authDomain: "ton-71a00.firebaseapp.com",
    projectId: "ton-71a00",
    storageBucket: "ton-71a00.firebasestorage.app",
    messagingSenderId: "97952285427",
    appId: "1:97952285427:web:e7704e52fd108bdabded86"
};

// Initialize Firebase
let firebaseApp, db;
if (typeof firebase !== 'undefined') {
    try {
        firebaseApp = firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
        console.log("✅ Firebase initialized");
    } catch (error) {
        console.error("❌ Firebase error:", error);
    }
}

// ============================================
// 3. TON CONFIGURATION
// ============================================
const TON_CONFIG = {
    MINING_WALLET: "UQD9mkiazYKara0KxRbRBIlCMnqtLmjS3aMlj2iSCrnIY0eH",
    TON_CENTER_API: "https://toncenter.com/api/v2/",
    TON_API_KEY: "e53929324c8cabe222c3005cd3518fe1f3c7861aa6b02442d05fb630ab31fa78",
    ADMIN_ID: "1653918641",
    MIN_WITHDRAW: 1.0,
    WALLET_REGEX: /^(UQ|EQ)[a-zA-Z0-9\-_]{46,48}$/
};

// ============================================
// 4. MINING MACHINES
// ============================================
const MINING_MACHINES = [
    { 
        id: 'm1', 
        name: 'Free Miner', 
        nameAr: 'منجم مجاني',
        desc: 'Basic entry-level hardware. Start your mining journey!',
        descAr: 'جهاز مبتدئ. ابدأ رحلة التعدين!',
        icon: '🆓', 
        price: 0, 
        duration: Infinity, 
        yield: 0.01, 
        interval: 4 * 3600000,
        power: '10 MH/s',
        color: '#808080',
        level: 1
    },
    { 
        id: 'm2', 
        name: 'Turbo v2', 
        nameAr: 'تربو v2',
        desc: 'High-speed ASIC miner. 3x faster!',
        descAr: 'جهاز عالي السرعة. أسرع بثلاث مرات!',
        icon: '⚡', 
        price: 1, 
        duration: 3 * 24 * 3600000, 
        yield: 0.2, 
        interval: 2.5 * 3600000,
        power: '50 MH/s',
        color: '#0088cc',
        level: 2
    },
    { 
        id: 'm3', 
        name: 'Turbo v3', 
        nameAr: 'تربو v3',
        desc: 'Next-gen cooling system. Maximum efficiency!',
        descAr: 'تبريد متطور. كفاءة قصوى!',
        icon: '🚀', 
        price: 2, 
        duration: 7 * 24 * 3600000, 
        yield: 0.35, 
        interval: 2 * 3600000,
        power: '120 MH/s',
        color: '#00f2ff',
        level: 3
    },
    { 
        id: 'm4', 
        name: 'ASIC Pro', 
        nameAr: 'ASIC برو',
        desc: 'Professional mining rig. Serious power!',
        descAr: 'جهاز احترافي. قوة هائلة!',
        icon: '💎', 
        price: 4, 
        duration: 14 * 24 * 3600000, 
        yield: 0.5, 
        interval: 3600000,
        power: '300 MH/s',
        color: '#bc13fe',
        level: 4
    },
    { 
        id: 'm5', 
        name: 'Quantum RIG', 
        nameAr: 'كوانتم ريج',
        desc: 'Quantum computing technology. The future!',
        descAr: 'تقنية كمومية. المستقبل!',
        icon: '👑', 
        price: 6, 
        duration: 30 * 24 * 3600000, 
        yield: 0.8, 
        interval: 45 * 60 * 1000,
        power: '800 MH/s',
        color: '#ffaa00',
        level: 5
    },
    { 
        id: 'm6', 
        name: 'Legendary', 
        nameAr: 'أسطوري',
        desc: 'The ultimate mining machine. Legendary status!',
        descAr: 'الجهاز الأقوى. مكانة أسطورية!',
        icon: '⭐', 
        price: 8, 
        duration: 45 * 24 * 3600000, 
        yield: 1.2, 
        interval: 30 * 60 * 1000,
        power: '2 GH/s',
        color: '#ff4444',
        level: 6
    }
];

// ============================================
// 5. USER DATA
// ============================================
let userData = {
    uid: null,
    balance: 0,
    referrals: [],
    refEarnings: 0,
    totalEarned: 0,
    username: 'username',
    firstName: 'User',
    referralCode: null,
    referredBy: null,
    isInitialized: false,
    lastSaveTime: 0,
    
    // Mining data
    activeMachine: 'm1',
    machineExpiry: Infinity,
    lastClaim: Date.now(),
    claims: 0,
    streak: 0,
    lastClaimDate: new Date().toDateString(),
    upgrades: 0,
    
    // Wallet
    pendingWithdrawals: [],
    withdrawalHistory: [],
    achievements: []
};

// ============================================
// 6. CACHE MANAGER
// ============================================
const CacheManager = {
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            if (!item) return null;
            return JSON.parse(item);
        } catch { return null; }
    },
    
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch { return false; }
    },
    
    remove: (key) => localStorage.removeItem(key)
};

// ============================================
// 7. UTILITY FUNCTIONS
// ============================================
const Utils = {
    formatTime: (ms) => {
        if (ms <= 0) return '00:00:00';
        const seconds = Math.floor(ms / 1000);
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    },
    
    formatTON: (amount) => amount.toFixed(4),
    
    parseTON: (str) => {
        const num = parseFloat(str);
        return isNaN(num) ? 0 : num;
    },
    
    formatAddress: (address) => {
        if (!address || address.length < 10) return address;
        return address.slice(0, 6) + '...' + address.slice(-4);
    },
    
    isValidAddress: (address) => {
        return TON_CONFIG.WALLET_REGEX.test(address);
    }
};

// ============================================
// 8. NOTIFICATION MANAGER
// ============================================
const NotificationManager = {
    show: (message, type = 'info') => {
        const notification = document.getElementById('notification');
        if (!notification) return;
        
        notification.textContent = message;
        notification.style.display = 'block';
        
        const colors = {
            success: 'linear-gradient(135deg, #00ff88, #0088cc)',
            error: 'linear-gradient(135deg, #ff4444, #ff8888)',
            info: 'linear-gradient(135deg, #0088cc, #bc13fe)'
        };
        
        notification.style.background = colors[type] || colors.info;
        
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }
};

// ============================================
// 9. EFFECTS MANAGER
// ============================================
const Effects = {
    celebrate: () => {
        const container = document.getElementById('app-container');
        if (!container) return;
        
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const fw = document.createElement('div');
                fw.className = 'firework';
                fw.style.left = Math.random() * 100 + '%';
                fw.style.top = Math.random() * 100 + '%';
                fw.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
                container.appendChild(fw);
                setTimeout(() => fw.remove(), 800);
            }, i * 50);
        }
    }
};

// ============================================
// 10. MINING MANAGER
// ============================================
const Mining = {
    getActiveMachine: () => {
        return MINING_MACHINES.find(m => m.id === userData.activeMachine) || MINING_MACHINES[0];
    },
    
    tick: () => {
        const machine = Mining.getActiveMachine();
        const elapsed = Date.now() - userData.lastClaim;
        const progress = Math.min((elapsed / machine.interval) * 100, 100);
        
        const progressBar = document.getElementById('mining-progress');
        const timerEl = document.getElementById('timer-display');
        const claimBtn = document.getElementById('claim-btn');
        const rateEl = document.getElementById('current-rate');
        const activeEl = document.getElementById('active-machine');
        
        if (progressBar) progressBar.style.width = progress + '%';
        
        if (progress >= 100) {
            if (timerEl) timerEl.textContent = 'READY';
            if (claimBtn) claimBtn.disabled = false;
            
            // Shake effect
            if (progress >= 90) {
                document.querySelector('.mining-3d')?.classList.add('shake-effect');
            }
        } else {
            if (timerEl) timerEl.textContent = Utils.formatTime(machine.interval - elapsed);
            if (claimBtn) claimBtn.disabled = true;
            document.querySelector('.mining-3d')?.classList.remove('shake-effect');
        }
        
        if (rateEl) rateEl.textContent = `${machine.yield} TON/${machine.interval/3600000}h`;
        if (activeEl) activeEl.textContent = machine.name;
    },
    
    claim: async () => {
        const machine = Mining.getActiveMachine();
        const elapsed = Date.now() - userData.lastClaim;
        
        if (elapsed < machine.interval) {
            NotificationManager.show('Not ready yet!', 'error');
            return;
        }
        
        const reward = machine.yield;
        userData.balance += reward;
        userData.totalEarned += reward;
        userData.lastClaim = Date.now();
        userData.claims++;
        
        // Update streak
        const today = new Date().toDateString();
        if (userData.lastClaimDate === today) {
            // Already claimed today
        } else if (userData.lastClaimDate === new Date(Date.now() - 86400000).toDateString()) {
            userData.streak++;
        } else {
            userData.streak = 1;
        }
        userData.lastClaimDate = today;
        
        // Save to localStorage
        CacheManager.set(`user_${userData.uid}`, userData);
        
        // Update UI
        UI.updateAll();
        
        NotificationManager.show(`🎉 Claimed ${Utils.formatTON(reward)} TON!`, 'success');
        Effects.celebrate();
        
        // Save to Firebase if available
        if (db && userData.uid) {
            try {
                await db.collection('users').doc(userData.uid).update({
                    balance: userData.balance,
                    totalEarned: userData.totalEarned,
                    lastClaim: userData.lastClaim,
                    claims: userData.claims,
                    streak: userData.streak,
                    lastClaimDate: userData.lastClaimDate
                });
            } catch (e) {
                console.error('Firebase update error:', e);
            }
        }
    },
    
    activateMachine: async (machineId) => {
        const machine = MINING_MACHINES.find(m => m.id === machineId);
        if (!machine) return false;
        
        userData.activeMachine = machineId;
        if (machine.duration !== Infinity) {
            userData.machineExpiry = Date.now() + machine.duration;
        }
        userData.lastClaim = Date.now();
        
        if (machineId !== 'm1') {
            userData.upgrades++;
        }
        
        CacheManager.set(`user_${userData.uid}`, userData);
        UI.updateMachines();
        NotificationManager.show('Machine activated!', 'success');
        
        return true;
    }
};

// ============================================
// 11. PAYMENT MANAGER
// ============================================
const Payment = {
    pendingMachine: null,
    checkInterval: null,
    
    openModal: (machine) => {
        Payment.pendingMachine = machine;
        
        const modal = document.getElementById('rent-modal');
        const nameEl = document.getElementById('rent-machine-name');
        const priceEl = document.getElementById('rent-price');
        const durationEl = document.getElementById('rent-duration');
        const addrEl = document.getElementById('mining-wallet-address');
        const fullAddrEl = document.getElementById('full-address');
        
        if (nameEl) nameEl.textContent = machine.name;
        if (priceEl) priceEl.textContent = machine.price + ' TON';
        
        const days = Math.floor(machine.duration / (24 * 3600000));
        if (durationEl) durationEl.textContent = machine.duration === Infinity ? 'Permanent' : days + ' days';
        
        if (addrEl) addrEl.textContent = Utils.formatAddress(TON_CONFIG.MINING_WALLET);
        if (fullAddrEl) fullAddrEl.textContent = TON_CONFIG.MINING_WALLET;
        
        modal.style.display = 'flex';
    },
    
    closeModal: () => {
        document.getElementById('rent-modal').style.display = 'none';
        if (Payment.checkInterval) {
            clearInterval(Payment.checkInterval);
            Payment.checkInterval = null;
        }
        Payment.pendingMachine = null;
    },
    
    copyAddress: () => {
        navigator.clipboard.writeText(TON_CONFIG.MINING_WALLET);
        NotificationManager.show('Address copied!', 'success');
    },
    
    startMonitoring: () => {
        if (!Payment.pendingMachine) return;
        
        NotificationManager.show('Waiting for payment...', 'info');
        Payment.closeModal();
        
        let attempts = 0;
        Payment.checkInterval = setInterval(async () => {
            attempts++;
            
            try {
                const response = await fetch(
                    `${TON_CONFIG.TON_CENTER_API}getTransactions?address=${TON_CONFIG.MINING_WALLET}&limit=10&api_key=${TON_CONFIG.TON_API_KEY}`
                );
                const data = await response.json();
                
                if (data.ok && data.result) {
                    for (const tx of data.result) {
                        const value = parseFloat(tx.in_msg?.value) || 0;
                        if (Math.abs(value - Payment.pendingMachine.price) < 0.01) {
                            clearInterval(Payment.checkInterval);
                            await Mining.activateMachine(Payment.pendingMachine.id);
                            NotificationManager.show('Payment confirmed!', 'success');
                            Effects.celebrate();
                            Payment.pendingMachine = null;
                            return;
                        }
                    }
                }
            } catch (e) {
                console.error('Check error:', e);
            }
            
            if (attempts >= 20) {
                clearInterval(Payment.checkInterval);
                NotificationManager.show('Payment timeout', 'error');
                Payment.pendingMachine = null;
            }
        }, 15000);
    }
};

// ============================================
// 12. WITHDRAWAL MANAGER
// ============================================
const Withdraw = {
    openModal: () => {
        document.getElementById('withdraw-modal').style.display = 'flex';
    },
    
    closeModal: () => {
        document.getElementById('withdraw-modal').style.display = 'none';
    },
    
    request: async () => {
        const amount = Utils.parseTON(document.getElementById('withdraw-amount').value);
        const address = document.getElementById('withdraw-address').value.trim();
        
        if (amount < TON_CONFIG.MIN_WITHDRAW) {
            NotificationManager.show('Minimum 1 TON', 'error');
            return;
        }
        
        if (amount > userData.balance) {
            NotificationManager.show('Insufficient balance', 'error');
            return;
        }
        
        if (!Utils.isValidAddress(address)) {
            NotificationManager.show('Invalid TON address', 'error');
            return;
        }
        
        // Create withdrawal request
        const withdrawal = {
            userId: userData.uid,
            username: userData.username,
            amount: amount,
            address: address,
            status: 'pending',
            timestamp: Date.now()
        };
        
        userData.pendingWithdrawals.push(withdrawal);
        userData.balance -= amount;
        
        CacheManager.set(`user_${userData.uid}`, userData);
        UI.updateAll();
        
        // Save to Firebase
        if (db) {
            try {
                await db.collection('withdrawals').add({
                    ...withdrawal,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
                
                await db.collection('users').doc(userData.uid).update({
                    balance: userData.balance,
                    pendingWithdrawals: userData.pendingWithdrawals
                });
            } catch (e) {
                console.error('Firebase error:', e);
            }
        }
        
        Withdraw.closeModal();
        NotificationManager.show('Withdrawal requested!', 'success');
    }
};

// ============================================
// 13. REFERRAL MANAGER
// ============================================
const Referral = {
    getLink: () => {
        return userData.uid ? 
            `https://t.me/TONMininginstantbot/Ton?startapp=${userData.uid}` : 
            'https://t.me/TONMininginstantbot/Ton';
    },
    
    copyLink: () => {
        const link = Referral.getLink();
        navigator.clipboard.writeText(link);
        NotificationManager.show('Link copied!', 'success');
    },
    
    loadTree: async () => {
        const container = document.getElementById('tree-branches');
        if (!container || !userData.referrals || userData.referrals.length === 0) {
            if (container) container.innerHTML = '<div class="tree-empty">No referrals yet</div>';
            return;
        }
        
        container.innerHTML = '';
        for (const refId of userData.referrals.slice(0, 10)) {
            const node = document.createElement('div');
            node.className = 'tree-node';
            node.textContent = `👤 ${refId.slice(0, 8)}...`;
            container.appendChild(node);
        }
    }
};

// ============================================
// 14. ADMIN PANEL
// ============================================
const Admin = {
    isAdmin: false,
    
    checkAccess: () => {
        return userData.uid === TON_CONFIG.ADMIN_ID;
    },
    
    loadRequests: async () => {
        if (!Admin.checkAccess() || !db) return;
        
        try {
            const snapshot = await db.collection('withdrawals')
                .where('status', '==', 'pending')
                .orderBy('timestamp', 'desc')
                .limit(20)
                .get();
            
            const container = document.getElementById('withdraw-requests-list');
            if (!container) return;
            
            container.innerHTML = '';
            
            if (snapshot.empty) {
                container.innerHTML = '<div class="empty-pending">No pending requests</div>';
                return;
            }
            
            snapshot.forEach(doc => {
                const req = doc.data();
                container.innerHTML += `
                    <div class="request-item">
                        <div class="request-user">@${req.username}</div>
                        <div class="request-amount">${req.amount} TON</div>
                        <div class="request-address">${Utils.formatAddress(req.address)}</div>
                        <div class="request-actions">
                            <button class="approve-btn" onclick="Admin.approve('${doc.id}', ${req.amount}, '${req.address}')">✓</button>
                            <button class="reject-btn" onclick="Admin.reject('${doc.id}')">✗</button>
                        </div>
                    </div>
                `;
            });
            
            document.getElementById('admin-modal').style.display = 'flex';
            
        } catch (error) {
            console.error('Load error:', error);
        }
    },
    
    approve: async (id, amount, address) => {
        if (!Admin.checkAccess() || !db) return;
        
        try {
            await db.collection('withdrawals').doc(id).update({
                status: 'approved',
                approvedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            
            NotificationManager.show(`Approved ${amount} TON`, 'success');
            Admin.loadRequests();
            
        } catch (error) {
            console.error('Approve error:', error);
        }
    },
    
    reject: async (id) => {
        if (!Admin.checkAccess() || !db) return;
        
        try {
            const doc = await db.collection('withdrawals').doc(id).get();
            const data = doc.data();
            
            // Return funds to user
            await db.collection('users').doc(data.userId).update({
                balance: firebase.firestore.FieldValue.increment(data.amount)
            });
            
            await db.collection('withdrawals').doc(id).update({
                status: 'rejected',
                rejectedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            
            NotificationManager.show('Withdrawal rejected', 'error');
            Admin.loadRequests();
            
        } catch (error) {
            console.error('Reject error:', error);
        }
    }
};

// ============================================
// 15. UI MANAGER
// ============================================
const UI = {
    updateAll: () => {
        UI.updateBalance();
        UI.updateUserInfo();
        UI.updateMachines();
        UI.updateReferralStats();
        UI.updateAchievements();
        Mining.tick(); // Update timer
    },
    
    updateBalance: () => {
        const balanceEl = document.getElementById('total-balance');
        const walletEl = document.getElementById('wallet-balance');
        
        if (balanceEl) balanceEl.textContent = Utils.formatTON(userData.balance);
        if (walletEl) walletEl.textContent = Utils.formatTON(userData.balance) + ' TON';
    },
    
    updateUserInfo: () => {
        const nameEl = document.getElementById('user-name');
        if (nameEl) nameEl.textContent = '@' + userData.username;
    },
    
    updateMachines: () => {
        const container = document.getElementById('machines-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        MINING_MACHINES.forEach(machine => {
            const isActive = userData.activeMachine === machine.id;
            const isExpired = machine.id !== 'm1' && userData.machineExpiry < Date.now();
            
            const card = document.createElement('div');
            card.className = `machine-card ${isActive ? 'active' : ''} ${isExpired ? 'expired' : ''}`;
            card.setAttribute('onclick', `UI.selectMachine('${machine.id}')`);
            
            card.innerHTML = `
                <div class="machine-glow" style="background: radial-gradient(circle at 50% 0%, ${machine.color}40, transparent);"></div>
                ${isActive ? '<div class="machine-badge">ACTIVE</div>' : ''}
                <div class="machine-header">
                    <span class="machine-icon" style="color: ${machine.color}">${machine.icon}</span>
                    <span class="machine-name">${machine.name}</span>
                </div>
                <div class="machine-price ${machine.price === 0 ? 'free' : ''}">
                    ${machine.price === 0 ? 'FREE' : machine.price + ' TON'}
                </div>
                <div class="machine-stats">
                    <span>${machine.yield} TON</span>
                    <span>${machine.interval/3600000}h</span>
                </div>
            `;
            
            container.appendChild(card);
        });
    },
    
    selectMachine: (machineId) => {
        const machine = MINING_MACHINES.find(m => m.id === machineId);
        if (!machine) return;
        
        if (machine.price === 0) {
            Mining.activateMachine(machineId);
        } else {
            Payment.openModal(machine);
        }
    },
    
    updateReferralStats: () => {
        const countEl = document.getElementById('ref-count');
        const earnEl = document.getElementById('ref-earnings');
        const linkEl = document.getElementById('ref-link');
        
        if (countEl) countEl.textContent = userData.referrals?.length || 0;
        if (earnEl) earnEl.textContent = Utils.formatTON(userData.refEarnings || 0);
        if (linkEl) linkEl.value = Referral.getLink();
        
        Referral.loadTree();
    },
    
    updateAchievements: () => {
        const container = document.getElementById('achievements-container');
        if (!container) return;
        
        const achievements = [
            { icon: '🥇', name: 'First Blood', unlocked: userData.claims > 0 },
            { icon: '🔥', name: '3-Day Streak', unlocked: userData.streak >= 3 },
            { icon: '👥', name: '5 Friends', unlocked: (userData.referrals?.length || 0) >= 5 },
            { icon: '⚡', name: '3 Upgrades', unlocked: (userData.upgrades || 0) >= 3 },
            { icon: '🏆', name: '10 TON', unlocked: userData.totalEarned >= 10 }
        ];
        
        container.innerHTML = '';
        achievements.forEach(ach => {
            container.innerHTML += `
                <div class="achievement-item ${ach.unlocked ? 'unlocked' : 'locked'}">
                    <span class="achievement-icon">${ach.icon}</span>
                    <span class="achievement-name">${ach.name}</span>
                </div>
            `;
        });
    },
    
    toggleLanguage: () => {
        // Simple language toggle
        const currentDir = document.documentElement.dir;
        document.documentElement.dir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        document.querySelector('.lang-toggle').textContent = currentDir === 'rtl' ? '🇸🇦' : '🇬🇧';
        NotificationManager.show('Language changed', 'success');
    },
    
    closeModal: (modalId) => {
        document.getElementById(modalId).style.display = 'none';
        if (modalId === 'rent-modal') Payment.closeModal();
    },
    
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

// ============================================
// 16. AUTH & INITIALIZATION
// ============================================
async function initApp() {
    console.log('🚀 Initializing TON Mining PRO...');
    
    // Get Telegram user
    if (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) {
        const tgUser = tg.initDataUnsafe.user;
        userData.uid = tgUser.id.toString();
        userData.username = tgUser.username || tgUser.first_name || 'User';
        userData.firstName = tgUser.first_name || 'User';
    } else {
        // Fallback for testing
        userData.uid = 'test_' + Date.now();
        userData.username = 'TestUser';
    }
    
    // Generate referral code
    userData.referralCode = userData.uid.slice(-6).toUpperCase();
    
    // Check for referral in start param
    if (tg && tg.initDataUnsafe && tg.initDataUnsafe.start_param) {
        const refCode = tg.initDataUnsafe.start_param;
        if (refCode && refCode !== userData.uid) {
            userData.referredBy = refCode;
            userData.refEarnings += 0.1; // Bonus for being referred
        }
    }
    
    // Load from cache
    const cached = CacheManager.get(`user_${userData.uid}`);
    if (cached) {
        Object.assign(userData, cached);
    }
    
    // Load from Firebase
    if (db) {
        try {
            const userRef = db.collection('users').doc(userData.uid);
            const userSnap = await userRef.get();
            
            if (userSnap.exists) {
                const fbData = userSnap.data();
                Object.assign(userData, fbData);
            } else {
                await userRef.set({
                    uid: userData.uid,
                    username: userData.username,
                    balance: userData.balance,
                    totalEarned: userData.totalEarned,
                    referrals: userData.referrals,
                    refEarnings: userData.refEarnings,
                    activeMachine: userData.activeMachine,
                    machineExpiry: userData.machineExpiry,
                    lastClaim: userData.lastClaim,
                    claims: userData.claims,
                    streak: userData.streak,
                    lastClaimDate: userData.lastClaimDate,
                    upgrades: userData.upgrades,
                    achievements: userData.achievements,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            }
        } catch (e) {
            console.error('Firebase error:', e);
        }
    }
    
    // Update UI
    UI.updateAll();
    UI.hideLoading();
    
    // Start mining timer
    setInterval(() => Mining.tick(), 1000);
    
    // Admin check
    if (userData.uid === TON_CONFIG.ADMIN_ID) {
        Admin.isAdmin = true;
    }
    
    console.log('✅ App initialized', userData);
}

// ============================================
// 17. START APP
// ============================================
document.addEventListener('DOMContentLoaded', initApp);

// Save to cache periodically
setInterval(() => {
    if (userData.uid) {
        CacheManager.set(`user_${userData.uid}`, userData);
    }
}, 30000);

// ============================================
// 18. EXPORT TO WINDOW (for HTML onclick)
// ============================================
window.Mining = Mining;
window.Payment = Payment;
window.Withdraw = Withdraw;
window.Referral = Referral;
window.Admin = Admin;
window.UI = UI;
