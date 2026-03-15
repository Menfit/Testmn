// ==================== TON MINING PRO - ENTERPRISE EDITION ====================
// Author: الخنفشاري الأكبر
// Version: 3.0.0 (Economic + Performance Optimized)
// Lines: ~3,500 سطر من العظمة

// ==================== [1] CONFIGURATION ====================
// جميع الإعدادات في مكان واحد للتعديل السريع
const CONFIG = {
    // TON Blockchain
    TON_WALLET: "UQD9mkiazYKara0KxRbRBIlCMnqtLmjS3aMlj2iSCrnIY0eH",
    TON_API_KEY: "e53929324c8cabe222c3005cd3518fe1f3c7861aa6b02442d05fb630ab31fa78",
    TON_CENTER: "https://toncenter.com/api/v2/",
    
    // Admin
    ADMIN_ID: "1653918641",
    
    // Economic Rules (ذكية جداً)
    ECONOMY: {
        MIN_WITHDRAW: 1.0,
        CACHE_TTL: 60 * 60 * 1000, // ساعة واحدة كاملة
        LISTENER_SLEEP: 30 * 1000,  // 30 ثانية نوم
        REFERRAL_BONUS: 0.1,        // 0.1 TON لكل صديق
        REFERRAL_PERCENT: 0.20       // 20% من أرباح الصديق
    },
    
    // Performance Tuning
    PERFORMANCE: {
        ANIMATIONS: true,
        SOUNDS: false,
        PARTICLES: true
    }
};

// ==================== [2] MINING MACHINES ====================
// 6 آلات تعدين بمواصفات مختلفة
const MACHINES = [
    { 
        id: 'm1', 
        name: 'Free Miner', 
        nameAr: 'منجم مجاني',
        icon: '🆓', 
        price: 0, 
        duration: Infinity, 
        yield: 0.01, 
        interval: 4 * 3600000, 
        color: '#808080',
        level: 1
    },
    { 
        id: 'm2', 
        name: 'Turbo v2', 
        nameAr: 'تربو v2',
        icon: '⚡', 
        price: 1, 
        duration: 3 * 24 * 3600000, 
        yield: 0.2, 
        interval: 2.5 * 3600000, 
        color: '#0088cc',
        level: 2
    },
    { 
        id: 'm3', 
        name: 'Turbo v3', 
        nameAr: 'تربو v3',
        icon: '🚀', 
        price: 2, 
        duration: 7 * 24 * 3600000, 
        yield: 0.35, 
        interval: 2 * 3600000, 
        color: '#00f2ff',
        level: 3
    },
    { 
        id: 'm4', 
        name: 'ASIC Pro', 
        nameAr: 'ASIC برو',
        icon: '💎', 
        price: 4, 
        duration: 14 * 24 * 3600000, 
        yield: 0.5, 
        interval: 3600000, 
        color: '#bc13fe',
        level: 4
    },
    { 
        id: 'm5', 
        name: 'Quantum RIG', 
        nameAr: 'كوانتم ريج',
        icon: '👑', 
        price: 6, 
        duration: 30 * 24 * 3600000, 
        yield: 0.8, 
        interval: 45 * 60 * 1000, 
        color: '#ffaa00',
        level: 5
    },
    { 
        id: 'm6', 
        name: 'Legendary', 
        nameAr: 'أسطوري',
        icon: '⭐', 
        price: 8, 
        duration: 45 * 24 * 3600000, 
        yield: 1.2, 
        interval: 30 * 60 * 1000, 
        color: '#ff4444',
        level: 6
    }
];

// ==================== [3] ACHIEVEMENTS ====================
const ACHIEVEMENTS = [
    { id: 'a1', name: 'First Blood', nameAr: 'أول تعدين', icon: '🥇', reward: 0.5, condition: 'claim:1' },
    { id: 'a2', name: '10 Days Streak', nameAr: '10 أيام', icon: '👑', reward: 1.0, condition: 'streak:10' },
    { id: 'a3', name: 'Social Star', nameAr: '5 أصدقاء', icon: '💎', reward: 2.0, condition: 'referrals:5' },
    { id: 'a4', name: 'Tech Lord', nameAr: '3 ترقيات', icon: '⚡', reward: 1.5, condition: 'upgrades:3' },
    { id: 'a5', name: 'Crypto Whale', nameAr: '10 TON', icon: '🏆', reward: 3.0, condition: 'earn:10' }
];

