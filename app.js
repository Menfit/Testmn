// ==================== Firebase Config ====================
const firebaseConfig = {
    apiKey: "AIzaSyD39Q7g7A2MpuuN42eWtr_bOPt-_1tvbhI",
    authDomain: "ton-71a00.firebaseapp.com",
    projectId: "ton-71a00",
    storageBucket: "ton-71a00.firebasestorage.app",
    messagingSenderId: "97952285427",
    appId: "1:97952285427:web:e7704e52fd108bdabded86",
    measurementId: "G-8SQSQNRCVK"
};

// ==================== Initialize Firebase (CDN version) ====================
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// ==================== TON Config ====================
const TON_CONFIG = {
    MINING_WALLET: "UQD9mkiazYKara0KxRbRBIlCMnqtLmjS3aMlj2iSCrnIY0eH",
    ADMIN_ID: "1653918641",
    MIN_WITHDRAW: 1.0,
    API_KEY: "e53929324c8cabe222c3005cd3518fe1f3c7861aa6b02442d05fb630ab31fa78",
    TON_CENTER_API: "https://toncenter.com/api/v2/"
};

// ==================== Mining Machines ====================
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
        color: '#808080' 
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
        color: '#0088cc' 
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
        color: '#00f2ff' 
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
        color: '#bc13fe' 
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
        color: '#ffaa00' 
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
        color: '#ff4444' 
    }
];

// ==================== Global Variables ====================
let currentUser = null;
let userData = null;
let miningInterval = null;
let currentLang = 'en'; // ENGLISH IS DEFAULT 🇬🇧

// ==================== Translations (Secondary Support) ====================
const translations = {
    en: {
        loading: 'TON MINING PRO',
        loadingSub: 'Preparing mining platform...',
        balance: 'Balance',
        mining: 'Mining',
        network: 'Network',
        wallet: 'Wallet',
        claim: 'CLAIM REWARD',
        ready: 'READY TO CLAIM',
        copy: 'COPY',
        withdraw: 'WITHDRAW',
        minWithdraw: 'Min 1 TON • 1-5 min confirmation',
        connect: 'Connect Wallet',
        free: 'FREE',
        days: 'days',
        hours: 'h',
        referLink: 'Referral Link',
        friends: 'Friends',
        commission: 'Commission',
        copied: 'Copied to clipboard!',
        paymentSent: 'Payment confirmed! Machine activated.',
        waiting: 'Waiting for payment confirmation...',
        error: 'Error occurred',
        success: 'Success',
        claimSuccess: '🎉 You claimed ',
        withdrawRequested: 'Withdrawal request submitted',
        insufficientBalance: 'Insufficient balance',
        minWithdrawError: 'Minimum withdrawal is 1 TON',
        invalidAddress: 'Invalid TON address',
        connectWalletFirst: 'Please connect wallet first',
        transactionTimeout: 'Payment timeout. Please try again.',
        activated: 'Machine activated successfully'
    },
    ar: {
        loading: 'TON MINING PRO',
        loadingSub: 'تجهيز منصة التعدين...',
        balance: 'الرصيد',
        mining: 'التعدين',
        network: 'الشبكة',
        wallet: 'المحفظة',
        claim: 'مطالبة الأرباح',
        ready: 'جاهز للمطالبة',
        copy: 'نسخ',
        withdraw: 'سحب',
        minWithdraw: 'حد أدنى 1 TON • تأكيد 1-5 دقائق',
        connect: 'ربط المحفظة',
        free: 'مجاني',
        days: 'أيام',
        hours: 'س',
        referLink: 'رابط الإحالة',
        friends: 'الأصدقاء',
        commission: 'العمولات',
        copied: 'تم النسخ!',
        paymentSent: 'تم تأكيد الدفع! تم تفعيل الجهاز',
        waiting: 'في انتظار تأكيد الدفع...',
        error: 'حدث خطأ',
        success: 'تم بنجاح',
        claimSuccess: '🎉 حصلت على ',
        withdrawRequested: 'تم تقديم طلب السحب',
        insufficientBalance: 'الرصيد غير كافي',
        minWithdrawError: 'الحد الأدنى للسحب 1 TON',
        invalidAddress: 'عنوان TON غير صالح',
        connectWalletFirst: 'الرجاء ربط المحفظة أولاً',
        transactionTimeout: 'انتهت مهلة الدفع. حاول مجدداً',
        activated: 'تم تفعيل الجهاز بنجاح'
    }
};

