function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            winner: '',
            isDisabled: false,
            isDisabledSPAttck: false,
            isDisabledHeal: false,
            currentRound: 0,
            qtySpcAtck: 3,
            qtyHealPlyr: 2,
            battleLog: [],
        }
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth + '%' }
        },
        playerBarStyles() {
            return { width: this.playerHealth + '%' }
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = '';
            this.isDisabled = false;
            this.isDisabledSPAttck = false;
            this.isDisabledHeal = false;
            this.currentRound = 0;
            this.qtySpcAtck = 3;
            this.qtyHealPlyr = 2;
            this.battleLog = [];
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            if (this.monsterHealth >= attackValue) {
                this.monsterHealth -= attackValue;
            } else {
                this.monsterHealth = 0;
            }
            this.addBattleLog('player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            if (this.playerHealth >= attackValue) {
                this.playerHealth -= attackValue;
            } else {
                this.playerHealth = 0;
            }
            this.addBattleLog('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            this.currentRound++;
            this.qtySpcAtck -= 1;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.addBattleLog('player', 'spattack', attackValue);
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            this.qtyHealPlyr -= 1;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addBattleLog('player', 'heal', healValue);
            this.attackPlayer();
        },
        surender() {
            this.winner = 'Player Surender, What A Shame !!';
            this.isDisabled = true;
            this.qtySpcAtck = 0;
            this.qtyHealPlyr = 0;
        },
        addBattleLog(who, what, value) {
            this.battleLog.unshift({
                actionBy: who.charAt(0).toUpperCase() + who.slice(1),
                actionType: what,
                actionValue: value
            })
        }
    },
    watch: {
        playerHealth() {
            if (this.playerHealth === 0) {
                this.winner = 'The Winner Is Monster';
                this.isDisabled = true;
                this.qtySpcAtck = 0;
                this.qtyHealPlyr = 0;
            } else if (this.playerHealth === 0 && this.monsterHealth === this.playerHealth) {
                this.winner = 'Draw Every Body Win';
                this.isDisabled = true;
                this.qtySpcAtck = 0;
                this.qtyHealPlyr = 0;
            }
        },
        monsterHealth() {
            if (this.monsterHealth === 0) {
                this.winner = 'The Winner Is Player';
                this.isDisabled = true;
                this.qtySpcAtck = 0;
                this.qtyHealPlyr = 0;
            } else if (this.monsterHealth === 0 && this.monsterHealth === this.playerHealth) {
                this.winner = 'Draw Every Body Win';
                this.isDisabled = true;
                this.qtySpcAtck = 0;
                this.qtyHealPlyr = 0;
            }
        },
        qtySpcAtck() {
            if (this.qtySpcAtck === 0) {
                this.isDisabledSPAttck = true;
            }
        },
        qtyHealPlyr() {
            if (this.qtyHealPlyr === 0) {
                this.isDisabledHeal = true;
            }
        }
    },
});
app.mount('#game');