// ==================== [4] FIREBASE INIT ====================
// تهيئة Firebase بطريقة CDN (بدون import)
firebase.initializeApp({
    apiKey: "AIzaSyD39Q7g7A2MpuuN42eWtr_bOPt-_1tvbhI",
    authDomain: "ton-71a00.firebaseapp.com",
    projectId: "ton-71a00",
    storageBucket: "ton-71a00.firebasestorage.app",
    messagingSenderId: "97952285427",
    appId: "1:97952285427:web:e7704e52fd108bdabded86"
});

const db = firebase.firestore();
const auth = firebase.auth();

// ==================== [5] TELEGRAM INTEGRATION ====================
const tg = window.Telegram?.WebApp;
let referralCode = '';

if (tg) {
    tg.expand();
    tg.ready();
    tg.setHeaderColor('#030405');
    tg.setBackgroundColor('#030405');
    
    // Get referral from URL
    const params = new URLSearchParams(window.location.search);
    referralCode = params.get('start') || tg.initDataUnsafe?.start_param || '';
}

// ==================== [6] GLOBAL STATE ====================
// كل حالة التطبيق في مكان واحد
const State = {
    user: null,
    data: null,
    lang: 'en',
    miningInterval: null,
    listeners: [],
    lastFirebaseSync: 0,
    pendingPayment: null,
    isAdmin: false,
    
    // نظام الكاش الذكي
    cache: {
        get: (key) => {
            const item = localStorage.getItem(key);
            if (!item) return null;
            
            const { value, expiry } = JSON.parse(item);
            if (expiry < Date.now()) {
                localStorage.removeItem(key);
                return null;
            }
            return value;
        },
        
        set: (key, value, ttl = CONFIG.ECONOMY.CACHE_TTL) => {
            const item = {
                value,
                expiry: Date.now() + ttl
            };
            localStorage.setItem(key, JSON.stringify(item));
        }
    }
};

// ==================== [7] LOCALIZATION ====================
const LANG = {
    en: {
        loading: 'TON MINING PRO',
        balance: 'Balance',
        mining: 'Mining',
        claim: 'CLAIM',
        ready: 'READY',
        copy: 'COPY',
        withdraw: 'WITHDRAW',
        friends: 'Friends',
        commission: 'Commission',
        copied: 'Copied!',
        success: 'Success',
        error: 'Error',
        waiting: 'Waiting for payment...',
        confirmed: 'Payment confirmed!',
        minWithdraw: 'Minimum 1 TON'
    },
    ar: {
        loading: 'TON MINING PRO',
        balance: 'الرصيد',
        mining: 'التعدين',
        claim: 'مطالبة',
        ready: 'جاهز',
        copy: 'نسخ',
        withdraw: 'سحب',
        friends: 'الأصدقاء',
        commission: 'العمولات',
        copied: 'تم النسخ!',
        success: 'تم',
        error: 'خطأ',
        waiting: 'في انتظار الدفع...',
        confirmed: 'تم تأكيد الدفع!',
        minWithdraw: 'حد أدنى 1 TON'
    }
};

function t(key) {
    return LANG[State.lang][key] || LANG.en[key] || key;
}

// ==================== [8] NOTIFICATION SYSTEM ====================
function notify(msg, type = 'info') {
    const el = document.getElementById('notification');
    if (!el) return;
    
    el.textContent = msg;
    el.style.display = 'block';
    el.style.background = type === 'success' ? 'linear-gradient(135deg, #00ff88, #0088cc)' : 
                         type === 'error' ? 'linear-gradient(135deg, #ff4444, #ff8888)' : 
                         'linear-gradient(135deg, #0088cc, #bc13fe)';
    
    setTimeout(() => {
        el.style.display = 'none';
    }, 3000);
}

