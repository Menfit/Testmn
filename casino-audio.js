// ============================================
// PROFESSIONAL CASINO AUDIO SYSTEM - v2.0
// نظام صوتي احترافي مع مؤثرات كازينو حقيقية
// ============================================

// ====== 1. AUDIO CONFIGURATION ======
const AUDIO_CONFIG = {
    VOLUME: {
        MASTER: 0.7,
        EFFECTS: 0.6,
        MUSIC: 0.4,
        AMBIENCE: 0.3
    },
    SOUND_EFFECTS: {
        SPIN_START: { freq: 800, duration: 200, type: 'sine' },
        SPIN_LOOP: { freq: 600, duration: 100, type: 'sine' },
        SPIN_END: { freq: 1000, duration: 300, type: 'sine' },
        WIN_SMALL: { freq: 800, duration: 200, type: 'sine' },
        WIN_BIG: { freq: 1200, duration: 400, type: 'sine' },
        WIN_JACKPOT: { freq: 1600, duration: 600, type: 'sine' },
        COIN_DROP: { freq: 400, duration: 150, type: 'sine' },
        BUTTON_CLICK: { freq: 500, duration: 100, type: 'sine' },
        ERROR: { freq: 200, duration: 300, type: 'sine' },
        SUCCESS: { freq: 1000, duration: 200, type: 'sine' }
    }
};

// ====== 2. AUDIO CONTEXT MANAGER ======
class AudioContextManager {
    constructor() {
        this.audioContext = null;
        this.masterGain = null;
        this.effectsGain = null;
        this.musicGain = null;
        this.ambienceGain = null;
        this.isInitialized = false;
        this.oscillators = [];
        this.gainNodes = [];
    }
    
    init() {
        if (this.isInitialized) return;
        
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioContext = new AudioContext();
            
            // إنشاء عقد التحكم بالصوت
            this.masterGain = this.audioContext.createGain();
            this.effectsGain = this.audioContext.createGain();
            this.musicGain = this.audioContext.createGain();
            this.ambienceGain = this.audioContext.createGain();
            
            // ربط العقد
            this.effectsGain.connect(this.masterGain);
            this.musicGain.connect(this.masterGain);
            this.ambienceGain.connect(this.masterGain);
            this.masterGain.connect(this.audioContext.destination);
            
            // ضبط مستويات الصوت
            this.masterGain.gain.value = AUDIO_CONFIG.VOLUME.MASTER;
            this.effectsGain.gain.value = AUDIO_CONFIG.VOLUME.EFFECTS;
            this.musicGain.gain.value = AUDIO_CONFIG.VOLUME.MUSIC;
            this.ambienceGain.gain.value = AUDIO_CONFIG.VOLUME.AMBIENCE;
            
            this.isInitialized = true;
            console.log("✅ Audio Context initialized");
        } catch (e) {
            console.error("❌ Audio Context error:", e);
        }
    }
    
    playTone(frequency, duration, type = 'sine', gain = 0.3) {
        if (!this.isInitialized) this.init();
        if (!this.audioContext) return;
        
        try {
            const now = this.audioContext.currentTime;
            const osc = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            osc.type = type;
            osc.frequency.value = frequency;
            
            gainNode.gain.setValueAtTime(gain, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration / 1000);
            
            osc.connect(gainNode);
            gainNode.connect(this.effectsGain);
            
            osc.start(now);
            osc.stop(now + duration / 1000);
            
            this.oscillators.push(osc);
            this.gainNodes.push(gainNode);
        } catch (e) {
            console.error("Error playing tone:", e);
        }
    }
    
    playChord(frequencies, duration, gain = 0.3) {
        frequencies.forEach(freq => {
            this.playTone(freq, duration, 'sine', gain / frequencies.length);
        });
    }
    
    cleanup() {
        this.oscillators.forEach(osc => {
            try { osc.stop(); } catch (e) {}
        });
        this.oscillators = [];
        this.gainNodes = [];
    }
}

// ====== 3. VEGAS AUDIO CLASS ======
class VegasAudio {
    constructor() {
        this.audioManager = new AudioContextManager();
        this.isInitialized = false;
        this.soundEnabled = true;
    }
    
    init() {
        if (this.isInitialized) return;
        this.audioManager.init();
        this.isInitialized = true;
        console.log("✅ Vegas Audio System initialized");
    }
    
    // ====== SPIN SOUNDS ======
    spinStart() {
        if (!this.soundEnabled) return;
        this.audioManager.playTone(600, 100, 'sine', 0.4);
    }
    
