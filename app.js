// ==================== إعدادات Firebase ====================
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { 
    getFirestore, doc, getDoc, setDoc, updateDoc, onSnapshot, 
    increment, arrayUnion, collection, query, where, getDocs, orderBy, limit 
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
import { 
    getAuth, onAuthStateChanged, signInAnonymously 
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';

// تكوين Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD39Q7g7A2MpuuN42eWtr_bOPt-_1tvbhI",
    authDomain: "ton-71a00.firebaseapp.com",
    projectId: "ton-71a00",
    storageBucket: "ton-71a00.firebasestorage.app",
    messagingSenderId: "97952285427",
    appId: "1:97952285427:web:e7704e52fd108bdabded86",
    measurementId: "G-8SQSQNRCVK"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// ==================== إعدادات TON ====================
const TON_CONFIG = {
    MINING_WALLET: "UQD9mkiazYKara0KxRbRBIlCMnqtLmjS3aMlj2iSCrnIY0eH", // عنوان التعدين الخاص بك
    ADMIN_ID: "1653918641", // معرف المشرف
    MIN_WITHDRAW: 1.0, // حد أدنى للسحب
    NETWORK: "mainnet", // الشبكة الرئيسية
    TON_CENTER_API: "https://toncenter.com/api/v2/",
    TON_CENTER_KEY: "YOUR_API_KEY" // يمكنك الحصول على مفتاح من toncenter.com
};

// ==================== آلات التعدين ====================
const MACHINES = [
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
        interval: 4 * 60 * 60 * 1000, // 4 ساعات
        color: '#808080',
        glow: 'rgba(128, 128, 128, 0.5)'
    },
    { 
        id: 'm2', 
        name: 'Turbo v2', 
        nameAr: 'تربو v2',
        desc: 'High-speed ASIC miner. 3x faster!',
        descAr: 'جهاز عالي السرعة. أسرع بثلاث مرات!',
        icon: '⚡',
        price: 1, 
        duration: 3 * 24 * 60 * 60 * 1000, // 3 أيام
        yield: 0.2, 
        interval: 2.5 * 60 * 60 * 1000, // 2.5 ساعة
        color: '#0088cc',
        glow: 'rgba(0, 136, 204, 0.5)'
    },
    { 
        id: 'm3', 
        name: 'Turbo v3', 
        nameAr: 'تربو v3',
        desc: 'Next-gen cooling system. Maximum efficiency!',
        descAr: 'تبريد متطور. كفاءة قصوى!',
        icon: '🚀',
        price: 2, 
        duration: 7 * 24 * 60 * 60 * 1000, // 7 أيام
        yield: 0.35, 
        interval: 2 * 60 * 60 * 1000, // ساعتين
        color: '#00f2ff',
        glow: 'rgba(0, 242, 255, 0.5)'
    },
    { 
        id: 'm4', 
        name: 'ASIC Pro', 
        nameAr: 'ASIC برو',
        desc: 'Professional mining rig. Serious power!',
        descAr: 'جهاز احترافي. قوة هائلة!',
        icon: '💎',
        price: 4, 
        duration: 14 * 24 * 60 * 60 * 1000, // 14 يوم
        yield: 0.5, 
        interval: 60 * 60 * 1000, // ساعة
        color: '#bc13fe',
        glow: 'rgba(188, 19, 254, 0.5)'
    },
    { 
        id: 'm5', 
        name: 'Quantum RIG', 
        nameAr: 'كوانتم ريج',
        desc: 'Quantum computing technology. The future!',
        descAr: 'تقنية كمومية. المستقبل!',
        icon: '👑',
        price: 6, 
        duration: 30 * 24 * 60 * 60 * 1000, // 30 يوم
        yield: 0.8, 
        interval: 45 * 60 * 1000, // 45 دقيقة
        color: '#ffaa00',
        glow: 'rgba(255, 170, 0, 0.5)'
    },
    { 
        id: 'm6', 
        name: 'Legendary', 
        nameAr: 'أسطوري',
        desc: 'The ultimate mining machine. Legendary status!',
        descAr: 'الجهاز الأقوى. مكانة أسطورية!',
        icon: '⭐',
        price: 8, 
        duration: 45 * 24 * 60 * 60 * 1000, // 45 يوم
        yield: 1.2, 
        interval: 30 * 60 * 1000, // 30 دقيقة
        color: '#ff4444',
        glow: 'rgba(255, 68, 68, 0.5)'
    }
];

// ==================== الإنجازات ====================
const ACHIEVEMENTS = [
    { id: 'first_claim', name: 'First Blood', nameAr: 'أول تعدين', icon: '🥇', reward: 0.5, condition: 'claim' },
    { id: 'streak_10', name: '10 Days Streak', nameAr: '10 أيام متتالية', icon: '👑', reward: 1.0, condition: 'streak' },
    { id: 'refer_5', name: 'Social Star', nameAr: '5 أصدقاء', icon: '💎', reward: 2.0, condition: 'referrals' },
    { id: 'upgrade_3', name: 'Tech Lord', nameAr: '3 ترقيات', icon: '⚡', reward: 1.5, condition: 'upgrades' },
    { id: 'earn_10', name: 'Crypto Whale', nameAr: '10 TON', icon: '🏆', reward: 3.0, condition: 'earnings' }
];

// ==================== المتغيرات العامة ====================
let currentUser = null;
let userData = null;
let miningInterval = null;
let transactionCheckInterval = null;
let currentLanguage = 'en'; // اللغة الافتراضية: الإنجليزية
let tonConnectUI = null;
let pendingRent = null;
let adminMode = false;

// الترجمة
const translations = {
    en: {
        loading: "TON MINING PRO",
        loadingSub: "Preparing mining platform...",
        balance: "Balance",
        mining: "Mining",
        network: "Network",
        wallet: "Wallet",
        claim: "CLAIM REWARD",
        upgrade: "Upgrade Hardware",
        currentRate: "Current Rate",
        activeMachine: "Active Machine",
        readyToClaim: "READY TO CLAIM",
        copy: "COPY",
        withdraw: "WITHDRAW",
        minWithdraw: "Min 1 TON • Confirm in 1-5 minutes",
        connectWallet: "Connect Wallet",
        rent: "Rent",
        free: "FREE",
        days: "days",
        hours: "hours",
        minutes: "minutes",
        sendTo: "Send to:",
        confirmPayment: "Confirm Payment",
        paymentNote: "Your wallet will open to sign the transaction",
        requestWithdraw: "Request Withdrawal",
        amount: "Amount",
        address: "Address",
        submit: "Submit Request",
        achievements: "Achievements",
        referrals: "Partners",
        commission: "Commission",
        referLink: "Referral Link",
        friends: "friends",
        admin: "Admin Panel",
        approve: "Approve",
        reject: "Reject",
        pending: "Pending",
        completed: "Completed",
        rejected: "Rejected"
    },
    ar: {
        loading: "TON MINING PRO",
        loadingSub: "تجهيز منصة التعدين...",
        balance: "الرصيد",
        mining: "التعدين",
        network: "الشبكة",
        wallet: "المحفظة",
        claim: "مطالبة الأرباح",
        upgrade: "طور أجهزتك",
        currentRate: "قوة التعدين",
        activeMachine: "الجهاز النشط",
        readyToClaim: "جاهز للمطالبة",
        copy: "نسخ",
        withdraw: "سحب",
        minWithdraw: "حد أدنى 1 TON • تأكيد خلال 1-5 دقائق",
        connectWallet: "ربط المحفظة",
        rent: "تأجير",
        free: "مجاني",
        days: "أيام",
        hours: "ساعات",
        minutes: "دقائق",
        sendTo: "أرسل إلى:",
        confirmPayment: "تأكيد الدفع",
        paymentNote: "سيتم فتح محفظتك لتوقيع المعاملة",
        requestWithdraw: "طلب سحب",
        amount: "المبلغ",
        address: "العنوان",
        submit: "تقديم الطلب",
        achievements: "الإنجازات",
        referrals: "الأصدقاء",
        commission: "العمولات",
        referLink: "رابط الإحالة",
        friends: "أصدقاء",
        admin: "لوحة التحكم",
        approve: "قبول",
        reject: "رفض",
        pending: "قيد الانتظار",
        completed: "تم",
        rejected: "مرفوض"
    }
};

// ==================== دوال المساعدة ====================
function t(key) {
    return translations[currentLanguage][key] || key;
}

function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    notification.style.background = type === 'success' ? 'linear-gradient(135deg, #00ff88, #0088cc)' : 
                                 type === 'error' ? 'linear-gradient(135deg, #ff4444, #ff8888)' : 
                                 'linear-gradient(135deg, #0088cc, #bc13fe)';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function hideModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function formatTime(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function formatAddress(address) {
    return address.slice(0, 6) + '...' + address.slice(-4);
}

function animateValue(element, start, end, duration, suffix = '') {
    if (!element) return;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = start + (end - start) * progress;
        element.textContent = value.toFixed(4) + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// ==================== تهيئة TON Connect ====================
async function initTonConnect() {
    try {
        tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
            manifestUrl: 'https://ton-mining-pro.com/tonconnect-manifest.json',
            buttonRootId: 'ton-connect-button'
        });

        // التحقق من حالة الاتصال
        tonConnectUI.onStatusChange(async (wallet) => {
            if (wallet) {
                const address = wallet.account.address;
                showNotification(`Wallet connected: ${formatAddress(address)}`, 'success');
                document.getElementById('wallet-connect-prompt').style.display = 'none';
                document.getElementById('confirm-rent-btn').disabled = false;
            } else {
                document.getElementById('wallet-connect-prompt').style.display = 'block';
                document.getElementById('confirm-rent-btn').disabled = true;
            }
        });
    } catch (error) {
        console.error('TON Connect init error:', error);
    }
}

// ==================== التحقق من معاملات TON ====================
async function checkTransaction(address, amount, userId) {
    try {
        // استخدام TON Center API للتحقق من المعاملات
        const response = await fetch(`${TON_CONFIG.TON_CENTER_API}getTransactions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': TON_CONFIG.TON_CENTER_KEY
            },
            body: JSON.stringify({
                address: TON_CONFIG.MINING_WALLET,
                limit: 20
            })
        });

        const data = await response.json();
        
        if (data.ok && data.result) {
            for (const tx of data.result) {
                // التحقق من أن المعاملة جديدة ولم تستخدم بعد
                if (tx.in_msg && 
                    tx.in_msg.source === address && 
                    Math.abs(parseFloat(tx.in_msg.value) - amount) < 0.01 &&
                    !await isTransactionUsed(tx.transaction_id.hash)) {
                    
                    // التحقق من وجود معرف المستخدم في التعليق
                    const comment = tx.in_msg.message || '';
                    if (comment.includes(userId)) {
                        await markTransactionUsed(tx.transaction_id.hash);
                        return true;
                    }
                }
            }
        }
        return false;
    } catch (error) {
        console.error('Transaction check error:', error);
        return false;
    }
}

async function isTransactionUsed(hash) {
    const txRef = doc(db, 'transactions', hash);
    const txSnap = await getDoc(txRef);
    return txSnap.exists();
}

async function markTransactionUsed(hash) {
    const txRef = doc(db, 'transactions', hash);
    await setDoc(txRef, {
        used: true,
        timestamp: Date.now()
    });
}

// ==================== بدء مراقبة المعاملات ====================
function startTransactionCheck(address, amount, userId, machineId) {
    let attempts = 0;
    const maxAttempts = 60; // 5 دقائق (كل 5 ثواني)
    
    transactionCheckInterval = setInterval(async () => {
        attempts++;
        
        if (await checkTransaction(address, amount, userId)) {
            clearInterval(transactionCheckInterval);
            await activateMachine(userId, machineId);
            showNotification('Payment confirmed! Machine activated.', 'success');
            hideModal('rent-modal');
        }
        
        if (attempts >= maxAttempts) {
            clearInterval(transactionCheckInterval);
            showNotification('Payment timeout. Please try again.', 'error');
        }
    }, 5000);
}

// ==================== تفعيل الآلة ====================
async function activateMachine(userId, machineId) {
    try {
        const userRef = doc(db, 'users', userId);
        const machine = MACHINES.find(m => m.id === machineId);
        
        await updateDoc(userRef, {
            activeMachine: machineId,
            machineExpiry: Date.now() + machine.duration,
            lastClaim: Date.now(),
            upgrades: increment(1)
        });
        
        // إضافة تأثير ألعاب نارية
        celebrate();
    } catch (error) {
        console.error('Activation error:', error);
    }
}

// ==================== تأثير الاحتفال ====================
function celebrate() {
    const container = document.getElementById('app-container');
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
}

// ==================== تهيئة المستخدم ====================
async function initUser(user) {
    try {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        
        // الحصول على بيانات Telegram
        const tg = window.Telegram?.WebApp;
        const tgUser = tg?.initDataUnsafe?.user;
        
        if (!userSnap.exists()) {
            // مستخدم جديد
            const newUser = {
                uid: user.uid,
                username: tgUser?.username || `user_${user.uid.slice(0, 6)}`,
                firstName: tgUser?.first_name || '',
                lastName: tgUser?.last_name || '',
                balance: 0,
                lastClaim: Date.now(),
                activeMachine: 'm1',
                machineExpiry: Infinity,
                referrals: [],
                refEarnings: 0,
                upgrades: 0,
                claims: 0,
                streak: 0,
                lastClaimDate: new Date().toDateString(),
                achievements: [],
                createdAt: Date.now()
            };
            
            // التحقق من وجود رابط إحالة
            const urlParams = new URLSearchParams(window.location.search);
            const ref = urlParams.get('ref');
            if (ref) {
                newUser.referredBy = ref;
                
                // إضافة مكافأة للمحيل
                const referrerRef = doc(db, 'users', ref);
                await updateDoc(referrerRef, {
                    referrals: arrayUnion(user.uid),
                    refEarnings: increment(0.1) // مكافأة فورية
                });
            }
            
            await setDoc(userRef, newUser);
            userData = newUser;
        } else {
            userData = { uid: user.uid, ...userSnap.data() };
        }
        
        // تخزين في localStorage
        localStorage.setItem('ton_miner_cache', JSON.stringify(userData));
        
        // تحديث واجهة المستخدم
        updateUI();
        
        // بدء الاستماع للتحديثات
        onSnapshot(userRef, (snap) => {
            if (snap.exists()) {
                const newData = { uid: user.uid, ...snap.data() };
                if (JSON.stringify(newData) !== JSON.stringify(userData)) {
                    userData = newData;
                    localStorage.setItem('ton_miner_cache', JSON.stringify(userData));
                    updateUI();
                }
            }
        });
        
        // بدء عداد التعدين
        startMiningTimer();
        
        // إخفاء شاشة التحميل
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('app-container').style.display = 'flex';
        
        // التحقق من الإنجازات
        checkAchievements();
        
    } catch (error) {
        console.error('Init user error:', error);
        showNotification('Error initializing user', 'error');
    }
}

// ==================== تحديث واجهة المستخدم ====================
function updateUI() {
    if (!userData) return;
    
    // تحديث الرصيد
    const balanceEl = document.getElementById('total-balance');
    const walletBalanceEl = document.getElementById('wallet-balance');
    const currentBalance = parseFloat(balanceEl.textContent) || 0;
    
    if (Math.abs(currentBalance - userData.balance) > 0.0001) {
        animateValue(balanceEl, currentBalance, userData.balance, 1000);
        animateValue(walletBalanceEl, currentBalance, userData.balance, 1000, ' TON');
    }
    
    // تحديث اسم المستخدم
    document.getElementById('user-name').textContent = '@' + userData.username;
    
    // تحديث آلات التعدين
    renderMachines();
    
    // تحديث الإنجازات
    renderAchievements();
    
    // تحديث الإحالات
    document.getElementById('ref-count').textContent = userData.referrals?.length || 0;
    document.getElementById('ref-earnings').textContent = userData.refEarnings?.toFixed(4) || '0.0000';
    
    // تحديث رابط الإحالة
    const refLink = `https://t.me/ton_mining_bot?start=${userData.uid}`;
    document.getElementById('ref-link').value = refLink;
}

// ==================== عرض آلات التعدين ====================
function renderMachines() {
    const container = document.getElementById('machines-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    MACHINES.forEach(machine => {
        const isActive = userData.activeMachine === machine.id;
        const isExpired = userData.machineExpiry < Date.now() && machine.id !== 'm1';
        const canRent = machine.price === 0 || (userData.balance >= machine.price && !isActive);
        
        const card = document.createElement('div');
        card.className = `machine-card ${isActive ? 'active' : ''} ${isExpired ? 'expired' : ''}`;
        card.setAttribute('data-machine', machine.id);
        
        const name = currentLanguage === 'ar' ? machine.nameAr : machine.name;
        const desc = currentLanguage === 'ar' ? machine.descAr : machine.desc;
        const priceText = machine.price === 0 ? t('free') : `${machine.price} TON`;
        
        card.innerHTML = `
            <div class="machine-glow" style="background: radial-gradient(circle at 50% 0%, ${machine.glow}, transparent);"></div>
            ${isActive ? '<div class="machine-badge">ACTIVE</div>' : ''}
            <div class="machine-header">
                <span class="machine-icon" style="color: ${machine.color}">${machine.icon}</span>
                <span class="machine-name">${name}</span>
            </div>
            <div class="machine-desc">${desc}</div>
            <div class="machine-stats">
                <div class="machine-stat">
                    <span class="stat-label">${t('currentRate')}</span>
                    <span class="stat-value">${machine.yield} TON/${machine.interval/3600000}h</span>
                </div>
                <div class="machine-stat">
                    <span class="stat-label">Duration</span>
                    <span class="stat-value">${machine.duration === Infinity ? '∞' : Math.floor(machine.duration/(24*3600000)) + 'd'}</span>
                </div>
            </div>
            <div class="machine-price ${machine.price === 0 ? 'free' : ''}">${priceText}</div>
        `;
        
        card.onclick = () => {
            if (machine.price === 0) {
                activateMachine(userData.uid, machine.id);
            } else {
                openRentModal(machine);
            }
        };
        
        container.appendChild(card);
    });
}

// ==================== فتح نافذة التأجير ====================
function openRentModal(machine) {
    pendingRent = machine;
    
    document.getElementById('rent-modal-title').textContent = currentLanguage === 'ar' ? machine.nameAr : machine.name;
    document.getElementById('rent-machine-icon').src = machine.icon;
    document.getElementById('rent-machine-name').textContent = currentLanguage === 'ar' ? machine.nameAr : machine.name;
    
    const durationDays = Math.floor(machine.duration / (24 * 3600000));
    document.getElementById('rent-duration').textContent = `${durationDays} ${t('days')}`;
    document.getElementById('rent-price').textContent = `${machine.price} TON`;
    document.getElementById('rent-yield').textContent = `${machine.yield} TON / ${machine.interval/3600000}h`;
    
    document.getElementById('mining-wallet-address').textContent = formatAddress(TON_CONFIG.MINING_WALLET);
    
    showModal('rent-modal');
}

// ==================== عرض الإنجازات ====================
function renderAchievements() {
    const container = document.getElementById('achievements-container');
    if (!container || !userData) return;
    
    container.innerHTML = '';
    
    ACHIEVEMENTS.forEach(achievement => {
        const unlocked = checkAchievementUnlocked(achievement);
        const item = document.createElement('div');
        item.className = `achievement-item ${unlocked ? 'unlocked' : 'achievement-locked'}`;
        
        item.innerHTML = `
            <span class="achievement-icon">${achievement.icon}</span>
            <span class="achievement-name">${currentLanguage === 'ar' ? achievement.nameAr : achievement.name}</span>
            <span class="achievement-reward">+${achievement.reward} TON</span>
        `;
        
        container.appendChild(item);
    });
}

function checkAchievementUnlocked(achievement) {
    if (!userData.achievements) return false;
    return userData.achievements.includes(achievement.id);
}

async function checkAchievements() {
    if (!userData) return;
    
    const newAchievements = [];
    
    ACHIEVEMENTS.forEach(achievement => {
        if (userData.achievements?.includes(achievement.id)) return;
        
        let unlocked = false;
        
        switch (achievement.condition) {
            case 'claim':
                unlocked = userData.claims > 0;
                break;
            case 'streak':
                unlocked = userData.streak >= 10;
                break;
            case 'referrals':
                unlocked = (userData.referrals?.length || 0) >= 5;
                break;
            case 'upgrades':
                unlocked = (userData.upgrades || 0) >= 3;
                break;
            case 'earnings':
                unlocked = userData.balance >= 10;
                break;
        }
        
        if (unlocked) {
            newAchievements.push(achievement.id);
            // إضافة المكافأة
            userData.balance += achievement.reward;
        }
    });
    
    if (newAchievements.length > 0) {
        const userRef = doc(db, 'users', userData.uid);
        await updateDoc(userRef, {
            achievements: arrayUnion(...newAchievements),
            balance: increment(newAchievements.reduce((sum, id) => {
                const ach = ACHIEVEMENTS.find(a => a.id === id);
                return sum + (ach?.reward || 0);
            }, 0))
        });
        
        showNotification(`🏆 New achievements unlocked!`, 'success');
        celebrate();
    }
}

// ==================== عداد التعدين ====================
function startMiningTimer() {
    if (miningInterval) clearInterval(miningInterval);
    
    miningInterval = setInterval(async () => {
        if (!userData) return;
        
        const machine = MACHINES.find(m => m.id === userData.activeMachine);
        const elapsed = Date.now() - userData.lastClaim;
        const progress = Math.min((elapsed / machine.interval) * 100, 100);
        
        const progressBar = document.getElementById('mining-progress');
        const timerEl = document.getElementById('timer-display');
        const claimBtn = document.getElementById('claim-btn');
        
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
        
        // تأثير الاهتزاز عند 90%
        if (progress >= 90 && progress < 100) {
            document.querySelector('.mining-3d')?.classList.add('shake-effect');
        } else {
            document.querySelector('.mining-3d')?.classList.remove('shake-effect');
        }
        
        if (progress >= 100) {
            timerEl.textContent = t('readyToClaim');
            claimBtn.disabled = false;
            claimBtn.classList.add('pulse');
            
            // تفعيل auto-claim إذا كان مفعل
            if (userData.autoClicker) {
                claimMining();
            }
        } else {
            const remaining = machine.interval - elapsed;
            timerEl.textContent = formatTime(remaining);
            claimBtn.disabled = true;
            claimBtn.classList.remove('pulse');
        }
        
        // تحديث معدل التعدين والجهاز النشط
        document.getElementById('current-rate').textContent = `${machine.yield} TON/${machine.interval/3600000}h`;
        const machineName = currentLanguage === 'ar' ? machine.nameAr : machine.name;
        document.getElementById('active-machine').textContent = machineName;
        
    }, 1000);
}

// ==================== المطالبة بالأرباح ====================
async function claimMining() {
    if (!userData) return;
    
    try {
        const machine = MACHINES.find(m => m.id === userData.activeMachine);
        const userRef = doc(db, 'users', userData.uid);
        
        // تحديث الرصيد وآخر مطالبة
        await updateDoc(userRef, {
            balance: increment(machine.yield),
            lastClaim: Date.now(),
            claims: increment(1)
        });
        
        // تحديث streak
        const today = new Date().toDateString();
        if (userData.lastClaimDate === today) {
            // تم المطالبة اليوم بالفعل
        } else if (userData.lastClaimDate === new Date(Date.now() - 86400000).toDateString()) {
            // أمس - زيادة streak
            await updateDoc(userRef, {
                streak: increment(1),
                lastClaimDate: today
            });
        } else {
            // انقطع - إعادة تعيين streak
            await updateDoc(userRef, {
                streak: 1,
                lastClaimDate: today
            });
        }
        
        showNotification(`🎉 Claimed ${machine.yield} TON!`, 'success');
        
        // تأثير احتفالي
        celebrate();
        
        // التحقق من الإنجازات
        checkAchievements();
        
    } catch (error) {
        console.error('Claim error:', error);
        showNotification('Error claiming reward', 'error');
    }
}

// ==================== طلب سحب ====================
async function requestWithdraw(amount, address) {
    if (!userData) return;
    
    if (amount < TON_CONFIG.MIN_WITHDRAW) {
        showNotification(`Minimum withdraw is ${TON_CONFIG.MIN_WITHDRAW} TON`, 'error');
        return;
    }
    
    if (amount > userData.balance) {
        showNotification('Insufficient balance', 'error');
        return;
    }
    
    try {
        const withdrawRef = doc(collection(db, 'withdrawals'));
        await setDoc(withdrawRef, {
            userId: userData.uid,
            username: userData.username,
            amount: amount,
            address: address,
            status: 'pending',
            createdAt: Date.now()
        });
        
        // خصم الرصيد
        const userRef = doc(db, 'users', userData.uid);
        await updateDoc(userRef, {
            balance: increment(-amount)
        });
        
        showNotification('Withdrawal request submitted!', 'success');
        hideModal('withdraw-modal');
        
        // إذا كان المستخدم هو المشرف، أظهر لوحة التحكم
        if (userData.uid === TON_CONFIG.ADMIN_ID) {
            loadWithdrawRequests();
            showModal('admin-modal');
        }
        
    } catch (error) {
        console.error('Withdraw error:', error);
        showNotification('Error requesting withdrawal', 'error');
    }
}

// ==================== تحميل طلبات السحب (للمشرف) ====================
async function loadWithdrawRequests() {
    if (!userData || userData.uid !== TON_CONFIG.ADMIN_ID) return;
    
    try {
        const q = query(
            collection(db, 'withdrawals'),
            where('status', '==', 'pending'),
            orderBy('createdAt', 'desc'),
            limit(50)
        );
        
        const querySnapshot = await getDocs(q);
        const container = document.getElementById('withdraw-requests-list');
        container.innerHTML = '';
        
        querySnapshot.forEach(doc => {
            const req = doc.data();
            const item = document.createElement('div');
            item.className = 'request-item';
            item.innerHTML = `
                <div class="request-user">@${req.username}</div>
                <div class="request-amount">${req.amount} TON</div>
                <div class="request-address">${req.address}</div>
                <div class="request-actions">
                    <button class="approve-btn" data-id="${doc.id}" data-amount="${req.amount}" data-address="${req.address}">${t('approve')}</button>
                    <button class="reject-btn" data-id="${doc.id}">${t('reject')}</button>
                </div>
            `;
            container.appendChild(item);
        });
        
        // إضافة مستمعين للأزرار
        document.querySelectorAll('.approve-btn').forEach(btn => {
            btn.onclick = () => approveWithdrawal(btn.dataset.id, btn.dataset.amount, btn.dataset.address);
        });
        
        document.querySelectorAll('.reject-btn').forEach(btn => {
            btn.onclick = () => rejectWithdrawal(btn.dataset.id);
        });
        
    } catch (error) {
        console.error('Load requests error:', error);
    }
}

async function approveWithdrawal(id, amount, address) {
    try {
        await updateDoc(doc(db, 'withdrawals', id), {
            status: 'approved',
            approvedAt: Date.now()
        });
        
        showNotification(`Approved withdrawal of ${amount} TON to ${formatAddress(address)}`, 'success');
        loadWithdrawRequests();
        
    } catch (error) {
        console.error('Approve error:', error);
    }
}

async function rejectWithdrawal(id) {
    try {
        const withdrawRef = doc(db, 'withdrawals', id);
        const withdrawSnap = await getDoc(withdrawRef);
        const withdrawData = withdrawSnap.data();
        
        // إعادة الرصيد للمستخدم
        const userRef = doc(db, 'users', withdrawData.userId);
        await updateDoc(userRef, {
            balance: increment(withdrawData.amount)
        });
        
        await updateDoc(withdrawRef, {
            status: 'rejected',
            rejectedAt: Date.now()
        });
        
        showNotification('Withdrawal rejected', 'error');
        loadWithdrawRequests();
        
    } catch (error) {
        console.error('Reject error:', error);
    }
}

// ==================== تبديل اللغة ====================
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    updateUI();
    showNotification(`Language changed to ${currentLanguage === 'en' ? 'English' : 'العربية'}`, 'success');
}

// ==================== تهيئة التطبيق ====================
async function init() {
    try {
        // تهيئة Telegram Web App
        const tg = window.Telegram?.WebApp;
        if (tg) {
            tg.expand();
            tg.ready();
            tg.setHeaderColor('#030405');
            tg.setBackgroundColor('#030405');
        }
        
        // تهيئة TON Connect
        await initTonConnect();
        
        // التحقق من وجود معرف المشرف
        adminMode = localStorage.getItem('admin_mode') === 'true';
        
        // إضافة زر تبديل اللغة في الهيدر
        const header = document.querySelector('.header-content');
        const langBtn = document.createElement('button');
        langBtn.className = 'lang-toggle';
        langBtn.innerHTML = '🌐';
        langBtn.onclick = toggleLanguage;
        header.appendChild(langBtn);
        
        // مستمع حالة المصادقة
        onAuthStateChanged(auth, (user) => {
            if (user) {
                currentUser = user;
                initUser(user);
            } else {
                signInAnonymously(auth).catch(error => {
                    console.error('Auth error:', error);
                    showNotification('Authentication error', 'error');
                });
            }
        });
        
        // ==================== إعداد مستمعي الأحداث ====================
        
        // التنقل بين التبويبات
        document.querySelectorAll('.nav-item-3d').forEach(item => {
            item.onclick = () => {
                const tabId = item.dataset.tab;
                document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
                document.querySelectorAll('.nav-item-3d').forEach(nav => nav.classList.remove('active'));
                document.getElementById(tabId).classList.add('active');
                item.classList.add('active');
            };
        });
        
        // زر المطالبة
        document.getElementById('claim-btn').onclick = claimMining;
        
        // زر نسخ رابط الإحالة
        document.getElementById('copy-ref-btn').onclick = () => {
            const link = document.getElementById('ref-link');
            link.select();
            navigator.clipboard.writeText(link.value);
            showNotification('Referral link copied!', 'success');
        };
        
        // زر نسخ عنوان المحفظة
        document.getElementById('copy-wallet-addr').onclick = () => {
            navigator.clipboard.writeText(TON_CONFIG.MINING_WALLET);
            showNotification('Wallet address copied!', 'success');
        };
        
        // زر السحب
        document.getElementById('withdraw-btn').onclick = () => {
            showModal('withdraw-modal');
        };
        
        // إغلاق النوافذ
        document.getElementById('close-rent-modal').onclick = () => {
            hideModal('rent-modal');
            if (transactionCheckInterval) {
                clearInterval(transactionCheckInterval);
            }
        };
        
        document.getElementById('close-withdraw-modal').onclick = () => {
            hideModal('withdraw-modal');
        };
        
        // تأكيد الدفع
        document.getElementById('confirm-rent-btn').onclick = async () => {
            if (!pendingRent) return;
            
            const wallet = tonConnectUI?.connectedWallet;
            if (!wallet) {
                showNotification('Please connect your wallet first', 'error');
                return;
            }
            
            // بدء مراقبة المعاملة
            startTransactionCheck(
                wallet.account.address,
                pendingRent.price,
                userData.uid,
                pendingRent.id
            );
            
            showNotification('Waiting for payment confirmation...', 'info');
        };
        
        // تقديم طلب سحب
        document.getElementById('submit-withdraw-btn').onclick = () => {
            const amount = parseFloat(document.getElementById('withdraw-amount').value);
            const address = document.getElementById('withdraw-address').value;
            
            if (!address.startsWith('UQ')) {
                showNotification('Invalid TON address', 'error');
                return;
            }
            
            requestWithdraw(amount, address);
        };
        
        // زر ربط المحفظة في نافذة التأجير
        document.getElementById('rent-connect-button').onclick = () => {
            tonConnectUI?.openModal();
        };
        
        // فتح لوحة المشرف (للمشرف فقط)
        if (userData?.uid === TON_CONFIG.ADMIN_ID) {
            const adminBtn = document.createElement('button');
            adminBtn.className = 'admin-float-btn';
            adminBtn.innerHTML = '👑';
            adminBtn.onclick = () => {
                loadWithdrawRequests();
                showModal('admin-modal');
            };
            document.body.appendChild(adminBtn);
        }
        
    } catch (error) {
        console.error('Init error:', error);
    }
}

// بدء التطبيق
document.addEventListener('DOMContentLoaded', init);

// إضافة بعض الأنماط الإضافية للعناصر الجديدة
const style = document.createElement('style');
style.textContent = `
    .lang-toggle {
        background: none;
        border: 1px solid var(--glass-border-strong);
        border-radius: 30px;
        padding: 5px 10px;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        transition: all 0.3s;
        margin-left: 10px;
    }
    
    .lang-toggle:hover {
        background: var(--primary);
        transform: scale(1.05);
    }
    
    .admin-float-btn {
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, gold, orange);
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        box-shadow: 0 0 30px gold;
        z-index: 1000;
        animation: float 3s infinite;
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
    
    .pulse {
        animation: pulse 1s infinite;
    }
    
    .machine-card.active {
        border: 2px solid var(--secondary);
        box-shadow: 0 0 30px var(--secondary-glow);
    }
    
    .machine-card.expired {
        opacity: 0.5;
        filter: grayscale(0.5);
    }
`;

document.head.appendChild(style);

// تصدير للاستخدام في وحدات أخرى
export { 
    claimMining, 
    requestWithdraw, 
    toggleLanguage,
    checkAchievements 
};
