class Tableau1 {
    /**
     * Précharge les assets
     */
    preload() {
        this.load.image('tiplouf', 'img/tiplouf.jpg');
    }

    create(){

        let tiplouf=this.add.image(-300,60, 'tiplouf').setOrigin(0,0);
        //this.tiplouf.add();
    }



    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown'), function(kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.A:

                    if (me.filterNeige.alpha === 0) {
                        me.filterNeige.setAlpha(1)
                    } else {
                        me.filterNeige.setAlpha(0)
                    }
                    break;
            }
        }
    }
}