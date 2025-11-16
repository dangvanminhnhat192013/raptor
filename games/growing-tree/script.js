class Tree {
    constructor() {
        this.stage = 0;
        this.water = 100;
        this.sunlight = 100;
        this.score = 0;
        this.updateInterval = null;
        this.messageTimeout = null;
    }

    init() {
        this.updateStats();
        this.startUpdateLoop();
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('waterBtn').addEventListener('click', () => this.addWater());
        document.getElementById('sunlightBtn').addEventListener('click', () => this.adjustSunlight());
        document.getElementById('fertilizeBtn').addEventListener('click', () => this.fertilize());
    }

    startUpdateLoop() {
        this.updateInterval = setInterval(() => {
            this.water = Math.max(0, this.water - 1);
            this.sunlight = Math.max(0, this.sunlight - 1);
            this.updateStats();
            this.checkConditions();
        }, 1000);
    }

    updateStats() {
        document.getElementById('water').textContent = Math.round(this.water);
        document.getElementById('sunlight').textContent = Math.round(this.sunlight);
        document.getElementById('score').textContent = this.score;
    }

    showMessage(text, duration = 2000) {
        const messageEl = document.getElementById('message');
        messageEl.textContent = text;
        
        if (this.messageTimeout) {
            clearTimeout(this.messageTimeout);
        }
        
        this.messageTimeout = setTimeout(() => {
            messageEl.textContent = '';
        }, duration);
    }

    addWater() {
        if (this.water < 100) {
            this.water = Math.min(100, this.water + 30);
            this.score += 5;
            this.showMessage('💧 Đã tưới nước! +5 điểm');
            this.updateStats();
            this.checkGrowth();
        } else {
            this.showMessage('⚠️ Cây đã đủ nước!');
        }
    }

    adjustSunlight() {
        if (this.sunlight < 100) {
            this.sunlight = Math.min(100, this.sunlight + 30);
            this.score += 5;
            this.showMessage('☀️ Đã điều chỉnh ánh sáng! +5 điểm');
            this.updateStats();
            this.checkGrowth();
        } else {
            this.showMessage('⚠️ Cây đã có đủ ánh sáng!');
        }
    }

    fertilize() {
        this.score += 10;
        this.showMessage('🌱 Đã bón phân! +10 điểm');
        this.updateStats();
        this.checkGrowth();
    }

    checkConditions() {
        if (this.water < 30) {
            this.showMessage('⚠️ Cây cần được tưới nước!');
        }
        if (this.sunlight < 30) {
            this.showMessage('⚠️ Cây cần thêm ánh sáng!');
        }
    }

    checkGrowth() {
        if (this.score >= 100 && this.stage < 3) {
            this.grow();
        }
    }

    grow() {
        if (this.stage < 3) {
            this.stage++;
            document.getElementById('tree').className = `tree stage-${this.stage}`;
            this.showMessage('🌳 Cây đã lớn lên!', 3000);
            this.score = 0;
            this.updateStats();
        }
    }
}

// Khởi tạo trò chơi
const tree = new Tree();
tree.init();