// Translation function (defaults to English)
function t(key) {
    return translations[currentLang][key] || translations['en'][key] || key;
}

// ==================== Telegram WebApp ====================
const tg = window.Telegram?.WebApp;
let referralCode = '';

if (tg) {
    tg.expand();
    tg.ready();
    tg.setHeaderColor('#030405');
    tg.setBackgroundColor('#030405');
    
    // Get referral code from Telegram
    const startParam = tg.initDataUnsafe?.start_param || '';
    referralCode = startParam || new URLSearchParams(window.location.search).get('start') || '';
}

// ==================== Notification System ====================
function showNotification(message, type = 'info') {
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
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// ==================== Celebration Effect ====================
function celebrate() {
    const container = document.getElementById('app-container');
    for (let i = 0; i < 15; i++) {
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

// ==================== Format Time ====================
function formatTime(ms) {
    if (ms <= 0) return '00:00:00';
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// ==================== Format Address ====================
function formatAddress(address) {
    if (!address) return '';
    return address.slice(0, 6) + '...' + address.slice(-4);
}

// ==================== Initialize User ====================
async function initUser() {
    try {
        const user = auth.currentUser;
        if (!user) return;
        
        const userRef = db.collection('users').doc(user.uid);
        const userSnap = await userRef.get();
        
        const tgUser = tg?.initDataUnsafe?.user;
        const username = tgUser?.username || `user_${user.uid.slice(0, 6)}`;
        
        if (!userSnap.exists) {
            // New user
            const newUser = {
                uid: user.uid,
                username: username,
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
            
            // Check if user was referred
            if (referralCode && referralCode !== user.uid) {
                newUser.referredBy = referralCode;
                
                // Add reward to referrer
                const referrerRef = db.collection('users').doc(referralCode);
                await referrerRef.update({
                    referrals: firebase.firestore.FieldValue.arrayUnion(user.uid),
                    refEarnings: firebase.firestore.FieldValue.increment(0.1)
                });
            }
            
            await userRef.set(newUser);
            userData = newUser;
            showNotification(t('success'), 'success');
        } else {
            userData = userSnap.data();
        }
        
        // Update UI
        updateUI();
        
        // Start mining timer
        startMiningTimer();
        
        // Hide loading screen
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('app-container').style.display = 'flex';
        }, 500);
        
        // Listen for realtime updates
        userRef.onSnapshot((snap) => {
            if (snap.exists) {
                userData = snap.data();
                updateUI();
            }
        });
        
    } catch (error) {
        console.error('Init error:', error);
        showNotification(t('error') + ': ' + error.message, 'error');
    }
}

// ==================== Update UI ====================
function updateUI() {
    if (!userData) return;
    
    document.getElementById('total-balance').textContent = userData.balance.toFixed(4);
    document.getElementById('wallet-balance').textContent = userData.balance.toFixed(4) + ' TON';
    document.getElementById('user-name').textContent = '@' + userData.username;
    
    // Unique referral link for each user
    const refLink = `https://t.me/TONMininginstantbot/Ton?startapp=${userData.uid}`;
    document.getElementById('ref-link').value = refLink;
    
    document.getElementById('ref-count').textContent = userData.referrals?.length || 0;
    document.getElementById('ref-earnings').textContent = (userData.refEarnings || 0).toFixed(4);
    
    renderMachines();
}

// ==================== Render Machines ====================
function renderMachines() {
    const container = document.getElementById('machines-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    MACHINES.forEach(machine => {
        const isActive = userData.activeMachine === machine.id;
        const isExpired = userData.machineExpiry < Date.now() && machine.id !== 'm1';
        
        const card = document.createElement('div');
        card.className = `machine-card ${isActive ? 'active' : ''} ${isExpired ? 'expired' : ''}`;
        card.setAttribute('onclick', `selectMachine('${machine.id}')`);
        
        const name = currentLang === 'ar' ? machine.nameAr : machine.name;
        const priceText = machine.price === 0 ? t('free') : `${machine.price} TON`;
        
        card.innerHTML = `
            <div class="machine-glow" style="background: radial-gradient(circle at 50% 0%, ${machine.color}40, transparent);"></div>
            ${isActive ? '<div class="machine-badge">ACTIVE</div>' : ''}
            <div class="machine-header">
                <span class="machine-icon" style="color: ${machine.color}">${machine.icon}</span>
                <span class="machine-name">${name}</span>
            </div>
            <div class="machine-price ${machine.price === 0 ? 'free' : ''}">${priceText}</div>
            <div class="machine-stats">
                <span>${machine.yield} TON</span>
                <span>${machine.interval/3600000}${t('hours')}</span>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// ==================== Select Machine ====================
window.selectMachine = async function(machineId) {
    const machine = MACHINES.find(m => m.id === machineId);
    
    if (machine.price === 0) {
        // Free machine
        await activateMachine(machineId);
    } else {
        // Paid machine - show payment modal
        showPaymentModal(machine);
    }
};

// ==================== Activate Machine ====================
async function activateMachine(machineId) {
    try {
        const userRef = db.collection('users').doc(userData.uid);
        const machine = MACHINES.find(m => m.id === machineId);
        
        await userRef.update({
            activeMachine: machineId,
            machineExpiry: Date.now() + (machine.duration || Infinity),
            lastClaim: Date.now()
        });
        
        showNotification(t('activated'), 'success');
        celebrate();
        
    } catch (error) {
        console.error('Activation error:', error);
        showNotification(t('error'), 'error');
    }
}

// ==================== Show Payment Modal ====================
function showPaymentModal(machine) {
    const modal = document.getElementById('rent-modal');
    document.getElementById('rent-machine-name').textContent = currentLang === 'ar' ? machine.nameAr : machine.name;
    document.getElementById('rent-price').textContent = machine.price + ' TON';
    
    const durationDays = Math.floor(machine.duration / (24 * 3600000));
    document.getElementById('rent-duration').textContent = durationDays + ' ' + t('days');
    
    document.getElementById('mining-wallet-address').textContent = formatAddress(TON_CONFIG.MINING_WALLET);
    document.getElementById('full-address').textContent = TON_CONFIG.MINING_WALLET;
    
    modal.style.display = 'flex';
    
    // Save selected machine
    window.pendingMachine = machine;
}

// ==================== Copy Wallet Address ====================
window.copyWalletAddress = function() {
    navigator.clipboard.writeText(TON_CONFIG.MINING_WALLET);
    showNotification(t('copied'), 'success');
};

// ==================== Confirm Payment ====================
window.confirmPayment = async function() {
    const machine = window.pendingMachine;
    if (!machine) return;
    
    showNotification(t('waiting'), 'info');
    document.getElementById('rent-modal').style.display = 'none';
    
    // Start checking transaction
    startTransactionCheck(machine);
};

// ==================== Check Transaction with TON Center API ====================
async function startTransactionCheck(machine) {
    let attempts = 0;
    const maxAttempts = 60; // 5 minutes (every 5 seconds)
    
    showNotification(t('waiting'), 'info');
    
    const checkInterval = setInterval(async () => {
        attempts++;
        
        try {
            // Use TON Center API with your key
            const response = await fetch(
                `${TON_CONFIG.TON_CENTER_API}getTransactions?address=${TON_CONFIG.MINING_WALLET}&limit=10&api_key=${TON_CONFIG.API_KEY}`
            );
            const data = await response.json();
            
            if (data.ok && data.result) {
                for (const tx of data.result) {
                    // Check amount
                    const value = parseFloat(tx.in_msg?.value) || 0;
                    if (Math.abs(value - machine.price) < 0.01) {
                        // Payment confirmed
                        clearInterval(checkInterval);
                        await activateMachine(machine.id);
                        showNotification(t('paymentSent'), 'success');
                        return;
                    }
                }
            }
        } catch (error) {
            console.error('Check error:', error);
        }
        
        if (attempts >= maxAttempts) {
            clearInterval(checkInterval);
            showNotification(t('transactionTimeout'), 'error');
        }
    }, 5000);
}

// ==================== Mining Timer ====================
function startMiningTimer() {
    if (miningInterval) clearInterval(miningInterval);
    
    miningInterval = setInterval(() => {
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
        
        // Shake effect at 90%
        if (progress >= 90 && progress < 100) {
            document.querySelector('.mining-3d')?.classList.add('shake-effect');
        } else {
            document.querySelector('.mining-3d')?.classList.remove('shake-effect');
        }
        
        if (progress >= 100) {
            timerEl.textContent = t('ready');
            claimBtn.disabled = false;
            claimBtn.classList.add('pulse');
        } else {
            const remaining = machine.interval - elapsed;
            timerEl.textContent = formatTime(remaining);
            claimBtn.disabled = true;
            claimBtn.classList.remove('pulse');
        }
        
        // Update rate
        document.getElementById('current-rate').textContent = `${machine.yield} TON/${machine.interval/3600000}h`;
        
    }, 1000);
}

// ==================== Claim Mining ====================
window.claimMining = async function() {
    if (!userData) return;
    
    try {
        const machine = MACHINES.find(m => m.id === userData.activeMachine);
        const userRef = db.collection('users').doc(userData.uid);
        
        await userRef.update({
            balance: firebase.firestore.FieldValue.increment(machine.yield),
            lastClaim: Date.now(),
            claims: firebase.firestore.FieldValue.increment(1)
        });
        
        showNotification(t('claimSuccess') + machine.yield + ' TON', 'success');
        celebrate();
        
    } catch (error) {
        console.error('Claim error:', error);
        showNotification(t('error'), 'error');
    }
};

// ==================== Request Withdraw ====================
window.requestWithdraw = async function() {
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    const address = document.getElementById('withdraw-address').value;
    
    if (amount < TON_CONFIG.MIN_WITHDRAW) {
        showNotification(t('minWithdrawError'), 'error');
        return;
    }
    
    if (amount > userData.balance) {
        showNotification(t('insufficientBalance'), 'error');
        return;
    }
    
    if (!address.startsWith('UQ')) {
        showNotification(t('invalidAddress'), 'error');
        return;
    }
    
    try {
        // Save withdrawal request
        await db.collection('withdrawals').add({
            userId: userData.uid,
            username: userData.username,
            amount: amount,
            address: address,
            status: 'pending',
            createdAt: Date.now()
        });
        
        // Deduct balance
        await db.collection('users').doc(userData.uid).update({
            balance: firebase.firestore.FieldValue.increment(-amount)
        });
        
        showNotification(t('withdrawRequested'), 'success');
        document.getElementById('withdraw-modal').style.display = 'none';
        
        // If user is admin, show admin panel
        if (userData.uid === TON_CONFIG.ADMIN_ID) {
            loadWithdrawRequests();
            document.getElementById('admin-modal').style.display = 'flex';
        }
        
    } catch (error) {
        console.error('Withdraw error:', error);
        showNotification(t('error'), 'error');
    }
};

// ==================== Load Withdraw Requests (Admin) ====================
async function loadWithdrawRequests() {
    if (!userData || userData.uid !== TON_CONFIG.ADMIN_ID) return;
    
    try {
        const snapshot = await db.collection('withdrawals')
            .where('status', '==', 'pending')
            .orderBy('createdAt', 'desc')
            .limit(50)
            .get();
        
        const container = document.getElementById('withdraw-requests-list');
        container.innerHTML = '';
        
        snapshot.forEach(doc => {
            const req = doc.data();
            const item = document.createElement('div');
            item.className = 'request-item';
            item.innerHTML = `
                <div class="request-user">@${req.username}</div>
                <div class="request-amount">${req.amount} TON</div>
                <div class="request-address">${req.address}</div>
                <div class="request-actions">
                    <button class="approve-btn" onclick="approveWithdrawal('${doc.id}', ${req.amount}, '${req.address}')">✓ Approve</button>
                    <button class="reject-btn" onclick="rejectWithdrawal('${doc.id}')">✗ Reject</button>
                </div>
            `;
            container.appendChild(item);
        });
        
    } catch (error) {
        console.error('Load requests error:', error);
    }
}

// ==================== Approve Withdrawal (Admin) ====================
window.approveWithdrawal = async function(id, amount, address) {
    try {
        await db.collection('withdrawals').doc(id).update({
            status: 'approved',
            approvedAt: Date.now()
        });
        
        showNotification(`Approved ${amount} TON to ${formatAddress(address)}`, 'success');
        loadWithdrawRequests();
        
    } catch (error) {
        console.error('Approve error:', error);
    }
};

// ==================== Reject Withdrawal (Admin) ====================
window.rejectWithdrawal = async function(id) {
    try {
        const withdrawDoc = await db.collection('withdrawals').doc(id).get();
        const withdrawData = withdrawDoc.data();
        
        // Return funds to user
        await db.collection('users').doc(withdrawData.userId).update({
            balance: firebase.firestore.FieldValue.increment(withdrawData.amount)
        });
        
        await db.collection('withdrawals').doc(id).update({
            status: 'rejected',
            rejectedAt: Date.now()
        });
        
        showNotification('Withdrawal rejected', 'error');
        loadWithdrawRequests();
        
    } catch (error) {
        console.error('Reject error:', error);
    }
};

// ==================== Copy Referral Link ====================
window.copyRefLink = function() {
    const link = document.getElementById('ref-link');
    link.select();
    navigator.clipboard.writeText(link.value);
    showNotification(t('copied'), 'success');
};

// ==================== Toggle Language ====================
window.toggleLanguage = function() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.querySelector('.lang-toggle').textContent = currentLang === 'en' ? '🇸🇦' : '🇬🇧';
    updateUI();
    showNotification(`Language changed to ${currentLang === 'en' ? 'English' : 'العربية'}`, 'success');
};

// ==================== Close Modals ====================
window.closeModal = function(modalId) {
    document.getElementById(modalId).style.display = 'none';
};

// ==================== Open Withdraw Modal ====================
window.openWithdrawModal = function() {
    document.getElementById('withdraw-modal').style.display = 'flex';
};

// ==================== Authentication ====================
auth.onAuthStateChanged((user) => {
    if (user) {
        currentUser = user;
        initUser();
    } else {
        auth.signInAnonymously().catch(error => {
            console.error('Auth error:', error);
            showNotification(t('error') + ': ' + error.message, 'error');
        });
    }
});

// ==================== Add Language Toggle Button ====================
document.addEventListener('DOMContentLoaded', () => {
    // Add language toggle to header
    const header = document.querySelector('.header-content');
    if (header) {
        const langBtn = document.createElement('button');
        langBtn.className = 'lang-toggle';
        langBtn.textContent = '🇸🇦'; // Arabic flag when English is default
        langBtn.onclick = toggleLanguage;
        header.appendChild(langBtn);
    }
    
    // Add admin button if user is admin (will be checked after auth)
    setTimeout(() => {
        if (userData && userData.uid === TON_CONFIG.ADMIN_ID) {
            const adminBtn = document.createElement('button');
            adminBtn.className = 'admin-float-btn';
            adminBtn.innerHTML = '👑';
            adminBtn.onclick = () => {
                loadWithdrawRequests();
                document.getElementById('admin-modal').style.display = 'flex';
            };
            document.body.appendChild(adminBtn);
        }
    }, 2000);
});