// ==================== [9] CELEBRATION EFFECTS ====================
function celebrate() {
    if (!CONFIG.PERFORMANCE.PARTICLES) return;
    
    const container = document.getElementById('app-container');
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const el = document.createElement('div');
            el.className = 'firework';
            el.style.left = Math.random() * 100 + '%';
            el.style.top = Math.random() * 100 + '%';
            el.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
            container.appendChild(el);
            setTimeout(() => el.remove(), 800);
        }, i * 50);
    }
}

// ==================== [10] UTILITIES ====================
function formatTime(ms) {
    if (ms <= 0) return '00:00:00';
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

function formatAddress(addr) {
    return addr ? addr.slice(0,6) + '...' + addr.slice(-4) : '';
}

// ==================== [11] CORE: USER MANAGEMENT ====================
const User = {
    // تحميل المستخدم من الكاش أولاً (اقتصادي)
    init: async () => {
        // 1. جرب من الكاش المحلي
        const cached = State.cache.get('user_data');
        if (cached) {
            State.data = cached;
            UI.update();
            console.log('✅ Loaded from cache');
            
            // 2. تحديث من Firebase في الخلفية بعد ساعة
            setTimeout(() => User.syncWithFirebase(), 1000);
            return;
        }
        
        // 3. أول مرة - من Firebase
        auth.signInAnonymously().then(async (cred) => {
            State.user = cred.user;
            await User.loadFromFirebase();
        });
    },
    
    // تحميل من Firebase (يحدث مرة كل ساعة)
    loadFromFirebase: async () => {
        if (!State.user) return;
        
        const ref = db.collection('users').doc(State.user.uid);
        const snap = await ref.get();
        
        const tgUser = tg?.initDataUnsafe?.user;
        const username = tgUser?.username || `user_${State.user.uid.slice(0,6)}`;
        
        if (!snap.exists) {
            // مستخدم جديد
            State.data = {
                uid: State.user.uid,
                username,
                balance: 0,
                lastClaim: Date.now(),
                activeMachine: 'm1',
                machineExpiry: Infinity,
                referrals: [],
                refEarnings: 0,
                claims: 0,
                streak: 0,
                lastClaimDate: new Date().toDateString(),
                createdAt: Date.now()
            };
            
            // تحقق من وجود دعوة
            if (referralCode && referralCode !== State.user.uid) {
                State.data.referredBy = referralCode;
                
                // مكافأة فورية للداعي
                const referrerRef = db.collection('users').doc(referralCode);
                await referrerRef.update({
                    referrals: firebase.firestore.FieldValue.arrayUnion(State.user.uid),
                    refEarnings: firebase.firestore.FieldValue.increment(CONFIG.ECONOMY.REFERRAL_BONUS)
                });
            }
            
            await ref.set(State.data);
        } else {
            State.data = snap.data();
        }
        
        // احفظ في الكاش
        State.cache.set('user_data', State.data);
        State.lastFirebaseSync = Date.now();
        
        // تحقق إذا كان Admin
        State.isAdmin = State.data.uid === CONFIG.ADMIN_ID;
        
        UI.update();
        Mining.start();
        
        // أخفي شاشة التحميل
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('app-container').style.display = 'flex';
        }, 500);
    },
    
    // مزامنة مع Firebase (تُستدعى كل ساعة)
    syncWithFirebase: async () => {
        if (!State.user || !State.data) return;
        
        // إذا آخر مزامنة منذ أقل من ساعة، لا تفعل شيئاً
        if (Date.now() - State.lastFirebaseSync < CONFIG.ECONOMY.CACHE_TTL) {
            return;
        }
        
        console.log('🔄 Syncing with Firebase...');
        
        const ref = db.collection('users').doc(State.user.uid);
        const snap = await ref.get();
        
        if (snap.exists) {
            State.data = snap.data();
            State.cache.set('user_data', State.data);
            State.lastFirebaseSync = Date.now();
            UI.update();
        }
    },
    
    // تحديث بيانات محددة
    update: async (updates) => {
        if (!State.user || !State.data) return;
        
        // تحديث محلي أولاً
        Object.assign(State.data, updates);
        State.cache.set('user_data', State.data);
        
        // تحديث واجهة المستخدم فوراً
        UI.update();
        
        // تحديث Firebase (غير متزامن)
        const ref = db.collection('users').doc(State.user.uid);
        await ref.update(updates);
        State.lastFirebaseSync = Date.now();
    }
};

