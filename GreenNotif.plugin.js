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
        const targetElements = document.querySelectorAll('.numberBadge-37OJ3S');
        const style = document.createElement('style');

        style.textContent = `
            .numberBadge-37OJ3S {
                background-color: rgba(0, 255, 0, 1) !important;
                color: black !important;
            }
        `;

        document.head.appendChild(style);
    }

    resetBackground() {
        const targetElements = document.querySelectorAll('.numberBadge-37OJ3S');
        const style = document.createElement('style');

        style.textContent = '.numberBadge-37OJ3S { background-color: var(--status-danger) !important; color: white !important;}';
        document.head.appendChild(style);
    }
}
