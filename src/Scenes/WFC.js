class WFC extends Phaser.Scene {
    constructor() {
        super("wfcScene");
        this.grid = [];
        this.tiles = {};
        
    }

    create(){

        //reload key
        this.reload = this.input.keyboard.addKey('R');

        //instruction text
        //document.getElementById('description').innerHTML = '<h2>WFC.js</h2><br>R: Restart Scene';

    }

    update(){

        //restart logic
        if (Phaser.Input.Keyboard.JustDown(this.reload)) {
            this.scene.restart();
        }


    }
}