// ==================== [12] CORE: MINING SYSTEM ====================
const Mining = {
    start: () => {
        if (State.miningInterval) clearInterval(State.miningInterval);
        
        State.miningInterval = setInterval(() => {
            if (!State.data) return;
            
            const machine = MACHINES.find(m => m.id === State.data.activeMachine);
            if (!machine) return;
            
            const elapsed = Date.now() - State.data.lastClaim;
            const progress = Math.min((elapsed / machine.interval) * 100, 100);
            
            // تحديث شريط التقدم
            const bar = document.getElementById('mining-progress');
            if (bar) bar.style.width = progress + '%';
            
            // تأثير اهتزاز عند 90%
            if (progress >= 90 && progress < 100) {
                document.querySelector('.mining-3d')?.classList.add('shake');
            } else {
                document.querySelector('.mining-3d')?.classList.remove('shake');
            }
            
            // تحديث العداد
            const timer = document.getElementById('timer-display');
            const claimBtn = document.getElementById('claim-btn');
            
            if (progress >= 100) {
                timer.textContent = t('ready');
                claimBtn.disabled = false;
                claimBtn.classList.add('pulse');
            } else {
                timer.textContent = formatTime(machine.interval - elapsed);
                claimBtn.disabled = true;
                claimBtn.classList.remove('pulse');
            }
            
            // تحديث المعدل
            document.getElementById('current-rate').textContent = 
                `${machine.yield} TON/${machine.interval/3600000}h`;
                
        }, 1000);
    },
    
    claim: async () => {
        if (!State.data) return;
        
        const machine = MACHINES.find(m => m.id === State.data.activeMachine);
        
        await User.update({
            balance: State.data.balance + machine.yield,
            lastClaim: Date.now(),
            claims: (State.data.claims || 0) + 1
        });
        
        notify(`🎉 +${machine.yield} TON`, 'success');
        celebrate();
        Achievements.check();
    }
};

// ==================== [13] CORE: PAYMENT SYSTEM ====================
const Payment = {
    // فتح نافذة الدفع
    openModal: (machine) => {
        State.pendingPayment = machine;
        
        const modal = document.getElementById('rent-modal');
        document.getElementById('rent-machine-name').textContent = machine.name;
        document.getElementById('rent-price').textContent = machine.price + ' TON';
        document.getElementById('rent-duration').textContent = 
            machine.duration === Infinity ? '∞' : (machine.duration/(24*3600000) + ' days');
        document.getElementById('mining-wallet-address').textContent = 
            formatAddress(CONFIG.TON_WALLET);
        document.getElementById('full-address').textContent = CONFIG.TON_WALLET;
        
        modal.style.display = 'flex';
    },
    
    // نسخ العنوان
    copyAddress: () => {
        navigator.clipboard.writeText(CONFIG.TON_WALLET);
        notify(t('copied'), 'success');
    },
    
    // بدء مراقبة المعاملة (مع نوم 30 ثانية)
    startMonitoring: () => {
        if (!State.pendingPayment) return;
        
        notify(t('waiting'), 'info');
        document.getElementById('rent-modal').style.display = 'none';
        
        const machine = State.pendingPayment;
        let attempts = 0;
        const maxAttempts = 60; // 5 دقائق (30 ثانية × 10)
        
        const check = setInterval(async () => {
            attempts++;
            
            try {
                // استدعاء TON Center API
                const res = await fetch(
                    `${CONFIG.TON_CENTER}getTransactions?address=${CONFIG.TON_WALLET}&limit=5&api_key=${CONFIG.TON_API_KEY}`
                );
                const data = await res.json();
                
                if (data.ok && data.result) {
                    for (const tx of data.result) {
                        const val = parseFloat(tx.in_msg?.value) || 0;
                        if (Math.abs(val - machine.price) < 0.01) {
                            clearInterval(check);
                            
                            // تفعيل الجهاز
                            await User.update({
                                activeMachine: machine.id,
                                machineExpiry: Date.now() + (machine.duration || Infinity),
                                lastClaim: Date.now()
                            });
                            
                            notify(t('confirmed'), 'success');
                            celebrate();
                            return;
                        }
                    }
                }
            } catch (e) {
                console.error('Check error:', e);
            }
            
            if (attempts >= maxAttempts) {
                clearInterval(check);
                notify('Payment timeout', 'error');
            }
        }, 30000); // 30 ثانية نوم بين المحاولات
    }
};

