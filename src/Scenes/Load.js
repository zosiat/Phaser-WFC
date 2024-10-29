class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");

        
    }

    preload() {

        this.load.setPath("./assets/");

    }

    create(){
        console.log("Assets preloaded");
        this.scene.start("wfcScene");
    }
}