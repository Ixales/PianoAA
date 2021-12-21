class Tableau1 extends Phaser.Scene {
    /**
     * Précharge les assets
     */
    preload() {
        this.load.image('tiplouf', 'img/tiplouf.jpg');
        this.load.image('pokedex', 'img/whos_that_pokemon.png');
        this.load.image('tiploufNoir', 'img/TiploufNoir.png');

    }

    create() {

        this.add.image(0,0, 'pokedex').setOrigin(0,0);


        this.TiploufNoir=this.add.image(300,300,'tiploufNoir').setOrigin(0,0);
        this.TiploufNoir.alpha=0;
        this.initKeyboard2();

        this.Tiplouf=this.add.image(300,300,'tiplouf').setOrigin(0,0);
        this.Tiplouf.alpha=0;
        this.initKeyboard1();




    }


    initKeyboard1(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.Z:

                    if (me.Tiplouf.alpha === 0) {
                        me.Tiplouf.setAlpha(1)
                    } else {
                        me.Tiplouf.setAlpha(0)
                    }
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {

            }
        });

    }
    initKeyboard2(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.A:

                    if (me.TiploufNoir.alpha === 0) {
                        me.TiploufNoir.setAlpha(1)
                    } else {
                        me.TiploufNoir.setAlpha(0)
                    }
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {

            }
        });

    }


}