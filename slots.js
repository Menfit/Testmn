// ============================================
// PROFESSIONAL CASINO SLOTS GAME - v2.0
// نسخة احترافية من ماكينة السلوتس مع تأثيرات متقدمة
// ============================================

// ====== 1. SLOTS CONFIGURATION ======
const SLOTS_CONFIG = {
    SYMBOLS: [
        { symbol: '🍒', weight: 30, value: 0.25, type: 'USDT', color: '#ff4444', name: 'Cherry' },
        { symbol: '🍋', weight: 25, value: 0.25, type: 'USDT', color: '#ffdd00', name: 'Lemon' },
        { symbol: '🍇', weight: 20, value: 0.5, type: 'USDT', color: '#aa44ff', name: 'Grape' },
        { symbol: '💎', weight: 15, value: 1.0, type: 'USDT', color: '#00f2ff', name: 'Diamond' },
        { symbol: '💰', weight: 10, value: 2.0, type: 'TON', color: '#ffaa00', name: 'Money' },
        { symbol: '⭐', weight: 8, value: 5.0, type: 'TON', color: '#ffff00', name: 'Star' },
        { symbol: '👑', weight: 5, value: 10.0, type: 'TON', color: '#ffdd00', name: 'Crown' },
        { symbol: '7️⃣', weight: 3, value: 25.0, type: 'TON', color: '#ff4444', name: 'Lucky Seven' },
        { symbol: '🎰', weight: 1, value: 100, type: 'TON', color: '#ff00ff', name: 'Jackpot', jackpot: true }
    ],
    REELS: 3,
    SPIN_DURATION: 800,
    SPIN_SPEED: 35,
    WIN_MULTIPLIER: {
        TWO_MATCH: 1.5,
        THREE_MATCH: 3.0,
        JACKPOT: 10.0
    }
};

// ====== 2. SLOTS GAME CLASS ======
class SlotsGame {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.isSpinning = false;
        this.reels = [[], [], []];
        this.results = [null, null, null];
        this.currentBet = 0.15; // TON
        this.winAmount = 0;
        this.spinCount = 0;
        this.listeners = [];
        
