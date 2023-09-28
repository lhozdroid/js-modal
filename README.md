# Vanilla JS Modal

- [Description](#description)
- [Features](#features)
- [Usage](#usage)
  - [Instantiation](#instantiation)
  - [Modal Types](#modal-types)
    - [Success Modal](#success-modal)
    - [Warning Modal](#warning-modal)
    - [Danger Modal](#danger-modal)
    - [Light Modal](#light-modal)
    - [Dark Modal](#dark-modal)
  - [Loading Modal](#loading-modal)
  - [Close the Modal](#close-the-modal)
  - [Event Handling](#event-handling)
- [Modal Types and Spinners](#modal-types-and-spinners)
- [License](#license)

## Description <a name="description"></a>

The Vanilla JS Modal is a lightweight javascript class for creating dialog or loading modals. It provides a simple way to generate modals with different styles such as success, warning, danger, light, and dark, along with customizable messages.

### Features <a name="features"></a>

- Modal types: success, warning, danger, dark, light.
- Loading modals with various spinner options.
- Closable modals with a close button.
- Customizable title and message.

## Usage <a name="usage"></a>

### Instantiation <a name="instantiation"></a>

To create a new modal instance, you can use the Modal class. You can customize the modal by passing a configuration object.

```javascript
const myModal = new Modal({
    type: ModalType.SUCCESS,   // Modal type (default: ModalType.DANGER)
    class: "custom-modal",     // Additional CSS class for customization
    title: "Success",          // Modal title (default: "Alert")
    message: "Operation successful!", // Modal message (default: "Modal message")
    closable: true,            // Whether the modal can be closed (default: true)
    spinner: null              // Spinner type for loading modals (default: null)
});
```

### Modal Types <a name="modal-types"></a>

The Modal class includes static methods for creating different types of modals.

#### Success Modal <a name="success-modal"></a>

```javascript
const successModal = Modal.success("Operation successful", "Success", true);
```

#### Warning Modal <a name="warning-modal"></a>

```javascript
const warningModal = Modal.warning("Warning message", "Warning", true);
```

#### Danger Modal <a name="danger-modal"></a>

```javascript
const dangerModal = Modal.danger("Error occurred", "Danger", true);
```

#### Light Modal <a name="light-modal"></a>

```javascript
const lightModal = Modal.light("Informational message", "Message", true);
```

#### Dark Modal <a name="dark-modal"></a>

```javascript
const darkModal = Modal.dark("Dark-themed message", "Message", true);
```

#### Loading Modal <a name="loading-modal"></a>

The loading static method creates a loading modal with a specified message and spinner type.

```javascript
const loadingModal = Modal.loading("Loading data...", ModalSpinner.SPINNER);
```

### Closing the Modal <a name="close-the-modal"></a>

You can close the modal programmatically using the close method.

```javascript
myModal.close();
```

### Event Handling <a name="event-handling"></a>

You can set an event handler for the modal's close action using the onClose property.

```javascript
myModal.onClose = (closedModal) => {
    console.log("Modal closed:", closedModal);
};
```

## Modal Types and Spinners <a name="modal-types-and-spinners"></a>

The ModalType and ModalSpinner objects define the available modal types and spinner options.

```javascript
// Modal types
const ModalType = {
    DANGER: "danger",
    WARNING: "warning",
    SUCCESS: "success",
    DARK: "dark",
    LIGHT: "light"
};

// Modal spinners
const ModalSpinner = {
    CIRCLE: "circle",
    GEAR: "gear",
    // ... (other spinner options)
    SPINNER: "spinner"
};
```

## License <a name="licensegith"></a>

This project is licensed under the MIT License.