    spinLoop() {
        if (!this.soundEnabled) return;
        // صوت حلقي متكرر
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.audioManager.playTone(400 + i * 100, 80, 'sine', 0.3);
            }, i * 100);
        }
    }
    
    spinEnd() {
        if (!this.soundEnabled) return;
        // تسلسل صوتي نهائي
        this.audioManager.playChord([800, 1000, 1200], 300, 0.4);
    }
    
    // ====== WIN SOUNDS ======
    coin() {
        if (!this.soundEnabled) return;
        this.audioManager.playTone(1000, 100, 'sine', 0.3);
    }
    
    win() {
        if (!this.soundEnabled) return;
        // صوت فوز صغير
        this.audioManager.playChord([800, 1000], 200, 0.4);
        setTimeout(() => {
            this.audioManager.playChord([1000, 1200], 200, 0.4);
        }, 150);
    }
    
    bigWin() {
        if (!this.soundEnabled) return;
        // صوت فوز كبير
        const frequencies = [600, 800, 1000, 1200, 1400];
        frequencies.forEach((freq, i) => {
            setTimeout(() => {
                this.audioManager.playTone(freq, 200, 'sine', 0.4);
            }, i * 150);
        });
    }
    
    jackpot() {
        if (!this.soundEnabled) return;
        // صوت جاكبوت مثير
        const pattern = [
            { freq: 800, delay: 0 },
            { freq: 1200, delay: 100 },
            { freq: 1600, delay: 200 },
            { freq: 2000, delay: 300 },
            { freq: 2400, delay: 400 },
            { freq: 2000, delay: 500 },
            { freq: 1600, delay: 600 },
            { freq: 1200, delay: 700 }
        ];
        
        pattern.forEach(({ freq, delay }) => {
            setTimeout(() => {
                this.audioManager.playTone(freq, 150, 'sine', 0.5);
            }, delay);
        });
    }
    
    megaJackpot() {
        if (!this.soundEnabled) return;
        // صوت ميجا جاكبوت مذهل
        this.jackpot();
        setTimeout(() => this.jackpot(), 1500);
    }
    
    // ====== BUTTON SOUNDS ======
    buttonClick() {
        if (!this.soundEnabled) return;
        this.audioManager.playTone(500, 100, 'sine', 0.3);
    }
    
    buttonHover() {
        if (!this.soundEnabled) return;
        this.audioManager.playTone(600, 50, 'sine', 0.2);
    }
    
    // ====== ERROR/SUCCESS SOUNDS ======
    error() {
        if (!this.soundEnabled) return;
        this.audioManager.playTone(200, 300, 'sine', 0.4);
    }
    
    success() {
        if (!this.soundEnabled) return;
        this.audioManager.playChord([800, 1000], 200, 0.4);
    }
    
    tick() {
        if (!this.soundEnabled) return;
        this.audioManager.playTone(700, 50, 'sine', 0.2);
    }
    
    // ====== CONTROL SOUNDS ======
    notification() {
        if (!this.soundEnabled) return;
        this.audioManager.playChord([1000, 1200], 150, 0.3);
    }
    
    alert() {
        if (!this.soundEnabled) return;
        this.audioManager.playChord([600, 800], 200, 0.4);
    }
    
    // ====== VOLUME CONTROL ======
    setVolume(volume) {
        if (this.audioManager.masterGain) {
            this.audioManager.masterGain.gain.value = Math.max(0, Math.min(1, volume));
        }
    }
    
    setEffectsVolume(volume) {
        if (this.audioManager.effectsGain) {
            this.audioManager.effectsGain.gain.value = Math.max(0, Math.min(1, volume));
        }
    }
    
    setMusicVolume(volume) {
        if (this.audioManager.musicGain) {
            this.audioManager.musicGain.gain.value = Math.max(0, Math.min(1, volume));
        }
    }
    
    toggleSound(enabled) {
        this.soundEnabled = enabled;
    }
    
    cleanup() {
        this.audioManager.cleanup();
    }
}

// ====== 4. GLOBAL INSTANCE ======
const VegasAudio = new VegasAudio();

// ====== 5. HAPTIC FEEDBACK ======
class HapticFeedback {
    static light() {
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
    }
    
    static medium() {
        if (navigator.vibrate) {
            navigator.vibrate(30);
        }
    }
    
    static heavy() {
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }
    
    static pattern(pattern) {
        if (navigator.vibrate) {
            navigator.vibrate(pattern);
        }
    }
    
    static success() {
        if (navigator.vibrate) {
            navigator.vibrate([50, 100, 50]);
        }
    }
    
    static error() {
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100, 50, 100]);
        }
    }
    
    static jackpot() {
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100, 50, 100, 50, 100]);
        }
    }
}

// ====== 6. EXPORT ======
window.VegasAudio = VegasAudio;
window.HapticFeedback = HapticFeedback;

// ====== 7. INITIALIZATION ======
document.addEventListener('click', () => {
    if (!VegasAudio.isInitialized) {
        VegasAudio.init();
    }
}, { once: true });

console.log("✅ Professional Casino Audio System loaded");
