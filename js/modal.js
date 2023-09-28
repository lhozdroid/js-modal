/**
 * Creates a dialog or loading modal for vanilla JS
 */
class Modal {
    #config = {
        type: ModalType.DANGER,
        class: null,
        title: "Alert",
        message: "Modal message",
        closable: true,
        spinner: null
    };

    #backdrop = null;
    #modal = null;
    #onClose = null;

    /**
     * Default constructor
     * @param config
     */
    constructor(config) {
        this.#config = this.#extend(this.#config, config);

        this.#setBackdrop();
        this.#setModal();
    }

    /**
     * Sets the on close event
     * @param method
     */
    set onClose(method) {
        this.#onClose = method;
    }

    /**
     * Creates a success modal
     * @param message
     * @param title
     * @param closable
     */
    static success(message, title = "Success", closable = true) {
        return new Modal({
            "type": ModalType.SUCCESS,
            "title": title,
            "message": message,
            "closable": closable
        });
    }

    /**
     * Creates a warning modal
     * @param message
     * @param title
     * @param closable
     */
    static warning(message, title = "Warning", closable = true) {
        return new Modal({
            "type": ModalType.WARNING,
            "title": title,
            "message": message,
            "closable": closable
        });
    }

    /**
     * Creates a danger modal
     * @param message
     * @param title
     * @param closable
     */
    static danger(message, title = "Danger", closable = true) {
        return new Modal({
            "type": ModalType.DANGER,
            "title": title,
            "message": message,
            "closable": closable
        });
    }

    /**
     * Creates a light modal
     * @param message
     * @param title
     * @param closable
     */
    static light(message, title = "Message", closable = true) {
        return new Modal({
            "type": ModalType.LIGHT,
            "title": title,
            "message": message,
            "closable": closable
        });
    }

    /**
     * Creates a dark modal
     * @param message
     * @param title
     * @param closable
     */
    static dark(message, title = "Message", closable = true) {
        return new Modal({
            "type": ModalType.DARK,
            "title": title,
            "message": message,
            "closable": closable
        });
    }

    /**
     * Creates a loading modal
     * @param message
     * @param spinner
     */
    static loading(message, spinner = ModalSpinner.SPINNER) {
        return new Modal({
            "message": message,
            "spinner": spinner
        });
    }

    /**
     * Closes the modal
     */
    close() {
        this.#backdrop.classList.remove("fade-in-fwd");
        this.#modal.classList.remove("slide-in-blurred-top");

        this.#backdrop.classList.add("fade-out");
        this.#modal.classList.add("slide-out-blurred-top");

        setTimeout(() => {
            this.#backdrop.remove();
            this.#modal.remove();

            if (this.#onClose != null) this.#onClose(this);
        }, 1000);
    }

    /**
     *
     */
    #setBackdrop() {
        // language=HTML
        this.#backdrop = new DOMParser().parseFromString(`
			<div class="modal-backdrop fade-in-fwd"></div>
        `, "text/html").body.firstChild;

        document.querySelector("body").append(this.#backdrop);
    }

    /**
     *
     */
    #setModal() {
        const header = this.#header();
        const body = this.#body();

        // language=HTML
        this.#modal = new DOMParser().parseFromString(`
            <div class="modal slide-in-blurred-top ${this.#config.type} ${this.#config.class != null ? this.#config.class : ""}">
                ${header}
                ${body}
            </div>
        `, "text/html").body.firstChild;

        // Sets the close action (if present)
        if (this.#config.spinner == null && this.#config.closable) {
            this.#modal.querySelector("div.close").addEventListener("click", (e) => {
                this.close();
            });
        }

        // Adds the modal to the body
        document.querySelector("body").append(this.#modal);
    }

    /**
     *
     */
    #header() {
        // language=HTML
        return this.#config.spinner == null ? `
            <div class="modal-header">
                <h4>${this.#config.title}</h4>
                ${this.#config.closable ? `<div class="close"></div>` : ""}
            </div>
        ` : "";
    }

    /**
     *
     */
    #body() {
        if (this.#config.spinner == null) {
            // language=HTML
            return `
                <div class="modal-body">
                    ${this.#config.message}
                </div>
            `;
        } else {
            // language=HTML
            return `
                <div class="modal-spinner">
                    <div class="spinner-icon ${this.#config.spinner}"></div>
                    <div class="spinner-message">
                        <span>${this.#config.message}</span>
                    </div>
                </div>
            `;
        }
    }

    /**
     *
     * @param base
     * @param extensions
     * @returns {{}|*}
     */
    #extend(base, ...extensions) {
        if (!base) {
            return {};
        }

        for (const obj of extensions) {
            if (!obj) {
                continue;
            }

            for (const [key, value] of Object.entries(obj)) {
                switch (Object.prototype.toString.call(value)) {
                    case "[object Object]":
                        base[key] = base[key] || {};
                        base[key] = this.#extend(base[key], value);
                        break;
                    case "[object Array]":
                        base[key] = this.#extend(new Array(value.length), value);
                        break;
                    default:
                        base[key] = value;
                }
            }
        }

        return base;
    }
}

/**
 * Modal types
 * @type {{}}
 */
const ModalType = {
    DANGER: "danger",
    WARNING: "warning",
    SUCCESS: "success",
    DARK: "dark",
    LIGHT: "light"
};

/**
 * Modal spinners
 * @type {{}}
 */
const ModalSpinner = {
    CIRCLE: "circle",
    GEAR: "gear",
    GEARS: "gears",
    HOURGLASS: "hourglass",
    IPHONE_1: "iphone-1",
    IPHONE_2: "iphone-2",
    SEARCH: "search",
    SPINNER: "spinner"
};