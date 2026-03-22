// ============================================
// LEGENDARY FIRE WHEEL OF FORTUNE - v3.0
// عجلة حظ أسطورية مع تصميم ناري حديث
// ============================================

// ====== 1. LEGENDARY WHEEL CONFIG ======
const LEGENDARY_WHEEL_CONFIG = {
    SEGMENTS: 24,
    SPIN_DURATION: 4000,
    SPIN_SPEED: 360 * 8, // 8 دورات كاملة
    FIRE_INTENSITY: 0.8,
    GLOW_INTENSITY: 1.2,
    PARTICLE_COUNT: 50,
    PRIZES: [
        // الجوائز الصغيرة
        { amount: 0.1, currency: 'TON', color: '#ff4444', fireColor: '#ff0000', icon: '💰', label: '0.1 TON', weight: 10 },
        { amount: 0.25, currency: 'TON', color: '#ff5555', fireColor: '#ff3333', icon: '💰', label: '0.25 TON', weight: 10 },
        { amount: 0.5, currency: 'TON', color: '#ff6666', fireColor: '#ff6666', icon: '💰', label: '0.5 TON', weight: 9 },
        { amount: 1, currency: 'TON', color: '#ff7777', fireColor: '#ff9900', icon: '💰', label: '1 TON', weight: 8 },
        
        // جوائز متوسطة
        { amount: 2, currency: 'TON', color: '#ff8800', fireColor: '#ffaa00', icon: '🔥', label: '2 TON', weight: 6 },
        { amount: 5, currency: 'TON', color: '#ff9900', fireColor: '#ffbb00', icon: '🔥', label: '5 TON', weight: 5 },
        { amount: 10, currency: 'TON', color: '#ffaa00', fireColor: '#ffdd00', icon: '🔥', label: '10 TON', weight: 4 },
        
        // جوائز كبيرة
        { amount: 25, currency: 'TON', color: '#ffdd00', fireColor: '#ffff00', icon: '⭐', label: '25 TON', weight: 3 },
        { amount: 50, currency: 'TON', color: '#ffff00', fireColor: '#ffff88', icon: '👑', label: '50 TON', weight: 2 },
        
        // جوائز خاصة
        { amount: 0, currency: 'LUCK', color: '#aa44ff', fireColor: '#ff44ff', icon: '🍀', label: 'LUCKY', weight: 8 },
        { amount: 0, currency: 'FREE', color: '#8b6fcf', fireColor: '#aa77ff', icon: '🆓', label: 'FREE SPIN', weight: 7 },
        
        // جاكبوت
        { amount: 100, currency: 'TON', color: '#ff1111', fireColor: '#ff0000', icon: '🎰', label: '100 TON', jackpot: true, weight: 1 },
        { amount: 250, currency: 'TON', color: '#ff2222', fireColor: '#ff3333', icon: '👑', label: '250 TON', mega: true, weight: 1 },
        { amount: 0.1, currency: 'USDT', color: '#ff4444', fireColor: '#ff5555', icon: '💵', label: '0.1 USDT', weight: 10 },
        { amount: 0.25, currency: 'USDT', color: '#ff5555', fireColor: '#ff6666', icon: '💵', label: '0.25 USDT', weight: 10 },
        { amount: 0.5, currency: 'USDT', color: '#ff6666', fireColor: '#ff7777', icon: '💵', label: '0.5 USDT', weight: 9 },
        { amount: 1, currency: 'USDT', color: '#ff7777', fireColor: '#ff8888', icon: '💵', label: '1 USDT', weight: 8 },
        { amount: 2, currency: 'USDT', color: '#ff8800', fireColor: '#ffaa00', icon: '💵', label: '2 USDT', weight: 6 },
        { amount: 5, currency: 'USDT', color: '#ff9900', fireColor: '#ffbb00', icon: '💵', label: '5 USDT', weight: 5 },
        { amount: 10, currency: 'USDT', color: '#ffaa00', fireColor: '#ffdd00', icon: '💵', label: '10 USDT', weight: 4 },
        { amount: 25, currency: 'USDT', color: '#ffdd00', fireColor: '#ffff00', icon: '💵', label: '25 USDT', weight: 3 },
        { amount: 50, currency: 'USDT', color: '#ffff00', fireColor: '#ffff88', icon: '💵', label: '50 USDT', weight: 2 },
        { amount: 100, currency: 'USDT', color: '#ff1111', fireColor: '#ff0000', icon: '🎰', label: '100 USDT', jackpot: true, weight: 1 }
    ]
};

