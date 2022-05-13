class Controls {
    constructor() {
        this.foward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        this.#addKeyboardListeners() //a private methos that should not be asccessed outside of this class
    }

    # addKeyboardListeners() {
        // on key press
        document.onkeydown = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = true
                case "ArrowRight":
                    this.right = true
                case "ArrowUp":
                    this.foward = true
                case "ArrowDown":
                    this.reverse = true
            }
            console.table(this)
        }
        // on key release
        document.onkeyup = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = false
                case "ArrowRight":
                    this.right = false
                case "ArrowUp":
                    this.foward = false
                case "ArrowDown":
                    this.reverse = false
            }
            console.table(this)
        }
    }
}