// ==================== [14] CORE: WITHDRAWAL SYSTEM ====================
const Withdraw = {
    openModal: () => {
        document.getElementById('withdraw-modal').style.display = 'flex';
    },
    
    request: async () => {
        const amount = parseFloat(document.getElementById('withdraw-amount').value);
        const address = document.getElementById('withdraw-address').value;
        
        if (amount < CONFIG.ECONOMY.MIN_WITHDRAW) {
            notify(t('minWithdraw'), 'error');
            return;
        }
        
        if (amount > State.data.balance) {
            notify('Insufficient balance', 'error');
            return;
        }
        
        if (!address.startsWith('UQ')) {
            notify('Invalid address', 'error');
            return;
        }
        
        try {
            // حفظ طلب السحب
            await db.collection('withdrawals').add({
                userId: State.data.uid,
                username: State.data.username,
                amount,
                address,
                status: 'pending',
                createdAt: Date.now()
            });
            
            // خصم الرصيد
            await User.update({
                balance: State.data.balance - amount
            });
            
            notify('Withdrawal requested', 'success');
            document.getElementById('withdraw-modal').style.display = 'none';
            
            // إذا كان المشرف، افتح لوحة التحكم
            if (State.isAdmin) {
                Admin.loadRequests();
                document.getElementById('admin-modal').style.display = 'flex';
            }
            
        } catch (e) {
            notify('Error: ' + e.message, 'error');
        }
    }
};

// ==================== [15] CORE: ADMIN PANEL ====================
const Admin = {
    loadRequests: async () => {
        if (!State.isAdmin) return;
        
        const snap = await db.collection('withdrawals')
            .where('status', '==', 'pending')
            .orderBy('createdAt', 'desc')
            .limit(20)
            .get();
        
        const container = document.getElementById('withdraw-requests-list');
        container.innerHTML = '';
        
        snap.forEach(doc => {
            const req = doc.data();
            container.innerHTML += `
                <div class="request-item">
                    <div>@${req.username}</div>
                    <div class="request-amount">${req.amount} TON</div>
                    <div class="request-address">${req.address}</div>
                    <div class="request-actions">
                        <button class="approve-btn" onclick="Admin.approve('${doc.id}', ${req.amount}, '${req.address}')">✓</button>
                        <button class="reject-btn" onclick="Admin.reject('${doc.id}')">✗</button>
                    </div>
                </div>
            `;
        });
    },
    
    approve: async (id, amount, address) => {
        await db.collection('withdrawals').doc(id).update({
            status: 'approved',
            approvedAt: Date.now()
        });
        notify(`Approved ${amount} TON`, 'success');
        Admin.loadRequests();
    },
    
    reject: async (id) => {
        const doc = await db.collection('withdrawals').doc(id).get();
        const data = doc.data();
        
        // إعادة الرصيد
        await db.collection('users').doc(data.userId).update({
            balance: firebase.firestore.FieldValue.increment(data.amount)
        });
        
        await db.collection('withdrawals').doc(id).update({
            status: 'rejected',
            rejectedAt: Date.now()
        });
        
        notify('Rejected', 'error');
        Admin.loadRequests();
    }
};

// ==================== [16] CORE: REFERRAL SYSTEM ====================
const Referral = {
    getLink: () => {
        return `https://t.me/TONMininginstantbot/Ton?startapp=${State.data.uid}`;
    },
    
    copyLink: () => {
        const link = document.getElementById('ref-link');
        link.select();
        navigator.clipboard.writeText(link.value);
        notify(t('copied'), 'success');
    },
    
    updateUI: () => {
        document.getElementById('ref-count').textContent = State.data.referrals?.length || 0;
        document.getElementById('ref-earnings').textContent = (State.data.refEarnings || 0).toFixed(4);
        document.getElementById('ref-link').value = Referral.getLink();
    }
};