        this.init();
    }
    
    init() {
        console.log("🎰 Initializing Slots Game...");
        this.createReels();
        this.setupEventListeners();
        this.render();
    }
    
    // ====== 3. REEL CREATION ======
    createReels() {
        // ملء كل بكرة برموز عشوائية
        for (let i = 0; i < SLOTS_CONFIG.REELS; i++) {
            this.reels[i] = this.generateReel();
        }
    }
    
    generateReel() {
        const reel = [];
        // إضافة 20 رمز لكل بكرة لتأثير الدوران الطويل
        for (let i = 0; i < 20; i++) {
            reel.push(this.getRandomSymbol());
        }
        return reel;
    }
    
    getRandomSymbol() {
        const totalWeight = SLOTS_CONFIG.SYMBOLS.reduce((sum, s) => sum + s.weight, 0);
        let random = Math.random() * totalWeight;
        
        for (const symbol of SLOTS_CONFIG.SYMBOLS) {
            random -= symbol.weight;
            if (random <= 0) return symbol;
        }
        return SLOTS_CONFIG.SYMBOLS[0];
    }
    
    // ====== 4. SPIN LOGIC ======
    async spin() {
        if (this.isSpinning) {
            console.warn("⚠️ Already spinning!");
            return false;
        }
        
        // التحقق من الرصيد
        if (!BalanceManager.hasEnoughBalance('TON', this.currentBet)) {
            showToastPro('❌ Insufficient balance!', 'error');
            return false;
        }
        
        this.isSpinning = true;
        this.spinCount++;
        
        // خصم الرهان من الرصيد
        BalanceManager.updateBalance('TON', -this.currentBet, 'Slots Spin');
        
        // تشغيل الدوران
        await this.animateSpin();
        
        // حساب النتائج
        this.calculateResults();
        
        // عرض النتائج
        await this.showResults();
        
        this.isSpinning = false;
        return true;
    }
    
    // ====== 5. ANIMATION ======
    async animateSpin() {
        return new Promise((resolve) => {
            const startTime = Date.now();
            const duration = SLOTS_CONFIG.SPIN_DURATION;
            
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // تأثير التسارع والتباطؤ
                const easeProgress = this.easeOutCubic(progress);
                
                // تحديث موضع كل بكرة
                for (let i = 0; i < SLOTS_CONFIG.REELS; i++) {
                    const reelElement = document.querySelector(`.slot-reel-${i}`);
                    if (reelElement) {
                        const offset = easeProgress * 300; // بكسل
                        reelElement.style.transform = `translateY(${offset}px)`;
                    }
                }
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            };
            
            animate();
        });
    }
    
    easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }
    
    // ====== 6. RESULT CALCULATION ======
    calculateResults() {
        // اختيار رمز عشوائي من كل بكرة (الرمز الأوسط)
        for (let i = 0; i < SLOTS_CONFIG.REELS; i++) {
            const randomIndex = Math.floor(Math.random() * this.reels[i].length);
            this.results[i] = this.reels[i][randomIndex];
        }
        
        console.log("🎰 Results:", this.results.map(r => r.symbol));
    }
    
    // ====== 7. WIN DETECTION ======
    checkWin() {
        const [r1, r2, r3] = this.results;
        
        // جاكبوت - ثلاثة رموز متطابقة
        if (r1.symbol === r2.symbol && r2.symbol === r3.symbol) {
            if (r1.jackpot) {
                this.winAmount = this.currentBet * 100; // جاكبوت ضخم
                return { type: 'JACKPOT', multiplier: 100 };
            } else {
                this.winAmount = this.currentBet * SLOTS_CONFIG.WIN_MULTIPLIER.THREE_MATCH;
                return { type: 'THREE_MATCH', multiplier: SLOTS_CONFIG.WIN_MULTIPLIER.THREE_MATCH };
            }
        }
        
        // فوز بثلاثة أرقام - أي اثنين متطابقين
        if (r1.symbol === r2.symbol || r2.symbol === r3.symbol || r1.symbol === r3.symbol) {
            this.winAmount = this.currentBet * SLOTS_CONFIG.WIN_MULTIPLIER.TWO_MATCH;
            return { type: 'TWO_MATCH', multiplier: SLOTS_CONFIG.WIN_MULTIPLIER.TWO_MATCH };
        }
        
        return { type: 'LOSS', multiplier: 0 };
    }
    
    // ====== 8. SHOW RESULTS ======
    async showResults() {
        const winInfo = this.checkWin();
        
        // عرض الرموز النهائية
        this.displayFinalSymbols();
        
        if (winInfo.type === 'LOSS') {
            showToastPro('😔 Try again!', 'info');
            return;
        }
        
        // إضافة الفوز إلى الرصيد
        BalanceManager.updateBalance(this.results[0].type, this.winAmount, 'Slots Win');
        
        // تأثيرات الفوز
        await this.playWinEffects(winInfo);
        
        // رسالة الفوز
        this.showWinMessage(winInfo);
    }
    
    displayFinalSymbols() {
        for (let i = 0; i < SLOTS_CONFIG.REELS; i++) {
            const reelElement = document.querySelector(`.slot-reel-${i}`);
            if (reelElement) {
                reelElement.innerHTML = `<div class="slot-symbol">${this.results[i].symbol}</div>`;
                reelElement.style.transform = 'translateY(0)';
            }
        }
    }
    
    async playWinEffects(winInfo) {
        // تأثير الاهتزاز
        this.shake();
        
        // تأثير الإضاءة
        this.flashLights(winInfo.type);
        
        // صوت الفوز
        if (typeof VegasAudio !== 'undefined') {
            if (winInfo.type === 'JACKPOT') {
                VegasAudio.jackpot();
            } else {
                VegasAudio.win();
            }
        }
        
        // انتظر التأثيرات
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    shake() {
        const container = this.container;
        container.classList.add('shake-intense');
        setTimeout(() => container.classList.remove('shake-intense'), 500);
    }
    
    flashLights(winType) {
        const container = this.container;
        const intensity = winType === 'JACKPOT' ? 'intense' : 'normal';
        container.classList.add(`flash-${intensity}`);
        setTimeout(() => container.classList.remove(`flash-${intensity}`), 800);
    }
    
    showWinMessage(winInfo) {
        let message = '';
        let icon = '';
        
        switch(winInfo.type) {
            case 'JACKPOT':
                message = `🎰🎰🎰 JACKPOT! ${this.winAmount.toFixed(2)} ${this.results[0].type}!`;
                icon = '👑';
                break;
            case 'THREE_MATCH':
                message = `🎉 BIG WIN! ${this.winAmount.toFixed(2)} ${this.results[0].type}!`;
                icon = '⭐';
                break;
            case 'TWO_MATCH':
                message = `✨ YOU WON! ${this.winAmount.toFixed(2)} ${this.results[0].type}!`;
                icon = '💰';
                break;
        }
        
        showToastPro(message, 'success');
        
        // عرض نافذة الفوز
        if (typeof showWinPopup !== 'undefined') {
            showWinPopup(this.winAmount, this.results[0].type, winInfo.type === 'JACKPOT' ? 'jackpot' : 'big');
        }
    }
    
    // ====== 9. EVENT LISTENERS ======
    setupEventListeners() {
        const spinBtn = document.getElementById('slotsSpinBtn');
        const turboBtn = document.getElementById('slotsTurboBtn');
        const freeBtn = document.getElementById('slotsFreeBtn');
        
        if (spinBtn) {
            spinBtn.addEventListener('click', () => this.spin());
            this.listeners.push({ element: spinBtn, event: 'click', handler: () => this.spin() });
        }
        
        if (turboBtn) {
            turboBtn.addEventListener('click', () => this.spinTurbo());
            this.listeners.push({ element: turboBtn, event: 'click', handler: () => this.spinTurbo() });
        }
        
        if (freeBtn) {
            freeBtn.addEventListener('click', () => this.spinFree());
            this.listeners.push({ element: freeBtn, event: 'click', handler: () => this.spinFree() });
        }
        
        console.log("✅ Event listeners attached");
    }
    
    async spinTurbo() {
        // نسخة أسرع من الدوران برهان أعلى
        const originalBet = this.currentBet;
        this.currentBet = originalBet * 2; // رهان مضاعف
        
        const result = await this.spin();
        
        this.currentBet = originalBet;
        return result;
    }
    
    async spinFree() {
        // دوران مجاني
        const originalBet = this.currentBet;
        this.currentBet = 0;
        
        const result = await this.spin();
        
        this.currentBet = originalBet;
        return result;
    }
    
    // ====== 10. RENDER ======
    render() {
        if (!this.container) return;
        
        this.container.innerHTML = `
            <div class="slots-container-pro">
                <div class="slots-header">
                    <h2>🎰 SLOTS MACHINE</h2>
                    <div class="slots-info">
                        <span>Bet: <strong>${this.currentBet} TON</strong></span>
                        <span>Spins: <strong>${this.spinCount}</strong></span>
                    </div>
                </div>
                
                <div id="slotReels" class="slot-reels">
                    <div class="slot-reel-wrapper">
                        <div class="slot-reel-pro slot-reel-0">
                            ${this.reels[0].map(s => `<div class="slot-symbol">${s.symbol}</div>`).join('')}
                        </div>
                    </div>
                    <div class="slot-reel-wrapper">
                        <div class="slot-reel-pro slot-reel-1">
                            ${this.reels[1].map(s => `<div class="slot-symbol">${s.symbol}</div>`).join('')}
                        </div>
                    </div>
                    <div class="slot-reel-wrapper">
                        <div class="slot-reel-pro slot-reel-2">
                            ${this.reels[2].map(s => `<div class="slot-symbol">${s.symbol}</div>`).join('')}
                        </div>
                    </div>
                    <div class="win-line"></div>
                </div>
                
                <div class="slots-controls">
                    <button id="slotsFreeBtn" class="slot-btn-pro free" ${this.isSpinning ? 'disabled' : ''}>
                        <i class="fas fa-star"></i> FREE
                    </button>
                    <button id="slotsSpinBtn" class="slot-btn-pro spin" ${this.isSpinning ? 'disabled' : ''}>
                        <i class="fas fa-play"></i> SPIN
                    </button>
                    <button id="slotsTurboBtn" class="slot-btn-pro turbo" ${this.isSpinning ? 'disabled' : ''}>
                        <i class="fas fa-bolt"></i> TURBO
                    </button>
                </div>
                
                <div class="payout-table-pro">
                    <div class="payout-title">💰 PAYOUT TABLE</div>
                    <div class="payout-grid">
                        ${SLOTS_CONFIG.SYMBOLS.slice(0, 6).map(s => `
                            <div class="payout-item">
                                <span class="symbol">${s.symbol}</span>
                                <span class="value">${s.value} ${s.type}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        this.setupEventListeners();
    }
    
    // ====== 11. CLEANUP ======
    destroy() {
        this.listeners.forEach(({ element, event, handler }) => {
            element.removeEventListener(event, handler);
        });
        this.listeners = [];
        console.log("✅ Slots game destroyed");
    }
}

// ====== 12. EXPORT ======
window.SlotsGame = SlotsGame;

// ====== 13. INITIALIZATION ======
let slotsGameInstance = null;

function initSlotsGame() {
    if (slotsGameInstance) {
        slotsGameInstance.destroy();
    }
    slotsGameInstance = new SlotsGame('slotsGameContainer');
    console.log("✅ Slots Game Initialized");
}

window.initSlotsGame = initSlotsGame;

console.log("✅ Professional Slots Game loaded successfully");