// ====== 2. FIRE PARTICLE SYSTEM ======
class FireParticle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 4;
        this.vy = (Math.random() - 0.5) * 4 - 2;
        this.life = 1;
        this.maxLife = 1;
        this.size = Math.random() * 8 + 4;
        this.color = ['#ff0000', '#ff3333', '#ff6666', '#ffaa00', '#ffdd00'][Math.floor(Math.random() * 5)];
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.1; // gravity
        this.life -= 0.02;
        this.size *= 0.95;
    }
    
    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
    
    isDead() {
        return this.life <= 0;
    }
}

// ====== 3. LEGENDARY WHEEL CLASS ======
class LegendaryFireWheel {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
        this.isSpinning = false;
        this.currentRotation = 0;
        this.spinCount = 0;
        this.currentBet = 0.25; // TON
        this.listeners = [];
        this.particles = [];
        this.animationId = null;
        this.wheelGlow = 0;
        this.wheelGlowDirection = 1;
        
        if (this.canvas) {
            this.setupCanvas();
            this.init();
            this.startParticleAnimation();
        }
    }
    
    setupCanvas() {
        const size = Math.min(window.innerWidth - 40, 500);
        this.canvas.width = size;
        this.canvas.height = size;
        this.radius = size / 2 - 20;
        this.centerX = size / 2;
        this.centerY = size / 2;
    }
    
    init() {
        console.log("🔥 Initializing Legendary Fire Wheel...");
        this.drawWheel();
        this.setupEventListeners();
    }
    
    // ====== 4. ADVANCED WHEEL DRAWING ======
    drawWheel() {
        if (!this.ctx) return;
        
        const ctx = this.ctx;
        
        // مسح الـ Canvas مع تأثير الحركة
        ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // رسم الهالة الخارجية (Cosmic Aura)
        this.drawCosmicAura();
        
        // رسم الجزيئات
        this.drawParticles(ctx);
        
        // رسم قطاعات العجلة
        this.drawSegments();
        
        // رسم الحدود المضيئة
        this.drawGlowingBorder();
        
        // رسم المركز المضيء
        this.drawLegendaryCenter();
        
        // رسم المؤشر
        this.drawLegendaryPointer();
        
        // رسم تأثيرات الإضاءة
        this.drawLightingEffects();
    }
    
    drawCosmicAura() {
        const ctx = this.ctx;
        
        // إنشاء تدرج دائري
        const gradient = ctx.createRadialGradient(
            this.centerX, this.centerY, this.radius - 50,
            this.centerX, this.centerY, this.radius + 30
        );
        
        gradient.addColorStop(0, 'rgba(255, 0, 0, 0)');
        gradient.addColorStop(0.5, `rgba(255, 100, 0, ${0.3 * this.wheelGlow})`);
        gradient.addColorStop(1, `rgba(255, 200, 0, ${0.1 * this.wheelGlow})`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, this.radius + 30, 0, Math.PI * 2);
        ctx.fill();
    }
    
    drawSegments() {
        const ctx = this.ctx;
        const segmentAngle = (Math.PI * 2) / LEGENDARY_WHEEL_CONFIG.SEGMENTS;
        
        for (let i = 0; i < LEGENDARY_WHEEL_CONFIG.SEGMENTS; i++) {
            const prize = LEGENDARY_WHEEL_CONFIG.PRIZES[i % LEGENDARY_WHEEL_CONFIG.PRIZES.length];
            const startAngle = i * segmentAngle + this.currentRotation;
            const endAngle = (i + 1) * segmentAngle + this.currentRotation;
            const midAngle = (startAngle + endAngle) / 2;
            
            // رسم القطاع الرئيسي
            this.drawSegment(startAngle, endAngle, prize, midAngle);
            
            // إضافة تأثير النار على القطاع
            if (prize.jackpot || prize.mega) {
                this.drawFireEffect(startAngle, endAngle);
            }
        }
    }
    
    drawSegment(startAngle, endAngle, prize, midAngle) {
        const ctx = this.ctx;
        
        // تدرج لوني نحو الداخل
        const gradient = ctx.createLinearGradient(
            this.centerX + Math.cos(midAngle) * this.radius,
            this.centerY + Math.sin(midAngle) * this.radius,
            this.centerX + Math.cos(midAngle) * (this.radius - 60),
            this.centerY + Math.sin(midAngle) * (this.radius - 60)
        );
        
        gradient.addColorStop(0, prize.color);
        gradient.addColorStop(0.5, prize.fireColor);
        gradient.addColorStop(1, '#333333');
        
        // رسم القطاع
        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, this.radius, startAngle, endAngle);
        ctx.lineTo(this.centerX, this.centerY);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // رسم الحدود
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // إضافة ظل داخلي
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // رسم النص والأيقونة
        this.drawSegmentLabel(startAngle, endAngle, prize);
    }
    
    drawSegmentLabel(startAngle, endAngle, prize) {
        const ctx = this.ctx;
        const midAngle = (startAngle + endAngle) / 2;
        const x = this.centerX + Math.cos(midAngle) * (this.radius - 50);
        const y = this.centerY + Math.sin(midAngle) * (this.radius - 50);
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(midAngle + Math.PI / 2);
        
        // رسم الأيقونة بظل
        ctx.font = 'bold 28px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // ظل الأيقونة
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillText(prize.icon, 1, -14);
        
        // الأيقونة الرئيسية
        ctx.fillStyle = 'white';
        ctx.fillText(prize.icon, 0, -15);
        
        // رسم القيمة
        ctx.font = 'bold 11px Arial';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillText(prize.label, 0, 12);
        
        ctx.restore();
    }
    
    drawFireEffect(startAngle, endAngle) {
        const ctx = this.ctx;
        const midAngle = (startAngle + endAngle) / 2;
        
        // رسم تأثير النار
        for (let i = 0; i < 3; i++) {
            const x = this.centerX + Math.cos(midAngle) * (this.radius - 20 - i * 10);
            const y = this.centerY + Math.sin(midAngle) * (this.radius - 20 - i * 10);
            
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, 15);
            gradient.addColorStop(0, `rgba(255, 255, 0, ${0.6 - i * 0.2})`);
            gradient.addColorStop(0.5, `rgba(255, 100, 0, ${0.4 - i * 0.15})`);
            gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, 15, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    drawGlowingBorder() {
        const ctx = this.ctx;
        
        // رسم الحدود الخارجية مع توهج
        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, this.radius, 0, Math.PI * 2);
        
        // توهج متعدد الطبقات
        ctx.shadowColor = 'rgba(255, 0, 0, 0.8)';
        ctx.shadowBlur = 30 * this.wheelGlow;
        ctx.strokeStyle = 'rgba(255, 215, 0, 0.8)';
        ctx.lineWidth = 4;
        ctx.stroke();
        
        ctx.shadowColor = 'rgba(255, 100, 0, 0.6)';
        ctx.shadowBlur = 15 * this.wheelGlow;
        ctx.strokeStyle = 'rgba(255, 150, 0, 0.6)';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
    
    drawLegendaryCenter() {
        const ctx = this.ctx;
        
        // الدائرة الخارجية
        const gradient1 = ctx.createRadialGradient(
            this.centerX, this.centerY, 0,
            this.centerX, this.centerY, 35
        );
        gradient1.addColorStop(0, '#ffff88');
        gradient1.addColorStop(0.5, '#ffdd00');
        gradient1.addColorStop(1, '#ff8800');
        
        ctx.fillStyle = gradient1;
        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, 35, 0, Math.PI * 2);
        ctx.fill();
        
        // الحدود
        ctx.strokeStyle = '#ffaa00';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // توهج
        ctx.shadowColor = 'rgba(255, 215, 0, 0.8)';
        ctx.shadowBlur = 20 * this.wheelGlow;
        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, 35, 0, Math.PI * 2);
        ctx.stroke();
        
        // الدائرة الداخلية
        const gradient2 = ctx.createRadialGradient(
            this.centerX, this.centerY, 0,
            this.centerX, this.centerY, 20
        );
        gradient2.addColorStop(0, '#ffffff');
        gradient2.addColorStop(0.5, '#ffff00');
        gradient2.addColorStop(1, '#ff6600');
        
        ctx.fillStyle = gradient2;
        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, 20, 0, Math.PI * 2);
        ctx.fill();
        
        // الرمز الأوسط
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#000000';
        ctx.fillText('🎡', this.centerX, this.centerY);
    }
    
    drawLegendaryPointer() {
        const ctx = this.ctx;
        
        // رسم السهم العلوي
        const pointerSize = 25;
        const pointerY = 15;
        
        // ظل السهم
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.beginPath();
        ctx.moveTo(this.centerX + 1, pointerY + 1);
        ctx.lineTo(this.centerX - pointerSize + 1, pointerY + pointerSize + 1);
        ctx.lineTo(this.centerX + pointerSize + 1, pointerY + pointerSize + 1);
        ctx.closePath();
        ctx.fill();
        
        // السهم الرئيسي
        const gradient = ctx.createLinearGradient(
            this.centerX, pointerY,
            this.centerX, pointerY + pointerSize
        );
        gradient.addColorStop(0, '#ffff00');
        gradient.addColorStop(0.5, '#ffaa00');
        gradient.addColorStop(1, '#ff6600');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(this.centerX, pointerY);
        ctx.lineTo(this.centerX - pointerSize, pointerY + pointerSize);
        ctx.lineTo(this.centerX + pointerSize, pointerY + pointerSize);
        ctx.closePath();
        ctx.fill();
        
        // حدود السهم
        ctx.strokeStyle = '#ffdd00';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // توهج السهم
        ctx.shadowColor = 'rgba(255, 215, 0, 0.8)';
        ctx.shadowBlur = 15 * this.wheelGlow;
        ctx.stroke();
    }
    
    drawLightingEffects() {
        const ctx = this.ctx;
        
        // تأثير الإضاءة الديناميكية
        const gradient = ctx.createRadialGradient(
            this.centerX - 50, this.centerY - 50, 0,
            this.centerX, this.centerY, this.radius * 1.5
        );
        
        gradient.addColorStop(0, `rgba(255, 255, 255, ${0.1 * this.wheelGlow})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    // ====== 5. PARTICLE SYSTEM ======
    drawParticles(ctx) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            particle.update();
            particle.draw(ctx);
            
            if (particle.isDead()) {
                this.particles.splice(i, 1);
            }
        }
    }
    
    createParticles() {
        for (let i = 0; i < 5; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = this.radius - 30;
            const x = this.centerX + Math.cos(angle) * distance;
            const y = this.centerY + Math.sin(angle) * distance;
            this.particles.push(new FireParticle(x, y));
        }
    }
    
    startParticleAnimation() {
        const animate = () => {
            this.wheelGlow += this.wheelGlowDirection * 0.02;
            if (this.wheelGlow >= 1) this.wheelGlowDirection = -1;
            if (this.wheelGlow <= 0.5) this.wheelGlowDirection = 1;
            
            if (!this.isSpinning && Math.random() > 0.95) {
                this.createParticles();
            }
            
            this.drawWheel();
            this.animationId = requestAnimationFrame(animate);
        };
        animate();
    }
    
    // ====== 6. SPIN LOGIC ======
    async spin() {
        if (this.isSpinning) {
            console.warn("⚠️ Already spinning!");
            return false;
        }
        
        if (!BalanceManager.hasEnoughBalance('TON', this.currentBet)) {
            showToastPro('❌ Insufficient balance!', 'error');
            return false;
        }
        
        this.isSpinning = true;
        this.spinCount++;
        
        BalanceManager.updateBalance('TON', -this.currentBet, 'Wheel Spin');
        
        await this.animateSpin();
        
        const prize = this.calculatePrize();
        await this.showResult(prize);
        
        this.isSpinning = false;
        return true;
    }
    
    async animateSpin() {
        return new Promise((resolve) => {
            const startTime = Date.now();
            const duration = LEGENDARY_WHEEL_CONFIG.SPIN_DURATION;
            const targetRotation = this.currentRotation + LEGENDARY_WHEEL_CONFIG.SPIN_SPEED;
            
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                const easeProgress = this.easeOutCubic(progress);
                this.currentRotation = this.currentRotation + (targetRotation - this.currentRotation) * easeProgress;
                
                // إنشاء جزيئات أثناء الدوران
                if (Math.random() > 0.8) {
                    this.createParticles();
                }
                
                this.drawWheel();
                
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
    
    calculatePrize() {
        const normalizedRotation = ((this.currentRotation % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        const segmentAngle = (Math.PI * 2) / LEGENDARY_WHEEL_CONFIG.SEGMENTS;
        const prizeIndex = Math.floor(normalizedRotation / segmentAngle) % LEGENDARY_WHEEL_CONFIG.PRIZES.length;
        
        return LEGENDARY_WHEEL_CONFIG.PRIZES[prizeIndex];
    }
    
    async showResult(prize) {
        await this.playWinEffects(prize);
        
        if (prize.amount === 0) {
            if (prize.icon === '🍀') {
                showToastPro('🍀 Good luck next time!', 'info');
            } else if (prize.icon === '🆓') {
                showToastPro('🆓 Free spin stored!', 'success');
                if (userData.wheel) userData.wheel.freeSpins = (userData.wheel.freeSpins || 0) + 1;
            }
            return;
        }
        
        BalanceManager.updateBalance(prize.currency, prize.amount, 'Wheel Win');
        
        const message = prize.mega 
            ? `👑👑👑 MEGA JACKPOT! ${prize.amount} ${prize.currency}!`
            : prize.jackpot 
            ? `🎰🎰🎰 JACKPOT! ${prize.amount} ${prize.currency}!`
            : `🎡 YOU WON! ${prize.amount} ${prize.currency}!`;
        
        showToastPro(message, 'success');
        
        if (typeof showWinPopup !== 'undefined') {
            showWinPopup(prize.amount, prize.currency, prize.mega ? 'mega' : prize.jackpot ? 'jackpot' : 'big');
        }
    }
    
    async playWinEffects(prize) {
        this.shake();
        this.flashLights(prize.jackpot || prize.mega);
        
        if (typeof VegasAudio !== 'undefined') {
            if (prize.mega) {
                VegasAudio.megaJackpot?.();
            } else if (prize.jackpot) {
                VegasAudio.jackpot();
            } else if (prize.amount > 0) {
                VegasAudio.win();
            }
        }
        
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    shake() {
        if (!this.canvas) return;
        this.canvas.classList.add('shake-intense');
        setTimeout(() => this.canvas.classList.remove('shake-intense'), 500);
    }
    
    flashLights(isJackpot) {
        if (!this.canvas) return;
        const intensity = isJackpot ? 'intense' : 'normal';
        this.canvas.classList.add(`flash-${intensity}`);
        setTimeout(() => this.canvas.classList.remove(`flash-${intensity}`), 800);
    }
    
    setupEventListeners() {
        const spinBtn = document.getElementById('wheelSpinBtn');
        const freeBtn = document.getElementById('wheelFreeBtn');
        
        if (spinBtn) {
            spinBtn.addEventListener('click', () => this.spin());
            this.listeners.push({ element: spinBtn, event: 'click', handler: () => this.spin() });
        }
        
        if (freeBtn) {
            freeBtn.addEventListener('click', () => this.spinFree());
            this.listeners.push({ element: freeBtn, event: 'click', handler: () => this.spinFree() });
        }
        
        console.log("✅ Legendary Wheel event listeners attached");
    }
    
    async spinFree() {
        if (userData.wheel && userData.wheel.freeSpins > 0) {
            userData.wheel.freeSpins--;
            const originalBet = this.currentBet;
            this.currentBet = 0;
            
            const result = await this.spin();
            
            this.currentBet = originalBet;
            return result;
        } else {
            showToastPro('❌ No free spins available!', 'error');
        }
    }
    
    destroy() {
        this.listeners.forEach(({ element, event, handler }) => {
            element.removeEventListener(event, handler);
        });
        this.listeners = [];
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        console.log("✅ Legendary Wheel destroyed");
    }
}

// ====== 7. EXPORT ======
window.LegendaryFireWheel = LegendaryFireWheel;

let legendaryWheelInstance = null;

function initLegendaryWheel() {
    if (legendaryWheelInstance) {
        legendaryWheelInstance.destroy();
    }
    legendaryWheelInstance = new LegendaryFireWheel('wheelCanvas');
    console.log("✅ Legendary Fire Wheel Initialized");
}

window.initLegendaryWheel = initLegendaryWheel;

console.log("✅ Legendary Fire Wheel loaded successfully");