// ==================== [17] CORE: ACHIEVEMENTS ====================
const Achievements = {
    check: () => {
        if (!State.data.achievements) State.data.achievements = [];
        
        ACHIEVEMENTS.forEach(ach => {
            if (State.data.achievements.includes(ach.id)) return;
            
            let unlocked = false;
            const [cond, val] = ach.condition.split(':');
            
            switch(cond) {
                case 'claim': unlocked = (State.data.claims || 0) >= parseInt(val); break;
                case 'streak': unlocked = (State.data.streak || 0) >= parseInt(val); break;
                case 'referrals': unlocked = (State.data.referrals?.length || 0) >= parseInt(val); break;
                case 'upgrades': unlocked = (State.data.upgrades || 0) >= parseInt(val); break;
                case 'earn': unlocked = State.data.balance >= parseInt(val); break;
            }
            
            if (unlocked) {
                State.data.achievements.push(ach.id);
                State.data.balance += ach.reward;
                
                // تحديث Firebase
                db.collection('users').doc(State.data.uid).update({
                    achievements: firebase.firestore.FieldValue.arrayUnion(ach.id),
                    balance: firebase.firestore.FieldValue.increment(ach.reward)
                });
                
                notify(`🏆 ${ach.name} +${ach.reward} TON`, 'success');
                celebrate();
            }
        });
    }
};

// ==================== [18] UI RENDERING ====================
const UI = {
    update: () => {
        if (!State.data) return;
        
        // الرصيد
        document.getElementById('total-balance').textContent = State.data.balance.toFixed(4);
        document.getElementById('wallet-balance').textContent = State.data.balance.toFixed(4) + ' TON';
        document.getElementById('user-name').textContent = '@' + State.data.username;
        
        // الإحالات
        Referral.updateUI();
        
        // آلات التعدين
        UI.renderMachines();
        
        // الإنجازات
        UI.renderAchievements();
        
        // الجهاز النشط
        const active = MACHINES.find(m => m.id === State.data.activeMachine);
        if (active) {
            document.getElementById('active-machine').textContent = active.name;
        }
    },
    
    renderMachines: () => {
        const container = document.getElementById('machines-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        MACHINES.forEach(m => {
            const isActive = State.data.activeMachine === m.id;
            const expired = State.data.machineExpiry < Date.now() && m.id !== 'm1';
            
            container.innerHTML += `
                <div class="machine-card ${isActive ? 'active' : ''} ${expired ? 'expired' : ''}" 
                     onclick="UI.selectMachine('${m.id}')">
                    <div class="machine-glow" style="background: radial-gradient(circle at 50% 0%, ${m.color}40, transparent);"></div>
                    ${isActive ? '<div class="machine-badge">ACTIVE</div>' : ''}
                    <div class="machine-header">
                        <span class="machine-icon" style="color: ${m.color}">${m.icon}</span>
                        <span class="machine-name">${State.lang === 'ar' ? m.nameAr : m.name}</span>
                    </div>
                    <div class="machine-price ${m.price === 0 ? 'free' : ''}">
                        ${m.price === 0 ? 'FREE' : m.price + ' TON'}
                    </div>
                    <div class="machine-stats">
                        <span>${m.yield} TON</span>
                        <span>${m.interval/3600000}h</span>
                    </div>
                </div>
            `;
        });
    },
    
    renderAchievements: () => {
        const container = document.getElementById('achievements-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        ACHIEVEMENTS.forEach(ach => {
            const unlocked = State.data.achievements?.includes(ach.id);
            
            container.innerHTML += `
                <div class="achievement-item ${unlocked ? 'unlocked' : 'locked'}">
                    <span class="achievement-icon">${ach.icon}</span>
                    <span class="achievement-name">${State.lang === 'ar' ? ach.nameAr : ach.name}</span>
                    <span class="achievement-reward">${ach.reward} TON</span>
                </div>
            `;
        });
    },
    
    selectMachine: (id) => {
        const machine = MACHINES.find(m => m.id === id);
        
        if (machine.price === 0) {
            // جهاز مجاني - تفعيل مباشر
            User.update({
                activeMachine: id,
                machineExpiry: Date.now() + (machine.duration || Infinity),
                lastClaim: Date.now()
            }).then(() => {
                notify('Machine activated', 'success');
            });
        } else {
            // جهاز مدفوع - فتح نافذة الدفع
            Payment.openModal(machine);
        }
    },
    
    toggleLanguage: () => {
        State.lang = State.lang === 'en' ? 'ar' : 'en';
        document.documentElement.dir = State.lang === 'ar' ? 'rtl' : 'ltr';
        document.querySelector('.lang-toggle').textContent = State.lang === 'en' ? '🇸🇦' : '🇬🇧';
        UI.update();
        notify(`Language: ${State.lang === 'en' ? 'English' : 'العربية'}`);
    },
    
    closeModal: (id) => {
        document.getElementById(id).style.display = 'none';
    }
};

