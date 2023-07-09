//META{"name":"ChangeNotifColour","website":"https://budstesting.rf.gd","source":"https://github.com/bud3699/DiscordPingColourChangeBD", "author": "bud", "authorLink": "https://github.com/bud3699"}*//

class ChangeNotifColour {
    getName() {
        return "ChangeNotifColour";
    }

    getDescription() {
        return "Changes the background color of a specific element to green";
    }

    getVersion() {
        return "1.0";
    }

    getAuthor() {
        return "bud";
    }

    start() {
        this.changeBackground();
    }

    stop() {
        this.resetBackground();
    }

    changeBackground() {
    const targetElement = document.querySelector('.inputDefault-Ciwd-S');

    const existingStyle = document.querySelector('.changeNotifColour-style');

    if (existingStyle) {
        existingStyle.remove();
    }

    const style = document.createElement('style');
    style.classList.add('changeNotifColour-style');
    style.textContent = `
        .numberBadge-37OJ3S {
            background-color: rgba(0, 255, 0, 1) !important;
            color: black !important;
        }

        .inputDefault-Ciwd-S {
            background-color: rgba(0, 0, 0, 0.7) !important;
        }
    `;

    document.head.appendChild(style);
    }



    resetBackground() {
        const targetElements = document.querySelectorAll('.numberBadge-37OJ3S');
        const style = document.createElement('style');
	
	
        style.textContent = `
		.numberBadge-37OJ3S { 
			background-color: var(--status-danger) !important; 
			color: white !important;
		}

		.inputDefault-Ciwd-S { 
			background-color: rgba(30,31,34,255) !important;
		}
	`;

	
        document.head.appendChild(style);
    }
}