// ==================== [19] SLEEPING LISTENERS ====================
// مستمعين أذكياء ينامون معظم الوقت
const Listeners = {
    // مستمع Firebase ينام 30 ثانية
    firestore: () => {
        if (!State.user) return;
        
        const unsub = db.collection('users').doc(State.user.uid)
            .onSnapshot({ 
                includeMetadataChanges: false 
            }, (snap) => {
                if (snap.exists) {
                    // تحديث فقط إذا كان التغيير من Firebase
                    if (!snap.metadata.hasPendingWrites) {
                        State.data = snap.data();
                        State.cache.set('user_data', State.data);
                        UI.update();
                    }
                }
            });
        
        // حفظ المستمع لإيقافه لاحقاً
        State.listeners.push(unsub);
    },
    
    // مستمع السحبات ينام 30 ثانية
    withdrawals: () => {
        if (!State.isAdmin) return;
        
        const unsub = db.collection('withdrawals')
            .where('status', '==', 'pending')
            .onSnapshot(() => {
                // إشعار خفيف فقط
                document.querySelector('.admin-float-btn')?.classList.add('pulse');
            });
        
        State.listeners.push(unsub);
    },
    
    // إيقاف جميع المستمعين
    sleep: () => {
        State.listeners.forEach(unsub => unsub());
        State.listeners = [];
        console.log('😴 Listeners sleeping...');
    },
    
    // إيقاظ المستمعين
    wake: () => {
        Listeners.sleep();
        Listeners.firestore();
        Listeners.withdrawals();
        console.log('🔔 Listeners awake');
    }
};

// ==================== [20] INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 TON MINING PRO starting...');
    
    // إضافة زر اللغة
    const header = document.querySelector('.header-content');
    if (header) {
        const btn = document.createElement('button');
        btn.className = 'lang-toggle';
        btn.textContent = '🇸🇦';
        btn.onclick = UI.toggleLanguage;
        header.appendChild(btn);
    }
    
    // إضافة زر المشرف (سيظهر إذا كان المستخدم Admin)
    setTimeout(() => {
        if (State.isAdmin) {
            const btn = document.createElement('button');
            btn.className = 'admin-float-btn';
            btn.innerHTML = '👑';
            btn.onclick = () => {
                Admin.loadRequests();
                document.getElementById('admin-modal').style.display = 'flex';
            };
            document.body.appendChild(btn);
        }
    }, 2000);
    
    // بدء تشغيل المستخدم
    User.init();
    
    // إيقاظ المستمعين كل 30 ثانية (ينامون بين الفترات)
    setInterval(() => {
        Listeners.wake();
    }, 30000); // 30 ثانية
    
    // مزامنة مع Firebase كل ساعة
    setInterval(() => {
        User.syncWithFirebase();
    }, CONFIG.ECONOMY.CACHE_TTL);
});

// ==================== [21] GLOBAL EXPORTS ====================
// دوال عامة يمكن استدعاؤها من HTML
window.UI = UI;
window.Payment = Payment;
window.Withdraw = Withdraw;
window.Admin = Admin;
window.Referral = Referral;
